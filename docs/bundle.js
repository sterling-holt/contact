(()=>{function n(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var t,r,o,a={},l=window.location.search,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var n=r.next();return i=n.done,n},e:function(n){c=!0,l=n},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw l}}}}(new URLSearchParams(l));try{for(i.s();!(t=i.n()).done;){var c=(r=t.value,o=2,function(n){if(Array.isArray(n))return n}(r)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,l,i=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(i.push(r.value),i.length!==e);c=!0);}catch(n){u=!0,o=n}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(r,o)||n(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],f=c[1];a[u]=f}}catch(n){i.e(n)}finally{i.f()}console.log(a),document.addEventListener("DOMContentLoaded",(function(n){var e="BEGIN:VCARD\nVERSION:3.0\nFN:".concat(a.name,"\nTEL;TYPE=CELL:").concat(a.phone&&a.phone,"\nEND:VCARD"),t=window.URL.createObjectURL(new Blob([e],{type:"text/vcard"})),r=document.createElement("a");r.href=t,r.download="".concat(a.name,".vcf"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(t),console.log(e),console.log(t)})),document.getElementsByTagName("body")[0].appendChild(app)})();