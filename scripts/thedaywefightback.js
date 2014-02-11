/* https://github.com/tfrce/thedaywefightback.js */
var _tdwfb_config=typeof tdwfb_config!=="undefined"?tdwfb_config:{};(function(e,t){function n(){if(t.debug){if(this.console){console.log.apply(console,arguments)}}}function s(e,t,n){var r=new Date((new Date).getTime()+n*1e3);var i=escape(t)+(n===null?"":"; expires="+r.toUTCString());document.cookie=e+"="+i}function o(e){var t=document.cookie;var n=t.indexOf(" "+e+"=");if(n===-1){n=t.indexOf(e+"=")}if(n===-1){t=null}else{n=t.indexOf("=",n)+1;var r=t.indexOf(";",n);if(r===-1){r=t.length}t=unescape(t.substring(n,r))}return t}t.show_style=t.show_style||"banner";t.greeting=t.greeting||"Dear Internet";t.debug=t.debug||false;t.localAssets=t.localAssets||false;t.callOnly=t.callOnly||false;t.startAsMinimized=t.startAsMinimized||false;t.disableDate=t.disableDate||false;t.campaign=t.campaign||"thedaywefightback";t.cookieTimeout=t.cookieTimeout||172800;t.overrideLocation=t.overrideLocation||false;var r;var i;if(t.localAssets){i="../thedaywefightback/"}else{i="//d1agz031tafz8n.cloudfront.net/thedaywefightback.js"+"/thedaywefightback/"}var u={correctDate:function(t){n("correctDate()");e.tdwfbCheckDate=function(e){n("tdwfbCheckDate()",e);t(e)};var r=document.createElement("script");r.src="//dznh7un1y2etk.cloudfront.net/time?callback=tdwfbCheckDate";document.getElementsByTagName("head")[0].appendChild(r);e.tdwfbDateCallBackFailSafe=setTimeout(function(){if((new Date).getDate()===3){t({thedaywefightback:true})}else{t({thedaywefightback:false})}},5e3)},location:function(t){n("location()");e.tdwfbParseLocation=function(e){n("tdwfbParseLocation()",e);t(e)};var r=document.createElement("script");r.src="https://geoip.taskforce.is/?callback=tdwfbParseLocation";document.getElementsByTagName("head")[0].appendChild(r);e.tdwfbLocationCallBackFailSafe=setTimeout(function(){t({country:{iso_code:"US"}})},5e3)}};var a={thedaywefightback:{cookieName:"thedaywefightback_hasseen",styles:{banner:{campaignSpacer:"height: 50px;",campaignContainer:"background: #000; position: fixed; "+"width: 100%; bottom: 0; left: 0; z-index: 100000; padding: 0; "+"-webkit-box-sizing: border-box; -moz-box-sizing: border-box;",iframeContainer:"position: relative; height: 350px; width: 100%; "+"margin: 0; background: #000; z-index: 1;",iframe:"width: 100%; height: 100%; border: 0; margin: 0; "+"padding: 0; background: #000;",footerOverlay:"cursor: pointer; position: absolute; bottom: 0; "+"height: 50px; width: 100%; margin: 0; background: none; "+"z-index: 2;",closeButton:"border: 0; height: 26px; width: 26px; "+"cursor: pointer; position: absolute; top: 20px; right: 20px; "+'background: url("'+i+'imgs/close-button.png") no-repeat right top;',mobileCloseButton:"border: 0; height: 20px; width: 20px; "+"cursor: pointer; position: absolute;top: 10px; right: 10px; "+'background: url("'+i+'imgs/close-button-mobile.png") no-repeat right top;',openButton:"border: 0; height: 26px; width: 26px; "+"cursor: pointer; position: absolute; bottom: 10px; "+'right: 20px; background: url("'+i+'imgs/open-button.png") no-repeat right top;'}},minimized:false,show:function(u){n("show()",u);var a=o(r.cookieName);if(t.startAsMinimized&&a===null){this.minimized=true}var f=r.styles[r.config.show_style];if(f.overlay){var l=document.createElement("div");l.style.cssText=f.overlay;document.body.appendChild(l)}var c=document.createElement("div");e.tdwfbCampaignSpacer=c;c.style.cssText=f.campaignSpacer;c.setAttribute("class","tdwfb-spacer");var h=document.createElement("div");e.tdwfbCampaignContainer=h;h.style.cssText=f.campaignContainer;h.setAttribute("class","tdwfb-container");var p=document.createElement("div");p.style.cssText=f.iframeContainer;var d=document.documentElement,v=document.getElementsByTagName("body")[0],m=e.innerWidth||d.clientWidth||v.clientWidth;if(m<767){if(!this.minimized){p.style.height="100px"}else{p.style.height="0px"}}else{if(this.minimized){p.style.height="50px"}else{p.style.height="350px"}var g=document.createElement("div");g.style.cssText=f.footerOverlay;h.appendChild(g)}h.appendChild(p);document.body.appendChild(c);document.body.appendChild(h);var y=u.location&&u.location.country&&u.location.country.iso_code||"unknown";var b=true;if(a!==null){b=false}if(m<767){b=false}var w=document.createElement("iframe");w.style.cssText=f.iframe;var E=w.src=i+r.config.show_style+".html?firstTime="+b+"&callOnly="+t.callOnly+"&iso="+y+"&greeting="+t.greeting;if(y==="US"&&!t.overrideLocation||t.overrideLocation==="usa"){w.src=E}else if(y!=="US"&&!t.overrideLocation||t.overrideLocation==="international"){w.src=i+r.config.show_style+"_international.html?firstTime="+b+"&iso="+y+"&greeting="+t.greeting}p.appendChild(w);var S=this;if(m>767){S.fullSize=true;var x=document.createElement("button");x.style.cssText=f.closeButton;p.appendChild(x);var T=document.createElement("button");T.style.cssText=f.openButton;p.appendChild(T);if(this.minimized){T.style.display="block";x.style.display="none";g.style.display="block"}else{T.style.display="none";x.style.display="block";g.style.display="none"}var N=function(){if(!S.minimized){p.style.height="50px";S.minimized=true;g.style.display="block";x.style.display="none";T.style.display="block";s(r.cookieName,'{"minimized": true}',t.cookieTimeout)}else{p.style.height="350px";S.minimized=false;g.style.display="none";T.style.display="none";x.style.display="block";s(r.cookieName,'{"minimized": false}',t.cookieTimeout)}};g.onclick=N;x.onclick=N}else{S.fullSize=false;var C=document.createElement("button");C.style.cssText=f.mobileCloseButton;p.appendChild(C);if(this.minimized){C.style.display="block"}else{C.style.display="none"}C.onclick=function(){s(r.cookieName,'{"minimized": true}',t.cookieTimeout);document.body.removeChild(c);document.body.removeChild(h)}}},init:function(i){r.config=i;var s=o(r.cookieName);if(s){this.minimized=JSON.parse(s).minimized}u.correctDate(function(i){n("correctDate() callback",i);clearTimeout(e.tdwfbDateCallBackFailSafe);if(i&&(i.thedaywefightback||t.disableDate||t.debug)){u.location(function(i){n("location() callback",i);e.tdwfbLocation=i;clearTimeout(e.tdwfbLocationCallBackFailSafe);r.show({location:i,widgetConfig:t})})}});var a=this;if(e.addEventListener)e.addEventListener("resize",function(){var n=e,r=document,i=r.documentElement,s=r.getElementsByTagName("body")[0],o=n.innerWidth||i.clientWidth||s.clientWidth,u=n.innerHeight||i.clientHeight||s.clientHeight;if(a.fullSize&&o<767||!a.fullSize&&o>767){if(e.tdwfbResizeCallback){clearTimeout(e.tdwfbResizeCallback)}e.tdwfbResizeCallback=setTimeout(function(){document.body.removeChild(e.tdwfbCampaignSpacer);document.body.removeChild(e.tdwfbCampaignContainer);a.show({location:e.tdwfbLocation,widgetConfig:t});windowWidth=o},50)}},false)}}};if(typeof a[t.campaign]!=="undefined"){r=a[t.campaign];r.init(t)}else{return false}})(window,_tdwfb_config)
