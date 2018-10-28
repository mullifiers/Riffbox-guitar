import asyncio
from aiohttp import web
from aiohttp_index import IndexMiddleware



#===================================== Socketio for Status Update ===========================#

import socketio
from time import sleep
sio = socketio.AsyncServer(async_mode='aiohttp')
app = web.Application(middlewares=[IndexMiddleware()])
sio.attach(app)

@sio.on('connect', namespace='/chat')
async def connect(sid, environ):
    print("connect ", sid)
    await sio.emit('started','hi, thats working pari...yo', namespace='/chat')

@sio.on('chat message', namespace='/chat')
async def message(sid, data):
    print("message ", data)
    await sio.emit('reply', room=sid)

@sio.on('disconnect', namespace='/chat')
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('start_process', namespace='/chat')
def process(sid):
    print('processing..........' )
    transcriptor()


#===================================== Socketio for Status Update ===========================#



#==================================== Routing User Interfaces =================================#

app.router.add_static('/status/', '../notifications',name='status')
app.router.add_static('/player/', '../tabplayer',name='player')
app.router.add_static('/', '../spectrogram/build')

#==============================================================================================#






#--------------------------------- locally Store MP3 ---------------------------------------------#

# The local mp3 file is also used to render SPECTROGRAM User Interface

import shutil
async def store_mp3(request):
    data = await request.post()
    print('receiced fileeeeeeeeee')

    # input_file contains the actual file data which needs to be
    # stored somewhere.


    input_file = data
    print(data)
    a=input_file['mp3'].file
    path='../spectrogram/build/bin/snd/empty.mp3'
    dist=open(path,'b+w')
    shutil.copyfileobj(a,dist)

    return web.HTTPFound('/')

app.router.add_route('POST','/store_mp3', store_mp3)

#--------------------------------- locally Store MP3 ---------------------------------------------#

def notify(d):
    async def sendstatus():
        await sio.emit('status', d,namespace='/chat')
    sio.start_background_task(sendstatus)




def transcriptor():

    #======================== Start Config ========================#
    notify('checking folder paths')

    import os
    folder = 'cache'
    output= 'output'
    if not os.path.exists(folder):
        os.makedirs(folder)
    if not os.path.exists(output):
        os.makedirs(output)

    sleep(6)
    print('asdf')
    #==============================================================#



    ########################################## Convert audio file to wav #################################
    notify('converting compressed audio files to *.wav file format')
    import pydub

    d=os.path.join(os.getcwd(),'ffmpeg','ffmpeg.exe')
    pydub.AudioSegment.converter=d

    from os import listdir
    from os.path import isfile, join

    onlyfiles = [f for f in listdir(folder) if isfile(join(folder, f))];
    print(onlyfiles)

    for f in onlyfiles:
        a = pydub.AudioSegment.from_file(os.path.join(folder,f), f.split('.').pop())
        a.export(os.path.join(output,'io.wav'), 'wav')


    sleep(7)
    ######################################################################################################



    ##################################### WAON wav to midi transcriptor ##################################
    notify('transcribing resultant wav file into midi sequence for PART_GUITAR')
    import subprocess

    proc = subprocess.Popen("./waon/waon.exe -i ./output/io.wav -o ./midi/final.mid",
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE)
    proc.wait()
    sleep(8)
    ######################################################################################################











    notify('cleaning up file chunks created in cache')
    #======================== END CLEANUP =========================#
    # import shutil
    # shutil.rmtree(folder)
    # shutil.rmtree(output)
    #==============================================================#
    sleep(4)
    notify('done')



#============================= Make Package ========================#
if __name__ == '__main__':
    web.run_app(app,host='localhost',port=8008)
#===================================================================#


















############################################# Melodia Algorithm #######################################



import librosa
import vamp
import numpy as np
from midiutil.MidiFile import MIDIFile
from scipy.signal import medfilt

def save_midi(outfile, notes, tempo):

    track = 0
    time = 0
    midifile = MIDIFile(1)

    # Add track name and tempo.
    midifile.addTrackName(track, time, "MIDI TRACK")
    midifile.addTempo(track, time, tempo)

    channel = 0
    volume = 100

    for note in notes:
        onset = note[0] * (tempo / 60.)
        duration = note[1] * (tempo / 60.)
        # duration = 1
        pitch = note[2]
        midifile.addNote(track, channel, pitch, onset, duration, volume)

    # And write it to disk.
    binfile = open(outfile, 'wb')
    midifile.writeFile(binfile)
    binfile.close()


def midi_to_notes(midi, fs, hop, smooth, minduration):

    # smooth midi pitch sequence first
    if (smooth > 0):
        filter_duration = smooth  # in seconds
        filter_size = int(filter_duration * fs / float(hop))
        if filter_size % 2 == 0:
            filter_size += 1
        midi_filt = medfilt(midi, filter_size)
    else:
        midi_filt = midi
    # print(len(midi),len(midi_filt))

    notes = []
    p_prev = None
    duration = 0
    onset = 0
    for n, p in enumerate(midi_filt):
        if p == p_prev:
            duration += 1
        else:
            # treat 0 as silence
            if p_prev > 0:
                # add note
                duration_sec = duration * hop / float(fs)
                # only add notes that are long enough
                if duration_sec >= minduration:
                    onset_sec = onset * hop / float(fs)
                    notes.append((onset_sec, duration_sec, p_prev))

            # start new note
            onset = n
            duration = 1
            p_prev = p

    # add last note
    if p_prev > 0:
        # add note
        duration_sec = duration * hop / float(fs)
        onset_sec = onset * hop / float(fs)
        notes.append((onset_sec, duration_sec, p_prev))

    return notes


def hz2midi(hz):

    # convert from Hz to midi note
    hz_nonneg = hz.copy()
    # hz_nonneg[hz <= 0] = 0
    midi = 69 + 12 * np.log2(hz_nonneg / 440.)
    midi[midi <= 0] = 0

    # round
    midi = np.round(midi)

    return midi


def audio_to_midi_melodia(infile, outfile, bpm, smooth=0.25, minduration=0.1):

    # define analysis parameters
    fs = 44100  # sample rate
    hop = 128

    # load audio using librosa
    print("Loading audio...")
    data, sr = librosa.load(infile, sr=fs, mono=True)

    # extract melody using melodia vamp plugin
    print("Extracting melody f0 with MELODIA...")
    melody = vamp.collect(data, sr, "mtg-melodia:melodia",
                          parameters={"voicing": 0})

    # hop = melody['vector'][0]
    pitch = melody['vector'][1]

    # missing 0's to compensate for starting timestamp
    # pitch = np.insert(pitch, 0, [0]*8)

    # debug
    # np.asarray(pitch).dump('f0.npy')
    # print(len(pitch))

    # convert f0 to midi notes
    print("Converting Hz to MIDI notes...")
    midi_pitch = hz2midi(pitch)

    # segment sequence into individual midi notes
    notes = midi_to_notes(midi_pitch, fs, hop, smooth, minduration)

    # save note sequence to a midi file
    print("Saving MIDI to disk...")
    save_midi(outfile, notes, bpm)

    print("Conversion complete.")



#audio_to_midi_melodia('./guitar_tab_bin/io.wav', './midi/hello.mid', 80)



##################################################################################################