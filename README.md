# RiffBox
#### Automatic Guitar Tablature transcription
`MEAN` | `TensorFlow` | `IPC-sockets` | `python` | `c++` | `GCP-GKE`

>Here, Its an attempt to implement the IEEE-Xplore paper by Daniel R. Tuohy : "Creating Tablature and Arranging Music for Guitar with GAs and ANNs". there are approx. ~250 quantized freq notes in a typical 5 sec. audio clip and each note can be played on all the 6 strings of a typical guitar. Thus, we need to search an arrangement out of 6^250 using heuristics for ease of human hand. The Project is currently under alpha-development and, deployed on flex container instances using GKE .UI Components: spectrogram - MusicLab, AlphaTex player, ng-Material, socket.io powered notifications. Audioprocessing libs: Audocity, ffmpeg, WaON

*Landing UI: SPECTROGRAM - Google music lab experiments*

![home](https://raw.githubusercontent.com/mullifiers/riffbox/master/.idea/Screenshot%20(6).png)
      
*Progress Notification UI: Sockets.io Based *

![home](https://raw.githubusercontent.com/mullifiers/riffbox/master/.idea/Screenshot%20(7).png)

*Tablature Player UI: ALPHATeX*

![home](https://raw.githubusercontent.com/mullifiers/riffbox/master/.idea/Screenshot%20(8).png)
