(function(e){function t(t){for(var a,o,l=t[0],n=t[1],c=t[2],m=0,d=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,l=1;l<s.length;l++){var n=s[l];0!==r[n]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=n;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main",attrs:{id:"app"}},[s("div",{staticClass:"section"},[s("h3",{staticClass:"section__title"},[e._v("Program Design")]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"title"}},[e._v("What's the title of your program?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.programDesign.title,expression:"programDesign.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Please enter the title of your program"},domProps:{value:e.programDesign.title},on:{input:function(t){t.target.composing||e.$set(e.programDesign,"title",t.target.value)}}})])]),s("div",{staticClass:"col-3"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"startDate"}},[e._v("Start Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.programDesign.startData,expression:"programDesign.startData"}],staticClass:"form-control",attrs:{type:"date",id:"startDate",placeholder:"E.g 01/01/2020"},domProps:{value:e.programDesign.startData},on:{input:function(t){t.target.composing||e.$set(e.programDesign,"startData",t.target.value)}}})])]),s("div",{staticClass:"col-3"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"startDate"}},[e._v("End Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.programDesign.endDate,expression:"programDesign.endDate"}],staticClass:"form-control",attrs:{type:"date",id:"endDate",placeholder:"E.g 01/01/2020"},domProps:{value:e.programDesign.endDate},on:{input:function(t){t.target.composing||e.$set(e.programDesign,"endDate",t.target.value)}}})])]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"issues"}},[e._v("What issues are you trying to solve in this program?")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"issues",placeholder:"Write problems and press enter"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addIssue.apply(null,arguments)}}}),s("div",{staticClass:"issue-list"},e._l(e.programDesign.issues,(function(t,a){return s("div",{key:a,staticClass:"issue-list__item"},[s("div",{staticClass:"issue-list__item-inner"},[e._v(" "+e._s(t)+" "),s("button",{staticClass:"issue-list__item-btn",on:{click:function(t){return e.removeIssue(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])])})),0)])]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"mb-0"},[s("label",{staticClass:"form-label",attrs:{for:"goals"}},[e._v("What are your goals for this program?")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"goals",placeholder:"Write goals and press enter"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addGoal.apply(null,arguments)}}}),s("div",{staticClass:"issue-list"},e._l(e.programDesign.goals,(function(t,a){return s("div",{key:a,staticClass:"issue-list__item"},[s("div",{staticClass:"issue-list__item-inner"},[e._v(" "+e._s(t)+" "),s("button",{staticClass:"issue-list__item-btn",on:{click:function(t){return e.removeGoal(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])])})),0)])])])])])]),s("div",{staticClass:"section"},[s("h3",{staticClass:"section__title"},[e._v("Outcome Measurement Framework")]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e._m(0),s("div",{staticClass:"mb-3"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.outcomeMeasurement.personnel,expression:"outcomeMeasurement.personnel"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"personnel"},domProps:{checked:Array.isArray(e.outcomeMeasurement.personnel)?e._i(e.outcomeMeasurement.personnel,null)>-1:e.outcomeMeasurement.personnel},on:{change:function(t){var s=e.outcomeMeasurement.personnel,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);a.checked?o<0&&e.$set(e.outcomeMeasurement,"personnel",s.concat([i])):o>-1&&e.$set(e.outcomeMeasurement,"personnel",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.outcomeMeasurement,"personnel",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"personnel"}},[e._v(" Personnel ")])]),e.outcomeMeasurement.personnel?s("div",{staticClass:"px-4 mt-2"},[s("label",{staticClass:"form-label",attrs:{for:"personnels"}},[e._v("Which personnel will be in this program?")]),s("select",{staticClass:"form-control",attrs:{id:"personnels"},on:{change:e.selectPersonnel}},[s("option",{attrs:{selected:"",disabled:""}},[e._v("Select personnel")]),e._l(e.itemList,(function(t,a){return s("option",{key:a,domProps:{value:t,textContent:e._s(t)}})}))],2),s("div",{staticClass:"issue-list"},e._l(e.outcomeMeasurement.personnels,(function(t,a){return s("div",{key:a,staticClass:"issue-list__item"},[s("div",{staticClass:"issue-list__item-inner"},[e._v(" "+e._s(t)+" "),s("button",{staticClass:"issue-list__item-btn",on:{click:function(t){return e.removePersonnel(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])])})),0)]):e._e()]),s("div",{staticClass:"mb-3"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.outcomeMeasurement.funding,expression:"outcomeMeasurement.funding"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"funding"},domProps:{checked:Array.isArray(e.outcomeMeasurement.funding)?e._i(e.outcomeMeasurement.funding,null)>-1:e.outcomeMeasurement.funding},on:{change:function(t){var s=e.outcomeMeasurement.funding,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);a.checked?o<0&&e.$set(e.outcomeMeasurement,"funding",s.concat([i])):o>-1&&e.$set(e.outcomeMeasurement,"funding",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.outcomeMeasurement,"funding",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"funding"}},[e._v(" Funding ")])]),e.outcomeMeasurement.funding?s("div",{staticClass:"px-4 mt-2"},[s("label",{staticClass:"form-label",attrs:{for:"fundings"}},[e._v("Add funding source")]),s("select",{staticClass:"form-control",attrs:{id:"fundings"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.selectFunding.apply(null,arguments))}}},[s("option",{attrs:{selected:"",disabled:""}},[e._v("Select and press enter")]),e._l(e.itemList,(function(t,a){return s("option",{key:a,domProps:{value:t,textContent:e._s(t)}})}))],2),s("div",{staticClass:"issue-list"},e._l(e.outcomeMeasurement.fundings,(function(t,a){return s("div",{key:a,staticClass:"issue-list__item"},[s("div",{staticClass:"issue-list__item-inner"},[e._v(" "+e._s(t)+" "),s("button",{staticClass:"issue-list__item-btn",on:{click:function(t){return e.removeFunding(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])])})),0)]):e._e()]),s("div",{staticClass:"mb-3"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.outcomeMeasurement.funding,expression:"outcomeMeasurement.funding"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"partnership"},domProps:{checked:Array.isArray(e.outcomeMeasurement.funding)?e._i(e.outcomeMeasurement.funding,null)>-1:e.outcomeMeasurement.funding},on:{change:function(t){var s=e.outcomeMeasurement.funding,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);a.checked?o<0&&e.$set(e.outcomeMeasurement,"funding",s.concat([i])):o>-1&&e.$set(e.outcomeMeasurement,"funding",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.outcomeMeasurement,"funding",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"partnership"}},[e._v(" Partnership ")])]),e.outcomeMeasurement.partnership?s("div",{staticClass:"px-4 mt-2"},[s("label",{staticClass:"form-label",attrs:{for:"partners"}},[e._v("Who are also partnering with you in this program?")]),s("select",{staticClass:"form-control",attrs:{id:"partners"},on:{change:e.selectPartner}},[s("option",{attrs:{selected:"",disabled:""}},[e._v("Select partner organizations")]),e._l(e.itemList,(function(t,a){return s("option",{key:a,domProps:{value:t,textContent:e._s(t)}})}))],2),s("div",{staticClass:"issue-list"},e._l(e.outcomeMeasurement.partners,(function(t,a){return s("div",{key:a,staticClass:"issue-list__item"},[s("div",{staticClass:"issue-list__item-inner"},[e._v(" "+e._s(t)+" "),s("button",{staticClass:"issue-list__item-btn",on:{click:function(t){return e.removePartner(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])])})),0)]):e._e()]),s("div",{staticClass:"mb-3"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.outcomeMeasurement.other,expression:"outcomeMeasurement.other"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"other"},domProps:{checked:Array.isArray(e.outcomeMeasurement.other)?e._i(e.outcomeMeasurement.other,null)>-1:e.outcomeMeasurement.other},on:{change:function(t){var s=e.outcomeMeasurement.other,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);a.checked?o<0&&e.$set(e.outcomeMeasurement,"other",s.concat([i])):o>-1&&e.$set(e.outcomeMeasurement,"other",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.outcomeMeasurement,"other",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"other"}},[e._v(" Other ")])]),e.outcomeMeasurement.other?s("div",{staticClass:"px-4 mt-2"},[s("label",{staticClass:"form-label",attrs:{for:"others"}},[e._v("What other resources you have?")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"others",placeholder:"Write and press enter"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addOther.apply(null,arguments)}}}),s("div",{staticClass:"issue-list"},e._l(e.outcomeMeasurement.others,(function(t,a){return s("div",{key:a,staticClass:"issue-list__item"},[s("div",{staticClass:"issue-list__item-inner"},[e._v(" "+e._s(t)+" "),s("button",{staticClass:"issue-list__item-btn",on:{click:function(t){return e.removeOther(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])])})),0)]):e._e()])])])]),s("div",{staticClass:"section"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e._m(1),s("div",{staticClass:"row"},e._l(e.activities,(function(t,a){return s("div",{key:a,staticClass:"col-2"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"activity_"+a},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(s){var a=t.value,r=s.target,i=!!r.checked;if(Array.isArray(a)){var o=null,l=e._i(a,o);r.checked?l<0&&e.$set(t,"value",a.concat([o])):l>-1&&e.$set(t,"value",a.slice(0,l).concat(a.slice(l+1)))}else e.$set(t,"value",i)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"activity_"+a}},[e._v(" "+e._s(t.label)+" ")])])])})),0)])])]),s("div",{staticClass:"section"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e._m(2),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"parameter"}},[e._v("Select your parameters (Number of X)")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"parameter",placeholder:"Write and press enter or select from the suggestions"},on:{change:e.addParameter}})]),s("div",{staticClass:"parameters"},e._l(e.parameters,(function(t,a){return s("div",{key:a,staticClass:"parameters__item"},[s("div",{staticClass:"parameters__item-text"},[e._v(" "+e._s(t.title)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"number",placeholder:"0",step:"1",min:"1"},domProps:{value:t.value},on:{input:function(s){s.target.composing||e.$set(t,"value",s.target.value)}}}),s("button",{staticClass:"parameters__item-btn",on:{click:function(t){return e.removeParameter(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])})),0)])])]),e.parameters.length?s("div",{staticClass:"section"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e._m(3),s("div",{staticClass:"parameters"},e._l(e.parameters,(function(t,a){return s("div",{key:a,staticClass:"parameters__item"},[s("div",{staticClass:"parameters__item-text"},[e._v(" "+e._s(t.title)+" ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.inputType,expression:"item.inputType"}],staticClass:"form-control",on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"inputType",s.target.multiple?a:a[0])}}},[s("option",{attrs:{value:"number"}},[e._v("Number")]),s("option",{attrs:{value:"percentage"}},[e._v("Percentage")])]),s("input",{staticClass:"form-control",attrs:{type:"number",max:"number"===t.inputType?1e4:100,placeholder:"number"===t.inputType?0:"%",step:"1",min:"1"}}),s("button",{staticClass:"parameters__item-btn",on:{click:function(t){return e.removeParameter(a)}}},[s("svg",{staticClass:"bi bi-x",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"}},[s("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])])})),0)])])]):e._e(),e.programDesign.goals.length?s("div",{staticClass:"section"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e._m(4),e._l(e.programDesign.goals,(function(t,a){return s("div",{key:a,staticClass:"mb-3"},[s("div",{staticClass:"mb-2"},[s("h6",{staticClass:"text-danger"},[e._v(" Goal 0"+e._s(a+1)+": "+e._s(t)+" ")]),s("h6",{staticClass:"text-muted"},[e._v("Select measure parameters")])]),s("div",{staticClass:"form-check mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.outcome.met,expression:"outcome.met"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"goal_meet_"+a},domProps:{checked:Array.isArray(e.outcome.met)?e._i(e.outcome.met,null)>-1:e.outcome.met},on:{change:function(t){var s=e.outcome.met,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);a.checked?o<0&&e.$set(e.outcome,"met",s.concat([i])):o>-1&&e.$set(e.outcome,"met",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.outcome,"met",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"goal_meet_"+a}},[e._v("Met program goal")])]),s("div",{staticClass:"form-check mb-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.outcome.notMet,expression:"outcome.notMet"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"goal_not_meet_"+a},domProps:{checked:Array.isArray(e.outcome.notMet)?e._i(e.outcome.notMet,null)>-1:e.outcome.notMet},on:{change:function(t){var s=e.outcome.notMet,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);a.checked?o<0&&e.$set(e.outcome,"notMet",s.concat([i])):o>-1&&e.$set(e.outcome,"notMet",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.outcome,"notMet",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"goal_not_meet_"+a}},[e._v("Did not meet program goal")])]),s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.outcome.other,expression:"outcome.other"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"goal_other_"+a},domProps:{checked:Array.isArray(e.outcome.other)?e._i(e.outcome.other,null)>-1:e.outcome.other},on:{change:function(t){var s=e.outcome.other,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);a.checked?o<0&&e.$set(e.outcome,"other",s.concat([i])):o>-1&&e.$set(e.outcome,"other",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.outcome,"other",r)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"goal_other_"+a}},[e._v(" Other ")])]),e.outcome.other?s("input",{staticClass:"form-control mx-2 w-25",attrs:{type:"text",placeholder:"Write"}}):e._e()])])}))],2)])]):e._e(),s("div",{staticClass:"section"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.submit}},[e._v("Submit")])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-3"},[s("h4",{staticClass:"card-title text-primary"},[e._v("Inputs")]),s("h6",{staticClass:"card-title"},[e._v("What resources are available for this program?")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-3"},[s("h4",{staticClass:"card-title text-primary"},[e._v("Activities")]),s("h6",{staticClass:"card-title"},[e._v("What activities are you planning to do this program?")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-3"},[s("h4",{staticClass:"card-title text-primary"},[e._v("Output")]),s("h6",{staticClass:"card-title"},[e._v("What are you required to accomplish in this program?")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-3"},[s("h4",{staticClass:"card-title text-primary"},[e._v("Measure of Achievement")]),s("h6",{staticClass:"card-title"},[e._v("How would you define your success?")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-3"},[s("h4",{staticClass:"card-title text-primary"},[e._v("Outcome")]),s("h6",{staticClass:"card-title"},[e._v("How are the intended outcomes of your program?")])])}],o=(s("a434"),{name:"App",data:function(){return{programDesign:{title:"",startData:null,endDate:null,issues:[],goals:[]},outcomeMeasurement:{personnel:!0,personnels:[],funding:!0,fundings:[],partnership:!0,partners:[],other:!0,others:[]},activities:[{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1},{label:"Sample Service",value:!1}],parameters:[],outcome:{met:!0,notMet:!0,other:!0}}},computed:{itemList:function(){return["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9","Item 10"]}},methods:{addIssue:function(e){this.programDesign.issues.push(e.target.value),e.target.value=null},removeIssue:function(e){this.programDesign.issues.splice(e,1)},addGoal:function(e){this.programDesign.goals.push(e.target.value),e.target.value=null},removeGoal:function(e){this.programDesign.goals.splice(e,1)},selectPersonnel:function(e){this.outcomeMeasurement.personnels.push(e.target.value)},removePersonnel:function(e){this.outcomeMeasurement.personnels.splice(e,1)},selectFunding:function(e){this.outcomeMeasurement.fundings.push(e.target.value)},removeFunding:function(e){this.outcomeMeasurement.fundings.splice(e,1)},selectPartner:function(e){this.outcomeMeasurement.partners.push(e.target.value)},removePartner:function(e){this.outcomeMeasurement.partners.splice(e,1)},addOther:function(e){this.outcomeMeasurement.others.push(e.target.value),e.target.value=null},removeOther:function(e){this.outcomeMeasurement.others.splice(e,1)},addParameter:function(e){var t={title:e.target.value,inputType:"number",value:null};this.parameters.push(t),e.target.value=null},removeParameter:function(e){this.parameters.splice(e,1)},submit:function(){console.log({programDesign:this.programDesign}),console.log({outcomeMeasurement:this.outcomeMeasurement}),console.log({activities:this.activities}),console.log({parameters:this.parameters}),console.log({outcome:this.outcome})}}}),l=o,n=(s("5c0b"),s("2877")),c=Object(n["a"])(l,r,i,!1,null,null,null),u=c.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"9c0c":function(e,t,s){}});
//# sourceMappingURL=app.2c1b6434.js.map