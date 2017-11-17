/*! angular-groovy - v0.0.1 - 2016-09-13 *//*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


window.google = window.google || {};
google.maps = google.maps || {};
(function() {

  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
  }

  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };

  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"m@279000000",["https://mts0.google.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=m@279000000\u0026src=api\u0026hl=en\u0026"]],[["http://khm0.googleapis.com/kh?v=161\u0026hl=en\u0026","http://khm1.googleapis.com/kh?v=161\u0026hl=en\u0026"],null,null,null,1,"161",["https://khms0.google.com/kh?v=161\u0026hl=en\u0026","https://khms1.google.com/kh?v=161\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"h@279000000",["https://mts0.google.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=h@279000000\u0026src=api\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026","http://mt1.googleapis.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"t@132,r@279000000",["https://mts0.google.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026","https://mts1.google.com/vt?lyrs=t@132,r@279000000\u0026src=api\u0026hl=en\u0026"]],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=84\u0026hl=en\u0026","http://khm1.googleapis.com/kh?v=84\u0026hl=en\u0026"],null,null,null,null,"84",["https://khms0.google.com/kh?v=84\u0026hl=en\u0026","https://khms1.google.com/kh?v=84\u0026hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt?hl=en\u0026","http://mt1.googleapis.com/mapslt?hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=en\u0026","http://mt1.googleapis.com/mapslt/ft?hl=en\u0026"]],[["http://mt0.googleapis.com/vt?hl=en\u0026","http://mt1.googleapis.com/vt?hl=en\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=en\u0026","http://mt1.googleapis.com/mapslt/loom?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en\u0026","https://mts1.googleapis.com/mapslt?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en\u0026"]]],["en","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com",null,"https://maps.google.com"],["http://maps.gstatic.com/maps-api-v3/api/js/18/14","3.18.14"],[3062753088],1,null,null,null,null,null,"",null,null,0,"http://khm.googleapis.com/mz?v=161\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"m",279000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",132],[0,"r",132000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],0],[null,[[4,"t",132],[0,"r",132000000]],[null,"en","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],3],[null,null,[null,"en","US",null,18],0],[null,null,[null,"en","US",null,18],3],[null,null,[null,"en","US",null,18],6],[null,null,[null,"en","US",null,18],0],["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt",279000000,132],2,500,["http://geo0.ggpht.com/cbk","http://g0.gstatic.com/landmark/tour","http://g0.gstatic.com/landmark/config","","http://www.google.com/maps/preview/log204","","http://static.panoramio.com.storage.googleapis.com/photos/"],["https://www.google.com/maps/api/js/master?pb=!1m2!1u18!2s14!2sen!3sUS!4s18/14","https://www.google.com/maps/api/js/widget?pb=!1m2!1u18!2s14!2sen"],1,0], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps/api/js");
})();

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
(function(C){'use strict';function N(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ta(a){if(null==a||Va(a))return!1;if(L(a)||G(a)||F&&a instanceof F)return!0;
var b="length"in Object(a)&&a.length;return T(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||ta(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&D(n)?da(n)?a[m]=new Date(n.valueOf()):Wa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(D(a[m])||(a[m]=L(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Pb(a,va.call(arguments,1),!1)}function Zd(a){return Pb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Rb(a,b){return S(Object.create(a),b)}function A(){}function Xa(a){return a}function ha(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ma}function y(a){return"undefined"===typeof a}function w(a){return"undefined"!==
typeof a}function D(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function G(a){return"string"===typeof a}function T(a){return"number"===typeof a}function da(a){return"[object Date]"===ma.call(a)}function z(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===ma.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function $d(a){return a&&T(a.length)&&
ae.test(ma.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!D(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw xa("cpws");var b=!1,c=e(a);void 0===c&&(c=L(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}
var f=[],g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");L(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?na(a.getTime(),
b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||L(b)||da(b)||Wa(b))return!1;d=U();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!z(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(va.call(b,d))}function ab(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function bb(a,b){if(!y(a))return T(b)||(b=b?2:null),JSON.stringify(a,ce,b)}function xc(a){return G(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ma?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),w(e)&&(f=w(f)?zc(f):!0,ua.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];q(a,function(a,c){L(a)?q(a,function(a){b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))}):b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ea(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ea(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,G(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),
b(d,c?[c]:[],e))}function Bc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===C.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=cb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function ge(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function he(a){a=ca.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}
function Cc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Dc){var b=rb();(qa=y(b)?C.jQuery:b?C[b]:void 0)&&qa.fn.on?(F=qa,S(qa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=qa.cleanData,qa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=qa._data(f,"events"))&&c.$destroy&&qa(f).triggerHandler("$destroy");a(b)}):F=O;ca.element=F;Dc=!0}}function sb(a,
b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&L(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?ab(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=F(va.call(a,0,e))),c.push(b);return c||a}function U(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=N("$injector"),c=N("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||N;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return R}}function b(a,
d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return R}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],u=a("$injector","invoke","push",e),R={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider",
"register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:u,run:function(a){p.push(a);return this}};h&&u(h);return R})}})}function ia(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function le(a){S(a,{bootstrap:Bc,copy:pa,extend:S,merge:Zd,equals:na,element:F,forEach:q,injector:cb,noop:A,bind:ab,
toJson:bb,fromJson:xc,identity:Xa,isUndefined:y,isDefined:w,isString:G,isFunction:z,isObject:D,isNumber:T,isElement:Qb,isArray:L,version:me,isDate:da,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:he,$$minErr:N,$$csp:Ba,reloadWithDebugInfo:ge});Ub=ke(C);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Fc).directive({a:oe,input:Gc,textarea:Gc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,
ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Lc);a.provider({$anchorScroll:Xe,
$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Mc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$jsonpCallbacks:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,
$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function db(a){return a.replace(Kf,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=$a(f,d.childNodes);d=e.firstChild;
d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function O(a){if(a instanceof O)return a;var b;G(a)&&(a=W(a),b=!0);if(!(this instanceof O)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new O(a)}if(b){b=C.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,
b){b||eb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)eb(d[c])}function Rc(a,b,d,c){if(w(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];w(d)&&Za(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function eb(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:
(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete fb[d],a.ng339=void 0))}function xb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Pf,d=fb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=w(d),e=!c&&b&&!D(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];S(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&
q(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=
b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(w(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",
a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[wa(a)]&&d}function Rf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||
Sf;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return S(O,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&
(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Yd)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function cb(a,b){function d(a){return function(b,c){if(D(b))q(b,uc(a));else return a(b,c)}}function c(a,b){Qa(a,
"service");if(z(b)||L(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||L(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{G(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):Pa(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,
c,f){var g=[];a=cb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);L(a)&&(a=a[a.length-1]);d=11>=Ea?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=
L(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:cb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ra([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ha(b),!1)}),constant:d(function(a,b){Qa(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=
p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ca.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),u={},R=h(u,function(a,b){var c=p.get(a+"Provider",b);return B.invoke(c.$get,c,void 0,a)}),B=R;n.$injectorProvider={$get:ha(R)};var r=g(a),B=R.get("$injector");B.strictDi=b;q(r,function(a){a&&B.invoke(a)});return B}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window",
"$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=G(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===
a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){G(a)&&(a=a.split(" "));var b=U();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return D(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(R--,0===R)for(;B.length;)try{B.pop()()}catch(b){d.error(b)}}}
function f(){t=null;g();h()}function g(){r=K();r=y(r)?null:r;na(r,E)&&(r=E);E=r}function h(){if(v!==k.url()||J!==r)v=k.url(),J=r,q(M,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,u={};k.isMock=!1;var R=0,B=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){R++};k.notifyWhenNoOutstandingRequests=function(a){0===R?a():B.push(a)};var r,J,v=l.href,fa=b.find("base"),t=null,K=c.history?function(){try{return m.state}catch(a){}}:
A;g();J=r;k.url=function(b,d,e){y(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=J===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;J=e;!c.history||h&&f?(h||(t=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(t=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),J=r);t&&(t=b);return k}return t||l.href.replace(/%27/g,"'")};k.state=function(){return r};var M=[],H=!1,E=null;k.onUrlChange=function(b){if(!H){if(c.history)F(a).on("popstate",
f);F(a).on("hashchange",f);H=!0}M.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=fa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;R++;c=n(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};k.defer.cancel=function(a){return u[a]?(delete u[a],p(a),e(A),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,
d)}]}function ef(){this.$get=function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw N("$cacheFactory")("iid",a);var g=0,h=S({},c,{id:a}),k=U(),l=c&&c.capacity||Number.MAX_VALUE,m=U(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=U();g=0;m=U();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Fc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=U();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!L(b)&&D(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=U();this.directive=function B(b,d){Qa(b,"directive");G(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=
a.invoke(f);z(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,uc(B));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||L(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||
b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return w(a)?(p=a,this):p};var u=10;this.onChangesTtl=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,t,K,M,H,E){function I(){try{if(!--qa)throw Y=void 0,ga("infchng",u);K.$apply(function(){for(var a=
[],b=0,c=Y.length;b<c;++b)try{Y[b]()}catch(d){a.push(d)}Y=void 0;if(a.length)throw a;})}finally{qa++}}function Da(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function P(a,b,c){pa.innerHTML="<span "+b+">";b=pa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function x(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Pc(k,a[g]=C.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(da(m,F("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,r,v;if(n)for(v=Array(c.length),m=0;m<h.length;m+=3)f=h[m],v[f]=c[f];else v=c;m=0;for(p=h.length;m<p;)k=v[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,r=c.transcludeOnThisElement?za(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?za(a,b):null,c(f,l,k,d,r)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,m,p,n,r=0;r<a.length;r++){k=new Da;l=$b(a[r],[],k,0===r?d:void 0,e);(f=l.length?oa(l,a[r],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[r].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(r,f,k),p=!0,n=n||f;f=null}return p?g:null}function za(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=U(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?za(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr;switch(a.nodeType){case 1:O(b,Aa(wa(a)),"E",d,e);for(var g,k,l,m,p=a.attributes,n=0,r=p&&p.length;n<r;n++){var v=!1,u=!1;g=p[n];k=g.name;l=W(g.value);g=Aa(k);if(m=Ba.test(g))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(g=g.match(Ca))&&V(g[1])&&(v=k,u=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));g=Aa(k.toLowerCase());f[g]=k;if(m||!c.hasOwnProperty(g))c[g]=l,Uc(a,g)&&(c[g]=!0);ia(a,b,l,g,m);O(b,g,"A",d,e,v,u)}f=a.className;D(f)&&(f=f.animVal);if(G(f)&&""!==f)for(;a=h.exec(f);)g=Aa(a[2]),O(b,g,"C",d,e)&&(c[g]=W(a[3])),f=f.substr(a.index+a[0].length);break;case Ma:if(11===Ea)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ca(b,a.nodeValue);break;case 8:hb(a,b,c,d,e)}b.sort(Z);
return b}function hb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Aa(f[1]);O(b,h,"M",d,e)&&(c[h]=W(f[2]))}}catch(k){}}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function Zc(a,b,c){return function(d,e,f,g,h){e=N(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||
(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Zc(a,c,d));a.require=x.require;a.directiveName=I;if(u===x||x.$$isolateScope)a=ja(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Zc(b,c,d));b.require=x.require;b.directiveName=I;if(u===x||x.$$isolateScope)b=ja(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);fa&&(e=t);c||(c=fa?I.parent():I);if(d){var f=l.$$slots[d];if(f)return f(a,
b,e,c,s);if(y(f))throw ga("noslot",d,ya(I));}else return l(a,b,e,c,s)}var n,E,x,M,B,t,P,I;b===f?(g=d,I=d.$$element):(I=F(f),g=new Da(I,d));B=e;u?M=e.$new(!0):r&&(B=e.$parent);l&&(P=m,P.$$boundTransclude=l,P.isSlotFilled=function(a){return!!l.$$slots[a]});v&&(t=ag(I,g,P,v,M,e,u));u&&(aa.$$addScopeInfo(I,M,!0,!(H&&(H===u||H===u.$$originalDirective))),aa.$$addScopeClass(I,!0),M.$$isolateBindings=u.$$isolateBindings,E=ka(e,g,M,M.$$isolateBindings,u),E.removeWatches&&M.$on("$destroy",E.removeWatches));
for(n in t){E=v[n];x=t[n];var Zb=E.$$bindings.bindToController;x.bindingInfo=x.identifier&&Zb?ka(B,g,x.instance,Zb,E):{};var K=x();K!==x.instance&&(x.instance=K,I.data("$"+E.name+"Controller",K),x.bindingInfo.removeWatches&&x.bindingInfo.removeWatches(),x.bindingInfo=ka(B,g,x.instance,Zb,E))}q(v,function(a,b){var c=a.require;a.bindToController&&!L(c)&&D(c)&&S(t[b].instance,ib(b,c,I,t))});q(t,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$doCheck)&&
(B.$watch(function(){b.$doCheck()}),b.$doCheck());z(b.$onDestroy)&&B.$on("$destroy",function(){b.$onDestroy()})});n=0;for(E=h.length;n<E;n++)x=h[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);var s=e;u&&(u.template||null===u.templateUrl)&&(s=M);a&&a(s,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)x=k[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);q(t,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,
r=l.newScopeDirective,v=l.controllerDirectives,u=l.newIsolateScopeDirective,H=l.templateDirective,E=l.nonTlbTranscludeDirective,M=!1,B=!1,fa=l.hasElementTranscludeDirective,t=d.$$element=F(b),x,I,P,K=e,s,Fa=!1,za=!1,w,A=0,C=a.length;A<C;A++){x=a[A];var G=x.$$start,hb=x.$$end;G&&(t=N(b,G,hb));P=void 0;if(n>x.priority)break;if(w=x.scope)x.templateUrl||(D(w)?(X("new/isolated scope",u||r,x,t),u=x):X("new/isolated scope",u,x,t)),r=r||x;I=x.name;if(!Fa&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&
!x.$$tlb)){for(w=A+1;Fa=a[w++];)if(Fa.transclude&&!Fa.$$tlb||Fa.replace&&(Fa.templateUrl||Fa.template)){za=!0;break}Fa=!0}!x.templateUrl&&x.controller&&(w=x.controller,v=v||U(),X("'"+I+"' controller",v[I],x,t),v[I]=x);if(w=x.transclude)if(M=!0,x.$$tlb||(X("transclusion",E,x,t),E=x),"element"==w)fa=!0,n=x.priority,P=t,t=d.$$element=F(aa.$$createComment(I,d[I])),b=t[0],ea(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,K=ac(za,P,e,n,g&&g.name,{nonTlbTranscludeDirective:E});else{var oa=U();P=F(Xb(b)).contents();
if(D(w)){P=[];var Q=U(),O=U();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;oa[b]=null;O[b]=c});q(t.contents(),function(a){var b=Q[Aa(wa(a))];b?(O[b]=!0,oa[b]=oa[b]||[],oa[b].push(a)):P.push(a)});q(O,function(a,b){if(!a)throw ga("reqslot",b);});for(var V in oa)oa[V]&&(oa[V]=ac(za,oa[V],e))}t.empty();K=ac(za,P,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});K.$$slots=oa}if(x.template)if(B=!0,X("template",H,x,t),H=x,w=z(x.template)?x.template(t,d):x.template,
w=xa(w),x.replace){g=x;P=Vb.test(w)?$c(da(x.templateNamespace,W(w))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ga("tplrt",I,"");ea(f,t,b);C={$attr:{}};w=$b(b,[],C);var Z=a.splice(A+1,a.length-(A+1));(u||r)&&T(w,u,r);a=a.concat(w).concat(Z);$(d,C);C=a.length}else t.html(w);if(x.templateUrl)B=!0,X("template",H,x,t),H=x,x.replace&&(g=x),p=ba(a.splice(A,a.length-A),t,d,f,M&&K,h,k,{controllerDirectives:v,newScopeDirective:r!==x&&r,newIsolateScopeDirective:u,templateDirective:H,nonTlbTranscludeDirective:E}),
C=a.length;else if(x.compile)try{s=x.compile(t,d,K);var Y=x.$$originalDirective||x;z(s)?m(null,ab(Y,s),G,hb):s&&m(ab(Y,s.pre),ab(Y,s.post),G,hb)}catch(ca){c(ca,ya(t))}x.terminal&&(p.terminal=!0,n=Math.max(n,x.priority))}p.scope=r&&!0===r.scope;p.transcludeOnThisElement=M;p.templateOnThisElement=B;p.transclude=K;l.hasElementTranscludeDirective=fa;return p}function ib(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&
e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else D(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=U(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"==p&&(p=b[l.name]);m=t(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}
function T(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],{$$isolateScope:b,$$newScope:c})}function O(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var p;e=a.get(e+"Directive");for(var n=0,r=e.length;n<r;n++)try{if(p=e[n],(y(h)||h>p.priority)&&-1!=p.restrict.indexOf(g)){l&&(p=Rb(p,{$$start:l,$$end:m}));if(!p.$$bindings){var u=p,v=p,x=p.name,H={isolateScope:null,bindToController:null};D(v.scope)&&(!0===v.bindToController?(H.bindToController=d(v.scope,x,!0),H.isolateScope={}):
H.isolateScope=d(v.scope,x,!1));D(v.bindToController)&&(H.bindToController=d(v.bindToController,x,!0));if(D(H.bindToController)){var E=v.controller,M=v.controllerAs;if(!E)throw ga("noctrl",x);if(!Xc(E,M))throw ga("noident",x);}var t=u.$$bindings=H;D(t.isolateScope)&&(p.$$isolateBindings=t.isolateScope)}b.push(p);k=p}}catch(I){c(I)}}return k}function V(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function $(a,b){var c=b.$attr,
d=a.$attr;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ba(a,b,c,d,f,g,h,k){var l=[],m,p,n=b[0],r=a.shift(),u=Rb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),H=z(r.templateUrl)?r.templateUrl(b,c):r.templateUrl,E=r.templateNamespace;b.empty();e(H).then(function(e){var v,M;e=xa(e);if(r.replace){e=
Vb.test(e)?$c(da(E,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw ga("tplrt",r.name,H);e={$attr:{}};ea(d,b,v);var B=$b(v,[],e);D(r.scope)&&T(B,!0);a=B.concat(a);$(c,e)}else v=n,b.html(e);a.unshift(u);m=oa(a,v,c,f,b,r,g,h,k);q(d,function(a,c){a==v&&(d[c]=b[0])});for(p=s(b[0].childNodes,f);l.length;){e=l.shift();M=l.shift();var t=l.shift(),I=l.shift(),B=b[0];if(!e.$$destroyed){if(M!==n){var P=M.className;k.hasElementTranscludeDirective&&r.replace||(B=Xb(v));ea(t,F(M),B);x(F(B),P)}M=m.transcludeOnThisElement?
za(e,m.transclude,I):I;m(p,e,B,d,M)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=za(b,m.transclude,e)),m(p,b,c,d,a)))}}function Z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ca(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function da(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ha(a,b){if("srcdoc"==b)return M.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=
c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function ia(a,c,d,e,f){var g=ha(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",ya(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=U());if(m.test(e))throw ga("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,
b):k.$set(e,a)}))}}}})}}function ea(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ja(a,
b){return S(function(){return a.apply(null,arguments)},a,b)}function la(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function ka(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(I),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,v,u,x,H;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(G(a)||Ga(a))g(h,a,d[h]),
d[h]=a});c.$$observers[m].$$scope=a;v=c[m];G(v)?d[h]=b(v)(a):Ga(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);H=u.literal?na:function(a,b){return a===b||a!==a&&b!==b};x=u.assign||function(){v=d[h]=u(a);throw ga("nonassign",c[m],m,f.name);};v=d[h]=u(a);p=function(b){H(b,d[h])||(H(b,v)?x(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,u.literal);k.push(p);break;case "<":if(!ua.call(c,
m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);var E=d[h]=u(a);l[h]=new Fb(bc,d[h]);p=a.$watch(u,function(a,b){if(b===a){if(b===E)return;b=E}g(h,a,b);d[h]=a},u.literal);k.push(p);break;case "&":u=c.hasOwnProperty(m)?n(c[m]):A;if(u===A&&p)break;d[h]=function(b){return u(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ta=/^\w/,pa=C.document.createElement("div"),qa=u,Y;Da.prototype={$normalize:Aa,$addClass:function(a){a&&0<a.length&&
H.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&H.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&H.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&H.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===
f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&w(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));g=W(g[2*l]).split(/\s/);f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ta.test(e)?this.$$element.attr(e,b):P(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=U()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){Za(e,b)}}};var ra=b.startSymbol(),sa=b.endSymbol(),xa="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa)},Ba=/^ngAttr[A-Z]/,Ca=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;aa.$$addBindingClass=
p?function(a){x(a,"ng-binding")}:A;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;aa.$$addScopeClass=p?function(a,b){x(a,b?"ng-isolate-scope":"ng-scope")}:A;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return aa}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function Aa(a){return db(a.replace(Yc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),
f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&G(b))return b;if(G(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");D(b)?S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector",
"$window",function(d,c){function e(a,b,c,d){if(!a||!D(a.$scope))throw N("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&G(k)&&(n=k);if(G(f)){k=f.match(cd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Pa(f,m,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(D(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},
{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return F(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return D(a)?da(a)?a.toISOString():bb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||y(a)||(L(a)?q(a,function(a){b.push(ea(c)+"="+ea(cc(a)))}):b.push(ea(c)+"="+ea(cc(a))))});
return b.join("&")}}}function of(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(L(a)?q(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!da(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ea(e)+"="+ea(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(G(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function ed(a){var b=
U(),d;G(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&q(a,function(a,d){var f=Q(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(z(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return D(a)&&"[object File]"!==
ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?bb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ec),put:ia(ec),patch:ia(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return w(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory",
"$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,d={};q(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=gd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!D(b))throw N("$http")("badreq",b);if(!G(b.url))throw N("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,
transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);g.method=ub(g.method);g.paramSerializer=G(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],p=k.when(g);q(R,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,
a.responseError)});p=c(p,h);p=p.then(function(b){var c=b.headers,d=gd(b.data,fd(c),void 0,b.transformRequest);y(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});p=c(p,m);d?(p.success=function(a){Pa(a,"fn");p.then(function(b){a(b.data,b.status,b.headers,g)});return p},p.error=function(a){Pa(a,"fn");p.then(null,function(b){a(b.data,b.status,b.headers,g)});return p}):(p.success=hd("success"),
p.error=hd("error"));return p}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}E&&(200<=a&&300>a?E.put(P,[a,c,ed(d),e]):E.remove(P));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?M.resolve:M.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function t(a){n(a.data,a.status,ia(a.headers()),
a.statusText)}function R(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var M=k.defer(),H=M.promise,E,I,Da=c.headers,P=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R,R);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=D(c.cache)?c.cache:D(a.cache)?a.cache:u);E&&(I=E.get(P),w(I)?I&&z(I.then)?I.then(t,t):L(I)?n(I[1],I[0],ia(I[2]),I[3]):n(I,200,{},"OK"):E.put(P,H));y(I)&&((I=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:
void 0)&&(Da[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,P,d,l,Da,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return H}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");a.paramSerializer=G(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var R=[];q(c,function(a){R.unshift(G(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(S({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function pf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=
e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);d&&d(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,u,R,B){function r(){fa&&fa();t&&t.abort()}function J(b,c,e,
f,g){w(M)&&d.cancel(M);fa=t=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(e))var v=c.createCallback(h),fa=f(h,v,function(a,b){var d=200===a&&c.getResponse(v);J(l,a,d,"",b);c.removeCallback(v)});else{var t=b(e,h);t.open(e,h,!0);q(m,function(a,b){w(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==Y(h).protocol?404:
0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;q(R,function(a,b){t.addEventListener(b,a)});q(B,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(u)try{t.responseType=u}catch(K){if("json"!==u)throw K;}t.send(y(k)?null:k)}if(0<n)var M=d(r,n);else n&&z(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse",
"$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,p,n){function J(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);var d;if(n&&!w(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=bb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),
v=ha(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}n=!!n;var q,t,K=0,M=[],H=[];v=f.length;for(var E=[],I=[];K<v;)if(-1!=(q=f.indexOf(a,K))&&-1!=(t=f.indexOf(b,q+l)))K!==q&&E.push(g(f.substring(K,q))),K=f.substring(q+l,t),M.push(K),H.push(d(K,J)),K=t+m,I.push(E.length),E.push("");else{K!==v&&E.push(g(f.substring(K)));break}p&&1<E.length&&Ka.throwNoconcat(f);if(!k||M.length){var Da=function(a){for(var b=0,c=M.length;b<c;b++){if(n&&y(a[b]))return;E[I[b]]=a[b]}return E.join("")};return S(function(a){var b=
0,d=M.length,e=Array(d);try{for(;b<d;b++)e[b]=H[b](a);return Da(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:M,$$watchDelegate:function(a,b){var c;return a.$watchGroup(H,function(d,e){var f=Da(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,
b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,u):f(r)}var p=4<arguments.length,u=p?va.call(arguments,4):[],R=b.setInterval,q=b.clearInterval,r=0,J=w(m)&&!m,v=(J?c:d).defer(),fa=v.promise;l=w(l)?l:0;fa.$$intervalId=R(function(){J?e.defer(n):a.$evalAsync(n);v.notify(r++);0<l&&r>=l&&(v.resolve(r),q(fa.$$intervalId),delete g[fa.$$intervalId]);J||a.$apply()},k);g[fa.$$intervalId]=v;return fa}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),
delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=qb(a[b]);return a.join("/")}function jd(a,b){var d=Y(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||hg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Y(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path=
"/"+b.$$path)}function ka(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!G(d))throw Gb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+
a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ka(a,c))?(g=f,g=w(f=ka(d,f))?b+(ka("/",f)||f):a+g):w(f=ka(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=ka(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,
0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?
f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):
a};this.html5Mode=function(a){return Ga(a)?(b.enabled=a,this):D(a)?(Ga(a.enabled)&&(b.enabled=a.enabled),Ga(a.requireBase)&&(b.requireBase=a.requireBase),Ga(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,
b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var u=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,u,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var R=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=F(a.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;
var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Y(h.animVal).href);R.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){y(ka(u,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),
k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Sa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw X("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a.window===a)throw X("isecwindow",b);if(a.children&&
(a.nodeName||a.prop&&a.attr&&a.find))throw X("isecdom",b);if(a===Object)throw X("isecobj",b);}return a}function nd(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a===jg||a===kg||a===lg)throw X("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw X("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===
typeof b?a:a+b}function V(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,
b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:
!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,
b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,
left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=U(),b=U(),d={"true":!0,
"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,H;e=e||J;switch(typeof c){case "string":H=c=c.trim();var E=e?b:a;g=E[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:B;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));E[H]=
g}return u(g,d);case "function":return u(c,d);default:return u(A,d)}}function h(a){function b(c,d,e,f){var g=J;J=!0;try{return a(c,d,e,f)}finally{J=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,
e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=k,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&
d.$$postDigest(function(){w(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){w(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function u(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,
d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var R=Ba().noUnsafeEval,B={csp:R,expensiveChecks:!1,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},r={csp:R,expensiveChecks:!0,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},J=!1;g.$$runningExpensiveChecks=function(){return J};return g}]}function wf(){this.$get=
["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=N("$q",TypeError),h=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};S(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});S(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(D(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=
1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},
l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=d.prototype;n.defer=h;n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=m;n.resolve=m;n.all=function(a){var b=
new f,c=0,d=L(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};n.race=function(a){var b=h();q(a,function(a){m(a).then(b.resolve,b.reject)});return b.promise};return n}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,
e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=N("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ea&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount=
{};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(J.$$phase)throw d("inprog",J.$$phase);J.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function B(){for(;t.length;)try{t.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){J.$apply(B)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,
1);return function(){0<=Za(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)ua.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,u,r,q=b,t,y=[],A,C;n("$digest");h.$$checkUrlChange();this===J&&null!==e&&(h.defer.cancel(e),B());c=null;do{r=!1;t=this;for(p=0;p<v.length;p++){try{C=v[p],C.scope.$eval(C.expression,C.locals)}catch(F){f(F)}c=null}v.length=0;a:do{if(p=t.$$watchers)for(u=
p.length;u--;)try{if(a=p[u])if(m=a.get,(g=m(t))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,t),5>q&&(A=4-q,y[A]||(y[A]=[]),y[A].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(G){f(G)}if(!(p=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(p=t.$$nextSibling);)t=t.$parent}while(t=p);if((r||v.length)&&
!q--)throw J.$$phase=null,d("infdig",b,y);}while(r||v.length);for(J.$$phase=null;K<w.length;)try{w[K++]()}catch(D){f(D)}w.length=K=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===J&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){J.$$phase||v.length||h.defer(function(){v.length&&J.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){w.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{J.$$phase=null}}catch(b){f(b)}finally{try{J.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var J=new m,v=J.$$asyncQueue=[],w=J.$$postDigestQueue=[],t=J.$$applyAsyncQueue=[],K=0;return J}]}function ne(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Y(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(G(a)){if(-1<a.indexOf("***"))throw sa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw sa("imatcher");}function xd(a){var b=[];w(a)&&q(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw sa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||y(b)||
""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=Y(e.toString()),n,p,u=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){u=!0;break}if(u)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){u=!1;break}if(u)return e;throw sa("insecurl",e.toString());}if(d===la.HTML)return f(e);throw sa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ea)throw sa("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(la,function(a,b){var d=Q(b);c[db("parse_as_"+d)]=function(b){return e(a,b)};c[db("get_trusted_"+d)]=function(b){return f(a,b)};c[db("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,
l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!e||m&&n||(m=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ea)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}
function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!G(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;L(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,S({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",
g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ca.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=
a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=va.call(arguments,3),n=w(l)&&!l,p=(n?c:d).defer(),u=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,
m))}catch(b){p.reject(b),e(b)}finally{delete g[u.$$timeoutId]}n||a.$apply()},k);u.$$timeoutId=q;g[q]=p;return u}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Y(a){Ea&&($.setAttribute("href",a),a=$.href);$.setAttribute("href",a);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,
""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function id(a){a=G(a)?Y(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ff(){this.$get=ha(C)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+
1))));return c}}function Jf(){this.$get=zd}function Mc(a){function b(d,c){if(D(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Cd);b("orderBy",Dd);b("uppercase",ug)}function qg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw N("filter")("notarray",
a);}c=c||"$";var e;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=vg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d,c){var e=D(a)&&d in a;!0===b?b=na:z(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!vc(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?La(f,a[d],b,d,!1):La(f,a,b,d,c)}}function La(a,b,d,c,e,
f){var g=lc(a),h=lc(b);if("string"===h&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c,e);if(L(a))return a.some(function(a){return La(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if("$"!==k.charAt(0)&&La(a[k],b,d,c,!0))return!0;return f?!1:La(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!z(f)&&!y(f)&&(g=k===c,!La(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);
if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;
for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!G(a)&&!T(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+a}function ba(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;G(c)&&(c=yg.test(c)?Z(c):b(c));T(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=zg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));q(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){y(b)&&(b=2);return bb(a,b)}}function sg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(isNaN(b))return a;T(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return G(a)?a.slice(b,d):va.call(a,b,d)}function Dd(a){function b(b){return b.map(function(b){var c=1,d=Xa;if(z(b))d=b;else if(G(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(k)&&(k=a.index),D(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!ta(a))throw N("orderBy")("notarray",a);L(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ta(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a)}function Jd(a,b,d,
c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=
a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Za(g,a);a.$$parentForm=Lb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);c.addClass(a,
Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ua,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=
!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(da(d))return d;if(G(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function p(a){return w(a)&&!da(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var u=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),u&&(a=Sb(a,u)),a});h.$formatters.push(function(a){if(a&&!da(a))throw nb("datefmt",a);if(n(a))return(q=a)&&u&&(q=Sb(q,u,!0)),m("date")(a,c,u);q=null;return""});if(w(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||y(s)||d(a)>=s};g.$observe("min",
function(a){s=p(a);h.$validate()})}if(w(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,
b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(q(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):D(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||U(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}
function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=L(a)?a.map(function(a){return ia(a)}):ia(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Kd(a){function b(a,
b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ga(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,
a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function(a){return G(a)?a.toLowerCase():a},ub=function(a){return G(a)?a.toUpperCase():a},Ea,F,qa,va=[].slice,
bg=[].splice,Dg=[].push,ma=Object.prototype.toString,wc=Object.getPrototypeOf,xa=N("ng"),ca=C.angular||(C.angular={}),Ub,pb=0;Ea=C.document.documentMode;A.$inject=[];Xa.$inject=[];var L=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return G(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!w(Ba.rules)){var a=C.document.querySelector("[ng-csp]")||
C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},rb=function(){if(w(rb.name_))return rb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Dc=!1,Ma=3,me={full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};O.expando="ng339";var fb=O.cache={},Pf=1;O._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Wb=N("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Uf=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=O.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
C.document.readyState?C.setTimeout(b):(this.on("DOMContentLoaded",b),O(C).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[Q(a)]=a});var Vc={};q("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Yb,removeData:eb,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)eb(a[b])}},function(a,b){O[b]=a});q({data:Yb,inheritedData:Cb,scope:function(a){return F.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=db(b);if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=Q(b),Eb[c])if(w(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?c:void 0;else if(w(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(w(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){O.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&y(2==a.length&&
a!==zb&&a!==Sc?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:eb,on:function(a,b,d,c){if(w(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=F(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new O(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new O(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new O(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,F(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new O(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=S(c,b)),b=ia(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){O.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),w(f)&&(f=F(f))):Qc(f,a(this[g],b,c,e));return w(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Ra.prototype={put:function(a,
b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Ra}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=N("$injector");cb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw G(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);
b=Wc(a);q(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var Rd=N("$animate"),$e=function(){this.$get=A},af=function(){var a=new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=G(b)?b.split(" "):L(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?S(k.from,c):c;k.to=k.to?S(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=N("$compile"),bc=new function(){};
Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=N("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=N("$http"),hd=function(a){return function(){throw Gg("legacy",
a);}},Ka=ca.$interpolateMinErr=N("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var rf=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var f="angular.callbacks."+a,g=b(a);c[f]=d[a]=g;return f},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},
removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=N("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||T(a))a=a.toString(),this.$$search=Ac(a);else if(D(a))a=pa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],
function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=y(b)?null:b;return this}});var X=N("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw X("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";
s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,
left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,
operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():
this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw X("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw X("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw X("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>
a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(c,d.$filter);var e="",f;this.stage="assign";
if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Sa,ra,nd,ig,Ib,mg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");
return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&w(a.watchId))b=
b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);
c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Sa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Sa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();
a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=
h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw X("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=
[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,
a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},
assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),
d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw X("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;V(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Sa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Sa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:
a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(ra(g[q](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,
function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,
c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:
d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(w(h)?h:0)-(w(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||
b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,
g,h,k),m+="",Sa(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,
b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,sa=N("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},pg=N("$compile"),$=C.document.createElement("a"),yd=Y(C.location.href);zd.$inject=["$document"];Mc.$inject=["$provide"];var Gd=22,Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var Ag={yyyy:ba("FullYear",4,0,!1,!0),yy:ba("FullYear",2,0,
!0,!0),y:ba("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),LLLL:kb("Month",!1,!0),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/
60),2)+Kb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Bd.$inject=["$locale"];var tg=ha(Q),ug=ha(ub);Dd.$inject=["$parse"];var oe=ha({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?
"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=Aa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",
new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Aa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ea&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,
$setDirty:A,$setPristine:A,$setSubmitted:A};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Ua).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();
n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):A;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);S(n,Lb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,
Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=U();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Td,Nb(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Nb(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Nb(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(da(a))return a;if(G(a)){rc.lastIndex=0;var d=rc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Nb(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!T(a))throw nb("numfmt",
a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){w(a)&&!T(a)&&(a=parseFloat(a));g=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(w(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){w(a)&&!T(a)&&(a=parseFloat(a));h=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[Q(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ha({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=qc("",!0),ze=qc("Odd",0),ye=qc("Even",1),Ae=Ta({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Lc={},Og={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Aa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,B,r,y=function(){B&&(B.remove(),B=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){B=null}),B=r,r=null)};c.$watch(f,function(f){var m=function(){!w(h)||h&&!c.$eval(h)||b()},t=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===q){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==q||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ta({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(L(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Ua="ng-pristine",Mb="ng-dirty",Qd="ng-pending",nb=N("ngModel"),Pg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,u=n,s=null,B,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));
return c};u=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ya(c));};this.$render=A;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var J=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Ua)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Mb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(s);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!T(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===J&&r.$setValidity(a,b)}function g(a){h===J&&c(a)}J++;var h=J;(function(){var a=r.$$parserName||"parse";if(y(B))f(a,null);else return B||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(s);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(B=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){B=!1;break}T(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){u(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&w(d.debounce)&&(d=d.debounce,T(d)?c=d:T(d[b])?c=d[b]:T(d["default"])&&(c=d["default"]));g.cancel(s);c?s=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;B=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,A))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ta({terminal:!0,priority:1E3}),Rg=N("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var w=a&&d(a)||b,r=s&&d(s),y=s?function(a,b){return r(c,b)}:function(a){return Ca(a)},v=function(a,b){return y(a,E(a,b))},A=d(n[2]||n[1]),t=d(n[3]||""),K=d(n[4]||""),z=d(n[8]),H={},E=q?function(a,b){H[q]=b;H[p]=
a;return H}:function(a){H[p]=a;return H};return{trackBy:s,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=E(l,h),l=y(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=K(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=E(d[p],p),r=w(c,q),p=y(r,q),u=A(c,q),H=t(c,q),q=K(c,q),r=new e(p,r,u,H,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return s?ca.copy(a.viewValue):a.viewValue}}}}}var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
t&&p.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];w(c.group)?Db(c.element.parentNode):Db(c.element)}t=K.getOptions();var d={};v&&h.prepend(B);t.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=C,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(C);s.$render();s.$isEmpty(a)||(b=p.readValue(),(K.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),
s.$render()))}var p=l[0],s=l[1],y=k.multiple,B;l=0;for(var r=h.children(),A=r.length;l<A;l++)if(""===r[l].value){B=r.eq(l);break}var v=!!B,z=F(e.cloneNode(!1));z.val("?");var t,K=c(k.ngOptions,h,d),C=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){t.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=t.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=
t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},K.trackBy&&d.$watchCollection(function(){if(L(s.$viewValue))return s.$viewValue.map(function(a){return K.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=t.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),v||B.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||v?(z.remove(),v||h.prepend(B),h.val(""),B.prop("selected",
!0),B.attr("selected",!0)):(v||B.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))},p.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(v||B.remove(),z.remove(),t.getViewValueFromOption(a)):null},K.trackBy&&d.$watch(function(){return K.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(B.remove(),a(B)(d),B.removeClass("ng-scope")):B=F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables,n)}}}}],Ie=["$locale","$interpolate",
"$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},w=b.startSymbol(),B=b.endSymbol(),r=w+l+"-"+n+B,z=ca.noop,v;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&T(v)&&isNaN(v)||
(z(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=N("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var w=l[3]||l[1],y=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,z,v,A,t={$id:Ca};s?r=a(s):(v=function(a,b){return Ca(b)},
A=function(a){return a});return function(a,d,f,g,l){r&&(z=function(b,c,d){y&&(t[y]=b);t[w]=c;t.$index=d;return r(a,t)});var m=U();a.$watchCollection(n,function(f){var g,n,r=d[0],s,u=U(),t,C,F,E,G,D,H;p&&(a[p]=f);if(ta(f))G=f,n=z||v;else for(H in n=z||A,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);t=G.length;H=Array(t);for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],E=n(C,F,g),m[E])D=m[E],delete m[E],u[E]=D,H[g]=D;else{if(u[E])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,E,F);H[g]={id:E,
scope:void 0,clone:void 0};u[E]=!0}for(s in m){D=m[s];E=tb(D.clone);b.leave(E);if(E[0].parentNode)for(g=0,n=E.length;g<n;g++)E[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],D=H[g],D.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);D.clone[0]!=s&&b.move(tb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,w,F,y,C,t)}else l(function(a,c){D.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;u[D.id]=D;e(D.scope,g,w,F,y,C,t)});m=
u})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ta(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,
e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ne=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,
element:b})}}),Tg=N("ngTransclude"),Qe=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw Tg("orphan",ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){a.length?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},Vg=["$element","$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=Ug;d.unknownOption=F(C.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();
return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=
void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){w(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,
d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=w(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||
0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(w(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ha({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw N("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
y(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};C.angular.bootstrap?
C.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),F(C.document).ready(function(){fe(C.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

(function(R,B){'use strict';function Da(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ea(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;Y(a)&&(a=a.join(" "));Y(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Z(a,b,c){var d="";a=Y(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof F)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return F(ta(a))}if(1===a.nodeType)return F(a)}function ta(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Fa(a,b);Ga(a,b)}function Fa(a,b){b.from&&(a.css(b.from),b.from=null)}function Ga(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=$(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==P?d.domOperation:null;ua(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",e=a[c]||a[c+"-add"]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function y(a){return a instanceof F?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Z(b,"ng-",!0));c.addClass&&(d=$(d,Z(c.addClass,"-add")));c.removeClass&&(d=$(d,Z(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function va(a,b){var c=b?"paused":"",d=aa+"PlayState";la(a,[d,c]);return[d,c]}function la(a,
b){a.style[b[0]]=b[1]}function $(a,b){return a?b?a+" "+b:a:b}function Ha(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var g=c.charAt(0);if("-"===g||"+"===g||0<=g)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function wa(a){return 0===a||null!=a}function Ia(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function Ja(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ka(a,b,c){s(c,function(c){a[c]=xa(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,ya,aa,za;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",ya="webkitTransitionEnd transitionend"):(S="transition",ya=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?(aa="WebkitAnimation",za="webkitAnimationEnd animationend"):(aa="animation",za="animationend");var qa=aa+"Delay",Aa=aa+"Duration",ma=S+"Delay",La=S+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:S+"Property",animationDuration:Aa,animationDelay:qa,animationIterationCount:aa+"IterationCount"},Va={transitionDuration:La,transitionDelay:ma,animationDuration:Aa,animationDelay:qa},
Ba,ua,s,Y,xa,ea,Ca,ba,G,J,F,P;B.module("ngAnimate",[],function(){P=B.noop;Ba=B.copy;ua=B.extend;F=B.element;s=B.forEach;Y=B.isArray;G=B.isString;ba=B.isObject;J=B.isUndefined;xa=B.isDefined;Ca=B.isFunction;ea=B.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,n){var I,g;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);g&&(g.$destroy(),g=null);if(e||0===e)g=b.$new(),
n(g,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;G(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}
var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;
return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;
a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return J(a)&&J(b)||J(e)&&J(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,l,C,Wa,Q,t,H,T){function O(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function x(a,b,c){var f=y(b),d=y(a),N=[];(a=h[c])&&s(a,function(a){w.call(a.node,f)?N.push(a.callback):"leave"===c&&w.call(a.node,
d)&&N.push(a.callback)});return N}function r(a,b,c){var f=ta(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,h,v){function r(c,f,d,h){sa(function(){var c=x(T,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||ra.off(a)}):"close"!==d||a[0].parentNode||ra.off(a)});c.progress(f,d,h)}function k(b){var c=a,f=m;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),
f.activeClasses=null);E(a,m);ha(a,m);m.domOperation();A.complete(!b)}var m=Ba(v),p,T;if(a=Oa(a))p=y(a),T=a.parent();var m=oa(m),A=new Q,sa=O();Y(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!G(m.addClass)&&(m.addClass=null);Y(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!G(m.removeClass)&&(m.removeClass=null);m.from&&!ba(m.from)&&(m.from=null);m.to&&!ba(m.to)&&(m.to=null);if(!p)return k(),A;v=[p.className,m.addClass,m.removeClass].join(" ");if(!Xa(v))return k(),
A;var g=0<=["enter","move","leave"].indexOf(h),w=l[0].hidden,t=!f||w||N.get(p);v=!t&&z.get(p)||{};var H=!!v.state;t||H&&1==v.state||(t=!M(a,T,h));if(t)return w&&r(A,h,"start"),k(),w&&r(A,h,"close"),A;g&&K(a);w={structural:g,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:k,options:m,runner:A};if(H){if(d("skip",a,w,v)){if(2===v.state)return k(),A;W(a,v,w);return v.runner}if(d("cancel",a,w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return W(a,v,w),v.runner;
else if(d("join",a,w,v))if(2===v.state)W(a,w,{});else return Sa(a,g?h:null,m),h=w.event=v.event,m=W(a,v,w),v.runner}else W(a,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||e(w));if(!H)return k(),ka(a),A;var C=(v.counter||0)+1;w.counter=C;L(a,1,w);c.$$postDigest(function(){var b=z.get(p),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==C||!f){c&&(E(a,m),ha(a,m));if(c||g&&b.event!==h)m.domOperation(),A.end();
f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,L(a,2),b=Wa(a,h,b.options),A.setHost(b),r(A,h,"start",{}),b.done(function(b){k(!b);(b=z.get(p))&&b.counter===C&&ka(y(a));r(A,h,"close",{})})});return A}function K(a){a=y(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=z.get(a);if(c)switch(b){case 2:c.runner.end();case 1:z.remove(a)}})}function ka(a){a=y(a);a.removeAttribute("data-ng-animate");z.remove(a)}function k(a,b){return y(a)===
y(b)}function M(a,b,c){c=F(l[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,r,e=N.get(y(a));(a=F.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=y(b);b;){d||(d=k(b,g));if(1!==b.nodeType)break;a=z.get(b)||{};if(!h){var p=N.get(b);if(!0===p&&!1!==e){e=!0;break}else!1===p&&(e=!1);h=a.structural}if(J(r)||!0===r)a=F.data(b,"$$ngAnimateChildren"),xa(a)&&(r=a);if(h&&!1===r)break;f||(f=k(b,c));if(f&&d)break;if(!d&&(a=F.data(b,"$ngAnimatePin"))){b=y(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&
d&&f}function L(a,b,c){c=c||{};c.state=b;a=y(a);a.setAttribute("data-ng-animate",b);c=(b=z.get(a))?ua(b,c):c;z.put(a,c)}var z=new C,N=new C,f=null,A=c.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(A(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h=Object.create(null),sa=a.classNameFilter(),Xa=sa?function(a){return sa.test(a)}:function(){return!0},E=V(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
16)},ra={on:function(a,b,c){var f=ta(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});F(b).on("$destroy",function(){z.get(f)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Da(ea(a),"element","not an element");Da(ea(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,
b){var c=arguments.length;if(0===c)b=!!f;else if(ea(a)){var d=y(a);1===c?b=!N.get(d):N.put(d,!b)}else b=f=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,n,I){function g(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;e.put(d,a);for(var K;p;){if(K=e.get(p)){K.processed||(K=b(K));break}p=p.parentNode}(K||
c).children.push(a);return a}var c={children:[]},d,e=new n;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,k=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(k),k=[]);k.push(g.fn);g.children.forEach(function(a){e++;c.push(a)});a--}k.length&&b.push(k);return b}(c)}var u=[],C=V(a);return function(n,Q,t){function H(a){a=
a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function T(a){var b=[],c={};s(a,function(a,d){var h=y(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var k=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:d,element:F(a)}})}else b.push(a)});var d={},e={};s(c,function(c,k){var r=c.from,
p=c.to;if(r&&p){var z=a[r.animationID],g=a[p.animationID],A=r.animationID.toString();if(!e[A]){var n=e[A]={structural:!0,beforeStart:function(){z.beforeStart();g.beforeStart()},close:function(){z.close();g.close()},classes:O(z.classes,g.classes),from:z,to:g,anchors:[]};n.classes.length?b.push(n):(b.push(z),b.push(g))}e[A].anchors.push({out:r.element,"in":p.element})}else r=r?r.animationID:p.animationID,p=r.toString(),d[p]||(d[p]=!0,b.push(a[r]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");
for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function x(a){for(var c=b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===Q&&t.$$domOperationFired||a.end()}function K(b){n.off("$destroy",p);n.removeData("$$animationRunner");
C(n,t);ha(n,t);t.domOperation();L&&a.removeClass(n,L);n.removeClass("ng-animate");k.complete(!b)}t=oa(t);var ka=0<=["enter","move","leave"].indexOf(Q),k=new l({end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),k;n.data("$$animationRunner",k);var M=Ea(n.attr("class"),Ea(t.addClass,t.removeClass)),L=t.tempClasses;L&&(M+=" "+L,t.tempClasses=null);var z;ka&&(z="ng-"+Q+"-prepare",a.addClass(n,z));u.push({element:n,classes:M,event:Q,structural:ka,options:t,beforeStart:function(){n.addClass("ng-animate");
L&&a.addClass(n,L);z&&(a.removeClass(n,z),z=null)},close:K});n.on("$destroy",p);if(1<u.length)return k;d.$$postDigest(function(){var a=[];s(u,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});u.length=0;var b=T(a),c=[];s(b,function(a){c.push({domNode:y(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=x(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):
c()}})});I(g(c))});return k}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ja(),c=Ja();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,n,I,g,u,C){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function Q(r,p,g,n){var k;0<b.count(g)&&(k=c.get(g),k||(p=Z(p,"-stagger"),e.addClass(r,p),k=Ha(a,r,n),k.animationDuration=
Math.max(k.animationDuration,0),k.transitionDuration=Math.max(k.transitionDuration,0),e.removeClass(r,p),c.put(g,k)));return k||{}}function t(a){x.push(a);u.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<x.length;d++)x[d](a);x.length=0})}function H(c,e,g){e=b.get(g);e||(e=Ha(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,e):g||e;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var T=V(e),O=0,x=[];return function(a,c){function d(){k()}function u(){k(!0)}function k(b){if(!(w||F&&O)){w=!0;O=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);va(h,!1);pa(h,!1);s(x,function(a){h.style[a[0]]=""});T(a,f);ha(a,f);Object.keys(A).length&&s(A,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),z);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),
a.removeData("$$animateCss"));G&&G.complete(!b)}}function M(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&va(h,!!a)}function L(){G=new l({end:d,cancel:u});t(P);k();return{$$willAnimate:!1,start:function(){return G},end:d}}function z(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=R&&b>=m&&(F=!0,k())}function N(){function b(){if(!w){M(!1);s(x,function(a){h.style[a[0]]=a[1]});T(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=
h.className+" "+ga;ia=B(h,na);D=H(h,na,ia);ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;if(0===m){k();return}q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof f.delay&&wa(f.delay)?parseFloat(f.delay):ca,J=Math.max(ca,0),D.animationDelay=ca,da=[qa,ca+"s"],x.push(da),h.style[da[0]]=da[1]);R=1E3*J;V=1E3*m;if(f.easing){var d,g=f.easing;q.hasTransitions&&(d=S+"TimingFunction",x.push([d,g]),h.style[d]=g);q.hasAnimations&&(d=aa+
"TimingFunction",x.push([d,g]),h.style[d]=g)}D.transitionDuration&&fa.push(ya);D.animationDuration&&fa.push(za);W=Date.now();var p=R+1.5*V;d=W+p;var g=a.data("$$animateCss")||[],N=!0;if(g.length){var l=g[0];(N=d>l.expectedEndTime)?n.cancel(l.timer):g.push(k)}N&&(p=n(c,p,!1),g[0]={timer:p,expectedEndTime:d},g.push(k),a.data("$$animateCss",g));if(fa.length)a.on(fa.join(" "),z);f.to&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.to)),Ga(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();
a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(F)O&&a&&(O=!1,k());else if(O=!a,D.animationDuration)if(a=va(h,O),O)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<ba&&(D.transitionDuration&&0===X.transitionDuration||D.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);g?n(b,Math.floor(g*ba*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else k()}var f=c||{};f.$$prepared||(f=oa(Ba(f)));var A={},h=y(a);
if(!h||!h.parentNode||!C.enabled())return L();var x=[],I=a.attr("class"),E=Na(f),w,O,F,G,v,J,R,m,V,W,fa=[];if(0===f.duration||!g.animations&&!g.transitions)return L();var ja=f.event&&Y(f.event)?f.event.join(" "):f.event,$="",U="";ja&&f.structural?$=Z(ja,"ng-",!0):ja&&($=ja);f.addClass&&(U+=Z(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Z(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&T(a,f);var ga=[$,U].join(" ").trim(),na=I+" "+ga,ea=Z(ga,"-active"),I=E.to&&0<Object.keys(E.to).length;
if(!(0<(f.keyframeStyle||"").length||I||ga))return L();var ia,X;0<f.stagger?(E=parseFloat(f.stagger),X={transitionDelay:E,animationDelay:E,transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(E=[S,f.transitionStyle],la(h,E),x.push(E));0<=f.duration&&(E=0<h.style[S].length,E=Ia(f.duration,E),la(h,E),x.push(E));f.keyframeStyle&&(E=[aa,f.keyframeStyle],la(h,E),x.push(E));var ba=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):
0;(ja=0===ba)&&!f.skipBlocking&&pa(h,9999);var D=H(h,na,ia),ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;var q={};q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==D.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=wa(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=
wa(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=f.duration?parseFloat(f.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=m,E=0<h.style[S+"Property"].length,x.push(Ia(m,E))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=m,x.push([Aa,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return L();if(null!=f.delay){var da;"boolean"!==typeof f.delay&&(da=parseFloat(f.delay),J=Math.max(da,
0));q.applyTransitionDelay&&x.push([ma,da+"s"]);q.applyAnimationDelay&&x.push([qa,da+"s"])}null==f.duration&&0<D.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);R=1E3*J;V=1E3*m;f.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.from)),Fa(a,f));q.blockTransition||q.blockKeyframeAnimation?M(m):f.skipBlocking||pa(h,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!w)return v={end:d,cancel:u,resume:null,pause:null},G=new l(v),t(N),G}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,n,I){function g(a){return a.replace(/\bng-\S+\b/g,"")}function u(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function C(c,e,n){function l(a){var b={},c=y(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=t.scrollTop;break;case "left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function p(){var c=g(n.attr("class")||""),d=u(c,k),c=u(k,c),d=a(C,{to:l(n),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){C.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim")}var C=
F(y(e).cloneNode(!0)),k=g(C.attr("class")||"");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");C.addClass("ng-anchor");H.append(C);var M;c=function(){var c=a(C,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(M=p(),!M))return I();var L=c||M;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!M&&(M=p()))return c=M.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,
cancel:a})}}}function B(a,b,c,e){var g=Q(a,P),n=Q(b,P),l=[];s(e,function(a){(a=C(c,a.out,a["in"]))&&l.push(a)});if(g||n||0!==l.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];g&&b.push(g.start());n&&b.push(n.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=$(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return P;var t=I[0].body;c=y(e);var H=F(c.parentNode&&11===c.parentNode.nodeType||t.contains(c)?c:t);V(n);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=Y(c)?c:c.split(" ");
for(var d=[],e={},l=0;l<c.length;l++){var s=c[l],B=a.$$registeredAnimations[s];B&&!e[s]&&(d.push(b.get(B)),e[s]=!0)}return d}var l=V(d);return function(a,b,d,u){function C(){u.domOperation();l(a,u)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,F,G,f];break;case "addClass":b=[b,F,f];break;case "removeClass":b=[b,G,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ca(a))return a;return P}
function y(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=B(k,a,b,d,function(a){h(!1===a)});return e})});return g}function t(a,b,d,e,f){var g=y(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=y(a,"removeClass",d,e,"beforeRemoveClass"),k=y(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=y(a,"removeClass",d,e,"removeClass"),k=y(a,"addClass",
d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&ba(d)&&(u=d,d=null);u=oa(u);d||(d=a.attr("class")||"",u.addClass&&(d+=" "+u.addClass),u.removeClass&&(d+=" "+u.removeClass));var F=u.addClass,G=u.removeClass,x=e(d),r,p;if(x.length){var K,J;"leave"==b?(J="leave",K="afterLeave"):(J="before"+b.charAt(0).toUpperCase()+
b.substr(1),K=b);"enter"!==b&&"move"!==b&&(r=t(a,b,u,x,J));p=t(a,b,u,x,K)}if(r||p){var k;return{$$willAnimate:!0,end:function(){k?k.end():(H=!0,C(),ha(a,u),k=new c,k.complete(!0));return k},start:function(){function b(c){H=!0;C();ha(a,u);k.complete(c)}if(k)return k;k=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){C();a(!0)}):C();p&&e.push(function(a){d=p(a)});k.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return k}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});
return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

(function(E,d){'use strict';function y(t,l,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(b,e,a,c,k){function p(){m&&(g.cancel(m),m=null);h&&(h.$destroy(),h=null);n&&(m=g.leave(n),m.then(function(){m=null}),n=null)}function B(){var a=t.current&&t.current.locals;if(d.isDefined(a&&a.$template)){var a=b.$new(),c=t.current;n=k(a,function(a){g.enter(a,null,n||e).then(function(){!d.isDefined(A)||A&&!b.$eval(A)||l()});p()});h=c.scope=a;h.$emit("$viewContentLoaded");
h.$eval(s)}else p()}var h,n,m,A=a.autoscroll,s=a.onload||"";b.$on("$routeChangeSuccess",B);B()}}}function w(d,l,g){return{restrict:"ECA",priority:-400,link:function(b,e){var a=g.current,c=a.locals;e.html(c.$template);var k=d(e.contents());if(a.controller){c.$scope=b;var p=l(a.controller,c);a.controllerAs&&(b[a.controllerAs]=p);e.data("$ngControllerController",p);e.children().data("$ngControllerController",p)}b[a.resolveAs||"$resolve"]=c;k(b)}}}var x,C,s=d.module("ngRoute",["ng"]).provider("$route",
function(){function t(b,e){return d.extend(Object.create(b),e)}function l(b,d){var a=d.caseInsensitiveMatch,c={originalPath:b,regexp:b},g=c.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(b,a,d,c){b="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!b});a=a||"";return""+(b?"":a)+"(?:"+(b?a:"")+(c&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+b+"$",a?"i":"");return c}x=d.isArray;C=
d.isObject;var g={};this.when=function(b,e){var a;a=void 0;if(x(e)){a=a||[];for(var c=0,k=e.length;c<k;c++)a[c]=e[c]}else if(C(e))for(c in a=a||{},e)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=e[c];a=a||e;d.isUndefined(a.reloadOnSearch)&&(a.reloadOnSearch=!0);d.isUndefined(a.caseInsensitiveMatch)&&(a.caseInsensitiveMatch=this.caseInsensitiveMatch);g[b]=d.extend(a,b&&l(b,a));b&&(c="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/",g[c]=d.extend({redirectTo:b},l(c,a)));return this};this.caseInsensitiveMatch=
!1;this.otherwise=function(b){"string"===typeof b&&(b={redirectTo:b});this.when(null,b);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(b,e,a,c,k,p,l){function h(a){var f=v.current;(x=(r=y())&&f&&r.$$route===f.$$route&&d.equals(r.pathParams,f.pathParams)&&!r.reloadOnSearch&&!z)||!f&&!r||b.$broadcast("$routeChangeStart",r,f).defaultPrevented&&a&&a.preventDefault()}function n(){var u=v.current,f=r;if(x)u.params=f.params,d.copy(u.params,
a),b.$broadcast("$routeUpdate",u);else if(f||u)z=!1,(v.current=f)&&f.redirectTo&&(d.isString(f.redirectTo)?e.path(w(f.redirectTo,f.params)).search(f.params).replace():e.url(f.redirectTo(f.pathParams,e.path(),e.search())).replace()),c.when(f).then(m).then(function(c){f==v.current&&(f&&(f.locals=c,d.copy(f.params,a)),b.$broadcast("$routeChangeSuccess",f,u))},function(a){f==v.current&&b.$broadcast("$routeChangeError",f,u,a)})}function m(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,c){b[c]=
d.isString(a)?k.get(a):k.invoke(a,null,null,c)});a=s(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function s(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=l.valueOf(c),b=p(c)));return b}function y(){var a,b;d.forEach(g,function(c,g){var q;if(q=!b){var h=e.path();q=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=q[k-1],n=h[k];m&&
n&&(l[m.name]=n)}q=l}else q=null;else q=null;q=a=q}q&&(b=t(c,{params:d.extend({},e.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function w(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),g=e[1];c.push(b[g]);c.push(e[2]||"");delete b[g]}});return c.join("")}var z=!1,r,x,v={routes:g,reload:function(){z=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=
!0;z=!1}};b.$evalAsync(function(){h(a);a.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),e.path(w(this.current.$$route.originalPath,a)),e.search(a);else throw D("norout");}};b.$on("$locationChangeStart",h);b.$on("$locationChangeSuccess",n);return v}]}),D=d.$$minErr("ngRoute");s.provider("$routeParams",function(){this.$get=function(){return{}}});s.directive("ngView",y);s.directive("ngView",w);y.$inject=["$route","$anchorScroll",
"$animate"];w.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

(function(s,g){'use strict';function H(g){var l=[];t(l,A).chars(g);return l.join("")}var B=g.$$minErr("$sanitize"),C,l,D,E,q,A,F,t;g.module("ngSanitize",[]).provider("$sanitize",function(){function k(a,e){var b={},c=a.split(","),h;for(h=0;h<c.length;h++)b[e?q(c[h]):c[h]]=!0;return b}function I(a){for(var e={},b=0,c=a.length;b<c;b++){var h=a[b];e[h.name]=h.value}return e}function G(a){return a.replace(/&/g,"&amp;").replace(J,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(K,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(a){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,b=0,c=e.length;b<c;b++){var h=e[b],d=h.name.toLowerCase();if("xmlns:ns1"===d||0===d.lastIndexOf("ns1:",0))a.removeAttributeNode(h),b--,c--}(e=a.firstChild)&&u(e);(e=a.nextSibling)&&u(e)}var v=!1;this.$get=["$$sanitizeUri",function(a){v&&l(w,x);return function(e){var b=[];F(e,t(b,function(b,h){return!/^unsafe:/.test(a(b,
h))}));return b.join("")}}];this.enableSvg=function(a){return E(a)?(v=a,this):v};C=g.bind;l=g.extend;D=g.forEach;E=g.isDefined;q=g.lowercase;A=g.noop;F=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);f.innerHTML=a;var b=5;do{if(0===b)throw B("uinput");b--;s.document.documentMode&&u(f);a=f.innerHTML;f.innerHTML=a}while(a!==f.innerHTML);for(b=f.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),I(b.attributes));break;case 3:e.chars(b.textContent)}var c;if(!(c=
b.firstChild)&&(1==b.nodeType&&e.end(b.nodeName.toLowerCase()),c=b.nextSibling,!c))for(;null==c;){b=b.parentNode;if(b===f)break;c=b.nextSibling;1==b.nodeType&&e.end(b.nodeName.toLowerCase())}b=c}for(;b=f.firstChild;)f.removeChild(b)};t=function(a,e){var b=!1,c=C(a,a.push);return{start:function(a,d){a=q(a);!b&&z[a]&&(b=a);b||!0!==w[a]||(c("<"),c(a),D(d,function(b,d){var f=q(d),g="img"===a&&"src"===f||"background"===f;!0!==m[f]||!0===n[f]&&!e(b,g)||(c(" "),c(d),c('="'),c(G(b)),c('"'))}),c(">"))},end:function(a){a=
q(a);b||!0!==w[a]||!0===y[a]||(c("</"),c(a),c(">"));a==b&&(b=!1)},chars:function(a){b||c(G(a))}}};var J=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,K=/([^\#-~ |!])/g,y=k("area,br,col,hr,img,wbr"),d=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),r=k("rp,rt"),p=l({},r,d),d=l({},d,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),r=l({},r,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
x=k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),z=k("script,style"),w=l({},y,d,r,p),n=k("background,cite,href,longdesc,src,xlink:href"),p=k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
r=k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),m=l({},n,r,p),f;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw B("noinert");var e=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===e.length?f=e[0]:(e=a.createElement("html"),f=a.createElement("body"),e.appendChild(f),a.appendChild(e))})(s)});g.module("ngSanitize").filter("linky",["$sanitize",function(k){var l=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
q=/^mailto:/i,u=g.$$minErr("linky"),v=g.isDefined,s=g.isFunction,t=g.isObject,y=g.isString;return function(d,g,p){function x(a){a&&m.push(H(a))}function z(a,b){var c,d=w(a);m.push("<a ");for(c in d)m.push(c+'="'+d[c]+'" ');!v(g)||"target"in d||m.push('target="',g,'" ');m.push('href="',a.replace(/"/g,"&quot;"),'">');x(b);m.push("</a>")}if(null==d||""===d)return d;if(!y(d))throw u("notstring",d);for(var w=s(p)?p:t(p)?function(){return p}:function(){return{}},n=d,m=[],f,a;d=n.match(l);)f=d[0],d[2]||
d[4]||(f=(d[3]?"http://":"mailto:")+f),a=d.index,x(n.substr(0,a)),z(f,d[0].replace(q,"")),n=n.substring(a+d[0].length);x(n);return k(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

function wizardButtonDirective(a){angular.module("mgo-angular-wizard").directive(a,function(){return{restrict:"A",replace:!1,require:"^wizard",link:function(b,c,d,e){c.on("click",function(c){c.preventDefault(),b.$apply(function(){b.$eval(d[a]),e[a.replace("wz","").toLowerCase()]()})})}}})}angular.module("templates-angularwizard",["step.html","wizard.html"]),angular.module("step.html",[]).run(["$templateCache",function(a){a.put("step.html",'<section ng-show="selected" ng-class="{current: selected, done: completed}" class="step" ng-transclude>\n</section>')}]),angular.module("wizard.html",[]).run(["$templateCache",function(a){a.put("wizard.html",'<div>\n    <div class="steps" ng-transclude></div>\n    <ul class="steps-indicator steps-{{getEnabledSteps().length}}" ng-if="!hideIndicators">\n      <li ng-class="{default: !step.completed && !step.selected, current: step.selected && !step.completed, done: step.completed && !step.selected, editing: step.selected && step.completed}" ng-repeat="step in getEnabledSteps()">\n        <a ng-click="goTo(step)">{{step.title || step.wzTitle}}</a>\n      </li>\n    </ul>\n</div>\n')}]),angular.module("mgo-angular-wizard",["templates-angularwizard"]),angular.module("mgo-angular-wizard").directive("wzStep",function(){return{restrict:"EA",replace:!0,transclude:!0,scope:{wzTitle:"@",canenter:"=",canexit:"=",disabled:"@?wzDisabled",description:"@",wzData:"="},require:"^wizard",templateUrl:function(a,b){return b.template||"step.html"},link:function(a,b,c,d){a.title=a.wzTitle,d.addStep(a)}}}),angular.module("mgo-angular-wizard").directive("wizard",function(){return{restrict:"EA",replace:!0,transclude:!0,scope:{currentStep:"=",onFinish:"&",hideIndicators:"=",editMode:"=",name:"@"},templateUrl:function(a,b){return b.template||"wizard.html"},controller:["$scope","$element","$log","WizardHandler","$q",function(a,b,c,d,e){function f(b){var c,d;return void 0===b.canenter?!0:"boolean"==typeof b.canenter?b.canenter:(d=b.canenter(a.context),angular.isFunction(d.then)?(c=e.defer(),d.then(function(a){c.resolve(a)}),c.promise):d===!0)}function g(b,c){var d,f;return"undefined"==typeof b.canexit||a.getStepNumber(c)<a.currentStepNumber()?!0:"boolean"==typeof b.canexit?b.canexit:(f=b.canexit(a.context),angular.isFunction(f.then)?(d=e.defer(),f.then(function(a){d.resolve(a)}),d.promise):f===!0)}function h(){angular.forEach(a.getEnabledSteps(),function(a){a.selected=!1}),a.selectedStep=null}var i=!0;d.addWizard(a.name||d.defaultName,this),a.$on("$destroy",function(){d.removeWizard(a.name||d.defaultName)}),a.steps=[];var j=function(b){var c=0,d=-1;return angular.forEach(a.getEnabledSteps(),function(a){a===b&&(d=c),c++}),d},k=function(b){var c=null;return angular.forEach(a.getEnabledSteps(),function(a){a.wzTitle===b&&(c=a)}),c};a.context={},a.$watch("currentStep",function(b){if(b){var c=a.selectedStep.wzTitle;a.selectedStep&&c!==a.currentStep&&a.goTo(k(a.currentStep))}}),a.$watch("[editMode, steps.length]",function(){var b=a.editMode;if(!angular.isUndefined(b)&&null!==b)if(b)angular.forEach(a.getEnabledSteps(),function(a){a.completed=!0});else{var c=a.currentStepNumber()-1;angular.forEach(a.getEnabledSteps(),function(a,b){b>=c&&(a.completed=!1)})}},!0),this.addStep=function(b){a.steps.push(b),1===a.getEnabledSteps().length&&a.goTo(a.getEnabledSteps()[0])},this.context=a.context,a.getStepNumber=function(a){return j(a)+1},a.goTo=function(b){if(i)h(),a.selectedStep=b,angular.isUndefined(a.currentStep)||(a.currentStep=b.wzTitle),b.selected=!0,a.$emit("wizard:stepChanged",{step:b,index:j(b)}),i=!1;else{var c;a.currentStepNumber()>0?c=a.currentStepNumber()-1:0===a.currentStepNumber()&&(c=0),e.all([g(a.getEnabledSteps()[c],b),f(b)]).then(function(c){c[0]&&c[1]&&(h(),a.selectedStep=b,angular.isUndefined(a.currentStep)||(a.currentStep=b.wzTitle),b.selected=!0,a.$emit("wizard:stepChanged",{step:b,index:j(b)}))})}},a.currentStepNumber=function(){return j(a.selectedStep)+1},a.getEnabledSteps=function(){return a.steps.filter(function(a){return"true"!==a.disabled})},this.currentStepTitle=function(){return a.selectedStep.wzTitle},this.currentStepDescription=function(){return a.selectedStep.description},this.currentStep=function(){return a.selectedStep},this.totalStepCount=function(){return a.getEnabledSteps().length},this.getEnabledSteps=function(){return a.getEnabledSteps()},this.currentStepNumber=function(){return a.currentStepNumber()},this.next=function(b){var c=a.getEnabledSteps(),d=j(a.selectedStep);if(angular.isFunction(b)){if(!b())return;d===c.length-1?this.finish():a.goTo(c[d+1])}b||(a.selectedStep.completed=!0),d===c.length-1?this.finish():a.goTo(c[d+1])},this.goTo=function(b){var c,d=a.getEnabledSteps();c=angular.isNumber(b)?d[b]:k(b),a.goTo(c)},this.finish=function(){a.onFinish&&a.onFinish()},this.previous=function(){var b=j(a.selectedStep);if(0===b)throw new Error("Can't go back. It's already in step 0");a.goTo(a.getEnabledSteps()[b-1])},this.cancel=function(){var b=j(a.selectedStep);if(0===b)throw new Error("Can't go back. It's already in step 0");a.goTo(a.getEnabledSteps()[0])},this.reset=function(){angular.forEach(a.getEnabledSteps(),function(a){a.completed=!1}),this.goTo(0)}}]}}),wizardButtonDirective("wzNext"),wizardButtonDirective("wzPrevious"),wizardButtonDirective("wzFinish"),wizardButtonDirective("wzCancel"),wizardButtonDirective("wzReset"),angular.module("mgo-angular-wizard").factory("WizardHandler",function(){var a={},b={};return a.defaultName="defaultWizard",a.addWizard=function(a,c){b[a]=c},a.removeWizard=function(a){delete b[a]},a.wizard=function(c){var d=c;return c||(d=a.defaultName),b[d]},a});
(function () {
  'use strict';

  angular.module('ui.tree', [])
    .constant('treeConfig', {
      treeClass: 'angular-ui-tree',
      emptyTreeClass: 'angular-ui-tree-empty',
      hiddenClass: 'angular-ui-tree-hidden',
      nodesClass: 'angular-ui-tree-nodes',
      nodeClass: 'angular-ui-tree-node',
      handleClass: 'angular-ui-tree-handle',
      placeHoldersWrapperClass: 'angular-ui-tree-placeholders-wrapper',
      placeHolderClass: 'angular-ui-tree-placeholder',
      dragClass: 'angular-ui-tree-drag',
      dragWrapperClass: 'angular-ui-tree-drag-wrapper',
      dragUpThreshold: 10,
      dir: 'ltr',
      levelThreshold: 30
    })
    .constant('keys', {
      space: 32,
      enter: 13,
      tab: 9,
      esc: 27,
      escape: 27,
      backspace: 8,
      back: 8,
      shift: 16,
      maj: 16,
      ctrl: 17,
      control: 17,
      alt: 18,
      left: 37,
      leftarrow: 37,
      up: 38,
      uparrow: 38,
      right: 39,
      rightarrow: 39,
      down: 40,
      downarrow: 40,
      ins: 45,
      insert: 45,
      del: 46,
      'delete': 46,
      home: 36,
      end: 35,
      pgup: 33,
      pageup: 33,
      pgdown: 34,
      pagedown: 34,
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123
    });
})();

(function() {
  'use strict';

  angular.module('ui.tree')

    .controller('TreeHandleController', ['$scope', '$element', '$attrs', 'treeConfig',
      function ($scope, $element, $attrs, treeConfig) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$handleElement = $element;
        $scope.$nodeScope = undefined;
        $scope.$type = 'uiTreeHandle';
      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')

    .controller('TreeNodeController', ['$scope', '$element', '$attrs', 'treeConfig',
      function ($scope, $element, $attrs, treeConfig) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$nodeElement = $element;
        $scope.$modelValue = undefined; // Model value for node;
        $scope.$parentNodeScope = undefined; // uiTreeNode Scope of parent node;
        $scope.$childNodesScope = undefined; // uiTreeNodes Scope of child nodes.
        $scope.$parentNodesScope = undefined; // uiTreeNodes Scope of parent nodes.
        $scope.$treeScope = undefined; // uiTree scope
        $scope.$handleScope = undefined; // it's handle scope
        $scope.$type = 'uiTreeNode';
        $scope.$$apply = false; //
        $scope.$dragInfo = undefined;

        $scope.collapsed = false;
        $scope.expandOnHover = false;

        $scope.selected = false;

        $scope.init = function(controllersArr) {
          var treeNodesCtrl = controllersArr[0];
          $scope.$treeScope = controllersArr[1] ? controllersArr[1].scope : undefined;

          // find the scope of it's parent node
          $scope.$parentNodeScope = treeNodesCtrl.scope.$nodeScope;
          // modelValue for current node
          $scope.$modelValue = treeNodesCtrl.scope.$modelValue[$scope.$index];
          $scope.$parentNodesScope = treeNodesCtrl.scope;
          treeNodesCtrl.scope.initSubNode($scope); // init sub nodes

          $element.on('$destroy', function() {
            treeNodesCtrl.scope.destroySubNode($scope); // destroy sub nodes
          });
        };

        $scope.toggleSelected = function() {
          if ($scope.selected) {
            $scope.unselect();
          } else {
            $scope.select();
          }
        };

        $scope.select = function() {
          if (!$scope.selected && $scope.$treeScope.$callbacks.select($scope)) {
            $scope.selected = true;

            $scope.$treeScope.$selecteds.push($scope.$element);
          }
        };

        $scope.unselect = function() {
          if ($scope.selected && $scope.$treeScope.$callbacks.unselect($scope)) {
            $scope.selected = false;

            var indexOf = $scope.$treeScope.$selecteds.indexOf($scope.$element);
            if (angular.isDefined(indexOf) && indexOf > -1) {
              $scope.$treeScope.$selecteds.splice(indexOf, 1);
            }
          }
        };

        $scope.index = function() {
          return $scope.$parentNodesScope.$modelValue.indexOf($scope.$modelValue);
        };

        $scope.dragEnabled = function() {
          return !($scope.$treeScope && !$scope.$treeScope.dragEnabled);
        };

        $scope.isSibling = function(targetNode) {
          return $scope.$parentNodesScope === targetNode.$parentNodesScope;
        };

        $scope.isChild = function(targetNode) {
          var nodes = $scope.childNodes();
          return nodes && nodes.indexOf(targetNode) > -1;
        };

        $scope.prev = function() {
          var index = $scope.index();
          if (index > 0) {
            return $scope.siblings()[index - 1];
          }

          return undefined;
        };

        $scope.siblings = function() {
          return $scope.$parentNodesScope.childNodes();
        };

        $scope.childNodesCount = function() {
          return (angular.isDefined($scope.childNodes())) ? $scope.childNodes().length : 0;
        };

        $scope.hasChild = function() {
          return $scope.childNodesCount() > 0;
        };

        $scope.childNodes = function() {
          return (angular.isDefined($scope.$childNodesScope) && angular.isDefined($scope.$childNodesScope.$modelValue)) ?
                 $scope.$childNodesScope.childNodes() : undefined;
        };

        $scope.accept = function(sourceNode, destIndex) {
          return angular.isDefined($scope.$childNodesScope) &&
                  angular.isDefined($scope.$childNodesScope.$modelValue) &&
                  $scope.$childNodesScope.accept(sourceNode, destIndex);
        };

        $scope.removeNode = function() {
          if ($scope.$treeScope.$callbacks.remove(node)) {
            var node = $scope.remove();

            return node;
          }

          return undefined;
        };

        $scope.remove = function() {
          return $scope.$parentNodesScope.removeNode($scope);
        };

        $scope.toggle = function() {
          $scope.collapsed = !$scope.collapsed;
        };

        $scope.collapse = function(all) {
          $scope.collapsed = $scope.$treeScope.$callbacks.collapse($scope, all);
        };

        $scope.expand = function(all) {
          $scope.collapsed = !$scope.$treeScope.$callbacks.expand($scope, all);
        };

        $scope.depth = function() {
          var parentNode = $scope.$parentNodeScope;
          if (parentNode) {
            return parentNode.depth() + 1;
          }

          return 1;
        };

        var subDepth = 0;
        var countSubDepth = function(scope) {
          var count = 0;
          var nodes = scope.childNodes();
          for (var i = 0; i < nodes.length; i++) {
            var childNodes = nodes[i].$childNodesScope;
            if (childNodes) {
              count = 1;
              countSubDepth(childNodes);
            }
          }
          subDepth += count;
        };

        $scope.maxSubDepth = function() {
          subDepth = 0;
          if ($scope.$childNodesScope) {
            countSubDepth($scope.$childNodesScope);
          }

          return subDepth;
        };

      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')

    .controller('TreeNodesController', ['$scope', '$element', '$q', 'treeConfig',
      function ($scope, $element, $q, treeConfig) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$nodesElement = $element;
        $scope.$modelValue = undefined;
        $scope.$nodeScope = undefined; // the scope of node which the nodes belongs to
        $scope.$treeScope = undefined;
        $scope.$type = 'uiTreeNodes';
        $scope.$nodesMap = {};

        $scope.nodrop = false;
        $scope.maxDepth = 0;

        $scope.expandOnHover = undefined;

        $scope.initSubNode = function(subNode) {
          if (!subNode.$modelValue) {
            return undefined;
          }
          $scope.$nodesMap[subNode.$modelValue.$$hashKey] = subNode;
        };

        $scope.destroySubNode = function(subNode) {
          if (!subNode.$modelValue) {
            return undefined;
          }
          $scope.$nodesMap[subNode.$modelValue.$$hashKey] = undefined;
        };

        $scope.accept = function(sourceNode, destIndex) {
          return $scope.$treeScope.$callbacks.accept(sourceNode, $scope, destIndex);
        };

        $scope.beforeDrag = function(sourceNode, event) {
          return $scope.$treeScope.$callbacks.beforeDrag(sourceNode, event);
        };

        $scope.isParent = function(node) {
          return node.$parentNodesScope == $scope;
        };

        $scope.hasChild = function() {
          return $scope.$modelValue.length > 0;
        };

        $scope.safeApply = function(fn) {
          var phase = this.$root.$$phase;
          if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
              fn();
            }
          } else {
            this.$apply(fn);
          }
        };

        $scope.removeNode = function(node) {
          var deferred = $q.defer();

          var index = $scope.$modelValue.indexOf(node.$modelValue);
          if (index > -1) {
            $scope.safeApply(function() {
              $scope.$modelValue.splice(index, 1)[0];

              deferred.resolve(node);
            });
          } else {
            deferred.reject('not found');
          }

          return deferred.promise;
        };

        $scope.insertNode = function(index, nodeData) {
          var deferred = $q.defer();

          $scope.safeApply(function() {
            $scope.$modelValue.splice(index, 0, nodeData);
            deferred.resolve('inserted');
          });

          return deferred.promise;
        };

        $scope.childNodes = function() {
          var nodes = [];
          if ($scope.$modelValue) {
            for (var i = 0; i < $scope.$modelValue.length; i++) {
              nodes.push($scope.$nodesMap[$scope.$modelValue[i].$$hashKey]);
            }
          }
          return nodes;
        };

        $scope.depth = function() {
          if ($scope.$nodeScope) {
            return $scope.$nodeScope.depth();
          }
          return 0; // if it has no $nodeScope, it's root
        };

        // check if depth limit has reached
        $scope.outOfDepth = function(sourceNode) {
          var maxDepth = $scope.maxDepth || $scope.$treeScope.maxDepth;
          if (maxDepth > 0) {
            return $scope.depth() + sourceNode.maxSubDepth() + 1 > maxDepth;
          }
          return false;
        };

      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
    .controller('TreeController', ['$scope', '$element', '$window', '$attrs', 'treeConfig', 'keys',
      function ($scope, $element, $window, $attrs, treeConfig, keys) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$treeElement = $element;
        $scope.$nodesScope = undefined; // root nodes
        $scope.$type = 'uiTree';
        $scope.$emptyElm = undefined;
        $scope.$callbacks = undefined;

        $scope.$selecteds = [];

        $scope.dragEnabled = (angular.isUndefined($scope.dragEnabled)) ? true : $scope.dragEnabled;
        $scope.emptyPlaceholderEnabled = (angular.isUndefined($scope.emptyPlaceholderEnabled)) ? false : $scope.emptyPlaceholderEnabled;
        $scope.maxDepth = (angular.isUndefined($scope.maxDepth)) ? 10 : $scope.maxDepth;
        $scope.dragDelay = (angular.isUndefined($scope.dragDelay)) ? 0 : $scope.dragDelay;
        $scope.dragDistance = (angular.isUndefined($scope.dragDistance)) ? 0 : $scope.dragDistance;
        $scope.cancelKey = keys.escape;
        $scope.lockXKey = undefined;
        $scope.lockX = false;
        $scope.lockYKey = undefined;
        $scope.lockY = false;
        $scope.boundTo = (angular.isUndefined($scope.boundTo)) ? '' : $scope.boundTo;
        $scope.collideWith = 'bottom';
        $scope.coverage = 0.5;
        $scope.spacing = (angular.isUndefined($scope.spacing)) ? 50 : $scope.spacing;
        $scope.spacingThreshold = Math.floor($scope.spacing / 4);

        $scope.copyKey = undefined;
        $scope.copy = false;
        $scope.multiSelectKey = undefined;
        $scope.multiSelect = false;

        $scope.expandOnHover = (angular.isUndefined($scope.expandOnHover)) ? 500 : $scope.expandOnHover;

        $scope.$watch('callbacks', function(newOptions) {
          angular.forEach(newOptions, function(value, key) {
            if ($scope.$callbacks[key]) {
              if (angular.isFunction(value)) {
                $scope.$callbacks[key] = value;
              }
            }
          });
        }, true);

        $scope.$watch('$nodesScope.$modelValue.length', function(val) {
          if ((typeof val) != 'undefined' && $scope.$nodesScope.$modelValue) {
            $scope.resetEmptyElement();
          }
        }, true);

        $scope.$watch('lockXKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.lockXKey = (angular.isDefined(keys[val])) ? keys[val] : (val.length === 1) ? (val.charCodeAt(0) - 32) : undefined;
            }
          }

          $scope.lockX = (angular.isUndefined($scope.lockXKey) && ((typeof val) === 'boolean')) ? val : false;
        });

        $scope.$watch('lockYKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.lockYKey = (angular.isDefined(keys[val])) ? keys[val] : (val.length === 1) ? (val.charCodeAt(0) - 32) : undefined;
            }
          }

          $scope.lockY = (angular.isUndefined($scope.lockXKey) && ((typeof val) === 'boolean')) ? val : false;
        });

        $scope.$watch('boundToString', function(val) {
          if (angular.isString(val) && val.length > 0) {
            try {
              $scope.boundTo = angular.element($window.document.querySelectorAll(val));
            } catch (exception) {
              $scope.boundTo = '';
            }
          }
        });

        $scope.$watch('spacing', function(val) {
          if (angular.isNumber(val) && val > 0) {
            $scope.spacingThreshold = Math.floor($scope.spacing / 4);
          }
        });

        $scope.$watch('coveragePercent', function(val) {
          if (angular.isNumber(val) && val >= -100 && val <= 100) {
            $scope.collideWith = (val < 0) ? 'top' : 'bottom';
            $scope.coverage = Math.abs((val / 100));
          }
        });

        $scope.$watch('cancelKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.cancelKey = (angular.isDefined(keys[val])) ? keys[val] : (val.charCodeAt(0) - 32);
            }
          }
        });

        $scope.$watch('copyKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.copyKey = (angular.isDefined(keys[val])) ? keys[val] : (val.charCodeAt(0) - 32);
            }
          }
        });

        $scope.$watch('selectKeyString', function(val) {
          if (angular.isString(val)) {
            val = val.toLowerCase();
            if (val.length > 0) {
              $scope.multiSelectKey = (angular.isDefined(keys[val])) ? keys[val] : (val.charCodeAt(0) - 32);
            }
          }
        });

        // Check if it's a empty tree
        $scope.isEmpty = function() {
          return ($scope.$nodesScope && $scope.$nodesScope.$modelValue && $scope.$nodesScope.$modelValue.length === 0);
        };

        // add placeholder to empty tree
        $scope.place = function(placeElm) {
          $scope.$nodesScope.$element.append(placeElm);
          $scope.$emptyElm.remove();
        };

        $scope.resetEmptyElement = function() {
          if ($scope.$nodesScope.$modelValue.length === 0 && $scope.emptyPlaceholderEnabled) {
            $element.append($scope.$emptyElm);
          } else {
            $scope.$emptyElm.remove();
          }
        };

        var collapseOrExpand = function(scope, collapsed) {
          var nodes = scope.childNodes();
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i]) {
              (collapsed) ? nodes[i].collapse(true) : nodes[i].expand(true);

              var subScope = nodes[i].$childNodesScope;
              if (subScope) {
                collapseOrExpand(subScope, collapsed);
              }
            }
          }
        };

        $scope.collapseAll = function() {
          collapseOrExpand($scope.$nodesScope, true);
        };
        $scope.$on('collapseAll', $scope.collapseAll);

        $scope.expandAll = function() {
          collapseOrExpand($scope.$nodesScope, false);
        };
        $scope.$on('expandAll', $scope.expandAll);
      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
  .directive('uiTree', [ 'treeConfig', 'keys', '$window',
    function(treeConfig, keys, $window) {
      return {
        restrict: 'EA',
        scope: {
          callbacks: '=?',
          dragEnabled: '=?',
          emptyPlaceholderEnabled: '=?',
          maxDepth: '=?',
          dragDelay: '=?',
          dragDistance: '=?',
          lockXKeyString: '=?lockX',
          lockYKeyString: '=?lockY',
          boundToString: '=?boundTo',
          spacing: '=?',
          coveragePercent: '=?coverage',
          cancelKeyString: '=?cancelKey',
          copyKeyString: '=?copyKey',
          selectKeyString: '=?selectKey',
          expandOnHover: '=?'
        },
        controller: 'TreeController',
        link: function(scope, element, attrs) {
          var callbacks = {
            accept: undefined,
            beforeDrag: undefined
          };

          var config = {};

          if (attrs.uiTreeDir) {
            treeConfig.dir = attrs.uiTreeDir;
          }

          angular.extend(config, treeConfig);
          if (config.treeClass) {
            element.addClass(config.treeClass);
          }

          scope.$emptyElm = angular.element($window.document.createElement('div'));
          if (config.emptyTreeClass) {
            scope.$emptyElm.addClass(config.emptyTreeClass);
          }

          // check if the dest node can accept the dragging node
          // by default, we check the 'nodrop' attribute in `ui-tree-nodes`
          // and the 'max-depth' attribute in `ui-tree` or `ui-tree-nodes`.
          // the method can be overrided
          callbacks.accept = function(sourceNodeScope, destNodesScope, destIndex) {
            if (destNodesScope.nodrop || destNodesScope.outOfDepth(sourceNodeScope)) {
              return false;
            }

            return true;
          };

          callbacks.collapse = function(node, all) {
            return true;
          };

          callbacks.expand = function(node, all) {
            return true;
          };

          callbacks.beforeDrag = function(sourceNodeScope) {
            return true;
          };

          callbacks.expandTimeoutStart = function() {
          };

          callbacks.expandTimeoutCancel = function() {
          };

          callbacks.expandTimeoutEnd = function() {
            return true;
          };

          callbacks.remove = function(node) {
            return true;
          };

          callbacks.dropped = function(event) {
          };

          callbacks.droppedInto = function(event) {
          };

          callbacks.dragStart = function(event) {
          };

          callbacks.dragMove = function(event) {
          };

          callbacks.placeholderMove = function(event) {
          };

          callbacks.dragCancel = function(event) {
          };

          callbacks.dragStop = function(event) {
          };

          callbacks.beforeDrop = function(event) {
            return true;
          };

          callbacks.lock = function(axis) {
            return true;
          };

          callbacks.unlock = function(axis) {
            return true;
          };

          callbacks.startCopy = function() {
            return true;
          };

          callbacks.endCopy = function() {
          };

          callbacks.startSelect = function() {
            return true;
          };

          callbacks.select = function(node) {
            return true;
          };

          callbacks.unselect = function(node) {
            return true;
          };

          callbacks.endSelect = function() {
          };

          scope.$callbacks = callbacks;
        }
      };
    }
  ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
  .directive('uiTreeHandle', [ 'treeConfig',
    function(treeConfig) {
      return {
        require: '^uiTreeNode',
        restrict: 'A',
        scope: true,
        controller: 'TreeHandleController',
        link: function(scope, element, attrs, treeNodeCtrl) {
          var config = {};
          angular.extend(config, treeConfig);
          if (config.handleClass) {
            element.addClass(config.handleClass);
          }
          // connect with the tree node.
          if (scope != treeNodeCtrl.scope) {
            scope.$nodeScope = treeNodeCtrl.scope;
            treeNodeCtrl.scope.$handleScope = scope;
          }
        }
      };
    }
  ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
    .directive('uiTreeNode', ['treeConfig', '$uiTreeHelper', '$window', '$document', '$timeout', '$filter',
      function (treeConfig, $uiTreeHelper, $window, $document, $timeout, $filter) {
        return {
          require: ['^uiTreeNodes', '^uiTree'],
          restrict: 'EA',
          controller: 'TreeNodeController',
          link: function(scope, element, attrs, controllersArr) {
            var config = {};
            angular.extend(config, treeConfig);
            if (config.nodeClass) {
              element.addClass(config.nodeClass);
            }
            scope.init(controllersArr);

            scope.collapsed = !!$uiTreeHelper.getNodeAttribute(scope, 'collapsed');
            if (attrs && attrs.collapsed) {
              scope.$watch(attrs.collapsed, function (val) {
                if ((typeof val) === "boolean") {
                  scope.collapsed = val;
                }
              });
            }
            scope.$watch('collapsed', function(val) {
              $uiTreeHelper.setNodeAttribute(scope, 'collapsed', val);
              attrs.$set('collapsed', val);
            });

            scope.selected = !!$uiTreeHelper.getNodeAttribute(scope, 'selected');
            if (attrs && attrs.selected) {
              scope.$watch(attrs.selected, function (val) {
                if ((typeof val) === "boolean") {
                  scope.selected = val;
                }
              });
            }
            scope.$watch('selected', function(val) {
              $uiTreeHelper.setNodeAttribute(scope, 'selected', val);
              attrs.$set('selected', val);
            });

            if (attrs && attrs.expandOnHover) {
              scope.$watch(attrs.expandOnHover, function (val) {
                scope.expandOnHover = val;
              });
            }

            var hasTouch = 'ontouchstart' in window;
            // todo startPos is unused
            var startPos, firstMoving, pos;
            var placeElm, hiddenPlaceElm, dragElm;
            var treeScope;
            var elements; // As a parameter for callbacks
            var dragDelaying = true;
            var dragStarted = false;
            var dragTimer;
            var body = document.body,
                html = document.documentElement,
                documentHeight,
                documentWidth;

            var toggleSelect = function(e) {
              e.preventDefault();
              e.stopPropagation();

              removeChildSelect(scope);

              if (!checkParentSelect(scope)) {
                scope.$apply(scope.toggleSelected);
              }
            };

            var checkParentSelect = function(elementScope, count) {
              elementScope = (angular.isUndefined(elementScope)) ? scope : elementScope;
              count = (angular.isUndefined(count)) ? 0 : count;

              var selected = false;
              if (elementScope !== null) {
                selected = false;
                if (!selected && angular.isDefined(elementScope.$parent)) {
                  selected = checkParentSelect(elementScope.$parent, (count + 1));
                }

                if (!selected && count > 0) {
                  selected = (angular.isDefined(elementScope.selected)) ? elementScope.selected : false;
                }
              }

              return selected;
            };

            var removeChildSelect = function(elementScope) {
              elementScope = (angular.isUndefined(elementScope)) ? scope : elementScope;

              if (elementScope.hasChild()) {
                angular.forEach(elementScope.childNodes(), function(childNodeScope) {
                  childNodeScope.$apply(childNodeScope.unselect);
                  removeChildSelect(childNodeScope);
                });
              }
            };

            var dragStart = function(e) {
              if (scope.$treeScope.dragDistance > 0) {
                var eventObj = $uiTreeHelper.eventObj(e);
                pos = $uiTreeHelper.positionStarted(eventObj, scope.$element);

                var tempMoveFunction = function(tempEvent) {
                  tempEvent.preventDefault();

                  var distance = Math.floor(Math.sqrt(Math.pow(tempEvent.pageX - pos.startX, 2) + Math.pow(tempEvent.pageY - pos.startY, 2)));

                  if (distance >= scope.$treeScope.dragDistance) {
                    angular.element($document).unbind('touchmove', tempMoveFunction);
                    angular.element($document).unbind('mousemove', tempMoveFunction);
                    angular.element($document).unbind('touchend', tempEndFunction);
                    angular.element($document).unbind('touchcancel', tempEndFunction);
                    angular.element($document).unbind('mouseup', tempEndFunction);

                    drag(e);
                  }
                };
                angular.element($document).bind('touchmove', tempMoveFunction);
                angular.element($document).bind('mousemove', tempMoveFunction);

                var tempEndFunction = function(tempEvent) {
                  tempEvent.preventDefault();

                  angular.element($document).unbind('touchmove', tempMoveFunction);
                  angular.element($document).unbind('mousemove', tempMoveFunction);
                  angular.element($document).unbind('touchend', tempEndFunction);
                  angular.element($document).unbind('touchcancel', tempEndFunction);
                  angular.element($document).unbind('mouseup', tempEndFunction);

                  dragEndEvent(tempEvent);
                };

                angular.element($document).bind('touchend', tempEndFunction);
                angular.element($document).bind('touchcancel', tempEndFunction);
                angular.element($document).bind('mouseup', tempEndFunction);
              } else {
                drag(e);
              }
            };

            var drag = function(e, restart) {
              scope.$treeScope.dragEvent = (angular.isDefined(e) && !restart) ? e : scope.$treeScope.dragEvent;

              if (angular.isDefined(scope.$treeScope.dragEvent))
              {
                var position = $uiTreeHelper.offset(scope.$element);

                if (!hasTouch && (scope.$treeScope.dragEvent.button == 2 || scope.$treeScope.dragEvent.which == 3)) {
                  // disable right click
                  return;
                }
                if ((scope.$treeScope.dragEvent.uiTreeDragging || (scope.$treeScope.dragEvent.originalEvent &&
                     scope.$treeScope.dragEvent.originalEvent.uiTreeDragging)) && !restart) { // event has already fired in other scope.
                  return;
                }
                // the element which is clicked.
                var eventElm = angular.element(scope.$treeScope.dragEvent.target);
                var eventScope = eventElm.scope();
                if (!eventScope || !eventScope.$type) {
                  return;
                }
                if (eventScope.$type != 'uiTreeNode' && eventScope.$type != 'uiTreeHandle') {
                  // Check if it is a node or a handle
                  return;
                }
                if (eventScope.$type == 'uiTreeNode' && eventScope.$handleScope) {
                  // If the node has a handle, then it should be clicked by the handle
                  return;
                }

                var eventElmTagName = eventElm.prop('tagName').toLowerCase();
                if (eventElmTagName == 'input' ||
                  eventElmTagName == 'textarea' ||
                  eventElmTagName == 'button' ||
                  eventElmTagName == 'select') { // if it's a input or button, ignore it
                  return;
                }

                // check if it or it's parents has a 'nodrag' attribute
                while (eventElm && eventElm[0] && eventElm[0] != element) {
                  if ($uiTreeHelper.nodrag(eventElm)) { // if the node mark as `nodrag`, DONOT drag it.
                    return;
                  }
                  eventElm = eventElm.parent();
                }

                if (!scope.$parentNodesScope.beforeDrag(scope, scope.$treeScope.dragEvent) && !restart) {
                  return;
                }

                scope.$treeScope.dragEvent.uiTreeDragging = true; // stop event bubbling
                if (scope.$treeScope.dragEvent.originalEvent) {
                  scope.$treeScope.dragEvent.originalEvent.uiTreeDragging = true;
                }

                scope.$treeScope.dragEvent.preventDefault();
                if ($window.getSelection) {
                  $window.getSelection().removeAllRanges();
                } else if ($window.document.selection) {
                  $window.document.selection.empty();
                }

                var eventObj = $uiTreeHelper.eventObj(scope.$treeScope.dragEvent);

                if (!restart) {
                  firstMoving = true;

                  if (angular.isUndefined(scope.$treeScope.$selecteds) || scope.$treeScope.$selecteds.length === 0) {
                    scope.$treeScope.$selecteds = [scope.$element];
                  }

                  if (!scope.selected) {
                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      selectedElementScope.$apply(function() {
                        selectedElementScope.selected = false;
                      });
                    });

                    scope.$treeScope.$selecteds = [scope.$element];
                  }

                  if (scope.$treeScope.$selecteds.length > 1) {
                    scope.$treeScope.$selecteds = $filter('orderBy')(scope.$treeScope.$selecteds, function(selectedElement) {
                      return $uiTreeHelper.offset(angular.element(selectedElement)).top;
                    }, false);
                  }

                  if (angular.isDefined(scope.$treeScope.$selecteds) && scope.$treeScope.$selecteds.length > 0) {
                    var orderedElements = [];

                    placeElm = angular.element($window.document.createElement('div')).addClass(config.placeHoldersWrapperClass);
                    hiddenPlaceElm = angular.element($window.document.createElement('div'));
                    dragElm = angular.element($window.document.createElement('div')).addClass(config.dragWrapperClass);

                    pos = $uiTreeHelper.positionStarted(eventObj, angular.element(scope.$treeScope.$selecteds[0]));

                    var firstElement = angular.element(scope.$treeScope.$selecteds[0]);
                    var firstElementOffset = angular.copy($uiTreeHelper.offset(firstElement));

                    angular.forEach(scope.$treeScope.$selecteds, function(selected, index) {
                      var selectedElement = angular.element(selected);
                      var selectedElementScope = selectedElement.scope();

                      selectedElementScope.$dragInfo = $uiTreeHelper.dragInfo(selectedElementScope);

                      var selectedElementHeight = $uiTreeHelper.height(selectedElement);
                      var selectedElementWidth = $uiTreeHelper.width(selectedElement);

                      var selectedElementPlace;

                      var tagName = selectedElement.prop('tagName');
                      if (tagName.toLowerCase() === 'tr') {
                        selectedElementPlace = angular.element($window.document.createElement(tagName));
                        var tdElm = angular.element($window.document.createElement('td'))
                                           .addClass(config.placeHolderClass);
                        selectedElementPlace.append(tdElm);
                      } else {
                        selectedElementPlace = angular.element($window.document.createElement(tagName))
                                                      .addClass(config.placeHolderClass);
                      }
                      selectedElementPlace.css('height', selectedElementHeight + 'px');
                      placeElm.append(selectedElementPlace);

                      var selectedElementHiddenPlace = angular.element($window.document.createElement(tagName));
                      if (config.hiddenClass) {
                        selectedElementHiddenPlace.addClass(config.hiddenClass);
                      }
                      hiddenPlaceElm.append(selectedElementHiddenPlace);

                      var selectedElementDrag = angular.element($window.document.createElement(selectedElementScope.$parentNodesScope.$element.prop('tagName')))
                                                       .addClass(selectedElementScope.$parentNodesScope.$element.attr('class'));

                      selectedElementDrag.css('width', selectedElementWidth + 'px');

                      var clone = selectedElement.clone();
                      selectedElementDrag.append(clone);
                      if (!scope.$treeScope.copy) {
                        selectedElement.addClass(config.hiddenClass);
                      }

                      dragElm.append(selectedElementDrag);
                      // Prevents cursor to change rapidly in Opera 12.16 and IE when dragging an element
                      var hStyle = (scope.$element[0].querySelector('.angular-ui-tree-handle') || scope.$element[0]).currentStyle;
                      if (hStyle) {
                        document.body.setAttribute('ui-tree-cursor', $document.find('body').css('cursor') || '');
                        $document.find('body').css({ cursor: hStyle.cursor + '!important' });
                      }

                      selectedElementScope.$apply(function() {
                        selectedElementScope.selected = false;
                        selectedElementScope.original = true;
                      });
                    });

                    dragElm.css('z-index', 9999).addClass(config.dragClass);

                    firstElement.parent()[0].insertBefore(placeElm[0], firstElement[0]);
                    firstElement.parent()[0].insertBefore(hiddenPlaceElm[0], firstElement[0]);

                    $document.find('body').append(dragElm);
                    dragElm.css({
                      left: firstElementOffset.left + 'px',
                      top: firstElementOffset.top + 'px'
                    });
                    elements = {
                      placeholder: placeElm,
                      dragging: dragElm
                    };

                    angular.element($document).bind('touchend', dragEndEvent);
                    angular.element($document).bind('touchcancel', dragEndEvent);
                    angular.element($document).bind('touchmove', dragMoveEvent);
                    angular.element($document).bind('mouseup', dragEndEvent);
                    angular.element($document).bind('mousemove', dragMoveEvent);
                    angular.element($document).bind('mouseleave', dragCancelEvent);
                  }

                  documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                  documentWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
                } else {
                  angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                    selectedElement = angular.element(selectedElement);

                    if (scope.$treeScope.copy) {
                      selectedElement.removeClass(config.hiddenClass);
                    } else {
                      selectedElement.addClass(config.hiddenClass);
                    }
                  });
                }
              }
            };

            var restartDrag = function(e) {
              e.preventDefault();

              if ( scope.$treeScope.$selecteds.length > 0) {
                drag(undefined, true);
              }
            };

            var dragMove = function(e) {
              if (!dragStarted) {
                if (!dragDelaying) {
                  dragStarted = true;

                  angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                    selectedElement = angular.element(selectedElement);
                    var selectedElementScope = selectedElement.scope();

                    selectedElementScope.$apply(function() {
                      scope.$treeScope.$callbacks.dragStart(selectedElementScope.$dragInfo.eventArgs(elements, pos));
                    });
                  });
                }
                return;
              }

              var eventObj = $uiTreeHelper.eventObj(e);
              var elmPos = {}, elmOrigPos = {}, hdlPos = {}, boundToPos = {};
              var prev, hdlElm, hdlOffset;

              // Prevent default action and text selection
              e.preventDefault();
              if ($window.getSelection) {
                $window.getSelection().removeAllRanges();
              } else if ($window.document.selection) {
                $window.document.selection.empty();
              }

              if (dragElm) {
                elmOrigPos = $uiTreeHelper.offset(dragElm);

                // Retrieve object position and dimensions
                elmPos.left = eventObj.pageX - pos.offsetX;
                elmPos.width = elmOrigPos.width;
                elmPos.right = elmPos.left + elmPos.width;
                elmPos.top = eventObj.pageY - pos.offsetY;
                elmPos.height = elmOrigPos.height;
                elmPos.bottom = elmPos.top + elmPos.height;

                // Retrieve handle position and dimension
                hdlElm = scope.$element.find(config.handleClass);
                var hdlElmOffset;
                if (angular.isDefined(hdlElm) && hdlElm.length > 0) {
                  hdlElmOffset = $uiTreeHelper.offset(hdlElm);
                  hdlPos.left = hdlElmOffset.left;
                  hdlPos.width = hdlElmOffset.width;
                  hdlPos.top = hdlElmOffset.top;
                  hdlPos.height = hdlElmOffset.height;
                  hdlPos.offset = hdlElm.position().top;
                } else {
                  hdlPos.left = elmPos.left;
                  hdlPos.width = elmPos.width;
                  hdlPos.top = elmPos.top;
                }
                hdlPos.right = hdlPos.left + hdlPos.width;
                hdlPos.bottom = hdlPos.top + hdlPos.height;

                // If we are bounded to an element, and that element exists (and is offset is defined)
                if (angular.isDefined(scope.$treeScope.boundTo) && scope.$treeScope.boundTo.length > 0) {
                  var boundToOffset = $uiTreeHelper.offset(scope.$treeScope.boundTo);
                  // Then get it's position and dimension
                  boundToPos.left = boundToOffset.left;
                  boundToPos.width = boundToOffset.width;
                  boundToPos.top = boundToOffset.top;
                  boundToPos.height = boundToOffset.height;
                } else { // Else, bound to document
                  boundToPos.left = 0;
                  boundToPos.width = documentWidth;
                  boundToPos.top = 0;
                  boundToPos.height = documentHeight;
                }
                boundToPos.right = boundToPos.left + boundToPos.width;
                boundToPos.bottom = boundToPos.top + boundToPos.height;

                //dragElm can't leave the screen or the bounding parent on the left
                if (elmPos.left < boundToPos.left) {
                  elmPos.left = boundToPos.left;
                }
                //dragElm can't leave the screen or the bounding parent on the top
                if (elmPos.top < boundToPos.top) {
                  elmPos.top = boundToPos.top;
                }
                //dragElm can't leave the screen or the bounding parent on the right
                if (elmPos.left > boundToPos.right){
                  elmPos.left = boundToPos.right;
                }
                //dragElm can't leave the screen or the bounding parent on the bottom
                if (elmPos.top > boundToPos.bottom){
                  elmPos.top = boundToPos.bottom;
                }
                if (scope.$treeScope.lockY) {
                  elmPos.top = elmOrigPos.top;
                }
                if (scope.$treeScope.lockX) {
                  elmPos.left = elmOrigPos.left;
                }

                dragElm.css({
                  'left': elmPos.left + 'px',
                  'top': elmPos.top + 'px'
                });

                var topScroll = window.pageYOffset || $window.document.documentElement.scrollTop;
                var bottomScroll = topScroll + (window.innerHeight || $window.document.clientHeight || $window.document.clientHeight);
                // to scroll down if cursor y-position is greater than the bottom position the vertical scroll
                if (bottomScroll < eventObj.pageY && bottomScroll <= documentHeight) {
                  window.scrollBy(0, 10);
                }
                // to scroll top if cursor y-position is less than the top position the vertical scroll
                if (topScroll > eventObj.pageY) {
                  window.scrollBy(0, -10);
                }

                $uiTreeHelper.positionMoved(e, pos, firstMoving);
                if (firstMoving) {
                  firstMoving = false;
                  return;
                }

                // Check if we are above another tree
                // var targetX = eventObj.pageX - $window.document.body.scrollLeft;
                var targetX = elmPos.left + (elmPos.width / 2);
                // var targetY = eventObj.pageY - (window.pageYOffset || $window.document.documentElement.scrollTop);
                var targetY = elmPos.top + (elmPos.height * scope.$treeScope.coverage);
                // Select the drag target. Because IE does not support CSS 'pointer-events: none', it will always
                // pick the drag element itself as the target. To prevent this, we hide the drag element while
                // selecting the target.
                var displayElm;
                if (angular.isFunction(dragElm.hide)) {
                  dragElm.hide();
                } else {
                  displayElm = dragElm[0].style.display;
                  dragElm[0].style.display = "none";
                }

                var placeDisplayElm;
                if (angular.isFunction(placeElm.hide)) {
                  placeElm.hide();
                } else {
                  placeDisplayElm = placeElm[0].style.display;
                  placeElm[0].style.display = "none";
                }

                // when using elementFromPoint() inside an iframe, you have to call
                // elementFromPoint() twice to make sure IE8 returns the correct value
                $window.document.elementFromPoint(targetX, targetY);
                var closestElement = angular.element($window.document.elementFromPoint(targetX, targetY));

                if (angular.isFunction(placeElm.show)) {
                  placeElm.show();
                } else {
                  placeElm[0].style.display = placeDisplayElm;
                }

                if (angular.isFunction(dragElm.show)) {
                  dragElm.show();
                } else {
                  dragElm[0].style.display = displayElm;
                }

                var targetBefore, targetNode, targetElm, isEmpty, isTree, targetElmOffset;
                var closestScope = closestElement.scope();
                var selectedScope;

                if (angular.isDefined(closestScope) && angular.isDefined(closestScope.$nodeScope)) {
                  closestScope = closestScope.$nodeScope;
                } else if (angular.isDefined(closestScope) && angular.isDefined(closestScope.$nodesScope)) {
                  closestScope = closestScope.$nodesScope;
                }

                if (angular.isDefined(closestScope) && angular.isDefined(closestScope.$treeScope) && angular.isDefined(closestScope.$treeScope.$treeElement)
                    && angular.isDefined(closestScope.$treeScope.$treeElement.children())) {
                  selectedScope = closestScope;
                } else {
                  selectedScope = scope;
                }
                var nodes = selectedScope.$treeScope.$treeElement.children();

                var treeChange = (angular.isUndefined(scope.previousTreeId) || scope.previousTreeId.length === 0
                                  || angular.isUndefined(selectedScope.$treeScope) || scope.previousTreeId !== selectedScope.$treeScope.$id);
                scope.previousTreeId = (angular.isDefined(selectedScope.$treeScope)) ? selectedScope.$treeScope.$id : undefined;

                // Compute the intersected element of the tree we are hovering
                var direction = (treeChange) ? 1 : (pos.dirAx) ? pos.dirX : pos.dirY;

                var intersectWith = $uiTreeHelper.findIntersect(elmPos, nodes, scope.$treeScope.collideWith, direction, scope.$parentNodesScope.horizontal);
                if (angular.isDefined(intersectWith)) {
                  targetElm = angular.element(intersectWith);
                }

                if (pos.moving || treeChange) {
                  // Move horizontally
                  var dragInfo = angular.element(scope.$treeScope.$selecteds[0]).scope().$dragInfo;
                  var previous = dragInfo.prev();
                  var parent = dragInfo.parentNode();

                  // If we have a element right above us and it's not collapsed and it accept the current element
                  if (angular.isDefined(previous) && !previous.collapsed && angular.isDefined(previous.$childNodesScope)) {
                    var previousElmOffset = $uiTreeHelper.offset(previous.$element);
                    // And if the horizontal position of the mouse is greater than the one of the parent
                    if (elmPos.left >= (previousElmOffset.left + scope.$treeScope.spacing - scope.$treeScope.spacingThreshold)) {
                      // Then move the element as a children of the previous element
                      if (previous.accept(scope, previous.childNodesCount())) {
                        previous.$childNodesScope.$element.append(placeElm);
                      }

                      angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                        var selectedElementScope = angular.element(selectedElement).scope();

                        selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(previous.$childNodesScope, previous.childNodes(), previous.childNodesCount() + index);
                      });

                      scope.asChild = true;
                    }
                  }

                  parent = dragInfo.parentNode();

                  // If we have a parent
                  if (angular.isDefined(parent)) {
                    var parentElmOffset = $uiTreeHelper.offset(parent.$element);
                    // And that the horizontal position of the mouse is around the position of the parent
                    if (elmPos.left <= (parentElmOffset.left + scope.$treeScope.spacingThreshold)) {
                      // And that there is no element after the current one
                      if (!dragInfo.next()) {
                        // Then move the element as the parent sibling
                        if (parent.accept(scope, (parent.index() + 1))) {
                          parent.$element.after(placeElm);
                        }

                        angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                          var selectedElementScope = angular.element(selectedElement).scope();

                          selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(parent.$parentNodesScope, parent.siblings(), parent.index() + 1 + index);
                        });

                        scope.asChild = false;
                      }
                    }
                  }

                  if (angular.isUndefined(targetElm)) {
                    return;
                  }

                  targetNode = targetElm.scope();
                  if (!targetNode) {
                    return;
                  }

                  // check it's new position
                  isEmpty = false;
                  isTree = false;

                  if (targetNode.$type == 'uiTree' && targetNode.dragEnabled) {
                    isEmpty = targetNode.isEmpty(); // Check if it's empty tree
                  }
                  if (targetNode.$type == 'uiTreeHandle') {
                    targetNode = targetNode.$nodeScope;
                  }
                  if (targetNode.$type != 'uiTreeNode' && !isEmpty) { // Check if it is a uiTreeNode or it's an empty tree
                    if (targetNode.$type == 'uiTree') {
                      isTree = true;
                    } else {
                      return;
                    }
                  }

                  targetElm = targetNode.$element; // Get the element of ui-tree-node
                  targetElmOffset = $uiTreeHelper.offset(targetElm);

                  // if placeholder move from empty tree, reset it.
                  if (treeScope && placeElm.parent()[0] != treeScope.$element[0]) {
                    treeScope.resetEmptyElement();
                    treeScope = undefined;
                  }

                  if (isEmpty) { // it's an empty tree
                    treeScope = targetNode;

                    if (targetNode.accept(scope, 0)) {
                      targetNode.place(placeElm);
                    }

                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.$parentNodesScope.childNodes(), index);
                    });
                  } else if (isTree) { // it's in the bottom padded portion of the tree itself
                    if (targetNode.accept(scope, (targetNode.$parentNodesScope.childNodes().length + 1))) {
                      targetNode.place(placeElm);
                    }

                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.$parentNodesScope.childNodes(),
                                                                                         (targetNode.$parentNodesScope.childNodes().length + 1 + index));
                    });
                  } else if (targetNode.dragEnabled()) { // drag enabled
                    // If another node was witing for expand, cancel it
                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      if (angular.isDefined(selectedElementScope.expandTimeoutOn) && selectedElementScope.expandTimeoutOn !== targetNode.id) {
                        $timeout.cancel(selectedElementScope.expandTimeout);
                        delete selectedElementScope.expandTimeout;
                        delete selectedElementScope.expandTimeoutOn;

                        targetNode.$apply(function() {
                          scope.$treeScope.$callbacks.expandTimeoutCancel();
                        });
                      }
                    });

                    // If the node is collapsed, expand it accordingly to the configuration
                    if (targetNode.collapsed) {
                      var expandOnHover = targetNode.expandOnHover || targetNode.$parentNodesScope.expandOnHover || targetNode.$treeScope.expandOnHover;

                      if (expandOnHover === true || (angular.isNumber(expandOnHover) && expandOnHover === 0)) {
                        targetNode.collapsed = false;
                      } else if (expandOnHover !== false && angular.isNumber(expandOnHover) && expandOnHover > 0) {
                        angular.forEach(scope.$treeScope.$selecteds, function(selectedElement) {
                          var selectedElementScope = angular.element(selectedElement).scope();

                          if (angular.isUndefined(selectedElementScope.expandTimeoutOn)) {
                            selectedElementScope.expandTimeoutOn = targetNode.$id;
                            targetNode.$apply(function() {
                              targetNode.$treeScope.$callbacks.expandTimeoutStart();
                            });
                            selectedElementScope.expandTimeout = $timeout(function()
                            {
                              targetNode.$apply(function() {
                                targetNode.collapsed = !targetNode.$treeScope.$callbacks.expandTimeoutEnd();
                              });
                            }, expandOnHover);
                          }
                        });
                      }
                    }

                    var childsHeight = (targetNode.hasChild()) ? $uiTreeHelper.offset(targetNode.$childNodesScope.$element).height : 0;

                    if ((!scope.$parentNodesScope.horizontal && pos.dirY > 0) || (scope.$parentNodesScope.horizontal && pos.dirX > 0) || treeChange) {
                      var elmVertDown = (scope.$treeScope.collideWith === 'top') ? (scope.$parentNodesScope.horizontal) ? elmPos.right : elmPos.top
                                                                                : (scope.$parentNodesScope.horizontal) ? elmPos.left : elmPos.bottom;
                      var downLimit = (scope.$parentNodesScope.horizontal) ? ((targetElmOffset.left - elmPos.left) + (targetElmOffset.width * scope.$treeScope.coverage))
                                                        : (targetElmOffset.top + ((targetElmOffset.height - childsHeight) * scope.$treeScope.coverage));

                      // If the element as moved behond the trigger
                      if (elmVertDown >= downLimit) {
                        if ((targetNode.collapsed || !targetNode.hasChild()) && !scope.asChild) {
                          if (targetNode.accept(scope, (targetNode.index() + 1))) {
                            targetElm.after(placeElm);
                          }

                          angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                            var selectedElementScope = angular.element(selectedElement).scope();

                            selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.siblings(), (targetNode.index() + 1 + index));
                          });
                        } else {
                          var firstChild = (targetNode.childNodesCount() > 0) ? targetNode.childNodes()[0] : undefined;
                          var firstChildOffset = (angular.isDefined(firstChild)) ? $uiTreeHelper.offset(firstChild.$element) : undefined;

                          var firstChildChildsHeight = (angular.isDefined(firstChild) && firstChild.hasChild()) ? $uiTreeHelper.offset(firstChild.$childNodesScope.$element).height : 0;

                          if (angular.isUndefined(firstChild) || (angular.isDefined(firstChild) &&
                              elmVertDown < (firstChildOffset.top + ((firstChildOffset.height - firstChildChildsHeight) * scope.$treeScope.coverage))))
                          {
                            if (targetNode.accept(scope, 0)) {
                              targetNode.$childNodesScope.$element.prepend(placeElm);
                            }

                            angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                              var selectedElementScope = angular.element(selectedElement).scope();

                              var target = targetNode;
                              if (!target.$childNodesScope){
                                while (typeof(target.$childNodesScope) === "undefined"){
                                  target = target.$parent;
                                }
                              }

                              selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(target.$childNodesScope, target.childNodes(), index);
                            });
                          }
                        }
                      }
                    }

                    if ((((!scope.$parentNodesScope.horizontal && pos.dirY < 0) || (scope.$parentNodesScope.horizontal && pos.dirX < 0))
                          && ((!scope.$parentNodesScope.horizontal && pos.distAxY > config.dragUpThreshold) || (!scope.$parentNodesScope.horizontal && pos.distAxX > 8))
                          || treeChange)) {
                      var elmVertUp = (scope.$treeScope.collideWith === 'top') ? (scope.$parentNodesScope.horizontal) ? elmPos.left : elmPos.bottom
                                                                               : (scope.$parentNodesScope.horizontal) ? elmPos.right : elmPos.top;
                      var upLimit = (scope.$parentNodesScope.horizontal) ? ((targetElmOffset.left - elmPos.left) + targetElmOffset.width - (targetElmOffset.width * scope.$treeScope.coverage))
                                                      : (targetElmOffset.top + targetElmOffset.height - childsHeight - ((targetElmOffset.height - childsHeight) * scope.$treeScope.coverage));

                      if (elmVertUp <= upLimit) {
                        if (targetNode.accept(scope, targetNode.index())) {
                          targetElm[0].parentNode.insertBefore(placeElm[0], targetElm[0]);
                        }

                        angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                          var selectedElementScope = angular.element(selectedElement).scope();

                          selectedElementScope.moved = selectedElementScope.$dragInfo.moveTo(targetNode.$parentNodesScope, targetNode.siblings(), (targetNode.index() + index));
                        });
                      }
                    }

                    angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                      var selectedElementScope = angular.element(selectedElement).scope();

                      if (selectedElementScope.moved) {
                        var dragInfoEventsArgs = selectedElementScope.$dragInfo.eventArgs(elements, pos);

                        if (angular.isDefined(dragInfoEventsArgs) && angular.isDefined(dragInfoEventsArgs.dest))
                        {
                          if (angular.isUndefined(selectedElementScope.dragInfoEventsArgs) || angular.isUndefined(selectedElementScope.dragInfoEventsArgs.dest)
                              || !angular.equals(selectedElementScope.dragInfoEventsArgs.dest, dragInfoEventsArgs.dest))
                          {
                            selectedElementScope.$apply(function() {
                              scope.$treeScope.$callbacks.placeholderMove(dragInfoEventsArgs);
                            });

                            selectedElementScope.dragInfoEventsArgs = dragInfoEventsArgs;
                          }
                        }
                      }
                    });
                  }
                }
              }

              angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                var selectedElementScope = angular.element(selectedElement).scope();

                selectedElementScope.$apply(function() {
                  scope.$treeScope.$callbacks.dragMove(selectedElementScope.$dragInfo.eventArgs(elements, pos));
                });
              });
            };

            var dragEnd = function(e, cancel) {
              if (angular.isDefined(e)) {
                e.preventDefault();
              }

              $timeout.cancel(scope.expandTimeout);

              if (angular.isDefined(dragElm) && angular.isDefined(e)) {
                var selectedsCount = angular.copy(scope.$treeScope.$selecteds.length);

                angular.forEach(scope.$treeScope.$selecteds, function(selectedElement, index) {
                  var selectedElementScope = angular.element(selectedElement).scope();

                  if (angular.isDefined(selectedElementScope)) {
                    var dragInfoEventArgs = selectedElementScope.$dragInfo.eventArgs(elements, pos);

                    selectedElementScope.$apply(function() {
                      selectedElementScope.$$apply = scope.$treeScope.$callbacks.beforeDrop(dragInfoEventArgs);
                    });

                    if (selectedElementScope.$$apply && !cancel) {
                      selectedElementScope.$dragInfo.apply(scope.$treeScope.copy);

                      scope.$treeScope.$apply(function() {
                        scope.$treeScope.$callbacks.dropped(dragInfoEventArgs);
                      });
                      dragInfoEventArgs.dest.nodesScope.$apply(function() {
                        scope.$treeScope.$callbacks.droppedInto(dragInfoEventArgs);
                      });
                    } else {
                      selectedElementScope.$element.removeClass(config.hiddenClass);

                      selectedElementScope.$apply(function() {
                        scope.$treeScope.$callbacks.dragCancel(dragInfoEventArgs);
                      });
                    }

                    selectedElementScope.$apply(function() {
                      scope.$treeScope.$callbacks.dragStop(dragInfoEventArgs);
                    });

                    selectedElementScope.$dragInfo = undefined;

                    selectedElementScope.$apply(function() {
                      delete selectedElementScope.original;
                    });
                  }
                });

                if (angular.isDefined(placeElm)) {
                  placeElm.remove();
                  placeElm = undefined;
                }
                if (angular.isDefined(hiddenPlaceElm)) {
                  hiddenPlaceElm.remove();
                  hiddenPlaceElm = undefined;
                }
                if (angular.isDefined(dragElm)) {
                  dragElm.remove();
                  dragElm = undefined;
                }

                scope.$treeScope.$selecteds = [];
              }

              // Restore cursor in Opera 12.16 and IE
              var oldCur = document.body.getAttribute('ui-tree-cursor');
              if (oldCur !== null) {
                $document.find('body').css({ cursor: oldCur });
                document.body.removeAttribute('ui-tree-cursor');
              }

              angular.element($document).unbind('touchend', dragEndEvent); // Mobile
              angular.element($document).unbind('touchcancel', dragEndEvent); // Mobile
              angular.element($document).unbind('touchmove', dragMoveEvent); // Mobile
              angular.element($document).unbind('mouseup', dragEndEvent);
              angular.element($document).unbind('mousemove', dragMoveEvent);
              angular.element($document).unbind('mouseleave', dragCancelEvent);
            };

            var dragStartEvent = function(e) {
              if (scope.dragEnabled()) {
                dragStart(e);
              }
            };

            var dragMoveEvent = function(e) {
              dragMove(e);
            };

            var dragEndEvent = function(e) {
              angular.forEach(scope.$treeScope.$selecteds, function(selected) {
                var selectedElement = angular.element(selected);

                if (angular.isDefined(selectedElement)) {
                  var selectedElementScope = selectedElement.scope();

                  if (angular.isDefined(selectedElementScope)) {
                    selectedElementScope.$$apply = true;
                  }
                }
              });

              dragEnd(e);
            };

            var dragCancelEvent = function(e) {
              angular.forEach(scope.$treeScope.$selecteds, function(selected) {
                var selectedElement = angular.element(selected);

                if (angular.isDefined(selectedElement)) {
                  var selectedElementScope = selectedElement.scope();

                  if (angular.isDefined(selectedElementScope)) {
                    selectedElementScope.$$apply = false;
                  }
                }
              });

              dragEnd(e, true);
            };

            var bindDrag = function() {
              element.bind('touchstart mousedown', function (e) {
                if (!scope.$treeScope.multiSelect) {
                  dragDelaying = true;
                  dragStarted = false;

                  dragTimer = $timeout(function() {
                    dragStartEvent(e);
                    dragDelaying = false;
                  }, scope.$treeScope.dragDelay);
                } else {
                  toggleSelect(e);
                }
              });
              element.bind('touchend touchcancel mouseup', function() {
                $timeout.cancel(dragTimer);
              });
            };

            var unbind = function() {
              dragEnd();
              angular.element($document).unbind('keydown').unbind('keyup');
            };

            bindDrag();

            angular.element($document).bind("keydown", function(e) {
              if (e.keyCode === scope.$treeScope.cancelKey) {
                dragCancelEvent(e);
              }

              if (angular.isDefined(scope.$treeScope.lockXKey)) {
                if (e.keyCode === scope.$treeScope.lockXKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockX = scope.$treeScope.$callbacks.lock('X');
                  });
                }
              }
              if (angular.isDefined(scope.$treeScope.lockYKey)) {
                if (e.keyCode === scope.$treeScope.lockYKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockY = scope.$treeScope.$callbacks.lock('Y');
                  });
                }
              }

              if (e.keyCode === scope.$treeScope.copyKey) {
                if (!scope.$treeScope.copy) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.copy = scope.$treeScope.$callbacks.startCopy();
                  });
                  restartDrag(e);
                }
              } else if (e.keyCode === scope.$treeScope.multiSelectKey) {
                if (!scope.$treeScope.multiSelect) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.multiSelect = scope.$treeScope.$callbacks.startSelect();
                  });
                }
              }
            });

            angular.element($document).bind("keyup", function(e) {
              if (angular.isDefined(scope.$treeScope.lockXKey)) {
                if (e.keyCode === scope.$treeScope.lockXKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockX = !scope.$treeScope.$callbacks.unlock('X');
                  });
                }
              }
              if (angular.isDefined(scope.$treeScope.lockYKey)) {
                if (e.keyCode === scope.$treeScope.lockYKey) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.lockY = !scope.$treeScope.$callbacks.unlock('Y');
                  });
                }
              }

              if (e.keyCode === scope.$treeScope.copyKey) {
                if (scope.$treeScope.copy) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.copy = !scope.$treeScope.$callbacks.endCopy();
                  });
                  restartDrag(e);
                }
              } else if (e.keyCode === scope.$treeScope.multiSelectKey) {
                if (scope.$treeScope.multiSelect) {
                  scope.$treeScope.$apply(function() {
                    scope.$treeScope.multiSelect = !scope.$treeScope.$callbacks.endSelect();
                  });
                }
              }
            });

            scope.$on("$destroy", unbind);
          }
        };
      }
    ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')
  .directive('uiTreeNodes', [ 'treeConfig',
    function(treeConfig) {
      return {
        require: ['ngModel', '?^uiTreeNode', '^uiTree'],
        restrict: 'EA',
        scope: {
          maxDepth: '=?',
          expandOnHover: '=?',
          noDrop: '=?',
          horizontal: '=?'
        },
        controller: 'TreeNodesController',
        link: function(scope, element, attrs, controllersArr) {
          var config = {};
          angular.extend(config, treeConfig);
          if (config.nodesClass) {
            element.addClass(config.nodesClass);
          }

          var ngModel = controllersArr[0];
          var treeNodeCtrl = controllersArr[1];
          var treeCtrl = controllersArr[2];

          if (treeNodeCtrl) {
            treeNodeCtrl.scope.$childNodesScope = scope;
            scope.$nodeScope = treeNodeCtrl.scope;
          } else { // find the root nodes if there is no parent node and have a parent ui-tree
            treeCtrl.scope.$nodesScope = scope;
          }
          scope.$treeScope = treeCtrl.scope;

          if (ngModel) {
            ngModel.$render = function() {
              if (!ngModel.$modelValue || !angular.isArray(ngModel.$modelValue)) {
                scope.$modelValue = [];
              }
              scope.$modelValue = ngModel.$modelValue;
            };
          }
        }
      };
    }
  ]);
})();

(function() {
  'use strict';

  angular.module('ui.tree')

   /**
    * @ngdoc service
    * @name ui.tree.service:$helper
    * @requires ng.$document
    * @requires ng.$window
    *
    * @description
    * angular-ui-tree.
    */
    .factory('$uiTreeHelper', ['$document', '$window', 'treeConfig',
      function ($document, $window, treeConfig) {
        return {

          /**
           * A hashtable used to storage data of nodes
           * @type {Object}
           */
          nodesData: {
          },

          setNodeAttribute: function(scope, attrName, val) {
            if (!scope.$modelValue) {
              return undefined;
            }
            var data = this.nodesData[scope.$modelValue.$$hashKey];
            if (!data) {
              data = {};
              this.nodesData[scope.$modelValue.$$hashKey] = data;
            }
            data[attrName] = val;
          },

          getNodeAttribute: function(scope, attrName) {
            if (!scope.$modelValue) {
              return undefined;
            }
            var data = this.nodesData[scope.$modelValue.$$hashKey];
            if (data) {
              return data[attrName];
            }
            return undefined;
          },

          /**
           * @ngdoc method
           * @methodOf ui.tree.service:$nodrag
           * @param  {Object} targetElm angular element
           * @return {Bool} check if the node can be dragged.
           */
          nodrag: function (targetElm) {
            return (typeof targetElm.attr('nodrag')) != "undefined";
          },

          /**
           * get the event object for touchs
           * @param  {[type]} e [description]
           * @return {[type]}   [description]
           */
          eventObj: function(e) {
            var obj = e;
            if (e.targetTouches !== undefined) {
              obj = e.targetTouches.item(0);
            } else if (e.originalEvent !== undefined && e.originalEvent.targetTouches !== undefined) {
              obj = e.originalEvent.targetTouches.item(0);
            }
            return obj;
          },

          dragInfo: function(node) {
            if (angular.isDefined(node)) {
              return {
                source: node,
                sourceInfo: {
                  nodeScope: node,
                  index: (angular.isFunction(node.index)) ? node.index() : 0,
                  nodesScope: node.$parentNodesScope
                },
                index: (angular.isFunction(node.index)) ? node.index() : 0,
                siblings: (angular.isFunction(node.siblings)) ? node.siblings().slice(0) : [],
                parent: node.$parentNodesScope,

                moveTo: function(parent, siblings, index) { // Move the node to a new position
                  if (parent.accept(node, index) === true)
                  {
                    this.parent = parent;
                    this.siblings = siblings.slice(0);
                    var i = this.siblings.indexOf(this.source); // If source node is in the target nodes

                    if (i > -1) {
                      this.siblings.splice(i, 1);
                      if (this.source.index() < index) {
                        index--;
                      }
                    }

                    this.siblings.splice(index, 0, this.source);
                    this.index = index;

                    return true;
                  }

                  return false;
                },

                parentNode: function() {
                  return this.parent.$nodeScope;
                },

                prev: function() {
                  if (this.index > 0) {
                    return this.siblings[this.index - 1];
                  }
                  return undefined;
                },

                next: function() {
                  if (this.index < this.siblings.length - 1) {
                    return this.siblings[this.index + 1];
                  }
                  return undefined;
                },

                isDirty: function() {
                  return this.source.$parentNodesScope != this.parent ||
                          this.source.index() != this.index;
                },

                eventArgs: function(elements, pos) {
                  return {
                    source: this.sourceInfo,
                    dest: {
                      index: this.index,
                      nodesScope: this.parent
                    },
                    elements: elements,
                    pos: pos
                  };
                },

                apply: function(copy) {
                  var nodeData = this.source.$modelValue;
                  if (!copy) {
                    this.source.remove();
                  }

                  if (angular.isDefined(this.parent))
                  {
                    var data = (copy) ? angular.copy(nodeData) : nodeData;
                    var index = this.index;
                    if (copy && this.sourceInfo.index < this.index && this.sourceInfo.nodesScope === this.parent) {
                      index = this.index + 1;
                    }
                    this.parent.insertNode(index, data);
                  }
                }
              };
            } else {
              return undefined;
            }
          },

          /**
          * @ngdoc method
          * @name hippo.theme#height
          * @methodOf ui.tree.service:$helper
          *
          * @description
          * Get the height of an element.
          *
          * @param {Object} element Angular element.
          * @returns {String} Height
          */
          height: function (element) {
            return element.prop('scrollHeight');
          },

          /**
          * @ngdoc method
          * @name hippo.theme#width
          * @methodOf ui.tree.service:$helper
          *
          * @description
          * Get the width of an element.
          *
          * @param {Object} element Angular element.
          * @returns {String} Width
          */
          width: function (element) {
            return element.prop('scrollWidth');
          },

          /**
          * @ngdoc method
          * @name hippo.theme#offset
          * @methodOf ui.nestedSortable.service:$helper
          *
          * @description
          * Get the offset values of an element.
          *
          * @param {Object} element Angular element.
          * @returns {Object} Object with properties width, height, top and left
          */
          offset: function (element) {
            var boundingClientRect = element[0].getBoundingClientRect();

            return {
                width: element.prop('offsetWidth'),
                height: element.prop('offsetHeight'),
                top: boundingClientRect.top + ($window.pageYOffset || $document[0].body.scrollTop || $document[0].documentElement.scrollTop),
                left: boundingClientRect.left + ($window.pageXOffset || $document[0].body.scrollLeft  || $document[0].documentElement.scrollLeft)
              };
          },

          /**
          * @ngdoc method
          * @name hippo.theme#positionStarted
          * @methodOf ui.tree.service:$helper
          *
          * @description
          * Get the start position of the target element according to the provided event properties.
          *
          * @param {Object} e Event
          * @param {Object} target Target element
          * @returns {Object} Object with properties offsetX, offsetY, startX, startY, nowX and dirX.
          */
          positionStarted: function (e, target) {
            var pos = {};
            pos.offsetX = e.pageX - this.offset(target).left;
            pos.offsetY = e.pageY - this.offset(target).top;
            pos.startX = pos.lastX = e.pageX;
            pos.startY = pos.lastY = e.pageY;
            pos.nowX = pos.nowY = pos.distX = pos.distY = pos.dirAx = 0;
            pos.dirX = pos.dirY = pos.lastDirX = pos.lastDirY = pos.distAxX = pos.distAxY = 0;
            return pos;
          },

          positionMoved: function (e, pos, firstMoving) {
            // mouse position last events
            pos.lastX = pos.nowX;
            pos.lastY = pos.nowY;

            // mouse position this events
            pos.nowX  = e.pageX;
            pos.nowY  = e.pageY;

            // distance mouse moved between events
            if (treeConfig.dir == 'rtl') {
              pos.distX = pos.lastX - pos.nowX;
            } else {
              pos.distX = pos.nowX - pos.lastX;
            }
            pos.distY = pos.nowY - pos.lastY;

            // direction mouse was moving
            pos.lastDirX = pos.dirX;
            pos.lastDirY = pos.dirY;

            // direction mouse is now moving (on both axis)
            pos.dirX = pos.distX === 0 ? 0 : pos.distX > 0 ? 1 : -1;
            pos.dirY = pos.distY === 0 ? 0 : pos.distY > 0 ? 1 : -1;

            // axis mouse is now moving on
            var newAx   = Math.abs(pos.distX) > Math.abs(pos.distY) ? 1 : 0;

            // do nothing on first move
            if (firstMoving) {
              pos.dirAx  = newAx;
              pos.moving = true;
              return;
            }

            // calc distance moved on this axis (and direction)
            if (pos.dirAx !== newAx) {
              pos.distAxX = 0;
              pos.distAxY = 0;
            } else {
              pos.distAxX += Math.abs(pos.distX);
              if (pos.dirX !== 0 && pos.dirX !== pos.lastDirX) {
                pos.distAxX = 0;
              }

              pos.distAxY += Math.abs(pos.distY);
              if (pos.dirY !== 0 && pos.dirY !== pos.lastDirY) {
                pos.distAxY = 0;
              }
            }

            pos.dirAx = newAx;
          },

          findIntersect: function(elmPos, nodes, collideWith, direction, horizontal) {
            var self = this;
            var intersectWith;
            for (var nodeIdx = 0; nodeIdx < nodes.length; nodeIdx++) {
              var intersectWithChild;
              var nodeElement = angular.element(nodes[nodeIdx]);

              if (angular.isDefined(nodeElement[0])) {
                if (nodeElement.hasClass('angular-ui-tree-node')) {
                  intersectWithChild = self.findIntersect(elmPos, nodeElement.children(), collideWith, direction, horizontal);

                  if (angular.isUndefined(intersectWithChild)) {
                    var nodeOffset = self.offset(nodeElement);
                    var nodePos = {
                      left: nodeOffset.left,
                      width: nodeOffset.width,
                      right: nodeOffset.left + nodeOffset.width,
                      top: nodeOffset.top,
                      height: nodeOffset.height,
                      bottom: nodeOffset.top + nodeOffset.height
                    };

                    var isOverElementWidth;
                    var isOverElementHeight;
                    if (horizontal) {
                      if (direction < 0) {
                        isOverElementWidth = (collideWith === 'bottom') ? (elmPos.left <= nodePos.right && elmPos.right >= nodePos.left)
                                                                         : (elmPos.right <= nodePos.right && elmPos.right >= nodePos.left);
                      } else if (direction > 0) {
                        isOverElementWidth = (collideWith === 'bottom') ? (elmPos.right >= nodePos.left && elmPos.left <= nodePos.right)
                                                                        : (elmPos.left >= nodePos.left && elmPos.left <= nodePos.right);
                      }
                    }

                    if (direction < 0) {
                      isOverElementHeight = (collideWith === 'bottom') ? (elmPos.top <= nodePos.bottom && elmPos.bottom >= nodePos.top)
                                                                       : (elmPos.bottom <= nodePos.bottom && elmPos.bottom >= nodePos.top);
                    } else if (direction > 0) {
                      isOverElementHeight = (collideWith === 'bottom') ? (elmPos.bottom >= nodePos.top && elmPos.top <= nodePos.bottom)
                                                                       : (elmPos.top >= nodePos.top && elmPos.top <= nodePos.bottom);
                    }

                    if ((horizontal && (isOverElementWidth && isOverElementHeight)) || (!horizontal && isOverElementHeight)) {
                      intersectWith = nodes[nodeIdx];
                    }
                  } else {
                    intersectWith = intersectWithChild;
                  }
                } else {
                  if (angular.isDefined(nodeElement.children()) && nodeElement.children().length > 0) {
                    intersectWith = self.findIntersect(elmPos, nodeElement.children(), collideWith, direction, horizontal);
                  }
                }
              }

              if (angular.isDefined(intersectWith))
              {
                break;
              }
            }

            return intersectWith;
          }
        };
      }
    ]);
})();

angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){r=!!("horizontal"in g),r?(s={width:""},t={width:"0"}):(s={height:""},t={height:"0"}),d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css(s)}function i(a){return r?{width:a.scrollWidth+"px"}:{height:a.scrollHeight+"px"}}function j(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(n(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",css:{overflow:"hidden"},to:i(f[0])}).start()["finally"](k):a.addClass(f,"in",{css:{overflow:"hidden"},to:i(f[0])}).then(k)})}function k(){f.removeClass("collapsing").addClass("collapse").css(s),o(d)}function l(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(p(d)).then(function(){f.css(i(f[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:t}).start()["finally"](m):a.removeClass(f,"in",{to:t}).then(m)}):m()}function m(){f.css(t),f.removeClass("collapsing").addClass("collapse"),q(d)}var n=c(g.expanding),o=c(g.expanded),p=c(g.collapsing),q=c(g.collapsed),r=!1,s={},t={};h(),d.$watch(g.uibCollapse,function(a){a?l():j()})}}}]),angular.module("ui.bootstrap.tabindex",[]).directive("uibTabindexToggle",function(){return{restrict:"A",link:function(a,b,c){c.$observe("disabled",function(a){c.$set("tabindex",a?-1:null)})}}}),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse","ui.bootstrap.tabindex"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){b.addClass("panel"),d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$element","$attrs","$interpolate","$timeout",function(a,b,c,d,e){a.closeable=!!c.close,b.addClass("alert"),c.$set("role","alert"),a.closeable&&b.addClass("alert-dismissible");var f=angular.isDefined(c.dismissOnTimeout)?d(c.dismissOnTimeout)(a.$parent):null;f&&e(function(){a.close()},parseInt(f,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,scope:{close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(){for(;t.length;)t.shift()}function g(a){for(var b=0;b<q.length;b++)q[b].slide.active=b===a}function h(c,d,i){if(!u){if(angular.extend(c,{direction:i}),angular.extend(q[s].slide||{},{direction:i}),e.enabled(b)&&!a.$currentTransition&&q[d].element&&p.slides.length>1){q[d].element.data(r,c.direction);var j=p.getCurrentIndex();angular.isNumber(j)&&q[j].element&&q[j].element.data(r,c.direction),a.$currentTransition=!0,e.on("addClass",q[d].element,function(b,c){if("close"===c&&(a.$currentTransition=null,e.off("addClass",b),t.length)){var d=t.pop().slide,g=d.index,i=g>p.getCurrentIndex()?"next":"prev";f(),h(d,g,i)}})}a.active=c.index,s=c.index,g(d),l()}}function i(a){for(var b=0;b<q.length;b++)if(q[b].slide===a)return b}function j(){n&&(c.cancel(n),n=null)}function k(b){b.length||(a.$currentTransition=null,f())}function l(){j();var b=+a.interval;!isNaN(b)&&b>0&&(n=c(m,b))}function m(){var b=+a.interval;o&&!isNaN(b)&&b>0&&q.length?a.next():a.pause()}var n,o,p=this,q=p.slides=a.slides=[],r="uib-slideDirection",s=a.active,t=[],u=!1;b.addClass("carousel"),p.addSlide=function(b,c){q.push({slide:b,element:c}),q.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===q.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),s=b.index,a.active=b.index,g(s),p.select(q[i(b)]),1===q.length&&a.play())},p.getCurrentIndex=function(){for(var a=0;a<q.length;a++)if(q[a].slide.index===s)return a},p.next=a.next=function(){var b=(p.getCurrentIndex()+1)%q.length;return 0===b&&a.noWrap()?void a.pause():p.select(q[b],"next")},p.prev=a.prev=function(){var b=p.getCurrentIndex()-1<0?q.length-1:p.getCurrentIndex()-1;return a.noWrap()&&b===q.length-1?void a.pause():p.select(q[b],"prev")},p.removeSlide=function(b){var c=i(b),d=t.indexOf(q[c]);-1!==d&&t.splice(d,1),q.splice(c,1),q.length>0&&s===c?c>=q.length?(s=q.length-1,a.active=s,g(s),p.select(q[q.length-1])):(s=c,a.active=s,g(s),p.select(q[c])):s>c&&(s--,a.active=s),0===q.length&&(s=null,a.active=null,f())},p.select=a.select=function(b,c){var d=i(b.slide);void 0===c&&(c=d>p.getCurrentIndex()?"next":"prev"),b.slide.index===s||a.$currentTransition?b&&b.slide.index!==s&&a.$currentTransition&&t.push(q[d]):h(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===q.length-1&&a.noWrap()},a.pause=function(){a.noPause||(o=!1,j())},a.play=function(){o||(o=!0,l())},b.on("mouseenter",a.pause),b.on("mouseleave",a.play),a.$on("$destroy",function(){u=!0,j()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",l),a.$watchCollection("slides",k),a.$watch("active",function(a){if(angular.isNumber(a)&&s!==a){for(var b=0;b<q.length;b++)if(q[b].slide.index===a){a=b;break}var c=q[a];c&&(g(a),p.select(q[a]),s=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,controller:"UibCarouselController",controllerAs:"carousel",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",["$animate",function(a){return{require:"^uibCarousel",restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(b,c,d,e){c.addClass("item"),e.addSlide(b,c),b.$on("$destroy",function(){e.removeSlide(b)}),b.$watch("active",function(b){a[b?"addClass":"removeClass"](c,"active")})}}}]).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter",function(a,b,c,d){function e(a){var b=[],c=a.split(""),e=a.indexOf("'");if(e>-1){var f=!1;a=a.split("");for(var g=e;g<a.length;g++)f?("'"===a[g]&&(g+1<a.length&&"'"===a[g+1]?(a[g+1]="$",c[g+1]=""):(c[g]="",f=!1)),a[g]="$"):"'"===a[g]&&(a[g]="$",c[g]="",f=!0);a=a.join("")}return angular.forEach(q,function(d){var e=a.indexOf(d.key);if(e>-1){a=a.split(""),c[e]="("+d.regex+")",a[e]="$";for(var f=e+1,g=e+d.key.length;g>f;f++)c[f]="",a[f]="$";a=a.join(""),b.push({index:e,key:d.key,apply:d.apply,matcher:d.regex})}}),{regex:new RegExp("^"+c.join("")+"$"),map:d(b,"index")}}function f(a){for(var b,c,d=[],e=0;e<a.length;)if(angular.isNumber(c)){if("'"===a.charAt(e))(e+1>=a.length||"'"!==a.charAt(e+1))&&(d.push(g(a,c,e)),c=null);else if(e===a.length)for(;c<a.length;)b=h(a,c),d.push(b),c=b.endIdx;e++}else"'"!==a.charAt(e)?(b=h(a,e),d.push(b.parser),e=b.endIdx):(c=e,e++);return d}function g(a,b,c){return function(){return a.substr(b+1,c-b-1)}}function h(a,b){for(var c=a.substr(b),d=0;d<q.length;d++)if(new RegExp("^"+q[d].key).test(c)){var e=q[d];return{endIdx:b+e.key.length,parser:e.formatter}}return{endIdx:b+1,parser:function(){return c.charAt(0)}}}function i(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function j(a){return parseInt(a,10)}function k(a,b){return a&&b?o(a,b):a}function l(a,b){return a&&b?o(a,b,!0):a}function m(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function n(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function o(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=m(b,d);return n(a,c*(e-d))}var p,q,r=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){p=b.id,this.parsers={},this.formatters={},q=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=j(c+d),this.minutes+=j(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}]},this.init(),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==p&&this.init(),this.formatters[c]||(this.formatters[c]=f(c));var d=this.formatters[c];return d.reduce(function(b,c){return b+c(a)},"")},this.parse=function(c,d,f){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(r,"\\$&"),b.id!==p&&this.init(),this.parsers[d]||(this.parsers[d]=e(d,"apply"));var g=this.parsers[d],h=g.regex,j=g.map,k=c.match(h),l=!1;if(k&&k.length){var m,n;angular.isDate(f)&&!isNaN(f.getTime())?m={year:f.getFullYear(),month:f.getMonth(),date:f.getDate(),hours:f.getHours(),minutes:f.getMinutes(),seconds:f.getSeconds(),milliseconds:f.getMilliseconds()}:(f&&a.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var o=1,q=k.length;q>o;o++){var s=j[o-1];"Z"===s.matcher&&(l=!0),s.apply&&s.apply.call(m,k[o])}var t=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return i(m.year,m.month,m.date)&&(!angular.isDate(f)||isNaN(f.getTime())||l?(n=new Date(0),t.call(n,m.year,m.month,m.date),u.call(n,m.hours||0,m.minutes||0,m.seconds||0,m.milliseconds||0)):(n=new Date(f),t.call(n,m.year,m.month,m.date),u.call(n,m.hours,m.minutes,m.seconds,m.milliseconds))),n}},this.toTimezone=k,this.fromTimezone=l,this.timezoneToOffset=m,this.addDateMinutes=n,this.convertTimezoneToLocal=o}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",monthColumns:3,ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$element","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}var n=this,o={$setViewValue:angular.noop},p={},q=[];b.addClass("uib-datepicker"),c.$set("role","application"),a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","monthColumns","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:i.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":n[b]=angular.isDefined(a.datepickerOptions[b])?e(a.datepickerOptions[b])(a.$parent):i[b];break;case"monthColumns":case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":n[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:i[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?n.startingDay=a.datepickerOptions.startingDay:angular.isNumber(i.startingDay)?n.startingDay=i.startingDay:n.startingDay=(f.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?n[b]=l.fromTimezone(new Date(a),p.timezone):(j&&g.warn("Literal date support has been deprecated, please switch to date object usage"),n[b]=new Date(h(a,"medium"))):n[b]=i[b]?l.fromTimezone(new Date(i[b]),p.timezone):null,n.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){n[b]=a[b]=angular.isDefined(c)?c:a.datepickerOptions[b],("minMode"===b&&n.modes.indexOf(a.datepickerOptions.datepickerMode)<n.modes.indexOf(n[b])||"maxMode"===b&&n.modes.indexOf(a.datepickerOptions.datepickerMode)>n.modes.indexOf(n[b]))&&(a.datepickerMode=n[b],a.datepickerOptions.datepickerMode=n[b])}):n[b]=a[b]=i[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(c.disabled)||!1,angular.isDefined(c.ngDisabled)&&q.push(a.$parent.$watch(c.ngDisabled,function(b){a.disabled=b,n.refreshView()})),a.isActive=function(b){return 0===n.compare(b.date,n.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){o=b,p=b.$options||a.datepickerOptions.ngModelOptions||i.ngModelOptions,a.datepickerOptions.initDate?(n.activeDate=l.fromTimezone(a.datepickerOptions.initDate,p.timezone)||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(o.$isEmpty(o.$modelValue)||o.$invalid)&&(n.activeDate=l.fromTimezone(a,p.timezone),n.refreshView())})):n.activeDate=new Date;var c=o.$modelValue?new Date(o.$modelValue):new Date;this.activeDate=isNaN(c)?l.fromTimezone(new Date,p.timezone):l.fromTimezone(c,p.timezone),o.$render=function(){n.render()}},this.render=function(){if(o.$viewValue){var a=new Date(o.$viewValue),b=!isNaN(a);b?this.activeDate=l.fromTimezone(a,p.timezone):k||g.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=o.$viewValue?new Date(o.$viewValue):null;b=l.fromTimezone(b,p.timezone),o.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=o.$viewValue?new Date(o.$viewValue):null;d=l.fromTimezone(d,p.timezone);var e=new Date;e=l.fromTimezone(e,p.timezone);var f=this.compare(b,e),g={date:b,label:l.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),n.activeDate&&0===this.compare(g.date,n.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===n.minMode){var c=o.$viewValue?l.fromTimezone(new Date(o.$viewValue),p.timezone):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=l.toTimezone(c,p.timezone),o.$setViewValue(c),o.$render()}else n.activeDate=b,m(n.modes[n.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=n.activeDate.getFullYear()+a*(n.step.years||0),c=n.activeDate.getMonth()+a*(n.step.months||0);n.activeDate.setFullYear(b,c,1),n.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===n.maxMode&&1===b||a.datepickerMode===n.minMode&&-1===b||(m(n.modes[n.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var r=function(){n.element[0].focus()};a.$on("uib:datepicker.focus",r),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),n.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(n.isDisabled(n.activeDate))return;a.select(n.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(n.handleKeyDown(c,b),n.refreshView()):a.toggleMode("up"===c?1:-1)},b.on("keydown",function(b){a.$apply(function(){a.keydown(b)})}),a.$on("$destroy",function(){for(;q.length;)q.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,this.monthColumns),a.yearHeaderColspan=this.monthColumns>3?this.monthColumns-2:1},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=this.monthColumns;else if("right"===a)c+=1;else if("down"===a)c+=this.monthColumns;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],restrict:"A",controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},require:["^uibDatepicker","uibDaypicker"],restrict:"A",controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],restrict:"A",controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],restrict:"A",controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,
hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(f,g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},adjustTop:function(a,b,c,d){return-1!==a.indexOf("top")&&c!==d?{top:b.top-d+"px"}:void 0},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,w,a.date);if(isNaN(c))for(var d=0;d<I.length;d++)if(c=l.parse(b,I[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.fromTimezone(b,G.timezone)}return F.$options&&F.$options.allowInvalid?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(d)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=H[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(H[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,y);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}var w,x,y,z,A,B,C,D,E,F,G,H,I,J=!1,K=[];this.init=function(e){if(F=e,G=angular.isObject(e.$options)?e.$options:{timezone:null},x=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,y=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,z=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,A=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,B=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,I=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(w=m.html5Types[c.type],J=!0):(w=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==w&&(w=c,F.$modelValue=null,!w))throw new Error("uibDatepickerPopup must have a date format specified.")})),!w)throw new Error("uibDatepickerPopup must have a date format specified.");if(J&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");C=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),C.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":A}),D=angular.element(C.children()[0]),D.attr("template-url",B),a.datepickerOptions||(a.datepickerOptions={}),J&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),D.attr("datepicker-options","datepickerOptions"),J?F.$formatters.push(function(b){return a.date=l.fromTimezone(b,G.timezone),b}):(F.$$parserName="date",F.$validators.date=s,F.$parsers.unshift(r),F.$formatters.push(function(b){return F.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,G.timezone),l.filter(a.date,w))})),F.$viewChangeListeners.push(function(){a.date=q(F.$viewValue)}),b.on("keydown",u),H=d(C)(a),C.remove(),y?h.find("body").append(H):b.after(H),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),H.remove(),b.off("keydown",u),h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v);K.length;)K.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,G.timezone));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=new Date(a.datepickerOptions[b]):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){a.date=c;var d=a.date?l.filter(a.date,w):null;b.val(d),F.$setViewValue(d),x&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):(b=l.fromTimezone(d,G.timezone),b.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&K.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),z&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;y||j.parsePlacement(d)[2]?(E=E||angular.element(j.scrollParent(b)),E&&E.on("scroll",v)):E=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b,e){c||a.on("click",d),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b,e){c===b&&(c=null,a.off("click",d),a.off("keydown",this.keybindFilter))};var d=function(a){if(c&&!(a&&"disabled"===c.getAutoClose()||a&&3===a.which)){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,c.focusToggleElement(),b.$$phase||c.$apply())}}};this.keybindFilter=function(a){var b=c.getDropdownElement(),e=c.getToggleElement(),f=b&&b[0].contains(a.target),g=e&&e[0].contains(a.target);27===a.which?(a.stopPropagation(),c.focusToggleElement(),d()):c.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&c.isOpen&&(f||g)&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.appendToOpenClass,q=e.openClass,r=angular.noop,s=c.onToggle?d(c.onToggle):angular.noop,t=!1,u=null,v=!1,w=i.find("body");b.addClass("dropdown"),this.init=function(){if(c.isOpen&&(m=d(c.isOpen),r=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),angular.isDefined(c.dropdownAppendTo)){var e=d(c.dropdownAppendTo)(o);e&&(u=angular.element(e))}t=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.keyboardNav),t&&!u&&(u=w),u&&n.dropdownMenu&&(u.append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen,angular.isFunction(r)&&r(o,o.isOpen),o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return v},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(u&&n.dropdownMenu){var e,m,v,w=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),x=0;if(e={top:w.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right"),m?(e.left="auto",v=h.scrollbarPadding(u),v.heightOverflow&&v.scrollbarWidth&&(x=v.scrollbarWidth),e.right=window.innerWidth-x-(w.left+b.prop("offsetWidth"))+"px"):(e.left=w.left+"px",e.right="auto"),!t){var y=h.offset(u);e.top=w.top-y.top+"px",m?e.right=window.innerWidth-(w.left-y.left+b.prop("offsetWidth"))+"px":e.left=w.left-y.left+"px"}n.dropdownMenu.css(e)}var z=u?u:b,A=z.hasClass(u?p:q);if(A===!c&&g[c?"addClass":"removeClass"](z,u?p:q).then(function(){angular.isDefined(c)&&c!==d&&s(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl?k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b,i.on("keydown",f.keybindFilter)})}):i.on("keydown",f.keybindFilter),o.focusToggleElement(),f.open(o,b);else{if(f.close(o,b),n.dropdownMenuTemplateUrl){l&&l.$destroy();var B=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(B),n.dropdownMenu=B}n.selectedOption=null}angular.isFunction(r)&&r(a,c)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.pop()},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap","ui.bootstrap.position"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{restrict:"A",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();e.$$postDigest(function(){h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",["$animate",function(a){return{link:function(b,c,d,e,f){f(b.$parent,function(b){c.empty(),a.enter(b,c)})}}}]).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){var b="-";return a.replace(C,function(a,c){return(c?b:"")+a.toLowerCase()})}function k(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function l(){for(var a=-1,b=w.keys(),c=0;c<b.length;c++)w.get(b[c]).value.backdrop&&(a=c);return a>-1&&z>a&&(a=z),a}function m(a,b){var c=w.get(a).value,d=c.appendTo;w.remove(a),A=w.top(),A&&(z=parseInt(A.value.modalDomEl.attr("index"),10)),p(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||v;x.remove(b,a);var e=x.hasKey(b);d.toggleClass(b,e),!e&&u&&u.heightOverflow&&u.scrollbarWidth&&(u.originalRight?d.css({paddingRight:u.originalRight+"px"}):d.css({paddingRight:""}),u=null),n(!0)},c.closedDeferred),o(),b&&b.focus?b.focus():d.focus&&d.focus()}function n(a){var b;w.length()>0&&(b=w.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function o(){if(s&&-1===l()){var a=t;p(s,t,function(){a=null}),s=void 0,t=void 0}}function p(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){d&&d(),b.remove(),e&&e.resolve()}),c.$destroy())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(y.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function q(a){if(a.isDefaultPrevented())return a;var b=w.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){y.dismiss(b.key,"escape key press")}));break;case 9:var c=y.loadFocusElementList(b),d=!1;a.shiftKey?(y.isFocusInFirstItem(a,c)||y.isModalFocused(a,b))&&(d=y.focusLastFocusableElement(c)):y.isFocusInLastItem(a,c)&&(d=y.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function r(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var s,t,u,v="modal-open",w=h.createNew(),x=g.createNew(),y={NOW_CLOSING_EVENT:"modal.stack.now-closing"},z=0,A=null,B="a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",C=/[A-Z]/g;return e.$watch(l,function(a){t&&(t.index=a)}),c.on("keydown",q),e.$on("$destroy",function(){c.off("keydown",q)}),y.open=function(b,f){var g=c[0].activeElement,h=f.openedClass||v;n(!1),A=w.top(),w.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),x.put(h,b);var k=f.appendTo,m=l();if(!k.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");m>=0&&!s&&(t=e.$new(!0),t.modalOptions=f,t.index=m,s=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),s.attr({"class":"modal-backdrop","ng-style":"{'z-index': 1040 + (index && 1 || 0) + index*10}","uib-modal-animation-class":"fade","modal-in-class":"in"}),f.backdropClass&&s.addClass(f.backdropClass),f.animation&&s.attr("modal-animation","true"),d(s)(t),a.enter(s,k),i.isScrollable(k)&&(u=i.scrollbarPadding(k),u.heightOverflow&&u.scrollbarWidth&&k.css({paddingRight:u.right+"px"})));var o;f.component?(o=document.createElement(j(f.component.name)),o=angular.element(o),o.attr({resolve:"$resolve","modal-instance":"$uibModalInstance",close:"$close($value)",dismiss:"$dismiss($value)"})):o=f.content,z=A?parseInt(A.value.modalDomEl.attr("index"),10)+1:0;var p=angular.element('<div uib-modal-window="modal-window"></div>');p.attr({"class":"modal","template-url":f.windowTemplateUrl,"window-top-class":f.windowTopClass,role:"dialog","aria-labelledby":f.ariaLabelledBy,"aria-describedby":f.ariaDescribedBy,size:f.size,index:z,animate:"animate","ng-style":"{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",tabindex:-1,"uib-modal-animation-class":"fade","modal-in-class":"in"}).append(o),f.windowClass&&p.addClass(f.windowClass),f.animation&&p.attr("modal-animation","true"),k.addClass(h),f.scope&&(f.scope.$$topModalIndex=z),a.enter(d(p)(f.scope),k),w.top().value.modalDomEl=p,w.top().value.modalOpener=g},y.close=function(a,b){var c=w.get(a);return c&&r(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),m(a,c.value.modalOpener),!0):!c},y.dismiss=function(a,b){var c=w.get(a);return c&&r(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),m(a,c.value.modalOpener),!0):!c},y.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},y.getTop=function(){return w.top()},y.modalRendered=function(a){var b=w.get(a);b&&b.value.renderDeferred.resolve()},y.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},y.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},y.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},y.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},y.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},y.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(B);return c?Array.prototype.filter.call(c,function(a){return k(a)}):c}}},y}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return q}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.component&&!e.template&&!e.templateUrl)throw new Error("One of component or template or templateUrl options is required.");var q;q=e.component?c.when(g.resolve(e.resolve,{},null,null)):c.all([i(e),g.resolve(e.resolve,{},null,null)]);var r;return r=k=c.all([k]).then(j,j).then(function(a){function c(b,c,d,e){b.$scope=g,b.$scope.$resolve={},d?b.$scope.$uibModalInstance=p:b.$uibModalInstance=p;var f=c?a[1]:a;angular.forEach(f,function(a,c){e&&(b[c]=a),b.$scope.$resolve[c]=a})}var d=e.scope||b,g=d.$new();g.$close=p.close,g.$dismiss=p.dismiss,g.$on("$destroy",function(){g.$$uibDestructionScheduled||g.$dismiss("$uibUnscheduledDestruction")});var i,j,k={scope:g,deferred:l,renderDeferred:o,closedDeferred:n,animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,ariaLabelledBy:e.ariaLabelledBy,ariaDescribedBy:e.ariaDescribedBy,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo},q={},r={};e.component?(c(q,!1,!0,!1),q.name=e.component,k.component=q):e.controller&&(c(r,!0,!1,!0),j=f(e.controller,r,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(i=j.instance,i.$close=g.$close,i.$dismiss=g.$dismiss,angular.extend(i,{$resolve:r.$scope.$resolve},d)),i=j(),angular.isFunction(i.$onInit)&&i.$onInit()),e.component||(k.content=a[0]),h.open(p,k),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===r&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],restrict:"A",controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},link:function(b,c,d,e){c.addClass("pager");var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o);
}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],restrict:"A",controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},link:function(a,c,d,e){c.addClass("pagination");var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),b=null)}}var o=m.createNew();return h.on("keyup",n),k.$on("$destroy",function(){h.off("keyup",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'origin-scope="origScope" class="uib-position-measure '+k+'" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){N.isOpen?q():m()}function m(){M&&!a.$eval(d[k+"Enable"])||(u(),x(),N.popupDelay?G||(G=g(r,N.popupDelay,!1)):r())}function q(){s(),N.popupCloseDelay?H||(H=g(t,N.popupCloseDelay,!1)):t()}function r(){return s(),u(),N.content?(v(),void N.$evalAsync(function(){N.isOpen=!0,y(!0),S()})):angular.noop}function s(){G&&(g.cancel(G),G=null),I&&(g.cancel(I),I=null)}function t(){N&&N.$evalAsync(function(){N&&(N.isOpen=!1,y(!1),N.animation?F||(F=g(w,150,!1)):w())})}function u(){H&&(g.cancel(H),H=null),F&&(g.cancel(F),F=null)}function v(){D||(E=N.$new(),D=c(E,function(a){K?h.find("body").append(a):b.after(a)}),o.add(N,{close:t}),z())}function w(){s(),u(),A(),D&&(D.remove(),D=null),o.remove(N),E&&(E.$destroy(),E=null)}function x(){N.title=d[k+"Title"],Q?N.content=Q(a):N.content=d[e],N.popupClass=d[k+"Class"],N.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(N.placement);J=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);N.popupDelay=isNaN(c)?n.popupDelay:c,N.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){P&&angular.isFunction(P.assign)&&P.assign(a,b)}function z(){R.length=0,Q?(R.push(a.$watch(Q,function(a){N.content=a,!a&&N.isOpen&&t()})),R.push(E.$watch(function(){O||(O=!0,E.$$postDigest(function(){O=!1,N&&N.isOpen&&S()}))}))):R.push(d.$observe(e,function(a){N.content=a,!a&&N.isOpen?t():S()})),R.push(d.$observe(k+"Title",function(a){N.title=a,N.isOpen&&S()})),R.push(d.$observe(k+"Placement",function(a){N.placement=a?a:n.placement,N.isOpen&&S()}))}function A(){R.length&&(angular.forEach(R,function(a){a()}),R.length=0)}function B(a){N&&N.isOpen&&D&&(b[0].contains(a.target)||D[0].contains(a.target)||q())}function C(){var c=[],e=[],f=a.$eval(d[k+"Trigger"]);T(),angular.isObject(f)?(Object.keys(f).forEach(function(a){c.push(a),e.push(f[a])}),L={show:c,hide:e}):L=p(f),"none"!==L.show&&L.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===L.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(L.hide[c],q)),b.on("keypress",function(a){27===a.which&&q()})})}var D,E,F,G,H,I,J,K=angular.isDefined(n.appendToBody)?n.appendToBody:!1,L=p(void 0),M=angular.isDefined(d[k+"Enable"]),N=a.$new(!0),O=!1,P=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,Q=n.useContentExp?l(d[e]):!1,R=[],S=function(){D&&D.html()&&(I||(I=g(function(){var a=i.positionElements(b,D,N.placement,K),c=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),d=K?i.offset(b):i.position(b);D.css({top:a.top+"px",left:a.left+"px"});var e=a.placement.split("-");D.hasClass(e[0])||(D.removeClass(J.split("-")[0]),D.addClass(e[0])),D.hasClass(n.placementClassPrefix+a.placement)||(D.removeClass(n.placementClassPrefix+J),D.addClass(n.placementClassPrefix+a.placement)),g(function(){var a=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),b=i.adjustTop(e,d,c,a);b&&D.css(b)},0,!1),D.hasClass("uib-position-measure")?(i.positionArrow(D,a.placement),D.removeClass("uib-position-measure")):J!==a.placement&&i.positionArrow(D,a.placement),J=a.placement,I=null},0,!1)))};N.origScope=a,N.isOpen=!1,N.contentExp=function(){return N.content},d.$observe("disabled",function(a){a&&s(),a&&N.isOpen&&t()}),P&&a.$watch(P,function(a){N&&!a===N.isOpen&&j()});var T=function(){L.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j))}),L.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};C();var U=a.$eval(d[k+"Animation"]);N.animation=angular.isDefined(U)?!!U:n.animation;var V,W=k+"AppendToBody";V=W in d&&void 0===d[W]?!0:a.$eval(d[W]),K=angular.isDefined(V)?V:K,a.$on("$destroy",function(){T(),w(),N=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{restrict:"A",scope:{content:"@"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{restrict:"A",scope:{contentExp:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{restrict:"A",scope:{uibTitle:"@",contentExp:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&",uibTitle:"@"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{restrict:"A",scope:{uibTitle:"@",content:"@"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],restrict:"A",scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===v[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),u.$setViewValue(new Date(s)),n(a)}function m(){u.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(u.$modelValue){var c=s.getHours(),d=s.getMinutes(),e=s.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!w),"m"!==b&&(a.minutes=k(d)),a.meridian=s.getHours()<12?v[0]:v[1],"s"!==b&&(a.seconds=k(e)),a.meridian=s.getHours()<12?v[0]:v[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=v[0]}function o(a){s=q(s,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s=new Date,t=[],u={$setViewValue:angular.noop},v=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,w=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){u=b,u.$render=this.render,u.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2),i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var x=g.hourStep;c.hourStep&&t.push(a.$parent.$watch(d(c.hourStep),function(a){x=+a}));var y=g.minuteStep;c.minuteStep&&t.push(a.$parent.$watch(d(c.minuteStep),function(a){y=+a}));var z;t.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);z=isNaN(b)?void 0:b}));var A;t.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);A=isNaN(b)?void 0:b}));var B=!1;c.ngDisabled&&t.push(a.$parent.$watch(d(c.ngDisabled),function(a){B=a})),a.noIncrementHours=function(){var a=p(s,60*x);return B||a>A||s>a&&z>a},a.noDecrementHours=function(){var a=p(s,60*-x);return B||z>a||a>s&&a>A},a.noIncrementMinutes=function(){var a=p(s,y);return B||a>A||s>a&&z>a},a.noDecrementMinutes=function(){var a=p(s,-y);return B||z>a||a>s&&a>A},a.noIncrementSeconds=function(){var a=q(s,C);return B||a>A||s>a&&z>a},a.noDecrementSeconds=function(){var a=q(s,-C);return B||z>a||a>s&&a>A},a.noToggleMeridian=function(){return s.getHours()<12?B||p(s,720)>A:B||p(s,-720)<z};var C=g.secondStep;c.secondStep&&t.push(a.$parent.$watch(d(c.secondStep),function(a){C=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&t.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&t.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,u.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(s.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){u.$setViewValue(null),u.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c),angular.isDefined(d)&&(a.invalidSeconds=d)};a.updateHours=function(){var a=h(),b=i();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(a),s.setMinutes(b),z>s||s>A?e(!0):l("h")):e(!0)},b.bind("blur",function(b){u.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!w)})}),a.updateMinutes=function(){var a=i(),b=h();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(b),s.setMinutes(a),z>s||s>A?e(void 0,!0):l("m")):e(void 0,!0)},c.bind("blur",function(b){u.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();u.$setDirty(),angular.isDefined(a)?(s.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.bind("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=u.$viewValue;isNaN(b)?(u.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(s=b),z>s||s>A?(u.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*x*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-x*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*y)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-y)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(C)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-C)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(s.getHours()<12?60:-60)):a.meridian=a.meridian===v[0]?v[1]:v[0])},a.blur=function(){u.$setTouched()},a.$on("$destroy",function(){for(;t.length;)t.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],restrict:"A",controller:"UibTimepickerController",controllerAs:"timepicker",scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){O.moveInProgress||(O.moveInProgress=!0,O.$digest()),Z()}function o(){O.position=E?l.offset(b):l.position(b),O.position.top+=b.prop("offsetHeight")}var p,q,r=[9,13,27,38,40],s=200,t=a.$eval(c.typeaheadMinLength);t||0===t||(t=1),a.$watch(c.typeaheadMinLength,function(a){t=a||0===a?a:1});var u=a.$eval(c.typeaheadWaitMs)||0,v=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){v=a!==!1});var w,x,y=e(c.typeaheadLoading).assign||angular.noop,z=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},A=e(c.typeaheadOnSelect),B=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,C=e(c.typeaheadNoResults).assign||angular.noop,D=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,E=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,F=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,G=a.$eval(c.typeaheadFocusFirst)!==!1,H=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,I=e(c.typeaheadIsOpen).assign||angular.noop,J=a.$eval(c.typeaheadShowHint)||!1,K=e(c.ngModel),L=e(c.ngModel+"($$$p)"),M=function(b,c){return angular.isFunction(K(a))&&q&&q.$options&&q.$options.getterSetter?L(b,{$$$p:c}):K.assign(b,c)},N=m.parse(c.uibTypeahead),O=a.$new(),P=a.$on("$destroy",function(){O.$destroy()});O.$on("$destroy",P);var Q="typeahead-"+O.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":Q});var R,S;J&&(R=angular.element("<div></div>"),R.css("position","relative"),b.after(R),S=b.clone(),S.attr("placeholder",""),S.attr("tabindex","-1"),S.val(""),S.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),S.attr("id")&&S.removeAttr("id"),R.append(S),S.after(b));var T=angular.element("<div uib-typeahead-popup></div>");T.attr({id:Q,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&T.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&T.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var U=function(){J&&S.val("")},V=function(){O.matches=[],O.activeIdx=-1,b.attr("aria-expanded",!1),U()},W=function(a){return Q+"-option-"+a};O.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",W(a))});var X=function(a,b){return O.matches.length>b&&a?a.toUpperCase()===O.matches[b].label.toUpperCase():!1},Y=function(c,d){var e={$viewValue:c};y(a,!0),C(a,!1),f.when(N.source(a,e)).then(function(f){var g=c===p.$viewValue;if(g&&w)if(f&&f.length>0){O.activeIdx=G?0:-1,C(a,!1),O.matches.length=0;for(var h=0;h<f.length;h++)e[N.itemName]=f[h],O.matches.push({id:W(h),label:N.viewMapper(O,e),model:f[h]});if(O.query=c,o(),b.attr("aria-expanded",!0),H&&1===O.matches.length&&X(c,0)&&(angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(0,d)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(0,d)),J){var i=O.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?S.val(c+i.slice(c.length)):S.val("")}}else V(),C(a,!0);g&&y(a,!1)},function(){V(),y(a,!1),C(a,!0)})};E&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var Z=k(function(){O.matches.length&&o(),O.moveInProgress=!1},s);O.moveInProgress=!1,O.query=void 0;var $,_=function(a){$=g(function(){Y(a)},u)},aa=function(){$&&g.cancel($)};V(),O.assignIsOpen=function(b){I(a,b)},O.select=function(d,e){var f,h,i={};x=!0,i[N.itemName]=h=O.matches[d].model,f=N.modelMapper(a,i),M(a,f),p.$setValidity("editable",!0),p.$setValidity("parse",!0),A(a,{$item:h,$model:f,$label:N.viewMapper(a,i),$event:e}),V(),O.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==O.matches.length&&-1!==r.indexOf(b.which)){var c=z(a,{$event:b});if(-1===O.activeIdx&&c||9===b.which&&b.shiftKey)return V(),void O.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),V(),a.$digest();break;case 38:O.activeIdx=(O.activeIdx>0?O.activeIdx:O.matches.length)-1,O.$digest(),d=T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:O.activeIdx=(O.activeIdx+1)%O.matches.length,O.$digest(),d=T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;default:c&&O.$apply(function(){angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(O.activeIdx,b)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(O.activeIdx,b)})}}}),b.bind("focus",function(a){w=!0,0!==t||p.$viewValue||g(function(){Y(p.$viewValue,a)},0)}),b.bind("blur",function(a){B&&O.matches.length&&-1!==O.activeIdx&&!x&&(x=!0,O.$apply(function(){angular.isObject(O.debounceUpdate)&&angular.isNumber(O.debounceUpdate.blur)?k(function(){O.select(O.activeIdx,a)},O.debounceUpdate.blur):O.select(O.activeIdx,a)})),!v&&p.$error.editable&&(p.$setViewValue(),O.$apply(function(){p.$setValidity("editable",!0),p.$setValidity("parse",!0)}),b.val("")),w=!1,x=!1});var ba=function(c){b[0]!==c.target&&3!==c.which&&0!==O.matches.length&&(V(),j.$$phase||a.$digest())};h.on("click",ba),a.$on("$destroy",function(){h.off("click",ba),(E||F)&&ca.remove(),E&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),T.remove(),J&&R.remove()});var ca=d(T)(O);E?h.find("body").append(ca):F?angular.element(F).eq(0).append(ca):b.after(ca),this.init=function(b,c){p=b,q=c,O.debounceUpdate=p.$options&&e(p.$options.debounce)(a),p.$parsers.unshift(function(b){return w=!0,0===t||b&&b.length>=t?u>0?(aa(),_(b)):Y(b):(y(a,!1),aa(),V()),v?b:b?void p.$setValidity("editable",!1):(p.$setValidity("editable",!0),null)}),p.$formatters.push(function(b){var c,d,e={};return v||p.$setValidity("editable",!0),D?(e.$model=b,D(a,e)):(e[N.itemName]=b,c=N.viewMapper(a,e),e[N.itemName]=void 0,d=N.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";
a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion-group.html",'<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n  <span aria-hidden="true">&times;</span>\n  <span class="sr-only">Close</span>\n</button>\n<div ng-transclude></div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n')}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div class="text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<ul class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html","<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n<li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n<li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n<li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});
angular.module("mediaPlayer",["mediaPlayer.helpers"]).value("mp.throttleSettings",{enabled:!0,time:1e3}).constant("mp.playerDefaults",{currentTrack:0,ended:void 0,network:void 0,playing:!1,seeking:!1,tracks:0,volume:1,formatDuration:"00:00",formatTime:"00:00",loadPercent:0}).directive("mediaPlayer",["$rootScope","$interpolate","$timeout","mp.throttle","mp.playerDefaults","mp.throttleSettings",function(a,b,c,d,e,f){function g(a){return function(b,d){var e,f=null;if(a.$attachPlaylist(b),void 0===b&&void 0!==d)return a.pause();if(a.currentTrack){e=d?d[a.currentTrack-1]:-1;for(var g=0;g<b.length;g++)if(angular.equals(b[g],e)){f=g;break}null!==f?(a.currentTrack=f+1,a.tracks=b.length):(a.pause(),b.length?c(function(){a.$clearSourceList(),a.$addSourceList(b[0]),a.load(),a.tracks=b.length}):a.reset())}else b.length?(a.$clearSourceList(),a.$addSourceList(b[0]),a.load(),a.tracks=b.length):a.reset()}}var h={load:function(a,b){"boolean"==typeof a?(b=a,a=null):"object"==typeof a&&(this.$clearSourceList(),this.$addSourceList(a)),this.$domEl.load(),this.ended=void 0,b&&this.$element.one("canplay",this.play.bind(this))},reset:function(a){angular.extend(this,e),this.$clearSourceList(),this.load(this.$playlist,a)},play:function(a,b){return"boolean"==typeof a&&(b=a,a=void 0),b&&(this.$selective=!0),this.$playlist.length>a?(this.currentTrack=a+1,this.load(this.$playlist[a],!0)):(!this.currentTrack&&this.$domEl.readyState&&this.currentTrack++,void(this.ended?this.load(!0):this.$domEl.play()))},playPause:function(a,b){"boolean"==typeof a&&(b=a,a=void 0),b&&(this.$selective=!0),"number"==typeof a&&a+1!==this.currentTrack?this.play(a):this.playing?this.pause():this.play()},pause:function(){this.$domEl.pause()},stop:function(){this.reset()},toggleMute:function(){this.muted=this.$domEl.muted=!this.$domEl.muted},next:function(a){var b=this;if(b.currentTrack&&b.currentTrack<b.tracks){var d=a||b.playing;b.pause(),c(function(){b.$clearSourceList(),b.$addSourceList(b.$playlist[b.currentTrack]),b.load(d),b.currentTrack++})}},prev:function(a){var b=this;if(b.currentTrack&&b.currentTrack-1){var d=a||b.playing;b.pause(),c(function(){b.$clearSourceList(),b.$addSourceList(b.$playlist[b.currentTrack-2]),b.load(d),b.currentTrack--})}},setPlaybackRate:function(a){this.$domEl.playbackRate=a},setVolume:function(a){this.$domEl.volume=a},seek:function(a){var b,c=0;return"string"!=typeof a?this.$domEl.currentTime=a:(b=a.split(":"),c+=parseInt(b.pop(),10),b.length&&(c+=60*parseInt(b.pop(),10)),b.length&&(c+=3600*parseInt(b.pop(),10)),isNaN(c)?void 0:this.$domEl.currentTime=c)},on:function(a,b){return this.$element.on(a,b)},off:function(a,b){return this.$element.off(a,b)},one:function(a,b){return this.$element.one(a,b)},$addSourceList:function(a){var b=this;if(angular.isArray(a))angular.forEach(a,function(a){var c=document.createElement("SOURCE");["src","type","media"].forEach(function(b){void 0!==a[b]&&c.setAttribute(b,a[b])}),b.$element.append(c)});else if(angular.isObject(a)){var c=document.createElement("SOURCE");["src","type","media"].forEach(function(b){void 0!==a[b]&&c.setAttribute(b,a[b])}),b.$element.append(c)}},$clearSourceList:function(){this.$element.contents().remove()},$formatTime:function(a){if(1/0===a)return"∞";var b,c=parseInt(a/3600,10)%24,d=parseInt(a/60,10)%60,e=parseInt(a%60,10),f=(10>d?"0"+d:d)+":"+(10>e?"0"+e:e);return b=c>0?(10>c?"0"+c:c)+":"+f:f},$attachPlaylist:function(a){void 0===a||null===a?this.playlist=[]:this.$playlist=a}},i=function(a,b,c){var e={playing:function(){a.$apply(function(a){a.playing=!0,a.ended=!1})},pause:function(){a.$apply(function(a){a.playing=!1})},ended:function(){!a.$selective&&a.currentTrack<a.tracks?a.next(!0):a.$apply(function(a){a.ended=!0,a.playing=!1})},timeupdate:function(){a.$apply(function(a){a.currentTime=b.currentTime,a.formatTime=a.$formatTime(a.currentTime)})},loadedmetadata:function(){a.$apply(function(a){a.currentTrack||a.currentTrack++,a.duration=b.duration,a.formatDuration=a.$formatTime(a.duration),b.buffered.length&&(a.loadPercent=Math.round(b.buffered.end(b.buffered.length-1)/a.duration*100))})},progress:function(){a.$domEl.buffered.length&&a.$apply(function(a){a.loadPercent=Math.round(b.buffered.end(b.buffered.length-1)/a.duration*100),a.network="progress"})},volumechange:function(){a.$apply(function(a){a.volume=b.volume,a.muted=b.muted})},seeked:function(){a.$apply(function(a){a.seeking=!1})},seeking:function(){a.$apply(function(a){a.seeking=!0})},ratechange:function(){a.$apply(function(a){a.playbackRate=b.playbackRate})},stalled:function(){a.$apply(function(a){a.network="stalled"})},suspend:function(){a.$apply(function(a){a.network="suspend"})}};f.enabled&&(e.timeupdate=d(f.time,!1,e.timeupdate)),angular.forEach(e,function(a,b){c.on(b,a)})},j=function(b){var c=angular.extend(a.$new(!0),{$element:b,$domEl:b[0],$playlist:void 0,buffered:b[0].buffered,played:b[0].played,seekable:b[0].seekable},e,h);return i(c,b[0],b),c};return{scope:!1,link:function(a,b,c){var d=c.playlist,e=c.mediaPlayer||c.playerControl,f=new j(b),h=a[d];if(h=void 0===d?[]:void 0===a[d]?a[d]=[]:a[d],void 0!==e&&(a[e]=f),"AUDIO"!==b[0].tagName&&"VIDEO"!==b[0].tagName)return new Error("player directive works only when attached to an <audio>/<video> type tag");var i=[],k=b.find("source");1===k.length?h.unshift({src:k[0].src,type:k[0].type,media:k[0].media}):k.length>1&&(angular.forEach(k,function(a){i.push({src:a.src,type:a.type,media:a.media})}),h.unshift(i)),void 0===d?f.$attachPlaylist(h):h.length?(g(f)(h,void 0,a),a.$watch(d,g(f),!0)):a.$watch(d,g(f),!0)}}}]),angular.module("mediaPlayer.helpers",[]).factory("mp.throttle",["$timeout",function(a){return function(b,c,d,e){var f,g=0;"boolean"!=typeof c&&(e=d,d=c,c=void 0);var h=function(){var h=this,i=+new Date-g,j=arguments,k=function(){g=+new Date,d.apply(h,j)},l=function(){f=void 0};e&&!f&&k(),f&&a.cancel(f),void 0===e&&i>b?k():c!==!0&&(f=a(e?l:k,void 0===e?b-i:b))};return h}}]);
/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/05/18
 */

var VectorCanvas=function(a,b,c){if(this.mode=window.SVGAngle?"svg":"vml",this.params=c,"svg"===this.mode)this.createSvgNode=function(a){return document.createElementNS(this.svgns,a)};else{try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),this.createVmlNode=function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(d){this.createVmlNode=function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}"svg"===this.mode?this.canvas=this.createSvgNode("svg"):(this.canvas=this.createVmlNode("group"),this.canvas.style.position="absolute"),this.setSize(a,b)};VectorCanvas.prototype={svgns:"http://www.w3.org/2000/svg",mode:"svg",width:0,height:0,canvas:null};var ColorScale=function(a,b,c,d){a&&this.setColors(a),b&&this.setNormalizeFunction(b),c&&this.setMin(c),c&&this.setMax(d)};ColorScale.prototype={colors:[]};var JQVMap=function(a){a=a||{};var b,c=this,d=JQVMap.maps[a.map];if(!d)throw new Error('Invalid "'+a.map+'" map parameter. Please make sure you have loaded this map file in your HTML.');this.selectedRegions=[],this.multiSelectRegion=a.multiSelectRegion,this.container=a.container,this.defaultWidth=d.width,this.defaultHeight=d.height,this.color=a.color,this.selectedColor=a.selectedColor,this.hoverColor=a.hoverColor,this.hoverColors=a.hoverColors,this.hoverOpacity=a.hoverOpacity,this.setBackgroundColor(a.backgroundColor),this.width=a.container.width(),this.height=a.container.height(),this.resize(),jQuery(window).resize(function(){var d=a.container.width(),e=a.container.height();if(d&&e){c.width=d,c.height=e,c.resize(),c.canvas.setSize(c.width,c.height),c.applyTransform();var f=jQuery.Event("resize.jqvmap");jQuery(a.container).trigger(f,[d,e]),b&&(jQuery(".jqvmap-pin").remove(),c.pinHandlers=!1,c.placePins(b.pins,b.mode))}}),this.canvas=new VectorCanvas(this.width,this.height,a),a.container.append(this.canvas.canvas),this.makeDraggable(),this.rootGroup=this.canvas.createGroup(!0),this.index=JQVMap.mapIndex,this.label=jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body")).hide(),a.enableZoom&&(jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(a.container),jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(a.container)),c.countries=[];for(var e in d.paths){var f=this.canvas.createPath({path:d.paths[e].path});f.setFill(this.color),f.id=c.getCountryId(e),c.countries[e]=f,"svg"===this.canvas.mode?f.setAttribute("class","jqvmap-region"):jQuery(f).addClass("jqvmap-region"),jQuery(this.rootGroup).append(f)}if(jQuery(a.container).delegate("svg"===this.canvas.mode?"path":"shape","mouseover mouseout",function(b){var e=b.target,f=b.target.id.split("_").pop(),g=jQuery.Event("labelShow.jqvmap"),h=jQuery.Event("regionMouseOver.jqvmap");f=f.toLowerCase(),"mouseover"===b.type?(jQuery(a.container).trigger(h,[f,d.paths[f].name]),h.isDefaultPrevented()||c.highlight(f,e),a.showTooltip&&(c.label.text(d.paths[f].name),jQuery(a.container).trigger(g,[c.label,f]),g.isDefaultPrevented()||(c.label.show(),c.labelWidth=c.label.width(),c.labelHeight=c.label.height()))):(c.unhighlight(f,e),c.label.hide(),jQuery(a.container).trigger("regionMouseOut.jqvmap",[f,d.paths[f].name]))}),jQuery(a.container).delegate("svg"===this.canvas.mode?"path":"shape","click",function(b){var e=b.target,f=b.target.id.split("_").pop(),g=jQuery.Event("regionClick.jqvmap");if(f=f.toLowerCase(),jQuery(a.container).trigger(g,[f,d.paths[f].name]),!a.multiSelectRegion&&!g.isDefaultPrevented())for(var h in d.paths)c.countries[h].currentFillColor=c.countries[h].getOriginalFill(),c.countries[h].setFill(c.countries[h].getOriginalFill());g.isDefaultPrevented()||(c.isSelected(f)?c.deselect(f,e):c.select(f,e))}),a.showTooltip&&a.container.mousemove(function(a){if(c.label.is(":visible")){var b=a.pageX-15-c.labelWidth,d=a.pageY-15-c.labelHeight;0>b&&(b=a.pageX+15),0>d&&(d=a.pageY+15),c.label.css({left:b,top:d})}}),this.setColors(a.colors),this.canvas.canvas.appendChild(this.rootGroup),this.applyTransform(),this.colorScale=new ColorScale(a.scaleColors,a.normalizeFunction,a.valueMin,a.valueMax),a.values&&(this.values=a.values,this.setValues(a.values)),a.selectedRegions)if(a.selectedRegions instanceof Array)for(var g in a.selectedRegions)this.select(a.selectedRegions[g].toLowerCase());else this.select(a.selectedRegions.toLowerCase());if(this.bindZoomButtons(),a.pins&&(b={pins:a.pins,mode:a.pinMode},this.pinHandlers=!1,this.placePins(a.pins,a.pinMode)),a.showLabels){this.pinHandlers=!1;var h={};for(e in c.countries)"function"!=typeof c.countries[e]&&(a.pins&&a.pins[e]||(h[e]=e.toUpperCase()));b={pins:h,mode:"content"},this.placePins(h,"content")}JQVMap.mapIndex++};JQVMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,countries:{},countriesColors:{},countriesData:{},zoomStep:1.4,zoomMaxStep:4,zoomCurStep:1},JQVMap.xlink="http://www.w3.org/1999/xlink",JQVMap.mapIndex=1,JQVMap.maps={},function(){var a={colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,enableZoom:1,showTooltip:1,borderColor:1,borderWidth:1,borderOpacity:1,selectedRegions:1,multiSelectRegion:1},b={onLabelShow:"labelShow",onLoad:"load",onRegionOver:"regionMouseOver",onRegionOut:"regionMouseOut",onRegionClick:"regionClick",onRegionSelect:"regionSelect",onRegionDeselect:"regionDeselect",onResize:"resize"};jQuery.fn.vectorMap=function(c){var d={map:"world_en",backgroundColor:"#a5bfdd",color:"#f4f3f0",hoverColor:"#c9dfaf",hoverColors:{},selectedColor:"#c9dfaf",scaleColors:["#b6d6ff","#005ace"],normalizeFunction:"linear",enableZoom:!0,showTooltip:!0,borderColor:"#818181",borderWidth:1,borderOpacity:.25,selectedRegions:null,multiSelectRegion:!1},e=this.data("mapObject");if("addMap"===c)JQVMap.maps[arguments[1]]=arguments[2];else{if("set"!==c||!a[arguments[1]]){if("string"==typeof c&&"function"==typeof e[c])return e[c].apply(e,Array.prototype.slice.call(arguments,1));jQuery.extend(d,c),d.container=this,this.css({position:"relative",overflow:"hidden"}),e=new JQVMap(d),this.data("mapObject",e),this.unbind(".jqvmap");for(var f in b)d[f]&&this.bind(b[f]+".jqvmap",d[f]);var g=jQuery.Event("load.jqvmap");return jQuery(d.container).trigger(g,e),e}e["set"+arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1)].apply(e,Array.prototype.slice.call(arguments,2))}}}(jQuery),ColorScale.arrayToRgb=function(a){for(var b,c="#",d=0;d<a.length;d++)b=a[d].toString(16),c+=1===b.length?"0"+b:b;return c},ColorScale.prototype.getColor=function(a){"function"==typeof this.normalize&&(a=this.normalize(a));for(var b,c=[],d=0,e=0;e<this.colors.length-1;e++)b=this.vectorLength(this.vectorSubtract(this.colors[e+1],this.colors[e])),c.push(b),d+=b;var f=(this.maxValue-this.minValue)/d;for(e=0;e<c.length;e++)c[e]*=f;for(e=0,a-=this.minValue;a-c[e]>=0;)a-=c[e],e++;var g;for(g=e===this.colors.length-1?this.vectorToNum(this.colors[e]).toString(16):this.vectorToNum(this.vectorAdd(this.colors[e],this.vectorMult(this.vectorSubtract(this.colors[e+1],this.colors[e]),a/c[e]))).toString(16);g.length<6;)g="0"+g;return"#"+g},ColorScale.rgbToArray=function(a){return a=a.substr(1),[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)]},ColorScale.prototype.setColors=function(a){for(var b=0;b<a.length;b++)a[b]=ColorScale.rgbToArray(a[b]);this.colors=a},ColorScale.prototype.setMax=function(a){this.clearMaxValue=a,"function"==typeof this.normalize?this.maxValue=this.normalize(a):this.maxValue=a},ColorScale.prototype.setMin=function(a){this.clearMinValue=a,"function"==typeof this.normalize?this.minValue=this.normalize(a):this.minValue=a},ColorScale.prototype.setNormalizeFunction=function(a){"polynomial"===a?this.normalize=function(a){return Math.pow(a,.2)}:"linear"===a?delete this.normalize:this.normalize=a,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},ColorScale.prototype.vectorAdd=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]+b[d];return c},ColorScale.prototype.vectorLength=function(a){for(var b=0,c=0;c<a.length;c++)b+=a[c]*a[c];return Math.sqrt(b)},ColorScale.prototype.vectorMult=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]*b;return c},ColorScale.prototype.vectorSubtract=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]-b[d];return c},ColorScale.prototype.vectorToNum=function(a){for(var b=0,c=0;c<a.length;c++)b+=Math.round(a[c])*Math.pow(256,a.length-c-1);return b},JQVMap.prototype.applyTransform=function(){var a,b,c,d;this.defaultWidth*this.scale<=this.width?(a=(this.width-this.defaultWidth*this.scale)/(2*this.scale),c=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(a=0,c=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(b=(this.height-this.defaultHeight*this.scale)/(2*this.scale),d=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(b=0,d=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>b?this.transY=b:this.transY<d&&(this.transY=d),this.transX>a?this.transX=a:this.transX<c&&(this.transX=c),this.canvas.applyTransformParams(this.scale,this.transX,this.transY)},JQVMap.prototype.bindZoomButtons=function(){var a=this;this.container.find(".jqvmap-zoomin").click(function(){a.zoomIn()}),this.container.find(".jqvmap-zoomout").click(function(){a.zoomOut()})},JQVMap.prototype.deselect=function(a,b){if(a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],this.isSelected(a))this.selectedRegions.splice(this.selectIndex(a),1),jQuery(this.container).trigger("regionDeselect.jqvmap",[a]),b.currentFillColor=b.getOriginalFill(),b.setFill(b.getOriginalFill());else for(var c in this.countries)this.selectedRegions.splice(this.selectedRegions.indexOf(c),1),this.countries[c].currentFillColor=this.color,this.countries[c].setFill(this.color)},JQVMap.prototype.getCountryId=function(a){return"jqvmap"+this.index+"_"+a},JQVMap.prototype.getPin=function(a){var b=jQuery("#"+this.getPinId(a));return b.html()},JQVMap.prototype.getPinId=function(a){return this.getCountryId(a)+"_pin"},JQVMap.prototype.getPins=function(){var a=this.container.find(".jqvmap-pin"),b={};return jQuery.each(a,function(a,c){c=jQuery(c);var d=c.attr("for").toLowerCase(),e=c.html();b[d]=e}),JSON.stringify(b)},JQVMap.prototype.highlight=function(a,b){b=b||jQuery("#"+this.getCountryId(a))[0],this.hoverOpacity?b.setOpacity(this.hoverOpacity):this.hoverColors&&a in this.hoverColors?(b.currentFillColor=b.getFill()+"",b.setFill(this.hoverColors[a])):this.hoverColor&&(b.currentFillColor=b.getFill()+"",b.setFill(this.hoverColor))},JQVMap.prototype.isSelected=function(a){return this.selectIndex(a)>=0},JQVMap.prototype.makeDraggable=function(){var a,b,c=!1,d=this;d.isMoving=!1,d.isMovingTimeout=!1;var e,f,g,h,i,j,k;this.container.mousemove(function(e){return c&&(d.transX-=(a-e.pageX)/d.scale,d.transY-=(b-e.pageY)/d.scale,d.applyTransform(),a=e.pageX,b=e.pageY,d.isMoving=!0,d.isMovingTimeout&&clearTimeout(d.isMovingTimeout),d.container.trigger("drag")),!1}).mousedown(function(d){return c=!0,a=d.pageX,b=d.pageY,!1}).mouseup(function(){return c=!1,clearTimeout(d.isMovingTimeout),d.isMovingTimeout=setTimeout(function(){d.isMoving=!1},100),!1}).mouseout(function(){return c&&d.isMoving?(clearTimeout(d.isMovingTimeout),d.isMovingTimeout=setTimeout(function(){c=!1,d.isMoving=!1},100),!1):void 0}),jQuery(this.container).bind("touchmove",function(a){var b,c,l,m,n=a.originalEvent.touches;if(1===n.length){if(1===e){if(j===n[0].pageX&&k===n[0].pageY)return;l=d.transX,m=d.transY,d.transX-=(j-n[0].pageX)/d.scale,d.transY-=(k-n[0].pageY)/d.scale,d.applyTransform(),(l!==d.transX||m!==d.transY)&&a.preventDefault(),d.isMoving=!0,d.isMovingTimeout&&clearTimeout(d.isMovingTimeout)}j=n[0].pageX,k=n[0].pageY}else 2===n.length&&(2===e?(c=Math.sqrt(Math.pow(n[0].pageX-n[1].pageX,2)+Math.pow(n[0].pageY-n[1].pageY,2))/h,d.setScale(i*c,f,g),a.preventDefault()):(b=jQuery(d.container).offset(),f=n[0].pageX>n[1].pageX?n[1].pageX+(n[0].pageX-n[1].pageX)/2:n[0].pageX+(n[1].pageX-n[0].pageX)/2,g=n[0].pageY>n[1].pageY?n[1].pageY+(n[0].pageY-n[1].pageY)/2:n[0].pageY+(n[1].pageY-n[0].pageY)/2,f-=b.left,g-=b.top,i=d.scale,h=Math.sqrt(Math.pow(n[0].pageX-n[1].pageX,2)+Math.pow(n[0].pageY-n[1].pageY,2))));e=n.length}),jQuery(this.container).bind("touchstart",function(){e=0}),jQuery(this.container).bind("touchend",function(){e=0})},JQVMap.prototype.placePins=function(a,b){var c=this;if((!b||"content"!==b&&"id"!==b)&&(b="content"),"content"===b?jQuery.each(a,function(a,b){if(0!==jQuery("#"+c.getCountryId(a)).length){var d=c.getPinId(a),e=jQuery("#"+d);e.length>0&&e.remove(),c.container.append('<div id="'+d+'" for="'+a+'" class="jqvmap-pin" style="position:absolute">'+b+"</div>")}}):jQuery.each(a,function(a,b){if(0!==jQuery("#"+c.getCountryId(a)).length){var d=c.getPinId(a),e=jQuery("#"+d);e.length>0&&e.remove(),c.container.append('<div id="'+d+'" for="'+a+'" class="jqvmap-pin" style="position:absolute"></div>'),e.append(jQuery("#"+b))}}),this.positionPins(),!this.pinHandlers){this.pinHandlers=!0;var d=function(){c.positionPins()};this.container.bind("zoomIn",d).bind("zoomOut",d).bind("drag",d)}},JQVMap.prototype.positionPins=function(){var a=this,b=this.container.find(".jqvmap-pin");jQuery.each(b,function(b,c){c=jQuery(c);var d=a.getCountryId(c.attr("for").toLowerCase()),e=jQuery("#"+d),f=document.getElementById(d).getBBox(),g=e.position(),h=a.scale,i=g.left+f.width/2*h-c.width()/2,j=g.top+f.height/2*h-c.height()/2;c.css("left",i).css("top",j)})},JQVMap.prototype.removePin=function(a){a=a.toLowerCase(),jQuery("#"+this.getPinId(a)).remove()},JQVMap.prototype.removePins=function(){this.container.find(".jqvmap-pin").remove()},JQVMap.prototype.reset=function(){for(var a in this.countries)this.countries[a].setFill(this.color);this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},JQVMap.prototype.resize=function(){var a=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/a,this.transX*=this.baseScale/a,this.transY*=this.baseScale/a},JQVMap.prototype.select=function(a,b){a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],this.isSelected(a)||(this.multiSelectRegion?this.selectedRegions.push(a):this.selectedRegions=[a],jQuery(this.container).trigger("regionSelect.jqvmap",[a]),this.selectedColor&&b&&(b.currentFillColor=this.selectedColor,b.setFill(this.selectedColor)))},JQVMap.prototype.selectIndex=function(a){a=a.toLowerCase();for(var b=0;b<this.selectedRegions.length;b++)if(a===this.selectedRegions[b])return b;return-1},JQVMap.prototype.setBackgroundColor=function(a){this.container.css("background-color",a)},JQVMap.prototype.setColors=function(a,b){if("string"==typeof a)this.countries[a].setFill(b),this.countries[a].setAttribute("original",b);else{var c=a;for(var d in c)this.countries[d]&&(this.countries[d].setFill(c[d]),this.countries[d].setAttribute("original",c[d]))}},JQVMap.prototype.setNormalizeFunction=function(a){this.colorScale.setNormalizeFunction(a),this.values&&this.setValues(this.values)},JQVMap.prototype.setScale=function(a){this.scale=a,this.applyTransform()},JQVMap.prototype.setScaleColors=function(a){this.colorScale.setColors(a),this.values&&this.setValues(this.values)},JQVMap.prototype.setValues=function(a){var b,c=0,d=Number.MAX_VALUE;for(var e in a)e=e.toLowerCase(),b=parseFloat(a[e]),isNaN(b)||(b>c&&(c=a[e]),d>b&&(d=b));d===c&&c++,this.colorScale.setMin(d),this.colorScale.setMax(c);var f={};for(e in a)e=e.toLowerCase(),b=parseFloat(a[e]),f[e]=isNaN(b)?this.color:this.colorScale.getColor(b);this.setColors(f),this.values=a},JQVMap.prototype.unhighlight=function(a,b){a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],b.setOpacity(1),b.currentFillColor&&b.setFill(b.currentFillColor)},JQVMap.prototype.zoomIn=function(){var a=this,b=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(a.zoomCurStep<a.zoomMaxStep){a.transX-=(a.width/a.scale-a.width/(a.scale*a.zoomStep))/2,a.transY-=(a.height/a.scale-a.height/(a.scale*a.zoomStep))/2,a.setScale(a.scale*a.zoomStep),a.zoomCurStep++;var c=jQuery("#zoomSlider");c.css("top",parseInt(c.css("top"),10)-b),a.container.trigger("zoomIn")}},JQVMap.prototype.zoomOut=function(){var a=this,b=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(a.zoomCurStep>1){a.transX+=(a.width/(a.scale/a.zoomStep)-a.width/a.scale)/2,a.transY+=(a.height/(a.scale/a.zoomStep)-a.height/a.scale)/2,a.setScale(a.scale/a.zoomStep),a.zoomCurStep--;var c=jQuery("#zoomSlider");c.css("top",parseInt(c.css("top"),10)+b),a.container.trigger("zoomOut")}},VectorCanvas.prototype.applyTransformParams=function(a,b,c){"svg"===this.mode?this.rootGroup.setAttribute("transform","scale("+a+") translate("+b+", "+c+")"):(this.rootGroup.coordorigin=this.width-b+","+(this.height-c),this.rootGroup.coordsize=this.width/a+","+this.height/a)},VectorCanvas.prototype.createGroup=function(a){var b;return"svg"===this.mode?b=this.createSvgNode("g"):(b=this.createVmlNode("group"),b.style.width=this.width+"px",b.style.height=this.height+"px",b.style.left="0px",b.style.top="0px",b.coordorigin="0 0",b.coordsize=this.width+" "+this.height),a&&(this.rootGroup=b),b},VectorCanvas.prototype.createPath=function(a){var b;if("svg"===this.mode)b=this.createSvgNode("path"),b.setAttribute("d",a.path),null!==this.params.borderColor&&b.setAttribute("stroke",this.params.borderColor),this.params.borderWidth>0&&(b.setAttribute("stroke-width",this.params.borderWidth),b.setAttribute("stroke-linecap","round"),b.setAttribute("stroke-linejoin","round")),this.params.borderOpacity>0&&b.setAttribute("stroke-opacity",this.params.borderOpacity),b.setFill=function(a){this.setAttribute("fill",a),null===this.getAttribute("original")&&this.setAttribute("original",a)},b.getFill=function(){return this.getAttribute("fill")},b.getOriginalFill=function(){return this.getAttribute("original")},b.setOpacity=function(a){this.setAttribute("fill-opacity",a)};else{b=this.createVmlNode("shape"),b.coordorigin="0 0",b.coordsize=this.width+" "+this.height,b.style.width=this.width+"px",b.style.height=this.height+"px",b.fillcolor=JQVMap.defaultFillColor,b.stroked=!1,b.path=VectorCanvas.pathSvgToVml(a.path);var c=this.createVmlNode("skew");c.on=!0,c.matrix="0.01,0,0,0.01,0,0",c.offset="0,0",b.appendChild(c);var d=this.createVmlNode("fill");b.appendChild(d),b.setFill=function(a){this.getElementsByTagName("fill")[0].color=a,null===this.getAttribute("original")&&this.setAttribute("original",a)},b.getFill=function(){return this.getElementsByTagName("fill")[0].color},b.getOriginalFill=function(){return this.getAttribute("original")},b.setOpacity=function(a){this.getElementsByTagName("fill")[0].opacity=parseInt(100*a,10)+"%"}}return b},VectorCanvas.prototype.pathSvgToVml=function(a){var b,c,d="",e=0,f=0;return a.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,function(a,g,h){h=h.replace(/(\d)-/g,"$1,-").replace(/\s+/g,",").split(","),h[0]||h.shift();for(var i=0,j=h.length;j>i;i++)h[i]=Math.round(100*h[i]);switch(g){case"m":e+=h[0],f+=h[1],d="t"+h.join(",");break;case"M":e=h[0],f=h[1],d="m"+h.join(",");break;case"l":e+=h[0],f+=h[1],d="r"+h.join(",");break;case"L":e=h[0],f=h[1],d="l"+h.join(",");break;case"h":e+=h[0],d="r"+h[0]+",0";break;case"H":e=h[0],d="l"+e+","+f;break;case"v":f+=h[0],d="r0,"+h[0];break;case"V":f=h[0],d="l"+e+","+f;break;case"c":b=e+h[h.length-4],c=f+h[h.length-3],e+=h[h.length-2],f+=h[h.length-1],d="v"+h.join(",");break;case"C":b=h[h.length-4],c=h[h.length-3],e=h[h.length-2],f=h[h.length-1],d="c"+h.join(",");break;case"s":h.unshift(f-c),h.unshift(e-b),b=e+h[h.length-4],c=f+h[h.length-3],e+=h[h.length-2],f+=h[h.length-1],d="v"+h.join(",");break;case"S":h.unshift(f+f-c),h.unshift(e+e-b),b=h[h.length-4],c=h[h.length-3],e=h[h.length-2],f=h[h.length-1],d="c"+h.join(",")}return d}).replace(/z/g,"")},VectorCanvas.prototype.setSize=function(a,b){if("svg"===this.mode)this.canvas.setAttribute("width",a),this.canvas.setAttribute("height",b);else if(this.canvas.style.width=a+"px",this.canvas.style.height=b+"px",this.canvas.coordsize=a+" "+b,this.canvas.coordorigin="0 0",this.rootGroup){for(var c=this.rootGroup.getElementsByTagName("shape"),d=0,e=c.length;e>d;d++)c[d].coordsize=a+" "+b,c[d].style.width=a+"px",c[d].style.height=b+"px";this.rootGroup.coordsize=a+" "+b,this.rootGroup.style.width=a+"px",this.rootGroup.style.height=b+"px"}this.width=a,this.height=b};
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
angular.module("ngDragDrop",[])
    .directive("uiDraggable", [
        '$parse',
        '$rootScope',
        function ($parse, $rootScope) {
            return function (scope, element, attrs) {
                if (window.jQuery && !window.jQuery.event.props.dataTransfer) {
                    window.jQuery.event.props.push('dataTransfer');
                }
                element.attr("draggable", false);
                attrs.$observe("uiDraggable", function (newValue) {
                    element.attr("draggable", newValue);
                });
                var dragData = "";
                scope.$watch(attrs.drag, function (newValue) {
                    dragData = newValue;
                });
                element.bind("dragstart", function (e) {
                    var sendData = angular.toJson(dragData);
                    var sendChannel = attrs.dragChannel || "defaultchannel";
                    e.dataTransfer.setData("Text", sendData);
                    $rootScope.$broadcast("ANGULAR_DRAG_START", sendChannel);

                });

                element.bind("dragend", function (e) {
                    var sendChannel = attrs.dragChannel || "defaultchannel";
                    $rootScope.$broadcast("ANGULAR_DRAG_END", sendChannel);
                    if (e.dataTransfer && e.dataTransfer.dropEffect !== "none") {
                        if (attrs.onDropSuccess) {
                            var fn = $parse(attrs.onDropSuccess);
                            scope.$apply(function () {
                                fn(scope, {$event: e});
                            });
                        }
                    }
                });


            };
        }
    ])
    .directive("uiOnDrop", [
        '$parse',
        '$rootScope',
        function ($parse, $rootScope) {
            return function (scope, element, attr) {
                var dropChannel = "defaultchannel";
                var dragChannel = "";
                var dragEnterClass = attr.dragEnterClass || "on-drag-enter";
                var dragHoverClass = attr.dragHoverClass || "on-drag-hover";

                function onDragOver(e) {

                    if (e.preventDefault) {
                        e.preventDefault(); // Necessary. Allows us to drop.
                    }

                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    e.dataTransfer.dropEffect = 'move';
                    return false;
                }

                function onDragEnter(e) {
                    $rootScope.$broadcast("ANGULAR_HOVER", dropChannel);
                    element.addClass(dragHoverClass);
                }

                function onDrop(e) {
                    if (e.preventDefault) {
                        e.preventDefault(); // Necessary. Allows us to drop.
                    }
                    if (e.stopPropagation) {
                        e.stopPropagation(); // Necessary. Allows us to drop.
                    }
                    var data = e.dataTransfer.getData("Text");
                    data = angular.fromJson(data);
                    var fn = $parse(attr.uiOnDrop);
                    scope.$apply(function () {
                        fn(scope, {$data: data, $event: e});
                    });
                    element.removeClass(dragEnterClass);
                }


                $rootScope.$on("ANGULAR_DRAG_START", function (event, channel) {
                    dragChannel = channel;
                    if (dropChannel === channel) {

                        element.bind("dragover", onDragOver);
                        element.bind("dragenter", onDragEnter);

                        element.bind("drop", onDrop);
                        element.addClass(dragEnterClass);
                    }

                });



                $rootScope.$on("ANGULAR_DRAG_END", function (e, channel) {
                    dragChannel = "";
                    if (dropChannel === channel) {

                        element.unbind("dragover", onDragOver);
                        element.unbind("dragenter", onDragEnter);

                        element.unbind("drop", onDrop);
                        element.removeClass(dragHoverClass);
                        element.removeClass(dragEnterClass);
                    }
                });


                $rootScope.$on("ANGULAR_HOVER", function (e, channel) {
                    if (dropChannel === channel) {
                      element.removeClass(dragHoverClass);
                    }
                });


                attr.$observe('dropChannel', function (value) {
                    if (value) {
                        dropChannel = value;
                    }
                });


            };
        }
    ]);

/*! jQuery spinner - v0.1.5 - 2013-12-03
* https://github.com/xixilive/jquery-spinner
* Copyright (c) 2013 xixilive; Licensed MIT */
!function(a){"use strict";var b,c=function(b,d){return this.$el=b,this.options=a.extend({},c.rules.defaults,c.rules[d.rule]||{},d||{}),this.min=parseFloat(this.options.min)||0,this.max=parseFloat(this.options.max)||0,this.$el.on("focus.spinner",a.proxy(function(b){b.preventDefault(),a(document).trigger("mouseup.spinner"),this.oldValue=this.value()},this)).on("change.spinner",a.proxy(function(a){a.preventDefault(),this.value(this.$el.val())},this)).on("keydown.spinner",a.proxy(function(a){var b={38:"up",40:"down"}[a.which];b&&(a.preventDefault(),this.spin(b))},this)),this.oldValue=this.value(),this.value(this.$el.val()),this};c.rules={defaults:{min:null,max:null,step:1,precision:0},currency:{min:0,max:null,step:.01,precision:2},quantity:{min:1,max:999,step:1,precision:0},percent:{min:1,max:100,step:1,precision:0},month:{min:1,max:12,step:1,precision:0},day:{min:1,max:31,step:1,precision:0},hour:{min:0,max:23,step:1,precision:0},minute:{min:1,max:59,step:1,precision:0},second:{min:1,max:59,step:1,precision:0}},c.prototype={spin:function(a){switch(this.oldValue=this.value(),a){case"up":this.value(this.oldValue+Number(this.options.step,10));break;case"down":this.value(this.oldValue-Number(this.options.step,10))}},value:function(c){if(null===c||void 0===c)return this.numeric(this.$el.val());c=this.numeric(c);var e=this.validate(c);0!==e&&(c=-1===e?this.min:this.max),this.$el.val(c.toFixed(this.options.precision)),this.oldValue!==this.value()&&(this.$el.trigger("changing.spinner",[this.value(),this.oldValue]),clearTimeout(b),b=setTimeout(a.proxy(function(){this.$el.trigger("changed.spinner",[this.value(),this.oldValue])},this),d.delay))},numeric:function(a){return a=this.options.precision>0?parseFloat(a,10):parseInt(a,10),a||this.options.min||0},validate:function(a){return null!==this.options.min&&a<this.min?-1:null!==this.options.max&&a>this.max?1:0}};var d=function(b,d){this.$el=b,this.$spinning=a("[data-spin='spinner']",this.$el),0===this.$spinning.length&&(this.$spinning=a(":input[type='text']",this.$el)),this.spinning=new c(this.$spinning,this.$spinning.data()),this.$el.on("click.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)).on("mousedown.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)),a(document).on("mouseup.spinner",a.proxy(function(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)},this)),d=a.extend({},d),d.delay&&this.delay(d.delay),d.changed&&this.changed(d.changed),d.changing&&this.changing(d.changing)};d.delay=500,d.prototype={constructor:d,spin:function(b){var c=a(b.currentTarget).data("spin");switch(b.type){case"click":b.preventDefault(),this.spinning.spin(c);break;case"mousedown":1===b.which&&(this.spinTimeout=setTimeout(a.proxy(this.beginSpin,this,c),300))}},delay:function(a){var b=parseInt(a,10);b>0&&(this.constructor.delay=b+100)},value:function(){return this.spinning.value()},changed:function(a){this.bindHandler("changed.spinner",a)},changing:function(a){this.bindHandler("changing.spinner",a)},bindHandler:function(b,c){a.isFunction(c)?this.$spinning.on(b,c):this.$spinning.off(b)},beginSpin:function(b){this.spinInterval=setInterval(a.proxy(this.spinning.spin,this.spinning,b),100)}},a.fn.spinner=function(b,c){return this.each(function(){var e=a(this),f=e.data("spinner");f||e.data("spinner",f=new d(e,a.extend({},e.data(),b))),("delay"===b||"changed"===b||"changing"===b)&&f[b](c),"spin"===b&&c&&f.spinning.spin(c)})},a(function(){a('[data-trigger="spinner"]').spinner()})}(jQuery);
;
!function(a){function b(a,b){if(g[a]){var d=c(this);return g[a].apply(d,b)}throw new Error("method '"+a+"()' does not exist for slider.")}function c(b){var c=a(b).data("slider");if(c&&c instanceof f)return c;throw new Error(e.callingContextNotSliderInstance)}function d(b){var c=a(this),d=c.data("slider"),e="object"==typeof b&&b;return d||c.data("slider",d=new f(this,a.extend({},a.fn.slider.defaults,e))),c}var e={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},f=function(b,c){var d=this.element=a(b).hide(),e=d.outerWidth(),f=!1,g=this.element.parent();g.hasClass("slider")===!0?(f=!0,this.picker=g):this.picker=a('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element),this.id=this.element.data("slider-id")||c.id,this.id&&(this.picker[0].id=this.id),"undefined"!=typeof Modernizr&&Modernizr.touch&&(this.touchCapable=!0);var h=this.element.data("slider-tooltip")||c.tooltip;switch(this.tooltip=this.picker.find(".tooltip"),this.tooltipInner=this.tooltip.find("div.tooltip-inner"),this.orientation=this.element.data("slider-orientation")||c.orientation,this.orientation){case"vertical":this.picker.addClass("slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight",this.tooltip.addClass("right")[0].style.left="100%";break;default:this.picker.addClass("slider-horizontal").css("width",e),this.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth",this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px"}["min","max","step","value"].forEach(function(a){this[a]="undefined"!=typeof d.data("slider-"+a)?d.data("slider-"+a):"undefined"!=typeof c[a]?c[a]:"undefined"!=typeof d.prop(a)?d.prop(a):0},this),this.value instanceof Array&&(this.range=!0),this.selection=this.element.data("slider-selection")||c.selection,this.selectionEl=this.picker.find(".slider-selection"),"none"===this.selection&&this.selectionEl.addClass("hide"),this.selectionElStyle=this.selectionEl[0].style,this.handle1=this.picker.find(".slider-handle:first"),this.handle1Stype=this.handle1[0].style,this.handle2=this.picker.find(".slider-handle:last"),this.handle2Stype=this.handle2[0].style;var i=this.element.data("slider-handle")||c.handle;switch(i){case"round":this.handle1.addClass("round"),this.handle2.addClass("round");break;case"triangle":this.handle1.addClass("triangle"),this.handle2.addClass("triangle")}if(this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos],this.formater=c.formater,this.reversed=this.element.data("slider-reversed")||c.reversed,this.layout(),this.touchCapable?this.picker.on({touchstart:a.proxy(this.mousedown,this)}):this.picker.on({mousedown:a.proxy(this.mousedown,this)}),"hide"===h?this.tooltip.addClass("hide"):"always"===h?(this.showTooltip(),this.alwaysShowTooltip=!0):this.picker.on({mouseenter:a.proxy(this.showTooltip,this),mouseleave:a.proxy(this.hideTooltip,this)}),f===!0){var j=this.getValue(),k=this.calculateValue();this.element.trigger({type:"slide",value:k}).data("value",k).prop("value",k),j!==k&&this.element.trigger({type:"slideChange","new":k,old:j}).data("value",k).prop("value",k)}this.enabled=c.enabled&&(void 0===this.element.data("slider-enabled")||this.element.data("slider-enabled")===!0),this.enabled||this.disable()};f.prototype={constructor:f,over:!1,inDrag:!1,showTooltip:function(){this.tooltip.addClass("in"),this.over=!0},hideTooltip:function(){this.inDrag===!1&&this.alwaysShowTooltip!==!0&&this.tooltip.removeClass("in"),this.over=!1},layout:function(){var a;a=this.reversed?[100-this.percentage[0],this.percentage[1]]:[this.percentage[0],this.percentage[1]],this.handle1Stype[this.stylePos]=a[0]+"%",this.handle2Stype[this.stylePos]=a[1]+"%","vertical"===this.orientation?(this.selectionElStyle.top=Math.min(a[0],a[1])+"%",this.selectionElStyle.height=Math.abs(a[0]-a[1])+"%"):(this.selectionElStyle.left=Math.min(a[0],a[1])+"%",this.selectionElStyle.width=Math.abs(a[0]-a[1])+"%"),this.range?(this.tooltipInner.text(this.formater(this.value[0])+" : "+this.formater(this.value[1])),this.tooltip[0].style[this.stylePos]=this.size*(a[0]+(a[1]-a[0])/2)/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"):(this.tooltipInner.text(this.formater(this.value[0])),this.tooltip[0].style[this.stylePos]=this.size*a[0]/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px")},mousedown:function(b){if(!this.isEnabled())return!1;this.touchCapable&&"touchstart"===b.type&&(b=b.originalEvent),this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos];var c=this.getPercentage(b);if(this.range){var d=Math.abs(this.percentage[0]-c),e=Math.abs(this.percentage[1]-c);this.dragged=e>d?0:1}else this.dragged=0;this.percentage[this.dragged]=this.reversed?100-c:c,this.layout(),this.touchCapable?a(document).on({touchmove:a.proxy(this.mousemove,this),touchend:a.proxy(this.mouseup,this)}):a(document).on({mousemove:a.proxy(this.mousemove,this),mouseup:a.proxy(this.mouseup,this)}),this.inDrag=!0;var f=this.calculateValue();return this.setValue(f),this.element.trigger({type:"slideStart",value:f}).trigger({type:"slide",value:f}),!1},mousemove:function(a){if(!this.isEnabled())return!1;this.touchCapable&&"touchmove"===a.type&&(a=a.originalEvent);var b=this.getPercentage(a);this.range&&(0===this.dragged&&this.percentage[1]<b?(this.percentage[0]=this.percentage[1],this.dragged=1):1===this.dragged&&this.percentage[0]>b&&(this.percentage[1]=this.percentage[0],this.dragged=0)),this.percentage[this.dragged]=this.reversed?100-b:b,this.layout();var c=this.calculateValue();return this.setValue(c),this.element.trigger({type:"slide",value:c}).data("value",c).prop("value",c),!1},mouseup:function(){if(!this.isEnabled())return!1;this.touchCapable?a(document).off({touchmove:this.mousemove,touchend:this.mouseup}):a(document).off({mousemove:this.mousemove,mouseup:this.mouseup}),this.inDrag=!1,this.over===!1&&this.hideTooltip();var b=this.calculateValue();return this.layout(),this.element.data("value",b).prop("value",b).trigger({type:"slideStop",value:b}),!1},calculateValue:function(){var a;return this.range?(a=[Math.max(this.min,this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step),Math.min(this.max,this.min+Math.round(this.diff*this.percentage[1]/100/this.step)*this.step)],this.value=a):(a=this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,a<this.min?a=this.min:a>this.max&&(a=this.max),a=parseFloat(a),this.value=[a,this.value[1]]),a},getPercentage:function(a){this.touchCapable&&(a=a.touches[0]);var b=100*(a[this.mousePos]-this.offset[this.stylePos])/this.size;return b=Math.round(b/this.percentage[2])*this.percentage[2],Math.max(0,Math.min(100,b))},getValue:function(){return this.range?this.value:this.value[0]},setValue:function(a){this.value=this.validateInputValue(a),this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.layout()},validateInputValue:function(a){if("number"==typeof a)return a;if(a instanceof Array)return a.forEach(function(a){if("number"!=typeof a)throw new Error(e.formatInvalidInputErrorMsg(a))}),a;throw new Error(e.formatInvalidInputErrorMsg(a))},destroy:function(){this.element.show().insertBefore(this.picker),this.picker.remove(),a(this.element).removeData("slider"),a(this.element).off()},disable:function(){this.enabled=!1,this.picker.addClass("slider-disabled"),this.element.trigger("slideDisabled")},enable:function(){this.enabled=!0,this.picker.removeClass("slider-disabled"),this.element.trigger("slideEnabled")},toggle:function(){this.enabled?this.disable():this.enable()},isEnabled:function(){return this.enabled}};var g={getValue:f.prototype.getValue,setValue:f.prototype.setValue,destroy:f.prototype.destroy,disable:f.prototype.disable,enable:f.prototype.enable,toggle:f.prototype.toggle,isEnabled:f.prototype.isEnabled};a.fn.slider=function(a){if("string"==typeof a){var c=Array.prototype.slice.call(arguments,1);return b.call(this,a,c)}return d.call(this,a)},a.fn.slider.defaults={min:0,max:10,step:1,orientation:"horizontal",value:5,selection:"before",tooltip:"show",handle:"round",reversed:!1,enabled:!0,formater:function(a){return a}},a.fn.slider.Constructor=f}(window.jQuery);
;
/*!
 * jQuery Steps v1.0.7 - 05/07/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
!function(a,b){function c(a,b){o(a).push(b)}function d(d,e,f){var g=d.children(e.headerTag),h=d.children(e.bodyTag);g.length>h.length?R(Z,"contents"):g.length<h.length&&R(Z,"titles");var i=e.startIndex;if(f.stepCount=g.length,e.saveState&&a.cookie){var j=a.cookie(U+q(d)),k=parseInt(j,0);!isNaN(k)&&k<f.stepCount&&(i=k)}f.currentIndex=i,g.each(function(e){var f=a(this),g=h.eq(e),i=g.data("mode"),j=null==i?$.html:r($,/^\s*$/.test(i)||isNaN(i)?i:parseInt(i,0)),k=j===$.html||g.data("url")===b?"":g.data("url"),l=j!==$.html&&"1"===g.data("loaded"),m=a.extend({},bb,{title:f.html(),content:j===$.html?g.html():"",contentUrl:k,contentMode:j,contentLoaded:l});c(d,m)})}function e(a){a.triggerHandler("canceled")}function f(a,b){return a.currentIndex-b}function g(b,c){var d=i(b);b.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d),b.removeClass(c.clearFixCssClass+" vertical");var e=b.find(".content > *");e.removeData("loaded").removeData("mode").removeData("url"),e.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),b.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var f=a('<{0} class="{1}"></{0}>'.format(b.get(0).tagName,b.attr("class"))),g=b._id();return null!=g&&""!==g&&f._id(g),f.html(b.find(".content").html()),b.after(f),b.remove(),f}function h(a,b){var c=a.find(".steps li").eq(b.currentIndex);a.triggerHandler("finishing",[b.currentIndex])?(c.addClass("done").removeClass("error"),a.triggerHandler("finished",[b.currentIndex])):c.addClass("error")}function i(a){var b=a.data("eventNamespace");return null==b&&(b="."+q(a),a.data("eventNamespace",b)),b}function j(a,b){var c=q(a);return a.find("#"+c+V+b)}function k(a,b){var c=q(a);return a.find("#"+c+W+b)}function l(a,b){var c=q(a);return a.find("#"+c+X+b)}function m(a){return a.data("options")}function n(a){return a.data("state")}function o(a){return a.data("steps")}function p(a,b){var c=o(a);return(0>b||b>=c.length)&&R(Y),c[b]}function q(a){var b=a.data("uid");return null==b&&(b=a._id(),null==b&&(b="steps-uid-".concat(T),a._id(b)),T++,a.data("uid",b)),b}function r(a,c){if(S("enumType",a),S("keyOrValue",c),"string"==typeof c){var d=a[c];return d===b&&R("The enum key '{0}' does not exist.",c),d}if("number"==typeof c){for(var e in a)if(a[e]===c)return c;R("Invalid enum value '{0}'.",c)}else R("Invalid key or value type.")}function s(a,b,c){return B(a,b,c,v(c,1))}function t(a,b,c){return B(a,b,c,f(c,1))}function u(a,b,c,d){if((0>d||d>=c.stepCount)&&R(Y),!(b.forceMoveForward&&d<c.currentIndex)){var e=c.currentIndex;return a.triggerHandler("stepChanging",[c.currentIndex,d])?(c.currentIndex=d,O(a,b,c),E(a,b,c,e),D(a,b,c),A(a,b,c),P(a,b,c,d,e),a.triggerHandler("stepChanged",[d,e])):a.find(".steps li").eq(e).addClass("error"),!0}}function v(a,b){return a.currentIndex+b}function w(b){var c=a.extend(!0,{},cb,b);return this.each(function(){var b=a(this),e={currentIndex:c.startIndex,currentStep:null,stepCount:0,transitionElement:null};b.data("options",c),b.data("state",e),b.data("steps",[]),d(b,c,e),J(b,c,e),G(b,c),c.autoFocus&&0===T&&j(b,c.startIndex).focus()})}function x(b,c,d,e,f){(0>e||e>d.stepCount)&&R(Y),f=a.extend({},bb,f),y(b,e,f),d.currentIndex!==d.stepCount&&d.currentIndex>=e&&(d.currentIndex++,O(b,c,d)),d.stepCount++;var g=b.find(".content"),h=a("<{0}>{1}</{0}>".format(c.headerTag,f.title)),i=a("<{0}></{0}>".format(c.bodyTag));return(null==f.contentMode||f.contentMode===$.html)&&i.html(f.content),0===e?g.prepend(i).prepend(h):k(b,e-1).after(i).after(h),K(b,d,i,e),N(b,c,d,h,e),F(b,c,d,e),e===d.currentIndex&&E(b,c,d),D(b,c,d),b}function y(a,b,c){o(a).splice(b,0,c)}function z(b){var c=a(this),d=m(c),e=n(c);if(d.suppressPaginationOnFocus&&c.find(":focus").is(":input"))return b.preventDefault(),!1;var f={left:37,right:39};b.keyCode===f.left?(b.preventDefault(),t(c,d,e)):b.keyCode===f.right&&(b.preventDefault(),s(c,d,e))}function A(b,c,d){if(d.stepCount>0){var e=p(b,d.currentIndex);if(!c.enableContentCache||!e.contentLoaded)switch(r($,e.contentMode)){case $.iframe:b.find(".content > .body").eq(d.currentIndex).empty().html('<iframe src="'+e.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case $.async:var f=k(b,d.currentIndex)._aria("busy","true").empty().append(M(c.loadingTemplate,{text:c.labels.loading}));a.ajax({url:e.contentUrl,cache:!1}).done(function(a){f.empty().html(a)._aria("busy","false").data("loaded","1")})}}}function B(a,b,c,d){var e=c.currentIndex;if(d>=0&&d<c.stepCount&&!(b.forceMoveForward&&d<c.currentIndex)){var f=j(a,d),g=f.parent(),h=g.hasClass("disabled");return g._enableAria(),f.click(),e===c.currentIndex&&h?(g._enableAria(!1),!1):!0}return!1}function C(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),f=m(d),g=n(d),i=c.attr("href");switch(i.substring(i.lastIndexOf("#")+1)){case"cancel":e(d);break;case"finish":h(d,g);break;case"next":s(d,f,g);break;case"previous":t(d,f,g)}}function D(a,b,c){if(b.enablePagination){var d=a.find(".actions a[href$='#finish']").parent(),e=a.find(".actions a[href$='#next']").parent();if(!b.forceMoveForward){var f=a.find(".actions a[href$='#previous']").parent();f._enableAria(c.currentIndex>0)}b.enableFinishButton&&b.showFinishButtonAlways?(d._enableAria(c.stepCount>0),e._enableAria(c.stepCount>1&&c.stepCount>c.currentIndex+1)):(d._showAria(b.enableFinishButton&&c.stepCount===c.currentIndex+1),e._showAria(0===c.stepCount||c.stepCount>c.currentIndex+1)._enableAria(c.stepCount>c.currentIndex+1||!b.enableFinishButton))}}function E(b,c,d,e){var f=j(b,d.currentIndex),g=a('<span class="current-info audible">'+c.labels.current+" </span>"),h=b.find(".content > .title");if(null!=e){var i=j(b,e);i.parent().addClass("done").removeClass("error")._selectAria(!1),h.eq(e).removeClass("current").next(".body").removeClass("current"),g=i.find(".current-info"),f.focus()}f.prepend(g).parent()._selectAria().removeClass("done")._enableAria(),h.eq(d.currentIndex).addClass("current").next(".body").addClass("current")}function F(a,b,c,d){for(var e=q(a),f=d;f<c.stepCount;f++){var g=e+V+f,h=e+W+f,i=e+X+f,j=a.find(".title").eq(f)._id(i);a.find(".steps a").eq(f)._id(g)._aria("controls",h).attr("href","#"+i).html(M(b.titleTemplate,{index:f+1,title:j.html()})),a.find(".body").eq(f)._id(h)._aria("labelledby",i)}}function G(a,b){var c=i(a);a.bind("canceled"+c,b.onCanceled),a.bind("finishing"+c,b.onFinishing),a.bind("finished"+c,b.onFinished),a.bind("stepChanging"+c,b.onStepChanging),a.bind("stepChanged"+c,b.onStepChanged),b.enableKeyNavigation&&a.bind("keyup"+c,z),a.find(".actions a").bind("click"+c,C)}function H(a,b,c,d){return 0>d||d>=c.stepCount||c.currentIndex===d?!1:(I(a,d),c.currentIndex>d&&(c.currentIndex--,O(a,b,c)),c.stepCount--,l(a,d).remove(),k(a,d).remove(),j(a,d).parent().remove(),0===d&&a.find(".steps li").first().addClass("first"),d===c.stepCount&&a.find(".steps li").eq(d).addClass("last"),F(a,b,c,d),D(a,b,c),!0)}function I(a,b){o(a).splice(b,1)}function J(b,c,d){var e='<{0} class="{1}">{2}</{0}>',f=r(_,c.stepsOrientation),g=f===_.vertical?" vertical":"",h=a(e.format(c.contentContainerTag,"content "+c.clearFixCssClass,b.html())),i=a(e.format(c.stepsContainerTag,"steps "+c.clearFixCssClass,'<ul role="tablist"></ul>')),j=h.children(c.headerTag),k=h.children(c.bodyTag);b.attr("role","application").empty().append(i).append(h).addClass(c.cssClass+" "+c.clearFixCssClass+g),k.each(function(c){K(b,d,a(this),c)}),j.each(function(e){N(b,c,d,a(this),e)}),E(b,c,d),L(b,c,d)}function K(a,b,c,d){var e=q(a),f=e+W+d,g=e+X+d;c._id(f).attr("role","tabpanel")._aria("labelledby",g).addClass("body")._showAria(b.currentIndex===d)}function L(a,b,c){if(b.enablePagination){var d='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',e='<li><a href="#{0}" role="menuitem">{1}</a></li>',f="";b.forceMoveForward||(f+=e.format("previous",b.labels.previous)),f+=e.format("next",b.labels.next),b.enableFinishButton&&(f+=e.format("finish",b.labels.finish)),b.enableCancelButton&&(f+=e.format("cancel",b.labels.cancel)),a.append(d.format(b.actionContainerTag,b.clearFixCssClass,b.labels.pagination,f)),D(a,b,c),A(a,b,c)}}function M(a,c){for(var d=a.match(/#([a-z]*)#/gi),e=0;e<d.length;e++){var f=d[e],g=f.substring(1,f.length-1);c[g]===b&&R("The key '{0}' does not exist in the substitute collection!",g),a=a.replace(f,c[g])}return a}function N(b,c,d,e,f){var g=q(b),h=g+V+f,j=g+W+f,k=g+X+f,l=b.find(".steps > ul"),m=M(c.titleTemplate,{index:f+1,title:e.html()}),n=a('<li role="tab"><a id="'+h+'" href="#'+k+'" aria-controls="'+j+'">'+m+"</a></li>");n._enableAria(c.enableAllSteps||d.currentIndex>f),d.currentIndex>f&&n.addClass("done"),e._id(k).attr("tabindex","-1").addClass("title"),0===f?l.prepend(n):l.find("li").eq(f-1).after(n),0===f&&l.find("li").removeClass("first").eq(f).addClass("first"),f===d.stepCount-1&&l.find("li").removeClass("last").eq(f).addClass("last"),n.children("a").bind("click"+i(b),Q)}function O(b,c,d){c.saveState&&a.cookie&&a.cookie(U+q(b),d.currentIndex)}function P(b,c,d,e,f){var g=b.find(".content > .body"),h=r(ab,c.transitionEffect),i=c.transitionEffectSpeed,j=g.eq(e),k=g.eq(f);switch(h){case ab.fade:case ab.slide:var l=h===ab.fade?"fadeOut":"slideUp",m=h===ab.fade?"fadeIn":"slideDown";d.transitionElement=j,k[l](i,function(){var b=a(this)._showAria(!1).parent().parent(),c=n(b);c.transitionElement&&(c.transitionElement[m](i,function(){a(this)._showAria()}),c.transitionElement=null)}).promise();break;case ab.slideLeft:var o=k.outerWidth(!0),p=e>f?-o:o,q=e>f?o:-o;k.animate({left:p},i,function(){a(this)._showAria(!1)}).promise(),j.css("left",q+"px")._showAria().animate({left:0},i).promise();break;default:k._showAria(!1),j._showAria()}}function Q(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),e=m(d),f=n(d),g=f.currentIndex;if(c.parent().is(":not(.disabled):not(.current)")){var h=c.attr("href"),i=parseInt(h.substring(h.lastIndexOf("-")+1),0);u(d,e,f,i)}return g===f.currentIndex?(j(d,g).focus(),!1):void 0}function R(a){throw arguments.length>1&&(a=a.format(Array.prototype.slice.call(arguments,1))),new Error(a)}function S(a,b){null==b&&R("The argument '{0}' is null or undefined.",a)}a.fn.extend({_aria:function(a,b){return this.attr("aria-"+a,b)},_removeAria:function(a){return this.removeAttr("aria-"+a)},_enableAria:function(a){return null==a||a?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(a){return null==a||a?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(a){return null==a||a?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(a){return a?this.attr("id",a):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(){for(var b=1===arguments.length&&a.isArray(arguments[0])?arguments[0]:arguments,c=this,d=0;d<b.length;d++){var e=new RegExp("\\{"+d+"\\}","gm");c=c.replace(e,b[d])}return c});var T=0,U="jQu3ry_5teps_St@te_",V="-t-",W="-p-",X="-h-",Y="Index out of range.",Z="One or more corresponding step {0} are missing.";a.fn.steps=function(b){return a.fn.steps[b]?a.fn.steps[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.steps"):w.apply(this,arguments)},a.fn.steps.add=function(a){var b=n(this);return x(this,m(this),b,b.stepCount,a)},a.fn.steps.destroy=function(){return g(this,m(this))},a.fn.steps.finish=function(){h(this,n(this))},a.fn.steps.getCurrentIndex=function(){return n(this).currentIndex},a.fn.steps.getCurrentStep=function(){return p(this,n(this).currentIndex)},a.fn.steps.getStep=function(a){return p(this,a)},a.fn.steps.insert=function(a,b){return x(this,m(this),n(this),a,b)},a.fn.steps.next=function(){return s(this,m(this),n(this))},a.fn.steps.previous=function(){return t(this,m(this),n(this))},a.fn.steps.remove=function(a){return H(this,m(this),n(this),a)},a.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},a.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var $=a.fn.steps.contentMode={html:0,iframe:1,async:2},_=a.fn.steps.stepsOrientation={horizontal:0,vertical:1},ab=a.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},bb=a.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:$.html,contentLoaded:!1},cb=a.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:_.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!1,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:ab.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},labels:{cancel:"Cancel",current:"current step:",pagination:"Pagination",finish:"Finish",next:"Next",previous:"Previous",loading:"Loading ..."}}}(jQuery);
;
!function(a){a(["jquery"],function(a){return function(){function b(a,b,c){return o({type:u.error,iconClass:p().iconClasses.error,message:a,optionsOverride:c,title:b})}function c(b,c){return b||(b=p()),r=a("#"+b.containerId),r.length?r:(c&&(r=l(b)),r)}function d(a,b,c){return o({type:u.info,iconClass:p().iconClasses.info,message:a,optionsOverride:c,title:b})}function e(a){s=a}function f(a,b,c){return o({type:u.success,iconClass:p().iconClasses.success,message:a,optionsOverride:c,title:b})}function g(a,b,c){return o({type:u.warning,iconClass:p().iconClasses.warning,message:a,optionsOverride:c,title:b})}function h(a){var b=p();r||c(b),k(a,b)||j(b)}function i(b){var d=p();return r||c(d),b&&0===a(":focus",b).length?void q(b):void(r.children().length&&r.remove())}function j(b){for(var c=r.children(),d=c.length-1;d>=0;d--)k(a(c[d]),b)}function k(b,c){return b&&0===a(":focus",b).length?(b[c.hideMethod]({duration:c.hideDuration,easing:c.hideEasing,complete:function(){q(b)}}),!0):!1}function l(b){return r=a("<div/>").attr("id",b.containerId).addClass(b.positionClass).attr("aria-live","polite").attr("role","alert"),r.appendTo(a(b.target)),r}function m(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:!0}}function n(a){s&&s(a)}function o(b){function d(b){return!a(":focus",j).length||b?j[g.hideMethod]({duration:g.hideDuration,easing:g.hideEasing,complete:function(){q(j),g.onHidden&&"hidden"!==o.state&&g.onHidden(),o.state="hidden",o.endTime=new Date,n(o)}}):void 0}function e(){(g.timeOut>0||g.extendedTimeOut>0)&&(i=setTimeout(d,g.extendedTimeOut))}function f(){clearTimeout(i),j.stop(!0,!0)[g.showMethod]({duration:g.showDuration,easing:g.showEasing})}var g=p(),h=b.iconClass||g.iconClass;"undefined"!=typeof b.optionsOverride&&(g=a.extend(g,b.optionsOverride),h=b.optionsOverride.iconClass||h),t++,r=c(g,!0);var i=null,j=a("<div/>"),k=a("<div/>"),l=a("<div/>"),m=a(g.closeHtml),o={toastId:t,state:"visible",startTime:new Date,options:g,map:b};return b.iconClass&&j.addClass(g.toastClass).addClass(h),b.title&&(k.append(b.title).addClass(g.titleClass),j.append(k)),b.message&&(l.append(b.message).addClass(g.messageClass),j.append(l)),g.closeButton&&(m.addClass("toast-close-button").attr("role","button"),j.prepend(m)),j.hide(),g.newestOnTop?r.prepend(j):r.append(j),j[g.showMethod]({duration:g.showDuration,easing:g.showEasing,complete:g.onShown}),g.timeOut>0&&(i=setTimeout(d,g.timeOut)),j.hover(f,e),!g.onclick&&g.tapToDismiss&&j.click(d),g.closeButton&&m&&m.click(function(a){a.stopPropagation?a.stopPropagation():void 0!==a.cancelBubble&&a.cancelBubble!==!0&&(a.cancelBubble=!0),d(!0)}),g.onclick&&j.click(function(){g.onclick(),d()}),n(o),g.debug&&console&&console.log(o),j}function p(){return a.extend({},m(),v.options)}function q(a){r||(r=c()),a.is(":visible")||(a.remove(),a=null,0===r.children().length&&r.remove())}var r,s,t=0,u={error:"error",info:"info",success:"success",warning:"warning"},v={clear:h,remove:i,error:b,getContainer:c,info:d,options:{},subscribe:e,success:f,version:"2.0.3",warning:g};return v}()})}("function"==typeof define&&define.amd?define:function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("jquery")):window.toastr=b(window.jQuery)});
;



/*!

Holder - 2.3.2 - client side image placeholders
(c) 2012-2014 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/
var Holder = Holder || {};
(function (app, win) {
var system_config = {
	use_svg: false,
	use_canvas: false,
	use_fallback: false
};
var instance_config = {};
var preempted = false;
canvas = document.createElement('canvas');
var dpr = 1, bsr = 1;
var resizable_images = [];

if (!canvas.getContext) {
	system_config.use_fallback = true;
} else {
	if (canvas.toDataURL("image/png")
		.indexOf("data:image/png") < 0) {
		//Android doesn't support data URI
		system_config.use_fallback = true;
	} else {
		var ctx = canvas.getContext("2d");
	}
}

if(!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect){
	system_config.use_svg = true;
	system_config.use_canvas = false;
}

if(!system_config.use_fallback){
    dpr = window.devicePixelRatio || 1,
    bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
}

var ratio = dpr / bsr;

var settings = {
	domain: "holder.js",
	images: "img",
	bgnodes: ".holderjs",
	themes: {
		"gray": {
			background: "#eee",
			foreground: "#aaa",
			size: 12
		},
		"social": {
			background: "#3a5a97",
			foreground: "#fff",
			size: 12
		},
		"industrial": {
			background: "#434A52",
			foreground: "#C2F200",
			size: 12
		},
		"sky": {
			background: "#0D8FDB",
			foreground: "#fff",
			size: 12
		},
		"vine": {
			background: "#39DBAC",
			foreground: "#1E292C",
			size: 12
		},
		"lava": {
			background: "#F8591A",
			foreground: "#1C2846",
			size: 12
		}
	},
	stylesheet: ""
};


//github.com/davidchambers/Base64.js
(function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var o,n,a=0,i=r,c="";e.charAt(0|a)||(i="=",a%1);c+=i.charAt(63&o>>8-8*(a%1))){if(n=e.charCodeAt(a+=.75),n>255)throw new t("'btoa' failed");o=o<<8|n}return c}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var o,n,a=0,i=0,c="";n=e.charAt(i++);~n&&(o=a%4?64*o+n:n,a++%4)?c+=String.fromCharCode(255&o>>(6&-2*a)):0)n=r.indexOf(n);return c})})();

//getElementsByClassName polyfill
document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

//getComputedStyle polyfill
window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}}

//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a,b){var a=a.match(/^(\W)?(.*)/),b=b||document,c=b["getElement"+(a[1]?"#"==a[1]?"ById":"sByClassName":"sByTagName")],d=c.call(b,a[2]),e=[];return null!==d&&(e=d.length||0===d.length?d:[d]),e}



//hasOwnProperty polyfill
if (!Object.prototype.hasOwnProperty)
    /*jshint -W001, -W103 */
    Object.prototype.hasOwnProperty = function(prop) {
		var proto = this.__proto__ || this.constructor.prototype;
		return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
	}
    /*jshint +W001, +W103 */

})(Holder, window);


;
/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', {"width":950,"height":550,"pathes":{"id":{"path":"M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z","name":"Indonesia"},"pg":{"path":"M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z","name":"Papua New Guinea"},"mx":{"path":"M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z","name":"Mexico"},"ee":{"path":"M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z","name":"Estonia"},"dz":{"path":"M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z","name":"Algeria"},"ma":{"path":"M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z","name":"Morocco"},"mr":{"path":"M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z","name":"Mauritania"},"sn":{"path":"M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z","name":"Senegal"},"gm":{"path":"M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z","name":"Gambia"},"gw":{"path":"M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z","name":"Guinea-Bissau"},"gn":{"path":"M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z","name":"Guinea"},"sl":{"path":"M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z","name":"Sierra Leone"},"lr":{"path":"M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z","name":"Liberia"},"ci":{"path":"M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z","name":"Cote d'Ivoire"},"ml":{"path":"M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z","name":"Mali"},"bf":{"path":"M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z","name":"Burkina Faso"},"ne":{"path":"M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z","name":"Niger"},"gh":{"path":"M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z","name":"Ghana"},"tg":{"path":"M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z","name":"Togo"},"bj":{"path":"M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z","name":"Benin"},"ng":{"path":"M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z","name":"Nigeria"},"tn":{"path":"M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z","name":"Tunisia"},"ly":{"path":"M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z","name":"Libya"},"eg":{"path":"M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z","name":"Egypt"},"td":{"path":"M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z","name":"Chad"},"sd":{"path":"M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z","name":"Sudan"},"cm":{"path":"M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z","name":"Cameroon"},"er":{"path":"M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z","name":"Eritrea"},"dj":{"path":"M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z","name":"Djibouti"},"et":{"path":"M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z","name":"Ethiopia"},"so":{"path":"M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z","name":"Somalia"},"ye":{"path":"M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z","name":"Yemen"},"cf":{"path":"M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z","name":"Central African Republic"},"st":{"path":"M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z","name":"Sao Tome and Principe"},"gq":{"path":"M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z","name":"Equatorial Guinea"},"ga":{"path":"M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z","name":"Gabon"},"cg":{"path":"M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z","name":"Congo"},"ao":{"path":"M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z","name":"Angola"},"cd":{"path":"M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z","name":"Congo"},"rw":{"path":"M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z","name":"Rwanda"},"bi":{"path":"M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z","name":"Burundi"},"ug":{"path":"M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z","name":"Uganda"},"ke":{"path":"M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z","name":"Kenya"},"tz":{"path":"M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z","name":"Tanzania"},"zm":{"path":"M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z","name":"Zambia"},"mw":{"path":"M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z","name":"Malawi"},"mz":{"path":"M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z","name":"Mozambique"},"zw":{"path":"M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z","name":"Zimbabwe"},"na":{"path":"M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z","name":"Namibia"},"bw":{"path":"M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z","name":"Botswana"},"sz":{"path":"M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z","name":"Swaziland"},"ls":{"path":"M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z","name":"Lesotho"},"za":{"path":"M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z","name":"South Africa"},"gl":{"path":"M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z","name":"Greenland"},"au":{"path":"M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z","name":"Australia"},"nz":{"path":"M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z","name":"New Zealand"},"nc":{"path":"M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z","name":"New Caledonia"},"my":{"path":"M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z","name":"Malaysia"},"bn":{"path":"M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z","name":"Brunei Darussalam"},"tl":{"path":"M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z","name":"Timor-Leste"},"sb":{"path":"M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z","name":"Solomon Islands"},"vu":{"path":"M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z","name":"Vanuatu"},"fj":{"path":"M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z","name":"Fiji"},"ph":{"path":"M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z","name":"Philippines"},"cn":{"path":"M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z","name":"China"},"tw":{"path":"M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z","name":"Taiwan"},"jp":{"path":"M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z","name":"Japan"},"ru":{"path":"M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z","name":"Russian Federation"},"us":{"path":"M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z","name":"United States of America"},"mu":{"path":"M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z","name":"Mauritius"},"re":{"path":"M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z","name":"Reunion"},"mg":{"path":"M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z","name":"Madagascar"},"km":{"path":"M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z","name":"Comoros"},"sc":{"path":"M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z","name":"Seychelles"},"mv":{"path":"M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z","name":"Maldives"},"pt":{"path":"M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z","name":"Portugal"},"es":{"path":"M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z","name":"Spain"},"cv":{"path":"M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z","name":"Cape Verde"},"pf":{"path":"M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z","name":"French Polynesia"},"kn":{"path":"M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z","name":"Saint Kitts and Nevis"},"ag":{"path":"M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z","name":"Antigua and Barbuda"},"dm":{"path":"M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z","name":"Dominica"},"lc":{"path":"M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z","name":"Saint Lucia"},"bb":{"path":"M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z","name":"Barbados"},"gd":{"path":"M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z","name":"Grenada"},"tt":{"path":"M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z","name":"Trinidad and Tobago"},"do":{"path":"M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z","name":"Dominican Republic"},"ht":{"path":"M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z","name":"Haiti"},"fk":{"path":"M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z","name":"Falkland Islands"},"is":{"path":"M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z","name":"Iceland"},"no":{"path":"M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z","name":"Norway"},"lk":{"path":"M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z","name":"Sri Lanka"},"cu":{"path":"M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z","name":"Cuba"},"bs":{"path":"M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z","name":"Bahamas"},"jm":{"path":"M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z","name":"Jamaica"},"ec":{"path":"M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z","name":"Ecuador"},"ca":{"path":"M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z","name":"Canada"},"gt":{"path":"M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z","name":"Guatemala"},"hn":{"path":"M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z","name":"Honduras"},"sv":{"path":"M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z","name":"El Salvador"},"ni":{"path":"M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z","name":"Nicaragua"},"cr":{"path":"M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z","name":"Costa Rica"},"pa":{"path":"M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z","name":"Panama"},"co":{"path":"M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z","name":"Colombia"},"ve":{"path":"M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z","name":"Venezuela"},"gy":{"path":"M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z","name":"Guyana"},"sr":{"path":"M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z","name":"Suriname"},"gf":{"path":"M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z","name":"French Guiana"},"pe":{"path":"M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z","name":"Peru"},"bo":{"path":"M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z","name":"Bolivia"},"py":{"path":"M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z","name":"Paraguay"},"uy":{"path":"M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z","name":"Uruguay"},"ar":{"path":"M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z","name":"Argentina"},"cl":{"path":"M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z","name":"Chile"},"br":{"path":"M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z","name":"Brazil"},"bz":{"path":"M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z","name":"Belize"},"mn":{"path":"M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z","name":"Mongolia"},"kp":{"path":"M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z","name":"North Korea"},"kr":{"path":"M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z","name":"South Korea"},"kz":{"path":"M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z","name":"Kazakhstan"},"tm":{"path":"M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z","name":"Turkmenistan"},"uz":{"path":"M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z","name":"Uzbekistan"},"tj":{"path":"M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z","name":"Tajikistan"},"kg":{"path":"M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z","name":"Kyrgyz Republic"},"af":{"path":"M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z","name":"Afghanistan"},"pk":{"path":"M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z","name":"Pakistan"},"in":{"path":"M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z","name":"India"},"np":{"path":"M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z","name":"Nepal"},"bt":{"path":"M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z","name":"Bhutan"},"bd":{"path":"M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z","name":"Bangladesh"},"mm":{"path":"M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z","name":"Myanmar"},"th":{"path":"M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z","name":"Thailand"},"kh":{"path":"M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z","name":"Cambodia"},"la":{"path":"M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z","name":"Lao People's Democratic Republic"},"vn":{"path":"M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z","name":"Vietnam"},"ge":{"path":"M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z","name":"Georgia"},"am":{"path":"M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z","name":"Armenia"},"az":{"path":"M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z","name":"Azerbaijan"},"ir":{"path":"M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z","name":"Iran"},"tr":{"path":"M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z","name":"Turkey"},"om":{"path":"M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z","name":"Oman"},"ae":{"path":"M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z","name":"United Arab Emirates"},"qa":{"path":"M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z","name":"Qatar"},"kw":{"path":"M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z","name":"Kuwait"},"sa":{"path":"M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z","name":"Saudi Arabia"},"sy":{"path":"M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z","name":"Syrian Arab Republic"},"iq":{"path":"M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z","name":"Iraq"},"jo":{"path":"M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z","name":"Jordan"},"lb":{"path":"M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z","name":"Lebanon"},"il":{"path":"M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z","name":"Israel"},"cy":{"path":"M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z","name":"Cyprus"},"gb":{"path":"M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z","name":"United Kingdom"},"ie":{"path":"M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z","name":"Ireland"},"se":{"path":"M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z","name":"Sweden"},"fi":{"path":"M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z","name":"Finland"},"lv":{"path":"M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z","name":"Latvia"},"lt":{"path":"M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z","name":"Lithuania"},"by":{"path":"M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z","name":"Belarus"},"pl":{"path":"M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z","name":"Poland"},"it":{"path":"M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z","name":"Italy"},"fr":{"path":"M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z","name":"France"},"nl":{"path":"M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z","name":"Netherlands"},"be":{"path":"M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z","name":"Belgium"},"de":{"path":"M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z","name":"Germany"},"dk":{"path":"M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z","name":"Denmark"},"ch":{"path":"M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z","name":"Switzerland"},"cz":{"path":"M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z","name":"Czech Republic"},"sk":{"path":"M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z","name":"Slovakia"},"at":{"path":"M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z","name":"Austria"},"hu":{"path":"M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z","name":"Hungary"},"si":{"path":"M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z","name":"Slovenia"},"hr":{"path":"M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z","name":"Croatia"},"ba":{"path":"M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z","name":"Bosnia and Herzegovina"},"mt":{"path":"M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z","name":"Malta"},"ua":{"path":"M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z","name":"Ukraine"},"md":{"path":"M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z","name":"Moldova"},"ro":{"path":"M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z","name":"Romania"},"rs":{"path":"M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z","name":"Serbia"},"bg":{"path":"M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z","name":"Bulgaria"},"al":{"path":"M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z","name":"Albania"},"mk":{"path":"M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z","name":"Macedonia"},"gr":{"path":"M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z","name":"Greece"}}});

;
/** Add USA Map Data Points */
jQuery.fn.vectorMap('addMap', 'usa_en', {"width":959,"height":593,"pathes":{"hi":{"path":"m244.66,512.25c-2.48,3.8 2.23,4.04 4.74,5.38 3.06,0.16 3.51,-4.28 2.66,-6.56 -2.72,-0.77 -5.01,-0.19 -7.41,1.19z m-9.31,3.97c-4.02,5.11 3.64,0.48 0.63,-0.09l-0.5,0.07 -0.14,0.02z m39.69,7.97c-0.62,2.09 1.91,6.73 4.39,6.2 2.41,-1.46 3.73,1.73 6.48,0.56 1.23,-1.48 -3.77,-3.2 -3.7,-6.08 -0.95,-3.8 -3.28,-3.2 -5.96,-1.28 -0.41,0.2 -0.81,0.4 -1.22,0.6z m19.94,10.03c3.58,0.95 7.91,2.99 11.25,0.47 -1.05,-1.63 -5.06,-0.59 -7.1,-0.86 -1.44,0.01 -3.54,-1.63 -4.15,0.39z m12.13,4.38c2.33,2.45 3.64,6.83 7.24,7.4 2.36,-0.69 6.84,-0.66 7.32,-3.43 -2.09,-2.51 -5.77,-3.35 -8.88,-4.29 -2.53,-1.2 -4.11,-3.25 -5.68,0.33z m-7.06,1c-0.29,3.69 5.55,3.98 3.67,0.55 -0.27,-1.25 -3.83,-1.74 -3.67,-0.55z m23.66,14.69c0.27,2.45 3.18,3.93 0.47,6.15 -0.65,2.42 -5.54,2.87 -2.52,5.53 2.36,1.46 2.01,4.85 2.92,7.14 -0.72,2.69 -1.43,6.78 1.72,8.06 2.8,2.95 4.5,-1.93 6.19,-3.68 1.27,-1.69 3.85,-4.1 5.94,-2.59 3.04,-0.81 6.3,-2.42 7.78,-5.22 -2.79,-1.31 -4.88,-3.19 -5.57,-6.29 -2.4,-5.33 -8.95,-6.26 -13.58,-8.98 -1.29,-0.52 -2.26,-1.62 -3.34,-0.11z","name":"Hawaii"},"ak":{"path":"m107.84,436.56c-2.27,0.55 -4.87,0.32 -6.84,-0.34 -2.41,1.22 -5.63,4.03 -8.25,1.88 -3.1,0.93 -3.51,3.84 -5.22,5.97 -1.82,2.52 -4.21,3.65 -7.31,3.14 -2.5,-0.94 -5.49,-1.15 -7.5,0.98 2.03,4.34 6.39,8.13 5.82,13.23 -1.85,2.94 6.31,2.99 2.68,5.02 0.15,2.8 3.07,5.68 2.91,7.88 -2.35,2.21 -5.24,-0.38 -7.71,-1.06 -3.24,-0.64 -2.73,-3.35 -0.82,-5.22 -1.57,-1.51 -7.35,-1.81 -6.51,1.12 -2.01,0.04 -3.81,-1.66 -6.27,-0.77 -3.72,-0.44 -5.97,0.65 -2.94,4.05 3.68,1.45 1.06,4.72 1.17,7.57 0.76,2.63 3.66,4.89 6.67,4.17 3.2,-0.06 5.87,3.59 9.21,1.65 2.16,-1.3 5.33,-0.99 4.79,1.89 -2.53,2.07 -1.36,6.13 -2.78,8.75 -1.96,1.88 -4.53,1.59 -6.59,0.16 -1.52,1.37 -4.7,3.68 -6.28,2.22 0.72,-3.71 -4.77,-3.63 -5.51,-0.61 -1.21,3.97 -6.27,4.46 -8.31,7.63 -0.7,2.42 -1.55,6.7 1.74,6.3 1.26,1.11 -1.2,4.8 -2.77,5.52 1.62,2.19 2.65,4.59 2.72,7.34 1.71,1.55 6.35,1.98 7.5,-0.16 2.45,-0.95 1.79,4.1 2.08,5.97 2.47,2.95 -4.02,1.28 -1.61,4.56 -0.85,2.93 -1.76,5.02 2,2.72 2.76,-0.47 5.11,-0.69 5.66,2.09 2.59,-3.91 2.26,2.78 3.25,4.66 0.59,-0.75 1.3,-5.69 3.94,-3.06 -0.17,4.52 5.33,-0.45 5.78,-0.04 0.54,2.92 -1.63,4.24 -2.86,6.41 -1.51,2.24 -2.07,5.63 -4.21,7.17 -3.87,-0.42 -3.37,4.1 -5.5,5.02 -2.65,-0.72 -5.73,0.71 -8.44,1.41 -1.35,2.41 -3.61,4.2 -5.78,1.81 -2.56,0.05 -5.63,0.68 -7.63,2.33 -2.48,2.43 -6.32,3.11 -9.66,2.29 -2.78,-1.91 -7.11,3.41 -3.11,2.31 2.5,-1.91 4.66,0.64 7.25,0.63 2.21,-1.15 4.17,-2.75 6.84,-2.06 2.32,-3.35 5.1,-0.32 7.92,-1.16 2.31,-0.39 7.01,-3.91 5.26,0.66 0.09,-2.91 3.42,-2.73 5.54,-2.04 4.21,0.96 0.29,-3.16 2.08,-3.43 3.47,-2.05 7.52,-2.41 11.2,-3.72 5.48,-3.19 11.62,-5.7 16.21,-10.1 4.27,-2.97 -2.78,-3.48 -1.21,-6.32 1.68,-2.43 4.58,-3.81 7.47,-4.5 1.5,-3.07 3.53,-6.11 5.88,-8.52 2.49,-1.32 4.83,-3.39 7.83,-2.32 2.67,0.71 3.74,5.32 -0.52,3.66 -1.27,-1.88 -5.56,-0.09 -5.25,2.41 -0.21,2.44 -2.56,4.22 -3.06,6.66 4.79,0.85 0.24,3.54 -1.38,3.8 1.67,1.91 5.66,0.6 7.57,-1.14 1.25,-1.85 3.43,-3.8 5.41,-4.22 1.81,2.8 5.1,-1.16 5.74,2.72 0.71,2.78 6.02,-4.86 3.34,-3.1 -3.03,3.11 -3.78,2.86 -1.94,-1.24 1.43,-4.85 -1.76,6.17 -1.45,0.81 -0.81,-3.19 -0.93,-6.03 3.05,-6.4 2.7,-0.86 5.37,-0.87 5.79,2.52 0.42,3.48 3.8,2.84 5.95,4.76 2.41,2.2 4.76,1.95 7.8,1.78 4.34,-0.47 8.01,4.04 12.28,3.17 2.49,-0.42 5.1,-5.2 4.29,-0.23 -2.26,2.83 -0.02,4.12 2.5,5.41 3.13,1.35 5.87,3.14 7.94,5.85 1.31,3.02 6.05,0.28 6.18,2.43 -3.83,1.25 -1.23,3.54 0.21,5.47 1.81,1.95 0.33,5.72 3.64,5.82 1.14,1.28 3.49,7.44 4.01,5.38 -0.35,-2.32 -0.7,-7.86 1.61,-3.76 0.37,1.42 1.04,8.7 2.07,4.74 1.07,-4.88 3.18,0.18 2.22,2.93 3.33,1.69 -1.23,3.33 0.69,4.88 0.69,-3.24 1.31,-0.36 2.16,1.56 1.05,1 1.54,3.94 3.13,3.72 -1.68,-1.72 -2.94,-6.23 0.4,-3 2.42,2.79 4.05,2.12 2.74,-1.66 -2.65,-2.66 0.28,-4.96 2.58,-2.29 3.12,-0.05 2.84,5.21 5.28,4.53 3.31,-3.17 1.5,-7.87 0.69,-11.7 -3.3,-1.55 -7.04,-2.54 -10.22,-4.06 -1.5,-5.33 -6.29,-8.69 -8.4,-13.77 -0.44,-3.33 -4.71,-2.62 -5.75,-5.23 -2.32,-1.72 -2.7,-4.4 -4.56,-6.35 -1.65,-1.53 -5.22,0.95 -5.51,2.94 0.59,3.09 -3.23,3.04 -5.06,4.72 0.05,-4.27 -4.3,-6.15 -6.7,-9.1 -1.33,-1.99 -1.32,-5.36 -4.45,-2.34 -2.37,0.24 -6.38,-0.31 -5.34,-3.62 0.1,-27.7 0.2,-55.4 0.31,-83.09 -2.75,-1.88 -5.88,-4.17 -9.15,-4.4 -2.52,1.72 -5.07,1.09 -7.39,-0.62 -2.72,0.23 -5.12,-0.65 -7.7,-2.89 -3.08,-2.74 -8.58,0.17 -10.98,-3.65 1.13,-3.56 -3.22,-4.83 -5,-2.09 -2.09,0.26 -0.65,-4.31 -3.64,-4.93 -2.57,-2.85 -4.01,-1.28 -5.86,1.21z M36.38,480.63c-0.67,3.11 4.27,1.31 4.72,4.66 0.24,3.82 5.37,3.9 2.34,-0.08 -0.1,-3.22 -3.92,-1.83 -5.06,-4.43 -0.76,-2.02 -0.9,-1.86 -2,-0.16z m-17.16,23.16c2.57,4.06 1.45,1.37 0.13,-1.28 -0.36,0.01 0,1 -0.13,1.28z m21.84,14.81c1.27,1.79 4.99,5.58 6.22,2.03 2.26,-3.3 -3.27,-2.89 -5.23,-3.68 -1.83,-0.9 -0.88,0.54 -0.99,1.65z m91.72,18.78c0.06,3.21 2.81,-1.98 0,0z m-31.47,14.69c-3.2,2.91 -7.24,4.67 -10.56,7.38 0.22,2.75 0.99,7.64 4.67,5.15 2.5,-1.44 4.98,-2.9 7.45,-4.37 -1.84,-3.31 -0.81,-3.15 -4.55,-3.48 -4.15,0.09 1.06,-3.73 2.64,-1.62 3.74,-1.04 3.95,-2.36 1.5,-3.66 0.7,-1.08 -1,0.61 -1.16,0.59z M55.75,570.75c1.42,2.83 3.53,-1.99 0,0z m-35.78,0.34c0.53,2.46 -4.04,4.84 1.05,3.59 4.2,0.47 3.46,-4.35 0.01,-3.84 -0.35,0.08 -0.7,0.16 -1.06,0.24z m62.19,0.69c1.57,2.91 1.31,-2.03 0,0z M58.63,573.13c3.23,0.49 0.99,-3.05 0,0z m-49,0.09c-4.84,2.56 -0.44,1.81 2.29,0.58 2.89,0.16 5.05,-0.48 0.84,-1.46 -1.04,0.29 -2.08,0.58 -3.13,0.88z m7.25,1.38c1.28,0.21 -2.23,-0.59 0,0z","name":"Alaska"},"fl":{"path":"m748.38,439.94c1.69,2.92 1.5,6.12 1.16,9.34 -4.12,0.54 -2.15,-4.69 -5.56,-3.99 -6.18,-0.07 -12.34,1.13 -18.54,1.19 -10.09,0.29 -20.37,2.14 -30.33,0.64 -2.57,-1.57 -2.84,-6.15 -6.5,-5.33 -9.12,-0.12 -18.18,1.79 -27.26,2.55 -5.82,0.63 -11.62,1.37 -17.43,2.12 -1.42,3.25 2.6,4.37 4.06,6.34 0.8,2.28 -1.56,8.42 2.19,7.1 4.11,-1.2 8.08,-2.93 12.48,-2.72 3.34,-0.82 6.63,-0.73 9.89,0.45 4.09,0.8 7.77,3.09 11.41,4.98 1.77,1.94 5.5,1.87 5.97,5 -0.14,3.27 4.32,-0.94 6.5,0.53 3.19,-0.8 5.24,-3.68 7.69,-5.5 4.86,1.69 0.62,-2.9 3.27,-3.97 3.13,-0.83 6.62,-1.39 9.35,0.79 3.04,0.57 5.43,2 6.57,4.99 3.68,0.02 2.88,4.13 5.48,5.3 2.96,0.49 2.98,4.52 6.3,4.3 2.91,0.36 5.45,1.15 5.84,4.45 2.05,2.11 3.92,4.26 3.09,7.41 0.18,3.68 0.12,7.33 -1.44,10.75 0.39,3.68 1.37,7.94 3.28,10.78 2.25,-3.46 0.17,-3.87 -1.74,-6.03 2.19,-1.76 4.86,-0.22 7.3,0.16 0.82,3.15 -2.16,5.6 -3.48,8.19 -3.3,2.21 1.65,4.09 2.73,6.3 3.11,3.34 4.35,7.94 7.53,11.26 0.78,2.29 2.51,7.47 4.63,3.09 2.54,-0.24 3.88,3.44 5.28,5.41 -0.02,2.26 1.93,7.04 3.59,6.44 2.88,-0.8 6.04,0.65 8.28,2.59 2.56,3.3 4.58,6.98 4.56,11.27 1.37,2.73 4.55,0.44 5.81,-1.14 3.74,0.45 7.26,-1.25 9.22,-4.47 -1.01,-2.36 -0.57,-4.83 -0.32,-7.17 -0.04,-2.18 4.33,-3.19 2.25,-6.51 -0.98,-6.33 -0.19,-12.96 -1.87,-19.25 -2.46,-6.93 -7.54,-12.74 -10.4,-19.56 -1.51,-2.41 -4.24,-3.92 -4.62,-7.04 -0.94,-2.28 -2.67,-4.95 -0.07,-6.71 -0.39,-3.56 -4.86,-5.42 -6.84,-8.41 -5.38,-5.57 -8.29,-12.94 -12.35,-19.44 -2.15,-5.53 -4.29,-11.07 -5.91,-16.78 -3.43,0.07 -7.3,-1.03 -10.46,-0.35l-0.34,0.37 -0.26,0.29z m52.91,109.22c-1.9,4.58 0.72,0.38 0.66,-1.91 -0.22,0.64 -0.44,1.27 -0.66,1.91z m-4.69,9.91c2.56,-1.97 3.68,-6.84 1.04,-1.68 -0.35,0.56 -0.69,1.12 -1.04,1.68z m-2.25,2.22c1.46,-1.22 2.04,-2.07 0.18,-0.18l-0.18,0.18z m-5.72,4.16c-5.23,3.69 4.03,-2.14 0.33,-0.19l-0.33,0.19z m-10.72,3.22c-3.41,3.16 5.71,-0.32 4.1,-0.81 -1.8,-0.56 -2.56,-0.71 -4.1,0.81z m-4.59,3.16c0.08,0.16 0.4,-0.3 0,0z","name":"Florida"},"nh":{"path":"m862.56,94c-1.4,-0.41 -3.87,-0.72 -3.05,3 0.22,3.63 -0.73,7.84 2.23,10.59 0.33,2.78 0.08,5.36 -2.17,7.29 -0.19,2.83 -5.98,2.58 -3.35,5.32 1.16,7.35 -0.56,15.03 -0.62,22.51 1.2,1.95 0.98,4.39 0.76,6.75 -1.07,3.79 4.84,-0.05 6.89,0.06 3.93,-1.29 8.46,-1.74 12.04,-3.54 0.77,-3.1 4.37,-2.75 5.94,-4.96 2.59,-3.52 -3.01,-2.73 -2,-6.59 -3.83,0.01 -4.27,-2.46 -4.66,-5.62 -3.84,-11.98 -7.32,-24.45 -11.49,-36.1 -0.18,0.43 -0.35,0.85 -0.53,1.28z","name":"New Hampshire"},"mi":{"path":"M697.86,177.24L694.63,168.99L692.36,159.94L689.94,156.71L687.35,154.93L685.74,156.06L681.86,157.84L679.92,162.85L677.17,166.57L676.04,167.21L674.58,166.57C674.58,166.57 671.99,165.11 672.16,164.47C672.32,163.82 672.64,159.45 672.64,159.45L676.04,158.16L676.84,154.77L677.49,152.18L679.92,150.56L679.59,140.54L677.98,138.28L676.68,137.47L675.87,135.37L676.68,134.56L678.3,134.88L678.46,133.27L676.04,131L674.74,128.42L672.16,128.42L667.63,126.96L662.13,123.57L659.38,123.57L658.74,124.21L657.77,123.73L654.7,121.46L651.79,123.24L648.88,125.51L649.2,129.06L650.17,129.39L652.27,129.87L652.76,130.68L650.17,131.49L647.58,131.81L646.13,133.59L645.81,135.69L646.13,137.31L646.45,142.8L642.9,144.9L642.25,144.74L642.25,140.54L643.54,138.12L644.19,135.69L643.38,134.88L641.44,135.69L640.47,139.89L637.72,141.02L635.94,142.96L635.78,143.93L636.43,144.74L635.78,147.33L633.52,147.81L633.52,148.95L634.33,151.37L633.2,157.51L631.58,161.56L632.23,166.24L632.71,167.38L631.9,169.8L631.58,170.61L631.26,173.36L634.81,179.34L637.72,185.8L639.18,190.65L638.37,195.34L637.4,201.32L634.97,206.5L634.65,209.25L631.39,212.33L635.8,212.17L657.22,209.91L664.5,208.92L664.59,210.58L671.45,209.37L681.74,207.87L685.6,207.41L685.74,206.82L685.9,205.37L688,201.65L690,199.91L689.78,194.86L691.37,193.26L692.46,192.92L692.69,189.36L694.22,186.33L695.27,186.94L695.44,187.58L696.24,187.74L698.18,186.77L697.86,177.24z M581.62,82.06L583.45,80L585.62,79.2L590.99,75.31L593.28,74.74L593.74,75.2L588.59,80.34L585.28,82.29L583.22,83.2L581.62,82.06z M667.79,114.19L668.44,116.69L671.67,116.85L672.97,115.64C672.97,115.64 672.89,114.19 672.56,114.03C672.24,113.86 670.95,112.17 670.95,112.17L668.76,112.41L667.15,112.57L666.82,113.7L667.79,114.19z M567.49,111.21L568.21,110.63L570.96,109.82L574.51,107.56L574.51,106.59L575.16,105.94L581.14,104.97L583.57,103.03L587.93,100.93L588.09,99.64L590.03,96.73L591.81,95.92L593.1,94.14L595.37,91.88L599.73,89.46L604.42,88.97L605.55,90.1L605.23,91.07L601.51,92.04L600.06,95.11L597.79,95.92L597.31,98.35L594.88,101.58L594.56,104.17L595.37,104.65L596.34,103.52L599.89,100.61L601.19,101.9L603.45,101.9L606.68,102.87L608.14,104L609.59,107.08L612.34,109.82L616.22,109.66L617.68,108.69L619.29,109.99L620.91,110.47L622.2,109.66L623.33,109.66L624.95,108.69L628.99,105.14L632.39,104L639.02,103.68L643.54,101.74L646.13,100.45L647.58,100.61L647.58,106.27L648.07,106.59L650.98,107.4L652.92,106.91L659.06,105.3L660.19,104.17L661.65,104.65L661.65,111.6L664.88,114.67L666.17,115.32L667.47,116.29L666.17,116.61L665.37,116.29L661.65,115.81L659.55,116.45L657.28,116.29L654.05,117.75L652.27,117.75L646.45,116.45L641.28,116.61L639.34,119.2L632.39,119.85L629.96,120.66L628.83,123.73L627.54,124.86L627.05,124.7L625.6,123.08L621.07,125.51L620.42,125.51L619.29,123.89L618.48,124.05L616.54,128.42L615.57,132.46L612.39,139.46L611.22,138.42L609.85,137.39L607.9,127.1L604.36,125.73L602.31,123.45L590.19,120.7L587.33,119.67L579.1,117.5L571.21,116.36L567.49,111.21z","name":"Michigan"},"vt":{"path":"m833.16,106.59c0.19,6 4.65,11.21 3.72,17.28 -2.48,4.23 4.52,7.29 2.22,11.58 0.9,1.59 4.66,1.96 4.06,5.25 1.08,4.21 2.86,8.34 1.84,12.76 3.35,-0.51 7.06,-1.17 10.13,-1.97 -0.21,-2.13 1.51,-5.75 -0.53,-7.81 0.2,-7.64 1.01,-15.26 1.13,-22.91 -3.25,-2.41 0.32,-3.79 2.12,-5.18 1.96,-2.28 3.9,-5.07 2.6,-8.1 -2.62,-1.63 -1.02,-5.94 -2.39,-7.22 -8.3,2.1 -16.59,4.21 -24.89,6.31z","name":"Vermont"},"me":{"path":"m889.88,40.22c-2.16,1.31 -3.69,2.74 -4.84,4.69 -2.29,0.6 -4.99,-1.37 -4.88,-3.94 -2.97,-0.82 -3.33,3.68 -4.37,5.71 -1.09,4.29 -3.27,8.39 -3.97,12.69 -0.06,3.04 1,6.63 -1.35,9.09 0.08,2.92 -0.75,6.18 2,8.16 -1.37,5.7 -6.23,10.36 -5.41,16.56 -4.27,-2.21 -1.74,2.47 -1.09,4.73 3.51,11.08 7.19,22.16 10.25,33.35 0.21,3.01 5.81,1.35 4.53,5.7 2.9,2 2.06,-3.92 2.66,-5.87 -1.01,-3.29 2.7,-4.63 0.66,-7.62 0.94,-1.05 2.92,-5.9 4.61,-3.46 2.03,1.03 5.28,-1.89 6.74,-3.19 -0.98,-4.02 4.21,-1.75 4.73,-5.32 -1.11,-2.61 0.74,-5.45 -0.57,-7.44 -2.42,-1.59 3.53,-4.63 3.31,-0.78 2.27,0.48 2.15,2.8 3.66,3.93 1.94,-2.82 -2.15,-3.81 0.35,-6.03 2.43,-0.81 3.1,-3.96 6,-3.31 -0.17,1.46 1.03,3.34 2.26,1.38 2.94,-2.9 5.24,-7.08 9.37,-8.34 1.17,-2.61 3.34,-5.74 0.71,-8.24 -0.55,-1.64 -3.68,-4.84 -4.15,-2.58 -0.75,2.6 -4.66,-0.65 -4.92,-2.22 0.1,-2.8 0.29,-7.17 -3.8,-5.81 -3.96,1.36 -3.64,-3.04 -4.69,-5.61C905.22,58.3 902.75,50.15 900.28,42c-2.86,-1.25 -5.71,-2.92 -8.81,-3.38 -0.53,0.53 -1.06,1.06 -1.59,1.59z m20.47,61c-2.81,1.7 1.87,5.16 1.13,1.22 1.48,-0.9 0.13,-2.4 -1.13,-1.22z m-7.81,7.81c3.16,6.67 2.63,-3.59 0,0z","name":"Maine"},"ri":{"path":"m871,164.28c1.15,4.66 2.29,9.31 3.44,13.97 2.56,-0.49 4.66,-2.29 5.84,-4.56 4.17,0.76 4,-2.64 1.51,-4.97 -1.79,-1.94 -3.16,-5.31 -5.74,-5.92 -1.68,0.49 -3.37,0.99 -5.05,1.48z","name":"Rhode Island"},"ny":{"path":"m825.56,108.66c-2.7,1.12 -5.45,1.68 -8.33,1.43 -5.07,0.72 -10.17,2.73 -12.92,7.31 -2.84,3.43 -4.89,7.49 -7.18,11.2 -1.65,2.36 -5.82,3.73 -5.55,6.84 -0.17,3.56 5.77,0.73 4.43,4.38 -2.69,2.3 0.8,4.23 0.56,6.59 0.5,3.47 -4.26,1.99 -5.36,4 -1.62,2.71 -3.35,6.62 -7.22,6.05 -3.04,-0.43 -5.35,2.05 -7.98,2.63 -2.5,-0.75 -4.7,-2.05 -7.59,-1.31 -5.31,0.21 -10.62,1.98 -15.23,4.53 -0.29,1.77 0.61,6.25 3.17,6.14 1.55,2.48 2.09,4.96 -0.63,6.72 -1.51,1.76 -1.8,4.25 -4.16,5.3 -1.93,1.14 -2.68,3.51 -4.8,4.54 0.33,3.07 -0.22,7.29 4.08,5.12 22.14,-4.26 44.26,-8.68 66.23,-13.74 0.98,3.85 5.67,1.32 6.44,4 0.64,2.93 1.36,7.4 5.33,6.88 3.14,1.9 6.9,3.68 10.69,4.22 2.71,0.47 7.18,1.43 6.44,5.06 -0.33,1.97 -1.62,7.56 1.97,5.93 5.3,-1.65 10.96,-2.84 15.06,-6.85 3.23,-2.49 6.76,-4.64 9.35,-7.86 -2.99,-2.44 -4.65,0.46 -6.81,2.42 -2.91,1.56 -6.01,3.51 -9.16,4.32 -2.6,-0.63 -4.83,-0.86 -6.18,2.07 -1.03,2.04 -4.86,2.98 -3.98,-0.15 4.26,-1.87 -2.17,-3.97 -0.33,-6.21 1.19,-3.13 0.56,-6.87 0.42,-10.21 -1.43,-7.38 -3.69,-14.76 -2.54,-22.36 -0.08,-4.46 1.55,-8.97 -0.51,-13.21 -1.22,-2.56 -0.47,-6.83 -4.05,-7.34 -2.99,-0.66 0.75,-4.31 -1.57,-6.2 -1.7,-2.43 -3.17,-4.91 -1.54,-7.81 0.38,-5.77 -3.83,-10.57 -3.55,-16.35 -2.32,0.65 -4.65,1.29 -6.97,1.94z","name":"New York"},"pa":{"path":"m798.88,181.63c-17.5,3.38 -34.87,7.42 -52.47,10.28 -0.61,-2 0.48,-8.42 -2.41,-4.31 -2.18,2.73 -5.48,3.74 -8.09,5.97 1.52,9.75 2.63,19.57 5.44,29.05 1.14,6.09 2.27,12.17 3.41,18.26 8.85,-1.42 17.79,-2.25 26.51,-4.41 16.39,-3.45 33.03,-6.46 49.33,-9.87 2.48,-3.07 8.03,-1.69 8.97,-6.19 0.64,-2.36 4.86,-3.99 4.33,-5.9 -2.3,-1.89 -5.94,-2.77 -6.39,-6.13 -3.14,1.09 -4.42,-3.94 -3.12,-5.32 3.86,-1.1 -0.49,-3.68 0.55,-5.96 2.52,-1.88 1.12,-5.15 2.81,-7.07 3.87,-2.7 -2.98,-1.1 -3.72,-3.99 -1.35,-2.18 -0.28,-7.24 -4.16,-5.92 -2.34,-1.13 -3.87,-3.75 -7.09,-1.7 -4.64,1.07 -9.28,2.15 -13.92,3.22z","name":"Pennsylvania"},"nj":{"path":"m827.84,191.34c1.03,2.99 -1.82,4.8 -2.06,7.47 2.86,1.63 0.49,4.87 -0.92,5.73 -0.41,3.86 4.01,1.68 4.16,5.14 1.37,2.19 4.72,3.02 6.26,4.94 -0.15,2.61 -3.85,3.5 -4.69,6.06 -0.26,3.07 -4.09,3.19 -4.18,5.96 -0.99,2.38 -0.74,5.09 1.7,6.47 2.85,2.76 6.86,3.99 10.73,4.38 0.48,1.55 -1.84,7.18 1.1,3.59 1.5,-2.42 0.59,-5.95 3.11,-8.01 2.5,-4.08 5.03,-8.84 4.88,-13.61 -1.35,-4.07 0.8,-9.01 -1.81,-12.82 -1.1,1.32 -6.17,1.23 -4.13,-0.8 2.39,-1.39 3.37,-3.62 2.39,-6.31 0.21,-2.31 1.58,-5.42 -1.69,-6.19 -4.35,-1.15 -8.82,-2.13 -12.88,-4.26 -0.66,0.75 -1.31,1.5 -1.97,2.25z","name":"New Jersey"},"de":{"path":"m824.88,225.34c-3.72,0.25 -3.47,3.52 -1.91,6.13 3.35,6.89 3.86,14.58 6.03,21.81 3.45,0.11 6.81,-0.49 10.16,-1.25 -1.2,-2.17 -0.68,-6.38 -3.32,-6.38 -2.9,-1.2 -4.17,-3.69 -4.9,-6.58 -0.91,-3.11 -3.62,-4.96 -5.48,-7.35 -1.85,-1.82 0.94,-5.5 -0.26,-6.47l-0.33,0.09z","name":"Delaware"},"md":{"path":"m813.59,229.19c-17.31,3.18 -34.53,6.83 -51.78,10.28 0.74,3.02 1.31,6.08 1.78,9.16 2.14,-1.9 3.29,-5.35 6.59,-5.34 2.14,-1.85 2.67,-5.25 5.77,-3.55 3.46,0.18 5.43,-5.35 9.01,-3.85 2.63,1.63 5.66,2.79 7.34,5.59 4.19,0.11 3.68,3.73 5.74,4.96 2.73,1.11 5.02,1.18 6.38,-0.53 4.29,1.38 2.24,3.74 1.44,6.9 0.09,2.97 -3.7,4.92 -1.66,7.97 3.1,1.31 6.4,1.2 9.63,1.4 2.17,1.58 6.83,1.03 3.79,-2.1 0.41,-2.74 -3.08,-3.35 -3.32,-6.04 -1.7,-2.67 -1.42,-5.47 -0.36,-8.32 1.68,-2.42 -2.83,-3.82 -0.4,-5.41 1.25,-1.53 0.43,-4.16 2.98,-4.7 1.62,-3.02 5.1,-1.45 2.35,1.02 -2.54,2.98 -0.81,4.5 0.57,6.3 1.41,3.55 -0.68,5.07 -1.53,7.31 -0.22,-0.81 3.62,-1.01 3.22,1.79 -3.15,1.64 -1.45,6.12 1.09,7.31 2.98,0.99 5.58,-1.8 6.98,2.14 1.5,3.75 4.92,0.81 7.41,-0.02 2.74,-1.21 3.47,-4.93 2.78,-7.7 -1.13,-1.58 -4.82,0.92 -7.13,0.4 -3.86,1.26 -4.9,-1.25 -5.28,-4.64 -1.68,-5.97 -2.14,-12.33 -5.16,-17.9 -0.04,-4.32 -2.71,-4.2 -6.07,-2.91 -0.73,0.16 -1.45,0.31 -2.18,0.47z m10.94,32.59c1.32,0.99 0.59,4.97 2.06,4.63 -0.48,-1.31 -0.36,-4.99 -2.06,-4.63z","name":"Maryland"},"va":{"path":"m792.88,242.88c-0.16,1.46 0.24,5.89 -2.4,4.29 -2.58,-0.67 -6.42,-3.2 -8.23,-2.73 0.7,3.72 -1.46,6.77 -2.99,9.94 -3.05,1.14 -2.29,5.83 -5.84,5.58 -1.62,1.74 -1.47,5.31 -2.45,7.73 -3.09,1.14 -5.37,-0.48 -7.28,-1.75 0.11,6.5 -3.72,11.95 -5.91,17.84 -1.69,1.73 1.19,3.8 -0.74,5.77 -1.35,3.56 -3.79,2.72 -6.19,4.19 -2.72,1.1 -4.9,0.5 -5.4,4.61 -2.07,1.14 -4.83,2.63 -6.91,0.47 -2.38,1.51 -5.02,3.21 -7.81,1.6 -2.69,-0.01 -3.9,-6.55 -6.07,-2.94 -3.27,4.09 -7.89,7.48 -10.21,12.09 0.43,3.25 -4.46,3.32 -6.42,5.15 -4.27,1.95 3.62,-0.11 5.16,-0.07 5.56,-0.79 11.14,-1.37 16.76,-1.36 1.95,-2.65 4.98,-1.81 7.77,-1.65 7.86,-0.32 15.65,-2.12 23.48,-2.99 12.85,-1.4 25.44,-4.27 38.04,-7.05 11.65,-2.52 23.3,-5.03 34.96,-7.55 -1.64,-2.66 -2.75,-6.67 -6.42,-4.14 -1.99,2.03 -6.61,-1.82 -2.7,-2.48 2.65,-1.62 -1.75,-4.07 -1.8,-5.97 -2.73,-0.62 -2.88,-5.12 0.54,-3.6 -0.17,-1.37 -1.24,-3.62 -1.62,-5.68 1.47,-3.51 -0.84,-4.97 -3.72,-5.16 0.31,-3.42 -2.9,-2.93 -5.22,-3.97 -3.33,0.21 -7.06,-0.25 -9.91,-1.66 -1.22,-2.41 -0.91,-5.12 1.25,-6.88 1.39,-2.83 -0.28,-5.7 -3.3,-6.27 -2.65,-0.83 -6.97,-0.29 -5.73,-4.3 -0.83,-0.3 -2.05,-1.06 -2.69,-1.06z m39.16,21.59c0.44,4.71 -3.15,8.7 -2.62,13.48 -0.34,4.11 2.64,5.72 3.48,0.92 1.71,-3.04 -0.23,-6.47 0.8,-9.73 0.4,-2.53 3.66,-3.88 3.52,-6.73 -1.73,0.69 -3.46,1.38 -5.19,2.06z","name":"Virginia"},"wv":{"path":"m739.75,223.25c-1.6,2.23 1.3,5.02 0.25,7.75 -0.18,4.04 -0.63,8.11 -0.84,12.13 -1.94,3.58 -4.43,7.35 -8.16,9.13 -3.15,-1.33 -3.92,3.25 -5.76,4.98 -1.56,2.28 2.64,4.93 -0.3,6.69 -2.57,3.58 -2.6,-4.8 -4.46,-0.71 -1.32,2.59 0.02,6.02 -1.35,8.33 -1.82,1.54 -0.53,5.19 -4.16,4.81 -2.23,0.13 -1.45,6.19 1,6.81 2.24,1.47 2.49,4.74 5.5,5.92 1.92,1.96 2.28,5.18 5.39,6.05 1.64,2.19 3.07,4.96 6.25,4.88 2.63,0.5 4.77,-3.86 7.22,-1.35 1.49,0.81 3.93,-0.57 4.58,-1.83 0.43,-4.57 3.42,-2.71 6.03,-4.39 2.39,-0.94 4.82,-0.98 5.62,-4.44 -1.26,-2.59 0.3,-5 1.56,-7.64 2.23,-4.81 4.72,-9.61 4.67,-15.05 2.65,-2.31 3.72,3.56 7.05,1.41 1.64,-1.77 1.12,-5.67 2.6,-7.59 3.47,0.39 2.97,-3.96 5.76,-5.21 2.29,-3.11 3.52,-6.8 3.06,-10.7 1.06,-1.29 5.1,1.62 7.23,2.15 3.3,3.35 4.34,-1.98 2.85,-4.05 -2,-2.28 -5.12,-3.7 -7.62,-4.75 -3.31,0.98 -5.44,5.47 -9.38,3.97 -1.86,-0.23 -2.38,3.98 -4.86,3.88 -2.89,0.71 -3.79,4.38 -6.03,6.22 -1.1,-0.06 -0.99,-4.82 -1.62,-6.64 -0.01,-3.93 -1.77,-5.3 -5.48,-3.82 -4.21,0.6 -8.41,1.23 -12.61,1.91 -1.17,-6.45 -2.29,-12.92 -3.44,-19.38l-0.35,0.35 -0.18,0.18z","name":"West Virginia"},"oh":{"path":"m729.5,197.78c-4.85,2.06 -7.38,6.9 -11.47,9.97 -4.08,0.86 -8.09,1.75 -11.72,3.88 -3.41,1.61 -4.39,-4.09 -7.67,-2.63 -3.13,1.35 -5.49,-1.1 -8.11,-2.41 -8.6,1.15 -17.15,2.64 -25.66,4.38 1.45,17.83 4.12,35.53 5.87,53.33 -0.69,3.82 4.06,2.26 6.23,1.48 2.74,0.41 4.83,2.16 5.48,4.94 1.26,2.48 5.82,-0.87 6.96,2.54 2.19,1.53 4.46,-2.33 7.03,-0.58 2.52,0.04 5.62,1.51 6.84,-1.56 1.49,-0.55 5.37,-3.85 5.41,-0.71 0.38,2.53 3.82,3.57 5.77,4.7 3.53,0.63 2.32,-3.91 4.21,-5.51 -0.11,-2.74 0.21,-5.73 1.39,-8.13 2.53,-2.81 3.8,4.53 4.98,0.39 -2.02,-2.27 -0.99,-5.41 0.93,-7.41 1.07,-4.06 4.05,-2.41 6.5,-4.39 2.93,-3.16 6.59,-6.57 5.97,-11.27 0.44,-4.71 1.18,-9.75 -0.53,-14.23 1.47,-2.48 2.58,-4.29 0.96,-7.33 -2.04,-7.53 -2.56,-15.37 -3.93,-23.04 -1.81,1.2 -3.63,2.4 -5.44,3.59z","name":"Ohio"},"in":{"path":"m658.66,210.31c-9.12,0.93 -18.35,1.98 -27.41,2.68 -2.6,0.39 -4.21,5.08 -6.89,2.98 -3.83,-2.84 -2.64,1.83 -2.41,4.45 1.1,14.81 2.73,29.61 3.44,44.42 -0.76,3.69 -1.39,7.89 1.36,10.91 0.1,2.99 1.4,6.28 -1.14,8.65 -1.83,2.73 -2.55,6.09 -5.02,8.42 0.09,2.08 -2.02,8.2 1.63,5.16 3.49,-0.6 7.25,-1.53 10.69,-1.34 2.36,4.08 2.67,-0.62 5.26,-1.29 2.03,-2.62 4.78,2.05 5.34,1.04 -1.26,-3.41 3.05,-3.77 5.1,-5.22 1.09,0.63 6.05,3.38 5.3,-0.64 -0.46,-2.47 2.02,-4.71 3.65,-6.34 3.11,-1.39 4.33,-3.9 4.16,-7.23 1.83,-1 4.93,-1.01 6.97,-2.47 4.23,-1.03 0.26,-3.48 1.22,-5.92 -0.83,-12.56 -2.8,-25.13 -4.08,-37.69 -0.85,-6.99 -1.44,-14.01 -2.14,-21.02 -1.68,0.16 -3.35,0.31 -5.03,0.47z","name":"Indiana"},"il":{"path":"m569.75,200.44c-0.29,2.58 4.2,1.83 3.73,5.07 2.07,2.09 5.71,4.21 4.38,7.77 -0.31,3.04 -2.61,5.44 -3.08,8.4 -2.38,2.71 -6.06,2.98 -9.31,3.94 -1.61,2.47 -1.05,4.91 1.28,6.47 0.63,3.25 -1.08,5.07 -2.74,7.38 1.41,3.63 -2.39,2.86 -3.56,5.02 1.08,3.12 -2.11,3.8 -2.53,6.64 0.19,3.95 1.33,8.21 3.28,11.58 3.68,3.96 7.38,7.9 12.21,10.47 -0.61,2.88 -0.64,6.7 3.43,5.71 2.05,0 6.18,0.38 6.26,2.68 -0.19,4.39 -3.6,8.24 -3.28,12.53 1.6,3.83 5.33,6.26 8.59,8.42 3.37,-0.29 5.36,1.27 5.9,4.6 1.01,2.64 3.84,4.73 1.73,7.67 0.55,1.74 2.58,7.7 4.31,4.05 1.21,-2.98 5.41,-4.78 8.07,-2.46 3.1,2.46 5.94,0.47 3.13,-2.8 -0.98,-3.39 2.61,-4.96 5.37,-5.33 1.01,-1.55 -1.6,-4.46 1.4,-5.97 1.8,-3.97 -0.56,-9.39 3.32,-12.49 1.43,-2.97 3.23,-5.97 4.4,-8.97 0.13,-3 -0.7,-5.7 -2.34,-8.16 -0.45,-4.59 1.31,-9.09 0.02,-13.65 -1.16,-15 -2.22,-30.05 -3.67,-45.01 -1.02,-3.1 -1.61,-6.46 -4.04,-8.77 -2.27,-1.83 -0.51,-5.93 -1.97,-7.32 -14.76,0.83 -29.52,1.67 -44.28,2.5z","name":"Illinois"},"ct":{"path":"m865.78,165.41c-6.91,1.54 -13.81,3.08 -20.72,4.63 2.17,6.2 2.74,12.83 2.44,19.34 -2.62,4.3 2.61,2.38 3.97,-0.21 2.09,-1.89 4.19,-3.71 5.99,-5.88 2.06,1.35 4.78,-1.86 7.44,-1.46 2.98,-0.68 5.69,-2.24 8.56,-3.26 -1.15,-4.67 -2.29,-9.33 -3.44,-14 -1.42,0.28 -2.83,0.56 -4.25,0.84z","name":"Connecticut"},"wi":{"path":"m559.53,104.97c-4.06,2.75 -8.71,4.92 -13.53,5.84 -2.88,-1.08 -5.54,-1.12 -5.57,2.68 -0.48,3.34 0.51,7.03 -0.47,10.17 -2.02,3.26 -6.91,4.03 -7.36,8.38 -2.63,2.78 2.21,3.06 2.23,5.53 1.79,2.9 -2.13,4.74 -1.33,7.65 0.29,2.93 -0.4,6.49 1.14,8.93 1.33,3.48 5.88,0.21 6.64,3.93 1.56,2.26 5.47,1.03 6.19,4.78 2.15,5.1 9.7,4.85 11.21,10.39 0.68,3.38 0.35,7.34 1.94,10.32 3.26,1.05 1.94,4.34 0.25,6.21 -0.79,3.96 2.53,8.34 6.75,8.25 2.28,1.6 4.86,1.65 7.83,1.19 13.03,-0.77 26.07,-1.53 39.1,-2.3 -0.02,-4.45 -1.98,-8.61 -1.86,-13.13 -1.7,-2.04 -0.86,-4.17 -0.04,-6.39 0.32,-2.84 3.07,-4.93 1.51,-7.87 -1.05,-2.94 -0.88,-6.21 1.73,-8.27 -0.2,-2.83 -0.5,-5.03 -0.16,-7.93 -1.14,-4.2 2.64,-7.5 3.69,-11.36 0.92,-1.13 3.15,-8.34 0.73,-4.93 -2.65,3.81 -4.99,8.01 -8.18,11.29 -0.86,2.06 -3.21,4.55 -5.21,4.5 -2.57,-1.26 0.28,-4.49 0.9,-6.41 0.47,-2.94 3.2,-4.25 4.09,-6.85 -3.31,-1.29 -2.77,-5.03 -3.54,-7.92 0.02,-3.09 -1.23,-5.08 -4.29,-5.57 -2.14,-3.67 -7.04,-2.78 -10.59,-4.12 -7.13,-1.87 -14.21,-4.39 -21.67,-4.99 -2.48,-0.54 -2.84,-5.51 -5.51,-4.73 -1.71,-1.54 -3.85,-0.7 -5.82,0.13 -2.8,-1.32 0.68,-4.59 1.5,-6.38 2.18,-1.34 -1.53,-2.14 -2.31,-1z","name":"Wisconsin"},"nc":{"path":"m830.06,295.97c-18.3,3.8 -36.53,8 -54.86,11.65 -12.74,1.51 -25.38,4.07 -38.18,4.94 -3.32,-0.82 -1.17,3.72 -2.5,5.53 -2.62,1.34 -3.49,4.59 -5.03,6.38 -3.24,-1.36 -5.07,1.46 -6.34,3.97 -1.09,-0.57 -2.96,0.03 -3.41,-1.41 -2.02,1.96 -4.37,3.73 -4.31,6.81 -3.66,1.1 -6.31,3.82 -9.28,5.96 -2.64,0.94 -5.76,2.16 -7.4,4.35 0.73,4.06 -2.98,3.3 -5.1,5.29 -1.98,4.69 2.74,2.66 5.58,2.5 6.41,-1.19 13.32,-0.49 19.18,-3.73 5.04,-1.9 9.41,-5.9 15.06,-5.67 6.5,-0.64 13.15,-0.6 19.62,-0.69 2.99,0.53 3.36,4.79 5.58,5.01 5.37,-0.81 10.87,-1.67 16.25,-1.79 5.38,1.36 9.61,5.45 14.52,7.93 3.59,2.64 6.93,5.66 10.43,8.44 3.15,-0.86 6.32,-1.58 9.59,-1.72 1.06,-4.55 2.04,-9.29 5.39,-12.78 4.2,-4.27 9.23,-8.29 15.33,-9.29 2.91,1.95 3.69,-2.9 5.27,-4.53 2.72,-5 -2.44,3.91 -2.46,-1.22 -3.87,0.7 -5.43,-0.26 -3.29,-4 2.77,-4.25 -2.73,-2.51 -2.12,-6.02 -1.42,-3.76 2.84,2.19 5.06,0.81 2.81,0.12 5.1,-1.87 5.59,-4.6 0.45,-2.9 4.59,-2.7 3.28,-6.48 -4.02,-2.43 4.25,-0.66 0.4,-3.93 -3.52,-3.44 -5.24,-8.33 -7.23,-12.76 -1.54,0.35 -3.08,0.71 -4.63,1.06z m17.13,23.72c1.55,2.61 -4.64,4.26 -0.52,2.69 1.38,-1.92 0.21,-5.22 0.24,-7.62 -0.74,-2.05 0.37,4.57 0.28,4.94z","name":"North Carolina"},"dc":{"path":"m803.44,248.16c2.67,3.43 3.85,-1.02 0.55,-0.75l-0.29,0.4 -0.25,0.35z","name":"District of Columbia"},"ma":{"path":"m877.59,144.41c-1.04,3.1 -4.01,3.5 -6.79,4.13 -8.62,2.32 -17.17,4.6 -25.96,6.12 -0.11,4.77 -1.17,9.59 -0.03,14.31 10.66,-2.6 21.54,-4.29 32,-7.44 3.57,2.81 6.01,6.73 8.28,10.59 2.13,-0.78 0.01,-5.15 3.77,-5.38 2.93,-3.28 1.83,4.78 3.17,2.62 2.13,-3.09 6.1,-3.9 9.41,-5.21 -0.11,-3.41 -2.21,-8.55 -6.38,-7.53 1.64,-0.1 4.89,0.87 4.91,3.82 0.85,2.24 -2.55,3.71 -4.35,4.24 -3.37,0.51 -4.99,-1.76 -6.32,-4.47 -1.38,-2.05 -3.58,-6.56 -6.3,-3.6 -1.89,-1.72 -3.13,-4.04 -1.33,-6.3 2.3,-2.34 1.23,-6.2 -1.28,-7.16 -0.93,0.41 -1.86,0.82 -2.79,1.24z M902.25,172.69c-1.6,2.76 3.05,-2.44 0.08,-0.32l-0.08,0.32z m-11.28,1.28c1.59,0.78 6.09,-2.26 1.78,-2.03 -0.59,0.68 -1.19,1.35 -1.78,2.03z","name":"Massachusetts"},"tn":{"path":"m730.41,314.34c-8.87,-0.11 -17.76,1.5 -26.57,2.73 -10.24,2.86 -20.99,2.66 -31.48,4.02 -16.34,1.45 -32.65,3.29 -48.96,4.95 -4.57,-1.71 -0.43,5.74 -5.06,4.14 -6.97,0.06 -13.87,1.23 -20.84,0.71 -0.95,4.26 -1.37,9.04 -3.6,12.76 -3.45,1.82 -4.01,5.81 -4.43,9.33 -3.1,1.1 -4.68,2.61 -2.53,5.59 -1.75,3.9 -0.58,5.24 3.51,3.98 33.91,-3.26 67.83,-6.53 101.74,-9.79 -0.23,-2.54 0.72,-5.31 3.53,-5.69 3.11,-0.4 0.99,-5.41 4.88,-5.81 2.77,-2.02 6.49,-2.19 8.62,-5.18 1.76,-2.26 6.31,-1.64 5.78,-5.38 1.19,-1.77 3.1,-3.84 5.03,-4.85 1.04,-0.39 0.28,1.78 1.72,1.19 2.38,0.56 2.2,-4.36 5.22,-3.86 3.3,1.27 2.68,-2.92 4.96,-4.18 2.05,-0.94 3.81,-6.68 0.92,-6.59 -0.81,0.64 -1.63,1.27 -2.44,1.91z","name":"Tennessee"},"ar":{"path":"m509.47,335.31c1.73,4.9 1.5,10.02 1.53,15.12 2.15,12.21 1.13,24.64 1.47,36.97 0.02,3.71 0.04,7.42 0.06,11.13 2.06,3.2 5.05,-1.45 7.69,1.47 1.53,1.76 -0.88,7.54 2.97,6.49 17.61,-0.36 35.23,-0.72 52.84,-1.08 1.97,-2.6 0.41,-5.9 -1.28,-8.22 3.3,-1.61 -1.59,-3.96 0.84,-6.53 0.75,-2.77 0.62,-6.34 3.78,-7.69 -1.88,-3.07 2.08,-5.24 3.19,-7.88 3.77,-0.38 1.58,-3.3 2.64,-5.42 1.12,-2.67 2.56,-5.28 4.85,-6.58 1.2,-4.12 0.21,-2.67 -1.53,-5.61 -2.76,-3.32 1.95,-3.96 2.36,-6.84 -0.05,-1.94 3.31,-6.69 1.22,-6.75 -2.65,0.85 -5.34,-0.18 -8.02,-0.33 -0.09,-3.38 4.4,-3.88 4.22,-7.3 0.58,-3.87 -3.58,-3.68 -6.34,-3.26 -24.17,0.77 -48.34,1.54 -72.5,2.31z","name":"Arkansas"},"mo":{"path":"m490.44,245.63c-2.39,-0.46 -0.19,4.05 0.07,5.6 2.45,3.32 4.51,7.86 8.55,9.22 2.81,-0.24 3.61,2.67 2.79,4.84 -3.22,1.64 -1.72,5.03 0.19,7.07 0.9,2.55 4.61,3.05 4.89,5.61 2.1,12.97 1.12,26.14 1.51,39.22 0,5.72 0.08,11.44 0.72,17.13 24.99,-0.94 49.98,-1.8 74.97,-2.51 3.02,-1.12 4.35,1.72 5.31,3.98 0.52,3.48 -2.86,4.46 -4.14,6.86 2.37,0.64 5.57,0.65 8.21,-0.08 1.46,-3.59 1.87,-7.45 2.38,-11.22 0.84,-2.83 5.27,-2.89 4.61,-6.03 1.37,-2.94 0.14,-4.6 -2.22,-4.28 -2.15,-1.81 -2.84,-5.03 -2.86,-7.6 1.45,-2.84 -2.08,-5.07 -2.44,-7.89 -0.66,-3.24 -5.34,-0.87 -6.89,-3.66 -2.64,-2.34 -6.24,-3.94 -6.91,-7.76 -0.94,-3.21 1.52,-6.47 2.17,-9.64 2.2,-3.53 -1.34,-4.7 -4.33,-4.5 -2.66,0.39 -5.34,-1.15 -4.81,-4.1 0.86,-4.07 -4.71,-4.05 -6.43,-6.93 -2.7,-3.4 -6.72,-6.05 -7.25,-10.67 -1.1,-3.16 -2.12,-6.86 -0.62,-10.06 -2.3,-1.34 -2.28,-5.77 -5.37,-4.89 -20.69,0.77 -41.38,1.53 -62.06,2.3z","name":"Missouri"},"ga":{"path":"m672.78,356c-0.74,7.06 4.28,12.69 5.29,19.4 1.36,6.57 3.44,12.96 5.03,19.44 0.94,4.88 2.17,9.95 5.53,13.75 -0.85,3.5 3.37,3.17 2.59,6.44 -1.89,4.45 -3.57,9.65 -0.84,14.13 0.05,2.63 0.94,5.4 -0.38,7.88 2.95,0.94 1.45,4.01 3.07,6.01 1.35,2.67 3.68,4.75 6.83,4 12.35,-0.01 24.69,-1.31 37.03,-1.92 3.32,-0.58 6.67,-0.74 10.04,-0.59 -0.78,4.24 3.04,4.15 2.09,-0.09 -0.9,-2.14 -2.94,-6.23 0.59,-6.62 3.2,0.5 6.42,0.91 9.66,1.02 -0.84,-3.8 -0.8,-7.57 0.5,-11.27 0.2,-3.54 2.62,-6.73 2.21,-10.21 -0.72,-2.93 3.26,-5.26 2.85,-8.05 -2.19,1.37 -5.29,-0.71 -5.34,-3.19 -0.56,-3.12 -2.71,-5.83 -6.03,-6.06 -1.33,-3.9 -2.62,-8.17 -4.99,-11.43 -3.12,-1.07 -6.13,-2.99 -7.17,-6.29 -2.06,-2.33 -5.23,-3.21 -6.66,-6.16 -2.08,-2.2 -5.24,-2.83 -7.66,-4.19 -0.76,-2.53 -3.21,-4.09 -3.94,-6.67 -1.36,-2.63 -2.97,-4.65 -6.15,-3.77 -2.33,-1.57 -7.15,-3.38 -5.31,-6.97 2.02,-2.01 3.76,-4.11 -0.8,-3.11 -12.68,1.51 -25.37,3.01 -38.05,4.52z","name":"Georgia"},"sc":{"path":"m737.03,343.19c-4.26,0.4 -8.64,0.43 -12.24,3.07 -3.2,1.75 -6.48,3.19 -9.88,4.49 2.21,3.31 -4.28,2.74 -2.34,6.44 2.27,2.24 5.2,4.13 8.5,3.28 2.53,3.15 3.83,6.94 6.53,9.88 0.91,2.76 5.13,2.06 6.85,4.46 2.18,1.38 2.96,4.25 5.62,5.01 2.99,1.95 3.36,6.38 7.26,7.24 3.61,0.62 3.77,4.77 5.34,7.38 0.38,3.35 2.02,4.84 4.79,5.96 3.36,1.79 1.76,7.23 5.67,8.16 3.63,-1.38 5.8,-4.63 8.38,-7.34 -2.35,-3.93 0.29,-3.32 3.01,-4.44 1.95,-2.4 5.02,-3.3 6.25,-6.28 2.17,-2 3.86,-4.52 5.4,-6.9 2.81,-0.17 3.42,-3.58 4.92,-5.03 -0.28,-4.13 1.3,-7.89 3.12,-11.47 1.03,-2.11 7.03,-4.5 3.47,-6.34 -5.97,-5.35 -12.78,-9.5 -19.71,-13.47 -4.45,-2.68 -9.74,-0.07 -14.57,-0.06 -2.57,-0.23 -6.63,2.48 -7.32,-1.28 -1.66,-4.5 -6.93,-2.82 -10.63,-2.96 -2.8,0.07 -5.61,0.14 -8.41,0.21z","name":"South Carolina"},"ky":{"path":"m675,267.5c-2.76,-0.77 -6,1.11 -3.38,3.78 1.52,3.15 -3.12,4.12 -5.19,5.27 -2.94,0.53 -4.71,1.29 -4.3,4.82 -1.15,2.66 -5.3,3.24 -6.32,6.32 -2.16,1.4 0.74,6.22 -2.84,5.92 -3.06,0.61 -4.36,-2.79 -7.09,0.11 -2.26,0.51 -1.1,6.98 -3.85,3.1 -2.27,-2.54 -5.57,0.14 -6.16,2.81 -1.91,1.07 -3.4,-3.73 -6.02,-1.91 -3.32,0.61 -7.48,0.47 -9.92,2.91 0.08,2.65 -3.39,3.78 -1.7,6.05 2.34,2.66 -2.23,2.68 -3.86,3.3 -3.57,1.35 -0.68,4.35 -0.76,6.72 0.33,3.45 -3.76,1.44 -5.49,0.72 -2.5,-2.29 -6.26,-0.38 -7.13,2.53 2.86,2.28 -0.04,4.76 0.41,7.66 -3.47,2.04 -3.19,2.73 0.94,2.35 5.84,0.01 11.64,-0.95 17.5,-0.76 -0.7,-3.74 0.98,-4.99 4.56,-4.19 24.33,-3.01 48.82,-4.7 73.16,-7.43 4.3,-0.7 8.2,-2.38 11.75,-4.88 3.3,-0.8 4.04,-2.71 5.12,-5.35 3.46,-4.09 7.13,-8.06 10.79,-12 -3.27,-1.24 -3.03,-5.51 -6.21,-6.95 -2.6,-1.25 -2.07,-4.66 -5.16,-5.36 -2.38,-2.64 0.8,-7.28 -3.02,-8.87 -3.02,-0.01 -2.37,-4.65 -4.57,-3.51 -2.95,0.61 -3.67,4.78 -7.02,3.29 -2.69,-0.23 -5.51,-1.19 -7.82,0.71 -3,0.83 -3.99,-3.61 -7.44,-2.06 -3.51,0.82 -2.17,-5.19 -5.65,-5.26C677.17,266.43 676.21,267.17 675,267.5z","name":"Kentucky"},"al":{"path":"m628.53,359.63c-0.2,14.37 0.12,28.75 -0.54,43.12 -0.04,9.01 -0.88,18.1 -0.07,27.07 1.55,10 2.94,20.01 3.85,30.09 3.07,1.09 3.69,-1.92 4.4,-4.18 -0.3,-3.89 4.27,-3.02 4.89,-0.04 0.72,2.06 4.08,5.27 0.77,6.65 -0.15,0.92 6.17,-0.9 5.88,-2.89 -0.44,-3.01 0.64,-6.86 -2.87,-8.19 -2.29,-0.88 -3.03,-5.59 -0.32,-5.67 14.08,-1.86 28.21,-3.59 42.35,-4.8 2.7,1.07 6.76,-0.25 2.97,-2.5 -1.8,-2 0.95,-5.03 -0.27,-7.65 -0.31,-3.1 -2.63,-5.9 -1.31,-9.15 0.01,-2.92 2.49,-5.36 1.93,-8.3 -3.52,-0.45 -1.34,-5.11 -4.26,-6.7 -3.48,-5.82 -3.36,-13.04 -5.96,-19.21 -2.02,-8.09 -3.34,-16.41 -7.25,-23.88 -0.51,-2.39 -1.08,-4.85 -0.72,-7.31 -14.49,1.18 -28.98,2.35 -43.47,3.53z","name":"Alabama"},"la":{"path":"m521.09,407.28c0.1,7.53 -0.24,15.32 1.67,22.61 2.08,2.49 2.82,5.51 3.15,8.67 1.87,2.78 5.27,4.95 4.59,8.72 1.61,2.18 -0.21,5.69 0.08,8.38 0.42,2.64 -4.36,4.89 -2.01,7.12 1.07,2.26 -0.92,5.31 -0.53,7.95 0.38,3.22 -2.37,5.7 -1.55,8.93 5.18,-2.4 10.98,-0.86 16.47,-1.09 5.72,1.7 11.56,4.87 17.56,4.26 2.93,-2.25 5.94,0.36 8.98,0.93 1.08,-3.4 -4.22,-0.81 -5.8,-2.2 -1.91,-0.36 -2.89,-2.3 -1.17,-3.4 2.08,-1.1 4.08,-1.09 5.66,0.04 2.15,-1.39 5.6,-0.24 6.26,2.38 -0.33,3.62 3.42,1.7 5.28,3.15 3.83,1.5 -1.41,4.07 0.83,5.37 2.88,0.97 5.73,2.94 8.62,3.29 3.51,-0.05 2.81,-4.53 6.47,-4.17 1.83,-2.9 4.44,-0.25 4.39,2.31 1.53,1.64 4,-3.68 1.98,-3.66 0.22,-3.37 2.17,-3.21 4.31,-5.41 1.59,0.95 0.91,2.82 1.41,4.16 3.33,0.39 7.44,1.09 9.34,4.06 2.79,0.08 5.17,1.1 5.56,-2.56 -2.68,-0.27 -4.15,-3.88 -7.35,-3.19 -2.31,0.06 -6.3,-1.62 -6.15,-3.77 1.62,-3.62 2.23,-1.74 2.03,-4.38 2.88,1.09 5.69,-2.27 3.22,-4.47 0.46,-4.62 -3.73,-0.15 -3.34,2.19 -1.36,1.21 -6.35,-0.96 -4.6,-3.27 1.71,-1.84 4.2,-4.5 2.19,-6.95 -0.13,-3.26 -2.69,-5.21 -4.47,-7.38 0.52,-2.7 2.26,-7.35 -2.36,-5.46 -10.43,1.28 -20.97,0.69 -31.45,1.12 -1.61,-3.72 -0.02,-7.76 0.16,-11.59 2.66,-4.86 5.46,-9.65 8.25,-14.44 -2.04,-2.82 3.52,-4.45 -0.74,-6.48 -0.53,-2.15 -1.29,-4.65 -2.32,-6.83 -0.08,-3.1 0.9,-7.3 -3.62,-5.79 -17,0.28 -34,0.57 -51,0.85z","name":"Louisiana"},"ms":{"path":"m591.03,363.5c-1.45,1.74 -4.03,3.15 -4.63,6.03 -1.4,2.22 1.43,5.74 -2.69,6.07 -1.48,1.97 -4.77,4.42 -3.4,7.17 -1.36,1.83 -3.59,3.95 -3.48,7.01 -2.16,2.66 1.55,5.28 -0.27,7.12 -0.45,1.84 2.25,4.42 1.35,7.03 -1.92,2.71 -1.63,6.55 -0.61,9.53 1.6,2.4 0.78,5.54 3.73,6.94 -0.95,2.53 -1.41,3.75 -1.87,6.31 -2.55,4.96 -6.07,9.62 -7.89,14.84 0.01,2.98 -1.44,6.14 -0.14,8.97 11.4,-0.36 22.87,0.25 34.19,-1.5 2.75,2.21 -2.19,6.39 1.33,8.15 2.82,1.62 2.28,5.18 3.89,7.63 2.07,-1.86 2.51,-6.19 5.82,-4.07 3.21,-0.67 6.85,-3.02 9.89,-0.64 3.62,0.73 6.01,-0.27 4.42,-4.26 -0.81,-10.1 -2.99,-20.07 -3.84,-30.15 0.14,-21.99 1.48,-43.98 0.64,-65.97 -12.15,1.26 -24.29,2.52 -36.44,3.78z","name":"Mississippi"},"ia":{"path":"m476.25,181.16c-3.42,-0.05 -2.16,5.68 0.72,6.29 0.54,2.07 -0.75,5.06 -1.41,7.35 -2.13,2.82 -0.93,5.45 1.04,7.92 1.22,4.34 2.24,8.85 4.05,13.06 0.6,3.22 1.29,6.38 3.41,9 0.02,3.49 1.27,6.69 2.3,9.91 -0.04,3.54 0.03,7.05 2.08,10.09 22.2,-1.02 44.44,-1.75 66.66,-2.63 0.77,1.43 3.25,7.11 4.37,4.25 -0.96,-2.5 1.19,-4.52 3.57,-4.72 -0.88,-2.62 1.19,-4.59 2.5,-6.28 1.27,-2.92 -1.39,-4.02 -2.41,-6.31 0.69,-2.9 1.79,-5.3 5.13,-5.46 2.88,-0.83 6.57,-1.81 6.65,-5.41 1.76,-3.04 3.73,-8.01 -0.26,-10.18 -2.74,-1.06 -1.75,-5.27 -5.21,-5.14 -0.64,-1.97 -0.85,-4.76 -4.19,-4.21 -2.75,-0.8 -4.55,-3.47 -5.37,-6 -1.36,-2.89 2.01,-4.72 1.65,-7.28 -3.82,-0.4 -1.19,-6.5 -5.03,-5.47 -26.75,0.41 -53.5,0.81 -80.25,1.22z","name":"Iowa"},"mn":{"path":"m497.03,53.84c-0.69,2.52 0.93,7.42 -1.31,8.34 -9.65,-0.01 -19.29,-0.02 -28.94,-0.03 1.16,2.87 2.18,5.76 0.97,8.81 0.05,5.74 -0.79,11.86 2.51,16.95 2.04,3.78 0.64,8.47 1.5,12.6 0.82,6.84 1.76,13.67 3.55,20.32 0.05,3.83 0.88,7.8 0.03,11.53 -1.57,1.74 -4.91,3.29 -2.22,5.78 1.89,1.83 5.05,2.94 4.58,6.1 0.28,11.9 0.25,23.83 0.42,35.75 26.72,-0.38 53.44,-0.75 80.16,-1.13 -0.15,-3.62 -0.46,-7.93 -4.36,-9.47 -3.02,-1.66 -6.24,-3.1 -7.63,-6.5 -0.72,-3.61 -5.32,-1.16 -6.05,-4.61 -1.56,-2.09 -5.29,-0.37 -6.57,-3.78 -1.66,-2.1 -0.52,-5.5 -1.1,-8.1 -1.34,-2.93 1.65,-4.99 1.47,-7.54 -0.2,-3.22 -5.36,-3.85 -2.24,-7.43 0.41,-4.47 5.39,-5.33 7.61,-8.59 0.24,-3.87 -0.73,-8.14 0.52,-11.77 1.76,-3.14 5.17,-5.1 8.28,-6.26 1.92,-2.08 3.66,-4.57 6.13,-5.81 2.54,-4.97 6.04,-9.99 11.81,-11.4 4.55,-1.98 9.12,-3.92 13.6,-6.04 0.73,-3.15 -3.7,-0.18 -5.06,0.03 -0.82,-3.87 -4.2,-3.09 -7.28,-2.87 -2.25,-0.87 -5.34,2.83 -6,-0.66 -1.13,-3.5 -4.51,0.72 -5.88,2.13 -2.33,1.63 -6.22,1.16 -8.06,-0.56 0.94,-3.05 -4.61,-0.39 -4.53,-3.96 -0.16,-2.3 -3.48,1.3 -5.77,-1.2 -3.04,-0.91 -5.5,-3.22 -8.29,-4.38 -2.49,0.4 -5.86,-2.38 -6.7,1.5 -1.17,0.79 -7.15,1.83 -5.93,-1.54 -2.99,0.03 -6.03,-0.05 -7.53,-1.75 -2.6,0.59 -5.72,-0.41 -5.9,-3.43 -0.88,-3.28 -1.44,-6.61 -1.88,-9.98 -1.23,-0.6 -2.54,-1.02 -3.91,-1.06z","name":"Minnesota"},"ok":{"path":"m363.31,330.03c17.51,1.12 35.04,1.73 52.56,2.47 -1.37,13.62 -2.89,27.23 -2.83,40.93 -0.92,3.93 3.48,5.78 6.14,7.66 0.56,-5.56 2.96,1.46 4.25,-1.31 0.93,-1.5 5.57,1.68 3.39,4.42 1.59,0.66 4.76,0.51 6.73,1.82 2.79,-0.99 5.16,3.32 7.03,1.26 1.82,-1.93 5.59,-0.31 6.5,2.02 2.44,0.79 1.71,5.84 4.76,3.05 1.39,-1.65 6.25,-1.17 6.69,1.21 1.28,1.5 5.69,3.72 7.39,1.92 0.33,-2.75 3.38,-5.95 4.59,-1.83 3.59,0.38 6.96,2 10.46,3 2.28,-1.86 2.44,-4.68 6.53,-3.41 2.53,1.92 3.8,-1.41 6.31,-1.16 0.85,2.42 5.2,2.41 6.19,-0.5 3.2,-0.2 3.66,3.71 6.55,4.35 1.86,0.4 6.31,3.63 5.36,0.18 -0.32,-12.27 0.1,-24.59 -0.7,-36.82 -1.15,-6.03 -1.01,-12.18 -1.43,-18.25 -1.32,-5.29 -2.05,-10.73 -2.07,-16.18 -20.01,0.66 -40.04,-0.04 -60.06,-0.22 -27.85,-1.32 -55.73,-2.3 -83.53,-4.56 -0.27,3.31 -0.54,6.63 -0.81,9.94z","name":"Oklahoma"},"tx":{"path":"m359.47,330.97c2.34,-0.11 -0.86,-1.81 0,0z m0.72,18.31c-1.64,20.84 -2.52,41.75 -4.68,62.55 -0.51,4.33 -0.99,8.66 -1.51,12.98 -17.84,-0.87 -35.67,-1.93 -53.42,-3.89 -4.16,-0.41 -8.32,-0.76 -12.48,-1.11 -0.67,3.74 2.27,3.68 4.04,6.12 2.26,1.83 1.13,6.03 4.65,6.5 3.52,0.48 2.9,4.6 5.45,6.34 3.38,3.15 5.5,7.91 10.27,9.06 1.91,1.27 4,3.22 4.53,5.46 0.69,3.96 4.53,7.02 3.47,11.33 -0.88,5.15 2.22,9.63 5.93,12.88 2.18,2.95 5.14,4.76 8.63,5.78 1.88,1.95 3.01,3.88 5.72,4.88 2.59,0.18 5.38,4.34 7.35,1.18 2.59,-3.14 5.48,-6.41 6.05,-10.55 1.26,-2.82 3.58,-4.32 6.5,-5.06 2.72,-1.59 5.32,-2.13 7.47,0.62 4.91,0.57 10.2,0.53 14.79,2.22 2.83,1.43 2.56,4.53 5.17,6.33 1.73,2.05 4.83,3.37 5.81,5.82 1.37,2.07 2.66,4.26 2.69,7.03 1.62,4.34 4.17,8.51 5.31,12.94 -0.24,2.77 4.65,2.49 4.95,5.51 2.24,4.08 4.37,9.17 9.21,10.49 3.28,2 0.03,5.04 0.91,7.5 3.28,0.87 -0.01,4.68 0.94,6.67 2.53,1.36 4.37,3.2 4.22,6.44 0.39,3.34 2.13,6.83 5.69,7.54 3.01,1.93 6.69,2.13 9.87,3.4 2.28,1.79 5.15,4.09 8.16,2.83 3.46,0.46 6.77,1.29 9.37,3.75 1.43,2.54 6.51,-0.91 4.31,-2.89 -2.04,-3.39 -1.3,-7.79 -2.83,-11.46 -0.63,-3.07 -2.39,-5.95 -0.99,-9.1 1.17,-4.9 2.87,-9.76 4.04,-14.71 -3.37,-1.01 -2.07,-5.47 1.21,-4.71 3.99,0.42 3.65,-6.43 7.81,-6.05 5.25,-1.56 9.07,-6 14.16,-8.05 6.91,-2.81 13.62,-6.46 18.72,-12.05 2.58,-2.98 7.09,-3.95 8.69,-7.75 5,-2.22 9.8,-4.93 15.22,-6 -0.97,-2.64 0.52,-4.86 1.32,-7.22 0.39,-2.99 0.19,-6.07 1.18,-8.94 -3.15,-2.27 0.38,-4.91 1.38,-7.41 -0.2,-2.8 1.42,-6.25 0.09,-8.66 0.3,-2.93 -1.49,-5.14 -3.35,-7.29 -2.46,-2.64 -1.11,-6.91 -3.87,-9.52 -2.53,-4.57 -1.59,-10.19 -2.25,-15.22 0.02,-5 0.19,-10 -0.5,-14.97 -2.63,-2.31 -5.52,2.33 -7.52,-1.37 -3.1,-2.07 -7.66,-2.1 -9.73,-5.68 -2.31,-2.48 -3.82,2.84 -7.18,0.96 -1.91,-2.73 -3.59,0.03 -5.98,0.18 -2.27,-1.15 -6.07,-1.48 -6.09,1.76 -2.76,2.37 -5.95,-0.93 -8.94,-1.28 -3,1.38 -5.23,-3.83 -6.3,-1.87 -0.15,2.66 -2.52,5.1 -5.13,3.34 -3.23,-0.15 -4.91,-2.49 -6.57,-3.89 -2.95,-1.74 -4.3,2.32 -6.94,0.88 -1.48,-1.39 -1.87,-3.6 -3.92,-5.65 -3.06,-2.83 -5.03,3.17 -7.13,0.23 -2.05,-2.11 -5.57,-0.83 -7.94,-2.69 -3.56,0.59 -5.54,-0.24 -4.13,-4.11 -1.89,-1.85 -2.28,1.21 -4.77,-0.14 -0.59,-0.41 -3.45,1.78 -5,-1.11 -1.9,-1.9 -5.13,-3.22 -4.18,-6.45 0.03,-10.58 0.25,-21.15 1.66,-31.65 0.3,-2.99 0.6,-5.98 0.89,-8.98 -17.65,-0.63 -35.3,-1.27 -52.94,-2.22 -0.52,6.07 -1.04,12.15 -1.56,18.22z M466.53,518.63c-5.2,7.17 2.93,-3.27 0,0z","name":"Texas"},"nm":{"path":"m242.72,428.78c4.82,0.63 9.65,1.25 14.47,1.88 0.43,-3.33 0.85,-6.67 1.28,-10 9.7,0.89 19.4,1.86 29.09,2.78 -0.9,-3.14 -1.39,-5.98 2.84,-4.5 18.29,1.28 36.48,3.79 54.81,4.49 2.45,-0.6 7.66,2.13 7.99,-1.01 3.06,-22.93 3.75,-46.09 5.59,-69.14 0.54,-7.79 1.39,-15.56 2.02,-23.34 3.21,0.65 1.17,-4.81 2.07,-6.86 1.79,-4.38 -2.87,-3.37 -5.73,-3.85 -32.35,-3.3 -64.71,-6.59 -97.06,-9.89 -5.79,39.81 -11.58,79.63 -17.38,119.44z","name":"New Mexico"},"ks":{"path":"m380.53,320.34c25.06,1.17 50.11,2.71 75.19,3.35 17.22,0.07 34.44,0.63 51.66,0.18 -0.25,-12.69 0.23,-25.42 -0.47,-38.08 -0.61,-2.83 -0.17,-6.27 -1.38,-8.74 -3.04,-2.03 -6.02,-5.19 -6.68,-8.77 -0.43,-2.51 4.3,-4.59 1.29,-6.64 -3.02,0.54 -4.05,-3.34 -7.17,-2.43 -36.21,-0.82 -72.43,-1.33 -108.63,-2.5 -1.27,21.21 -2.54,42.42 -3.81,63.63z","name":"Kansas"},"ne":{"path":"m353.38,230.59c10.76,0.96 21.27,2.72 32.03,3.66 -0.37,7.11 -0.71,14.23 -1.06,21.34 36.49,1.29 73,1.84 109.5,2.56 -0.31,-1.17 -3.13,-4.05 -4.03,-6.15 -1.99,-2.11 -0.36,-5.13 -2.45,-7.34 -2.42,-3.19 -1.66,-7.14 -2.2,-10.79 -1.66,-2.86 -1.45,-6.25 -2.29,-9.26 -2.94,-2.85 -2.34,-7.01 -3.95,-10.49 -1.13,-3.1 -2.18,-6.19 -2.62,-9.47 -3.51,1.32 -2.89,-3.07 -4.85,-4.29 -2.4,-1.68 -5.57,-1.85 -7.72,-3.93 -3.79,0.07 -7.65,1.04 -11.13,1.94 -2.52,-2.2 -6.03,-3.13 -7.91,-6.06 -13.61,0.96 -27.23,-0.49 -40.83,-1.11 -15.5,-1.05 -31.02,-1.79 -46.51,-2.86 -1.67,14.08 -2.83,28.17 -4,42.25z","name":"Nebraska"},"sd":{"path":"m357.44,187.41c25.68,1.58 51.37,3.15 77.06,4.26 3.58,-0.01 7.34,-0.51 10.81,-0.23 1.8,2.9 5.24,3.85 7.69,6 3.55,-1.45 7.52,-1.89 11.25,-1.91 2.45,2.67 7.26,2.29 9.15,5.33 1.32,4.76 3.27,1.86 0.18,-1.15 -1.53,-2.17 1.46,-4.6 1.56,-6.99 1.2,-2.87 1.38,-5.28 -1.58,-6.75 -0.5,-2.04 -0.73,-6.65 2.41,-5.84 2.62,-0.28 0.39,-5.28 1.06,-7.5 -0.32,-9.7 0.19,-19.47 -0.64,-29.13 -0.24,-3.58 -6.26,-4.19 -5.42,-8.4 1.09,-1.22 5.81,-4.38 2.75,-5.4 -27.23,-0.89 -54.5,-1.01 -81.67,-3.15 -9.79,-0.62 -19.57,-1.24 -29.36,-1.86 -1.75,20.91 -3.5,41.81 -5.25,62.72z","name":"South Dakota"},"nd":{"path":"m362.88,123.72c26.46,1.49 52.89,3.7 79.4,3.91 10.84,0.26 21.67,0.52 32.51,0.78 0.01,-5.53 -1.38,-10.82 -2.5,-16.17 -1.27,-7.42 -2.05,-14.89 -2.13,-22.42 -2.61,-4.16 -4.11,-9 -3.48,-13.94 -0.44,-3.25 0.67,-6.57 0.3,-9.7 -0.15,-4.01 -2.83,-4.61 -6.31,-4.12 -25.15,-0.47 -50.33,-1.05 -75.41,-3.06 -5.17,-0.49 -10.33,-0.98 -15.5,-1.47 -2.29,22.06 -4.58,44.13 -6.88,66.19z","name":"North Dakota"},"wy":{"path":"m240.16,217.84c37.4,4.49 74.29,8.23 111.69,12.72 2.5,-29.2 5.5,-57.65 8,-86.84 -35.26,-4.45 -70.52,-8.9 -105.78,-13.34 -4.64,29.16 -9.27,58.31 -13.91,87.47z","name":"Wyoming"},"mt":{"path":"m192.59,52.19c0.84,2.76 3.25,5.4 3.2,8.23 -1.5,2.79 -1,5.49 0.52,8.15 3.4,0.39 4.18,3.44 5.26,6.16 1.43,3.34 2.55,6.88 5.37,9.34 0.88,2.21 5.27,1.18 4.34,4.72 -2.23,6.21 -5.45,12.23 -7.06,18.56 0.02,3.34 3.4,5.25 5.73,2.22 1.61,-2.43 5.63,-3.04 4.69,0.97 -0.5,5.3 1.81,10.35 2.59,15.53 1.9,2 5.27,3.44 5.68,6.31 -0.71,1.91 -0.39,8.78 2.32,5.14 1.85,-1.89 4.93,-0.29 6.85,0.86 3.28,-1.63 7.26,-1.21 10.34,0.69 3.69,0.41 1.52,-5 5.95,-4.08 2.71,-0.42 2.01,6.69 3.21,4.1 0.56,-3.26 1.09,-6.54 1.68,-9.8 35.57,4.49 71.15,8.96 106.72,13.44 2.9,-28.44 5.79,-56.88 8.69,-85.31 -28.84,-2.29 -57.55,-5.91 -86.19,-9.99 -26.71,-4.12 -53.36,-8.71 -79.73,-14.68 -3.05,-0.61 -6.99,-2.59 -6.53,2.19 -1.21,5.75 -2.42,11.51 -3.62,17.26z","name":"Montana"},"co":{"path":"m260.17,308.53c39.89,4.09 79.51,8.26 119.39,11.91 1.61,-28.46 3.23,-56.92 4.84,-85.38 -37.47,-4.17 -74.94,-8.33 -112.41,-12.5 -4.03,28.98 -7.8,56.99 -11.83,85.97z","name":"Colorado"},"id":{"path":"m169.84,91.72c0.52,3.07 2.27,5.25 4.94,6.78 0.4,3.02 -0.61,5.46 -3.03,7.31 -2.3,2.7 -4.38,5.97 -6.09,8.83 0.39,2.93 -2.57,3.54 -4.23,4.8 -1.77,2.31 -4.28,4.3 -3.93,7.5 -0.64,2.43 4.69,0.57 4.09,4.34 -5.19,11.17 -6.78,23.51 -10.13,35.32 -0.79,3.16 -1.22,4.91 -2.01,8.08 56.92,12.84 62.26,13.45 93.58,19.41 2.75,-17.6 5.5,-35.21 8.25,-52.81 -2.66,-0.84 -0.58,-6.52 -4.23,-4.97 -1.24,1.7 -1.62,4.95 -5.17,3.47 -3.11,-1.99 -6.81,-1.34 -10.13,-0.56 -2.53,-1.76 -5.91,-2.01 -7.69,0.88 -1.75,-0.05 -3.29,-3.39 -2.79,-5.36 1.91,-3.98 -2.85,-5.89 -5.05,-8.27 -0.98,-5.88 -3.48,-11.64 -2.5,-17.69 -1.86,-0.01 -4.25,2.69 -6.47,3.63 -2.21,0.18 -4.52,-3.09 -4.1,-5.31 1.19,-5.37 4.07,-10.37 5.88,-15.6 1.95,-2.64 1.12,-5.57 -2.41,-5.62 -1.55,-3.37 -4.92,-5.66 -5.61,-9.53 -1.31,-2.63 -1.42,-6.47 -5.06,-6.76 -0.99,-1.85 -3.18,-4.47 -1.91,-6.73 2.09,-2.98 -0.34,-5.7 -1.53,-8.5 -2.13,-3.05 0.55,-6.68 0.67,-10.01 0.9,-4.35 1.8,-8.69 2.69,-13.04 -4.18,-0.78 -8.35,-1.56 -12.53,-2.34 -4.5,20.92 -9,41.83 -13.5,62.75z","name":"Idaho"},"ut":{"path":"m176.34,297.78c27.57,3.92 55.15,7.83 82.72,11.75 4.04,-29.08 8.08,-58.17 12.13,-87.25 -10.83,-1.14 -21.65,-2.33 -32.47,-3.59 1.43,-7.93 2.82,-15.85 3.84,-23.84 -15.27,-2.85 -30.54,-5.71 -45.81,-8.56 -6.8,37.17 -13.6,74.33 -20.41,111.5z","name":"Utah"},"az":{"path":"m173.19,314.66c-2.49,-0.06 -3.05,4.43 -6.38,2.94 -0.74,-2.87 -3.59,-2.82 -5.59,-4.22 -3.74,0.74 -2.37,4.58 -2.68,7.41 -0.52,5.04 -0.42,10.21 -0.89,15.22 -2.19,2.33 -2.44,5.78 -0.24,8.19 2.32,2.62 0.58,7.52 4.09,9.09 0.98,3.59 -2.89,4.83 -5.41,6.09 -3.29,2.46 -3.28,6.86 -3.88,10.47 -1.25,2.44 -4.81,2.39 -4.92,4.97 0.47,2.18 6.18,0.38 3.42,4.54 -0.65,2.75 -3.14,3.45 -5.62,3.78 -3.6,1.45 -2.69,4.7 0.77,5.44 14.69,7.84 28.52,17.13 43.01,25.32 5.79,3.19 11.27,7.21 17.27,9.88 11.71,2.83 23.75,3.45 35.68,4.87 5.71,-39.38 11.42,-78.75 17.13,-118.13 -27.58,-3.93 -55.17,-7.85 -82.75,-11.78 -1,5.31 -2,10.63 -3,15.94z","name":"Arizona"},"nv":{"path":"m84.84,232.41c22.96,34.61 45.92,69.23 68.88,103.84 3.66,2.65 3.19,-3.47 3.27,-5.71 0.37,-5.43 0.36,-11.24 1.08,-16.44 2.05,-2.03 4.26,-2 6.08,-0.39 2.62,-0.16 3.86,5.9 6.03,1.27 2.74,-0.82 2.66,-3.64 3.13,-6.41 7.5,-40.87 15,-81.75 22.51,-122.62 -30.72,-6.81 -61.44,-13.63 -92.16,-20.44 -6.27,22.3 -12.54,44.6 -18.81,66.91z","name":"Nevada"},"or":{"path":"M67.16,62.81C64.24,70.42 62.73,78.57 58.5,85.63c-2.86,8.53 -5.96,16.93 -10.17,24.89 -3.06,6.61 -8,12.31 -11.32,18.7 -1.03,6.5 -0.64,13.05 -0.36,19.6 37.23,8.7 74.46,16.69 111.69,25.39 3.45,-13.15 6.51,-25.75 10.19,-38.81 1.2,-2.48 3.15,-6.06 -1.1,-5.42 -2.58,-1.78 -0.23,-4.45 -0.38,-6.91 2.3,-2.82 4.36,-5.82 7.47,-7.75 1.75,-5.08 5.43,-9.19 9.03,-13.06 1.66,-3.48 -2.46,-3.92 -3.39,-6.47 -0.25,-3.79 -3.56,-4.26 -6.62,-4.99 -7.63,-2.2 -15.38,-4.2 -23.21,-5.54 -4.9,0.03 -9.79,0.06 -14.69,0.09 -0.95,-2.84 -4.67,1.86 -7.11,0.5 -2.61,0.82 -4.42,-2.63 -6.57,-1.28 -2.61,-0.06 -5.23,0.11 -7.15,-1.87 -3.09,-1.53 -6.33,-1.81 -9.5,-3.1 -1.87,3.03 -5.69,1.22 -8.53,1.31 -1.65,-1.64 -5.79,-3.02 -6.03,-4.81 1.1,-2.44 0.78,-5.93 0.53,-8.59 -0.42,-3.92 -4.72,-2.63 -6.25,-4.49C74.59,58.67 69.45,62.45 67.16,62.81z","name":"Oregon"},"wa":{"path":"m101.38,8.72c0.05,2.75 2.93,5.39 3.25,8.16 -1.92,2.33 -1.78,5.19 -1.32,7.71 -1.81,2.64 1.63,4.82 0.67,7.42 -3.6,1.52 -2.43,-3.7 -4.86,-4.99 -3.34,-2.24 1.47,-3.87 1.17,-5.42 -2.5,-1.11 -2.24,3.88 -3.69,4.17C92.33,26.39 88.86,23.04 84.76,22.57 79.82,20.66 75.28,17.69 72.25,13.25c-3.13,-0.98 -1.96,4.97 -3.25,6.95 -0.63,2.8 2.59,5.06 1.41,8.21 0.52,3.86 -1.29,7.55 0.18,11.29 -1.06,2.88 4.75,5.54 2.94,6.39 -3.45,-1.05 -6.2,3.2 -2.25,4.34 1.57,0.97 -0.61,6.32 -3.3,5.43 -1.83,2.15 1.28,6.86 4.14,4.17 3.77,-1.55 2.75,3.51 5.83,3.13 2.81,-0.24 4.26,3.31 4.54,5.61 0.04,2.48 -0.15,6.02 -0.26,7.78 2.63,1.76 5.01,4.26 8.46,3.62 3.2,0.66 4.7,-3.26 7.97,-0.5 3.01,0.48 6.37,1.55 8.79,3.66 3.03,0.92 6.02,-1.78 8.19,1.05 3.44,1.3 6.67,0.03 9.84,-1.4 0.99,1.78 4.42,1.32 7,1.3 5.35,-0.19 10.68,-0.16 15.82,1.55 6.99,1.44 13.78,3.45 20.65,5.4 4.47,-20.85 8.94,-41.71 13.41,-62.56 -19.81,-3.93 -39.37,-9.21 -58.73,-14.66 -7.27,-1.53 -14.4,-3.52 -21.46,-5.87L101.75,8.45 101.38,8.72z M95.5,15.16C94.05,13.72 92.15,14.26 94.72,17.63 94.39,13.84 99.19,18.11 98.98,14.18 98.24,12.75 96.05,14.08 95.5,15.16z m2.31,1.91c-3.13,3.04 1.36,2.18 0.16,-0.25l-0.16,0.25z","name":"Washington"},"ca":{"path":"m35.06,153.94c-0.1,4.04 0.4,8.21 -1.99,11.75 -1.86,3.68 -2.55,8.24 -6.48,10.38 -1.19,2.11 -3.49,3.38 -3.59,6.45 -1.94,3.49 2.49,5.65 2.91,8.98 1.54,3.39 2.34,6.94 1.63,10.65 0,2.92 -2.79,5.01 -2.24,8.14 0.05,2.97 -2.24,5.87 0.04,8.54 2.58,5 6.38,9.93 6.71,15.69 -0.54,2.77 -0.99,5.37 1.81,7.17 1.6,1.95 4.49,3.66 2.79,6.46 -1.73,3.87 -1.14,8.04 -1.09,12.16 1.68,2.67 2.83,6.76 6.66,6.53 1.48,2.33 0.97,4.84 -0.22,7.13 -2.5,1.53 -4.36,2.73 -3.66,6.08 0.27,3.49 4.27,5.34 4.36,9.01 1.46,6.2 4.13,11.92 7.59,17.25 0.71,2.57 2.16,4.34 2.9,6.41 -0.24,3.33 -1.93,6.49 -2.41,9.87 -1.66,2.61 1.19,5.52 3.99,5.12 4.03,0.15 7.27,3.31 11.01,4.04 3,-0.55 4.74,2.9 6.07,5.11 1.54,2.71 2.37,6 5.76,6.88 2.51,1.14 6.19,0.05 7.17,3.45 2.41,2.72 -2.39,5.05 1.41,5.17 2.73,1.87 5.56,-1.74 7.56,-0.74 2.13,2.06 4.05,4.2 4.93,7.05 4.3,4.9 1.44,11.77 2.79,17.52 14.73,1.94 29.44,4.72 44.27,5.38 2.78,1.19 6.19,-4.43 2.84,-4.65 -3.13,0.64 -2.83,-4.02 -1.36,-4.66 3.15,-0.88 4.92,-3.83 4.65,-7.04 0.47,-3.98 3.27,-7.43 7.22,-8.4 3.43,-2.04 -0.33,-3.58 -0.79,-5.79 -0.23,-3.65 -1.95,-6.81 -3.62,-9.89 2.02,-3.66 -2.22,-3.32 -3.16,-6.24 -22.6,-34.1 -45.2,-68.19 -67.81,-102.29 6.27,-22.44 12.54,-44.88 18.81,-67.31 -22.04,-5.16 -44.08,-10.31 -66.13,-15.47 -0.45,1.38 -0.9,2.75 -1.34,4.13z m24.13,184.72c-0.27,3.05 7.99,3.06 4.7,2.07 -1.63,-0.35 -3.17,-2.46 -4.7,-2.07z m-5.16,0.38c0.33,3.71 5.81,0.51 1.31,-0.04 -0.44,0.01 -0.88,0.02 -1.31,0.04z M79.69,357.5c-0.2,1.58 4.42,6 3.16,2.37C82.22,358.91 80.8,357.6 79.69,357.5z M77.75,369.13c-0.14,1.55 3.2,3.89 1.32,1.26C78.6,369.72 77.39,366.55 77.75,369.13z","name":"California"}}});

;
/** Add Europe Map Data Points */
jQuery.fn.vectorMap('addMap', 'europe_en', {"width":680,"height":520,"pathes":{"gl":{"path":"M13.47,93.57C12.35,92.52 12.34,90 10.44,89.14 10.62,88.14 13.84,87.66 11.35,86.39 10.05,87.17 9.25,86.92 8.71,87.58 6.27,88.12 8.6,85.09 6.17,85.17 5.23,84.47 10.33,84.75 9.98,83.14 11.32,83.4 14.67,82.04 12.37,81.03 11.23,81.19 6.54,82.06 10.06,81.32 13.04,80.64 9.92,76.6 8.71,79.05 9.24,77.06 11.03,78.05 12.88,77.78 14.68,74.59 9.38,77.17 8.23,75.54 7.26,73.61 12.43,77.09 11.48,74.6c2.44,-0.76 -0.97,1.23 1.21,1.43 1,0.07 3.06,0.24 1.26,-0.8C15.39,74.51 14.27,73.05 14.04,72.76 16.26,70.08 9.73,69.39 11.65,72.54 9.43,70.77 7.4,69.72 5.62,68.37 4.84,67.27 3.62,65.14 5.75,64.54 6.27,63.17 3.83,63.23 6.08,62.64 8.52,60.62 3.8,58.38 3.79,56.87 4.78,56.07 3.39,53.57 4.92,55.82c2,1.48 -1.5,0.05 -0.41,1.67 0.7,1.18 4.94,4.58 4.09,1.22C7.96,57.37 6.11,57.21 8.09,56.47 5.75,56.14 4.83,52.58 8.11,53.61c1.58,0.65 2.17,-1 2.13,-1.24 1.86,-0.56 0.99,-3.89 0.14,-5.02 -2.29,-0.92 1.59,-2.34 -1.23,-2.91 0.6,-3.73 4.98,-2.29 7.51,-3.37 2.78,-1.33 -1.33,-1.73 -1.69,-3.06 -3.07,-1.99 2.8,-0.5 3.28,-2.76 2.87,0.22 -2.67,-2.82 -1.49,-3.84 1.34,0.59 4.57,3.1 4.27,-0.2C20.58,29.48 17.09,31.14 17.33,29.6c1.78,1.02 0.79,-3.69 2.33,-1.12 1.76,1.21 4.05,-0.81 1.11,-1.21 -0.72,-0.16 1.96,-1.91 2.18,-0.31 2.04,0.89 2.39,3.26 4.86,3.29 1.12,-1.58 -2.89,-2.38 -0.16,-2.31 1.35,-1.83 -5.03,-0.94 -1.14,-2.29 1.39,-1.55 1.81,4.29 2.64,1.36 -0.57,-1.39 -0.41,-4.67 1.53,-2.59 0.16,2.02 -2.74,3.73 -1.03,6.23 2.7,1.13 0.11,-4.85 3.69,-4.25 2.74,-0.7 0.37,-3.01 -1.39,-3.16 0.93,-1.59 -0.48,-0.52 -0.91,-1.1 -1.26,0.42 -2.63,-0.27 -1.15,-1.19 -0.81,-1.9 -3.85,0.74 -5.54,0.53 -3.44,0.64 1.14,-2.76 2.36,-3.3 2.28,-0.77 4.66,2.97 6.55,0.04C34.81,17.14 33.04,17.79 32.17,17.97 30.61,18.81 30.38,17.32 30.54,16.77 29.14,17.79 26.4,16.27 29.42,16.34 29.89,14.12 31.85,14.39 33.58,13.44c0.27,-2.21 -3.96,0.03 -1.92,-1.94 2.34,1.37 5.29,0.49 7.37,1.6 0.49,1.25 2.93,3.07 2.07,0.58C40.16,10.86 37.07,10.79 34.89,10.94 32.01,10.71 38.39,8.92 36.45,6.69 35.49,6.8 33.31,6.65 34.75,5.53c1.74,0.57 3.45,1.31 2.13,3.63 0.97,-0.77 3.6,0.14 4.92,-0.01C42.62,6.51 37.36,8.29 39.31,5.97 39.94,4.69 35.39,5.71 36.07,3.41c2.18,-0.52 6.21,0.1 8.48,1.64 1.78,-0.72 2.84,-0.23 4.07,0.55 1.73,-0.23 3.46,0.06 2.78,2.25C52.75,9.86 54.51,8.35 52.72,6.73 52.71,4.07 54.56,10.07 55.78,8.98 56.01,5.87 52.57,4.02 49.87,3.57 48.45,2.66 43.96,4.29 45.02,2.48 44.96,1.07 43.75,0.16 45.71,1.28 47.56,3.52 50.55,-0.47 53.01,0.78 55.13,-0.05 52.02,4.62 54.57,4.07 55.09,3.62 56.43,7.62 57.26,5.53 57.36,3.28 54.5,4.61 54.71,2.93 54.66,0.68 56.28,0.89 57.93,0.78 59.1,1.36 57.92,5.72 60.98,5.64 61.74,4.33 57.63,0.17 61.09,2.11 61.53,3.09 65.18,3.43 63.42,2.17 61.88,1.53 60.02,-0.12 62.69,1.24c1.18,0.74 1.27,-0.27 2.37,-0.09 0.49,-0.8 2.06,-0.17 3.01,-0.37 45.89,0 91.78,0 137.67,0 0.61,1.21 1.15,3.04 -0.24,1.09 -2.48,-0.7 1.23,2.94 1.58,3.94 1.63,2.86 -1.86,0.67 -3.36,1.88 1.28,-1.72 -2.26,-4.24 -1.57,-1.36 0.03,2.25 1.64,3.73 3.68,2.39 1.03,0.77 -1.42,2.8 -1.62,3.53 -3.09,0.12 0.02,1.62 1.04,2.22 0.66,2.09 4.04,0.64 2.3,3.22 -1.05,1.95 -3.92,1.82 -3.21,-0.86 0.14,-3.28 -4.67,-1.36 -4.04,-5.02 -2.02,-0.71 -0.18,3.84 -2.96,2.48 -0.73,0.74 0.41,1.75 -1.42,1.32 -2.61,0.54 1.71,4.84 -0.38,4.25 -1.39,0.66 -1.21,4.72 0.33,2.08 -0.04,-1.13 1.18,-4.09 2.39,-2.05 0.43,1.69 3.14,3.16 0.34,3.59 0.86,3.33 -3.29,2.48 -4.22,0.42 -0.56,1.42 -4.92,2.25 -4.96,-1.01 -1.09,-1.09 -0.61,-6.28 0.38,-2.79 -0.38,2.15 4.88,3.94 3.74,1.34 -3.75,0.99 -2.13,-7.24 -6.06,-4.79 -0.93,1.3 -1.66,1.94 -1.57,-0.09 0.87,-1.48 -0.65,-6.36 -1.62,-2.76 -0.29,1.71 1.87,5.7 -1.38,4.23 -1.61,0.79 -3.43,1.95 -3.68,-0.56 -1.68,-1 0.16,-4.48 -2.68,-3.04 -0.67,1.11 2.68,6.25 0.02,3.71 -0.94,-1.89 -3.02,-1.6 -4.56,-0.77 1.83,0.09 2.37,0.85 0.57,2.18 0.59,2.05 2.81,-2.2 3.66,0.12 1.38,0.4 3.13,-0.11 3.81,2.17 2.43,3.24 -2.95,0.83 -4.01,1.04 -0.05,-1.82 -4.79,-3.3 -3.23,-1.13 1.49,0.95 1.71,0.82 0.15,1.51 -1.1,2.37 1.53,3.48 2.9,1.87 3.12,-1.53 5.02,4.79 1.15,3.53 -2.62,-0.97 -1.48,2.05 -3.89,2.7 -0.43,2.18 2.56,-0.04 2.88,-0.79 2.47,-0.74 2.4,2.46 3.26,3.28 -2.41,2.08 2.06,1.61 0.72,3.86 0.87,0.94 2.37,2.01 0.05,2.28 -2.05,0.35 -0.86,2.02 0.59,1.45 -1.67,-0.11 -1.69,1.85 -1.36,2.27 -1.73,0.52 -2.08,4.37 -0.55,3.78 -0.25,-2.23 4.33,-2.23 2.08,-0.24 -2.82,-0.46 -0.7,2.99 -3.43,2.2 2.08,0.81 0.22,1 -1.03,1.19 -1.32,0.16 3.49,1.1 1.39,1.26 -1.9,0.07 -0.29,1.99 -2.31,1.42 1.18,0.54 1.34,1.84 1.35,2.8 -2.18,2.04 -4.44,-0.74 -2.18,-2.64 1.63,-0.69 0.76,-4.19 -0.17,-2.1 -0.64,2.71 -4.66,4.66 -4.98,0.68 -0.13,-3.43 1.98,-6.57 2.12,-10.01 -0.26,-1.47 -2.38,-1.12 -1.92,-3.26 0.2,-2.67 -2.43,-4.09 -3.97,-4.66 0.54,-2.82 0.04,-5.39 -1.15,-7.72 0.49,-2.96 -3.2,-2.36 -2.3,0.29 0.39,1.99 2.16,3.98 1.82,5.79 -0.98,-1.18 -4.72,-2.37 -4.53,0.09 1.53,0.74 4.96,0.32 3.23,3.09 -0.36,0.92 2.65,-0.97 2.92,1.14 1.39,1.16 4.2,3.13 1.09,4.33 -2.3,0.81 -7.78,0.76 -7.23,-2.79 1.56,-1.72 -2.19,-2.27 -1.32,0.16 -1.72,-2.55 -3.53,-0.09 -1.9,1.66 -2.13,2.01 -4.41,0.62 -6.81,0.57 -2.19,2.71 4.76,1.16 2.08,3.05 0.58,1.9 4.08,1.91 5.81,2.83 1.96,1.43 -0.47,2.15 -1.35,0.46 -1.82,-1.08 -3.45,2.21 -4.74,-0.62 -0.64,-2.28 -4.68,1.1 -2.47,0.81 1.98,0.42 2.27,5.38 5.07,2.98 1.84,-3.35 3.57,2.14 6.26,0.44 1.29,-0.17 2.13,-0.02 0.67,0.65 1.09,1.24 2.33,0.17 2.6,1.96 1.19,2.8 4.25,5.41 6.32,6.4 -0.65,1.36 -3.26,-1.74 -3.14,1.07 -0.24,-1.71 -1.8,-0.78 -1.41,0.45 -1.2,-0.78 -1.84,-2.07 -1.82,0.08 -0.39,2.77 -2.92,-1.74 -2.76,-0.46 0.55,1.51 -0.55,2.28 -0.85,0.45 -2.38,-1.66 -2.14,3.66 -3.7,0.79 -1.88,-0.98 -0.85,3.28 -2.38,0.99 -2,-0.69 -1.48,2.95 -3.73,1.98 -1.43,0.57 -1.73,-1.87 -2.48,0.33 -1.28,0.15 -2.02,-1.77 -3.67,-0.49 -1.51,-0.59 -3.89,-0.69 -5.18,-1.79 -1.83,0.4 -3.94,-2.71 -4.99,0.05 -1.52,0.2 0.6,-5.44 -2.51,-2.84 -0.5,1.46 -2.44,2.79 -1.46,0.41 -0.04,-2.08 -3.47,-2.35 -1.81,-0.01 -0.33,2.95 -2.47,-1.46 -3.31,-2.22 2.66,-0.66 -1.9,-3.4 0.58,-4.85 0.98,-1.25 -0.43,-3.9 -1.29,-1.57 -2.2,1.2 0.59,4.8 -2.3,3.1 0.07,1.58 0.73,2.33 -0.49,2.37 -0.31,3.19 -2.4,-0.77 -3.7,1.08 -1.26,-0.57 -3.86,-0.58 -3.24,0.73 -1.86,1.54 -5.17,-0.4 -5.06,3.18 -2.02,-0.95 -3.43,1.13 -4.24,1.49 -0.67,-0.74 -1.24,2.48 -2,1.23 2.12,-2.45 -2.15,-1.8 -1.8,0.58 -2.16,1.39 -3.92,0.18 -2.08,-1.7 -1.67,0.05 -3.09,2.47 -2.5,-0.4 -0.88,-2.96 -1.92,-0.22 -2,1.13 -1.96,-0.26 -4.27,2.16 -3.76,-0.97 -0.78,-1.12 -2.93,1.49 -3.4,-0.02 1.83,-0.91 0.7,-3.4 -0.63,-1.07 -0.78,1.04 -1.78,1.59 -1.04,-0.05 -2.35,-3.54 3.85,-1.66 4.59,-3.73 -0.17,-1.96 -2.75,-5.32 -4.26,-2.64 1.79,0.66 -1.44,2.8 -2.07,2.43 -1.51,-3.02 -4.63,-0.57 -2.13,1.56 0.17,1.83 -2.38,1.81 -1.85,-0.14 -1.36,-2.38 -2.64,3.42 -2.69,-0.09 0.92,-1.47 0.05,-4.47 -1.39,-1.81 0.69,-2.4 -1.59,-1.67 -2.42,-0.69 -1.63,-2.6 -2.81,-0.08 -1.32,1.39 -0.12,2.09 -5.82,3.27 -3.43,0.33 -0.7,-1.39 -2.14,-1.09 -2.9,-2.54 -1.31,0.12 -1.87,1.12 -2.63,1.96 -0.18,2.43 -0.75,4.74 -2.05,6.98 -0.56,-1.99 -3.06,-1.81 -4.45,-3.2 -2.37,1.32 0.55,4.85 0.85,5.51 -2.93,-1.09 -0.49,5.23 -3.18,2.66C53.03,69.44 53.8,64.37 51.35,66.72c-0.01,1.25 1.67,5.14 1.03,4.67 -0.53,-2.51 -2.88,0.37 -2.61,-2.21 -1.56,-2.63 -4.32,1.46 -2.75,2.77 0.01,1.17 -1.56,2.39 -0.5,0.42 0.86,-3.51 -4.59,-2.97 -3.27,0.28 1.49,1.65 -0.07,2.95 -1.09,0.84 -1.55,-1.63 -4.28,0.31 -4.69,-2.84 -1.38,-1.87 -1.94,1.56 -0.77,2.26 -0.06,1.31 -0.47,2.49 -0.74,0.56 -1.54,-2.22 -1.58,2.78 -0.86,3.53 1.64,2.36 -5.86,1.67 -2.64,3.82 2.3,1.03 -2.22,1.12 -2.82,0.61 -1.74,0.43 1.87,2.58 -0.75,1.83C27.52,82.87 27.84,78.97 25.72,81.05c-0.33,1.79 3.97,2.08 0.81,3.67C24.18,85.6 27.77,81.48 24.7,81.96c-1.65,-0.58 -3.25,0.94 -2.07,2.52 -0.13,-1.56 -3.34,-2.97 -2.3,-0.65 0.92,1 3.65,4.19 0.68,3.11 -0.39,-1.36 -2.18,-3.54 -2.55,-1.53 -2.1,0.36 1.98,3.44 0.79,3.95 -0.52,-1.87 -2.86,-1.68 -1.64,0.35 -0.16,0.51 -2.67,-2.78 -2.9,-4.29 -1.64,-2.64 -1.84,0.81 -1.4,1.86 -0.78,1.52 2.24,0.79 1.57,2.42 -1.75,-0.73 -3.2,1.28 -0.75,1.28 -0.16,0.78 0.34,2.28 -0.65,2.59z M34.12,18.3c-1.05,0.6 -2.47,3.81 -0.57,3.47 1.95,-0.22 4.06,-4.82 0.57,-3.47z m-22.97,56.17c-2.31,-0.35 -0.79,-1.58 0,0z M2.14,66.59c-1.38,-1.11 -0.95,-1.35 0.46,-0.36 -0.18,-0.08 -0.27,0.6 -0.46,0.36z m168.23,-6.32c-0.28,-1.85 2.85,0.02 0.03,0l-0.03,0z M7.85,51.96c-0.57,-0.92 1.55,0.27 0,0z m1.18,-1.63C7.41,50.26 7.17,48.77 8.95,49.87 10,50.07 10.77,49.96 9.03,50.33z M184.09,37.53c-0.77,-1.48 -1.43,-4.23 -2.73,-6.24 -2.01,-2.67 1.21,-6.02 3.05,-2.64 0.95,1.04 0.93,3.38 1.44,4.42 -4.98,-0.16 0.39,3.51 -1.76,4.46z M23.01,25.35c-1.12,-0.81 -0.79,-3.25 0.17,-0.92 0.17,0.37 -0.49,0.58 -0.17,0.92z M209.99,8.88c0.65,-1.41 0.2,-3.29 -1.61,-3.21 -0.07,-1.5 -1.95,-5.46 0.62,-4.89 1.44,0 2.88,0 4.31,0 1.06,2.38 -1.6,4.58 -1.58,7.24 -0.32,0.7 -1.06,0.8 -1.74,0.86z M44.32,3.05c-1.74,-0.98 -6.31,0.12 -6.14,-2.09 1.47,1.81 3.05,0.95 2.25,-0.17 2.2,-0.52 2.82,0.46 3.89,2.27z","name":"Greenland"},"is":{"path":"m151.61,141.44c-2.42,-0.05 -4.73,-1.12 -5.95,-3.36 -0.71,-2.06 -4.34,-1.68 -3.81,-4.38 0.8,-0.95 3.4,-0.95 1.03,-1.6 -1.69,0.92 -0.37,-1.61 -2.18,-0.86 -0.88,-0.03 -1.32,-2.12 -2.96,-2.05 -1.43,-1.13 -6,-1.27 -4.53,-3.48 1.4,1.45 5.16,1.15 5.29,-1.63 0.95,-0.08 4.39,1.14 2.46,-0.91 -1.28,-0.31 -3.16,-1.27 -0.58,-1.35 2.41,0.51 2.39,-2.69 -0.02,-1.57 -1.25,0.39 -2.36,1.06 -1.66,-0.43 -0.34,-1.62 1.57,-4.11 -1.54,-3.94 -1.49,-1.7 -3.83,-2.36 -5.98,-2.91 1.9,-1.43 2.13,2 4.45,0.36 0.58,-0.11 0.84,1.82 1.93,0.36 1.45,0.02 2.12,1.75 4.12,1.85 1.57,1.88 4.72,-0.08 2.56,-1.73 -1.13,0.23 -4.71,-0.08 -2.41,-1.51 1.13,0.1 5.66,-0.35 3.94,-1.58 -2.53,-0.05 -1.4,-0.83 -0.29,-1.63 0.84,-2.83 -2.64,-1.96 -3.34,-1.81 -1.47,-0.72 -2,-0.85 -1.64,-2.44 2.52,0.42 0.64,-2.75 -0.27,-3.56 -0.04,-0.34 1.76,2 1.91,-0.11 -0.65,-3.43 1.88,0.34 1.11,2 -0.95,4.21 5.86,2.44 3.19,-0.73 -1.94,-1.31 0.11,-2.67 -1.13,-4.2 1.13,0.42 1.67,1.6 2.04,1.18 1.98,0.31 -0.01,2.5 1.33,3.37 0.86,1.89 -0.77,4.19 1.64,5.57 -1.28,0.64 -3.87,-0.52 -2.63,1.99 -0.4,1.18 -1.92,2.25 -0.42,2.93 -1.31,1.46 -1.09,4.59 1.22,2.7 0.49,-1.4 2.89,-6.12 2.22,-2.37 2.69,2.22 4.53,-3.04 4.48,-5.25 2.58,0.03 -0.68,6.63 3.51,5.53 -0.01,-0.74 0.05,-5.1 1.81,-2.72 1.08,-2.01 3.5,-0.36 1.83,1.62 2.1,1.36 -0.53,3.45 0.95,5.46 2.69,-0.06 0.02,-7.39 2.92,-6.07 -0.32,2.52 1.49,4.92 3.27,1.85 1.68,-2.37 1.62,3.33 3.69,1.28 1.71,-0.8 1.1,-6.38 3.47,-3.02 -0.81,1.5 1.32,1.54 -0.24,3.29 -0.5,2.17 2.82,1.16 2.36,3.29 2.02,0.52 2.1,1.62 0.19,2.57 -2.6,1.53 3.45,1.86 0.49,3.25 -0.74,0.55 -3.68,1.15 -1.27,1.34 1.72,-0.23 4.34,-1.28 4.35,1.54 -0.04,2.17 -4.93,1.21 -2.47,3.09 1.83,0.33 2.75,2.38 0.41,2.2 -1.18,-0.56 -1.74,-0.63 -0.71,0.56 -0.6,-0.3 -3.92,0.12 -2.06,0.55 2.71,0.87 -0.55,1.36 -1.7,1.52 -1.06,0.04 -2.49,1.02 -2.87,2.69 -1.35,-0.83 -1.72,1.98 -2.29,-0.35 -0.72,-2.57 -2.1,-0.68 -2.71,0.31 -2.09,-0.1 -4.17,0.18 -5.78,1.63 -1.89,0.57 -3.52,-3.04 -3.52,0.21 -2.4,-1.75 -5.62,-1.53 -6.88,1.4l-0.35,0.08 0,0z m24.31,-7.94c-1.58,1.64 1.17,1.65 0.84,-0.23 -0.28,0.08 -0.56,0.15 -0.84,0.23z M147.49,99.76c-2.33,0.02 -1.42,1.38 0.2,1.79 0.14,-0.38 0.69,-1.97 -0.2,-1.79z m33.62,15.99c1.19,-0.59 1.6,-0.17 0,0z m-44.05,-9.09c-1.62,-0.01 -0.68,-1.6 0.37,-0.74 1.34,-0.47 -0.84,-4.6 0.49,-2.48 -0.6,1.82 2.54,3.42 -0.86,3.22z m-1.42,-1.5c-1.66,0.2 -1.5,-3.06 -0.29,-0.86 -0.05,0.3 1.22,0.95 0.29,0.86z m4.48,-1.49c-0.86,-0.96 -0.83,-1.57 0,0z","name":"Iceland"},"pt":{"path":"m126.31,476.79c-3.11,-0.89 -5.74,-4.21 -9.28,-3.12 -1.78,0.38 1.76,-2.58 1.47,-3.95 0.39,-1.92 1.56,-3.11 1.18,-4.56 -0.46,-1.65 0.47,-3.6 1.4,-5.27 -0.61,-1.65 3.07,-0.14 2.33,-1.74 -1.59,-1.17 -2.48,-2.71 -4.71,-1.61 -1.89,-0.04 -2.12,-3.1 -2.67,-4.46 0.27,-2.21 3.57,-4.27 2.21,-6.5 2.42,0.37 3.47,-2.17 4.77,-3.81 0.98,-1.71 1.87,-3.43 3.16,-4.47 -0.79,-1.76 1.02,-5.31 3.28,-5.87 1.59,-1.26 -0.95,-2.63 0.8,-4.09 0.23,-2.53 -1.05,-5.19 -0.11,-7.75 2.54,0.06 0.15,-1.87 0.17,-2.24 1.59,-1.44 4.74,-3.3 6.49,-1.31 -3.35,1.53 -0.16,3.98 2.09,3.19 1.85,-0.17 3.87,2.53 6.45,0.97 1.56,-0.13 6.26,-0.07 4.22,3.05 0.22,1.77 4.81,2.08 1.88,3.98 -2.66,0.33 -4.02,2.88 -6.33,3.35 -0.97,1.66 1.09,4.53 -0.81,6.49 -1.07,1.01 0.55,2.39 -1.62,2.77 -2.6,1.54 1.62,6.06 -2.82,6.49 -1.74,-0.37 -5.6,-2.08 -3.57,1.31 1.07,1.89 -0.41,4.57 2.03,6.2 1.92,2.91 -3.81,2.81 -3.68,5.95 -1.09,1.6 0.5,5.45 2.67,5.41 -1.19,1.2 -4.31,1 -5,3.34 -3.07,2.07 -0.28,7.22 -4.25,7.62 -0.55,0.29 -1.11,0.63 -1.75,0.65z","name":"Portugal"},"ma":{"path":"m114.26,519.26c5.38,-1.06 11.75,-0.39 15.9,-4.63 5.26,-4.88 8.22,-11.54 11.83,-17.6 2.3,-1.64 3.11,0.89 3.7,2.43 3.25,0.06 3.27,5.03 6.51,6.18 2.01,2.4 5.02,1.6 7.69,1.35 1.26,1.84 3.78,-0.68 5.41,1.5 1.48,1.09 4.97,-1.46 5.09,1.72 1.76,1.07 3.75,0.97 5.94,1.12 1.21,2.49 5.27,4 3.5,6.77 1.55,1.82 -0.97,1 -2.11,1.18 -21.15,0 -42.31,0 -63.46,0z","name":"Morocco"},"es":{"path":"m170.08,507.95c-0.69,-0.45 0.64,-1.19 0,0z m-23.1,-9.15c-1.89,-0.27 -1.23,-3.36 0.81,-2.76 -1.01,0.61 -0.28,2.16 -0.81,2.76z m-1.53,-5.41c-1.92,-1.84 -4.81,-3.55 -4.78,-6.5 1.74,-1.65 -3.05,-2.72 0.06,-3.62 1.8,0.08 1.95,-2.62 0.29,-1.71 -1.68,1.92 -1.49,-3.2 -3.57,-3.37 -1.21,-2.54 -5.06,-1.7 -6.26,-3.7 0.08,-2.72 1.22,-5.37 3.58,-6.95 1.91,0.46 5.66,-3.3 1.98,-3.27 -1.9,-2.17 -1.67,-5.74 1.14,-6.99 3.7,-0.95 1.1,-4.57 -0.28,-6.35 0.58,-1.68 0.45,-3.01 -0.84,-4.53 2.46,2.34 7.45,0.07 6.4,-3.43 -2.26,-2.56 3.15,-2.71 1.97,-5.34 1.81,-1.67 0.28,-5.41 1.17,-6.21 1.77,-2.14 4.99,-2.46 6.88,-4.55 1.92,-2.79 -4.07,-2.45 -2.2,-4.91 0.43,-3.16 -4.07,-2.3 -5.69,-3.2 -1.8,2.37 -3.89,-1.02 -6.23,-0.51 -0.28,-1.34 -3.49,1.05 -2.42,-0.88 2.82,-1.19 -0.75,-4.5 -2.73,-2.96 -2.11,1.45 -3.86,-0.78 -1.34,-1.64 0.94,0.28 2.32,-1.98 0.72,-1.58 2.23,-1.63 -2.16,-0.92 -0.24,-2.66 2.41,-1.99 0.28,-4.66 -2.06,-3.75 -2.26,-1.66 -0.12,-3.23 1.07,-4.13 3.66,0.29 6.76,-2.08 9.92,-3.51 1.78,-2.19 1.34,2.22 3.29,-0.21 3.33,-0.27 2.62,6.64 6.6,4.09 2.47,1.16 5.51,0.94 8.02,1.44 1.9,-1.24 3.14,2.45 5.32,2.3 2.35,0.57 4.3,2.34 6.75,2.93 2.65,1.41 5.29,-0 7.84,-0 2.13,0.65 4.69,5.39 6.5,1.98 2.5,1.32 5.04,3.91 8.46,3.08 1.39,-0.01 3.8,0.79 4.14,1.8 -1.87,1.22 0.06,2.67 1.22,2.4 1.66,1.57 5.29,1.19 5.34,4 1.46,0.54 4.43,-0.57 4.33,1.92 1.41,-0.29 3.73,0.98 4.54,0.5 1.54,0.01 3.53,0.67 3.72,-1.35 1.63,1.02 3.94,2.12 5.05,3.3 -0.62,2.48 1.62,2.94 3.4,2.37 1.23,1.43 2.74,2.23 4.47,1.42 1.62,0.92 3.85,2.1 4.94,-0.04 1.38,-0.43 5.47,1.31 2.5,2.25 -0.52,2.49 0.35,5.62 -3.02,6.24 -3.95,0.65 -6.55,3.99 -10.24,4.85 -4,0.26 -8.86,0.24 -11.41,3.91 0.64,1.13 2.06,1.75 -0.08,1.82 -2.98,1.35 -3.8,5 -6.55,6.72 -2.04,2.09 -4.6,4.27 -5.09,7.29 -0.14,3.13 0.72,6.8 3.86,8.19 -0.28,2.13 -4.94,1.61 -6.14,3.93 -1.51,0.81 -1.84,2.35 -3.08,3.65 0.22,1.68 -4.27,3.01 -1.46,5.03 -0.94,1.1 -4.96,-1.49 -6.88,0.41 -2.79,1.13 -4.55,3.71 -5.69,6.37 -2.11,3.74 -4.63,-2.34 -7.31,0.69 -2.28,0.2 -4.7,-1.72 -7.4,-1.1 -2.51,-0.92 -5.12,-1.75 -7.89,-1.82 -2.99,0.03 -4.54,3.25 -7.74,1.83 -3.45,-0.48 -3.73,3.46 -6.83,4.06z M229.67,469.73c-3.03,-0.94 2.34,-1.17 0,0z m-3.28,-1.86c-1.31,-1.98 3.63,-2.8 0.96,-0.55 -0.28,0.23 -0.58,0.51 -0.96,0.55z m8.15,-0.95c-0.99,-1.19 -3.24,-1.21 -2.69,-3.07 -1.57,-0.61 -4.43,-0.57 -1.44,-1.83 1.82,-0.69 5.61,-3.6 5.15,-0.13 1.01,1.13 4.03,0.64 1.76,2.77 -0.83,0.87 -1.8,1.58 -2.78,2.26z m11.67,-5.53c-0.43,-1.32 -5.6,-1.9 -2.47,-2.15 1.42,0.04 2.4,0.66 2.47,2.15z","name":"Spain"},"tn":{"path":"m284.9,519.26c-2.21,-1.12 0.73,-3.64 -0.95,-5.51 -1.46,-3.16 2.15,-6.93 -0.12,-9.45 -0.67,-0.73 2.93,-1.29 1.98,-2.95 2.23,-0.03 1.46,-2.58 3.74,-2.85 2.52,-1.83 5.41,-3.02 8.35,-3.78 1.3,0.18 -1.34,3.29 1.51,2.64 0.71,-1.15 1.1,-2.15 2.08,-1.26 -0.76,0.27 1.03,1.6 0.03,2.09 1.72,0.55 2.13,5.46 4.03,3.7 1.46,-0.73 4.4,-5.15 5.37,-2.71 -0.9,2.37 -2.28,5.07 -4.51,6.35 -3.22,1.82 -2.27,6.37 0.87,7.67 1.26,0.82 1.66,2.08 3.04,2.36 -0.15,1.99 1.01,4.41 -1.79,3.68 -7.88,0 -15.77,-0.01 -23.63,0.01z","name":"Tunisia"},"dz":{"path":"m181.84,519.26c-2.16,-1 0.09,-2.29 0.05,-3.03 -0.8,-1.48 -5.28,-4.37 -1.47,-3.7 2.83,-0.51 5.98,-1.33 7.84,-3.67 1.17,-2.46 3.66,-2.95 5.89,-2.07 1.44,-0.79 2.77,-2.77 3.38,-0.29 3.67,1.9 4.38,-3.05 7.15,-3.91 3.27,-1.17 6.41,-3.1 10.01,-2.8 3.04,0.05 6.13,0.57 9.13,-0.19 2.74,1.56 5.53,-0.24 7.63,-1.26 2.46,0.75 5.2,0.79 7.75,-0.34 2.83,-0.67 5.62,0.67 8.61,0.23 3.35,0.17 5.17,6.05 8.94,3.1 1.43,-2.77 7.09,0.3 7.33,-3.88 2.03,-1.62 1.87,1.59 2.96,1.23 1.79,0.05 6.14,2.99 6.01,-0.61 2.5,-2 5.17,3.33 8.12,2.16 1.57,-1.13 4.46,-0.6 5.35,-0.15 -1.62,-0.02 -2.54,1.2 -1.93,2.18 -1.87,0.63 -3.58,2.5 -1.04,3.3 0.38,2.87 -2.09,5.94 -0.27,8.63 -0.06,1.4 0.31,4.98 -0.86,5.05 -33.52,0 -67.05,0 -100.57,0z","name":"Algeria"},"be":{"path":"m265.32,343.64c-0.99,-1.16 -1.81,-2.49 -3.73,-3.37 -2.08,-0.35 -0.28,-1.85 -1.25,-2.79 1.47,-1.88 -0.53,-2.73 -1.47,-0.87 -1.28,2.32 -4.46,0.99 -3.2,-0.74 -0.78,-0.74 1.11,-3.63 -1.62,-3.19 -2.17,0.83 -2.23,-1.41 -2.67,-2.1 -3.94,1.05 -1.51,-5.53 -5.39,-3.71 -2.36,1.07 -3.02,-4.27 -0.45,-4.53 1.73,-0.62 4.14,-3.17 4.52,-0.63 2.42,-0.22 3.66,2.56 5.83,0.13 1.3,-0.02 1.88,1.91 1.96,-0.36 0.89,-2.95 2.67,0.31 4.45,-0.43 0.58,-0.7 1.45,3.34 3.54,2.07 2.55,0.01 1.99,1.94 1.4,3.06 -1.22,1.97 -0.15,4.06 2.13,3.5 1.5,1.19 1.36,3.16 2.63,4.39 -1.48,2.22 -4.2,1.28 -5.1,4.2 -1.39,2.28 2.74,5.98 -1.59,5.37z","name":"Belgium"},"it":{"path":"m350.4,500.36c-1.75,-1.38 -4.77,0.56 -6.21,-2.11 -0.98,-3.12 -4.25,-2.35 -6.74,-3.12 -2.11,-1.47 -4.61,-1.93 -6.58,-3.76 -2.2,-1.23 -6.25,0.31 -6.1,-3.66 0.15,-1.98 2.31,-4.17 3.5,-1.8 2.52,0.49 3.53,-4.85 5.24,-0.9 2.01,0.26 4.02,2.27 5.97,0.45 2.63,-0.1 5.81,0.01 7.46,-2.47 1.45,0.01 4.12,1.89 4.36,-0.76 1.1,1.6 3.69,-2.6 2.02,0.26 -1.4,3.25 -4.08,7.31 -3.12,10.66 1.21,0.69 0.93,2.35 2.17,3.37 -1.93,0.14 -1.88,2.41 -1.97,3.84z m7.22,-15.37c-2.78,-0.14 -2.87,-3.99 -0.28,-4.55 1.37,-2.08 -1.36,-4.79 2.17,-5.13 3.25,-2.22 -1.35,-4.63 -1.21,-7.46 -1.16,-2.63 -2.56,-4.66 -3.09,-7.45 -1.59,-2.98 -4.91,-0.29 -6.78,-2.73 -1.65,-0.84 -0.12,-5.17 -3.33,-5.63 -1.56,-0.37 -4.03,2.8 -2.57,0.22 0.06,-2.91 -3.33,-1.3 -4.25,-2.37 -0.69,-2.23 -3.26,-6.17 -5.36,-4.2 -1.73,-2.18 -4.5,1.85 -5.25,-1.44 -2.69,-0.65 -4.1,-2.62 -6.18,-4.28 -0.73,-3.32 -5.19,-3.11 -5.74,-6.57 -1.05,-1.9 -5.27,-0.02 -4.05,-2.26 -1.1,-2.38 -3.86,-3.39 -4.73,-5.46 -3.13,0.51 0.07,-2.73 -1.71,-4.47 -2.14,-2.56 -1.2,-6.42 -3.6,-8.63 -2.19,-1.12 -4.5,-0.88 -6.03,-3.28 -2.22,-0.9 -4.82,-2.51 -7.33,-1.86 -1.74,1.89 -3.46,3.3 -4.61,5.48 -1.55,2.14 -5.91,2.59 -3.27,-0.76 1.07,-4.25 -4.16,-0.46 -5.52,-3.08 -2.08,-1.9 -1.08,-4.02 0.62,-5.53 0.76,-2.12 -4.77,-3.84 -2.88,-4.68 2.55,0.23 5.53,-3.6 2.83,-5.28 -0.93,-1.94 -2.92,-4.5 0.7,-3.9 2.4,0.04 4.29,-1.2 6.65,-0.24 1.85,-1.05 2.45,-2.98 2.51,-4.87 1.03,-0.35 2.29,-2.18 1.57,0.13 -0.67,2.56 4.99,2.17 2.47,4.45 0.19,0.08 2.08,0.32 2.23,1.7 1.41,1.01 2.54,-1.65 0.98,-2.25 0.53,-2.02 3.41,-3.57 2.37,-5.9 0.68,2.09 2.82,3.69 4.41,1.42 0.81,0.91 2.52,3.75 3.07,0.97 -0.97,-1.55 1.29,-1.81 -0.84,-2.7 -0.29,-2.99 3.05,2.3 3.43,-1.02 -1.77,-2.29 0.88,-4.07 2.84,-1.92 2.41,1.34 1.9,-4.15 4.64,-2.65 2.33,0.51 5.21,-2.28 6.13,0.74 1.38,2.34 4.22,3.29 6.93,3.47 1.41,0.44 5.26,-0.07 4.99,0.93 -2.13,0.92 -2.35,3.92 0.43,3.72 -1.26,1.22 -1.47,2.53 -0.57,3.56 0.79,3.16 -4.05,-1.16 -3.93,2.42 -2.22,1.73 -5.54,2.13 -7.33,4.03 -0.52,1.97 1.06,2.99 1.39,4.46 3.61,0.71 -1.06,2.87 -0.87,4.28 0.35,2.85 0.62,6.32 3.48,7.85 2.75,2.1 5.47,4.43 8.75,5.58 2.03,1.86 2.11,4.88 3.12,7.29 0.93,3.7 3.47,6.75 6.72,8.67 2.2,2.52 5.18,4.19 8.71,3.54 1.79,0.5 5.88,-2.59 5.92,0.29 -0.8,1.53 -3.65,2.89 -1.29,4.86 4.13,2.94 10.13,1.81 13.75,5.65 1.89,1.55 5.85,0.5 6.34,3.52 1.71,1.18 6.04,2.73 4.13,5.37 0.4,1.63 -0.95,3.55 -2.34,1.36 -0.96,-2.97 -3.23,-5.68 -6.54,-4.48 -2.32,-1.32 -6.05,-2.69 -6.78,1.09 -1.28,2.2 -1.32,4.97 -2.42,7.17 0.64,2.84 4.59,1.65 5.83,3.73 1.59,0.26 0.35,2.98 1.81,3.8 -0.21,3.1 -5.83,1.6 -5.88,5 0.28,1.92 0.81,4.68 -1.72,5.06 -1.23,1.65 -1.39,4.64 -3.63,5.25z m-35.56,-71.98c1.98,1.43 0.5,-2.39 0,0z m-33.54,62.41c-0.72,-1.6 -3.1,-3.35 -3.37,-5.68 1.54,-2 1.07,-4.81 2.16,-7.03 -3.26,0.28 0.82,-2.8 -0.89,-4.55 -0.02,-1.96 -1.35,-4.24 -2.94,-4.22 0.19,-1.55 0.4,-3.39 2.06,-1.78 3.1,0.15 5.25,-2.55 7.52,-4.29 0.91,-0.84 5.63,1.48 2.53,2.55 -0.36,1.47 2.3,1.33 1.41,2.66 3.07,1.36 0.3,4.08 -0.53,6.16 1.23,2.67 0.22,5.65 0.3,8.76 -0.33,1.29 -0.37,5.73 -2.35,3.37 -1.49,-1.18 -4.61,-1.6 -3.46,1.11 -0.38,1.17 -0.94,2.88 -2.43,2.94z","name":"Italy"},"by":{"path":"m402.72,308.87c0.99,-3.18 0.27,-7 -3.79,-7.04 -0.71,-2.3 3.14,-4.07 4.34,-6.18 -0.26,-5.15 -3.83,-9.19 -5.74,-13.77 2.18,-0.83 4.01,-0.87 5.95,-0.9 0.86,-1.84 2.51,-1.83 3.98,-0.84 -1.05,-1.12 -2.37,-3.07 0.28,-3.17 1.9,0.02 -0.71,-2.58 2.17,-2.24 -1.28,2.76 4.76,1.14 2.24,-1.38 -2.85,-0.47 0.33,-3.89 -1.4,-5.76 0.96,-1.56 2.7,-3.08 2.72,-4.65 2.53,0.76 4.43,-4.49 0.94,-3.47 -1.1,-1.17 0.25,-4.78 1.91,-6.11 2.45,0.48 4.37,-0.43 4.51,-3.22 0.17,-2.25 2.08,-1.78 3.18,-1.85 2.02,-2.32 2.15,2.85 3.69,0.14 1.75,-1.51 3.73,-0.83 3.53,1.45 2.17,2.99 3.24,-2.73 5.87,-2.54 1.93,0.2 3.24,2.17 5.04,1.95 0.25,2.02 -0.47,3.85 1.8,5.15 0.82,1.65 -1.87,4.51 1.47,4.95 2.1,-0.08 0.99,1.32 1.56,1.96 1.72,2.18 3.98,3.94 6.71,3.73 0,1.84 0.71,4.69 2.92,2.85 2.09,-1.22 3.09,0.78 3.28,1.76 2.02,-0.38 3.13,1.46 1.26,2.31 -0.06,3.07 -3.04,4.09 -5.35,2.65 -3.54,0.27 -2.85,5.57 0.51,5.52 0.97,2.55 1.33,5.72 3.91,7.42 -2.66,1.35 -6.88,2 -6.85,5.76 -1.23,2.53 1.43,5.57 1.33,7.2 -1.16,-1.33 -5.51,-3.73 -5.13,-0.77 -2.24,-2.52 -3.75,4.16 -4.59,0.03 -1.77,-2.65 -4.04,1.4 -4.28,1.56 -1.22,-2.58 -2.82,1.6 -3.58,-0.67 -1.01,0.66 -2.93,1.68 -4.34,1.01 -1.39,0.16 -1.96,2.41 -2.67,0.56 -2.3,-2.34 -5.69,0.72 -8.43,-0.73 -2.87,-0.21 -5.7,0.69 -8.51,0.87 -1.69,1.51 -4.3,1.17 -5.72,2.79 -0.82,1.63 -1.2,4.18 -3.37,2.88 -0.54,-0.03 -1.11,0.27 -1.34,0.78z","name":"Belarus"},"pl":{"path":"m378.8,342.69c0.85,-2.71 -2.77,-1.44 -3.2,-3.81 -2.16,-0.74 -2.68,4.74 -4.1,1.6 -1.34,-0.42 -0.38,-2.05 -2.3,-2.3 -1.38,-1.23 -0.72,-3.2 -2.99,-2.63 -1.39,-1.14 -3.17,-0.83 -4.08,-0.27 -2.65,-1 1.12,-2.8 -1.66,-3.95 -1.04,2.08 -3.71,0.51 -5.13,-0.34 -2.56,-1.21 -1.29,2 -1.13,2.64 -1.27,1.67 -2.44,1.3 -2.92,-0.65 -1.25,-0.75 -2.67,-1.29 -0.72,-2.16 1.16,-2.1 -2.17,-2.93 -3.11,-1.63 -1.5,-2.25 -5.49,-1.16 -6.45,-4 -1.21,-1.39 -2.59,1.06 -1.9,-1.41 0.23,-2.18 -0.48,-4.58 -2.34,-5.49 -1.37,-2.65 0.61,-5.37 -0.78,-8.1 -2.17,-1.37 0.53,-5.96 -3.41,-5.97 -3.09,-2.11 2.9,-5.25 0.3,-8.13 -0.64,-1.64 -2.11,-4.93 -1.01,-5.69 2.39,-0.86 4.49,-2.6 7.02,-3.34 1.88,-0.91 4.34,-1.13 5.97,-2.18 0.73,-2.97 3.72,-4.13 6.19,-5.25 2.44,-1.51 5.22,-3.64 8.26,-2.74 0.34,2.92 2.37,6.29 5.83,5.11 2.32,-0.46 3.66,-2.87 6.19,-1.88 5.94,0.22 12.06,0.04 17.77,-1.75 2.19,-1.89 4.37,-0.56 6.59,0.69 0.91,5.68 5.67,10 6.52,15.73 -0.74,2.77 -4.55,3.76 -4.71,6.89 0.95,2.08 5.51,0.97 4.43,4.48 -0.75,3.1 1.11,5.48 1.99,8.14 0.77,2 4.89,2.48 3.07,4.57 1.18,1.35 3.03,3.77 0.15,4.64 -2.63,0.49 -3.02,4.28 -4.54,6.17 -0.82,2.29 -3.04,4.17 -2.56,6.78 1.11,1.72 -0.12,4.53 2.39,4.91 -2.96,0.2 -5.66,-0.81 -7.88,-2.64 -2.12,-1.23 -4.34,-0.31 -6.37,0.12 -1.06,0.6 -0.02,2.66 -2.03,1.15 -2.7,-1.27 -4.67,0.77 -6.02,2.87 -0.44,-0.92 -1.49,0.48 -1.34,-0.18z","name":"Poland"},"jo":{"path":"m566.3,519.26c-0.01,-4.69 -2.26,-8.97 -3.12,-13.51 1.51,-3.32 4.45,-0.15 6.76,0.1 3.02,0.33 6.94,0.22 8.51,-2.87 4.44,-5.57 8.37,-11.53 12.83,-17.08 1.86,2.51 3.76,5 5.38,7.68 -2.06,2.03 2.19,4.71 3.12,1.72 0.91,2.72 -2.48,4.53 -4.03,6.38 -4,3.47 -8.47,6.39 -12.72,9.51 -2.44,0.61 -3.15,3.3 -0.46,3.9 2.58,1.36 5.17,2.72 7.71,4.17 -7.99,0 -15.99,-0 -23.98,0z","name":"Jordan"},"gr":{"path":"m449.88,508.26c-1.41,-0.44 -0.91,-2.43 -2.98,-2.05 -2.92,-1.02 -4.66,0.87 -7.49,-0.12 -2.89,2.86 -3.34,-3.03 -1.84,-3.28 2.13,1.48 4.85,0.78 6.99,2.27 2.66,-1.89 5.67,-2.41 8.68,-1.61 1.64,-0.07 3.7,-0.37 4.57,-0.83 -1.03,2.5 2.95,2.63 3.64,0.39 1.59,-1.01 2.86,-0.15 1.23,1.36 -4.14,0.67 -8.27,1.86 -12.04,3.72l-0.39,0.1 -0.37,0.03 0,0z m-26.29,-13.55c-0.61,-2.64 -1.46,-5.84 -4.37,-6.76 -3.02,-0.62 -1.68,2.8 -1.92,4.11 -2.48,0.25 -0.03,-2.58 -2.33,-3.13 -1.56,-1.69 2.11,-3.33 -0.42,-5.29 -1.75,-1.46 -3.48,-2.23 -4.88,-3.8 -1.71,-0.32 1.67,-2.18 0.95,-3.89 1.31,0.41 3.43,-0.58 4.2,-2.4 2.31,-0.03 5.27,1.8 8.03,2.01 1.1,0.72 3.08,0.98 3.24,1.46 1.77,0.36 1.5,3.47 4.29,3.78 1.97,0.86 -3.33,1.22 -3.75,-0.39 -3.29,-1.87 -3.6,3.04 -0.88,3.97 1.42,2.4 3.54,4.49 2.98,7.25 0.93,1.21 1.93,2.16 0.11,0.68 -1.13,-1.37 -3.59,-4.36 -5,-1.33 -0.38,1.2 -0.28,2.48 -0.25,3.72z m12.62,-17.67c-0.61,-1.76 -3.37,-2.18 -4.61,-3.83 -1.54,-1.35 -1.12,2.07 -3.22,1.63 -1.32,1.11 -3.33,0.37 -1.06,-0.31 2.53,-1.38 -0.23,-3.22 -1.98,-2.17 -2.19,0.64 -2.76,-3.59 -4.29,-0.5 0.28,-1.81 -1.78,-2.98 -1.95,-0.63 -1.85,0.67 -5.66,-0.17 -7.42,2.31 -1.43,-1.51 -2.69,-1.73 -3.58,0.32 -0.06,-3.13 -3.02,-4.71 -4.64,-5.97 -0.05,-3.03 -3.45,-4.15 -5.3,-5.69 0.58,-2.13 -4.66,-2.22 -1.22,-2.7 1.45,0.13 1.31,-1.81 1.97,-2.79 -2.74,-2.59 4.57,-2.51 2.29,-5.81 0.57,-2.27 3.93,-4.04 1.77,-6.57 2.29,-1.19 5.68,-0.59 7.21,-3.12 0.92,-4.2 5.51,-0.91 7.7,-3.66 0.88,-0.81 0.03,-3.12 2.26,-2.13 2.68,-1.49 5.94,-1.98 8.75,-3.4 1.35,-1.69 4.25,-2.43 5.72,-0.71 1.88,0.93 3.48,-0.95 5.39,0.66 2.83,0.48 5.06,-1.99 7.75,-2.56 2.63,-1.48 -0.92,-3.81 -0.19,-4.93 2.53,-0.82 6.54,2.78 3.07,4.45 -2.66,1.03 1.16,6.08 -1.92,6.2 -2.59,-1.16 -5.58,1.42 -8.08,-0.62 -2.31,-0.06 -3.98,4.61 -5.94,1.87 -2.75,-0.21 -2.93,5.39 -5.82,3.29 -2.56,0.13 -2.19,2.87 -0.61,3.88 1.51,1.31 -0.02,1.67 -0.46,3.12 -2.01,-0.91 -2.94,1.12 -4.72,-0.3 -3.05,1.25 -3.01,-2.2 -1.76,-3.97 -0.09,-0.54 -2.81,1.81 -3.44,2.49 -1.02,1.92 0.18,3.87 -0.21,6.03 1.55,1.98 3.8,3.4 4.84,5.84 0.92,0.8 4.25,2.4 3.42,2.64 -2.14,-2.19 -4.85,-0.02 -3.78,2.46 1.31,0.13 3.2,1.7 0.6,2.21 -1.13,0.04 -4.23,2.36 -2.68,2.49 2.62,-1.25 4.96,1.17 7.41,0.98 0.52,2.36 2.91,0.77 3.98,2.53 2.06,0.36 4.93,0.25 3.64,2.95 0.1,1.33 1.96,3.02 1.13,4.05z m-32.41,-12.35c-2.66,1.97 2.35,4.76 3.65,1.72 0.88,-3.08 -2.48,0.37 -3.25,-1.63l-0.4,-0.09 0,0z m1.2,12.17c-2.12,0.67 -3.94,-2.49 -2.24,-3.05 -0.52,2.11 1.79,2.11 2.24,3.05z m35.21,-4.75c-1.33,-0.45 -3.15,-2.25 -0.48,-1.45 1.91,-0.84 2.27,1.01 0.48,1.45z m-3.1,-3.76c-1.98,-1.68 -5.22,0.85 -5.86,-2.11 -1.43,-1.48 -5.05,-2.2 -5.77,-2.78 2.78,-2.67 4.14,2.1 7.15,1.68 1.66,0.78 3.06,-0.62 3.9,1.22 0.4,0.59 0.43,1.32 0.58,1.99z m-10.1,-17.81c-3.53,-1.73 2.32,0.07 0,0z m3.59,-1.57c-2.32,-1.62 -0.44,-1.62 0.45,0.12l-0.11,0.22 -0.34,-0.34z","name":"Greece"},"tm":{"path":"m679.06,344.59c-1.21,-0.72 -0.78,-2.05 -2.51,-2.48 -0.91,-2.53 -0.44,-5.74 -2.11,-7.9 1.43,2.3 3.65,0.44 4.81,-0.09 -0.04,3.47 0.02,6.95 -0.03,10.42l-0.16,0.04z m-9.11,-14.43c-1.83,0.29 -2,-1.85 -2.97,-2.07 -2.67,-0.77 0.57,-4.63 0.48,-6.52 1.65,-3.13 3.89,-6.16 6.88,-8.09 1.36,-0.18 5.09,-1.73 4.9,0.43 0,2.65 0,5.3 0,7.95 -2.35,-1.52 -3.83,-5.43 -6.79,-5.11 -2.41,2.22 -6.24,4.38 -5.17,8.26 -0.05,1.27 0.71,3.09 1.95,2.4 0.34,0.89 0.41,1.85 0.72,2.75z m9.29,-40.46c-2.98,-4.77 -6.29,-9.32 -9.41,-14 0.44,-3.11 3.69,-4.89 4.74,-7.82 1.56,-2.45 3.21,-4.85 4.68,-7.37 0,9.73 0,19.46 0,29.19z","name":"Turkmenistan"},"kz":{"path":"m665.18,326.25c-2.97,-1.86 -1.2,-5.67 -2.65,-8.21 0.53,-3.17 -3.51,-2.8 -4.88,-0.83 -1.79,-1.67 -2.48,2.95 -4.91,0.84 -1.43,-2.21 -3.22,-0.68 -4.76,0.52 -0.4,-3.09 -3.28,-5.18 -6.16,-5.75 -2.02,-1.36 -4.24,-5.19 -6.86,-2.37 -2.9,1.87 -4.15,-4.1 -0.51,-3.35 1.06,-1.32 1.8,-1.79 3.42,-0.84 1.53,-0.78 2.76,-2.24 4.06,-3.11 -1.44,-2.18 -5.78,0.43 -7.07,-2.22 0.12,-1.34 3.47,-2.2 0.83,-3.45 -1.26,-2.14 2.16,-2.43 1.45,-4.52 2.51,-0.62 4.01,-2.7 6.42,-3.67 1.55,-0.68 5.82,-1.56 4.27,-3.73 -2.44,0.42 -5.53,1.2 -4.64,-2.51 0.27,-3.12 -0.67,-6.7 -3.34,-8.56 -1.46,-0.11 0.78,-3.59 -1.86,-3.15 -1.5,-2.77 -4.84,0.02 -6.51,0.7 0.1,2.2 -0.93,4.69 -3.45,3.61 -2.4,0.56 -6.57,-0.38 -7.49,3.29 -0,2.58 -2.65,3.31 -2.68,6 -1.27,1.57 -1.07,5.37 -3.43,5.36 -2.12,-0.08 -2.2,2.62 -2.46,3.63 -1.26,0.74 -5.86,0.39 -4.64,-0.82 3.5,0.56 3.47,-4.4 0.06,-4.32 -3.14,-1.51 -5.73,-4.02 -8.93,-5.36 -2.47,-0.32 -4.25,2.11 -6.54,2.07 -0.12,1.28 0.37,2.59 -1.35,1.17 -1.8,-0.93 0.01,-2.79 -2.21,-3.3 0,-2.52 -4.2,-0.23 -5.74,-0.66 -0.96,-2.72 -0.8,-5.85 -0.41,-8.82 0.73,-3.23 -4.34,-1.07 -3.74,-4.61 -1.48,-2.21 -1.17,-5.16 0.32,-7.28 -2.58,-1.5 -1.53,-6.73 1.82,-4.04 2.29,0.54 4.78,3.98 7.13,1.98 1.97,-1.65 2.09,-5.06 -0.41,-5.79 -0.5,-2.08 -4.31,-2.93 -1.9,-4.7 0.1,-1.7 1.79,-4.1 2.05,-4.93 -2.7,-0.86 -1.25,-3.39 0.39,-3.59 0.3,-2.73 3.83,-4.97 2.24,-7.88 -1.16,-1.26 2.12,-0.49 0.87,-2.37 -0.73,-0.82 1.71,-0.82 1.99,-1.86 2.14,-0.45 -1.05,2.08 1.69,2.02 1.48,-0.55 1.41,-1.96 2.93,-1.7 0.29,-1.63 -1.06,-3.26 1.01,-4 0.5,-1.63 0.88,-2.2 1.87,-0.46 3.2,2.4 4.8,-3.1 7.46,-3.43 1.62,1.55 3.73,2.04 5.43,0.37 1.27,1.42 3.01,1.43 4.62,1.61 -0.26,2.56 4.05,4.44 3.68,0.87 -0.11,-2.04 -2.23,-3.06 -3.52,-3.49 2.49,-1.89 5.28,1.44 8.06,-0.13 2.65,1.71 2.89,-3.09 2.88,-4.82 -0.94,-1.46 1.32,-2.87 0.36,-4.29 1.64,0.4 1.75,-1.1 1.34,-1.85 1.08,-2.25 2.79,-1.39 4.44,-0.52 1,-0.8 1.78,-2.46 2.98,-2.01 -1.89,-1.21 -2.16,-3.64 0.61,-3.9 -0.26,-1.23 0.14,-1.29 1.28,-1.45 1.06,-0.94 2.07,2.58 4.01,1.26 1.98,1.74 4.96,-3.12 5.37,-1.36 0.29,1.89 3.37,-0.99 2.39,-2.55 -0.11,-1.94 -1.41,-4.21 1.46,-3.17 2.91,-0.36 4.26,-3.79 5.34,-6.17 1.47,-2.93 -2.47,-4.1 -2.09,-6.64 -1.36,-2.25 -4.48,-0.11 -5.91,0.2 -2.22,-2.09 -4.58,3.81 -4.91,0.16 -1.29,-0.68 -2.71,2.23 -3.65,0.73 1.29,-1.47 1.19,-4.25 2.39,-6.18 1.51,-3.13 -2.02,-3.28 -3.58,-4.22 -3.1,0.97 0.81,-3.99 -1.61,-4.03 1.01,-2.42 4.84,-2.6 5.47,-5.2 -0.01,-2.9 -4.66,-1.68 -5.74,0.02 -1.13,1.71 -4.5,-0.24 -1.75,-0.92 2.16,-2.49 -2.77,-3.66 -2.05,-1.2 -2.33,3.55 -0.85,-4.14 -3.83,-1.64 1.26,-0.48 -0.31,-3.76 1.92,-2.68 1.3,1.04 0.21,-2.26 2.14,-1.3 2.74,-0.21 -1.15,-2.68 1.49,-3.26 1.26,2.1 3.9,-0.29 1.53,-1.19 0.54,-2.35 2.7,-4.74 3.28,-7.51 1.48,-0.31 3.12,-1.58 1.37,-2.69 1.12,-2.77 3.18,-4.87 5.44,-6.15 -0.1,-1.8 -3.04,-1.6 -1.06,-3.51 0.73,-2.38 2.55,-3.81 3.48,-6.49 2.08,-2.53 2.36,-5.49 3.47,-8.34 0.29,-1.69 3.72,-3.96 0.35,-4.97 -1.01,-0.43 2.31,-2.04 0.29,-3.41 -1.75,-1.68 3.22,-0.78 0.65,-2.37 -1.73,-0.49 3.06,-0.82 1.8,-2.5 2.25,-1.54 6.79,-0.26 5.35,-4.64 -0.2,-2.91 3.08,-0.72 4.32,0.28 1.69,1.75 4.12,-0.2 4.78,2.52 1.5,0.9 1.01,3.62 3.74,3.35 2.67,0.01 -0.81,-3.38 2.11,-2.14 1.93,-0.51 -0.97,-4.41 1.41,-3.27 0,52.65 0,105.3 0,157.95 -2.28,4.16 -5.07,8.03 -7.49,12.09 -2.11,1.94 -4.29,5.26 -1.49,7.58 3.01,4.53 6.37,8.91 8.98,13.65 0.02,6.62 -0.04,13.29 0.04,19.87 -3.05,0.34 -6.58,0.54 -8.5,3.49 -2.48,2.8 -4.81,5.91 -5.35,9.73 -0.09,0.46 -0.18,0.92 -0.25,1.38z","name":"Kazakhstan"},"fi":{"path":"m382.62,208.07c0.7,-3.07 -2.78,1.32 -3.86,-1.32 0.05,-0.96 1.56,-3.75 -0.71,-2.21 -1.13,1.69 -1.33,-1.45 -2.92,-0.68 -0.94,0.89 -2.97,-0.9 -3.55,-0.42 -0.14,-2.36 -1.97,-0.15 -2.25,-0.03 -0.63,-1.67 -0.91,-3.6 -2.08,-5.17 1.86,-0.74 1.72,-4.06 0.26,-5.25 -0.34,-1.47 3.17,-0.38 1.07,-2.02 -1.2,-2.15 -2.78,-4.06 -3.52,-6.25 0.62,-2.08 -0.63,-3.97 -1.49,-4.42 0.49,-1.2 -0.5,-2.29 -0.95,-2.29 0.13,-1.71 3.82,-4.59 2.52,-5.52 -3.07,-0.18 0.32,-3.17 1.17,-0.45 1.02,-1.23 3.05,-2.66 2.12,-4.84 0.01,-1.7 0.15,-2.94 1.36,-1.21 0.12,-2.42 1.26,-4.91 3.64,-5.85 -0.72,-2.45 1.54,-4.8 2.24,-7.01 -0.27,-2.84 0.9,-5.24 3.71,-6.24 1.6,-1.13 1.77,-3.36 -0.51,-2.84 -0.44,-2.27 -0.12,-5.32 -2.74,-6.02 -2.3,1.99 -2.43,-3.68 -4.97,-1.88 -1.75,-2.03 -4.37,-4.52 -3.48,-7.48 1.52,-3.03 -0.83,-5.16 -2.34,-7.18 -0.2,-1.46 0.87,-4.46 -1.6,-3.74 -0.01,-2.39 -0.15,-4.83 -1.27,-7.01 -2.48,-1.84 -4.57,-4.14 -8.05,-4.18 -1.93,-1.7 -6.43,-2.88 -5.46,-6.12 -0.41,-2.16 1.14,-3.53 2.73,-1.48 2.59,1.31 1.85,6.17 5.39,5.44 2.27,0.35 4.34,-0.45 4.98,-2.51 2.4,-0.26 6.27,3.96 5.78,-0.87 -0.39,-2.02 3.32,-1.43 1.97,-3.98 -1.32,-3.02 -2.11,-7.03 -0.35,-9.99 -0.31,-2.74 4.21,-0.11 4.22,-3.35 1.47,-1.91 3.36,2.08 5.49,1.78 2.95,0.9 3.14,3.84 1.7,6.03 1.41,1.64 0.21,2.38 -0.46,3.84 1.14,0.8 2.75,1.02 1.72,2.87 -0.47,3.13 2.02,6.77 5.45,6.28 1.67,2.35 6.13,3.59 3.92,7.14 -0.75,2.27 -1.97,4.85 -0.96,7.21 3.59,3.29 6.5,7.25 9.05,11.36 0.06,1.49 -2.83,0.38 -0.84,2.06 -0.22,2.17 0.21,4.77 1.29,6.07 -1.26,3.74 5.08,3.34 3.58,6.82 0.48,3.1 6.13,1.5 4.41,5.52 -0.25,1.99 -2.95,4.48 0.53,5.03 2.93,1.69 6.43,2.67 8.87,5.07 1.06,2.48 -0.3,5.24 -0.57,7.75 -2.26,6.49 -4.21,13.14 -7.27,19.3 -1.55,2.69 -3.59,5.26 -4.3,8.32 -1.76,0.21 -3.5,-1.24 -4.38,1.19 1.52,0.77 -3.01,1.75 -1.49,-0.16 -0.76,-2.31 -1.99,0.16 -1.56,1.47 -1.82,-2.09 -4.5,1.44 -1.45,2.01 0.62,2.53 -3.67,-2.15 -3.14,-0.28 0.89,2.06 -2.52,3.25 -2.85,3.52 -2.72,0.33 -4.14,2.39 -6.64,3.79l-0.57,0.27 -0.58,0.1 0,0z","name":"Finland"},"de":{"path":"m302.45,372.15c0.39,-0.91 1.99,-2.77 0.16,-1.49 -1.57,0.93 -2.11,-2.91 -4.19,-2.08 -2.04,1.85 -3.44,-2.27 -6.01,-1.15 -2.15,0.46 -2.02,-2.87 -4.5,-1.23 -1.72,0.52 0.38,3.76 -1.44,1.73 -1.84,0.2 -4.84,0.84 -5.69,-0.07 -0.64,-1 1.16,-4.13 0.65,-5.99 1.9,-2.36 0.91,-6.25 3.86,-7.87 2.56,-1.63 0.59,-4.12 -1.86,-3.67 -2.56,0.2 -2.84,-3.15 -5.48,-1.32 -1.23,0.08 -2.11,-2.54 -3.28,-1.12 -0.17,-2.33 -4.09,-3.23 -1.38,-5.35 1.81,-3.01 -5.32,-3.18 -1.88,-6.63 1.67,-1.33 2.21,-2.89 0.22,-4.22 1.95,-2 -1.2,-0.75 -1.34,-2.77 1.01,-1.22 0.18,-2.51 -0.16,-3.21 1.78,-1.86 2.88,-5.05 1.22,-7.64 -2.19,-2.06 0.71,-2.52 2.29,-1.67 2.39,0.34 3.33,-2.08 3.64,-3.33 2.38,-1.19 2.15,-5.11 -0.59,-5.64 -0.03,-1.55 3.42,0.08 2.83,-2.66 0.31,-2.54 1.52,-4.9 2.38,-7.37 -0.34,-0.18 -3.53,0.96 -2.22,-1.41 0.9,-2.9 4.25,-1.28 6.2,-2.15 0.16,2.03 2.57,6.54 4.4,3.34 0.14,-1.85 -1,-6.59 2.18,-4.76 1.27,0.28 4.88,-0.75 2.09,-1.66 -3.15,0.44 1.18,-4.81 -1.98,-5.31 4.2,-1.72 -2.92,-4.5 -0.43,-6.3 2.37,1.37 6.56,0.38 7.64,2.55 -0.45,0.53 1.55,0.68 -0.04,1.71 -1.46,1.22 0.47,2.21 1.51,1.23 -1.09,2.31 1.04,2.07 1.81,0.68 1.67,1.18 3.81,1.56 5.14,0.49 0.21,1.77 -4.56,3.93 -2.04,5 1.38,0.2 3.65,-1.17 3.27,1.31 2.66,-0.01 2.46,-4.21 4.91,-4.12 1.43,1.57 3,-1.39 3.56,-2.49 0.61,-2.1 3.54,-0.7 4.16,-0.17 0.88,1.8 2.57,3.83 4.93,3.32 -0.95,4 4.51,3.57 4.6,6.93 3.14,3.28 -3.49,6.24 0.16,9.19 2.04,0.76 2.91,2.01 2.23,4.17 0.93,1.99 2.9,4.81 0.48,6.79 1.68,1.23 1.03,4.11 3.18,4.83 0.68,1.92 0.82,5.65 -0.66,6.5 -0.87,-1.78 -4.46,-3.53 -3.95,-0.41 1.16,0.88 -2.8,1.08 -3.3,2.22 -2.5,0.18 -3.71,2.69 -5.8,3.41 -0.73,-0.12 -0.57,1.65 -2.06,0.72 -2.78,-0.99 -2.28,4.11 -4.17,1.96 -3.51,0.44 1.56,4.5 2.19,5.46 -2.26,2.79 1.42,6 3.88,7.15 1.53,1.88 3.04,3.44 5.43,4.44 2.44,1.22 2.24,4.86 -1.02,3.8 -0.57,1.52 -0.37,3.53 -2.79,3.73 -3.29,0.46 -2.9,3.65 -1.01,5.5 0.76,1.93 -3,3.3 -3.36,1.75 -0.45,-0 -3.6,-1.29 -2.93,0.98 -3.48,-0.65 -5.56,1.87 -8.47,2.95 -1.59,-0.45 -2.06,-3.03 -4.27,-1.95 -2.85,-1.05 -0.37,3.13 -2.89,3.37z m-6.7,-79.27c-0.21,2.06 4.44,6.44 3.78,2.2 -1.59,0.14 -2.26,-2.95 -3.66,-2.25L295.75,292.88z m29,76.43c-1.59,-1.17 -0.3,-3.24 0.69,-1.13 -0.04,0.43 -0.23,0.99 -0.69,1.13z m-0.01,-83.07c-2.42,-0.16 -2.07,-4.22 0.32,-2.83 -1.17,-1.29 -0.5,-0.74 0.89,-0.58 -1.82,1.06 2.32,2.92 -0.86,3.34l-0.35,0.07 0,0z","name":"Germany"},"se":{"path":"m323.06,272.38c-2.85,0.68 -1.5,-2.92 -0.88,-3.47 -1.34,-1.73 -2.37,-3.77 -4.04,-5.01 0.79,-1.22 -1.53,-2.8 1.01,-1.48 2.77,0.18 -2.19,-2.84 0.98,-2.65 2.38,-2.15 -2.21,-3.59 -2.38,-5.5 -2.18,-0.93 -1.38,-4.24 -3.57,-5.03 -0.5,-2.35 -1.05,-4.69 -2.37,-6.57 0.36,-2.06 3.34,-6.36 -0.08,-6.96 -1.38,2.23 -3.39,1.39 -2.89,-1.18 0.66,-1.66 -0.9,-5.32 -0.3,-5.55 1.22,1.95 2.5,1.63 3.29,-0.5 0.91,-2.52 -0.9,-5.03 -0.38,-7.57 2.08,-1.14 -0.02,-3.96 3.05,-4 2.39,-1.51 1.37,-4.54 1.71,-6.85 0.8,-2.58 -4.53,-6.31 0,-6.91 1.04,-0.81 1.22,-3.31 1.37,-4.79 -1.12,-2.38 -6.01,-2.81 -4.1,-6.25 1.84,-3.74 -1.45,-6.92 -1.02,-10.47 0.52,-2.44 0.53,-5.73 -0.14,-7.32 0.64,-2.96 1.19,-6.43 4.34,-7.91 2.35,-0.49 6.23,1.31 6.51,-2.71 0.96,-3.43 -4.73,-4.28 -1.85,-7.71 0.9,-2.93 3.32,-5.66 2.42,-8.87 0.15,-1.92 0.67,-3.87 -0.11,-5.73 -1.01,-2.32 3.73,-0.74 3.99,-3.33 -0.13,-2.25 -0.54,-4.21 1.52,-5.81 2.69,-2.56 2.7,-6.48 0.46,-8.94 2.93,-1.39 1.66,-4.89 3.52,-7.09 1.35,-0.88 5.1,1.96 4.84,-1.65 -0.51,-1.95 -1.78,-6.23 1.75,-4.92 2.24,0.45 5.5,2.66 7.12,-0.07 1.29,-1.53 -2.75,-1.44 -0.66,-3.53 0.95,-1.42 0.76,-3.57 -0.83,-4.28 3.02,-0.52 2.64,2.5 5.35,3.5 2.17,2.8 6.24,2.01 8.45,4.17 1.81,1.26 3.78,2.76 3.22,5.22 1.03,1.27 -0.68,4.42 1.98,4.24 -0.85,2.83 1.11,4.63 2.62,6.51 0.04,2.86 -1.49,6.25 1.05,8.57 1.6,1.29 3.31,4.27 -0.1,3.45 -1.76,0.14 -2.91,-0.92 -2.17,1.42 -0.95,1.6 -5.22,-2.83 -4.14,0.58 0.84,1.65 -2.05,2.45 -1.57,1.13 -2.06,-0.65 -0.53,1.54 0.66,1.49 -0.6,0.2 -1.52,0.57 -0.3,1.82 -1.49,0.26 -4.7,1.58 -1.68,2.64 2.32,2.25 -3.2,4.64 -1.02,7.19 1.54,0.9 4.4,2.82 1.64,4.33 -1.68,2.21 -0.66,5.89 -3.12,7.17 -0.94,1.59 -3.16,2.96 -4.81,3.45 -0.21,1.34 -1.22,2.8 -1.35,4.54 -1.77,-1.72 -2.61,0.56 -2.76,1.85 -1.12,0.81 -2.56,2.13 0.01,2.01 -0.44,1.31 -4.33,0.73 -2.47,3.43 -0.06,0.73 -0.49,2.94 -1.88,1.95 -2.76,-0.24 -2.07,3.37 0.06,3.69 -0.77,1.95 -1.46,4.89 0.24,6.81 -3.74,-1.85 -2.36,2.41 -0.94,3.91 0.18,1.27 -3.07,0.5 -0.73,1.44 0.84,1.85 1.12,4.66 1.43,6.67 -0.32,2.79 5.02,-0.22 4.86,2.53 0.7,1.96 4.04,1.71 4.48,1.82 -3.19,-0.43 -0.28,3.53 1.17,3.32 1.13,1.08 3.55,2.93 0.69,3.17 -0.96,1.32 -2.08,3.54 -3.42,3.71 1.54,1.27 -2.79,1.25 -1.63,-0.68 0.49,-2.21 -4.13,-4.8 -3.64,-1.69 1.43,0.51 0.2,2.21 2.13,2.69 -1.79,0.21 -3.94,-2.79 -5.52,-0.41 -0.59,-1.15 -2.36,-1.3 -1.99,0.35 -2.53,-0.76 -3.68,2.49 -1.03,1.96 1.95,-0.49 4.14,0.17 6.05,0.67 -0.71,2.97 4.28,-1.28 2.88,1.93 -0.14,2.13 -0.95,4.88 -3.12,4.77 0.18,1.44 -0.14,1.56 -2.15,1.24 -1.48,-0.93 -5.69,1.16 -2.24,1.59 0.93,-0.93 4.88,0.08 2.51,0.95 -1.3,-0.74 -2.65,-1.15 -1.6,0.7 1.1,0.49 3.58,1.85 1.37,2.42 -0.48,1.93 2.49,4.34 -0.83,3.78 -1.22,1.55 3.46,2.55 0.79,3.59 -0.59,1.57 1.8,1.83 -0.1,3.07 -0.36,1.71 1.22,3.68 -0.24,4.3 0.8,1.29 0.72,4.62 -0.49,4.51 -0.92,1.99 -0.01,8.09 -3.9,5.74 -0.75,-0.04 -1.2,1.04 -1.28,-0.03 -1.81,1.13 -4.91,0.3 -5.24,2.54 -3.47,0.86 -2.77,5.15 -1.48,7.22 -1.25,2.12 -3.78,-0.71 -5.21,1.44 -0.58,0.2 -1.19,0.28 -1.8,0.28z m21.76,-13.69c-0.6,-1.64 -0.03,-5.51 0.58,-5.62 -0.47,1.84 -0.07,3.79 -0.58,5.62z m11.16,-10.28c-1.47,-2.04 -0.57,-3.97 -1.15,-6.17 0.13,-1.54 3.5,-5.82 3.93,-3.32 -1.59,1.67 -1.23,4.3 -0.42,5.29 -0.56,1.58 -2.33,2.58 -2.36,4.21z m-6.04,-22.62c-0.58,-0.9 -1.01,-2.64 0.37,-3.19 0.51,-2.57 3.62,1.5 0.73,1.06 -0.71,0.44 -0.93,1.57 -1.1,2.14z m3.41,-4.74c-1.71,-0.56 1.15,-0.98 0,0z","name":"Sweden"},"no":{"path":"m283.92,239.69c-2.05,0.82 -1.04,-2.38 -3.04,-0.45 -2.25,0.63 -2.45,-1.19 -0.48,-1.71 1.16,-1.98 -1.94,-1.69 -2.54,-0.89 -1.88,-1.69 -4.73,-3.13 -5.46,-5.54 0.16,-1.17 0.04,-2.84 1.26,-1.53 2.45,-0.31 0.5,-3.28 2.63,-3.15 -0.92,-1.74 3.6,-1.24 2.16,-3.19 -1.49,-0.01 -3.77,0.75 -1.5,-1.08 1.07,-1.87 -4.03,-2.48 -3.95,0.31 -0.43,1.99 -1.31,-1.27 0.03,-1.59 -0.59,-1.71 3.37,0.46 2.3,-1.73 2.11,-0.09 3.7,-3.31 0.62,-1.92 -2.12,1.06 -0.9,-1.62 0.69,-0.69 -1.77,-1.8 3.78,-2.21 0.57,-3.6 -0.56,-4.05 -3.61,3.53 -2.9,-0.4 -0.09,-1.07 2.45,-2.14 0.56,-2.38 1.23,-1.75 0.14,-1.45 -1.12,-1.67 -0.48,-2.03 3.39,-0.54 1.29,-2.62 -1.57,-0.11 -2.3,1.01 -2.92,1.83 0.23,-1.47 -0.96,-1.1 0.71,-1.97 1.17,-0.81 3,-0.92 0.68,-1.9 -1.68,1.41 -3.48,-0.55 -1.63,-1.27 2.35,2.15 4.25,-2.5 6.35,0.43 1.83,1.86 1.2,0.18 2.05,-1.15 2.54,-0.3 -0.18,4.44 3.17,3.6 2.08,-1.21 -0.36,-4.05 -1.72,-4.82 -1.87,-1.19 -2.86,1.17 -4.77,-0.24 -1.71,-0.32 -5.74,2.24 -5.21,-1.12 1.24,-0.84 -1.48,-1.91 1.02,-1.63 0.93,-0.21 -1.41,2 0.86,1.55 1.15,0.42 4.11,-2.74 2.32,-2.56 -1.17,0.24 -3.58,0.07 -2.04,-0.78 0.01,-1.15 -2.86,-0.72 -1.37,-2.6 1.92,-1.21 1.67,-2.06 2.44,-3.76 1.13,0.7 1.55,1.95 2.59,0.89 1.71,1.83 3.67,-1.21 0.78,-1.26 -1.72,-1.7 2.02,-2.98 1.47,-0.81 -0.08,1.94 2.1,2.28 1.49,0.15 -1.54,-0.73 -0.39,-3.26 1.26,-2.04 -0.9,2.54 1.99,2.46 3.2,1.29 -0.57,-1.07 -3.07,-0.84 -2.76,-2.61 -1.93,-0.78 -0.88,-1.18 0.63,-1.75 -0.31,2.53 1.54,0.84 1.46,0.89 0.76,2.66 4.97,0.16 2.35,-0.64 -1.68,1.13 0.97,-2.47 -1.62,-1.35 -1.33,0.1 -1.92,0.19 -0.62,-0.55 0.77,-1.45 -3.3,-3.11 -0.25,-2.56 1.36,2.34 4.5,0.23 4.77,-0.42 0.76,1.21 1.99,4.78 3.9,2.5 -0.19,-1.38 -1.61,-1.13 -0.15,-1.91 -0.52,-0.88 -3.96,-0.82 -1.31,-0.98 2.56,1.07 3.94,-2.68 1.6,-3.22 -2.38,3 -0.29,-2.57 1.23,-0.79 -1.13,2.54 3.47,1.05 2.52,-0.37 0.79,-1.1 1.41,-2.4 1.63,-0.68 1.42,0.16 -1.15,3.34 1.22,2.27 1.23,1.9 3.05,-0.32 1.25,-1.45 2.02,0.81 5.84,0.23 4.08,-2.68 2.55,-0.11 3.44,-2.71 1.89,-3.48 2.7,-0.44 1.04,-4.25 -0.61,-2.47 -0.94,0.99 -4.98,3.53 -3.32,4.59 1.36,-0.14 -3.55,4.36 -3.84,1.11 1.8,-0.4 1.59,-2.97 -0.14,-1.47 -1.54,1.59 -1.58,-0.15 0.05,-0.55 1.29,-0.12 3.11,-2.23 0.74,-1.96 0.49,-1.84 0.69,-1.57 2.55,-2.66 -0.01,-1.8 3.87,-1.75 1.44,-3.46 1.6,-3.11 2.62,3.25 4.94,0.36 -0.07,-0.91 1.83,-2.92 -0.44,-2.32 -1.97,0.37 0.51,-3.35 0.91,-3.77 2.46,-0.4 5.23,-2.14 6.04,-4.52 -0.69,-1.41 -1.97,0.46 -0.84,-1.25 0.83,-2.9 -4.58,-0.06 -1.84,-2.23 2.88,-0.42 -1.2,-4.08 2.2,-4.17 1.93,2.26 1.6,-1.88 -0.02,-2.41 1.79,-0.55 2.5,-1.55 4.25,-0.42 0.51,-2.76 -3.45,-2.33 -4.43,-3.58 -0.26,-3.01 2.59,-3.12 4.58,-3.67 0.29,-0.78 -0.81,-3.13 0.47,-2.48 2.46,0.65 2.45,-2.36 2.11,-3.23 1.27,-0.62 3.06,1.08 2.81,-1.49 0.06,-2.75 -4.88,2.23 -2.7,-0.53 -0.33,-1.84 3.17,-2.65 3.79,-1 0.44,2.38 2.69,0.96 0.74,-0.53 -0.37,-0.19 2.89,-3.12 0.16,-2.12 -1.52,1.62 -2.69,-1.67 -0.67,-0.49 2.18,0.6 1.78,-2.26 0.1,-2.63 1.64,-0.99 1.76,-1.25 3.09,0.31 2.65,0.05 -0.04,3.53 -1.13,3.83 -0.13,2.43 3.49,4.78 1.03,6.94 -1.52,2.38 -4.26,5.02 -2.96,8.1 -1.03,2.23 -5.62,0.34 -3.97,3.87 1.08,2.24 -0.41,4.62 0.29,6.91 -0.21,2.4 -1.5,4.65 -2.48,6.84 -1.89,2.33 -0.64,4.78 1.42,6.24 1.36,2.71 -1.06,4.75 -3.56,3.4 -3.47,0.13 -6.05,3.54 -6.55,6.75 -0.09,2.61 -2.39,4.76 -0.87,7.58 1.7,0.33 -0.26,3.51 0.65,5.09 0.93,2.11 2.11,4.27 1.04,6.66 -1.85,3.6 1.33,5.61 3.87,7.28 0.34,1.26 -0.49,2.52 -0.69,3.78 -4.37,0.5 -1.64,4.45 -0.68,6.73 -0.19,2.39 0.87,5.69 -1.37,7.29 -2.33,-0.08 -2.37,2.05 -2.44,3.42 -2.81,2.64 1.45,6.5 -0.89,9.33 -0.63,-0.51 -0.86,-4.28 -3.41,-3.07 -1.98,0.66 -1.1,-2.02 -2.18,-2.85 0.06,-1.66 0.25,-4.8 -1.34,-6.05 -1.51,0.96 0.6,3.37 -1.47,1.82 -1.6,1.08 1.29,3.05 0.43,4.75 1.82,1.57 -1.36,1.57 -0.61,3.28 -0.57,0.33 -1.78,3.28 -2.33,0.68 -1.69,-2.25 -3.03,0.06 -1.93,1.1 -2.37,0.2 -1.22,2.58 -3.27,2.72 0.26,1.74 0.63,2.15 -0.66,0.4 -0.55,-0.29 -0.31,3.24 -1.72,3.89 -1.13,1.13 -2.53,1.14 -2.96,2.81 -1.25,-1.4 -1.53,-2.14 -2.1,0.08 -0.58,1.07 -1.97,0.9 -2.97,1.19z m1.79,-42.62c-2.02,0.59 -1.81,3.69 -1.92,5.35 2.29,1.58 5.16,-1.56 2.82,-2.47 -2.51,1.62 -0.41,-2.26 1.2,-2.22 -0.69,-0.24 -1.35,-0.63 -2.1,-0.66z m-8.26,-3.48c1.26,1.05 1.96,-0.59 3.75,0.18 2.86,-0.7 0.32,-3.31 -1.23,-1.63 -0.54,1.11 -4.66,-2.16 -3.53,0.83 -0.64,0.74 0.98,1.54 1.01,0.63z m-1.56,-1.31c1.64,-1.54 -2.29,-0.9 0,0l0,0z m-3.39,20.54c-1.15,-1.48 -0.79,-2.31 1.27,-2.09 -0.5,0.65 -0.76,1.45 -1.27,2.09z m20.58,-43.12c1.89,-0.99 1.05,0.09 0,0z m18.74,-19.12c-0.11,-1.35 1.21,-2.72 0.71,-0.65l-0.24,0.29 -0.47,0.36 0,0z m7.46,-19.18c-1.61,-0.55 0.1,-1.14 0,0l0,0z m3.95,-10.61c-1.42,-0.85 2.16,-3.22 0.98,-0.56 -0.23,0.31 -0.59,0.56 -0.98,0.56z m8.03,-3.21c-0.35,-1.4 -4.22,-5.53 -0.69,-3.55 1.98,-0.66 -2.87,-2.41 0.24,-2.21 2.34,-1.07 1.29,3.96 3.81,2.24 0.12,-1.58 -1.95,-2.83 0.76,-2.09 1.98,-2.01 2.51,5.82 -0.36,3.01 -2.2,-1.1 -3.01,1.06 -3.76,2.6z m-5.57,-1.57c-2.14,-0.36 2.05,-0.11 0,0z m-7.93,-1.09c-0.6,-2.04 2.47,-0.64 0,0z m7.12,-4.13c0.59,-2.37 4.58,-1.01 4.01,-4.46 0.66,-1.69 0.95,3.05 2.77,1.99 1.53,1.25 -2.5,3.06 -1.7,0.6 -1.05,-1.01 -2.27,1.66 -3.77,0.7 -0.56,0.22 -0.96,0.7 -1.3,1.17z m7.58,-0.78c-1.19,-2.28 3.86,-0.43 2.34,-2.88 -3.7,-0.04 1.43,-1.56 0.6,-2.56 -2.52,-1.2 0.41,-2.37 1.15,-2.81 0.41,-3.22 -2.85,-1.84 -4.06,-0.47 -1.59,-2.04 2.26,-2.36 2.32,-4.57 0.14,1.33 0.46,2.85 1.65,2.42 0.8,1.52 3.32,1.84 3.24,-0.37 1.68,1.68 2.77,1.67 2.31,-0.48 0.79,-1.17 0.35,-2.79 1.61,-3.02 -0.4,-0.66 -1.42,-3.92 0.2,-3.31 0.95,2.39 -0.14,5.28 -0.89,7.26 2.94,1.88 1.55,-3.57 4.12,-3.05 0.22,-1.76 -3.3,-2.79 -1.17,-4.59 1.11,2.64 2.9,-1.39 2.9,-1.08 0.95,0.44 4.33,3.19 2.86,0.58 0.52,-1.54 -0.4,-5.86 -2.92,-3.36 -3.05,-0.22 1.04,-4.05 2.23,-1.43 1.8,-0.47 3.36,-0.55 3.65,1.78 1.6,2.82 3.68,-1.17 2.1,-1.52 0.07,-0.51 -0.69,-2.47 -0.41,-3.71 -0.86,-0.45 -2.21,1.67 -1.86,-0.59 0.28,-1.23 2.77,-3.11 1.94,-0.75 0.94,1.47 4.41,-0.15 2,-1.03 0.6,-1.49 3.48,0.04 1.97,-2.16 -0.79,-0.71 -2.04,-3.95 0.25,-3.13 1.93,-0.42 3.84,0.45 2.02,2.21 -1.75,1.98 -0.56,3.61 -0.42,5.65 -2.28,2.68 3.1,3.87 2.24,0.45 -0.18,-2.74 0.93,-5.32 1.76,-8.05 1.89,-3.05 -1.06,3.6 0.33,2.81 1.3,-1.62 0.64,3.35 2.9,1.4 2.12,-1.22 -1.68,-4.46 1.77,-4.91 0.72,-1.47 -2.34,-1.18 -0.57,-2.18 -0.51,-2.17 4.79,-1.62 2.39,1.11 -1.65,1.09 -1.95,4.14 -0.56,3.08 -0.4,2.24 2.84,0.85 3.62,0.4 -0.89,-1.13 -1.79,-4.79 0.32,-4.87 0.09,2.52 4.6,3.29 3.84,0.25 1.3,0.25 1.81,0.78 0.68,1.44 0.12,2.4 2.78,-0.68 3.9,1.46 2.08,1.26 -1.72,0.74 -1.03,2.68 -0.51,3.31 -7.08,0.08 -6.25,3.51 1.53,-0.19 4.57,0.06 4.67,1.27 -0.73,2.54 2.28,1.63 2.62,2.01 1.41,2.24 -3.5,3.67 -1.9,6.17 0.12,3.04 -1.51,0.49 -0.35,-1.03 0.73,-2.35 -0.61,-5.22 -3.22,-5.51 -2.52,-0.23 -4.95,-4.8 -6.83,-0.86 -0.98,2.59 -3.07,-0.98 -3.73,2.03 -1.82,2.85 -1.43,6.39 -0.81,9.47 1.12,1.85 1.17,3.38 -0.82,4.1 -0.7,1.31 0.29,4.41 -1.67,2.5 -2.14,-1.69 -5.02,-0.86 -5.85,1.4 -2.54,0.85 -4.72,0.04 -5.34,-2.66 -0.99,-2.14 -5.91,-6.2 -6.14,-1.61 0.57,2.13 -0.39,0.96 -1.13,1.23 -0.7,0.99 -4.96,0.92 -2.14,2.3 2.85,1.94 -1.88,4.5 0.34,5.92 1.59,3.24 -4.12,0.39 -5.68,0.21 -2.06,-1.04 -3.15,2.55 -4.42,0.38 -1.01,-0.36 -2.16,1.19 -2.67,1.07z m-9.01,-1c0.11,-2.56 2.91,0.13 0,0z m-1.13,-1.28c-0.8,-1.29 3.49,-1.49 0.69,-0.52l-0.34,0.34 -0.36,0.18 0,0z m4.3,-0.48c-1.71,-0.47 -0.9,-2.93 0.17,-2.2 -0,0.74 -0.11,1.47 -0.17,2.2z m4.79,-4.64c0.18,-0.78 1.29,-1.07 0,0z m7.64,-3.83c-2.24,0.29 -1.11,-3.47 -0.22,-0.75 0.06,0.35 1.74,0.98 0.22,0.75z m2.2,-0.62c-2.38,-0.91 -2.84,-5.4 0.1,-4.68 0.37,1.54 -0.1,3.12 -0.1,4.68z m-1.72,-6.1c-4,-0.97 3.45,-2.52 1.03,-0.52 -0.42,0.05 -0.59,0.56 -1.03,0.52z m5.27,-4.48c-0.27,-0.28 0.7,-0.67 0,0z m42.25,-2.91c-1.73,0.39 -2.88,-3.16 -0.45,-1.74 1.34,-0.78 2.3,1.96 0.45,1.74z m-35.9,-2.93c0.17,-2 2.33,-0.17 0,0z m1.12,-1.12c1.6,0.69 0.37,-2.16 2.16,-2.14 -0.43,0.5 -1.9,3.93 -2.16,2.14z m20.87,-4.79c0.68,-1.68 0.54,-0.43 0,0z m-9.67,-2.21c-2.58,-0.52 -0.4,-3.09 0.65,-0.8 -0.07,0.3 -0.24,0.8 -0.65,0.8z M319.32,12.08c-0.3,-1.14 -1.45,-2.77 -2.39,-2.03 -1.57,-1.66 3.97,-2.79 -0.11,-4.02 -1.19,0.78 -1.7,1.41 -2.54,-0.32 -1.8,0.29 -3.52,-4 -2,-4.15 0.28,2.4 2.41,-1.85 3.57,0.39 1.62,1.46 1.99,-0.61 1.81,-1.03 1.1,0 2.2,0 3.3,0 -1.65,1.5 0.79,4.98 -1.45,5.97 1.81,0.96 -0.87,3.73 0.84,4.72 -0.27,0.27 -0.64,0.46 -1.03,0.47z M334.56,1.41c-0.71,-0.78 1.26,-0.59 0,0z","name":"Norway"},"ua":{"path":"m458.88,376.43c-1.65,0.13 -4.78,-1.76 -1.5,-2.12 1.11,-0.94 -0.88,-2.9 1.02,-4.06 0.62,-1.77 2.75,-4.95 1.17,-6.55 -2.35,-0.6 0.77,-4.92 0.58,-1.37 1.22,0.09 1.33,-0.46 2.29,-1.4 1.42,1.03 2.11,1.68 2.01,-0.49 0.8,-0.31 0.98,2.31 1.91,0.48 2.09,-0.77 2.07,-2.38 0.02,-2.62 0.48,-3.05 -2.01,-4.08 -4.34,-4.76 -1.03,-1.35 0.14,-4.1 -2.32,-4.58 -0.19,2.48 -3.85,-0.68 -2.94,-2.62 0.58,-1.57 -1.58,-5.77 -2.62,-3.02 -1.32,-0.9 -3.45,-3.78 -4.76,-1.05 -0.61,-1.26 -0.31,-1.31 -2.39,-0.85 -1.59,-0.19 -3.7,-2.91 -5.96,-1.05 -1.9,1.41 -4.52,1.99 -6.34,2.49 -0.3,1.21 -2.98,2.87 -3.26,4.06 0.69,2.88 -3.92,2.94 -5.88,3.36 -1.91,1.06 -2.85,5.5 -5.12,2.22 -2.55,-1.4 -4.85,1.16 -7.45,0.17 -2.78,0.68 -6.22,-1.81 -7.42,1.27 -1.7,-1.79 -4.36,-1.99 -6.08,-3.8 -1.69,-1.99 1.67,-4.76 1.1,-7.32 0.71,-2.08 3.89,1.72 3.03,-0.71 -0.43,-1.86 -2.14,-2.21 -2.09,-4.41 -1.6,-2.52 1.02,-5.01 1.85,-7.4 1.48,-2.09 2.06,-5.46 4.76,-6.09 3,-1.14 0.85,-4.79 0.14,-5.51 2.5,-2.1 -3.76,-3.23 -3.93,-5.84 -0.3,-1.41 -1.88,-4.75 0.96,-3.25 2.78,-0.65 2.08,-4.77 5.31,-4.83 2.44,-2.13 5.65,-1.09 8.41,-2.29 2.86,0.12 5.82,0.8 8.71,-0.13 1.44,0.02 2.96,3.43 4.46,0.67 0.48,-0.61 1.02,3.11 2.27,0.92 -0.68,-2.01 1.68,-0.28 2.33,-1.83 1.72,1.64 3.14,-2.06 4.36,1.19 0.98,-0.83 1.53,-5.36 3.12,-2.13 0.91,1.83 2.9,1.59 3.18,-0.37 1.11,-0.89 4.84,0.77 2.92,-1.35 2.22,-0.55 3.94,4.29 5.74,0.82 -0.53,-2.27 -3.24,-4.21 -1.65,-7.03 0.3,-2.91 3.55,-3.36 5.73,-4.62 2.8,0.98 5.55,-1.1 4.6,-3.99 2.15,-0.59 4.74,-0.01 5.62,-2.79 1.28,-1.72 2.08,2.03 2.83,-0.54 3.15,-1.7 3.09,3.74 6.17,3.78 2.69,0.81 -2.77,1.83 -0.06,3.34 0.97,1.1 0.27,1.92 1.66,2.64 0.13,1.93 0.76,2.76 1.8,0.93 1.75,0.21 3.63,-0.42 4.86,-1.04 1.22,1.6 2.86,1.33 3.58,3.44 0.66,2.12 2.97,6.38 5.86,3.86 0.95,-2.66 2.98,0.62 4.61,-0.26 2.96,0.38 3.76,-3.58 5.99,-4.66 2.15,1.36 3.87,3.07 6.32,3.78 2.39,1.73 1.46,-2.06 1.83,-2.22 2.04,0.83 3.63,-0.35 5.65,0.78 1.64,-1.06 3.29,-0.67 5.4,-0.98 -0.34,2.96 3.78,0.35 3.93,-0.21 -1.54,1.79 2.89,1.91 1.36,4.34 -0.91,1.71 -3.3,4.32 0.42,4.36 1.34,-0.17 -2.51,1.76 -0.87,3.22 0.73,1.16 4.31,0.82 2.94,3.4 -1.12,2.14 2.56,-1.79 1.05,1.32 0.04,1.92 1.74,4.67 -1.56,4.6 -2.59,0.04 -5.57,1.58 -4.88,4.34 -1.93,1.59 -3.46,4.3 -2.04,6.74 1.21,-0.9 1.4,3.27 -0.48,2.33 -2.61,-0.17 -4.34,2.86 -4.47,4.25 -3.32,-0.37 -1.93,5.58 -4.94,3.83 -1.97,0.68 -1.55,3.31 -3.9,2.83 -2.31,2.16 -4.28,4.87 -4.46,8.16 0.05,2.37 -1.89,1.63 -2.69,0.94 -1.43,2.66 1.92,4.83 3.49,6.52 1.72,1.52 4.3,4.21 6.67,2.42 1.12,-1.05 0.41,-2.57 2.09,-1.56 1.41,-0.15 1,-2.82 3.17,-2.37 1.15,-0 0.13,2.98 0.5,4.21 -1.72,0.79 -3.13,2.24 -5.41,1.17 -2.72,0.19 -1.51,3.05 -3.33,4.45 -1.46,1.36 -5.27,2.16 -5.39,5.34 -0.65,2.52 -2.91,5.33 -5.63,3.62 -2.92,-0.52 2.13,-0.53 -0.45,-1.77 -0.6,-1.76 -0.24,-6.9 -3.31,-5.63 -2.51,0.74 -5.09,-2.4 -7.49,-0.19 -0.84,-1.11 2.17,-2.44 2.5,-3.9 1.15,-2.11 4.76,-3.17 5,-5.4 -1.21,-0.47 -1.1,-4.45 -2.98,-2.14 -0.01,2.53 -3.55,-2.55 -3,-0.06 -1.18,1.35 -4.02,3.26 -6.29,3.26 -0.55,-2.41 -5.82,0.8 -2.84,-2.01 -2.07,-2.11 3.13,-0.37 2.51,-2.12 0.43,-0.87 2.54,-3.83 0.04,-2.33 -1.67,2.49 -5.64,0.74 -4.34,-2.2 -3.44,-0.71 0.17,4.67 -3.05,4.35 -0.95,0.4 -1.24,-2.89 -2.18,-0.81 1.19,3.1 -5.65,1.69 -4.31,5.43 -0.19,2.64 -0.71,6.16 -2.65,8.5 -1.92,0.15 -2.28,-0.37 -1.97,1.56 1.06,2.6 -1.47,1.65 -1.44,-0.04 -3.03,0.54 1.86,5.97 -1.63,4.84 -1.69,1.04 -2.76,2.58 -4.85,3.23 -0.33,0.68 0.22,1.06 -0.9,0.94z m8.84,-3.13c-1.24,-0.5 0.31,-1.59 0,0z M480,354.71c-2.02,-0.24 1.4,-0.94 0,0z","name":"Ukraine"},"il":{"path":"m564.91,519.32c-2.79,-0.13 -5.59,-0.02 -8.39,-0.06 1.03,-3 0.55,-6.35 0.36,-9.47 -0.77,-1.89 -0.08,-3.97 0.69,-5.38 -2.21,-3.68 3.62,-1.36 3.34,-4.63 0.16,-2.5 0.5,0.45 0.78,1.3 0.41,1.74 0.97,3.45 0.64,5.26 0.64,4.15 2.85,8.05 2.93,12.32 -0.33,0.17 0.28,0.88 -0.36,0.66z","name":"Israel"},"sa":{"path":"m593.15,519.31c-2.83,-0.62 -5.1,-2.77 -7.77,-3.86 -1.58,-0.98 -5.22,-1.86 -2.02,-3.26 5.2,-3.81 10.77,-7.23 15.26,-11.9 1.43,-2.99 4.63,-3.12 7.49,-3.98 3.73,-1.26 7.76,-1.54 11.57,-0.41 3.34,1.04 6.79,1.79 10.32,1.49 3.1,-0.23 6.16,0.27 9.07,1.36 7.05,2.14 14.23,3.86 21.25,6.06 3.22,1.22 7.13,2.8 10.33,0.7 3.47,-1.54 7.12,-2.66 10.59,-4.19 0,5.98 0,11.96 0,17.94 -28.52,0 -57.04,0 -85.55,0l-0.54,0.05z","name":"Saudi Arabia"},"iq":{"path":"m665.09,505.54c-3.93,-0.14 -7.37,-2.41 -11.2,-3.08 -6.98,-1.9 -13.93,-3.92 -20.88,-5.88 -4.51,-0.55 -9.21,0.46 -13.56,-1.25 -4.06,-1.23 -8.45,-1.67 -12.53,-0.27 -2.28,0.01 -6.14,3.28 -6.23,-0.28 -1.25,-1.52 -3.9,2.58 -3.26,-0.38 2.09,0.09 -1.51,-3.02 -1.67,-4.04 -1.32,-2.57 -5.49,-5.02 -2.13,-7.49 4.5,-5.84 9.16,-11.56 13.6,-17.45 2.04,-3.07 2.39,-7.4 0.02,-10.4 -1.41,-3.28 0.38,-7.66 -2.62,-10.31 -3.09,-2.29 -2.71,-6.73 0.85,-8.16 2.5,-2.92 2.33,-7.04 4.39,-10.19 0.66,-2.04 0.93,-3.47 3.19,-3.89 2.1,-2.75 5.72,-0.13 8.03,-2.44 0.9,-1.04 2.2,-3.85 2.95,-0.99 0.24,2.01 2.47,2.98 2.75,0.39 0.38,-1.99 1.84,-3.41 3.5,-1.73 2.25,0.16 -1.13,2.67 1.73,2.71 2.42,-0.18 1.65,4.3 5.21,2.73 1.14,1.18 1.93,5.76 4.16,3.01 2.6,0.76 5.25,0.47 7.14,-1.59 0.61,0.22 -3.19,2.13 -1.4,3.83 1.09,1.94 5.9,4.19 1.79,5.59 0.41,2.25 -2.38,5.11 0.78,6.65 -2.86,-0.58 -2.74,5.86 0.16,4.24 -0.52,2.48 -0.45,5.39 2.6,5.52 0.99,0.71 1.98,1.43 2.96,2.14 0.34,-1.31 1.06,-1.78 0.88,-0.17 1.65,-0.62 3.99,0.32 4.03,2.59 0.12,1.35 0.91,3.75 2.75,1.76 3.33,-1.46 6.61,1.38 9.97,1.03 2.56,-1.77 4.83,0.86 6.18,2.91 0,13.19 0,26.38 0,39.57 -4.3,1.87 -8.8,3.32 -13.06,5.23 -0.36,0.05 -0.72,0.08 -1.09,0.08z","name":"Iraq"},"az":{"path":"m625.84,392.01c-2.29,-1.74 -6.12,-1.39 -7.67,-4.17 -2.87,-0.9 2.82,-3.1 1.5,0.21 -0.29,2.16 0.66,-0.38 1.38,-0.86 1.98,0.67 2.99,-0.38 4.14,-1.97 0.78,0.36 1.17,3.12 3.09,2.25 0.41,1.86 5.4,3.6 1.25,3.88 -1.24,0.15 -2.44,0.52 -3.69,0.66z m9.25,-4.53c-1.22,-1.31 -1.37,-1.74 -0.58,-3.22 -0.7,-1.79 -4.05,0.28 -2.18,-2.45 -0.71,-3.07 -3.86,1.6 -5.74,-0.73 -1.12,-1.04 -4.8,-0.64 -2.24,-1.72 1.66,-3.91 -3.46,-4.05 -5.96,-4.45 -3.06,-0.54 1.31,-0.13 -0.04,-1.79 -1.74,-0.11 0.76,-3.32 -2.15,-2.78 -1.13,-2.07 -3.77,1.24 -3.43,-1.3 -3.83,0.78 -1.14,-4.07 1.25,-3.79 1.55,-0.11 2.45,2.19 4.64,1.11 1.17,-0.47 1.66,-2.32 3.53,-1.24 4.04,0.44 2.81,-5.63 -0.82,-5.09 -1.19,-0.23 -4.57,-0.92 -2.6,-1.97 -1.03,-3.22 2.59,-2.79 4.29,-1.55 1.8,0.76 4.71,-0.66 4.29,1.94 2.3,1.27 5.96,-0.02 6.83,-2.57 -0.51,-2.81 0.78,-5.44 1.5,-8.17 0.77,-1.87 3.93,1.21 5.57,1.75 2.04,2.28 4.63,3.86 7.4,4.84 2.72,2.9 5,-2.29 8.05,-0.66 2.42,0.7 -1.69,0.86 -2.16,1.8 -1.58,1 -0.94,2.98 -2.64,4.05 -0.87,2.65 2.35,4.7 1.48,7.28 0.01,2.24 2,3.06 1.53,5.18 2.05,2.31 -2.94,0.21 -1.67,3.07 0.41,2.71 2.06,5.63 2.66,7.96 -1.4,1.58 -3.89,-2.8 -4.72,-0.12 -0.51,-2.33 -5.01,-0.05 -2.24,-2.75 1.89,-2.25 -0.89,-2.79 -2.14,-3.4 -0.39,-1.7 3.13,-2.19 0.43,-2.98 -2.55,-2.17 -6.8,-1.82 -7.18,2.01 -1.56,2.2 -2.45,4.87 -3.2,7.25 -1.02,1.28 -1.42,2.9 -1.76,4.47z","name":"Azerbaijan"},"ir":{"path":"m679.21,458.81c-1.85,-0.64 -2.96,-4.67 -5.07,-2.4 -2.51,1.13 -4.99,-0.69 -7.5,-0.94 -1.54,-1.25 -4.65,1.4 -4.88,0.3 -0.35,-2 -1.76,-5.08 -4.31,-4.59 -0.55,-2.48 -2.8,0.93 -4,-1.28 -1.15,-1.36 -3.82,-0.5 -2.7,-3.18 1.2,-2.24 -1.18,-2.93 -1.92,-2.92 -0.76,-2.14 0.85,-1.8 1.93,-2.95 -0.87,-1.54 -2.25,-2.23 -1.18,-3.98 1.41,-1.22 -0.93,-2.74 1.62,-3.12 2.22,-2.84 -3.32,-4.02 -3.44,-6.68 1.23,-0.62 3.69,-3.96 0.62,-3.5 -2.16,1.88 -4.6,2.34 -7.4,1.61 -2.13,2.68 -1.52,-4.01 -4.35,-3.02 -2.59,1.12 -1.74,-3.71 -4.6,-2.9 0.47,-2.81 -2.6,-2.62 -3.34,-4.74 -3.51,-0.37 -2.73,-5.88 -6.79,-4.9 -2.43,-0.23 0.88,-4.74 -1.15,-6.42 -2.63,1.81 -2.65,-3.09 -4,-4.32 -2.26,0.51 -1.17,-4.01 -3.82,-4.01 -1.08,-1.34 3.43,-0.98 2.24,-3.41 -0.62,-1.73 -1.46,-4.27 1.42,-2.93 2.06,1.49 5.14,2.91 7.63,3.88 2.25,1.24 5.18,-0.04 7.5,-0.74 2.07,-1.71 5.07,-2.61 4.75,-5.97 2.3,-2.33 1.71,-5.53 3.7,-8.09 0.98,-2.61 2.58,-5.68 5.71,-3.44 1.82,0.32 -1.95,3.66 1.08,3.95 4.06,-0.35 -2.73,4.32 1.52,4.83 1.27,-1.49 2.59,2.44 3.8,0.15 1.45,1.58 3.99,1.1 4.87,0.71 1.82,2.85 3.68,6.92 7.62,6.9 3.17,0.36 5.34,-2.56 8.13,-3.02 2.01,0.9 4.99,2.01 6.34,2.88 -0.02,22.74 0.03,45.49 -0.03,68.23z","name":"Iran"},"ge":{"path":"m581.92,380.27c-2.26,-0.5 1.41,-3.83 -0.72,-5.4 -1.82,-2.3 -4.05,-4.17 -5.45,-6.77 -1.72,-2.18 -4.46,-0.36 -5.95,-2.58 -2.48,-1.15 -5.99,1.77 -7.69,-0.38 -1.24,-0.61 -3.4,-1.34 -1.11,-2.52 2.92,-1.18 5.31,-0.74 8.31,-1.17 2.62,-0.64 4.81,0.81 7.27,-1.05 1.64,-1.03 2.03,-2.53 4.37,-2.32 3.09,-1.55 5.23,0.93 8.34,0.23 1.97,-0.34 3.8,-1.06 3.76,1.37 3.33,1.16 4.09,-3.43 6.09,-4.97 1.82,1.19 3.56,0.44 3.29,-1.84 2.38,1.1 4.89,0.94 6.98,-0.29 0.1,2.19 0.6,4.52 3.44,3.9 1.82,0.87 6.7,-2.08 4.44,1.62 -1.04,4.09 6.18,1.33 6.51,4.88 -0.55,2.71 -3.63,-0.63 -4.78,1.93 -2.42,2.07 -3.95,-2.25 -6.59,-0.28 -2.88,0.84 -1.75,4.15 -4.11,5.26 -2.15,1.64 -6.02,2.97 -7.99,5.72 -1.4,1.55 -3.24,0.61 -4.57,1.11 -0.32,-2.7 -4.41,-0.39 -5.08,-2.59 -2.74,0.39 -1.4,4.41 -4.46,3.55 -2.08,-0.04 -2.63,2.5 -4.3,2.58z","name":"Georgia"},"sy":{"path":"m570.98,505.1c-2.37,-0.06 -4.22,-2.23 -6.66,-1.9 -1.76,1.54 -0.95,-3.61 -2.17,-4.66 0.26,-2.1 3.06,-4.25 2.48,-6.23 -2.86,0.37 -0.12,-3.18 1.61,-2.81 1.41,-1.1 -2.08,-2 0.23,-3.24 2.46,-1.85 0.82,-6.41 -2.32,-5.73 1.74,-2.54 -3.41,-1.48 -4.52,-0.5 -2.16,-1.45 -1.71,-4.59 -2.2,-6.89 -0.72,-2.13 -3.63,-2.2 -2.69,-4.95 -1.91,-3.07 4.61,0.44 2.96,-3.37 1.96,-1.34 -0.54,-4.12 2.56,-4.37 1.92,-1.95 -2.9,-3.08 -1.96,-5.67 -0.17,-2.68 3.53,-1.88 4.07,-0.24 2.8,-1.4 6.26,-2.87 7.96,-6.08 1.77,-3.87 6.01,-0.57 8.96,-1.32 4.89,-1.98 9.3,-5.28 12.15,-9.78 2.06,-3.09 5.52,-4.42 8.88,-5.51 3.15,-0.62 4.71,-4.01 6.68,-5.54 2.16,2.06 -0.35,4.49 -0.71,6.75 -0.34,2.94 -3.64,3.54 -4.67,5.93 -0.77,2.72 0.96,5.34 2.92,7.06 1.91,2.86 0.25,6.61 2.05,9.52 1.43,2.7 2.07,6.08 0.11,8.71 -2.41,4.04 -5.84,7.35 -8.54,11.19 -6.92,8.84 -13.8,17.72 -20.31,26.87 -1.64,2.62 -4.19,2.66 -6.86,2.76z","name":"Syrian Arab Republic"},"tr":{"path":"m494.91,482.2c-2.64,-0.83 -6.61,0.7 -6.69,-3.38 -0.28,-2.26 -4.06,-2.7 -3.32,0.14 -2.13,0.72 -2.01,-4.36 -4.24,-2.06 -1.1,1.64 -1.71,4.09 -2.75,1.3 -0.06,-0.7 3.87,-0.84 1.58,-2.85 -2.66,-0.75 -4.9,2.05 -7.56,2.3 -3.22,0.12 2.63,-2.09 -0.16,-3.58 -1.02,-1.26 -2.59,-1.78 -3.85,-0.25 0.8,-2.14 -2.11,-2.59 -0.3,-4.42 0.7,-2.91 -3.46,-4.14 -4.72,-3.08 -0.35,-2.13 -2.41,-1.66 -2.94,-0.12 -0.96,-0.52 -4.49,-1.13 -1.65,-1.67 1.95,-1.12 -0.35,-1.93 -0.64,-2.3 -0.1,-2.91 1.76,1.21 2.44,2.3 1.21,0.53 0.61,-1.54 2.32,-0.91 2.14,0.31 3.08,-4.19 0.9,-2.3 -2.98,0.71 -3.35,-2.88 -0.63,-3.63 1.42,-2.31 -2.41,-1.49 -2.02,-3.47 -1.48,-1.26 -3.08,-1.7 -1.12,-3.61 1.88,-4.06 -3.41,-1.44 -4.89,-0.21 -3.22,2.13 -1.41,-2.71 -2.53,-4.43 0.27,-1.5 2.4,-1.02 1.65,-3 1.08,-2.79 3.49,-3.54 5.85,-4.95 1.33,-0.2 3.18,2.13 5.06,0.5 2.19,-0.32 0.53,-4.12 2.21,-2.66 -1.01,2.78 3.65,-0.5 5.07,-0.34 1.73,-0.22 7.01,-0.13 5.15,-2.97 -1.48,-0.21 -3.18,0.39 -0.99,-0.95 1.96,-1.62 4.19,-2.4 6.66,-2.8 2.77,-0.54 1.2,-2.91 -0.89,-1.86 -1.93,1.45 -3.4,0.81 -4.38,0.32 -3.58,0.35 -2.31,-4.79 0.81,-3.52 2.71,0.01 5.57,-0.39 7.64,-2.28 2.46,-0.32 5.31,1.16 7.39,-0.69 2.9,-0.41 1.41,-4.52 4.23,-5.54 2.71,-2.98 4.61,-6.84 8.39,-8.68 2.29,-1.78 4.29,-3.83 7.39,-4.02 3.16,-0.7 6.47,-1.22 9.26,-2.97 -0.18,-2.01 2.92,-3.03 2.12,-0.46 1.09,2.77 5.37,3.22 7.04,0.72 1.14,-1.37 -0.27,2.45 1.16,0.14 2.04,-1.94 2.88,3.79 5.57,2.83 1.27,-1.86 4.62,-3.78 5.67,-1.09 1.67,-0.99 4.1,0.27 5.52,-0.17 -0.07,-1.45 1.44,-1.93 0.76,-0.72 3.48,0.31 7.66,-0.08 9.71,-3.32 2.34,-1.18 4.33,-4.18 7.15,-3.36 2.71,-0.07 6.67,-0.67 7.5,-3.83 1.38,-2.88 4.81,-4.34 5.49,-7.63 0.34,-3.02 3.69,-0.01 3.89,-2.79 0.79,-1.71 6.06,-0.8 5.2,-2.54 -0.27,-1.98 1.64,-2.11 0.91,-0.61 1.97,-1.13 4.24,-0.33 5.11,0.95 0.95,1.76 2.34,-1.7 3.43,0.93 2.07,0.94 4.5,1.8 3.64,4.81 0.12,2.83 2.56,6.38 5.64,4.35 1.45,-1.61 6.05,-1.12 6.12,-0.28 -2.87,1.25 2.28,4.65 -1.45,5.76 -2.31,0.86 -1.86,1.74 0.02,2.55 2.07,1.41 1.16,4.02 3.6,4.69 1.23,1.57 1.59,5.71 3.8,4.2 0.43,2.37 -1.79,7.52 2.74,6.05 2.64,-0.44 0.94,3.97 3.94,4.02 3.58,1.02 -1.74,2.3 -1.12,4.76 -1.2,0.98 -0.5,-3.85 -3.12,-2.67 -1.98,1.2 -2.57,4.14 -5.61,3.29 -2.88,-0.31 -4.84,1.72 -7.02,2.7 -0.69,1.88 -0.86,5.21 -2.91,2.44 -2.75,-0.22 -2.61,4.46 -5.58,4.92 -2.98,1.72 -6.75,1.93 -9.15,4.66 -2.61,2.66 -4.36,6.14 -7.61,8.16 -2.25,1.32 -4.52,3.36 -7.26,3.28 -3.54,-1.52 -7.49,-0.78 -9.08,3.03 -1.68,2.28 -5.43,4.75 -7.39,2.82 -3.82,-1.14 -4.64,3.62 -2.75,6 0.73,1.14 2.5,1.57 0.17,2.12 -3,0.1 0.83,3.76 -2.09,4.07 1.59,1.89 -1.39,2.48 -1.35,0.31 -1.32,-1.73 -3.85,-3.07 -1.43,-5.18 3.46,-2.09 -0.87,-8.48 -3.12,-4.45 -0.21,1.09 -4.52,4.06 -1.07,3.29 -0.14,0.32 -3.7,3.62 -5.39,1.57 -3.14,-1.5 -6.7,0.91 -7.75,3.93 -2.31,1.12 0.64,5.77 -2.52,4.44 -0.89,2.68 -3.25,3.27 -5.84,4.06 -1.96,1.06 -3.83,3.65 -6.37,2.47 -2.84,-1.55 -5.07,-4.65 -8.7,-4.14 -2.94,-0.38 -6,-0.94 -8.9,-0.06 -3.48,-0.29 -3.26,3.57 -2.85,5.62 -0.19,1.75 1.15,3.5 -1.34,2.67 -2.13,0.36 -2.94,2.88 -4.85,3.38z m-22.48,-0.92c1.54,-1.56 1.67,0.46 0,0z m4.91,-2.51c-0.79,-0.93 0.97,-1.15 0,0z m-7.81,-0.87c-2.21,-0.79 -0.04,-1.14 0.54,-0.39 -0.12,0.2 -0.29,0.4 -0.54,0.39z m-17.07,-35.78c-2.05,-1.66 3.84,-4.8 1.02,-1.64 -0.17,0.27 -1.7,3.54 -1.02,1.64z m-2.5,-4.63c-2.27,-0.95 2.99,-3.59 0.8,-5.77 -1.18,-2.59 4.67,-3.55 1.64,-6.24 -1.25,-1.27 -3.7,-1.75 -1.56,-3.41 0.31,-2.43 2.93,-0.92 3.7,-3.21 1.99,-1.8 4.08,2.49 6.12,-0.22 3,-2.82 1.8,3.03 4.59,3.75 2.54,1.72 5.71,1.31 8.59,1.46 1.59,1.71 -1.83,5.17 -3.31,2.87 -1.59,0.83 -4.21,-0.49 -5.46,2.07 -2.23,0.06 -4.36,0.17 -4.68,3.06 -0.43,2.55 -2.87,5.66 -5.23,3.75 -1.9,0.1 -3.3,1.78 -5.2,1.9z","name":"Turkey"},"am":{"path":"m631.96,389.85c-1.96,-0.78 -2.5,-4.05 -4.9,-3.4 0,-2.98 -2.99,-2.85 -3.89,-0.42 -0.72,0.59 -2.05,-1 -2.73,0.47 -1.44,-4.24 -3.82,2.15 -6.08,-0.34 -2.43,-1.36 -5.05,-0.13 -7.33,0.88 -1.6,1.02 -2.24,-1.35 -3.25,-2.19 -0.22,-2.63 -0.35,-6.8 -3.95,-6.8 -1.56,-1.33 3.34,-2.22 3.67,-4.1 2.01,-1.81 4.84,-2.17 7,-3.75 -1.93,-0.72 2.92,-0.35 0.29,0.72 0.12,2.73 3.55,-1.6 5.25,0.33 2.07,0.17 -1.51,3.12 1.09,4.06 1.57,1.97 7.78,-0.09 6.04,3.56 -1.81,0.88 -2.21,2.81 0.36,2.27 2.62,0.26 4.73,3.06 7.3,0.67 1.25,-0.38 -1.56,2.52 0.95,2.4 1.37,0.14 2.22,0.32 0.58,1.07 -0.16,1.55 3.78,3 0.58,4.04l-0.53,0.37 -0.44,0.16 0,0z","name":"Armenia"},"cy":{"path":"m527.35,491.44c-2,0.03 -5.42,-2.87 -2.34,-3.85 0.27,-2.84 4.77,-0.45 3.78,-3.88 -1.1,-2.02 2.82,-0.4 4.03,-1.67 3.21,-1.08 5.34,-3.84 7.9,-5.9 -1.85,1.69 -5.66,5.67 -1.55,7.09 -1.16,0.96 -4.02,1.69 -3.88,3.92 -1.79,0.94 -4.14,2.55 -4.75,3.95 -1.18,-1.33 -2.1,0.23 -3.19,0.34z","name":"Cyprus"},"ie":{"path":"m160.13,300.45c-1.94,-0.73 -5.41,-0.29 -5.93,-1.1 2.68,-0.96 1.02,-3.47 -1.27,-2.29 -2.17,-0.03 4.61,-0.27 1.86,-1.87 -1.29,0.35 -5.82,0.84 -4.6,-0.88 0.33,-2.41 5.15,0.07 4.57,-2.91 -1.5,-0.99 -3.62,0.6 -3.81,-1.26 1.2,-0.91 6.26,2.54 3.91,-0.67 0.38,-1.38 3.44,-1.82 5,-1.34 1.1,0.96 5.65,0.21 3.16,-0.84 -0.11,-2.83 -2.54,-0.03 -3.01,-0.47 -0.23,-0.23 -3.43,-0.5 -1.1,-1.34 2.22,-1.01 0.54,-4 2.82,-3.42 2.56,1.02 3.91,-3.17 0.52,-2.46 -1.68,0.14 -2.56,-0.23 -2,-1.83 -0.18,-2.01 -5.12,-1.21 -3.94,-2.82 2.15,0.5 2.19,-2.65 4.57,-1.69 2.67,-0.16 1.13,-2.7 -0.21,-3.26 0.29,-1.31 0.02,-3.18 -0.75,-3.28 2.65,-0.82 4.91,0.87 5.93,2.56 1.46,-1.86 3.2,1.45 5.23,1.05 -1.45,-1.4 -1.04,-3.03 1.32,-2.78 1.21,-0.78 -0.05,1.72 1.32,2.45 1.11,1.84 4.55,5.05 6.16,2.17 -0.49,-1.92 2.26,-1.77 1.43,0.13 0.94,1.15 1.06,2.27 0.8,3.26 0.63,1.48 4.47,-0.64 2.75,0.86 -2.34,0.42 -0.05,3.2 -0.77,4.83 0.46,1.62 -0.08,2.98 -1.28,2.32 1.02,2.41 1.46,5.54 -0.48,7.61 -1.25,2.01 -3.34,4.38 -4.14,6.02 -2.56,-0.85 -5.09,-0.34 -7.67,-1.06 -1.16,0.41 -0.62,2.52 -2.3,1.42 -1.5,0.14 -2.91,2.49 -3.4,0.19 -2.29,-1.05 -1.04,2.27 -2.69,2.29 -0.11,0.95 -1.6,-1.12 -2.01,0.4z m13.73,-33.46c2.33,-2.06 -0.9,-1.95 -2,-2.14 -1.29,-0.53 -2.55,-1.96 -0.25,-1.08 1.89,0.69 2.47,-1.66 2.15,-3.1 -1.16,-1.71 7.03,-1.16 4.23,1.31 -0.31,1.85 2.66,-0.08 1.09,1.63 -0.53,1.73 -5.09,0.69 -2.83,2.72 -0.77,0.31 -1.61,0.36 -2.38,0.64z m6.45,-5.05c0.02,-0.88 0.61,0.23 0,0z","name":"Ireland"},"gb":{"path":"m182.64,325.46c0.06,-1.95 -4.47,-2.09 -0.74,-2.3 2.67,-0.61 3.94,-3.31 6.49,-4.14 2.12,-0.77 1.4,-4.5 3.94,-3.31 1.45,-3.67 5.43,-1.45 8.06,-0.26 2.91,0.6 2.6,-3.72 5.07,-4.06 1.35,-0.1 4.35,-3.93 1.42,-2.57 -1.86,1.99 -5.05,0.84 -6.82,2.84 -2.27,-0.51 -2.72,-5.62 -5.77,-3.31 0.24,-2.37 -1.53,-4.27 -3.69,-2.44 -0.87,0.75 -2.94,0.79 -1.58,-0.17 0.16,-1.27 -3.6,-0.88 -1.52,-2.98 1.52,-0.74 3.44,0.29 4.82,-1.36 2.13,0.95 4.49,-1.92 5.83,-3.38 1.68,-2.26 0.05,-8.36 -3.37,-5.58 -1.46,1.33 -0.19,-1.41 0.97,-0.91 1.28,-1.84 2.91,-2.79 5,-2.8 1.2,0.32 4.62,-0.54 5.23,2.01 0.71,1.84 0.61,0.28 0.62,-0.81 -0.49,-1.45 0.01,-1.88 0.83,-1.63 -1.44,-2.21 1.58,-2.99 1.67,-4.6 -1.45,-0.49 -1.63,-2.14 0.09,-1.51 0.69,-1.16 0.79,-2.38 1.37,-3.56 -0.63,-2.27 -3.62,2.01 -2.38,-1.12 -0.36,-1.35 -2.39,0.41 -1.46,-1.51 -2.08,-2.31 0.12,-6.19 3.07,-5.98 2.74,-1.73 -0.83,-1.86 -2.08,-2.37 -0.92,0.48 -3.28,2.29 -4.42,1.19 -1.32,1.2 -1.79,-3.4 -3.43,-0.83 0.32,2.13 0.14,1.46 -0.76,0.01 -1.33,-0.68 -2.66,-1.39 -1.32,-3.18 1.13,-2.26 5.13,-4.6 2.33,-7.17 0.52,-2.42 1.47,-4.31 0.99,-6.83 -1.19,-2.25 -5.91,3.7 -3.96,0.19 -1.17,-1.95 1,-2.29 1.54,-3.39 -1.93,-1.31 3.92,-1.92 1.97,-3.06 1.93,-2.14 -1.4,-1.12 -1.91,0.17 -2.64,0.37 -2.78,2.95 -5.17,3.25 1.64,-1.88 1.56,-3.32 4.36,-3.1 0.45,-1.67 -5.98,-1.25 -1.81,-1.19 1.82,-0.7 -1.08,-3.69 1.83,-2.58 2.2,1.18 2.55,-1.86 1.62,-2.28 3.21,-0.32 0.94,-5 -0.12,-6.67 -1.49,-3.19 1.62,1.59 1.66,-1.31 -0.16,-0.99 3.11,1.17 2.06,-1.21 -1.02,-1.19 -0.29,-1.17 0.73,-0.82 0.07,-1.49 0.01,-1.71 1.64,-1.31 1.56,-1.15 -0.74,-2.21 0.86,-3.26 -0.88,-3.08 1.49,-0.59 1.87,-0.27 0.74,0.04 0.92,2.92 2,0.79 2.21,-0.9 6.43,0.18 7.86,0.3 -1.51,1.12 -1.16,3.83 -3.76,4.28 -1.25,1.24 -5.25,2.21 -4.45,4.19 2.02,-0.77 1.46,0.73 0.51,0.2 -2.65,-1.31 -3.91,3.83 -0.65,3.27 1.6,-1 4.76,-1.27 6.96,-0.43 2.15,0.77 9,0.4 6.36,4.13 -2.17,1.32 -1.95,4.3 -3.79,5.88 -1.36,2.24 -3.73,4.99 -6.67,3.85 -2.54,0.88 -0.66,2.52 1.1,1.38 0.78,-0.5 3.15,3.35 0.84,1.99 -2.07,-0.28 -3.16,1.31 -5.18,1.63 -0.02,2.53 4.56,1.95 5.82,1.47 2.3,1.2 3.8,3.55 4.55,5.85 2,2.23 0.13,5.79 1.35,8.49 -0.45,3.02 1.26,4.86 3.81,6.01 1.66,1.49 2.34,4.19 3.57,5.37 -2.57,1.95 1.1,5.12 0.44,6.31 -2.04,-0.08 1.34,3.78 1.3,5.11 0.78,2.24 -5.08,2.32 -2.09,4.71 1.56,2.69 3.3,0.05 4.83,-1 2.51,1.1 6.37,1.79 6.61,5.25 -0.28,2.6 -1.71,7.67 -4.87,6.84 -2.14,0.29 1.39,3.23 -1.35,2.01 -1.64,-1.62 -4.38,2.64 -1.7,1.39 1.98,0.5 -1.21,2.23 -2.35,1.41 -3.04,0.03 -0.52,3.18 1.11,2.57 2.13,-1.55 -0.82,1.67 1.85,1 1.37,0.01 4.16,-1.13 2.4,1.04 0.18,1.94 -3.04,1.77 -3.79,3.01 -3.03,-0.26 -5.14,2.46 -7.81,0.22 -2.14,-0.87 -5.12,1.06 -5.71,-1.04 -0.97,0.35 -1.61,-1.39 -2.37,0.11 -0.34,-1.96 -3.3,-2.15 -1.9,0.13 -1.76,0.29 -4.97,-1.2 -5.38,0.98 -2.03,-0.7 -3.26,-0.69 -4.99,-2.14 -2.67,-1.4 -6.68,-1.13 -6.68,2.71 -0.68,3.61 -3.23,0.34 -4.72,-0.57 -1.81,-0.09 -4.28,-1.13 -5.91,0.19 -1.52,-0.34 -2.18,1.47 -2.78,2.5z m18.76,-70.13c1.65,1.54 3.03,-0.19 0.57,-0.92 -0.47,-0.23 -0.39,0.68 -0.57,0.92z m-3.12,31.93c0.55,0.53 0.27,0.88 0,0z m-1.17,-10.07c0.02,-1.53 3.39,-4.02 1.66,-1.22 -0.39,0.58 -0.96,1.08 -1.66,1.22z m-10.63,-1.73c-1.59,-0.31 -2.08,-2.29 -3.03,-0.36 -1.91,-0.73 1.49,-2.2 -1,-2.29 0.13,-2.31 -2.8,-4.88 -3.79,-2.04 0.08,3.32 -3.97,-0.09 -4.6,-1.78 -1.85,-2.46 4.1,-0.54 2.7,-3.31 3.07,0.55 2.59,-4.32 5.36,-2.92 1.06,-1.19 2,-1.61 3.15,-1.03 2.23,-0.98 4.88,1.21 3.52,3.35 -0.19,2.26 3.15,1.24 0.87,3.27 -2.06,1.44 -0.04,2.03 1.25,1.47 1.84,1.95 -0.91,4.87 -2.77,3.75 -0.28,0.8 -0.67,1.84 -1.67,1.88z m10.61,-7.92c-1.67,-0.09 0.88,-0.41 0,0z m-4.29,-6.97c1.08,-0.83 2.3,-4.85 2.33,-3.8 -0.86,1.14 -0.52,3.62 -2.33,3.8z m2.73,-6.13c0.35,-1.24 0.97,-0.17 0,0l0,0z m-3.97,-25.03c-1.05,-1.04 1.79,-1.33 0,0z m1.85,-1.48c-0.51,-1.01 -1.32,-1.32 -0.4,-1.6 -1.54,-1.3 0.12,-2.32 1.22,-0.9 1.22,-0.53 0.35,-2.59 1.9,-1.78 0.84,-0.86 3.02,-1.98 1.27,-0.28 -1.41,1.61 -1.17,5.41 -3.42,2.95 -0.74,0.32 -0.1,1.35 -0.58,1.61z m38.33,-20.76c-1.93,-1.65 4.17,-0.89 0.99,-0.51l-0.47,0.12 -0.53,0.39 0,0z","name":"United Kingdom"},"ch":{"path":"m292.05,389.98c-1.12,-2.03 -1.49,-3.96 -4.14,-4.68 0.24,-1.27 0.28,-4.19 -2.02,-2.48 -2.76,1.07 -0.98,6.19 -4.8,5.6 -1.34,-2.05 -4.35,2.18 -5.85,-0.49 -0.66,-1.9 -1.54,-2.82 -1.22,-5.23 -0.26,-1.58 -4.49,-1.34 -5.35,0.35 0,0.96 -0.92,3.04 -1.36,2.14 2.08,-0.65 -0.4,-3.99 1.78,-5.21 1.94,-0.57 2.18,-1.6 2.3,-3.5 2.42,-0.82 3.23,-3.53 5.4,-5.02 0.92,-1.36 3.51,-0.53 3.7,-1.93 2.51,-0.36 5.31,-0.33 7.48,-0.01 1.57,-0.63 0.5,-2.03 0.36,-2.23 1.31,-1.57 1.36,1.33 2.5,0.98 1.1,0.96 4.91,-0.68 5.97,2.04 0.36,1.7 -2.95,6.33 1.28,6.08 1.9,0.87 4.09,3.47 5.78,0.3 -0.28,1.18 -0.17,4.33 -0.42,4.42 -1.87,-2.39 -4.17,0.79 -2.27,2.33 0.4,3.64 -0.7,-1.85 -2.69,-0.06 -1.62,2.46 -2.25,-1.46 -3.43,-1.76 -2.43,0.76 -0.07,4.33 -2.78,4.97 -1.02,0.89 -0.72,2.33 -0.22,3.4z M275.63,370.8c0.49,-1.83 2.92,0.14 0.45,0.04l-0.53,0.11 0.08,-0.14 0,0z","name":"Switzerland"},"at":{"path":"m338.89,381.72c-2.92,-0.37 -5.68,-0.8 -8.68,-1.29 -3.41,-0.44 -7.47,0 -10.13,-2.59 -0.49,-1.79 -2.01,-0.99 -0.74,-2.9 -1.54,-1.34 -4.15,1.63 -6.36,0.74 -2.58,-0.56 -3.71,1.14 -4.67,3.02 -0.77,-1.61 -4.07,-0.58 -3.15,-2.45 -2.02,-1.72 -4.43,3.34 -5.34,-0.45 -2.71,0.05 -3.32,-2.5 -1.76,-4.48 -0.11,-1.92 0.65,-1.26 2.03,-1.24 0.77,2.34 2.91,4.54 4.57,1.3 -0.46,-2.13 1.09,-1.56 2.51,-1.62 1.01,3.44 4.52,1.32 6.34,0.3 1.07,-2.1 5.55,-0.39 5.96,-2.32 1.02,0.88 3.01,0.37 3.69,0.59 0.18,3.89 5.07,0.73 2.69,-1.53 -0.2,-1.43 -1.39,-3.39 -2.11,-5.03 1.93,-1.47 5.36,-2.58 5.54,-5.05 1.88,0.9 2.55,-1.98 3.13,-1.73 2,1.9 4.33,0.91 6.33,0.45 0.7,-1.97 2.92,-2.39 2.31,-5.03 1.96,0.92 4.91,0.17 6.97,1.75 1.9,2.39 4.37,-0.77 6.11,0.38 1.43,-0.03 2.77,1.31 1.21,2.94 -0.45,2.79 3.86,4.35 2.35,7.1 1.97,3.48 -4.51,0.08 -4.56,2.79 1.63,1.11 3.27,1.96 0.42,2.95 -0.98,1.81 1.97,4.01 -0.88,5.49 -1.01,1.14 -3.1,1.64 -2.24,3.63 -2.75,-0.79 -4.87,2.27 -7.7,0.89 -1.89,0.31 -2.39,2.61 -3.87,3.38z","name":"Austria"},"cz":{"path":"m335.18,355.05c-3.65,-0.41 -4.96,-4.57 -8.41,-5.66 -1.31,-1.75 -2.19,-2.91 -4.32,-3.66 -1.8,-1.56 -2.64,-3.53 -1.6,-5.57 -0.16,-1.57 -4.02,-3.53 -3.2,-4.17 1.42,3.2 2.44,-2.24 4.26,-2.25 1.35,1.3 3.09,-0.63 3.77,-1.12 1.58,-1.86 4.18,-2.74 6.59,-3.91 1.63,-0.69 3.11,-2.35 4.59,-0.56 2.65,1.13 2.61,-4.69 4.17,-1.06 1.38,1.66 3.64,0.69 5.11,2.36 0.67,1.75 5.33,-1.17 2.84,1.24 -1.67,2.06 2.09,2.81 2.61,4.74 2.09,1.86 2.12,-0.93 3.96,-1.42 0.43,-1.39 -1.9,-2.7 0.65,-1.55 1.23,1.3 3.29,0.96 4.4,0.53 -3.27,0.95 2.17,5.16 3.09,2.65 2.93,0.44 4.53,2.63 6.07,4.63 -2.15,1.71 -4.92,3.04 -5,6.15 -1.22,2.56 -3.35,3.75 -6.24,3.67 -1.85,1 -3.16,2.67 -5.05,0.79 -2.11,1.83 -4.69,0.96 -6.9,-0.42 -1.92,-1.1 -4.07,-0.45 -5.85,-0.93 -0.34,2.31 -2.03,3.48 -2.87,5.34 -1.07,-1.47 -1.28,0.34 -2.66,0.17z m-0.68,-28.45c-2.43,-2.03 2.32,0.24 0,0z","name":"Czech Republic"},"sk":{"path":"m364.44,362.94c-2.39,-2.37 -6.56,-2.63 -7.73,-6.02 -0.46,-2.43 0.4,-6.56 3.64,-6.16 3.23,0.29 4.91,-3 5.9,-5.48 0.17,-1.96 3.95,-5.08 5.19,-3.02 2.43,1.82 3.49,-4.97 4.66,-0.89 1.56,0.35 1.91,0.85 1.91,2.52 2.64,1.02 3.89,-1.84 5.57,-3.22 1.58,-0.07 4.26,1.88 5.1,-0.34 0.99,-1.59 4.74,-1.57 6.47,-0.13 1.28,2.35 6.24,0.73 4.22,4.32 -1.5,2.17 -0.53,7.67 -4.43,6.22 -0.53,-3.18 -3.88,-1.31 -5.83,-0.46 -2.77,-2.02 -4.98,0.68 -5.07,3.51 -1.08,0.67 -2.09,-0.14 -2.29,1.79 -1.29,1.17 -3.96,-2.16 -4.46,1.1 -0.72,2.43 -5.78,-0.07 -5.66,3.66 1.11,2.54 -4.04,1.94 -5.84,2.51 -0.44,0.04 -0.88,0.07 -1.32,0.1z","name":"Slovakia"},"hu":{"path":"m369.77,387.01c-2.75,-0.58 -5.39,-1.37 -7.78,-2.73 -2.27,-2.63 -5.77,-3.91 -7.5,-7.04 -1.21,-1.85 -2.06,-2.65 0.1,-3.74 1.43,-1.97 -1.64,-4.55 1.32,-5.48 2.04,-1.7 -3.3,-3.48 -0.09,-2.71 2.81,1.04 3.86,-1.91 3.11,-3.93 1.93,-1.05 3.43,2.43 5.44,2.58 3.24,-0.18 6.53,-0.68 9.48,-2.09 -2.94,-1.84 0.68,-3.88 2.85,-2.99 1.75,-0.27 1.26,-4.31 3.33,-2 2.26,0.8 3.01,-1.99 4.8,-2.5 0.41,-2.48 1.52,-4.92 4.25,-3.08 1.93,-0.18 4.28,-2.95 5.05,0.14 2.1,1.7 4.8,-1.81 6.38,0.84 2.12,-0.07 1.45,3.23 3.34,1.35 3.46,3.21 -4.18,3.49 -4.55,6.38 0.35,2.87 -2.65,4.72 -2.5,7.52 0.37,3.17 -2.46,5.43 -2.51,8.54 0.01,3.02 -4.16,0.17 -4.1,3.12 -3.14,1.57 -7.09,0.21 -9.73,1.82 -1.24,2.36 -3.12,1.16 -4.53,3 -2.57,0.36 -3.31,3.42 -6.16,3.01z","name":"Hungary"},"lt":{"path":"m397.76,280.99c-1.28,-1.32 -1.63,-4.58 -4.11,-3.7 -1.13,-2.07 -4.01,-0.28 -3.26,-3.14 1.62,-3.48 -2.4,-7.19 -5.64,-5.13 -2.28,0.26 -5.13,-1.48 -6.05,-2.17 -0.51,-2.23 -1.53,-3.51 -2.2,-5.4 -1.37,-2.68 1.24,-5.63 3.5,-7 1.88,-1.44 4.85,-0.65 6.6,-1.37 0.56,-1.26 2.33,2.09 2.82,-0.31 2.06,-0.86 4.97,0.1 6.62,-0.3 1.76,-0.28 3.35,-0.61 3.78,-2.83 1.19,2.4 3.3,3.12 5.7,2.26 2.79,0.52 4.16,3.86 7.04,4.08 1.64,1.42 -0.82,5.15 2.39,4.69 0.41,1.84 -3.75,0.79 -2.82,3.52 -2.05,1.6 -2.93,3.79 -1.88,6.23 -0.12,2.13 -0.68,3.69 -2.75,4.26 -0.43,1.13 -0.04,1.82 -1.97,2.11 -0.51,1.51 -1.38,2.09 -2.67,3.35 -1.72,-1.32 -3.41,0.53 -5.09,0.87z m13.27,-5.67c-0.11,-1.17 -1.77,-2.09 0.31,-1.22 0.43,0.34 0.36,1.19 -0.31,1.22z","name":"Lithuania"},"lv":{"path":"m375.49,257.31c-1.25,-2.79 -1.57,-6.54 -0.19,-9.24 2.63,-2.07 -0.8,-6.67 2.34,-8.6 1.69,0.07 4.11,-4.27 4.4,-1.32 2.44,1.48 4.79,3.19 5.76,5.78 2.55,1.96 6.17,0.07 7.13,-2.71 1.39,-2.75 -1.14,-5.3 -1.86,-7.82 1.34,-1.86 3.66,-3.57 5.64,-3.47 0.08,-0.9 1.63,1.08 2.69,0.67 1.72,0.06 3.13,2.25 4.97,3.22 2.21,0.36 3.53,-2.11 5.72,-1.12 1.76,-0.72 2.78,1.38 4.4,2.33 -0.55,1.5 -1.61,1.77 0.06,2.4 -0.17,1.1 -0.46,3.72 1.44,2.57 1.53,2.66 6.04,5.32 2.65,8.5 -1.42,1.56 -0.49,4.51 -3.48,3.69 -2.28,0.64 -3.94,4.9 -6.51,1.93 -2.03,-2.26 -5.06,-3.95 -7.91,-2.78 -1.1,-1.49 -3.6,-4.26 -4.46,-0.94 -1.47,1.77 -5.35,0.57 -7.87,1.17 -1.87,0.26 -2.16,0.89 -3.44,-0.06 -2.37,1.98 -6.1,0.17 -8.37,2.54 -1.6,0.14 -2,4.17 -3.11,3.25z","name":"Latvia"},"md":{"path":"m454.92,374.42c-0.33,-2.09 -1.86,-4.78 -2.23,-7.4 0.38,-3.56 0.07,-7.47 -2.96,-9.91 -3.2,-3.43 -7.96,-5.44 -9.93,-9.93 -0.24,-2.34 -6.31,-3.34 -2.39,-4.03 2.67,0.33 3.73,-3.48 6.57,-2.14 1.32,0.97 1.83,2.54 3.78,1.18 -0.02,0.82 2.42,2.73 2.56,0.37 1.33,-1.44 3.96,3.6 4.43,1.55 1.2,-1.55 0.65,3.03 1.22,3.93 0.07,2.32 4.57,4.13 4.42,2.59 -0.43,1.81 0.64,4.31 3.01,4.64 2.61,-0.41 1.35,4.32 2.84,4.34 -0.24,1.12 -3.35,-2.1 -2.5,0.78 -1.04,0.18 -2.3,-2.64 -2.02,-0.03 -1.22,0.21 -2.31,-1.71 -3.62,0.36 -1.34,1.85 1.39,3.73 0.77,5.48 -0.5,2.25 -2.95,4.34 -2.23,7.32 -0.82,-0.46 -1.48,0.35 -1.72,0.91z","name":"Moldova"},"ro":{"path":"m414.71,404.53c-2.94,-0.37 2.3,-2.82 -0.89,-3.86 -1.36,-0.38 -6.12,-1.72 -3.63,-3.39 3.62,-1.4 -2.29,-3.42 -3.82,-3.63 -1.25,0.73 1.78,4.33 -1.06,3.46 -0.47,-2.42 -4.24,0.23 -4.49,-2.27 -1.54,0.07 -1.87,0.1 -0.31,-0.74 0.46,-1.41 -2.15,-1.17 -0.71,-2.27 0.07,-4.02 -6.25,-1.24 -6.86,-4.86 0.56,-2.93 -2.25,-4.23 -4.45,-5.46 -1.23,-1.35 3.36,-1.23 3.59,-2.71 4.37,0.45 2.54,-4.6 4.68,-6.55 1.28,-2.95 0.7,-6.3 2.76,-8.97 0.62,-2.75 1.58,-5.21 4.69,-5.79 2.24,-1.25 2.4,-5.8 5.34,-3.67 2.44,-0.6 4.8,0.38 7.17,-0.21 2.51,-1.94 3.7,1.15 5.91,1.18 2.03,-1.31 2.68,-4.39 5.67,-3.96 2.31,-0.28 4.86,-1.95 4.49,-4.32 1.75,-2.97 4.98,-1.01 6.29,1.29 1.93,4.74 7.06,6.72 10.28,10.39 2.93,2.37 2.34,6.09 2.36,9.35 0.53,2.52 1.69,4.86 1.92,7.13 1.82,1.67 4.12,3.74 6.83,2.36 1.37,-1.24 4.51,-5.35 6.51,-2.84 1.18,1.97 2.1,5.63 -1.2,6.33 -1.85,1.04 -1.42,-3.67 -3.88,-1.61 -1.51,1.92 1.84,2.51 -0.11,4.51 -0.61,2.57 2.04,-0.86 0.82,1.98 -2.28,2.63 -0.38,5.59 -0.04,8.5 -1.15,2.51 -5.2,-0 -6.02,-1.11 -1.09,1.46 -1.67,-0.92 -3.54,0.54 -1.82,0.49 -3.31,-1.46 -5.44,0.01 -3.08,1.35 -6.52,2.81 -8.17,5.95 -1.31,3.55 -4.97,3.29 -8.01,2.77 -2.75,-0.48 -4.92,1.71 -7.44,1.75 -2.74,-0.25 -5.83,-1.37 -8.31,0.42l-0.52,0.24 -0.43,0.06 0,0z","name":"Romania"},"bg":{"path":"m419.98,434.43c-0.77,-1.6 0.33,-5.03 -1.67,-6.74 -1.14,-2.34 -7.05,-2.04 -4.41,-5.19 -0.49,-1.45 -2.46,-4.37 -1,-5.23 2.16,0.54 4.75,-3.78 2.92,-5.59 -2.57,-1.55 -5.66,-2.78 -5.98,-6.24 -0.97,-2.47 2.74,-1.99 1.69,-4.32 2.08,-0.06 3.2,1.11 1.22,2.59 -0.15,3.28 3.83,0.6 5.65,0.71 2.58,-0.64 5.13,0.94 7.65,0.08 2.61,-1.18 5.46,-2.28 8.27,-1.01 3.32,0.37 5.6,-2.51 6.93,-5.13 2.16,-2.35 5.29,-3.61 8.27,-4.56 1.69,0.75 3.92,0.92 5.2,0.32 0.77,1.61 2.46,-1.39 3.17,1.07 1.58,2.18 6.09,-1.71 5.26,2.45 0.21,2.63 -4.48,0.38 -4.02,3.94 -1.88,1.85 1.39,5.32 -0.17,7.14 -1.24,1.25 -1.7,3.03 -2.93,4.26 0.82,1.66 4.27,-0.37 3.64,2.02 1.44,0.86 3.71,1.89 1.23,2.18 -1.9,3.08 -4.18,-1.08 -6.49,0.5 -1.52,1.95 -4.37,1.58 -4.82,4.55 -1.37,1.04 -4.43,1.49 -2.91,4.13 3.08,3.26 -3.78,2.7 -5.13,4.68 -1.95,0.62 -4.22,-2.41 -5.93,-0.29 -2.04,-2.63 -5.18,-1.43 -7.46,0.15 -2.06,2.52 -5.54,1.17 -7.76,3.47l-0.43,0.06 0,0z","name":"Bulgaria"},"al":{"path":"m396.5,458.88c-2.16,0.08 -0.81,-2.55 -2.74,-3.41 -0.91,-2.13 -5.81,-2.06 -5.48,-3.81 2.36,-1.04 -1.62,-3.19 -0.48,-4.99 0.36,-1.26 2.66,-2.2 0.57,-3.3 1.39,-2.49 -3.57,-5.96 0.77,-6.52 2.37,-0.03 -1.92,-0.89 -0.55,-2.51 -0.14,-2.15 -3.24,-0.23 -2.21,-2.9 -1.48,-2.28 0.07,-4.41 1.36,-6.71 1.01,3.42 4.23,-2.13 4.66,1.78 1.21,1.69 4.6,1.07 3.88,4.25 -0.33,2.87 -0.02,5.6 0.51,8.19 0.21,1.77 2.38,5.51 4.15,4.74 1.69,-0.32 2.5,4.45 0.05,5.02 -0.86,1.75 -0.27,5.37 -3.24,5.56 -2.01,1.26 1.3,2.75 -0.81,3.98l-0.23,0.5 -0.19,0.12 0,0z","name":"Albania"},"ee":{"path":"m378.18,234.33c-0.29,-1.42 0.77,-0.85 0,0z m29.34,-1.46c-2.55,-0.18 -3.15,-3.15 -5.39,-3.23 -0.21,-1.76 -1.21,1.44 -2.27,-0.65 -2.12,-1.63 -4.52,1.21 -6.27,2.48 -1.26,-0.67 1.67,-5.98 -1.81,-5.74 -1.1,1.92 -1.82,2.36 -3.83,1.3 -0.08,-2.54 -3.43,-2.95 -2.01,-5.67 0.96,-2.03 -3.8,-2.6 -0.62,-3.95 1.35,-0.61 4.23,-0.97 2.3,-2.67 2.82,-0.9 4.5,-2.4 7.47,-2.41 1.66,-0.56 1.5,-2.75 3.42,-1.67 0.91,-1.72 4.64,0.07 6.63,-0.66 2.13,-0.1 4.26,0.22 6.03,-1.29 -1.43,2.67 -1.02,5.84 -2.24,8.62 2.11,2.2 1.2,5.64 3.15,7.83 0.24,0.52 1.89,2.24 1.35,2.38 -0.73,0.83 -0.81,2.27 -1.35,2.68 1.66,2.85 -2.28,0.25 -2.89,1.26 -0.29,0.68 -0.83,1.4 -1.65,1.38z m-28.89,-1.28c-1.29,-0.43 -2.59,-1.4 -0.92,-2.29 -0.22,-0.67 0.59,-1.5 0.99,-0.78 -0.53,-2.4 4.69,-3.37 4.19,-1.27 0.07,2.48 -3,2.5 -4.26,4.33z m1.02,-7.14c-0.54,-0.34 -0.96,-2.14 -1.01,-2.27 0.8,-1.29 0.79,-1.32 2,-0.55 1.89,-0.4 1.35,1.06 -0.17,0.69 0.83,0.84 0.55,2.1 -0.81,2.14z","name":"Estonia"},"lb":{"path":"m557.2,501.39c0.58,-2.8 0.32,-5.88 1.17,-8.53 -0.92,-2.02 1.77,-3.87 0.09,-5.88 -0.28,-2.6 2.65,-3.83 2.23,-6.01 1.03,-0.93 3.35,-2.1 2.42,0.09 1.64,0.57 3.96,0.89 3.49,3.25 -1.11,1.34 -2.61,3.51 -1.84,4.51 -2.48,0.69 -2.89,3.8 -1.53,5.08 -0.04,2.15 -2.43,3.34 -3.12,4.26 0.57,1.87 -1.28,3.1 -2.91,3.25z","name":"Lebanon"},"ad":{"path":"m225.99,427.08c-4.4,2.06 -0.81,-5.33 0.49,-0.98l-0.2,0.53 -0.29,0.45z","name":"Andorra"},"sm":{"path":"m321.66,413.68c0.71,-2.83 1.59,1.21 0,0z","name":"San Marino"},"mc":{"path":"m273.92,416.64c-2.8,-1.65 2.23,-1.64 0.39,-0.13l-0.39,0.13 0,0z","name":"Monaco"},"lu":{"path":"m268.7,344.38c-1.34,-0.37 0.48,-2.79 -0.9,-3.99 -1.47,-1.94 2.76,-5.38 1.98,-1.49 0.37,1.78 4.79,2.33 1.84,4.09 -0.47,1.66 -1.49,1.22 -2.93,1.39z","name":"Luxembourg"},"fr":{"path":"m292.72,444.55c-0.12,-2 -3.86,-0.94 -2.75,-2.99 -2.34,-0.62 -0.11,-2.51 0.75,-3.57 0.35,-0.55 -3.76,1.07 -1.24,-0.63 0.32,-1.34 -2.6,-2.05 -0.51,-3.01 -0.25,-1.14 -1.13,-1.51 -0.02,-1.71 -0.89,-2.66 3.14,-1.71 3.48,-3.51 1.94,0.96 2.98,-0.2 2.33,-2.11 1.79,-2.18 -0.99,3.51 1.02,4.43 1.2,3.29 -2.09,6.35 -1.33,9.73 -0.95,0.89 -1.15,2.64 -1.75,3.36z m-58.87,-15.16c-2.27,-2.01 -5.59,-0.28 -7.2,-2.87 1.48,-2.11 -2.14,-2.13 -2.92,-2.19 -1.78,-1.34 -3.82,-2.36 -5.67,-3.53 -1.54,0.58 -1.53,2.27 -3.51,1.46 -1.54,0.07 -2.66,-0.59 -3.93,-0.35 -0.8,-2.33 -2.93,-1.69 -4.53,-2.09 -1.06,-2 -2.81,-3.32 -5.06,-3.18 -1.57,-1.15 -1.33,-1.7 -1.45,-3.5 -1.23,-0.24 -3.44,-0.96 -1.02,-1.55 3.04,-3.75 2.96,-8.84 4.5,-13.21 0.85,-1.4 2.99,0.68 2.08,-1.85 -1.2,-1.06 -2.14,-0.84 -1.15,-2.81 1.1,-1.59 0.63,-5.99 2.35,-6.1 1.89,1.55 0.82,3.87 1.88,5.79 -0.05,2.01 2.7,3.12 1.93,0.38 -2.25,-2.11 -0.08,-5.11 -2.23,-7.23 -1.52,-1.07 -0.74,-1.21 -0.52,-2.39 -2.12,-1.87 0.87,-2.79 -0.3,-5.08 -0.91,-0.78 2.06,-4.15 0.31,-2.92 -1.7,1.58 -2.8,-0.99 -4.34,-1.54 -1.66,-0.48 -1.34,-4.04 -3.07,-5.27 1.45,-1.37 2.03,-3.5 -0.17,-4.21 -1.28,-1.38 -1.85,-1.7 -0.64,-3.42 1.28,-3.05 -5.85,-0.88 -2.14,-2.3 -0.4,-2.26 -4.49,0.28 -3.4,-2.31 -0.36,-2.67 -3.56,0.62 -4,-1.74 -2.28,-0.09 -2.42,-4.2 -4.81,-1.84 -1.78,1.57 -0.33,-2.39 -2.37,-2.56 1.59,0.62 3.87,-0.51 1.92,-2.13 1.84,1.1 2.88,-0.7 0.65,-1.01 0.13,0.05 1.59,-2.28 -0.46,-1.5 -1.34,1.45 -4.19,-0.07 -1.73,-1.25 1.3,-0.76 2.79,-0.81 2.95,-0 1.4,-0.85 2.87,-0.97 3.66,0.09 0.65,-1.02 3.21,1.35 3.19,-1.26 2.43,-1.62 2.22,2.03 2.47,2.06 1.69,-2.75 1.86,2.19 3.17,3.11 1.26,-0.74 3.83,-3.16 3.73,-0.14 1.62,2.63 2.82,-1.65 4.78,0.11 0.83,-0.47 4.32,1.06 3.36,-0.07 -1.65,-1.65 -2.42,-4.02 -1.35,-6.19 0.76,-2.4 -2.42,-4.6 -1.19,-7.04 1.21,1.81 5.2,-0.98 3.31,2.03 -0.19,2.43 1.93,3.76 3.68,2.84 2.59,0.56 5.12,3.56 7.68,1.11 2.16,-0.17 1.32,-1.39 0.53,-2.64 1.54,-3 5.41,-2.03 8.05,-3.16 1.81,-0.67 4.58,-1.88 5.31,-3.4 -1.75,-1.03 0.04,-4.18 -0.3,-6.15 0.44,-3.1 4.2,-2.36 6.44,-2.8 0.98,0.77 1.49,6.24 4.58,4.17 1.46,-0.35 0.7,4.82 3.67,3.62 -0.14,3.07 3.12,1.53 4.18,2.82 -0.64,1.44 -0.56,1.83 -0.25,2.78 -0.88,2.67 3.93,2.4 4.83,0.49 0.88,1.69 -1.1,3.55 1.66,3.61 2.55,0.29 2.49,4.49 5.21,3.37 2.65,1.52 6.43,-0.33 7.5,3.53 0.45,0.9 2.96,3.41 2.01,0.96 0.54,-1.16 0.79,1.42 0.5,1.49 1.47,-0.3 3.92,-1.81 4.53,0.32 1.92,0.28 7.08,0.84 3.22,2.94 -2.39,2.02 -1.66,5.55 -3.51,7.88 -0.4,2.45 -0.29,5.21 -1.25,7.67 -1.85,0.33 -4.65,-1.22 -4.94,2.33 0.2,1.24 -1.59,3.49 -3.64,4.12 -0.97,0.48 0.4,3.01 -1.75,3.44 -3.21,1.4 -0.53,4.69 -2.87,6.5 1.14,2.08 4.46,-0.29 3.63,-2.44 2.64,-1.79 4.27,0.65 3.32,3.02 0.97,1.33 2.7,2.42 0.16,3.24 -1.7,2.56 4.01,4.8 1.9,7.11 -0.78,1.84 -6.17,0.54 -3.47,3.57 1.68,1.38 4.39,3.16 1.43,4.85 -1.24,3.13 2.12,7 5.6,6.15 2.64,-0.69 -0.62,4.28 -2,4.64 -1.17,-0.72 -4.03,-3.03 -4.38,0.05 0.55,1.28 1.71,2.84 -0.72,3.26 -2.25,0.54 -0.87,3.61 -3.15,2.9 -1.62,1.27 -2.66,0.82 -4.12,0.04 -1.35,1.82 -1.33,-1.1 -3.38,-0.87 -2.84,0.75 -0.64,-3.44 -1.53,-2.84 -0.63,0.89 -3.09,1.3 -1.09,0.56 1.49,-2.74 -3.49,-2.8 -2.54,-0.31 -2.24,0.5 -1.46,-2.79 -1.57,-3.36 -1.08,1.05 -1.96,2.65 -0.52,3.91 -1.04,-0.28 -1.31,-2.83 -3.36,-2.08 -2.5,-1.7 -5.52,-1.71 -6.96,1.2 -2.68,0.79 -5.03,2.02 -5.69,4.77 0.13,1.89 -0.47,3.75 0.65,5.49 -1.42,-0.84 -3.32,-0.38 -4.33,0.88z","name":"France"},"li":{"path":"m296.51,373.48c1.45,1.4 -0.83,3.11 -0.11,0.58 0.04,-0.19 0.08,-0.38 0.11,-0.58z","name":"Liechtenstein"},"nl":{"path":"m269.04,328.72c-2.4,0.87 -0.84,-4.47 0.3,-2.01 0.8,0.23 0,1.75 -0.3,2.01z m-0.07,-3.78c0.6,-3.32 -5.02,-1.6 -5.27,-4.51 -0.12,-2.74 -3.14,1.24 -2.06,-1.29 -0.99,-0.79 -2.22,1.2 -3.22,-0.45 -0.9,0.27 -1.14,2.68 -1.08,0.81 0.68,-2.17 -1.32,-2.87 -3.53,-3.17 2.34,0.11 2.58,-2.07 3,-3.35 2.89,-2.17 4.59,-5.57 4.61,-9.18 -0.19,-3.29 4.06,-0.89 5.3,-3.43 1.14,-2.76 4.56,-2.87 7.04,-3.65 2.21,-0.91 4.28,0.51 5.07,2.25 2.56,1.19 -1.21,4.26 -0.45,6.54 -1.09,0.31 -2.87,-0.17 -2.83,1.81 -1.46,0.58 -1.58,0.91 0.09,0.93 3.35,-0.05 2.57,4.59 -0.38,4.58 -2.35,0.19 2.62,1.25 -0.12,2.19 -2.05,1.07 -3.43,-1.35 -5.33,0.59 -1.38,2.19 2.97,4.39 0.94,6.8 -0.8,0.77 -1.72,1.2 -0.27,1.66 -0.44,0.36 -0.82,1.02 -1.51,0.87z m-14.99,-3c-0.33,-1.2 -5.07,-0.99 -2.8,-1.87 1.14,1.13 2.85,1.22 3.93,0.81 -0.06,0.56 -0.57,1.04 -1.13,1.06z m0.03,-2.7c-1.37,-0.05 -4.02,-1.94 -1,-1.43 0.49,-0.33 2.23,1.73 1,1.43z","name":"Netherlands"},"ba":{"path":"m376.75,425.9c-1.98,-1.6 -4.83,-1.93 -6.41,-4.05 -1.67,0.65 -0.52,0.38 -0.54,-0.48 -1.09,-2.31 -4.84,-2.74 -4.68,-5.7 -3.06,-0.33 -4.09,-3.71 -6.36,-5.29 -1.63,-1.9 -4.06,-2.19 -3.82,-4.87 -1.04,-2.44 -3.06,-3.46 -4.21,-5.63 -0.7,-2.04 0.84,-4.87 2.73,-2.36 1.15,1.84 2.68,1.49 3.04,-0.59 0.75,-2.51 2.6,0.54 3.87,-1.57 1.61,1.11 3.76,0.32 5.58,0.98 1.67,0.69 2.8,0.63 3.98,-0.64 1.28,0.32 2.43,1.79 1.94,-0.33 2.34,0.41 3.8,0.76 5.26,2.77 1.51,0.59 4.58,-2.46 3.33,0.9 -1.48,2.62 -1.55,6.27 2.2,6.4 -0.16,1.48 3,1.5 0.7,2.04 -2.41,-1.63 -1.77,2 -0.04,2.77 1.22,1.2 1.32,2.1 -0.54,1.97 -0.8,1.43 -2.82,1.15 -3.55,0.9 0.15,1.26 1.77,2.85 -0.32,2.67 -1.22,1.98 -1.74,4.24 -3.03,5.92 0.2,1.48 1.25,2.79 0.88,4.2z","name":"Bosnia and Herzegovina"},"si":{"path":"m332.96,393.93c-2.25,0.07 3.69,-1.78 0.33,-3.25 -2.05,-0.05 -1.39,-3.19 -2.18,-3.5 2.21,-1.77 -0.2,-2.6 -1.36,-3.11 1.58,-3.35 4.85,-1.64 7.7,-1.58 3.3,1.9 3.73,-4.65 7.02,-2.86 2.43,0.1 4.45,-1.78 6.8,-1.33 -0.07,-1.25 0.26,-3.28 1.79,-1.82 0.58,1.34 2.29,2.96 -0.11,2.97 0.07,3.17 -6.44,2.43 -4.97,6.04 0.89,1.87 0.62,3.86 -1.85,3.13 -2.37,0.85 1.33,6.35 -2.15,4.17 -1.76,0.02 -2.78,0.57 -3.81,-1.48 -1.83,-1 -1.59,2.92 -3.88,1.76 -1.41,-0.46 -2.2,0.65 -3.34,0.85z","name":"Slovenia"},"mk":{"path":"m403.18,443.19c-1.28,-0.84 -1.77,-0.72 -3.14,-0.4 -2.27,-2.33 -2.73,-5.58 -2.85,-8.64 -1.26,-2.44 2.39,-0.6 1.33,-3.13 0.23,-2.42 3.43,-3.85 5.06,-1.8 1.38,1.18 -1.35,-3.28 1.33,-2.73 2.83,0.6 4.67,-2.89 7.49,-1.79 1.51,2.18 4.77,1.95 5.79,4.72 1.29,2.63 0.37,4.95 -1.12,7.01 -1.05,2.69 -5.33,0.11 -7.05,2.7 -0.97,2.88 -4.09,3.39 -6.84,4.04z","name":"Macedonia"},"hr":{"path":"m375.93,426.49c-1.17,-0.64 -1.03,-0.77 0,0z m-5.08,-2.9c-0.73,0.27 -1.25,-2.08 0,0z m-2.28,-1.81c-3.23,-1.04 -5.06,-4.7 -8.53,-5.08 -1.74,-1.23 -4.13,-1.36 -6.19,-0.38 -0.54,-3.7 -5.51,-3.9 -7.37,-6.92 -1.68,-2.86 2.16,-0.38 2.91,-1.43 -1.18,-2.05 -5.06,-2.05 -5.62,-5.05 0.07,-2.45 -0.12,-5.23 -2.77,-6.41 -1.46,-3.02 -5.35,-1.33 -4.75,1.8 -0.1,1.22 -1.81,1.15 -1.78,3.18 -0.42,-0.02 -2.43,-3.25 -2.8,-4.77 0.5,-1.41 -1.33,-2.59 0.97,-1.85 1.93,-0.05 3.32,-1.26 5.49,-0.87 1.75,-0.28 1.19,-2.99 2.55,-0.54 1.83,1.65 2.98,0.1 5.14,0.7 1.63,-0.59 0.6,-2.35 1.05,-3.41 -2.13,-1.84 3.84,-0.57 2.93,-3.42 -1.1,-1.62 -1.88,-3.53 0.82,-4.04 1.16,-1.26 3.54,-0.9 3.14,-3.3 3.59,0.79 6.21,3.61 8.62,6.19 2.91,-0.18 5.33,2.55 8.31,1.69 2.32,0.95 5.06,-5.2 5.33,-0.4 0.15,1.9 1.2,2.64 1.4,4.46 1.55,0.76 2.24,0.37 1.04,2.01 -0.17,1.69 1.08,1.86 -0.44,2.99 -1.42,0.96 -2.53,-3.66 -4.34,-2.06 -2.98,-1.4 -5.14,1.63 -8.13,0.38 -2.22,0.17 -4.52,-1.28 -6.44,-0.34 -1.8,-0.84 -3.54,0.72 -3.99,2.64 -1.51,-1.59 -4.97,-3.78 -5.35,0.02 -1.16,3.92 2.99,5.58 4.38,8.58 -0.13,1.41 -1.05,2.05 0.83,2.59 2.9,1.5 4.8,4.21 6.98,6.53 2.65,1.59 3.98,4.49 6.78,6.28l-0.16,0.23 0,0z","name":"Croatia"},"dk":{"path":"m311.37,281.37c-1.81,-0.13 -3.63,-2.95 -0.99,-2.75 0.71,0.89 2.21,0.72 1.2,1.27 0.93,0.68 0.95,1.07 -0.21,1.48z m2.12,-1.04c1.35,-0.18 -0.34,1.13 0,0z m0.84,-0.24c-0.07,-1 -2.35,-2.59 0.16,-1.62 2.08,0.28 -0.51,1.71 -0.16,1.62z m-17.99,-0.84c-2.31,-0.88 -6.15,-0.22 -4.5,-3.71 0.81,-2.84 -1.69,-4.3 -3.84,-4.7 -1.19,-2.12 0.77,-2.92 1.79,-2.7 1.1,-1.9 -0.71,-4.04 -1.69,-4.68 0.35,-1.37 0.2,-5.41 0.68,-4.97 1.59,3.78 6.34,-5.25 4.96,-0.56 0.24,2.86 4.45,-0.07 2.01,-1.61 0.04,-2.03 -0.06,-3.57 2.27,-2.05 0.18,-1.79 3.93,-0.45 2.6,-2.4 -2.36,-1.07 -4.97,1.4 -7.44,0.51 -0.9,0.41 -2.06,0.6 -1.03,-0.46 2.89,0.74 6.43,-0.56 7.07,-3.76 0.42,-1.7 4.2,-3.59 3.75,-0.9 2.01,1.66 -0.21,4.73 -1.55,6.01 0.4,0.87 0.32,2.52 0.39,3.1 -1.16,1.34 2.36,4.31 4.12,3.09 1.32,1.67 -1.85,5.56 -2.69,2.65 -3.21,0.21 -0.77,4.74 -2.69,6.35 -0.74,1.02 -5.24,-0.82 -2.77,1.37 1.61,1.85 3.89,1.32 5.37,0.39 1.04,1.32 2.66,0.54 1.88,1.61 2.2,1.44 0.71,6.32 -1.89,3.8 -0.99,-0.9 -2.97,-2.42 -3.55,-4.38 -0.8,-2.14 -4.39,1.02 -3.28,1.06 2.19,-0.86 -0.04,1.87 1.38,2.68 -1.87,1.01 -1.25,3.06 -0.58,3.35 -0.3,0.27 -0.55,0.59 -0.78,0.92z m18.96,-2.29c-1.92,-0.02 -1.04,-3.7 -3.92,-2.81 -3.51,-0.09 0.22,-3.64 -2.76,-5.02 -1.79,-1.21 3.2,0.15 3.13,-2.28 0.04,-2.46 4.91,0.23 1.92,1.9 1.06,2.45 3.33,-0.76 2,-2.36 -0.51,-1.34 -2.25,-2.02 0.21,-1.96 2.33,-0.37 1.21,1.23 1.29,2.13 2.22,2.03 -1.98,3.78 -1.88,4.86 2.05,0.87 2.04,2.76 -0.28,2.66 -0.97,0.83 0.11,2.08 0.29,2.88z m-25.23,-19.54c-1.89,-1.51 1.09,-5.6 1.21,-4.99 -1.52,1.21 -1.11,3.3 -1.21,4.99z","name":"Denmark"},"ru":{"path":"m558.98,364.3c-2.56,-0.91 -4.97,-2.14 -7.36,-3.43 -2.39,-1.15 -4.94,-2.06 -7.59,-2.35 -2.81,2.28 -5.5,-0.94 -8.06,-1.85 -1.23,0.3 0.78,2.15 -1.52,1.8 -2.42,-0.25 -3.69,-3.69 -6.4,-2.82 -1.31,0.16 -4.41,0.18 -1.55,-0.66 1.64,-0.7 0.81,-3.34 -0.75,-1.74 0.37,-1.63 2.93,0.94 3.87,-1 1.25,-0.31 2.74,-1.24 3.63,-1.06 1.16,-2.32 -3.44,-3.39 -1.08,-5.92 0.57,-0.81 -0.94,-4.08 0.12,-2.72 0.39,2.37 2.24,1.11 1.25,-0.78 -1.26,-3.41 3.86,0.53 3.04,-2.81 -1.97,-1.81 -4.99,-1.7 -7.55,-2.54 -2.06,-0.94 2.06,-1.24 1.86,-3.16 2.06,1.7 4.87,-1.76 1.32,-1.4 -0.21,-1.02 3.11,-2.69 3.56,-4.64 3.16,0.27 3.03,-5.1 -0.28,-4.48 -2.62,0.21 -2.08,3.91 -4.95,4.14 -2.31,1.85 -0.59,-0.97 -1.26,-1.15 -2.27,0.02 -1.28,-3.82 0.48,-4.34 1.4,-2.13 0.73,-5.08 4.3,-4.68 2.91,0.1 4.24,-2.66 2.99,-5.05 -0.44,-0.81 1.31,-4.54 -0.5,-3.12 -0.89,0.38 -1.08,-3.79 -3.06,-2.28 -2.61,-1.85 3.34,-2.5 1.03,-4.59 -1.03,0.14 -4.3,0.91 -2.02,-0.74 1.96,-2.14 1.02,-4.53 -0.68,-6.4 1.16,-2.59 -2.93,-0.35 -3.64,0.61 0.41,-2.95 -3.61,-0.32 -4.74,-2.01 -1.3,0.69 -2.17,2.73 -3.44,0.57 -1.62,0.46 -2.9,0.42 -4.52,-0.03 -1.18,0.97 0.35,3.57 -1.91,1.94 -2.66,-0.03 -3.84,-4.48 -6.19,-3.24 -2.12,0.99 -3.16,6.03 -6.01,3.79 -0.55,1.88 -3.23,-1.75 -4.12,0.93 -2.26,2.15 -4.17,-0.6 -4.14,-2.64 -1.31,-0.74 -1.67,-2.47 -1.76,-3.17 -1.84,0.68 -2.55,-1.54 -3.04,-1.81 -1.53,1.29 -5.9,2.64 -6.27,0.53 -0.46,-1.43 -3.35,-2.71 -0.58,-3.43 0.87,-2.91 -3.85,-2.55 -4.29,-5.27 -1.34,-1.28 -2.82,-2.7 -4.07,-0.62 -2.6,-1.29 -3.34,1.16 -4.86,2.57 -2.29,-0.64 -4.88,0.47 -3.99,3.28 -1.64,3.09 -5.33,-1.16 -5.28,-3.38 0.29,-1.54 -1.99,-0.85 -0.93,-2.73 -1.04,-1.23 -5.06,-2.53 -2.44,-4.58 2.85,1.31 6.86,-0.11 6.98,-3.34 2.36,-1.51 -0.16,-3.89 -1.6,-4.2 -0.58,-2.91 -4.71,-0.88 -5.61,-1.07 0.65,-2.69 -1.62,-3.41 -3.71,-3.4 -2.11,-1.16 -3.32,-2.8 -3.81,-4.83 -2.42,0.17 -3.41,-1.67 -2.18,-3.83 -0.02,-1.71 -2.9,-2.44 -1.99,-4.84 -0.01,-1.79 -0.45,-2.87 -2.15,-2.08 -2.12,-2.07 -5.85,-2.66 -7.51,0.31 -0.95,2.92 -2.17,-0.33 -1.92,-1.55 -1.94,-2.34 -4.43,2.65 -5.64,-0.22 -1.71,0.04 -3.09,1.26 -3.28,-1.31 -0.9,-2.65 -2.85,-5.01 -4.71,-6.53 -1.83,-1.02 1.04,-5.27 -2.45,-5.76 -1.67,-0.51 -0.04,-2.71 -2.19,-1.57 0.05,-1.42 0.26,-2.99 1.68,-3.72 -0.54,-0.99 -1.34,-2.16 -1.45,-2.96 -2.84,-0.69 -1.01,-4.26 -2.77,-5.86 -2.08,-2.24 0.85,-4.53 0.39,-6.92 -1.01,-2.41 3.22,-2.6 0.55,-4.16 -0.83,-1.3 -2.35,-4.31 0.18,-2.28 1.51,-0.56 0.02,-3.79 2.55,-2.16 2.03,-0.4 0.55,-4.34 3.6,-3.39 1.61,0.41 6.06,0.64 4.72,-1.87 -2.47,0.38 -3.46,-3.31 -5.66,-1.7 -1.73,1.59 -3.35,0.22 -4.28,-0.75 -2.83,1.04 -0.5,-5.97 -3.43,-3.33 -0.79,1.95 -3.72,3.09 -1.67,0.48 4.94,-7.07 7.08,-15.55 9.98,-23.55 0.44,-3.03 2.51,-7.51 -0.31,-9.8 -2.38,-1.89 -5.29,-2.93 -7.96,-4.32 -3.88,-1.06 2.38,-6.07 -1.12,-8.02 -2.45,-0.36 -4.96,-1.94 -3.33,-4.47 -1.48,-1.21 -6.02,-2.28 -3.05,-4.86 0.42,-0.7 -3.23,-0.64 -2.08,-2.79 0.39,-2.06 -0.85,-2.94 1.09,-3.89 -0.82,-2.4 -2.73,-4.51 -4.14,-6.68 -1.51,-2.32 -3.78,-4.06 -5.41,-6.21 -0.98,-3.34 2.21,-6.3 1.62,-9.59 -0.91,-2.31 -3.95,-2.73 -4.86,-5.04 -3.1,0.98 -6.11,-2.82 -4.58,-5.63 1.26,-2.13 -3.52,-2.39 -0.66,-3.49 1.51,-2.49 0.64,-5.59 3.12,-7.72 -0.6,-2.56 3.46,0.62 3.16,-2.41 -2.11,-2.17 1.85,-1.54 2.99,-1.35 2.03,1.63 4.11,1.29 6.52,0.08 0.37,0.23 -0.76,2.57 1.13,2.81 -1.22,0.77 -1.32,4.65 0.4,2.88 0.2,-1.73 1.36,-3.42 1.9,-5.04 3.21,0.08 6.07,-1.95 9.29,-1.34 2.75,0.76 5.58,1.26 8.28,2.2 2.14,0.82 4.03,2.32 6.18,3.01 2,-1.35 5.54,1.61 7.21,-0.07 2.23,0.7 3.31,3.46 5.54,1.69 1.16,1.01 0.65,2.43 2.18,2.82 1.01,2.1 3.8,2.21 3.29,5.21 -0.09,3.44 0.15,7.2 -2.11,10.07 -2.26,3.09 -6,5.79 -10.02,4.97 -2.84,-0.74 -5.34,0.99 -8.08,1.16 -2.01,0.97 -5.49,-2.15 -6.54,-0.13 -1.33,0.97 -2.24,-0.89 -2.89,-1.46 -1,2.57 -7.21,1.52 -6.06,-1.62 -0.53,-0.64 -4.07,0.19 -5.44,0.48 -1.33,1.22 -0,2.41 1.25,1.32 2.16,-0.38 0.62,2.19 3.06,2.74 1.23,1.53 6.57,0.25 5.42,2.51 -1.91,3.1 2.22,0.91 3.81,1.72 2.09,0.58 5.78,2.19 4.56,4.13 2.75,1.59 0.23,3.96 -0.48,5.25 2.3,-0.18 4.43,1.99 4.35,4.27 2,-0.84 0.78,1.8 1.68,2.47 0.1,3.23 4.49,3.53 6.69,2.22 2.28,0.22 3.06,3.83 6.02,2.68 3.14,0.7 6.51,-0.4 7.17,-3.81 0.24,-2.71 -4.02,-6.69 -5.49,-3.3 -2.65,0.34 -5.44,-2.93 -6.7,-4.13 2.45,-0.62 0.68,-2.65 0.87,-3.74 2.98,-0.53 5.18,2.7 8.25,1.24 2.42,-0.59 5.57,1.81 7.6,-0.26 0.47,-1.42 5.9,0.3 3.69,-2.76 -1.12,-2.61 -3.65,-4.39 -6.37,-5.3 -3.26,-1.55 -1.48,-4.68 -0.67,-7 0.13,-2.98 3,-4.72 3.48,-7.44 -0.29,-1.95 -0.01,-6.22 2.42,-3.58 1.94,-2.25 5.82,-1.29 7.83,0.68 1.2,2.1 3.32,0.53 1.22,-1.06 -2.48,-1.87 -1.81,-4.87 -2.24,-7.47 -1.88,-1.57 -2.53,-5.38 -5.87,-5.07 -3.66,0.72 -1.05,-5.18 -3.4,-6.67 -1.19,-0.92 0.46,-3.75 -1.48,-3.55 -1.01,-2.39 -5.64,-2.94 -6.17,-3.55 2.64,0.97 4.98,-0.76 6.95,-2.52 2.55,-2.21 4.69,1.32 7.17,1.82 2.66,0.14 2.98,2.58 0.58,3.55 -1.44,1.01 -3.37,2.5 -1.86,4.15 -2.05,2.82 1.45,5.04 4.18,4.46 2.24,0.66 3.9,4.74 5.89,0.83 -0.45,2.74 1.7,0.82 1.6,-0.76 0.67,-1.92 4.97,-2.44 2.12,-4.7 -0.88,-2.08 -0.93,-5.08 -2.83,-6.29 1.51,-0.41 1.74,-3.36 4.33,-3.14 0.74,-1.52 -4.26,-0.47 -1.65,-2.01 1.38,-2.03 1.95,-4.13 2.25,-6.48 -0.71,-3 2.32,-4.04 2.61,-6.78 0.79,-1.07 0.87,-3.3 2.02,-0.85 0.37,3.39 3.79,-1.54 1.28,-2.71 -2.87,-0.55 -1.44,-3.38 -0.47,-5.41 0.59,0.58 1.75,-1.54 1.49,0.66 0.07,2.26 4.9,2.03 2.07,4.51 -3.06,1.89 2.52,2.73 3.16,0.29 0.8,-0.58 2.28,-0.85 1.45,-2.12 2.18,1.11 3.08,-1.11 1.14,-2.24 -0.63,-3.15 1.27,-6.2 4.04,-7.12 3.15,-0.33 1.76,-4.5 2.46,-6.7 2.68,1.91 1.44,-1.23 0.17,-1.57 -0.24,-1.73 3.07,-1.64 3.49,-0.99 -0.52,3.68 4.93,5.45 5.98,1.6 -0.74,-2.19 -4.02,-2.52 -1.51,-4.94 1.37,-2.71 -0.97,-5.14 -3.64,-5.47 -2.06,-0.69 -6.98,-0.83 -4,-3.86 -2.84,-2.24 1.77,-2.66 3.14,-4.1 2.67,-3.27 6.84,-5.01 10.97,-5.41 2.08,0.66 3.04,-0.42 5.04,-0.78 3.26,-0.69 5.53,-2.7 8.88,-1.89 1.83,0.09 3.72,-0.92 5.18,-0.23 3.3,-0.51 -0.59,-3.78 0.31,-4.05 7.13,0.01 14.26,-0.01 21.38,0.01 2.09,0.14 -2,3.01 0.93,2.93 1.33,0.5 2.97,0.39 1.78,1.28 0.04,1.2 -0.09,5.95 -1.36,3.75 0.88,-1.97 -1.47,-3.03 -1.4,-0.65 -0.13,1.49 -3.77,0.21 -3.69,2.55 -3.37,1.5 0.23,4.73 2.72,4.05 3.82,-0.71 6.21,-3.84 8.09,-6.94 1.84,-0.32 4.98,-2.24 2.66,-4.31C557.34,3.94 555.66,1.55 558.62,2.18c40.17,0 80.35,0 120.52,0 0,32.42 0,64.83 0,97.25 -2.09,0.36 -2.95,2.3 -1.54,3.74 -2.44,-1.53 -2.16,1.82 -2.17,2.03 -1.83,-0.06 -0.41,-2.79 -2.86,-3.06 -0.55,-1.54 -1.56,-2.65 -3.54,-1.77 -1.52,-1.23 -4.42,-2.86 -6,-3.08 -2.3,1.54 0.4,6.71 -3.71,5.55 -1.63,0.21 -3.74,1.9 -3.4,2.86 -1.22,-0.25 -2.92,1.14 -1.43,2.07 -2.82,1.19 1.7,2.9 -0.94,4.55 -2.72,2.09 2.48,0.44 1.29,3.06 -2.53,0.4 -0.3,2.61 -2.09,4 -0.4,3.26 -2.41,5.93 -3.86,8.82 0.28,0.79 -3.1,0.12 -1.27,1.6 -1.02,2.01 -3.11,4.53 -0.2,6.39 -2.52,0.22 -3.43,3.38 -5,5.17 -0.91,1.5 1.12,2.54 -1.32,2.93 -1.23,2.37 -2.15,5.27 -3.97,7.32 1.46,1.7 -3.54,1.33 -2.2,4 0.89,0.84 -2.06,0.35 -2,1.51 -2.16,-0.19 -3.58,4.12 -1.57,4.8 2.75,-1.67 -0.46,5.07 2.92,2.57 1.47,-1.64 1.11,3.68 3.89,2.06 1.15,-1.3 4.64,-3.43 5.55,-1.97 -0.97,2.34 -5.83,2.91 -5.32,5.59 1.65,1.51 -1.67,5.32 2.05,4.87 0.58,1.25 3.67,-0.2 3.17,2.56 -0.46,2.07 -2.09,3.57 -1.96,5.92 -2.28,1.79 1.99,3.07 3.27,1.27 1.22,3.88 3.54,-2.53 5.73,-0.07 1.71,0.15 3.48,-3.04 4.82,-0.75 0.7,2.54 3.93,4.85 1.33,7.39 -0.96,2.05 -3.49,5.21 -5.83,2.98 -2.18,1.39 0.8,4.71 -0.35,6.74 -1.64,-3.35 -4.19,2.67 -7,1.13 -1.58,0.37 -1.77,-1.65 -2.62,-1.81 -0.7,0.72 -4.76,0.36 -3.34,1.66 -0.36,0.87 -3.77,2.22 -1.73,4.23 -0.31,2.89 -2.88,-1.51 -4.31,1.09 -1.46,1.61 -3.55,2.49 -3.46,4.75 -0.41,1.43 -0.54,3.48 -0.05,5.34 -0.27,1.74 -0.64,1.81 -2.46,1.7 -2.35,1.24 -5.67,-2 -7.94,0.36 -1.02,1.19 0.11,2.72 -2.11,2.54 -1.91,-2.74 -5.13,1.42 -6.94,-1.53 -3.68,-1.24 -4.83,6.16 -8.08,2.91 -0.68,-0.31 -3.05,-3.22 -2.23,-1.07 0.44,2 -3.21,4.32 -1.91,5.59 -1.58,-0.54 -1.24,3.52 -1.64,0.7 -1.39,-2.07 -3.9,0.94 -5.63,0.87 0.37,1.37 0.82,0.9 -0.34,1.77 -0.21,2.03 1.56,4.11 -0.43,6.09 -0.26,2.82 -3.85,3.15 -3.39,6.04 1.82,1.79 -0.1,4.43 -1.07,6.43 -3.76,0.87 1.99,2.12 2.03,4.1 0.89,1.78 3.76,2.19 1.71,4.57 -2.3,2.9 -5.15,-1.81 -7.83,-2.01 -3.78,-1.12 -4.32,3.77 -2.19,5.82 -2.31,2.78 -0.33,6.19 0.38,9.1 0.77,1.86 4.43,0.77 3.16,3.54 -0.62,2.49 -0.11,4.99 0.21,7.43 1.17,3.44 5.88,-1.22 6.9,2.2 0.63,0.39 -1.33,1.3 0.64,1.71 0.61,2 4.71,2.89 4.1,0.07 2.42,-0.19 4.16,-3.38 6.65,-1.26 2.61,1.3 4.67,3.68 7.51,4.49 2.44,-0.41 2.29,3.63 -0.15,2.17 -3.16,1.33 0.69,4.72 2.95,3.33 2.69,-1.74 4.67,2.16 2.98,3.28 -1.53,-1.48 -3.23,1.37 -1.51,2.46 -1.66,0.09 -1.17,4.59 -3.15,5.57 -2.16,-0.57 -0.01,3.21 -2.03,1.18 -1.51,-0.51 -1.63,0.74 -2.82,1.17 0.46,1.78 3.76,-0.82 2.44,1.78 0.45,1.46 -0.73,2.48 0.5,3.94 -0.91,1.42 1.06,4.29 -0.87,5.01 0.89,2.05 -1.39,4.46 -0.11,6.57 1.6,2.36 2.84,-1.08 4.63,0.84 2.19,0.61 6.36,2.5 5.42,5.48 1.51,1.9 3.6,2.8 3.89,5.79 1.08,1.98 3.28,1.24 4.3,3.24 2.25,0.68 4.45,1.39 6.37,2.79 1.16,1.48 3.78,2.23 4.69,2.86 -0.38,2.65 -2.37,5.25 -1.49,7.93 0.05,2.46 -6.1,4.34 -5.15,1.14 -2.52,-0.74 -5.24,-0.5 -7.55,-1.88 -1.49,0.54 -3.24,0.69 -4.5,0.55 -1.71,1.13 -6.19,1.11 -5.4,-1.84 -0.88,-3.94 -4.63,1.38 -6.95,-0.97 -1.81,-1.22 -2.73,1 -2.64,2.13 -3.4,-2.47 -4.1,3.12 -6.37,4.33 -1.56,1.14 -0.42,-3.07 -2.75,-1.69 -2.4,0.37 -5.28,1.01 -7,-0.66 -2.78,0.67 -5.63,0.98 -8.42,1.61 1.94,1.66 -2.76,2.56 -3.79,2.43 -2.67,-0.72 -5.06,0.99 -7.69,0.02 -2.34,1.37 -6.27,0.31 -6.05,4.11l-0.04,0.01 0,0z m57.81,-33.85c-0.89,-1.57 0.49,-2.17 0,0z m-241.23,-51.26c-1.5,-0.26 -4.88,0.4 -5.3,-0.46 2.59,-1.58 -0.9,-5.56 2.71,-5.44 2.09,-0.97 5.31,1.36 6.88,-1.15 -0.17,-1.75 -1.39,-4.59 1.04,-3 2.58,1.66 5.83,-0.05 8.09,1.03 2.4,1.17 -0.19,4.14 1.51,6.12 -0.91,2.05 -4.72,1.7 -6.85,2.38 -2.67,0.39 -5.38,0.53 -8.08,0.53z m245.17,-54.27c-0.96,-0.5 -1.79,-4.14 -0.7,-1.7 0.41,0.34 1.1,1.13 0.7,1.7z m15.47,-62.08c-0.5,-1.68 1.86,0.26 0,0z M392.43,81.96c-1.18,-1.24 -0.52,-3.74 1,-1.58 0.97,0.64 4.51,-0.85 3.11,1.22 -1.28,-0.1 -4.06,-2.2 -4.11,0.36z m69.72,-22.48c-3.13,-0.37 -5.18,-4.96 -3.51,-7.6 1.49,-0.95 5.9,-1.19 6.08,0.31 -0.75,2.23 0.93,5.01 -1.2,6.83 -0.37,0.32 -0.88,0.46 -1.36,0.46z m1.2,-32.66c0.64,-1.98 -0.94,-1.7 -1.81,-2.37 0.83,-0.97 3.57,-1.76 1.01,-2.23 -1.29,0.52 -2.78,0.7 -3.28,0.14 -1.2,0.89 -3.04,-4.18 -2.96,-0.9 1.94,3.97 -3.66,-2.01 -2.98,1.25 2.3,2.87 -2.86,2.37 -3.53,0.29 -1.84,-1.41 -2.9,-5.04 0.07,-4.98 -0.36,-1.21 -1.52,-2.86 -0.18,-4.45 -3.01,0.94 -0.61,-2.79 -2.49,-3.65 -1.26,2.21 -4.03,0.25 -1.58,-1.13 2.3,-1.91 -4.09,-1.91 -1.43,-4.6 0.66,-1.81 2.03,-2.29 3.79,-2.01 1.73,-0.33 3.25,0.66 4.85,0.17 2.53,-1.3 -3.03,3.08 0.48,2.2 3.11,-1.44 -1.22,5.41 2.65,3.83 2.34,0.52 1.33,4.72 3.21,4.64 2.81,0.65 4.59,3.49 7.55,3.98 2.95,1.5 6.52,1.02 9.42,1.43 -0.95,0.85 -5.31,2.46 -4.34,3.45 -1.86,0.24 -4.2,1.89 -2.01,3.36 -1.56,0.82 -3.63,-0.42 -4.9,1.06 -0.87,-0.61 -1.05,-0.3 -1.52,0.53z m23.35,-5.93c-1.68,-0.42 -4.33,-0.5 -2.76,-2.36 -1.89,0.07 -1.65,-3.14 0.36,-1.62 2.48,0.8 5.12,0.27 7.63,0.6 2.21,1.62 -2.46,4.83 -3.16,1.83 -0.45,0.12 -0.96,1.84 -2.07,1.55z","name":"Russian Federation"},"mt":{"path":"m343.65,509.08c-1.52,-0.23 -1.75,-0.24 0,0z m1.95,2.72c-1.32,-0.63 -1.5,-0.7 0,0z","name":"Malta"},"me":{"path":"m385.29,433.13c-1.98,-1.45 -3.12,-5.3 -6.16,-4.27 -0.68,-0.6 -0.46,-1.87 -1.44,-2.17 0.16,-1.66 0.06,-3.3 -0.89,-4.86 1.96,-1.05 1.28,-4.74 3.12,-5.09 1.81,3.01 2.14,-1.15 0.71,-2.43 2.24,-0.2 3.4,-2.11 5.57,-0.36 3.49,0.56 2.95,4.72 6.22,5.9 -2.5,0.45 -0.84,6.17 -3.72,4.67 0.19,-3.37 -2.81,0.5 -2.99,1.87 -0.8,1.83 -2.3,3.26 -0.46,4.87 0.08,0.47 0.4,1.59 0.03,1.87z","name":"Montenegro"},"rs":{"path":"m397.48,431.57c-0.16,-2.49 -1.05,-5.46 -3.99,-5.18 -0.83,-1.86 -3.16,-3.89 -0.74,-5.1 2.42,-2.35 -3,-3.15 -2.73,-5.8 -1.28,-2.34 -5.16,-1.7 -5.47,-5.07 -0.61,-1.48 -2.43,-2.36 0.08,-2.14 2.37,-1.69 -1.79,-3.25 -2.79,-4.49 -3.49,-0.35 0.76,-4.99 -0.07,-7.08 -1.54,-0.41 -2.38,-0.6 -2.22,-2.53 -0.29,-0.9 3.52,-0.03 1.84,-1.89 -1.99,-0.46 -4.18,-1.03 -2.61,-2.61 0.5,-1.92 -2.64,0.29 -1.69,-2.2 -0.12,-1.58 -1.93,-2.81 0.65,-3.27 2.64,-1.35 4.3,-3.64 7.52,-3.04 2.34,-0.11 4.56,2.67 6.11,3.82 1,0.92 0.22,4.94 3.24,4.94 1.65,0.3 5.5,0.5 3.47,2.78 1.27,1.27 0.97,1.07 -0.4,2.22 0.32,1.47 3.21,0.4 3.09,2.01 1.78,0.14 4.21,-0.13 4.93,1.74 2.85,0.45 1.17,-3.79 1.99,-3.56 1.66,0.7 3.37,1 1.04,1.99 -1.64,2.21 4.19,3.86 0.86,5.71 -2.2,2.75 0.34,6.72 2.98,8.19 2.92,0.51 3.82,2.98 1.52,5.06 -0.82,0.05 -2.7,-0.25 -2.65,1.85 -1.23,2.37 3.66,5.04 -0.48,5.54 -2.42,1.11 -4.61,2.18 -7.35,2.39 -1.32,2.74 -6.31,0.55 -6.16,5.74z","name":"Serbia"}}});

;

var ngMap=angular.module("ngMap",[]);ngMap.directive("infoWindow",["Attr2Options",function(Attr2Options){var parser=new Attr2Options;return{restrict:"E",require:"^map",link:function(scope,element,attrs,mapController){var filtered=new parser.filter(attrs);scope.google=google;var options=parser.getOptions(filtered,scope);options.pixelOffset&&(options.pixelOffset=google.maps.Size.apply(this,options.pixelOffset));var infoWindow=new google.maps.InfoWindow(options);infoWindow.contents=element.html();var events=parser.getEvents(scope,filtered);for(var eventName in events)eventName&&google.maps.event.addListener(infoWindow,eventName,events[eventName]);mapController.infoWindows.push(infoWindow),element.css({display:"none"}),scope.showInfoWindow=function(event,id,options){var infoWindow=scope.infoWindows[id],contents=infoWindow.contents,matches=contents.match(/\[\[[^\]]+\]\]/g);if(matches)for(var i=0,length=matches.length;length>i;i++){var expression=matches[i].replace(/\[\[/,"").replace(/\]\]/,"");try{contents=contents.replace(matches[i],eval(expression))}catch(e){expression="options."+expression,contents=contents.replace(matches[i],eval(expression))}}infoWindow.setContent(contents),infoWindow.open(scope.map,this)}}}}]),ngMap.directive("map",["Attr2Options","$parse","NavigatorGeolocation","GeoCoder","$compile",function(a,b,c,d){var e=new a;return{restrict:"AE",controller:["$scope",function(a){this.map=null,this.controls={},this.markers=[],this.shapes=[],this.infoWindows=[],this.initializeMap=function(a,b,f){var g=e.filter(f);a.google=google;var h=e.getOptions(g,a),i=e.getControlOptions(g);for(var j in i)j&&(h[j]=i[j]);var k=this,l=null;if(h.zoom||(h.zoom=15),h.center instanceof Array){var m=h.center[0],n=h.center[1];h.center=new google.maps.LatLng(m,n)}else l=h.center,delete h.center;for(var o in this.controls)o&&(h[o+"Control"]="false"===this.controls[o].enabled?0:1,delete this.controls[o].enabled,h[o+"ControlOptions"]=this.controls[o]);var p=document.createElement("div");p.style.width="100%",p.style.height="100%",b.prepend(p),k.map=new google.maps.Map(p,h),"string"==typeof l?d.geocode({address:l}).then(function(a){k.map.setCenter(a[0].geometry.location)}):h.center||c.getCurrentPosition().then(function(a){var b=a.coords.latitude,c=a.coords.longitude;k.map.setCenter(new google.maps.LatLng(b,c))});var q=e.getEvents(a,g);for(var r in q)r&&google.maps.event.addListener(k.map,r,q[r]);return a.map=k.map,k.map},this.addMarker=function(b){b.setMap(this.map),b.centered&&this.map.setCenter(b.position);var c=Object.keys(a.markers).length;a.markers[b.id||c]=b},this.initializeMarkers=function(){a.markers={};for(var b=0;b<this.markers.length;b++){var c=this.markers[b];this.addMarker(c)}return a.markers},this.initializeShapes=function(){a.shapes={};for(var b=0;b<this.shapes.length;b++){var c=this.shapes[b];c.setMap(this.map),a.shapes[c.id||b+1]=c}return a.shapes},this.initializeInfoWindows=function(){a.infoWindows={};for(var b=0;b<this.infoWindows.length;b++){var c=this.infoWindows[b];a.infoWindows[c.id||b+1]=c}return a.infoWindows}}],link:function(a,b,c,d){var e=d.initializeMap(a,b,c);a.$emit("mapInitialized",[e]);var f=d.initializeMarkers();a.$emit("markersInitialized",[f]);var g=d.initializeShapes();a.$emit("shapesInitialized",[g]);var h=d.initializeInfoWindows();a.$emit("infoWindowsInitialized",[h])}}}]),ngMap.directive("marker",["Attr2Options","GeoCoder","NavigatorGeolocation",function(a,b,c){var d=new a;return{restrict:"E",require:"^map",link:function(a,e,f,g){var h=new d.filter(f);a.google=google;var i=d.getOptions(h,a),j=d.getEvents(a,h),k=function(){var a=new google.maps.Marker(i);Object.keys(j).length>0;for(var b in j)b&&google.maps.event.addListener(a,b,j[b]);return a};if(i.position instanceof Array){var l=i.position[0],m=i.position[1];i.position=new google.maps.LatLng(l,m);var n=k();i.ngRepeat?g.addMarker(n):g.markers.push(n)}else if("string"==typeof i.position){var o=i.position;o.match(/^current/i)?c.getCurrentPosition().then(function(a){var b=a.coords.latitude,c=a.coords.longitude;i.position=new google.maps.LatLng(b,c);var d=k();g.addMarker(d)}):b.geocode({address:i.position}).then(function(a){var b=a[0].geometry.location;i.position=b;var c=k();g.addMarker(c)})}}}}]),ngMap.directive("shape",["Attr2Options",function(a){var b=new a,c=function(a){return a[0]&&a[0]instanceof Array?a.map(function(a){return new google.maps.LatLng(a[0],a[1])}):new google.maps.LatLng(a[0],a[1])},d=function(a){var b=c(a);return new google.maps.LatLngBounds(b[0],b[1])},e=function(a,b){switch(a){case"circle":return b.center=c(b.center),new google.maps.Circle(b);case"polygon":return b.paths=c(b.paths),new google.maps.Polygon(b);case"polyline":return b.path=c(b.path),new google.maps.Polyline(b);case"rectangle":return b.bounds=d(b.bounds),new google.maps.Rectangle(b);case"groundOverlay":case"image":var e=b.url,f=d(b.bounds),g={opacity:b.opacity,clickable:b.clickable};return new google.maps.GroundOverlay(e,f,g)}return null};return{restrict:"E",require:"^map",link:function(a,c,d,f){var g=b.filter(d),h=g.name;delete g.name;var i=b.getOptions(g),j=e(h,i);j&&f.shapes.push(j);var k=b.getEvents(a,g);for(var l in k)k[l]&&google.maps.event.addListener(j,l,k[l])}}}]),ngMap.provider("Attr2Options",function(){this.$get=function(){return function(){this.filter=function(a){var b={};for(var c in a)c.match(/^\$/)||(b[c]=a[c]);return b},this.getOptions=function(attrs,scope){var options={};for(var key in attrs)if(attrs[key]){if(key.match(/^on[A-Z]/))continue;if(key.match(/ControlOptions$/))continue;var val=attrs[key];try{var num=Number(val);if(isNaN(num))throw"Not a number";options[key]=num}catch(err){try{options[key]=JSON.parse(val)}catch(err2){if(val.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/))try{var exp="new google.maps."+val;options[key]=eval(exp)}catch(e){options[key]=val}else if(val.match(/^[A-Z][a-zA-Z0-9]+\.[A-Z]+$/))try{options[key]=scope.$eval("google.maps."+val)}catch(e){options[key]=val}else if(val.match(/^[A-Z]+$/))try{var capitializedKey=key.charAt(0).toUpperCase()+key.slice(1);options[key]=scope.$eval("google.maps."+capitializedKey+"."+val)}catch(e){options[key]=val}else options[key]=val}}}return options},this.getEvents=function(a,b){var c={},d=function(a){return"_"+a.toLowerCase()},e=function(b){var c=b.match(/([^\(]+)\(([^\)]*)\)/),d=c[1],e=c[2].replace(/event[ ,]*/,""),f=a.$eval("["+e+"]");return function(b){a[d].apply(this,[b].concat(f))}};for(var f in b)if(b[f]){if(!f.match(/^on[A-Z]/))continue;var g=f.replace(/^on/,"");g=g.charAt(0).toLowerCase()+g.slice(1),g=g.replace(/([A-Z])/g,d);var h=b[f];c[g]=new e(h)}return c},this.getControlOptions=function(a){var b={};for(var c in a)if(a[c]){if(!c.match(/(.*)ControlOptions$/))continue;var d=a[c],e=d.replace(/'/g,'"');e=e.replace(/([^"]+)|("[^"]+")/g,function(a,b,c){return b?b.replace(/([a-zA-Z0-9]+?):/g,'"$1":'):c});try{var f=JSON.parse(e);for(var g in f)if(f[g]){var h=f[g];if("string"==typeof h?h=h.toUpperCase():"mapTypeIds"===g&&(h=h.map(function(a){return google.maps.MapTypeId[a.toUpperCase()]})),"style"===g){var i=c.charAt(0).toUpperCase()+c.slice(1),j=i.replace(/Options$/,"")+"Style";f[g]=google.maps[j][h]}else f[g]="position"===g?google.maps.ControlPosition[h]:h}b[c]=f}catch(k){}}return b}}}}),ngMap.service("GeoCoder",["$q",function(a){return{geocode:function(b){var c=a.defer(),d=new google.maps.Geocoder;return d.geocode(b,function(a,b){b==google.maps.GeocoderStatus.OK?c.resolve(a):c.reject("Geocoder failed due to: "+b)}),c.promise}}}]),ngMap.service("NavigatorGeolocation",["$q",function(a){return{getCurrentPosition:function(){var b=a.defer();return navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){b.resolve(a)},function(a){b.reject(a)}):b.reject("Browser Geolocation service failed."),b.promise},watchPosition:function(){return"TODO"},clearWatch:function(){return"TODO"}}}]);
;

/*!ngTagsInput v2.0.1 License: MIT */
!function(){"use strict";function a(){var a={};return{on:function(b,c){return b.split(" ").forEach(function(b){a[b]||(a[b]=[]),a[b].push(c)}),this},trigger:function(b,c){return angular.forEach(a[b],function(a){a.call(null,c)}),this}}}function b(a,b){return a=a||[],a.length>0&&!angular.isObject(a[0])&&a.forEach(function(c,d){a[d]={},a[d][b]=c}),a}function c(a,b,c){for(var d=null,e=0;e<a.length;e++)if(a[e][c].toLowerCase()===b[c].toLowerCase()){d=a[e];break}return d}function d(a,b,c){var d=b.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return a.replace(new RegExp(d,"gi"),c)}var e={backspace:8,tab:9,enter:13,escape:27,space:32,up:38,down:40,comma:188},f=angular.module("ngTagsInput",[]);f.directive("tagsInput",["$timeout","$document","tagsInputConfig",function(d,f,g){function h(a,b){var d,e,f,g={};return d=function(b){return b[a.displayProperty]},e=function(b,c){b[a.displayProperty]=c},f=function(b){var e=d(b);return e.length>=a.minLength&&e.length<=(a.maxLength||e.length)&&a.allowedTagsPattern.test(e)&&!c(g.items,b,a.displayProperty)},g.items=[],g.addText=function(a){var b={};return e(b,a),g.add(b)},g.add=function(c){var h=d(c).trim();return a.replaceSpacesWithDashes&&(h=h.replace(/\s/g,"-")),e(c,h),f(c)?(g.items.push(c),b.trigger("tag-added",{$tag:c})):b.trigger("invalid-tag",{$tag:c}),c},g.remove=function(a){var c=g.items.splice(a,1)[0];return b.trigger("tag-removed",{$tag:c}),c},g.removeLast=function(){var b,c=g.items.length-1;return a.enableEditingLastTag||g.selected?(g.selected=null,b=g.remove(c)):g.selected||(g.selected=g.items[c]),b},g}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",onTagAdded:"&",onTagRemoved:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(b,c,d){g.load("tagsInput",b,c,{placeholder:[String,"Add a tag"],tabindex:[Number],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number],maxTags:[Number],displayProperty:[String,"text"],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1]}),b.events=new a,b.tagList=new h(b.options,b.events),this.registerAutocomplete=function(){var a=d.find("input");return a.on("keydown",function(a){b.events.trigger("input-keydown",a)}),{addTag:function(a){return b.tagList.add(a)},focusInput:function(){a[0].focus()},getTags:function(){return b.tags},getOptions:function(){return b.options},on:function(a,c){return b.events.on(a,c),this}}}}],link:function(a,c,g,h){var i=[e.enter,e.comma,e.space,e.backspace],j=a.tagList,k=a.events,l=a.options,m=c.find("input");k.on("tag-added",a.onTagAdded).on("tag-removed",a.onTagRemoved).on("tag-added",function(){a.newTag.text=""}).on("tag-added tag-removed",function(){h.$setViewValue(a.tags)}).on("invalid-tag",function(){a.newTag.invalid=!0}).on("input-change",function(){j.selected=null,a.newTag.invalid=null}).on("input-focus",function(){h.$setValidity("leftoverText",!0)}).on("input-blur",function(){l.addFromAutocompleteOnly||(l.addOnBlur&&j.addText(a.newTag.text),h.$setValidity("leftoverText",l.allowLeftoverText?!0:!a.newTag.text))}),a.newTag={text:"",invalid:null},a.getDisplayText=function(a){return a[l.displayProperty].trim()},a.track=function(a){return a[l.displayProperty]},a.newTagChange=function(){k.trigger("input-change",a.newTag.text)},a.$watch("tags",function(c){a.tags=b(c,l.displayProperty),j.items=a.tags}),a.$watch("tags.length",function(a){h.$setValidity("maxTags",angular.isUndefined(l.maxTags)||a<=l.maxTags),h.$setValidity("minTags",angular.isUndefined(l.minTags)||a>=l.minTags)}),m.on("keydown",function(b){if(!b.isImmediatePropagationStopped||!b.isImmediatePropagationStopped()){var c,d,f=b.keyCode,g=b.shiftKey||b.altKey||b.ctrlKey||b.metaKey,h={};if(!g&&-1!==i.indexOf(f))if(h[e.enter]=l.addOnEnter,h[e.comma]=l.addOnComma,h[e.space]=l.addOnSpace,c=!l.addFromAutocompleteOnly&&h[f],d=!c&&f===e.backspace&&0===a.newTag.text.length,c)j.addText(a.newTag.text),a.$apply(),b.preventDefault();else if(d){var k=j.removeLast();k&&l.enableEditingLastTag&&(a.newTag.text=k[l.displayProperty]),a.$apply(),b.preventDefault()}}}).on("focus",function(){a.hasFocus||(a.hasFocus=!0,k.trigger("input-focus"),a.$apply())}).on("blur",function(){d(function(){var b=f.prop("activeElement"),d=b===m[0],e=c[0].contains(b);(d||!e)&&(a.hasFocus=!1,k.trigger("input-blur"))})}),c.find("div").on("click",function(){m[0].focus()})}}}]),f.directive("autoComplete",["$document","$timeout","$sce","tagsInputConfig",function(a,f,g,h){function i(a,d){var e,g,h,i={};return g=function(a,b){return a.filter(function(a){return!c(b,a,d.tagsInput.displayProperty)})},i.reset=function(){h=null,i.items=[],i.visible=!1,i.index=-1,i.selected=null,i.query=null,f.cancel(e)},i.show=function(){i.selected=null,i.visible=!0},i.load=function(c,j){return c.length<d.minLength?void i.reset():(f.cancel(e),void(e=f(function(){i.query=c;var e=a({$query:c});h=e,e.then(function(a){e===h&&(a=b(a.data||a,d.tagsInput.displayProperty),a=g(a,j),i.items=a.slice(0,d.maxResultsToShow),i.items.length>0?i.show():i.reset())})},d.debounceDelay,!1)))},i.selectNext=function(){i.select(++i.index)},i.selectPrior=function(){i.select(--i.index)},i.select=function(a){0>a?a=i.items.length-1:a>=i.items.length&&(a=0),i.index=a,i.selected=i.items[a]},i.reset(),i}function j(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}return{restrict:"E",require:"^tagsInput",scope:{source:"&"},templateUrl:"ngTagsInput/auto-complete.html",link:function(b,c,f,k){var l,m,n,o,p,q=[e.enter,e.tab,e.escape,e.up,e.down];h.load("autoComplete",b,f,{debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10]}),n=b.options,m=k.registerAutocomplete(),n.tagsInput=m.getOptions(),l=new i(b.source,n),o=function(a){return a[n.tagsInput.displayProperty]},b.suggestionList=l,b.addSuggestion=function(){var a=!1;return l.selected&&(m.addTag(l.selected),l.reset(),m.focusInput(),a=!0),a},b.highlight=function(a){var b=o(a);return b=j(b),n.highlightMatchedText&&(b=d(b,j(l.query),"<em>$&</em>")),g.trustAsHtml(b)},b.track=function(a){return o(a)},m.on("tag-added invalid-tag",function(){l.reset()}).on("input-change",function(a){a?l.load(a,m.getTags()):l.reset()}).on("input-keydown",function(a){var c,d;if(-1!==q.indexOf(a.keyCode)){var f=!1;a.stopImmediatePropagation=function(){f=!0,a.stopPropagation()},a.isImmediatePropagationStopped=function(){return f},l.visible&&(c=a.keyCode,d=!1,c===e.down?(l.selectNext(),d=!0):c===e.up?(l.selectPrior(),d=!0):c===e.escape?(l.reset(),d=!0):(c===e.enter||c===e.tab)&&(d=b.addSuggestion()),d&&(a.preventDefault(),a.stopImmediatePropagation(),b.$apply()))}}).on("input-blur",function(){l.reset()}),p=function(){l.visible&&(l.reset(),b.$apply())},a.on("click",p),b.$on("$destroy",function(){a.off("click",p)})}}}]),f.directive("tiTranscludeAppend",function(){return function(a,b,c,d,e){e(function(a){b.append(a)})}}),f.directive("tiAutosize",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e,f,g=3;e=angular.element('<span class="input"></span>'),e.css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),b.parent().append(e),f=function(a){var d,f=a;return angular.isString(f)&&0===f.length&&(f=c.placeholder),f&&(e.text(f),e.css("display",""),d=e.prop("offsetWidth"),e.css("display","none")),b.css("width",d?d+g+"px":""),a},d.$parsers.unshift(f),d.$formatters.unshift(f),c.$observe("placeholder",function(a){d.$modelValue||f(a)})}}}),f.provider("tagsInputConfig",function(){var a={},b={};this.setDefaults=function(b,c){return a[b]=c,this},this.setActiveInterpolation=function(a,c){return b[a]=c,this},this.$get=["$interpolate",function(c){var d={};return d[String]=function(a){return a},d[Number]=function(a){return parseInt(a,10)},d[Boolean]=function(a){return"true"===a.toLowerCase()},d[RegExp]=function(a){return new RegExp(a)},{load:function(e,f,g,h){f.options={},angular.forEach(h,function(h,i){var j,k,l,m,n;j=h[0],k=h[1],l=d[j],m=function(){var b=a[e]&&a[e][i];return angular.isDefined(b)?b:k},n=function(a){f.options[i]=a?l(a):m()},b[e]&&b[e][i]?g.$observe(i,function(a){n(a)}):n(g[i]&&c(g[i])(f.$parent))})}}}]}),f.run(["$templateCache",function(a){a.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ti-transclude-append=""><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="{ selected: tag == tagList.selected }"><span>{{getDisplayText(tag)}}</span> <a class="remove-button" ng-click="tagList.remove($index)">{{options.removeTagSymbol}}</a></li></ul><input class="input" placeholder="{{options.placeholder}}" tabindex="{{options.tabindex}}" ng-model="newTag.text" ng-change="newTagChange()" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ti-autosize=""></div></div>'),a.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-show="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="{selected: item == suggestionList.selected}" ng-click="addSuggestion()" ng-mouseenter="suggestionList.select($index)" ng-bind-html="highlight(item)"></li></ul></div>')}])}();

/*
 Bootstrap - File Input
 ======================

 This is meant to convert all file input tags into a set of elements that displays consistently in all browsers.

 Converts all
 <input type="file">
 into Bootstrap buttons
 <a class="btn">Browse</a>

 */
(function($) {

    $.fn.bootstrapFileInput = function() {

        this.each(function(i,elem){

            var $elem = $(elem);

            // Maybe some fields don't need to be standardized.
            if (typeof $elem.attr('data-bfi-disabled') != 'undefined') {
                return;
            }

            // Set the word to be displayed on the button
            var buttonWord = 'Browse';

            if (typeof $elem.attr('title') != 'undefined') {
                buttonWord = $elem.attr('title');
            }

            var className = '';

            if (!!$elem.attr('class')) {
                className = ' ' + $elem.attr('class');
            }

            // Now we're going to wrap that input field with a Bootstrap button.
            // The input will actually still be there, it will just be float above and transparent (done with the CSS).
            $elem.wrap('<a class="file-input-wrapper btn btn-default ' + className + '"></a>').parent().prepend($('<span></span>').html(buttonWord));
        })

            // After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
            // This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
            .promise().done( function(){

                // As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
                // This gives us the pointer cursor that FF denies us
                $('.file-input-wrapper').mousemove(function(cursor) {

                    var input, wrapper,
                        wrapperX, wrapperY,
                        inputWidth, inputHeight,
                        cursorX, cursorY;

                    // This wrapper element (the button surround this file input)
                    wrapper = $(this);
                    // The invisible file input element
                    input = wrapper.find("input");
                    // The left-most position of the wrapper
                    wrapperX = wrapper.offset().left;
                    // The top-most position of the wrapper
                    wrapperY = wrapper.offset().top;
                    // The with of the browsers input field
                    inputWidth= input.width();
                    // The height of the browsers input field
                    inputHeight= input.height();
                    //The position of the cursor in the wrapper
                    cursorX = cursor.pageX;
                    cursorY = cursor.pageY;

                    //The positions we are to move the invisible file input
                    // The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
                    moveInputX = cursorX - wrapperX - inputWidth + 20;
                    // Slides the invisible input Browse button to be positioned middle under the cursor
                    moveInputY = cursorY- wrapperY - (inputHeight/2);

                    // Apply the positioning styles to actually move the invisible file input
                    input.css({
                        left:moveInputX,
                        top:moveInputY
                    });
                });

                $('body').on('change', '.file-input-wrapper input[type=file]', function(){

                    var fileName;
                    fileName = $(this).val();

                    // Remove any previous file names
                    $(this).parent().next('.file-input-name').remove();
                    if (!!$(this).prop('files') && $(this).prop('files').length > 1) {
                        fileName = $(this)[0].files.length+' files';
                        //$(this).parent().after('<span class="file-input-name">'+$(this)[0].files.length+' files</span>');
                    }
                    else {
                        // var fakepath = 'C:\\fakepath\\';
                        // fileName = $(this).val().replace('C:\\fakepath\\','');
                        fileName = fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
                    }

                    var selectedFileNamePlacement = $(this).data('filename-placement') || 'outside';
                    if (selectedFileNamePlacement === 'inside') {
                        // Print the fileName inside
                        $(this).siblings('span').html(fileName);
                        $(this).attr('title', fileName);
                    } else if (selectedFileNamePlacement === 'outside') {
                        // Print the fileName aside (right after the the button)
                        $(this).parent().after('<span class="file-input-name">'+fileName+'</span>');
                    } else {
                        console.log('Error in bootstrap-file-input plugin : unknown placement [' + selectedFileNamePlacement + '] for selected filename');
                    }
                });

            });

    };

// Add the styles before the first stylesheet
// This ensures they can be easily overridden with developer styles
    var cssHtml = '<style>'+
        '.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }'+
        '.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'+
        '.file-input-name { margin-left: 8px; }'+
        '</style>';
    $('link[rel=stylesheet]').eq(0).before(cssHtml);

})(jQuery);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
var app = angular.module("app", ["ngRoute", "ngAnimate","app.config", "ui.bootstrap", "mgo-angular-wizard", "ui.tree", "ngMap", "ngTagsInput", "app.ui.ctrls", "app.ui.services", "app.controllers", "app.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.map", "countTo", "mediaPlayer","ngDragDrop", "app.music"]).run(["$rootScope", "$location","loggit",
    function ($rootScope, $location,loggit) {

        $(document).ready(function(){

            setTimeout(function(){
                $('.page-loading-overlay').addClass("loaded");
                $('.load_circle_wrapper').addClass("loaded");

                loggit.logSuccess("Welcome to Groovy! Navigate and add songs to your playlists.");

            },1000);

        });

    }] ).config(["$routeProvider",
    function($routeProvider) {
        return $routeProvider.when("/", {
            redirectTo: "/dashboard"
        }).when("/dashboard", {
                templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/dashboard/dashboard", {
                templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/ui/typography", {
                templateUrl: "app/views/ui_elements/typography.html"
            }).when("/ui/buttons", {
                templateUrl: "app/views/ui_elements/buttons.html"
            }).when("/ui/icons", {
                templateUrl: "app/views/ui_elements/icons.html"
            }).when("/ui/grids", {
                templateUrl: "app/views/ui_elements/grids.html"
            }).when("/ui/widgets", {
                templateUrl: "app/views/ui_elements/widgets.html"
            }).when("/ui/components", {
                templateUrl: "app/views/ui_elements/components.html"
            }).when("/ui/timeline", {
                templateUrl: "app/views/ui_elements/timeline.html"
            }).when("/ui/nested-lists", {
                templateUrl: "app/views/ui_elements/nested-lists.html"
            }).when("/playlist/sample", {
                templateUrl: "app/views/playlist/sample.html"
            }).when("/artist/:title", {
              templateUrl: "app/views/playlist/artist.html"
            }).when("/playlist/:title", {
              templateUrl: "app/views/playlist/playlist.html"
            }).when("/artist-list", {
              templateUrl: "app/views/playlist/artists-list.html"
            }).when("/albums", {
              templateUrl: "app/views/playlist/albums.html"
            }).when("/album/:title", {
              templateUrl: "app/views/playlist/album.html"
            }).when("/genres", {
              templateUrl: "app/views/playlist/genres.html"
            }).when("/forms/elements", {
                templateUrl: "app/views/forms/elements.html"
            }).when("/forms/layouts", {
                templateUrl: "app/views/forms/layouts.html"
            }).when("/forms/validation", {
                templateUrl: "app/views/forms/validation.html"
            }).when("/forms/wizard", {
                templateUrl: "app/views/forms/wizard.html"
            }).when("/maps/gmap", {
                templateUrl: "app/views/maps/gmap.html"
            }).when("/maps/jqvmap", {
                templateUrl: "app/views/maps/jqvmap.html"
            }).when("/tables/static", {
                templateUrl: "app/views/tables/static.html"
            }).when("/tables/responsive", {
                templateUrl: "app/views/tables/responsive.html"
            }).when("/tables/dynamic", {
                templateUrl: "app/views/tables/dynamic.html"
            }).when("/mail/inbox", {
                templateUrl: "app/views/mail/inbox.html"
            }).when("/mail/compose", {
                templateUrl: "app/views/mail/compose.html"
            }).when("/mail/single", {
                templateUrl: "app/views/mail/single.html"
            }).when("/pages/features", {
                templateUrl: "app/views/pages/features.html"
            }).when("/front", {
              templateUrl: "app/views/pages/frontpage.html"
            }).when("/pages/signin", {
                templateUrl: "app/views/pages/signin.html"
            }).when("/pages/signup", {
                templateUrl: "app/views/pages/signup.html"
            }).when("/pages/forgot", {
                templateUrl: "app/views/pages/forgot-password.html"
            }).when("/pages/profile", {
                templateUrl: "app/views/pages/profile.html"
            }).when("/404", {
                templateUrl: "app/views/pages/404.html"
            }).when("/pages/500", {
                templateUrl: "app/views/pages/500.html"
            }).when("/pages/blank", {
                templateUrl: "app/views/pages/blank.html"
            }).when("/pages/contact", {
                templateUrl: "app/views/pages/contact.html"
            }).otherwise({
                redirectTo: "/404"
            });
    }
]);


/**************************
 App Map
 **************************/

angular.module("app.map", []).directive("uiJqvmap", [
        function() {
            return {
                restrict: "A",
                scope: {
                    options: "="
                },
                link: function(scope, ele) {
                    var options;
                    return options = scope.options, ele.vectorMap(options);
                }
            };
        }
    ]).controller("jqvmapCtrl", ["$scope",
        function($scope) {
            var sample_data;
            return sample_data = {
                af: "16.63",
                al: "11.58",
                dz: "158.97",
                ao: "85.81",
                ag: "1.1",
                ar: "351.02",
                am: "8.83",
                au: "1219.72",
                at: "366.26",
                az: "52.17",
                bs: "7.54",
                bh: "21.73",
                bd: "105.4",
                bb: "3.96",
                by: "52.89",
                be: "461.33",
                bz: "1.43",
                bj: "6.49",
                bt: "1.4",
                bo: "19.18",
                ba: "16.2",
                bw: "12.5",
                br: "2023.53",
                bn: "11.96",
                bg: "44.84",
                bf: "8.67",
                bi: "1.47",
                kh: "11.36",
                cm: "21.88",
                ca: "1563.66",
                cv: "1.57",
                cf: "2.11",
                td: "7.59",
                cl: "199.18",
                cn: "5745.13",
                co: "283.11",
                km: "0.56",
                cd: "12.6",
                cg: "11.88",
                cr: "35.02",
                ci: "22.38",
                hr: "59.92",
                cy: "22.75",
                cz: "195.23",
                dk: "304.56",
                dj: "1.14",
                dm: "0.38",
                "do": "50.87",
                ec: "61.49",
                eg: "216.83",
                sv: "21.8",
                gq: "14.55",
                er: "2.25",
                ee: "19.22",
                et: "30.94",
                fj: "3.15",
                fi: "231.98",
                fr: "2555.44",
                ga: "12.56",
                gm: "1.04",
                ge: "11.23",
                de: "3305.9",
                gh: "18.06",
                gr: "305.01",
                gd: "0.65",
                gt: "40.77",
                gn: "4.34",
                gw: "0.83",
                gy: "2.2",
                ht: "6.5",
                hn: "15.34",
                hk: "226.49",
                hu: "132.28",
                is: "12.77",
                "in": "1430.02",
                id: "695.06",
                ir: "337.9",
                iq: "84.14",
                ie: "204.14",
                il: "201.25",
                it: "2036.69",
                jm: "13.74",
                jp: "5390.9",
                jo: "27.13",
                kz: "129.76",
                ke: "32.42",
                ki: "0.15",
                kr: "986.26",
                undefined: "5.73",
                kw: "117.32",
                kg: "4.44",
                la: "6.34",
                lv: "23.39",
                lb: "39.15",
                ls: "1.8",
                lr: "0.98",
                ly: "77.91",
                lt: "35.73",
                lu: "52.43",
                mk: "9.58",
                mg: "8.33",
                mw: "5.04",
                my: "218.95",
                mv: "1.43",
                ml: "9.08",
                mt: "7.8",
                mr: "3.49",
                mu: "9.43",
                mx: "1004.04",
                md: "5.36",
                mn: "5.81",
                me: "3.88",
                ma: "91.7",
                mz: "10.21",
                mm: "35.65",
                na: "11.45",
                np: "15.11",
                nl: "770.31",
                nz: "138",
                ni: "6.38",
                ne: "5.6",
                ng: "206.66",
                no: "413.51",
                om: "53.78",
                pk: "174.79",
                pa: "27.2",
                pg: "8.81",
                py: "17.17",
                pe: "153.55",
                ph: "189.06",
                pl: "438.88",
                pt: "223.7",
                qa: "126.52",
                ro: "158.39",
                ru: "1476.91",
                rw: "5.69",
                ws: "0.55",
                st: "0.19",
                sa: "434.44",
                sn: "12.66",
                rs: "38.92",
                sc: "0.92",
                sl: "1.9",
                sg: "217.38",
                sk: "86.26",
                si: "46.44",
                sb: "0.67",
                za: "354.41",
                es: "1374.78",
                lk: "48.24",
                kn: "0.56",
                lc: "1",
                vc: "0.58",
                sd: "65.93",
                sr: "3.3",
                sz: "3.17",
                se: "444.59",
                ch: "522.44",
                sy: "59.63",
                tw: "426.98",
                tj: "5.58",
                tz: "22.43",
                th: "312.61",
                tl: "0.62",
                tg: "3.07",
                to: "0.3",
                tt: "21.2",
                tn: "43.86",
                tr: "729.05",
                tm: 0,
                ug: "17.12",
                ua: "136.56",
                ae: "239.65",
                gb: "2258.57",
                us: "14624.18",
                uy: "40.71",
                uz: "37.72",
                vu: "0.72",
                ve: "285.21",
                vn: "101.99",
                ye: "30.02",
                zm: "15.69",
                zw: "5.57"
            }, $scope.worldMap = {
                map: "world_en",
                backgroundColor: null,
                color: "#ffffff",
                hoverOpacity: 0.7,
                selectedColor: "#db5031",
                hoverColor: "#db5031",
                enableZoom: !0,
                showTooltip: !0,
                values: sample_data,
                scaleColors: ["#F1EFF0", "#c1bfc0"],
                normalizeFunction: "polynomial"
            }, $scope.USAMap = {
                map: "usa_en",
                backgroundColor: null,
                color: "#ffffff",
                selectedColor: "#db5031",
                hoverColor: "#db5031",
                enableZoom: !0,
                showTooltip: !0,
                selectedRegion: "MO"
            }, $scope.europeMap = {
                map: "europe_en",
                backgroundColor: null,
                color: "#ffffff",
                hoverOpacity: 0.7,
                selectedColor: "#db5031",
                hoverColor: "#db5031",
                enableZoom: !0,
                showTooltip: !0,
                values: sample_data,
                scaleColors: ["#F1EFF0", "#c1bfc0"],
                normalizeFunction: "polynomial"
            };
        }
    ]);

/**************************
 Timer
 **************************/
angular.module('countTo', []).controller("countTo", ["$scope",
        function($scope) {

            return $scope.countersmall1 = {
                countTo: 20,
                countFrom: 0
            },$scope.countersmall2 = {
                countTo: 42,
                countFrom: 0
            },$scope.countersmall3 = {
                countTo: 90,
                countFrom: 0
            },$scope.countersmall1dash = {
                countTo: 420,
                countFrom: 0
            },$scope.countersmall2dash = {
                countTo: 742,
                countFrom: 0
            },$scope.countersmall3dash = {
                countTo: 100,
                countFrom: 0
            };

        }]).directive('countTo', ['$timeout', function ($timeout) {
        return {
            replace: false,
            scope: true,
            link: function (scope, element, attrs) {

                var e = element[0];
                var num, refreshInterval, duration, steps, step, countTo, value, increment;

                var calculate = function () {
                    refreshInterval = 30;
                    step = 0;
                    scope.timoutId = null;
                    countTo = parseInt(attrs.countTo) || 0;
                    scope.value = parseInt(attrs.value, 10) || 0;
                    duration = (parseFloat(attrs.duration) * 1000) || 0;

                    steps = Math.ceil(duration / refreshInterval);
                    increment = ((countTo - scope.value) / steps);
                    num = scope.value;
                };

                var tick = function () {
                    scope.timoutId = $timeout(function () {
                        num += increment;
                        step++;
                        if (step >= steps) {
                            $timeout.cancel(scope.timoutId);
                            num = countTo;
                            e.textContent = countTo;
                        } else {
                            e.textContent = Math.round(num);
                            tick();
                        }
                    }, refreshInterval);

                };

                var start = function () {
                    if (scope.timoutId) {
                        $timeout.cancel(scope.timoutId);
                    }
                    calculate();
                    tick();
                };

                attrs.$observe('countTo', function (val) {
                    if (val) {
                        start();
                    }
                });

                attrs.$observe('value', function (val) {
                    start();
                });

                return true;
            }
        };

    }]);
angular.module('app.config', []).constant('top100SongsEver', [
  { url: 'http://upload.wikimedia.org/wikipedia/en/5/5e/U2_One.ogg', displayName: 'U2 - One' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/6/6c/NirvanaSmellsLikeTeenSpirit.ogg', displayName: 'Nirvana - Smells Like Teen Spirit' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/b/be/My_Name_Is.ogg', displayName: 'Eminem - My Name is' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/c/c4/Radiohead_-_Creep_%28sample%29.ogg', displayName: 'Radiohead - Creep' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/6/64/OasisLiveForever.ogg', displayName: 'Oasis - Live Forever' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Eagles_-_Hotel_California.ogg', displayName: 'Eagles - Hotel California' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Stairway_to_Heaven_3_sections.ogg', displayName: 'Led Zeppelin - Stairway to Heaven' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Pink_floyd_another_brick_in_the_wall_part_2.ogg', displayName: 'Pink Floyd - Another Brick in the Wall' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' },
  { url: 'http://upload.wikimedia.org/wikipedia/en/d/db/Layla_sample_1.ogg', displayName: 'Derek and the Dominos - Layla' }
]);
angular.module("app.controllers", [])
  .controller("AdminAppCtrl", ["$scope", "$location",
    function ($scope, $location) {
      $scope.checkIfOwnPage = function () {
        return _.contains(["/front", "/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/pages/forgot", "/pages/lock-screen"], $location.path());
      };

      $scope.checkIfFixedPage = function () {
        return _.contains(["/dashboard"], $location.path());
      };

      $scope.info = {
        theme_name: "Kimono",
        user_name: "Jane Doe"
      };

    }
  ])
  .controller("NavCtrl", ['navigationMenuService',
    function (navigationMenuService) {

      this.navigationState = navigationMenuService;

      this.SwitchToMenu = function () {
        navigationMenuService.menu = true;
        navigationMenuService.playlist = false;
      };

      this.SwitchToPlaylist = function () {
        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;
      };

    }
  ])
  .controller("ActionsCtrl", ['$scope', function ($scope) {

    this.toggleChat = function () {
      $('.chat-bar').toggleClass("visible");
    };

  }
  ]);

/*
 App Form validations
 Validator functions for form elements (signIn,signUp and custom forms)
 */

angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope",
  function ($scope) {
    return $scope.wizard = {
      firstName: "some name",
      lastName: "",
      email: "",
      password: "",
      age: "",
      address: ""
    }, $scope.isValidateStep1 = function () {
      return void 0;
    }, $scope.finishedWizard = function () {
      return void 0;
    };
  }
]).controller("formConstraintsCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.form = {
      required: "",
      minlength: "",
      maxlength: "",
      length_rage: "",
      type_something: "",
      confirm_type: "",
      foo: "",
      email: "",
      url: "",
      num: "",
      minVal: "",
      maxVal: "",
      valRange: "",
      pattern: ""
    }, original = angular.copy($scope.form), $scope.revert = function () {
      return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
    };
  }
]).controller("signinCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      email: "",
      password: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signin.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signin.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
]).controller("signupCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signup.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
]).directive("validateEquals", [
  function () {
    return {
      require: "ngModel",
      link: function (scope, ele, attrs, ngModelCtrl) {
        var validateEqual;
        return validateEqual = function (value) {
          var valid;
          return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
            value: void 0
          }) : void 0;
        }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
          return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0;
        });
      }
    };
  }
]);


/*
 App Form Ui Controls
 Controllers for form Ui components
 */

angular.module("app.ui.form.ctrls", []).controller("TagsDemoCtrl", ["$scope",
  function ($scope) {
    $scope.tags = ["foo", "bar"];
  }
]).controller("DatepickerDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.today = function () {
      $scope.dt = new Date();
    }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function () {
      $scope.showWeeks = !$scope.showWeeks;
    }, $scope.clear = function () {
      $scope.dt = null;
    }, $scope.disabled = function (date, mode) {
      return "day" === mode && (0 === date.getDay() || 6 === date.getDay());
    }, $scope.toggleMin = function () {
      var _ref;
      $scope.minDate = null !== (_ref = $scope.minDate) ? _ref : {
        "null": new Date()
      };
    }, $scope.toggleMin(), $scope.open = function ($event) {
      return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0;
    }, $scope.dateOptions = {
      "year-format": "'yy'",
      "starting-day": 1
    }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0];
  }
]).controller("TimepickerDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.mytime = new Date(), $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    }, $scope.ismeridian = !0, $scope.toggleMode = function () {
      $scope.ismeridian = !$scope.ismeridian;
    }, $scope.update = function () {
      var d;
      return d = new Date(), d.setHours(14), d.setMinutes(0), $scope.mytime = d;
    }, $scope.changed = function () {
      return void 0;
    }, $scope.clear = function () {
      $scope.mytime = null;
    };
  }
]).controller("TypeaheadCtrl", ["$scope",
  function ($scope) {
    return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  }
]).controller("RatingDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
      return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max);
    }, $scope.ratingStates = [{
      stateOn: "glyphicon-ok-sign",
      stateOff: "glyphicon-ok-circle"
    }, {
        stateOn: "glyphicon-star",
        stateOff: "glyphicon-star-empty"
      }, {
        stateOn: "glyphicon-heart",
        stateOff: "glyphicon-ban-circle"
      }, {
        stateOn: "glyphicon-heart"
      }, {
        stateOff: "glyphicon-off"
      }];
  }
]);


/*
 App Tables
 Controller for dynamic and other tables
 */

angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter",
  function ($scope, $filter) {
    var init;
    return $scope.stores = [{
      name: "Nijiya Market",
      price: "$$",
      sales: 292,
      rating: 4
    }, {
        name: "Eat On Monday Truck",
        price: "$",
        sales: 119,
        rating: 4.3
      }, {
        name: "Tea Era",
        price: "$",
        sales: 874,
        rating: 4
      }, {
        name: "Rogers Deli",
        price: "$",
        sales: 347,
        rating: 4.2
      }, {
        name: "MoBowl",
        price: "$$$",
        sales: 24,
        rating: 4.6
      }, {
        name: "The Milk Pail Market",
        price: "$",
        sales: 543,
        rating: 4.5
      }, {
        name: "Nob Hill Foods",
        price: "$$",
        sales: 874,
        rating: 4
      }, {
        name: "Scratch",
        price: "$$$",
        sales: 643,
        rating: 3.6
      }, {
        name: "Gochi Japanese Fusion Tapas",
        price: "$$$",
        sales: 56,
        rating: 4.1
      }, {
        name: "Cost Plus World Market",
        price: "$$",
        sales: 79,
        rating: 4
      }, {
        name: "Bumble Bee Health Foods",
        price: "$$",
        sales: 43,
        rating: 4.3
      }, {
        name: "Costco",
        price: "$$",
        sales: 219,
        rating: 3.6
      }, {
        name: "Red Rock Coffee Co",
        price: "$",
        sales: 765,
        rating: 4.1
      }, {
        name: "99 Ranch Market",
        price: "$",
        sales: 181,
        rating: 3.4
      }, {
        name: "Mi Pueblo Food Center",
        price: "$",
        sales: 78,
        rating: 4
      }, {
        name: "Cucina Venti",
        price: "$$",
        sales: 163,
        rating: 3.3
      }, {
        name: "Sufi Coffee Shop",
        price: "$",
        sales: 113,
        rating: 3.3
      }, {
        name: "Dana Street Roasting",
        price: "$",
        sales: 316,
        rating: 4.1
      }, {
        name: "Pearl Cafe",
        price: "$",
        sales: 173,
        rating: 3.4
      }, {
        name: "Posh Bagel",
        price: "$",
        sales: 140,
        rating: 4
      }, {
        name: "Artisan Wine Depot",
        price: "$$",
        sales: 26,
        rating: 4.1
      }, {
        name: "Hong Kong Chinese Bakery",
        price: "$",
        sales: 182,
        rating: 3.4
      }, {
        name: "Starbucks",
        price: "$$",
        sales: 97,
        rating: 3.7
      }, {
        name: "Tapioca Express",
        price: "$",
        sales: 301,
        rating: 3
      }, {
        name: "House of Bagels",
        price: "$",
        sales: 82,
        rating: 4.4
      }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
        var end, start;
        return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end);
      }, $scope.onFilterChange = function () {
        return $scope.select(1), $scope.currentPage = 1, $scope.row = "";
      }, $scope.onNumPerPageChange = function () {
        return $scope.select(1), $scope.currentPage = 1;
      }, $scope.onOrderChange = function () {
        return $scope.select(1), $scope.currentPage = 1;
      }, $scope.search = function () {
        return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange();
      }, $scope.order = function (rowName) {
        return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0;
      }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
        return $scope.search(), $scope.select($scope.currentPage);
      }), $scope.search();
  }
]);

/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module("app.ui.ctrls", []).controller("NotifyCtrl", ["$scope", "loggit",
  function ($scope, loggit) {
    $scope.notify = function (type) {
      switch (type) {
        case "info":
          return loggit.log("Hello! This is an alert of the info importance level.");
        case "success":
          return loggit.logSuccess("Great! You did something successfully.");
        case "warning":
          return loggit.logWarning("Warning! Something that happened that is not critical but important.");
        case "error":
          return loggit.logError("Error! Something went terribly wrong and needs your attention.");
      }
    };
  }
]).controller("AlertDemoCtrl", ["$scope",
  function ($scope) {
    $scope.alerts = [{
      type: "success",
      msg: "Great! You did something successfully."
    }, {
        type: "info",
        msg: "Hello! This is an alert of the info importance level."
      }, {
        type: "warning",
        msg: "Warning! Something that happened that is not critical but important."
      }, {
        type: "danger",
        msg: "Error! Something went terribly wrong and needs your attention."
      }];

    $scope.addAlert = function () {
      $scope.alerts.push({ msg: 'Another alert!' });
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };
  }
]).controller("ProgressDemoCtrl", ["$scope",
  function ($scope) {
    $scope.max = 200;

    $scope.random = function () {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function () {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        $scope.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
      }
    };
    $scope.randomStacked();
  }
]).controller("AccordionDemoCtrl", ["$scope",
  function ($scope) {
    return $scope.oneAtATime = !0, $scope.groups = [{
      title: "First Group Header",
      content: "First Group Body"
    }, {
        title: "Second Group Header",
        content: "Second Group Body"
      }, {
        title: "Third Group Header",
        content: "Third Group Body"
      }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {
        isFirstOpen: !0,
        isFirstOpen1: !0,
        isFirstOpen2: !0,
        isFirstOpen3: !0,
        isFirstOpen4: !0,
        isFirstOpen5: !0,
        isFirstOpen6: !0
      }, $scope.addItem = function () {
        var newItemNo;
        newItemNo = $scope.items.length + 1;
        $scope.items.push("Item " + newItemNo);
      };
  }
]).controller("CollapseDemoCtrl", ["$scope",
  function ($scope) {
    $scope.isCollapsed = !1;
  }
])
  .controller("ModalDemoCtrl", ["$scope", "$uibModal", "$log",
    function ($scope, $uibModal, $log) {
      $scope.items = ['item1', 'item2', 'item3'];

      $scope.open = function (size) {

        var uibModalInstance = $uibModal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        uibModalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
    }
  ]).controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", "items",
    function ($scope, $uibModalInstance, items) {
      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };

      $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }
  ])
  .controller("PaginationDemoCtrl", ["$scope",
    function ($scope) {
      $scope.totalItems = 64;
      $scope.currentPage = 4;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };

      $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
      };

      $scope.maxSize = 5;
      $scope.bigTotalItems = 175;
      $scope.bigCurrentPage = 1;
    }
  ])
  .controller("MapDemoCtrl", ["$scope", "$http", "$interval",
    function ($scope, $http, $interval) {
      var i, markers;
      for (markers = [], i = 0; 8 > i;) {
        markers[i] = new google.maps.Marker({
          title: "Marker: " + i
        });
        i++;
      }
      $scope.GenerateMapMarkers = function () {
        var d, lat, lng, loc, numMarkers;
        for (d = new Date(), $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;) {
          lat = 38.73 + Math.random() / 100;
          lng = -9.14 + Math.random() / 100;
          loc = new google.maps.LatLng(lat, lng);
          markers[i].setPosition(loc);
          markers[i].setMap($scope.map);
          i++;
        }
      };
      $interval($scope.GenerateMapMarkers, 2e3);
    }
  ])
  .controller("TreeDemoCtrl", ["$scope",
    function ($scope) {
      // Parameters

      $scope.list = [{
        "id": 1,
        "title": "1. dragon-breath",
        "items": []
      }, {
          "id": 2,
          "title": "2. moiré-vision",
          "items": [{
            "id": 21,
            "title": "2.1. tofu-animation",
            "items": [{
              "id": 211,
              "title": "2.1.1. spooky-giraffe",
              "items": []
            }, {
                "id": 212,
                "title": "2.1.2. bubble-burst",
                "items": []
              }]
          }, {
              "id": 22,
              "title": "2.2. barehand-atomsplitting",
              "items": []
            }]
        }, {
          "id": 3,
          "title": "3. unicorn-zapper",
          "items": []
        }, {
          "id": 4,
          "title": "4. romantic-transclusion",
          "items": []
        }];

      $scope.callbacks = {};

      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.items.push({
          id: nodeData.id * 10 + nodeData.items.length,
          title: nodeData.title + '.' + (nodeData.items.length + 1),
          items: []
        });
      };
    }
  ]);


/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module('app.music', ['mediaPlayer', 'ngDragDrop'])
  .controller('PlayListCtrl', ['$scope', 'PlayListSrv', 'CreatePlaylistSrv',
    function ($scope, PlayListSrv, CreatePlaylistSrv) {
      this.audioPlaylist = [];
      var CreateNewPlaylistSrv = CreatePlaylistSrv;

      this.userPlaylists = PlayListSrv.playlists;

      this.addSong = function (audioElement) {
        this.audioPlaylist.push(angular.copy(audioElement));
      };

      this.removeSong = function (index) {
        this.audioPlaylist.splice(index, 1);
      };

      this.dropSong = function (audioElement, index) {
        this.audioPlaylist.splice(index, 0, angular.copy(audioElement));
      };

      this.getSongImage = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].image;
        }
      };

      this.getSongArtist = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].artist;
        }
      };

      this.getSongName = function (currentTrack) {
        if (typeof this.audioPlaylist[currentTrack - 1] != "undefined") {
          return this.audioPlaylist[currentTrack - 1].title;
        }
      };

      this.seekPercentage = function ($event) {
        var percentage = ($event.offsetX / $event.target.offsetWidth);
        if (percentage <= 1) {
          return percentage;
        } else {
          return 0;
        }
      };

      this.createNewPlaylist = function (song) {

        CreateNewPlaylistSrv.openCreateModal(song);

      };

    }]).controller('ArtistListingCtrl', ['$scope', 'ArtistListingSrv',
      function ($scope, ArtistListingSrv) {

        $scope.ArtistsSrv = ArtistListingSrv;

        ArtistListingSrv.getArtists(function (data) {
          // no need to read data because its binded to $scope.AlbumsSrv
          // You can however process something only after the data comes back
        });

      }]).controller('AlbumsCtrl', ['$scope', 'AlbumsListingSrv',
        function ($scope, AlbumsListingSrv) {

          $scope.AlbumsSrv = AlbumsListingSrv;

          AlbumsListingSrv.getAlbums(function (data) {
            // no need to read data because its binded to $scope.AlbumsSrv
            // You can however process something only after the data comes back
          });


        }]).controller('GenresCtrl', ['$scope', 'GenresListingSrv',
          function ($scope, GenresListingSrv) {

            $scope.GenresSrv = GenresListingSrv;

            GenresListingSrv.getGenres(function (data) {
              // no need to read data because its binded to $scope.GenresSrv
              // You can however process something only after the data comes back
            });


          }])
  .controller('AlbumCtrl', ['$scope', '$routeParams', 'AlbumSrv', 'PlayListSrv', 'navigationMenuService', 'loggit',
    function ($scope, $routeParams, AlbumSrv, PlayListSrv, navigationMenuService, loggit) {

      this.AlbumSrv = AlbumSrv;
      var albumPlaylistVar = [];

      this.following = "Follow album";
      this.following_class = "btn-default";

      this.follow = function () {

        this.following = "Following";
        this.following_class = "btn-primary";

        loggit.logSuccess('Yaay!! You are now following this album');

      };

      AlbumSrv.getAlbum($routeParams.title, function (response) {

        if (typeof response.songs != "undefined") {

          _.map(response.songs, function (song) {

            /*Put them all together in one single list (for adding to new playlists for example)*/

            var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);

            albumPlaylistVar.push({
              image: song.image,
              src: song.url,
              url: song.url,
              type: song.type,
              artist: parseTitle[1],
              title: parseTitle[2],
              displayName: song.displayName
            });
          });

          $scope.albumName = response.name;
          $scope.albumImage = response.image;
          $scope.albumBanner = response.banner;
          $scope.albumGenre = response.genre;
          $scope.albumAbout = response.about;
        }

      });

      $scope.albumPlaylistVar = albumPlaylistVar;

      this.addSongs = function (playlist, callback) {

        _.each(albumPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((albumPlaylistVar.indexOf(audioElement) + 1) == albumPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function (song, playlist) {

        PlayListSrv.addSongToPlaylist(song, playlist);
      };

      this.toggleAlbumsList = function () {
        this.AlbumList = true;
        this.FullList = false;
      };

    }])
  .controller('ArtistCtrl', ['$scope', '$routeParams', 'ArtistSrv', 'PlayListSrv', 'navigationMenuService', 'loggit',
    function ($scope, $routeParams, ArtistSrv, PlayListSrv, navigationMenuService, loggit) {

      this.ArtistSrv = ArtistSrv;
      var artistPlaylistVar = [],
        artistPlaylistAlbums = [];


      this.AlbumList = true;
      this.FullList = false;
      this.following = "Follow artist";
      this.following_class = "btn-default";

      this.follow = function () {

        this.following = "Following";
        this.following_class = "btn-primary";

        loggit.logSuccess('Yaay!! You are now following this artist');

      };

      ArtistSrv.getArtist($routeParams.title, function (response) {

        if (typeof response.albums != "undefined") {

          _.map(response.albums, function (album) {

            artistPlaylistAlbums.push({
              album_name: album.album_name,
              album_image: album.album_image,
              album_release: album.album_release,
              songs: []
            });

            _.map(album.songs, function (song) {

              /*Put them all together in one single list (for adding to new playlists for example)*/

              var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);

              artistPlaylistVar.push({
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName: song.displayName
              });

              /*Put songs also in this artist ordered by album*/

              artistPlaylistAlbums[artistPlaylistAlbums.length - 1].songs.push({
                image: song.image,
                src: song.url,
                url: song.url,
                type: song.type,
                artist: parseTitle[1],
                title: parseTitle[2],
                displayName: song.displayName
              });
            });

          });

          $scope.artistName = response.name;
          $scope.artistImage = response.image;
          $scope.artistBanner = response.banner;
          $scope.artistGenre = response.genre;
          $scope.artistAbout = response.about;

        }

      });

      $scope.artistPlaylist = artistPlaylistVar;
      $scope.artistPlaylistAlbums = artistPlaylistAlbums;


      this.addSongs = function (playlist, callback) {

        _.each(artistPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((artistPlaylistVar.indexOf(audioElement) + 1) == artistPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function (song, playlist) {

        PlayListSrv.addSongToPlaylist(song, playlist);
      };

      this.toggleAlbumsList = function () {
        this.AlbumList = true;
        this.FullList = false;
      };

      this.toggleFullList = function () {
        this.AlbumList = false;
        this.FullList = true;
      };


    }])
  .controller('UserPlayListCtrl', ['$routeParams', 'PlayListSrv', 'navigationMenuService',
    function ($routeParams, PlayListSrv, navigationMenuService) {

      this.PlayListSrv = PlayListSrv;
      var UserPlaylistVar = [],
        playlistTitle, playlistImage, playlistBanner, playlistGenre, playlistUrlName;

      PlayListSrv.getPlaylist($routeParams.title, function (response) {

        if (typeof response.songs != "undefined") {

          _.map(response.songs, function (song) {
            var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/);
            UserPlaylistVar.push({
              image: song.image,
              src: song.url,
              url: song.url,
              type: song.type,
              artist: parseTitle[1],
              title: parseTitle[2],
              displayName: song.displayName
            });
          });

          playlistTitle = response.name;
          playlistImage = response.image;
          playlistBanner = response.banner;
          playlistGenre = response.genre;
          playlistUrlName = response.url_name;
        }

      });

      this.userPlaylist = UserPlaylistVar;
      this.playlistName = playlistTitle;
      this.playlistImage = playlistImage;
      this.playlistBanner = playlistBanner;
      this.playlistGenre = playlistGenre;
      this.playlistUrlName = playlistUrlName;

      this.addSongs = function (playlist, callback) {

        _.each(UserPlaylistVar, function (audioElement) {
          playlist.push(angular.copy(audioElement));

          if ((UserPlaylistVar.indexOf(audioElement) + 1) == UserPlaylistVar.length) {
            // Callback goes here
            if (callback) {
              callback();
            }
          }

        });

        navigationMenuService.menu = false;
        navigationMenuService.playlist = true;

      };

      this.addSongsAndPlay = function (playlist, mediaPlayer) {

        this.addSongs(playlist, function () {

          setTimeout(function () {
            mediaPlayer.play();
          }, 1000);

        });

      };

      this.addSongToPlaylist = function (song, playlist) {

        PlayListSrv.addSongToPlaylist(song, playlist);
      };

      this.removeSongFromPlaylist = function (song, playlist) {

        PlayListSrv.removeSongFromPlaylist(song, playlist);

        //Remove from client so he notices immediately
        this.userPlaylist = _.without(this.userPlaylist, song);
      };

    }]).controller("CreatePlaylistInstanceCtrl", ["$scope", "$uibModalInstance", 'playlistName', 'song', 'loggit',
      function ($scope, $uibModalInstance, playlistName, song, loggit) {

        $scope.playlistName = playlistName;
        $scope.song = song;

        $scope.ok = function () {

          if ($scope.playlistName !== "") {
            $uibModalInstance.close($scope);
          }
          else {
            $uibModalInstance.dismiss('cancel');
            loggit.logError("Error! Could not create a playlist with no name..");
          }
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }
    ]);

angular.module("app.directives", []).directive("imgHolder", [
        function() {
            return {
                link: function(scope, ele) {
                    return Holder.run({
                        images: ele[0]
                    });
                }
            };
        }
    ]).directive("customBackground", function() {
        return {
            controller: ["$scope", "$element", "$location",
                function($scope, $element, $location) {
                    var addBg, path;
                    return path = function() {
                        return $location.path();
                    }, addBg = function(path) {
                        switch ($element.removeClass("body-home body-special body-tasks body-lock"), path) {
                            case "/":
                                return $element.addClass("body-home");
                            case "/front":
                            case "/404":
                            case "/pages/500":
                            case "/pages/signin":
                            case "/pages/signup":
                            case "/pages/forgot":
                                return $element.addClass("body-special");
                            case "/pages/lock-screen":
                                return $element.addClass("body-special body-lock");
                            case "/tasks":
                                return $element.addClass("body-tasks");
                        }
                    }, addBg($location.path()), $scope.$watch(path, function(newVal, oldVal) {
                        return newVal !== oldVal ? addBg($location.path()) : void 0;
                    });
                }
            ]
        };
    }).directive("toggleMinNav", ["$rootScope",
        function($rootScope) {
            return {
                link: function(scope, ele) {
                    var $content, $nav, $window, Timer, app, updateClass;

                    return app = $("#app"), $window = $(window), $nav = $("#nav-container"), $content = $("#content"), ele.on("click", function(e) {

                        if(app.hasClass("nav-min")){
                            app.removeClass("nav-min");
                        }
                        else{
                            app.addClass("nav-min");
                            $rootScope.$broadcast("minNav:enabled");
                            e.preventDefault();
                        }

                    }), Timer = void 0, updateClass = function() {
                        var width;
                        return width = $window.width(), 980 > width ? app.addClass("nav-min") : void 0;
                    },initResize = function() {
                        var width;
                        return width = $window.width(), 980 > width ? app.addClass("nav-min") : app.removeClass("nav-min");
                    }, $window.resize(function() {
                        var t;
                        return clearTimeout(t), t = setTimeout(updateClass, 300);
                    }),initResize();

                }
            };
        }
    ]).directive("collapseNav", [
        function() {
            return {
                link: function(scope, ele) {
                    var $a, $aRest, $lists, $listsRest, app;
                    return $lists = ele.find("ul").parent("li"),
                        //$lists.append('<i class="fa fa-arrow-circle-o-right icon-has-ul"></i>'),
                        $a = $lists.children("a"),
                        $listsRest = ele.children("li").not($lists),
                        $aRest = $listsRest.children("a"),
                        app = $("#app"),
                        $a.on("click", function(event) {
                            var $parent, $this;
                            return ($this = $(this),
                                $parent = $this.parent("li"),
                                $lists.not($parent).removeClass("open").find("ul").slideUp(),
                                $parent.toggleClass("open").find("ul").stop().slideToggle(), event.preventDefault());
                        }), $aRest.on("click", function() {
                        return $lists.removeClass("open").find("ul").slideUp();
                    }), scope.$on("minNav:enabled", function() {
                        return $lists.removeClass("open").find("ul").slideUp();
                    });
                }
            };
        }
    ]).directive("highlightActive", [
        function() {
            return {
                controller: ["$scope", "$element", "$attrs", "$location",
                    function($scope, $element, $attrs, $location) {
                        var highlightActive, links, path;
                        return links = $element.find("a"), path = function() {
                            return $location.path();
                        }, highlightActive = function(links, path) {
                            return path = "#" + path, angular.forEach(links, function(link) {
                                var $li, $link, href;
                                return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0;
                            });
                        }, highlightActive(links, $location.path()), $scope.$watch(path, function(newVal, oldVal) {
                            return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0;
                        });
                    }
                ]
            };
        }
    ]).directive("toggleOffCanvas", [
        function() {
            return {
                link: function(scope, ele) {
                    return ele.on("click", function() {
                        return $("#app").toggleClass("on-canvas").toggleClass("nav-min");
                    });
                }
            };
        }
    ]).directive("slimScroll", [
        function() {
            return {
                link: function(scope, ele, attrs) {
                    return ele.slimScroll({
                        height: attrs.scrollHeight || "100%"
                    });
                }
            };
        }
    ]).directive("goBack", [
        function() {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$window",
                    function($scope, $element, $window) {
                        return $element.on("click", function() {
                            return $window.history.back();
                        });
                    }
                ]
            };
        }
    ]);



/*
 App Form Ui Directives
 Custom directives for Form Ui elements
 */

angular.module("app.ui.form.directives", []).directive("uiRangeSlider", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    return ele.slider();
                }
            };
        }
    ]).directive("uiFileUpload", [
        function() {
            return {
                restrict: "A",
                link: function(scope, ele) {
                    return ele.bootstrapFileInput();
                }
            };
        }
    ]).directive("uiSpinner", [
        function() {
            return {
                restrict: "A",
                compile: function(ele) {
                    return ele.addClass("ui-spinner"), {
                        post: function() {
                            return ele.spinner();
                        }
                    };
                }
            };
        }
    ]).directive("uiWizardForm", [
        function() {
            return {
                link: function(scope, ele) {
                    return ele.steps();
                }
            };
        }
    ]);


angular.module("app.ui.services", []).factory("loggit", [
    function() {
        var logIt;
        return toastr.options = {
            closeButton: !0,
            positionClass: "toast-top-right",
            timeOut: "3000"
        }, logIt = function(message, type) {
            return toastr[type](message);
        }, {
            log: function(message) {
                logIt(message, "info");
            },
            logWarning: function(message) {
                logIt(message, "warning");
            },
            logSuccess: function(message) {
                logIt(message, "success");
            },
            logError: function(message) {
                logIt(message, "error");
            }
        };
    }
]).factory("ArtistListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var ArtistListingObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    ArtistListingObj.getArtists = function(callback){

      $http.get('dist/data/artists.json').success(function(data) {

        artists = data;

        ArtistListingObj.artists = artists;
        callback(data);

      });

    };

    return ArtistListingObj;

  }).factory("AlbumsListingSrv",
  function($http) {

    /**************************
     Gets artists list with image url and name from the Server
     **************************/

    var AlbumListingObj = {},
      albums = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    AlbumListingObj.getAlbums = function(callback){

      $http.get('dist/data/albums.json').success(function(data) {

        albums = data;

        AlbumListingObj.albums = albums;
        callback(data);

      });

    };

    return AlbumListingObj;

  })
  .factory("GenresListingSrv",
  function($http) {

    /**************************
     Gets genres list with image url and name from the Server
     **************************/

    var GenresListingObj = {},
      genres = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    GenresListingObj.getGenres = function(callback){

      $http.get('dist/data/genres.json').success(function(data) {

        genres = data;

        GenresListingObj.genres = genres;
        callback(data);

      });

    };

    return GenresListingObj;


  }).factory("AlbumSrv",
  function($http) {

    /**************************
     Gets artists with all songs from the "Server"
     **************************/

    var PlayListObj = {},
      albums = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    PlayListObj.getSongs = function(callback){

      $http.get('dist/data/albumsMusic.json').success(function(data) {

        albums = data;

        PlayListObj.albums = albums;
        callback(data);

      });

    };

    PlayListObj.getAlbum = function(title,callback) {

      PlayListObj.getSongs(function(data){

        _.map(PlayListObj.albums, function(albumSongs){

          if(albumSongs.url_name == title){
            return callback(albumSongs);
          }
        });

      });

    };

    return PlayListObj;

  })
  .factory("ArtistSrv",
  function($http) {

    /**************************
     Gets artists with all songs from the "Server"
     **************************/

    var PlayListObj = {},
      artists = [];

    /**************************
     Get data from the .json files (Replace by your own webserver)
     **************************/

    PlayListObj.getSongs = function(callback){

      $http.get('dist/data/artistsMusic.json').success(function(data) {

        artists = data;

        PlayListObj.artists = artists;
        callback(data);

      });

    };

    PlayListObj.getArtist = function(title,callback) {

      PlayListObj.getSongs(function(data){

        _.map(PlayListObj.artists, function(artistSongs){

          if(artistSongs.url_name == title){
            return callback(artistSongs);
          }
        });

      });

    };

    return PlayListObj;

  })
  .factory("PlayListSrv",
  function() {

    /**************************
     Saves and loads Playlists from the localStorage
     **************************/

    var PlayListObj = {},
      playlists = {
        list: []
      };

    var storage_id = "playlists_local_list";

    /**************************
     Initialize with some default values
     **************************/

    playlists.list[0] = {
      url_name: 'greatest-heats',
      name: 'Greatest hits',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song10.jpg',
      genre: [],
      songs: [
        {image: 'dist/images/songs/song1.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - Come Together', type: "audio/mpeg" },
        {image: 'dist/images/songs/song2.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song3.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song4.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song5.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Taxman', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song6.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - Come Together', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song7.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song8.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song9.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  }
      ]
    };

    playlists.list[1] = {
      url_name: 'songsofdream',
      name: 'Sons of Dream',
      banner: 'dist/images/playlists/playlistbanner.jpg',
      image: 'dist/images/songs/song11.jpg',
      genre: ['New age','Celtic','World'],
      songs: [
        {image: 'dist/images/songs/song12.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Enya - Laetha', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song13.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Enya - Only if', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song14.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Enya - Trains and winter rains', type: "audio/mpeg" },
        {image: 'dist/images/songs/song15.jpg', url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3', displayName: 'Beatles - Drive my car', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song16.jpg', url: 'http://ccmixter.org/content/unreal_dm/unreal_dm_-_Recycle_This.mp3', displayName: 'Beatles - Loser', type: "audio/mpeg"  },
        {image: 'dist/images/songs/song17.jpg', url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3', displayName: 'Beatles - All my loving', type: "audio/mpeg"  }
      ]
    };

    PlayListObj.get = function (){
      return JSON.parse(localStorage.getItem(storage_id) || JSON.stringify(playlists));
    };

    PlayListObj.put = function (playlist,callback){

      PlayListObj.playlists.push(playlist);

      localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));

      setTimeout(function(){
        callback(localStorage.getItem(storage_id));
      },500);
    };

    PlayListObj.update = function (playlists){

      PlayListObj.playlists = playlists;

      return localStorage.setItem(storage_id, JSON.stringify(PlayListObj.playlistsObj));
    };

    //Replace with get from localStorage
    PlayListObj.playlistsObj = PlayListObj.get();
    //PlayListObj.playlistsObj = playlists;

    PlayListObj.playlists = PlayListObj.playlistsObj.list;

    PlayListObj.getPlaylist = function(title,callback) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.url_name == title){
          return callback(playlist);
        }
      });

    };

    PlayListObj.addSongToPlaylist = function(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          playlist.songs.push(song);

          PlayListObj.update(PlayListObj.playlists);
        }

      });

    };

    PlayListObj.removeSongFromPlaylist = function(song,playListName) {

      _.map(PlayListObj.playlists, function(playlist){

        if(playlist.name == playListName){

          _.map(playlist.songs, function(songOnList){

            if(songOnList.url == song.url){

              playlist.songs = _.without(playlist.songs,songOnList);

              console.log(PlayListObj.playlists);

              PlayListObj.update(PlayListObj.playlists);

            }

          });

        }

      });

    };

    return PlayListObj;

  }).factory("navigationMenuService",
  function() {

    /**************************
     Provides a way to toggle the menu scope
     **************************/

    var MENU_STATES = {
      menu:true,
      playing:false
    };

    return MENU_STATES;


  }).factory("CreatePlaylistSrv",['$uibModal','$log','PlayListSrv','$location',function($uibModal,$log,PlayListSrv,$location) {

    /**************************
     Provides a way to create a new playlist
     **************************/

    var CreatePlayListSrvObj = {};

    CreatePlayListSrvObj.openCreateModal = function(song){

     var modalInstance = $uibModal.open({
       templateUrl: 'app/views/forms/create_playlist.html',
       controller: 'CreatePlaylistInstanceCtrl',
       resolve: {
         playlistName: function () {
           return '';
         },
         song: function () {
           return song;
         }
       }
     });

     modalInstance.result.then(function (response) {

       var songs = [],
         playlistName;

       if(typeof response.song != "undefined"){
         songs.push(response.song);
       }

       playlistName = response.playlistName;

       //Callback for a Okay on Save new playlist
       var url_name = playlistName.toLowerCase().replace(" ","-"),
       new_playlist = {
         url_name: url_name,
         name: playlistName,
         banner: 'dist/images/playlists/playlistbanner.jpg',
         image: 'dist/images/songs/song17.jpg',
         genre: [],
         songs: songs
       };

       PlayListSrv.put(new_playlist,function(response){

         window.location = "#/playlist/" + url_name;
       });

     }, function () {
        $log.info('Modal dismissed at: ' + new Date());
     });

     };

    return CreatePlayListSrvObj;


  }]);
