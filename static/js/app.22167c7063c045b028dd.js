webpackJsonp([1],{"8wIH":function(t,a){},Kcvw:function(t,a){},NHnr:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=r("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},i,!1,function(t){r("Kcvw")},null,null).exports,n=r("/ocq"),c=r("d7EF"),o=r.n(c),l=r("W3Iv"),d=r.n(l),p=r("Zrlr"),f=r.n(p),x=r("wxAW"),y=r.n(x),v=r("yHiI"),u=r.n(v),h=function(t,a,r){function e(t){t&&(t.setTargetAtTime||(t.setTargetAtTime=t.setTargetValueAtTime))}var i=!1;return window.hasOwnProperty("webkitAudioContext")&&!window.hasOwnProperty("AudioContext")&&(i=!0,window.AudioContext=webkitAudioContext,AudioContext.prototype.hasOwnProperty("createGain")||(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),AudioContext.prototype.hasOwnProperty("createDelay")||(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode),AudioContext.prototype.hasOwnProperty("createScriptProcessor")||(AudioContext.prototype.createScriptProcessor=AudioContext.prototype.createJavaScriptNode),AudioContext.prototype.hasOwnProperty("createPeriodicWave")||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable),AudioContext.prototype.internal_createGain=AudioContext.prototype.createGain,AudioContext.prototype.createGain=function(){var t=this.internal_createGain();return e(t.gain),t},AudioContext.prototype.internal_createDelay=AudioContext.prototype.createDelay,AudioContext.prototype.createDelay=function(t){var a=t?this.internal_createDelay(t):this.internal_createDelay();return e(a.delayTime),a},AudioContext.prototype.internal_createBufferSource=AudioContext.prototype.createBufferSource,AudioContext.prototype.createBufferSource=function(){var t=this.internal_createBufferSource();return t.start?(t.internal_start=t.start,t.start=function(a,r,e){void 0!==e?t.internal_start(a||0,r,e):t.internal_start(a||0,r||0)}):t.start=function(t,a,r){a||r?this.noteGrainOn(t||0,a,r):this.noteOn(t||0)},t.stop?(t.internal_stop=t.stop,t.stop=function(a){t.internal_stop(a||0)}):t.stop=function(t){this.noteOff(t||0)},e(t.playbackRate),t},AudioContext.prototype.internal_createDynamicsCompressor=AudioContext.prototype.createDynamicsCompressor,AudioContext.prototype.createDynamicsCompressor=function(){var t=this.internal_createDynamicsCompressor();return e(t.threshold),e(t.knee),e(t.ratio),e(t.reduction),e(t.attack),e(t.release),t},AudioContext.prototype.internal_createBiquadFilter=AudioContext.prototype.createBiquadFilter,AudioContext.prototype.createBiquadFilter=function(){var t=this.internal_createBiquadFilter();return e(t.frequency),e(t.detune),e(t.Q),e(t.gain),t},AudioContext.prototype.hasOwnProperty("createOscillator")&&(AudioContext.prototype.internal_createOscillator=AudioContext.prototype.createOscillator,AudioContext.prototype.createOscillator=function(){var t=this.internal_createOscillator();return t.start?(t.internal_start=t.start,t.start=function(a){t.internal_start(a||0)}):t.start=function(t){this.noteOn(t||0)},t.stop?(t.internal_stop=t.stop,t.stop=function(a){t.internal_stop(a||0)}):t.stop=function(t){this.noteOff(t||0)},t.setPeriodicWave||(t.setPeriodicWave=t.setWaveTable),e(t.frequency),e(t.detune),t})),window.hasOwnProperty("webkitOfflineAudioContext")&&!window.hasOwnProperty("OfflineAudioContext")&&(i=!0,window.OfflineAudioContext=webkitOfflineAudioContext),i},g=function(){function t(){f()(this,t);var a=h(window);this.audioContext=new AudioContext,this.filterNode=this.audioContext.createBiquadFilter(),this.filterNode.type="lowpass",this.analyserNode=this.audioContext.createAnalyser(),this.analyserNode.fftSize=a?2048:8192,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=0,this.filterNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination)}return y()(t,[{key:"connectMicrophone",value:function(){var t=this;this.audioContext.resume(),navigator.mediaDevices.getUserMedia({audio:!0}).then(function(a){t.microphoneNode=t.audioContext.createMediaStreamSource(a),t.microphoneNode.connect(t.filterNode)},function(t){return console.log(t)})}},{key:"disconnectMicrophone",value:function(){this.microphoneNode.disconnect(),this.audioContext.suspend()}},{key:"getDetectedFundamental",value:function(){var a=this.analyserNode.frequencyBinCount,r=new Float32Array(a);this.analyserNode.getFloatFrequencyData(r);var e=t.getPeakIndex(r),i=t.gaussianInterpolation(e,r);return t.getInferredPeakFreq(this.audioContext,r.length,i)}}],[{key:"getPeakIndex",value:function(t){return t.reduce(function(t,a,r,e){return a>e[t]?r:t},0)}},{key:"gaussianInterpolation",value:function(t,a){var r=a[t-1],e=a[t],i=a[t+1];return t+(i-r)/(2*(2*e-i-r))}},{key:"getInferredPeakFreq",value:function(a,r,e){var i=r,s=a.sampleRate/2/i;return t.toThreeDecimals(e*s)}},{key:"toThreeDecimals",value:function(t){return Math.round(1e3*t)/1e3}},{key:"nearestNoteFromFreq",value:function(t){return d()(u.a).reduce(function(a,r){return Math.abs(r[1]-t)<Math.abs(a[1]-t)?r:a})}},{key:"distanceinCents",value:function(t){var a=t.referenceFreq,r=void 0===a?0:a,e=t.checkFreq,i=void 0===e?0:e;return 1200*Math.log(i/r)/Math.log(2)}}]),t}(),C={name:"NeedleTuner",mixins:[{data:function(){return{tuner:new g,distanceInCents:0,nearestNote:"",isMicListening:!1}},destroyed:function(){this.stopUpdatingNoteAndDistance()},methods:{updateNoteAndDistance:function(){var t=this.tuner.getDetectedFundamental(),a=g.nearestNoteFromFreq(t),r=o()(a,2),e=r[0],i=r[1];this.nearestNote=e.replace(/[0-9]/g,""),this.distanceInCents=g.distanceinCents({referenceFreq:i,checkFreq:t})||0,this.isMicListening&&requestAnimationFrame(this.updateNoteAndDistance)},toggleMicrophone:function(){this.isMicListening?this.stopUpdatingNoteAndDistance():(requestAnimationFrame(this.updateNoteAndDistance),this.tuner.connectMicrophone()),this.isMicListening=!this.isMicListening},stopUpdatingNoteAndDistance:function(){var t=this;requestAnimationFrame(function(){t.tuner.disconnectMicrophone(),t.distanceInCents=0,t.nearestNote="",t.$forceUpdate()})}}}],computed:{needleTransform:function(){return"rotate("+this.distanceInCents+" 179.24 201.58)"}}},A={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("svg",{attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 527.24 307.74"}},[r("defs",[r("linearGradient",{attrs:{id:"linear-gradient",x1:"42.24",y1:"363.7",x2:"566.48",y2:"363.7",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#828487"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#5a5b5d"}})],1),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient",cx:"730.79",cy:"394.46",r:"0.5",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#7b7c7f"}}),t._v(" "),r("stop",{attrs:{offset:"0.54","stop-color":"#616164"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#4f4f51"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-2",x1:"167.64",y1:"49.97",x2:"190.69",y2:"49.97",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#231f20"}}),t._v(" "),r("stop",{attrs:{offset:"0.53","stop-color":"#252122"}}),t._v(" "),r("stop",{attrs:{offset:"0.72","stop-color":"#2b2829"}}),t._v(" "),r("stop",{attrs:{offset:"0.86","stop-color":"#353334"}}),t._v(" "),r("stop",{attrs:{offset:"0.97","stop-color":"#444445"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#4a4b4c"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-3",x1:"172",y1:"47.69",x2:"186.73",y2:"47.69","xlink:href":"#linear-gradient-2"}}),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-4",x1:"172.41",y1:"37.66",x2:"186.31",y2:"37.66","xlink:href":"#linear-gradient-2"}}),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-5",x1:"178.66",y1:"49.02",x2:"179.86",y2:"49.02","xlink:href":"#linear-gradient-2"}}),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-6",x1:"158.5",y1:"263.86",x2:"167",y2:"263.86",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#231f20"}}),t._v(" "),r("stop",{attrs:{offset:"0.27","stop-color":"#272324"}}),t._v(" "),r("stop",{attrs:{offset:"0.56","stop-color":"#322f31"}}),t._v(" "),r("stop",{attrs:{offset:"0.84","stop-color":"#444445"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#515254"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-7",x1:"233.66",y1:"53.68",x2:"235.66",y2:"53.68",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#231f20"}}),t._v(" "),r("stop",{attrs:{offset:"0.45","stop-color":"#252122"}}),t._v(" "),r("stop",{attrs:{offset:"0.67","stop-color":"#2c292a"}}),t._v(" "),r("stop",{attrs:{offset:"0.84","stop-color":"#373637"}}),t._v(" "),r("stop",{attrs:{offset:"0.98","stop-color":"#484849"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#4a4b4c"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-8",x1:"237.02",y1:"52.54",x2:"239.02",y2:"52.54","xlink:href":"#linear-gradient-7"}}),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-9",x1:"232.19",y1:"57.42",x2:"240.38",y2:"57.42","xlink:href":"#linear-gradient-7"}}),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-10",x1:"232.2",y1:"48.03",x2:"240.36",y2:"48.03","xlink:href":"#linear-gradient-7"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-2",cx:"236.28",cy:"80.99",r:"9.32",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#be2526"}}),t._v(" "),r("stop",{attrs:{offset:"0","stop-color":"#c22726"}}),t._v(" "),r("stop",{attrs:{offset:"0.02","stop-color":"#d33225"}}),t._v(" "),r("stop",{attrs:{offset:"0.04","stop-color":"#de3925"}}),t._v(" "),r("stop",{attrs:{offset:"0.07","stop-color":"#e53d25"}}),t._v(" "),r("stop",{attrs:{offset:"0.14","stop-color":"#e73e25"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#e93e3a"}})],1),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-3",cx:"122.01",cy:"80.99",r:"9.32","xlink:href":"#radial-gradient-2"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-4",cx:"115.92",cy:"247.3",r:"14.25","xlink:href":"#radial-gradient-2"}}),t._v(" "),r("linearGradient",{attrs:{id:"linear-gradient-11",x1:"56.81",y1:"155.2",x2:"304.29",y2:"155.2","xlink:href":"#linear-gradient"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-5",cx:"462.43",cy:"122.13",r:"4.99",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#4f4f51"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#3e3e3f"}})],1),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-6",cx:"377.43",cy:"122.13",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-7",cx:"377.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-8",cx:"377.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-9",cx:"335.43",cy:"122.13",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-10",cx:"335.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-11",cx:"335.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-12",cx:"335.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-13",cx:"356.43",cy:"122.13",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-14",cx:"356.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-15",cx:"356.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-16",cx:"356.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-17",cx:"377.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-18",cx:"398.43",cy:"122.13",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-19",cx:"398.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-20",cx:"398.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-21",cx:"398.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-22",cx:"462.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-23",cx:"462.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-24",cx:"420.43",cy:"122.13",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-25",cx:"420.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-26",cx:"420.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-27",cx:"420.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-28",cx:"441.43",cy:"122.13",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-29",cx:"441.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-30",cx:"441.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-31",cx:"441.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-32",cx:"462.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-33",cx:"483.43",cy:"122.13",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-34",cx:"483.43",cy:"143.49",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-35",cx:"483.43",cy:"164.05",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-36",cx:"483.43",cy:"185.73",r:"4.99","xlink:href":"#radial-gradient-5"}}),t._v(" "),r("radialGradient",{attrs:{id:"radial-gradient-37",cx:"291.1",cy:"456.98",r:"14.25",gradientTransform:"translate(-40.74 89.18) scale(1 0.35)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#828487"}}),t._v(" "),r("stop",{attrs:{offset:"0.14","stop-color":"#7a7c7f"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#4f4f51"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"New_Gradient_Swatch_1","data-name":"New Gradient Swatch 1",x1:"265.34",y1:"440.74",x2:"316.87",y2:"440.74",gradientTransform:"translate(0 -2)",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{offset:"0","stop-color":"#a7a9ac"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"#fff"}})],1)],1),t._v(" "),r("title",[t._v("tuner")]),t._v(" "),r("path",{staticClass:"cls-1",attrs:{d:"M46.11,241.17l-3.85,63.32c-0.18,4.45.81,115.48,1,119.92L46.11,482c0,15.48,11.85,34.18,27.32,34H529.49c15.36-.13,37.08-12.39,37-27.74V238.23c-0.09-15.32-9.06-26.9-24.38-26.9H70.91C55.53,211.33,46.11,225.79,46.11,241.17Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-2",attrs:{d:"M43.72,318.72l4.2-8.09a13.75,13.75,0,0,1,12.2-7.41H398.06c3.8,0,62,3,62,60.48,0,62.35-58.16,60.9-61.94,60.93l-339.7,2.56a13.75,13.75,0,0,1-11.24-5.69h0a13.75,13.75,0,0,1-2.61-7.93l-0.89-94.85h0Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("g",{attrs:{id:"tuned"}},[r("polygon",{staticClass:"cls-3",attrs:{points:"168.32 32.86 178.97 65.97 190 32.86 168.32 32.86"}}),t._v(" "),r("polygon",{staticClass:"cls-4",attrs:{points:"172.66 35.62 179.16 58.48 186.06 35.62 172.66 35.62"}}),t._v(" "),r("polyline",{staticClass:"cls-5",attrs:{points:"172.66 35.62 179.36 39.56 186.06 35.62"}}),t._v(" "),r("line",{staticClass:"cls-6",attrs:{x1:"179.36",y1:"39.56",x2:"179.16",y2:"58.48"}})]),t._v(" "),r("path",{staticClass:"cls-7",attrs:{id:"flat",d:"M159.5,252.27l0.53,21.3s8-5.67,5.47-8.84c-0.89-1.1-5.57,2-5.57,2",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("g",{attrs:{id:"sharp"}},[r("line",{staticClass:"cls-8",attrs:{x1:"234.66",y1:"41.4",x2:"234.66",y2:"65.97"}}),t._v(" "),r("line",{staticClass:"cls-9",attrs:{x1:"238.02",y1:"40.24",x2:"238.02",y2:"64.84"}}),t._v(" "),r("line",{staticClass:"cls-10",attrs:{x1:"232.45",y1:"58.48",x2:"240.11",y2:"56.37"}}),t._v(" "),r("line",{staticClass:"cls-11",attrs:{x1:"240.11",y1:"47.05",x2:"232.45",y2:"49.02"}})]),t._v(" "),r("circle",{staticClass:"cls-12",class:{"half-opacity":!(t.isMicListening&&this.distanceInCents<=1&&this.distanceInCents>=-1)},attrs:{id:"inTuneLight",cx:"179.26",cy:"80.99",r:"9.32"}}),t._v(" "),r("circle",{staticClass:"cls-13",class:{"half-opacity":!(t.isMicListening&&this.distanceInCents>1)},attrs:{id:"sharpLight",cx:"236.28",cy:"80.99",r:"9.32"}}),t._v(" "),r("circle",{staticClass:"cls-14",class:{"half-opacity":!(t.isMicListening&&this.distanceInCents<-1)},attrs:{id:"flatLight",cx:"122.01",cy:"80.99",r:"9.32"}}),t._v(" "),r("g",{attrs:{id:"powerButtonGroup"},on:{click:t.toggleMicrophone}},[r("rect",{staticClass:"cls-15",attrs:{id:"powerButtonShadow",x:"98.75",y:"242.03",width:"37.57",height:"14.55",rx:"7.28",ry:"7.28"}}),t._v(" "),r("rect",{staticClass:"cls-16",attrs:{id:"powerButton",x:"97.14",y:"240.03",width:"37.57",height:"14.55",rx:"7.28",ry:"7.28"}}),t._v(" "),r("g",{attrs:{id:"powerSymbol"}},[r("image",{attrs:{width:"47",height:"45",transform:"translate(110.85 223.09) scale(0.24)","xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAC4jAAAuIwF4pT92AAAE+ElEQVRoQ92aDVPbRhCG+f9/pG1CgIEkzVAIUMg0XwQwCS6GxiV4XEjzAW5qHHDY+llrL2dZ1skGLNGbeYeMtben9/bzTpkQkYn/A4ICtwVBgduCoMBtQVBgAOTLl6ZkkMuMv47eo0/a5+cj6Q0KJEAajX/k708nslvZH2nRJOz/UVWd6PZGcJ4hKOBBvn49l+ZZSxd7Wz2QN+Xfh1osDegyMmetllkms/6gQAQlgTuxEAuy8NNnL+XOvenMiw3CD3cmZX7hsayvb6qV39XqulmtDiFvXJmIfDo5VQJH7z9IZf+tbGxuy+LSitydmpEf704FF8kC9ECGzdna3pHqQU0+fPys615eXko0RiYizWZLiVQPDp0VWHBm9n6q4lEAGfSySayzt991NSzzb7OVul4qifbFhRI5OKzJTrniSFyXFQYBd2UdLG9x443EOWkKlUj96Fj99vmL9bGQMLDO6uoT2Sp1yZycNvyY6ZMfpEjdyTITQThOEgbc7PHyr7K5WdJ38SzTJztIiSPyaqOUCwmDuRkbSrIhLUeW6ZFLmqxx8ee7mrzZ2dXAu44UOypcan61FY+XHrmkyUqESZZmQ4vdNCCztvabWqVWP9KiHA0nE5/kip6l2nszcxKTyQV+FuMdTxsN8Z/HJ7jKzSQmhxYYFwj8peVVLQOUg4iI2HNfWEn41rj/87yIJCvOA4uLy5rBKM4fP/fGii+oLGkNzBr4Zkj5OPHT5LT8srCkG62ty7e22DNf0BHpxsasiCQrzAuWwbZ3ynJ83D2/RKPftXYre4UlAiBCtSd7eWeXfiKYjdagaG5lgAjtEgHvx4kv1HlYl9LrsrYFRSXCe+ExBLxfHJ0ApR+/2yq9LmSgG4yIBby1K06AH7gAIJDIDGSIkNI8ECcSje9E7BRIf4VrTRekoscx93BeicT7LidgrUl5tyIrK2sy++CRhJTmAdz+xfqGEvHPJ06AHyHCmRzGRSSCW1l1JzFFx1/GdyLf2m3XZ0GkiDFiBbF7OXEo3uhNv+RlBBCkfS9aUXzwqBsfZFYvRvSZL6jD4oQJM3MPnWAREL+QiK6J9FmPICXfP1QVqY2fnJrVbGqHK2/o8/gEHdQTJqw9eVqYwsidAV7CecSuVf3nfRMse9mZhOKYN5l4kFPzouFk+iZxl0W7YjeLz56/zLU4GglcPVbNxZdLmqyFhrMJHSYZIs8CaQUQEvSCbHQ0euQGKdARP7+P28WoZbg3HTkBzgYPS2SCqmmNpMULRMZVKM2lqOKWbke5MlVY4KMIF4MMhfKmY4YrKDKm3+XGb03iSFVoX41QRPCT+nCzm4oZOgn3jaSzcXxWSLtd9BFUzmwsQ7GkUeNMb9a5rrhBB1ZY6DSEHGP9z3DcKoasIRmJKBmsg1JzNQ5g6mqdxUe95DYCzLd46F7A1XUd4pRmNhqpuoKLeXDDyLBzFCl2kbtZsxAvx9+4tbgMx334nZbDvkxZjUAn11FYIC2wkxAUiIOPogzI0C1Ta4wUL8SLQYo4sp22DMSL8zvPLQ5wVebzycCskMWVrkwERDd8OmgyLRlU9qr6dYvuWa3VeVEjx1+sx+88t923tHrRcV3cyD8sDYOgQACOSBy8aBx8c+EZn9HsL0fsYd0oCUGBrPAqbg8hdtr+rceEs+5/BoCAuWlIdxYEBa4AHRABEPVcMjR3aAQFbgv+A6iRlPsYqxILAAAAAElFTkSuQmCC"}}),t._v(" "),r("image",{attrs:{width:"5",height:"27",transform:"translate(115.94 221.17) scale(0.24)","xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAiCAYAAACN+vPlAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAuElEQVQ4T7XTyQ6CQBAEUP7/kxSXPxDhqiIwIRhlG2DYKYMhnmB6YrCTur1DpZPSAGhUSPBHtNH3OBkWLlcbzyjBdCugYRgUUN/JUde26DsKNQ3dSQm1KqiuFVBVVXLkBw8aMT9AqYJEuQZymQ8hJOhsWnA8H4UMGYb5QXkuKMSQZQWNOM/k6O4qINthSDmnUZIuIH13nJCHKEnn0VY/fFEYL6xlROPHb7aDVxjPo592N4uWQgJl9AbRNuf/NLbVbAAAAABJRU5ErkJggg=="}})])]),t._v(" "),r("rect",{staticClass:"cls-17",attrs:{id:"displayBorder",x:"59.31",y:"102.33",width:"242.47",height:"105.74",rx:"7.03",ry:"7.03"}}),t._v(" "),r("rect",{staticClass:"cls-18",attrs:{id:"display",x:"62.09",y:"105.98",width:"235.7",height:"99.08",rx:"7.03",ry:"7.03"}}),t._v(" "),r("text",{attrs:{x:"68.09",y:"120.98"}},[t._v("\n      "+t._s(this.nearestNote)+"\n    ")]),t._v(" "),r("g",{attrs:{id:"holes"}},[r("circle",{staticClass:"cls-19",attrs:{cx:"462.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-20",attrs:{cx:"377.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-21",attrs:{cx:"377.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-22",attrs:{cx:"377.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-23",attrs:{cx:"335.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-24",attrs:{cx:"335.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-25",attrs:{cx:"335.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-26",attrs:{cx:"335.43",cy:"185.73",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-27",attrs:{cx:"356.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-28",attrs:{cx:"356.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-29",attrs:{cx:"356.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-30",attrs:{cx:"356.43",cy:"185.73",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-31",attrs:{cx:"377.43",cy:"185.73",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-32",attrs:{cx:"398.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-33",attrs:{cx:"398.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-34",attrs:{cx:"398.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-35",attrs:{cx:"398.43",cy:"185.73",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-36",attrs:{cx:"462.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-37",attrs:{cx:"462.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-38",attrs:{cx:"420.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-39",attrs:{cx:"420.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-40",attrs:{cx:"420.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-41",attrs:{cx:"420.43",cy:"185.73",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-42",attrs:{cx:"441.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-43",attrs:{cx:"441.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-44",attrs:{cx:"441.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-45",attrs:{cx:"441.43",cy:"185.73",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-46",attrs:{cx:"462.43",cy:"185.73",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-47",attrs:{cx:"483.43",cy:"122.13",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-48",attrs:{cx:"483.43",cy:"143.49",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-49",attrs:{cx:"483.43",cy:"164.05",r:"4.99"}}),t._v(" "),r("circle",{staticClass:"cls-50",attrs:{cx:"483.43",cy:"185.73",r:"4.99"}})]),t._v(" "),r("line",{staticClass:"cls-51",class:{hide:!t.isMicListening},attrs:{id:"needle",x1:"179.19",y1:"201.58",x2:"179.24",y2:"123.75",transform:t.needleTransform}}),t._v(" "),r("polygon",{staticClass:"cls-52",attrs:{points:"176.51 115.99 179.22 120.31 181.78 115.99 176.51 115.99"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"237.68",cy:"129.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"225.68",cy:"125.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"214.68",cy:"122.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"202.68",cy:"119.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"190.68",cy:"118.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"120.68",cy:"129.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"131.68",cy:"125.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"142.68",cy:"122.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"154.68",cy:"119.85",r:"1.04"}}),t._v(" "),r("circle",{staticClass:"cls-53",attrs:{cx:"166.68",cy:"118.85",r:"1.04"}}),t._v(" "),r("path",{staticClass:"cls-54",attrs:{d:"M112.16,373.37c14.13-13.59,14.48-14.14,31.55-25",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-54",attrs:{d:"M327.72,373.37c-15.32-14.73-16-15.12-31.55-25",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("g",{attrs:{id:"soundButtonGroup"}},[r("rect",{staticClass:"cls-15",attrs:{id:"soundButtonShadow","data-name":"powerButtonShadow",x:"233.19",y:"241.87",width:"37.57",height:"14.55",rx:"7.28",ry:"7.28"}}),t._v(" "),r("rect",{staticClass:"cls-55",attrs:{id:"soundButton","data-name":"powerButton",x:"231.58",y:"239.87",width:"37.57",height:"14.55",rx:"7.28",ry:"7.28"}})]),t._v(" "),r("g",[r("g",[r("path",{staticClass:"cls-56",attrs:{d:"M271.84,435.07l-1.29.77a2.23,2.23,0,0,0-.69-0.82,1.84,1.84,0,0,0-2,.16,1.17,1.17,0,0,0-.44.93,1.47,1.47,0,0,0,1.15,1.24l1.05,0.43a4.5,4.5,0,0,1,1.88,1.27,2.86,2.86,0,0,1,.59,1.84,3.23,3.23,0,0,1-1,2.41,3.33,3.33,0,0,1-2.43,1,3.25,3.25,0,0,1-2.27-.81,3.75,3.75,0,0,1-1.1-2.29l1.61-.36a2.74,2.74,0,0,0,.38,1.29,1.82,1.82,0,0,0,2.67.18,1.73,1.73,0,0,0,.49-1.26,1.78,1.78,0,0,0-.09-0.56,1.43,1.43,0,0,0-.27-0.47,2.12,2.12,0,0,0-.47-0.4,4.58,4.58,0,0,0-.68-0.36l-1-.42q-2.17-.92-2.17-2.68a2.54,2.54,0,0,1,.91-2,3.28,3.28,0,0,1,2.26-.81A3.16,3.16,0,0,1,271.84,435.07Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-56",attrs:{d:"M273.51,438.73a5.17,5.17,0,0,1,1.63-3.83,5.38,5.38,0,0,1,3.91-1.6,5.52,5.52,0,0,1,5.49,5.49,5.19,5.19,0,0,1-1.63,3.86,5.58,5.58,0,0,1-7.62.18A5.19,5.19,0,0,1,273.51,438.73Zm1.61,0a3.81,3.81,0,0,0,1.18,2.88,3.89,3.89,0,0,0,5.5,0,4.1,4.1,0,0,0,0-5.66,3.94,3.94,0,0,0-5.56,0A3.81,3.81,0,0,0,275.11,438.75Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-56",attrs:{d:"M288.13,433.5v6.36a3.5,3.5,0,0,0,.44,2,2.38,2.38,0,0,0,3.74,0,3.44,3.44,0,0,0,.44-2V433.5h1.59v6.79a3.8,3.8,0,0,1-1,2.75,4,4,0,0,1-5.74,0,3.8,3.8,0,0,1-1-2.75V433.5h1.59Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-56",attrs:{d:"M296.88,444.05V432.78l7.7,8.05V433.5h1.59v11.2l-7.7-8v7.39h-1.59Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-56",attrs:{d:"M308.7,444.05V433.5h2.21a8,8,0,0,1,2.52.31,4.7,4.7,0,0,1,1.8,1,5.46,5.46,0,0,1-.07,7.85,5,5,0,0,1-1.79,1,8.14,8.14,0,0,1-2.48.29H308.7Zm1.59-1.5H311a6,6,0,0,0,1.78-.23,3.62,3.62,0,0,0,2.46-3.55A3.67,3.67,0,0,0,314.1,436a4.4,4.4,0,0,0-3.08-1H310.3v7.56Z",transform:"translate(-40.74 -209.83)"}})]),t._v(" "),r("g",[r("path",{staticClass:"cls-57",attrs:{d:"M271.84,435.07l-1.29.77a2.23,2.23,0,0,0-.69-0.82,1.84,1.84,0,0,0-2,.16,1.17,1.17,0,0,0-.44.93,1.47,1.47,0,0,0,1.15,1.24l1.05,0.43a4.5,4.5,0,0,1,1.88,1.27,2.86,2.86,0,0,1,.59,1.84,3.23,3.23,0,0,1-1,2.41,3.33,3.33,0,0,1-2.43,1,3.25,3.25,0,0,1-2.27-.81,3.75,3.75,0,0,1-1.1-2.29l1.61-.36a2.74,2.74,0,0,0,.38,1.29,1.82,1.82,0,0,0,2.67.18,1.73,1.73,0,0,0,.49-1.26,1.78,1.78,0,0,0-.09-0.56,1.43,1.43,0,0,0-.27-0.47,2.12,2.12,0,0,0-.47-0.4,4.58,4.58,0,0,0-.68-0.36l-1-.42q-2.17-.92-2.17-2.68a2.54,2.54,0,0,1,.91-2,3.28,3.28,0,0,1,2.26-.81A3.16,3.16,0,0,1,271.84,435.07Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-57",attrs:{d:"M273.51,438.73a5.17,5.17,0,0,1,1.63-3.83,5.38,5.38,0,0,1,3.91-1.6,5.52,5.52,0,0,1,5.49,5.49,5.19,5.19,0,0,1-1.63,3.86,5.58,5.58,0,0,1-7.62.18A5.19,5.19,0,0,1,273.51,438.73Zm1.61,0a3.81,3.81,0,0,0,1.18,2.88,3.89,3.89,0,0,0,5.5,0,4.1,4.1,0,0,0,0-5.66,3.94,3.94,0,0,0-5.56,0A3.81,3.81,0,0,0,275.11,438.75Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-57",attrs:{d:"M288.13,433.5v6.36a3.5,3.5,0,0,0,.44,2,2.38,2.38,0,0,0,3.74,0,3.44,3.44,0,0,0,.44-2V433.5h1.59v6.79a3.8,3.8,0,0,1-1,2.75,4,4,0,0,1-5.74,0,3.8,3.8,0,0,1-1-2.75V433.5h1.59Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-57",attrs:{d:"M296.88,444.05V432.78l7.7,8.05V433.5h1.59v11.2l-7.7-8v7.39h-1.59Z",transform:"translate(-40.74 -209.83)"}}),t._v(" "),r("path",{staticClass:"cls-57",attrs:{d:"M308.7,444.05V433.5h2.21a8,8,0,0,1,2.52.31,4.7,4.7,0,0,1,1.8,1,5.46,5.46,0,0,1-.07,7.85,5,5,0,0,1-1.79,1,8.14,8.14,0,0,1-2.48.29H308.7Zm1.59-1.5H311a6,6,0,0,0,1.78-.23,3.62,3.62,0,0,0,2.46-3.55A3.67,3.67,0,0,0,314.1,436a4.4,4.4,0,0,0-3.08-1H310.3v7.56Z",transform:"translate(-40.74 -209.83)"}})])])])},staticRenderFns:[]};var _=r("VU/8")(C,A,!1,function(t){r("8wIH")},"data-v-1a713c46",null).exports;e.a.use(n.a);var G=new n.a({routes:[{path:"/",name:"NeedleTuner",component:_}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:G,components:{App:s},template:"<App/>"})},yHiI:function(t,a){t.exports={C0:16.35,"C#0/Db0":17.32,D0:18.35,"D#0/Eb0":19.45,E0:20.6,F0:21.83,"F#0/Gb0":23.12,G0:24.5,"G#0/Ab0":25.96,A0:27.5,"A#0/Bb0":29.14,B0:30.87,C1:32.7,"C#1/Db1":34.65,D1:36.71,"D#1/Eb1":38.89,E1:41.2,F1:43.65,"F#1/Gb1":46.25,G1:49,"G#1/Ab1":51.91,A1:55,"A#1/Bb1":58.27,B1:61.74,C2:65.41,"C#2/Db2":69.3,D2:73.42,"D#2/Eb2":77.78,E2:82.41,F2:87.31,"F#2/Gb2":92.5,G2:98,"G#2/Ab2":103.83,A2:110,"A#2/Bb2":116.54,B2:123.47,C3:130.81,"C#3/Db3":138.59,D3:146.83,"D#3/Eb3":155.56,E3:164.81,F3:174.61,"F#3/Gb3":185,G3:196,"G#3/Ab3":207.65,A3:220,"A#3/Bb3":233.08,B3:246.94,C4:261.63,"C#4/Db4":277.18,D4:293.66,"D#4/Eb4":311.13,E4:329.63,F4:349.23,"F#4/Gb4":369.99,G4:392,"G#4/Ab4":415.3,A4:440,"A#4/Bb4":466.16,B4:493.88,C5:523.25,"C#5/Db5":554.37,D5:587.33,"D#5/Eb5":622.25,E5:659.25,F5:698.46,"F#5/Gb5":739.99,G5:783.99,"G#5/Ab5":830.61,A5:880,"A#5/Bb5":932.33,B5:987.77,C6:1046.5,"C#6/Db6":1108.73,D6:1174.66,"D#6/Eb6":1244.51,E6:1318.51,F6:1396.91,"F#6/Gb6":1479.98,G6:1567.98,"G#6/Ab6":1661.22,A6:1760,"A#6/Bb6":1864.66,B6:1975.53,C7:2093,"C#7/Db7":2217.46,D7:2349.32,"D#7/Eb7":2489.02,E7:2637.02,F7:2793.83,"F#7/Gb7":2959.96,G7:3135.96,"G#7/Ab7":3322.44,A7:3520,"A#7/Bb7":3729.31,B7:3951.07,C8:4186.01,"C#8/Db8":4434.92,D8:4698.63,"D#8/Eb8":4978.03,E8:5274.04,F8:5587.65,"F#8/Gb8":5919.91,G8:6271.93,"G#8/Ab8":6644.88,A8:7040,"A#8/Bb8":7458.62,B8:7902.13}}},["NHnr"]);
//# sourceMappingURL=app.22167c7063c045b028dd.js.map