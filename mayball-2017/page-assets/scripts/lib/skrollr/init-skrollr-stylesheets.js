/*
|-------------------------------------------
| initSkrollrStylesheets
|-------------------------------------------
|
| a function to load skrollr-stylesheets for the page, after the initial rendering has been completed
|
| type:         function
| author:       Josh Bambrick
| version:      0.0.1
| modified:     11/12/14
|
*/

define(function () {
    return function () {
        /*! skrollr-stylesheets 1.0.0 (2014-12-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-stylesheets | Free to use under terms of MIT license */
		(function(e,t){"use strict";var n,r=[],l=/@-skrollr-keyframes\s+([\w-]+)/g,s=/\s*\{\s*((?:[^{]+\{[^}]*\}\s*)+?)\s*\}/g,a=/([\w\-]+)\s*\{([^}]+)\}/g,o="skrollr-",i=/-skrollr-animation-name\s*:\s*([\w-]+)/g,u=/-skrollr-(anchor-target|smooth-scrolling|emit-events|menu-offset)\s*:\s*['"]([^'"]+)['"]/g,f=function(t){var n=new XMLHttpRequest;try{n.open("GET",t,!1),n.send(null)}catch(r){e.XDomainRequest&&(n=new XDomainRequest,n.open("GET",t,!1),n.send(null))}return n.responseText},c=function(t){for(var l=0;t.length>l;l++){var s=t[l];if("LINK"===s.tagName){if(null===s.getAttribute("data-skrollr-stylesheet"))continue;if(e.matchMedia){var a=s.getAttribute("media");if(a&&!matchMedia(a).matches)continue}n=f(s.href)}else n=s.textContent||s.innerText||s.innerHTML;n&&r.push(n)}r.reverse();for(var o={},i=[],u=[],c=0;r.length>c;c++)n=r[c],g(n,o),d(n,i),x(n,u);m(o,i),v(u)},g=function(e,t){l.lastIndex=0;for(var n,r,o,i;null!==(n=l.exec(e));)for(s.lastIndex=l.lastIndex,r=s.exec(e),a.lastIndex=0,i=t[n[1]]={};null!==(o=a.exec(r[1]));)i[o[1]]=o[2].replace(/[\n\r\t]/g,"")},h=function(e,t){for(var n,r=t;r--&&"{"!==e.charAt(r););for(n=r;n--&&"}"!==e.charAt(n-1););return e.substring(n,r).replace(/[\n\r\t]/g,"")},d=function(e,t){var n,r;for(i.lastIndex=0;null!==(n=i.exec(e));)r=h(e,i.lastIndex),t.push([r,n[1]])},x=function(e,t){var n,r;for(u.lastIndex=0;null!==(n=u.exec(e));)r=h(e,u.lastIndex),t.push([r,n[1],n[2]])},m=function(e,n){for(var r,l,s,a,i,u,f,c,g=0;n.length>g;g++)if(r=t.querySelectorAll(n[g][0])){l=e[n[g][1]];for(s in l)for(a=0===s.indexOf(o)?s.substring(o.length):s,i=0;r.length>i;i++)c=r[i],u="data-"+a,f=l[s],c.hasAttribute(u)&&(f+=c.getAttribute(u)),c.setAttribute(u,f)}},v=function(e){for(var n,r,l,s,a,o=0;e.length>o;o++)if(n=e[o],r=t.querySelectorAll(n[0]),l="data-"+n[1],s=n[2],r)for(a=0;r.length>a;a++)r[a].setAttribute(l,s)};c(t.querySelectorAll("link, style"))})(window,document);
    };
});