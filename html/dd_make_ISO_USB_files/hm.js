(function(){var h={},mt={},c={id:"6bcd52f51e9b3dce32bec4a3997715ac",dm:["csdn.net","dingyue.programmer.com.cn","gitbook.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],icon:'',ctrk:true,align:1,nv:0,vdur:1800000,age:31536000000,rec:1,rp:[[119608, 2]],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'a,input,button',hca:'522B1AB76775827F',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var u=void 0,v=!0,w=null,x=!1;mt.cookie={};mt.cookie.set=function(b,a,g){var e;g.N&&(e=new Date,e.setTime(e.getTime()+g.N));document.cookie=b+"="+a+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(e?"; expires="+e.toGMTString():"")+(g.nc?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:w};
mt.cookie.Lb=function(b,a){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:b,path:a,N:u});var e="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:b,path:a,N:-1});return e}catch(f){return"0"}};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.Ia=function(b){return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.oa=function(){return mt.lang.e(c.aet,"String")};
mt.lang.g=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.K=function(b,a){var g=x;if(b==w||!mt.lang.e(b,"Array")||a===u)return g;if(Array.prototype.indexOf)g=-1!==b.indexOf(a);else for(var e=0;e<b.length;e++)if(b[e]===a){g=v;break}return g};
(function(){var b=mt.lang;mt.f={};mt.f.ha=function(a){return document.getElementById(a)};mt.f.rb=function(a){if(!a)return w;try{for(var b=a.split(">"),e=document.body,f=b.length-1;0<=f;f--)if(-1<b[f].indexOf("#")){var d=b[f].split("#")[1];(e=document.getElementById(d))||(e=document.getElementById(decodeURIComponent(d)));b=b.splice(f+1,b.length-(f+1));break}for(a=0;e&&a<b.length;){var l=String(b[a]).toLowerCase();if(!("html"===l||"body"===l)){var f=0,n=b[a].match(/\[(\d+)\]/i),d=[];if(n)f=n[1]-1,l=
l.split("[")[0];else if(1!==e.childNodes.length){for(var p=0,s=0,m=e.childNodes.length;s<m;s++){var k=e.childNodes[s];1===k.nodeType&&k.nodeName.toLowerCase()===l&&p++;if(1<p)return w}if(1!==p)return w}for(p=0;p<e.childNodes.length;p++)1===e.childNodes[p].nodeType&&e.childNodes[p].nodeName.toLowerCase()===l&&d.push(e.childNodes[p]);if(!d[f])return w;e=d[f]}a++}return e}catch(r){return w}};mt.f.la=function(a,b){var e=[],f=[];if(!a)return f;for(;a.parentNode!=w;){for(var d=0,l=0,n=a.parentNode.childNodes.length,
p=0;p<n;p++){var s=a.parentNode.childNodes[p];if(s.nodeName===a.nodeName&&(d++,s===a&&(l=d),0<l&&1<d))break}if((n=""!==a.id)&&b){e.unshift("#"+encodeURIComponent(a.id));break}else n&&(n="#"+encodeURIComponent(a.id),n=0<e.length?n+">"+e.join(">"):n,f.push(n)),e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<d?"["+l+"]":""));a=a.parentNode}f.push(e.join(">"));return f};mt.f.Fa=function(a){return(a=mt.f.la(a,v))&&a.length?String(a[0]):""};mt.f.yb=function(a){return mt.f.la(a,x)};mt.f.ob=
function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return w};mt.f.qb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.wb=function(a){var b={top:0,left:0};if(!a)return b;var e=mt.f.qb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());return{top:b.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};mt.f.getAttribute=function(a,b){var e=
a.getAttribute&&a.getAttribute(b)||w;if(!e&&a.attributes&&a.attributes.length)for(var f=a.attributes,d=f.length,l=0;l<d;l++)f[l].nodeName===b&&(e=f[l].nodeValue);return e};mt.f.U=function(a){var b="document";a.tagName!==u&&(b=a.tagName);return b.toLowerCase()};mt.f.Ab=function(a){var g="";a.textContent?g=b.trim(a.textContent):a.innerText&&(g=b.trim(a.innerText));g&&(g=g.replace(/\s+/g," ").substring(0,255));return g};mt.f.Da=function(a){var b=mt.f.U(a);"input"===b&&("button"===a.type||"submit"===
a.type)?a=a.value||"":"img"===b?(b=mt.f.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.f.Ab(a);return String(a).substring(0,255)};(function(){(mt.f.Ma=function(){function a(){if(!a.W){a.W=v;for(var b=0,e=f.length;b<e;b++)f[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(b,1);return}a()}var e=x,f=[],d;document.addEventListener?d=function(){document.removeEventListener("DOMContentLoaded",
d,x);a()}:document.attachEvent&&(d=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",d),a())});(function(){if(!e)if(e=v,"complete"===document.readyState)a.W=v;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",d,x),window.addEventListener("load",a,x);else if(document.attachEvent){document.attachEvent("onreadystatechange",d);window.attachEvent("onload",a);var f=x;try{f=window.frameElement==w}catch(n){}document.documentElement.doScroll&&
f&&b()}})();return function(b){a.W?b():f.push(b)}}()).W=x})();return mt.f})();mt.event={};mt.event.d=function(b,a,g){b.attachEvent?b.attachEvent("on"+a,function(a){g.call(b,a)}):b.addEventListener&&b.addEventListener(a,g,x)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=x};
(function(){var b=mt.event;mt.i={};mt.i.na=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.Jb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:u;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Ub=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.i.O=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.i.J=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.i.orientation=0;(function(){function a(){var a=0;window.orientation!==u&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==u)&&(a=screen.orientation.angle);mt.i.orientation=a}a();b.d(window,"orientationchange",a)})();return mt.i})();
mt.r={};mt.r.parse=function(b){return(new Function("return ("+b+")"))()};
mt.r.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=g[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return b(e);case "boolean":return String(e);
default:if(e===w)return"null";if(e instanceof Array){var f=["["],d=e.length,l,g,p;for(g=0;g<d;g++)switch(p=e[g],typeof p){case "undefined":case "function":case "unknown":break;default:l&&f.push(","),f.push(mt.r.stringify(p)),l=1}f.push("]");return f.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())+"T"+a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds())+'"';l=["{"];g=mt.r.stringify;for(d in e)if(Object.prototype.hasOwnProperty.call(e,d))switch(p=
e[d],typeof p){case "undefined":case "unknown":case "function":break;default:f&&l.push(","),f=1,l.push(g(d)+":"+g(p))}l.push("}");return l.join("")}}}();mt.localStorage={};mt.localStorage.ba=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(b){return x}return v};
mt.localStorage.set=function(b,a,g){var e=new Date;e.setTime(e.getTime()+g||31536E6);try{window.localStorage?(a=e.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.ba()&&(mt.localStorage.l.expires=e.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(b,a),mt.localStorage.l.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),g=b.substring(0,a)-0;if(g&&g>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.ba())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(b)}catch(e){}return w};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.ba())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(b),mt.localStorage.l.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){try{window.sessionStorage&&window.sessionStorage.setItem(b,a)}catch(g){}};
mt.sessionStorage.get=function(b){try{return window.sessionStorage?window.sessionStorage.getItem(b):w}catch(a){return w}};mt.sessionStorage.remove=function(b){try{window.sessionStorage&&window.sessionStorage.removeItem(b)}catch(a){}};mt.Qa={};mt.Qa.log=function(b,a){var g=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=g;g.onload=function(){g.onload=w;g=window[e]=w;a&&a(b)};g.src=b};mt.ta={};
mt.ta.Bb=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return b};
mt.ta.jc=function(b,a,g,e,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+g+'" height="'+e+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+g+'" height="'+e+'" src="'+a+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.m=function(b,a){var g=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return g?g[3]:w};mt.url.kc=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:w};mt.url.ub=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):w};mt.url.I=function(b){return(b=mt.url.ub(b))?b.replace(/:\d+$/,""):b};mt.url.la=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):w};
(function(){function b(){for(var a=x,b=document.getElementsByTagName("script"),e=b.length,e=100<e?100:e,f=0;f<e;f++){var d=b[f].src;if(d&&0===d.indexOf("https://hm.baidu.com/h")){a=v;break}}return a}return h.nb=b})();var A=h.nb;
h.o={lc:"http://tongji.baidu.com/hm-web/welcome/ico",sa:"hm.baidu.com/hm.gif",Ya:/^(tongji|hmcdn).baidu.com$/,$:"tongji.baidu.com",Gb:"hmmd",Hb:"hmpl",fc:"utm_medium",Fb:"hmkw",hc:"utm_term",Db:"hmci",ec:"utm_content",Ib:"hmsr",gc:"utm_source",Eb:"hmcu",dc:"utm_campaign",L:0,G:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",X:A()||"https:"===document.location.protocol?"https:":"http:",mc:0,fb:6E5,Mb:6E5,Vb:5E3,gb:5,M:1024,eb:1,z:2147483647,Ra:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
P:v,za:["a","input","button"],$a:{id:"data-hm-id",ea:"data-hm-class",wa:"data-hm-xpath",content:"data-hm-content",ua:"data-hm-tag",link:"data-hm-link"},ya:"data-hm-enabled",xa:"data-hm-disabled",Qb:"https://hmcdn.baidu.com/static/tongji/plugins/",La:["UrlChangeTracker"]};(function(){var b={C:{},d:function(a,b){this.C[a]=this.C[a]||[];this.C[a].push(b)},H:function(a,b){this.C[a]=this.C[a]||[];for(var e=this.C[a].length,f=0;f<e;f++)this.C[a][f](b)}};return h.w=b})();
(function(){function b(b,e){var f=document.createElement("script");f.charset="utf-8";a.e(e,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=w,e()}:f.onload=function(){e()});f.src=b;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(f,d)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";if(h.b.c.nv){b=encodeURIComponent(document.referrer);try{window.sessionStorage?g.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)}catch(f){}}else try{b=(window.sessionStorage?g.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||""}catch(d){}return b}var a=mt.localStorage,g=mt.sessionStorage;return h.Ca=b})();
(function(){var b=mt.lang,a=mt.f,g={S:function(b,f){return function(d){var l=d.target||d.srcElement;if(l){var n=l.getAttribute(b.aa);d=d.clientX+":"+d.clientY;if(n&&n===d)l.removeAttribute(b.aa);else if(f&&0<f.length&&(l=a.yb(l))&&l.length)if(n=l.length,d=l[l.length-1],1E4>n*d.split(">").length)for(d=0;d<n;d++)g.Pa(b,l[d]);else g.Pa(b,d)}}},Pa:function(a,f){for(var d={},l=String(f).split(">").length,g=0;g<l;g++)d[f]="",f=f.substring(0,f.lastIndexOf(">"));a&&(b.e(a,"Object")&&a.Aa)&&a.Aa(d)},Sb:function(a,
b){return function(d){(d.target||d.srcElement).setAttribute(a.aa,d.clientX+":"+d.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),d.type))}}};return h.ga=g})();
(function(){var b=mt.f,a=mt.r,g=mt.event,e=mt.lang,f=h.ga,d={aa:"HM_ce",Ta:function(){if(c.cetrk&&c.cetrk.length){g.d(document,"click",f.S(d,c.cetrk));for(var e=0,n=c.cetrk.length;e<n;e++){var p;try{p=a.parse(decodeURIComponent(String(c.cetrk[e])))}catch(s){p={}}var m=p.p||"";-1===m.indexOf(">")&&(0===m.indexOf("#")&&(m=m.substring(1)),(m=b.ha(m))&&g.d(m,"click",f.Sb(d,p)))}}},Aa:function(b){if(c.cetrk&&c.cetrk.length)for(var e=0,f=c.cetrk.length;e<f;e++){var s;try{s=a.parse(decodeURIComponent(String(c.cetrk[e])))}catch(m){s=
{}}b.hasOwnProperty(s.p)&&d.s(s)}},s:function(a){h.b.c.et=7;var f=a&&a.k||"",f=e.g(f),d=[];if(a&&a.a&&e.e(a.a,"Object"))for(var s in a.a)if(a.a.hasOwnProperty(s)){d.push(e.g(s));var m=b.rb(a.a[s]||""),m=m?b.Da(m):"";d.push(e.g(m))}a="";d.length&&(a="*"+d.join("*"));h.b.c.ep="ce!_iden*"+f+a;h.b.j()}};h.w.d("pv-b",d.Ta);return d})();
(function(){var b=mt.f,a=mt.lang,g=mt.event,e=mt.i,f=h.o,d=h.w,l=[],n={Sa:function(){c.ctrk&&(g.d(document,"mouseup",n.cb()),g.d(window,"unload",function(){n.Y()}),setInterval(function(){n.Y()},f.fb))},cb:function(){return function(a){a=n.pb(a);if(""!==a){var b=(f.X+"//"+f.sa+"?"+h.b.Oa().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(f.z+"").length>f.M||(b+encodeURIComponent(l.join("!")+(l.length?"!":"")).length+(f.z+"").length>f.M&&n.Y(),l.push(a),(l.length>=f.gb||/\*a\*/.test(a))&&
n.Y())}}},pb:function(d){var m=d.target||d.srcElement;if(0===f.eb){var k=(m.tagName||"").toLowerCase();if("embed"==k||"object"==k)return""}var r;e.na?(r=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=d.clientX+k,r=d.clientY+r):(k=d.pageX,r=d.pageY);d=n.vb(d,m,k,r);var t=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=t/2;break;case 2:k-=t}t=
[];t.push(k);t.push(r);t.push(d.Nb);t.push(d.Ob);t.push(d.Rb);t.push(a.g(d.Pb));t.push(d.ic);t.push(d.Cb);(m="a"===(m.tagName||"").toLowerCase()?m:b.ob(m))?(t.push("a"),t.push(a.g(encodeURIComponent(m.href)))):t.push("b");return t.join("*")},vb:function(f,d,k,r){f=b.Fa(d);var t=0,q=0,y=0,z=0;if(d&&(t=d.offsetWidth||d.clientWidth,q=d.offsetHeight||d.clientHeight,z=b.wb(d),y=z.left,z=z.top,a.e(d.getBBox,"Function")&&(q=d.getBBox(),t=q.width,q=q.height),"html"===(d.tagName||"").toLowerCase()))t=Math.max(t,
d.clientWidth),q=Math.max(q,d.clientHeight);return{Nb:Math.round(100*((k-y)/t)),Ob:Math.round(100*((r-z)/q)),Rb:e.orientation,Pb:f,ic:t,Cb:q}},Y:function(){0!==l.length&&(h.b.c.et=2,h.b.c.ep=l.join("!"),h.b.j(),l=[])}},p={Wa:function(){c.ctrk&&setInterval(p.Wb,f.Vb)},Wb:function(){var a=e.O()+e.J();0<a-h.b.c.vl&&(h.b.c.vl=a)}};d.d("pv-b",n.Sa);d.d("pv-b",p.Wa);return n})();
(function(){var b=mt.lang,a=mt.f,g=mt.event,e=mt.i,f=h.o,d=h.w,l=+new Date,n=[],p={S:function(){return function(e){if(h.b&&h.b.P&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var k=h.b.za,r=a.getAttribute(d,f.ya)!=w?v:x;if(a.getAttribute(d,f.xa)==w)if(r)p.ca(p.ka(d,e));else{var t=a.U(d);if(b.K(k,"*")||b.K(k,t))p.ca(p.ka(d,e));else for(;d.parentNode!=w;){var r=d.parentNode,t=a.U(r),q="a"===t&&b.K(k,"a")?v:x,t="button"===t&&b.K(k,"button")?v:x,y=a.getAttribute(r,f.ya)!=w?v:x;if(a.getAttribute(r,
f.xa)==w&&(q||t||y)){p.ca(p.ka(r,e));break}d=d.parentNode}}}}}},ka:function(d,g){var k={},r=f.$a;k.id=a.getAttribute(d,r.id)||a.getAttribute(d,"id")||"";k.ea=a.getAttribute(d,r.ea)||a.getAttribute(d,"class")||"";k.wa=a.getAttribute(d,r.wa)||a.Fa(d);k.content=a.getAttribute(d,r.content)||a.Da(d);k.ua=a.getAttribute(d,r.ua)||a.U(d);k.link=a.getAttribute(d,r.link)||a.getAttribute(d,"href")||"";k.type=g.type||"click";r=b.Ia(d.offsetTop)?d.offsetTop:0;"click"===g.type?r=e.na?g.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.qa&&b.e(g.qa.changedTouches,"Array")&&g.qa.changedTouches.length)&&(r=g.qa.changedTouches[0].pageY);k.bc=r;return k},ca:function(a){var e=b.g;a=[+new Date-(h.b.D!==u?h.b.D:l),e(a.id),e(a.ea),e(a.ua),e(a.wa),e(a.link),e(a.content),a.type,a.bc].join("*");p.da(a);b.e(this.R(),"Function")&&this.R()()},da:function(a){a.length>f.M||(encodeURIComponent(n.join("!")+a).length>f.M&&(p.s(n.join("!")),n=[]),n.push(a))},s:function(a){h.b.c.et=5;h.b.c.ep=
a;h.b.j()},R:function(){return function(){n&&n.length&&(p.s(n.join("!")),n=[])}}};b.oa()&&""!==c.aet&&d.d("pv-b",function(){g.d(document,"click",p.S());"ontouchend"in document&&g.d(window,"touchend",p.S());g.d(window,"unload",p.R())});return p})();
(function(){var b=mt.event,a=mt.i,g=h.o,e=h.w,f=+new Date,d=[],l=w,n={jb:function(){return function(){h.b&&(h.b.P&&c.aet&&c.aet.length)&&(window.clearTimeout(l),l=window.setTimeout(function(){n.Va(a.O()+a.J())},150))}},Va:function(a){n.da([+new Date-(h.b.D!==u?h.b.D:f),a].join("*"))},da:function(a){if(encodeURIComponent(d.join("!")+a).length>g.M||3<d.length)n.s(d.join("!")),d=[];d.push(a)},s:function(b){h.b.c.et=6;h.b.c.vh=a.J();h.b.c.ep=b;h.b.j()},R:function(){return function(){d&&d.length&&(n.s(d.join("!")),
d=[])}}};mt.lang.oa()&&""!==c.aet&&e.d("pv-b",function(){b.d(window,"scroll",n.jb());b.d(window,"unload",n.R())});return n})();
(function(){var b=mt.f,a=h.o,g=h.load,e=h.Ca;h.w.d("pv-b",function(){var f=a.protocol+"//crs.baidu.com/";c.rec&&b.Ma(function(){for(var d=0,l=c.rp.length;d<l;d++){var n=c.rp[d][0],p=c.rp[d][1],s=b.ha("hm_t_"+n);if(p&&!(2==p&&!s||s&&""!==s.innerHTML))s="",s=Math.round(Math.random()*a.z),s=4==p?f+"hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+s].join("&"):f+"t.js?"+["siteId="+c.id,"planId="+n,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
s].join("&"),g(s)}})})})();(function(){var b=h.o,a=h.load,g=h.Ca;h.w.d("pv-b",function(){if(c.trust&&c.vcard){var e="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+g(),"rnd="+Math.round(Math.random()*b.z),"hm=1"].join("&");a(e)}})})();
(function(){function b(){return function(){h.b.c.nv=0;h.b.c.st=4;h.b.c.et=3;h.b.c.ep=h.fa.xb()+","+h.fa.tb();h.b.j()}}function a(){clearTimeout(z);var b;q&&(b="visible"==document[q]);y&&(b=!document[y]);n="undefined"==typeof b?v:b;if((!l||!p)&&n&&s)t=v,k=+new Date;else if(l&&p&&(!n||!s))t=x,r+=+new Date-k;l=n;p=s;z=setTimeout(a,100)}function g(a){var k=document,b="";if(a in k)b=a;else for(var e=["webkit","ms","moz","o"],q=0;q<e.length;q++){var d=e[q]+a.charAt(0).toUpperCase()+a.slice(1);if(d in k){b=
d;break}}return b}function e(k){if(!("focus"==k.type||"blur"==k.type)||!(k.target&&k.target!=window))s="focus"==k.type||"focusin"==k.type?v:x,a()}var f=mt.event,d=h.w,l=v,n=v,p=v,s=v,m=+new Date,k=m,r=0,t=v,q=g("visibilityState"),y=g("hidden"),z;a();(function(){var k=q.replace(/[vV]isibilityState/,"visibilitychange");f.d(document,k,a);f.d(window,"pageshow",a);f.d(window,"pagehide",a);"object"==typeof document.onfocusin?(f.d(document,"focusin",e),f.d(document,"focusout",e)):(f.d(window,"focus",e),
f.d(window,"blur",e))})();h.fa={xb:function(){return+new Date-m},tb:function(){return t?+new Date-k+r:r}};d.d("pv-b",function(){f.d(window,"unload",b())});d.d("duration-send",b());d.d("duration-done",function(){k=m=+new Date;r=0});return h.fa})();
(function(){var b=mt.lang,a=h.o,g=h.load,e={Kb:function(e){if((window._dxt===u||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var d=h.b.T();g([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(d)].join(""),e)}},ac:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.hb=e})();
(function(){function b(a,b,e,q){if(!(a===u||b===u||q===u)){if(""===a)return[b,e,q].join("*");a=String(a).split("!");for(var d,f=x,g=0;g<a.length;g++)if(d=a[g].split("*"),String(b)===d[0]){d[1]=e;d[2]=q;a[g]=d.join("*");f=v;break}f||a.push([b,e,q].join("*"));return a.join("!")}}function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];e.e(d,"Object")||e.e(d,"Array")?a(d):k[b]=String(d)}}var g=mt.url,e=mt.lang,f=mt.r,d=mt.i,l=h.o,n=h.w,p=h.hb,s=h.load,m={Q:[],Z:0,Ja:x,B:{va:"",page:""},
init:function(){m.h=0;n.d("pv-b",function(){m.ib();m.lb()});n.d("pv-d",function(){m.mb();m.B.page=""});n.d("stag-b",function(){h.b.c.api=m.h||m.Z?m.h+"_"+m.Z:"";h.b.c.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),m.B.va,m.B.page].join("!")});n.d("stag-d",function(){h.b.c.api=0;m.h=0;m.Z=0})},ib:function(){var a=window._hmt||[];if(!a||e.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var k=arguments[b];e.e(k,"Array")&&(a.cmd[a.id].push(k),
"_setAccount"===k[0]&&(1<k.length&&/^[0-9a-f]{32}$/.test(k[1]))&&(k=k[1],a.id=k,a.cmd[k]=a.cmd[k]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},lb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,y=b.length;d<y;d++){var f=b[d];e.test(f[0])?m.Q.push(f):m.ra(f)}a.cmd[c.id]={push:m.ra}},mb:function(){if(0<m.Q.length)for(var a=0,b=m.Q.length;a<b;a++)m.ra(m.Q[a]);m.Q=w},ra:function(a){var b=a[0];if(m.hasOwnProperty(b)&&
e.e(m[b],"Function"))m[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(m.h|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],x===a||v===a))m.h|=2,h.b.Ga=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){m.h|=4;h.b.c.sn=h.b.Ea();h.b.c.et=0;h.b.c.ep="";h.b.c.vl=d.O()+d.J();h.b.c.kb=0;h.b.ma?(h.b.c.nv=0,h.b.c.st=4):h.b.ma=v;var b=h.b.c.u,e=h.b.c.su;h.b.c.u=l.protocol+"//"+document.location.host+a[1];m.Ja||(h.b.c.su=document.location.href);
h.b.j();h.b.c.u=b;h.b.c.su=e;h.b.D=+new Date}},_trackEvent:function(a){2<a.length&&(m.h|=8,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=4,h.b.c.ep=e.g(a[1])+"*"+e.g(a[2])+(a[3]?"*"+e.g(a[3]):"")+(a[4]?"*"+e.g(a[4]):""),h.b.j())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){m.Z++;for(var q=(h.b.c.cv||"*").split("!"),y=q.length;y<b-1;y++)q.push("*");q[b-1]=d+"*"+e.g(a[2])+"*"+e.g(a[3]);h.b.c.cv=q.join("!");a=h.b.c.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Tb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var d=e.g(a[1]);a=e.g(a[2]);if(d!==u&&a!==u){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=b(f,d,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var d=e.g(a[1]);a=e.g(a[2]);if(d!==u&&a!==u){var f=m.B.va,f=b(f,d,2,a);m.B.va=f}}},_setPageTag:function(a){if(!(3>a.length)){var d=e.g(a[1]);a=e.g(a[2]);
if(d!==u&&a!==u){var f=m.B.page,f=b(f,d,3,a);m.B.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.b.c.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],m.Ja=v)},_trackOrder:function(b){b=b[1];e.e(b,"Object")&&(a(b),m.h|=16,h.b.c.nv=0,h.b.c.st=4,h.b.c.et=94,h.b.c.ep=f.stringify(b),h.b.j())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])m.h|=32,h.b.c.et=93,h.b.c.ep=a,h.b.j()},_trackRTPageview:function(b){b=b[1];e.e(b,"Object")&&
(a(b),b=f.stringify(b),512>=encodeURIComponent(b).length&&(m.h|=64,h.b.c.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.e(b,"Object")){a(b);b=encodeURIComponent(f.stringify(b));var d=function(a){var b=h.b.c.rt;m.h|=128;h.b.c.et=90;h.b.c.rt=a;h.b.j();h.b.c.rt=b},g=b.length;if(900>=g)d.call(this,b);else for(var g=Math.ceil(g/900),q="block|"+Math.round(Math.random()*l.z).toString(16)+"|"+g+"|",y=[],z=0;z<g;z++)y.push(z),y.push(b.substring(900*z,900*z+900)),d.call(this,q+y.join("|")),y=[]}},_setUserId:function(a){a=
a[1];p.Kb();p.ac(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],x===a||v===a))h.b.Ha=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],x===a||v===a))h.b.P=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.b.c.et=3,h.b.c.ep=a,h.b.j())):n.H("duration-send");n.H("duration-done")},_require:function(a){1<a.length&&(a=a[1],l.Ya.test(g.I(a))&&s(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1];a=a[2];if(e.K(l.La,d)&&e.e(a,"Function")&&
(b.plugins=b.plugins||{},b.F=b.F||{},b.plugins[d]=a,b.A=b.A||[],a=b.A.slice(),d&&a.length&&a[0][1]===d))for(var q=0,f=a.length;q<f;q++){var g=a[q][2]||{};if(b.plugins[d]&&!b.F[d])b.F[d]=new b.plugins[d](g),b.A.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],q=a[2]||{};if(e.K(l.La,d))if(b.plugins=b.plugins||{},b.F=b.F||{},b.plugins[d]&&!b.F[d])b.F[d]=new b.plugins[d](q);else{b.A=b.A||[];for(var q=0,f=b.A.length;q<f;q++)if(b.A[q][1]===d)return;b.A.push(a);m._require([w,
l.Qb+d+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=e.g(a[1]),d="";a=a[2];if(e.e(a,"Object")){var d=[],q;for(q in a)a.hasOwnProperty(q)&&(d.push(e.g(q)),d.push(e.g(a[q])));d="*"+d.join("*")}h.b.c.et=7;h.b.c.ep="ce!_iden*"+b+d;h.b.j()}}};m.init();h.Za=m;return h.Za})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=v,this.c={},this.Ha=this.Ga=v,this.P=k.P,this.za=f.oa()&&0<c.aet.length?c.aet.split(","):"",this.ma=x,this.init())}var a=mt.url,g=mt.Qa,e=mt.ta,f=mt.lang,d=mt.cookie,l=mt.i,n=mt.localStorage,p=mt.sessionStorage,s=mt.r,m=mt.event,k=h.o,r=h.load,t=h.w;b.prototype={pa:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Ka:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},V:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.Ka(b,c.dm[d]))return v}else{var e=a.I(b);if(e&&this.pa(e,c.dm[d]))return v}return x},T:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.pa(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ia:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Ka(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},zb:function(){if(!document.referrer)return k.G-k.L>c.vdur?1:4;var b=x;this.V(document.referrer)&&this.V(document.location.href)?b=v:(b=a.I(document.referrer),b=this.pa(b||"",document.location.hostname));return b?k.G-k.L>c.vdur?1:4:3},getData:function(a){try{return d.get(a)||p.get(a)||n.get(a)}catch(b){}},setData:function(a,b,e){try{d.set(a,b,{domain:this.T(),path:this.ia(),N:e}),e?n.set(a,b,e):p.set(a,b)}catch(f){}},Tb:function(a){try{d.set(a,"",{domain:this.T(),path:this.ia(),
N:-1}),p.remove(a),n.remove(a)}catch(b){}},Zb:function(){var a,b,e,f,g;k.L=this.getData("Hm_lpvt_"+c.id)||0;13===k.L.length&&(k.L=Math.round(k.L/1E3));b=this.zb();a=4!==b?1:0;if(e=this.getData("Hm_lvt_"+c.id)){f=e.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<k.G-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(k.G);4<f.length;)f.shift();e=f.join(",");f=f[f.length-1]}else e=k.G,f="",g=1;this.setData("Hm_lvt_"+c.id,e,c.age);this.setData("Hm_lpvt_"+
c.id,k.G);e=d.Lb(this.T(),this.ia());if(0===c.nv&&this.V(document.location.href)&&(""===document.referrer||this.V(document.referrer)))a=0,b=4;this.c.nv=a;this.c.st=b;this.c.cc=e;this.c.lt=f;this.c.lv=g},Oa:function(){for(var a=[],b=this.c.et,d=+new Date,e=0,f=k.Ra.length;e<f;e++){var g=k.Ra[e],l=this.c[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:this.c.rt&&a.push("rt="+
encodeURIComponent(this.c.rt));break;case 5:a.push("_lpt="+this.D);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.D);a.push("_ct="+d);break;case 90:this.c.rt&&a.push("rt="+this.c.rt)}return a.join("&")},$b:function(){this.Zb();this.c.si=c.id;this.c.sn=this.Ea();this.c.su=document.referrer;this.c.hh=window.location.hash;this.c.ds=l.Ub;this.c.cl=l.colorDepth+"-bit";this.c.ln=String(l.language).toLowerCase();this.c.ja=l.javaEnabled?1:0;this.c.ck=l.cookieEnabled?1:0;this.c.lo="number"===typeof _bdhm_top?
1:0;this.c.fl=e.Bb();this.c.v="1.2.48";this.c.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.c.tt=document.title||"";this.c.vl=l.O()+l.J();var b=document.location.href;this.c.cm=a.m(b,k.Gb)||"";this.c.cp=a.m(b,k.Hb)||a.m(b,k.fc)||"";this.c.cw=a.m(b,k.Fb)||a.m(b,k.hc)||"";this.c.ci=a.m(b,k.Db)||a.m(b,k.ec)||"";this.c.cf=a.m(b,k.Ib)||a.m(b,k.gc)||"";this.c.cu=a.m(b,k.Eb)||a.m(b,k.dc)||""},init:function(){try{this.$b(),0===this.c.nv?this.Yb():this.Ba(),h.b=this,this.bb(),this.ab(),t.H("pv-b"),
this.Xb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.X+"//"+k.sa+"?"+b.join("&"))}},Xb:function(){function a(){t.H("pv-d")}this.Ga?(this.ma=v,this.c.et=0,this.c.ep="",this.c.vl=l.O()+l.J(),this.j(a)):a();this.D=+new Date},j:function(a){if(this.Ha){var b=this;b.c.rnd=Math.round(Math.random()*k.z);t.H("stag-b");var d=k.X+"//"+k.sa+"?"+b.Oa();t.H("stag-d");b.Xa(d);g.log(d,
function(d){b.Na(d);f.e(a,"Function")&&a.call(b)})}},bb:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.I(document.referrer)===k.$?1:0,f=a.m(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.c.rnd=Math.round(Math.random()*k.z),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.c.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,
f))},ab:function(){var b=a.I(document.referrer)===k.$;if(window.postMessage&&window.self!==window.parent&&b){var d=this;m.d(window,"message",function(b){if(a.I(b.origin)===k.$){var e=b.data||{};b=e.sd||"";var e=e.jn||"",f=/^customevent$/.test(e);RegExp(c.id).test(b)&&f&&(d.c.rnd=Math.round(Math.random()*k.z),r(k.protocol+"//"+c.js+e+".js?"+d.c.rnd))}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"http://"+k.$)}},Xa:function(a){var b;try{b=s.parse(p.get("Hm_unsent_"+
c.id)||"[]")}catch(d){b=[]}var e=this.c.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);p.set("Hm_unsent_"+c.id,s.stringify(b))},Na:function(a){var b;try{b=s.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?p.set("Hm_unsent_"+c.id,s.stringify(b)):this.Ba()}},Ba:function(){p.remove("Hm_unsent_"+
c.id)},Yb:function(){var a=this,b;try{b=s.parse(p.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.X+"//"+b,function(b){a.Na(b)})},f=0;f<b.length;f++)e(b[f])},Ea:function(){return Math.round(+new Date/1E3)%65535}};return new b})();
(function(){var b=mt.event,a=mt.lang,g=h.o;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.c.kb=a.Ia(h.b.c.kb)?h.b.c.kb:0;var e=function(){h.b.c.et=85;h.b.c.ep=h.b.c.kb;h.b.j()};b.d(document,"keyup",function(){h.b.c.kb++});b.d(window,"unload",function(){e()});setInterval(e,g.Mb)}})();var B=h.o,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.i,a=mt.lang,g=mt.event,e=mt.r;if("undefined"!==typeof h.b&&(c.med||(!b.na||7<b.Jb)&&c.cvcc)){var f,d,l,n,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===x)return x},m=function(b,d){var g={};g.n=f;g.t="clk";g.v=b;if(d){var k=d.getAttribute("href"),m=d.getAttribute("onclick")?""+d.getAttribute("onclick"):w,n=d.getAttribute("id")||"";l.test(k)?(g.sn="mediate",
g.snv=k):a.e(m,"String")&&l.test(m)&&(g.sn="wrap",g.snv=m);g.id=n}h.b.c.et=86;h.b.c.ep=e.stringify(g);h.b.j();for(g=+new Date;400>=+new Date-g;);};if(c.med)d="/zoosnet",f="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,n={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){d="/other-comm";f="other";l=c.cvcc.q||u;var k=c.cvcc.id||u;n={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f,g=0,m=b.length;g<m;g++)d=b[g],l!==u?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),k?(d=d.getAttribute("id"),(l.test(e)||l.test(f)||k.test(d))&&
a.push(b[g])):(l.test(e)||l.test(f))&&a.push(b[g])):k!==u&&(d=d.getAttribute("id"),k.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof n&&"undefined"!==typeof l){var r;d+=/\/$/.test(d)?"":"/";var t=function(b,e){if(r===e)return m(d+b,e),x;if(a.e(e,"Array")||a.e(e,"NodeList"))for(var f=0,g=e.length;f<g;f++)if(r===e[f])return m(d+b+"/"+(f+1),e[f]),x};g.d(document,"mousedown",function(b){b=b||window.event;r=b.target||b.srcElement;var d={};for(s(n,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});r&&
r!==document&&s(d,t)!==x;)r=r.parentNode})}}})();(function(){var b=mt.f,a=mt.lang,g=mt.event,e=mt.r;if("undefined"!==typeof h.b&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var f={Ua:function(){for(var a=c.cvcf.length,e,n=0;n<a;n++)(e=b.ha(decodeURIComponent(c.cvcf[n])))&&g.d(e,"click",f.ga())},ga:function(){return function(){h.b.c.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.c.ep=e.stringify(a);h.b.j()}}};b.Ma(function(){f.Ua()})}})();
(function(){var b=mt.event,a=mt.r;if(c.med&&"undefined"!==typeof h.b){var g=+new Date,e={n:"anti",sb:0,kb:0,clk:0},f=function(){h.b.c.et=86;h.b.c.ep=a.stringify(e);h.b.j()};b.d(document,"click",function(){e.clk++});b.d(document,"keyup",function(){e.kb=1});b.d(window,"scroll",function(){e.sb++});b.d(window,"unload",function(){e.t=+new Date-g;f()});b.d(window,"load",function(){setTimeout(f,5E3)})}})();c.spa!==u&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();