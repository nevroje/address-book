!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=window.localStorage;function o(){document.getElementById("form").classList.toggle("hidden")}var l=function(){var e=JSON.parse(r.getItem("contacts")),t=document.querySelector(".contact-list");if(e){t.innerHTML="";var n=document.createElement("div");e.forEach(function(e){var t=document.createElement("div");t.id=e.id,t.innerHTML='\n            <div class="max-w md w-full lg:flex">\n                <div class="h-48 mb-2 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url(\'http://www.valleyroadwines.com/wp-content/uploads/2013/04/Anon-Person.png\')" title="Picture">\n            </div>\n              <div id="kort" class="w-1/6 mb-2 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pr-1 flex flex-col justify-between leading-normal">\n                  <div class="mb-8">\n                    <p class="flex justify-between text-black font-bold text-xl">\n                    '+e.name+'\n                    </p>\n               <div class="text-m text-grey-darkest flex items-center">'+e.company+'</div>\n                <p class="text-grey-darker text-xs">'+e.notes+'</p>\n                </div>\n                <div class="flex items-center">\n                    <div class="text-sm">\n                        <p class="text-black leading-none"> Phone: '+e.phone+'</p>\n                        <p class="text-black leading-none"> Email: '+e.email+'</p>\n                        <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n         ";var r=document.createElement("button");r.classList="delete",r.id="delete",r.innerHTML='\n            <i class="material-icons">close</i>\n            ',t.appendChild(r),n.appendChild(t)}),t.appendChild(n)}else t.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",function(){document.getElementById("formButton").addEventListener("click",o),l();var e=document.querySelector(".new-contact-form");document.querySelector(".contact-list").addEventListener("click",function(e){var t=e.target.parentNode.id,n=JSON.parse(r.getItem("contacts"))||[];n.forEach(function(e){e.id==t&&n.splice(n.indexOf(e),1)}),r.setItem("contacts",JSON.stringify(n)),l()}),e.addEventListener("submit",function(t){t.preventDefault();var n=window.localStorage,r=e.elements,i=r.name,a=r.email,c=r.phone,d=r.company,s=r.notes,u=r.twitter,f={id:Date.now(),name:i.value,email:a.value,phone:c.value,company:d.value,notes:s.value,twitter:u.value};console.log("Saving the following contact: "+JSON.stringify(f));var m=JSON.parse(n.getItem("contacts"))||[];m.push(f),n.setItem("contacts",JSON.stringify(m)),l(),e.reset(),o()})})}]);
