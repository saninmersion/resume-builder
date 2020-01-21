(function(e){function t(t){for(var s,r,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/resume-builder/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"35a5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("ResumeBuilder")],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"flex"}},[a("aside",{staticStyle:{width:"40%",background:"#29233c",padding:"40px 20px"},attrs:{id:"sidebar"}},[a("div",{staticStyle:{display:"flex"}},[a("sidebar",{staticStyle:{flex:"1",height:"100vh"},attrs:{active:e.activeTab},on:{generate:e.handleFormChange}}),a("div",{staticStyle:{flex:"2",overflow:"auto"}},["basics"===e.activeTab?a("basic-profile-form",{attrs:{profile:e.resume.basics}}):e._e(),"education"===e.activeTab?a("education-form",{attrs:{education:e.resume.education}}):e._e(),"work"===e.activeTab?a("work-form",{attrs:{work:e.resume.work}}):e._e(),"volunteer"===e.activeTab?a("volunteer-form",{attrs:{volunteer:e.resume.volunteer}}):e._e(),"awards"===e.activeTab?a("awards-form",{attrs:{awards:e.resume.awards}}):e._e(),"projects"===e.activeTab?a("project-form",{attrs:{projects:e.resume.projects}}):e._e(),"skills"===e.activeTab?a("skills-form",{attrs:{skills:e.resume.skills}}):e._e(),"languages"===e.activeTab?a("languages-form",{attrs:{languages:e.resume.languages}}):e._e(),"interests"===e.activeTab?a("interests-form",{attrs:{interests:e.resume.interests}}):e._e(),"references"===e.activeTab?a("references-form",{attrs:{references:e.resume.references}}):e._e()],1)],1)]),a("main",{staticStyle:{flex:"1",overflow:"auto"}},[a("preview-wrapper",{attrs:{resume:e.resume,headings:e.headings}})],1)])},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Awards & Certifications")]),e._m(0),a("hr"),e._l(e.awards,(function(t,s){return a("div",{key:"resume_awards_"+s},[a("div",[a("label",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"award.title"}],staticClass:"u-full-width",attrs:{type:"text",name:"award.title",placeholder:"Supreme Hacker"},domProps:{value:t.title},on:{input:function(a){a.target.composing||e.$set(t,"title",a.target.value)}}})]),a("div",[a("label",[e._v("Issued Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"award.date"}],staticClass:"u-full-width",attrs:{type:"text",name:"award.date",placeholder:"May 2015"},domProps:{value:t.date},on:{input:function(a){a.target.composing||e.$set(t,"date",a.target.value)}}})]),a("div",[a("label",[e._v("Provider")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.awarder,expression:"award.awarder"}],staticClass:"u-full-width",attrs:{type:"text",name:"award.awarder",placeholder:"HackNepal"},domProps:{value:t.awarder},on:{input:function(a){a.target.composing||e.$set(t,"awarder",a.target.value)}}})]),a("div",[a("label",[e._v("Summary")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.summary,expression:"award.summary"}],staticClass:"u-full-width",attrs:{name:"award.summary",placeholder:"Recognized for creating the most awesome project at a HackNepal hackathon."},domProps:{value:t.summary},on:{input:function(a){a.target.composing||e.$set(t,"summary",a.target.value)}}})])])})),e._m(1)],2)},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.awards",value:"",placeholder:"Awards & Certifications"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-buttons"},[a("button",{attrs:{type:"button"}},[e._v("Add Award")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Award")])])}],c={name:"AwardsForm",props:{awards:{type:Array,required:!0}},methods:{addAward:function(){this.awards.push({title:"",date:"",awarder:"",summary:""})}}},d=c,m=a("2877"),p=Object(m["a"])(d,l,u,!1,null,"7befcdea",null),v=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("fieldset",[a("h5",[e._v("Your Personal Info")]),a("div",[a("label",[e._v("Full Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.name,expression:"profile.name"}],staticClass:"u-full-width",attrs:{type:"text",name:"basics.name",placeholder:"Kumar Chhetri"},domProps:{value:e.profile.name},on:{input:function(t){t.target.composing||e.$set(e.profile,"name",t.target.value)}}})]),a("div",[a("label",[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.email,expression:"profile.email"}],staticClass:"u-full-width",attrs:{type:"text",name:"basics.email",placeholder:"kumarchhetri@somemail.com"},domProps:{value:e.profile.email},on:{input:function(t){t.target.composing||e.$set(e.profile,"email",t.target.value)}}})]),a("div",[a("label",[e._v("Phone Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.phone,expression:"profile.phone"}],staticClass:"u-full-width",attrs:{type:"text",name:"basics.phone",placeholder:"(977) 123-456789"},domProps:{value:e.profile.phone},on:{input:function(t){t.target.composing||e.$set(e.profile,"phone",t.target.value)}}})]),a("div",[a("label",[e._v("Location")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.location.address,expression:"profile.location.address"}],staticClass:"u-full-width",attrs:{type:"text",name:"basics.location.address",placeholder:"Kathmandu, Nepal"},domProps:{value:e.profile.location.address},on:{input:function(t){t.target.composing||e.$set(e.profile.location,"address",t.target.value)}}})]),a("div",[a("label",[e._v("Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.website,expression:"profile.website"}],staticClass:"u-full-width",attrs:{type:"text",name:"basics.website",placeholder:"myportfolio.com/myname"},domProps:{value:e.profile.website},on:{input:function(t){t.target.composing||e.$set(e.profile,"website",t.target.value)}}})])])])},g=[],h={name:"BasicProfileForm",props:{profile:{type:Object,required:!0,default:function(){}}}},_=h,w=Object(m["a"])(_,f,g,!1,null,"1e63c5e0",null),y=w.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Your Educational Background")]),e._m(0),a("hr",{}),e._l(e.education,(function(t,s){return a("div",{key:"resume_education_"+s},[a("div",[a("label",[e._v("School Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.institution,expression:"educationItem.institution"}],staticClass:"u-full-width",attrs:{type:"text",name:"education.institution",placeholder:"Tribhuvan University"},domProps:{value:t.institution},on:{input:function(a){a.target.composing||e.$set(t,"institution",a.target.value)}}})]),a("div",[a("label",[e._v("School Location")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"educationItem.location"}],staticClass:"u-full-width",attrs:{type:"text",name:"education.location",placeholder:"Kirtipur, Kathmandu, Nepal"},domProps:{value:t.location},on:{input:function(a){a.target.composing||e.$set(t,"location",a.target.value)}}})]),a("div",[a("label",[e._v("Degree")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.studyType,expression:"educationItem.studyType"}],staticClass:"u-full-width",attrs:{type:"text",name:"education.studyType",placeholder:"BS"},domProps:{value:t.studyType},on:{input:function(a){a.target.composing||e.$set(t,"studyType",a.target.value)}}})]),a("div",[a("label",[e._v("Major")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.area,expression:"educationItem.area"}],staticClass:"u-full-width",attrs:{type:"text",name:"education.area",placeholder:"Computer Science"},domProps:{value:t.area},on:{input:function(a){a.target.composing||e.$set(t,"area",a.target.value)}}})]),a("div",[a("label",[e._v("GPA")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gpa,expression:"educationItem.gpa"}],staticClass:"u-full-width",attrs:{type:"text",name:"education.gpa",placeholder:"3.6"},domProps:{value:t.gpa},on:{input:function(a){a.target.composing||e.$set(t,"gpa",a.target.value)}}})]),a("div",[a("label",[e._v("Start Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"educationItem.startDate"}],staticClass:"u-full-width",attrs:{type:"text",name:"education.startDate",placeholder:"Sep 2015"},domProps:{value:t.startDate},on:{input:function(a){a.target.composing||e.$set(t,"startDate",a.target.value)}}})]),a("div",[a("label",[e._v("End Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"educationItem.endDate"}],staticClass:"u-full-width",attrs:{type:"text",name:"education.endDate",placeholder:"Jun 2019"},domProps:{value:t.endDate},on:{input:function(a){a.target.composing||e.$set(t,"endDate",a.target.value)}}})]),a("hr")])})),a("button",{attrs:{type:"button"},on:{mouseup:e.addEducation}},[e._v("Add School")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove School")])],2)},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.education",value:"",placeholder:"Education"}})])}],C={name:"EducationForm",props:{education:{type:Array,required:!0,default:function(){return[]}}},methods:{addEducation:function(){this.education.push({institution:"",area:"",studyType:"",startDate:"",endDate:"",gpa:"",courses:[""]})}}},x=C,$=Object(m["a"])(x,b,k,!1,null,"4f5a00c0",null),P=$.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Interests & Hobbies")]),e._m(0),a("hr"),e._l(e.interests,(function(t,s){return a("div",{key:"reusme_interest_"+s},[a("div",[a("label",[e._v("Interest / Hobby")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"interest.name"}],staticClass:"u-full-width",attrs:{type:"text",name:"interest.name",placeholder:"Travelling"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}})]),a("label",[e._v("Keywords")]),e._l(t.keywords,(function(n,i){return a("div",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords[i],expression:"interest.keywords[keyIndex]"}],staticClass:"u-full-width",attrs:{type:"text",name:"skill.keywords["+i+"]",placeholder:"Hiking"},domProps:{value:t.keywords[i]},on:{input:function(a){a.target.composing||e.$set(t.keywords,i,a.target.value)}}}),a("div",[e._m(1,!0),a("button",{attrs:{type:"button"},on:{mouseup:function(t){return e.addKeyword(s)}}},[a("i",{staticClass:"material-icons"},[e._v("add")])])])])})),a("div",{staticClass:"section-buttons"},[a("button",{attrs:{type:"button"},on:{mouseup:e.addInterest}},[e._v("Add Interest")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Interest")])])],2)}))],2)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.interests",value:"",placeholder:"Interests & Hobbies"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{attrs:{type:"button",disabled:""}},[a("i",{staticClass:"material-icons"},[e._v("remove")])])}],S={name:"InterestsForm",props:{interests:{type:Array,required:!0}},methods:{addInterest:function(){this.interests.push({name:"",keywords:[]})},addKeyword:function(e){this.interests[e].keywords.push("")}}},N=S,E=Object(m["a"])(N,j,D,!1,null,"e7ac51c0",null),I=E.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Languages")]),e._m(0),a("hr"),e._l(e.languages,(function(t,s){return a("div",{key:"resume_language"+s},[a("div",[a("label",[e._v("Language")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language.language"}],staticClass:"u-full-width",attrs:{type:"text",name:"language.language",placeholder:"Nepali"},domProps:{value:t.language},on:{input:function(a){a.target.composing||e.$set(t,"language",a.target.value)}}})]),a("div",[a("label",[e._v("Fluency")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fluency,expression:"language.fluency"}],staticClass:"u-full-width",attrs:{type:"text",name:"language.fluency",placeholder:"Native Speaker"},domProps:{value:t.fluency},on:{input:function(a){a.target.composing||e.$set(t,"fluency",a.target.value)}}})]),a("div",{staticClass:"section-buttons"},[a("button",{attrs:{type:"button"},on:{mouseup:e.addLanguage}},[e._v("Add Language")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Language")])])])}))],2)},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.languages",value:"",placeholder:"Languages"}})])}],O={name:"LanguagesForm",props:{languages:{type:Array,required:!0}},methods:{addLanguage:function(){this.languages.push({name:"",level:"",keywords:[]})}}},R=O,F=Object(m["a"])(R,A,T,!1,null,"ad5b7d7c",null),L=F.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Your Projects")]),e._m(0),a("hr"),e._l(e.projects,(function(t,s){return a("div",{key:"project_"+s},[a("div",[a("label",[e._v("Project Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"project.name"}],staticClass:"u-full-width",attrs:{type:"text",name:"project.name",placeholder:"Piper Chat"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}})]),a("div",[a("label",[e._v("Project Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"project.description"}],staticClass:"u-full-width",attrs:{type:"text",name:"project.description",placeholder:"A video chat app with great picture quality."},domProps:{value:t.description},on:{input:function(a){a.target.composing||e.$set(t,"description",a.target.value)}}})]),a("div",[a("label",[e._v("Link to Project")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"project.url"}],staticClass:"u-full-width",attrs:{type:"text",name:"project.url",placeholder:"http://piperchat.com"},domProps:{value:t.url},on:{input:function(a){a.target.composing||e.$set(t,"url",a.target.value)}}})]),a("label",[e._v("Tools Used")]),e._l(t.keywords,(function(s,n){return a("div",{key:n},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords[n],expression:"project.keywords[keyIndex]"}],staticClass:"u-full-width",attrs:{type:"text",name:"project.keywords",placeholder:"Java"},domProps:{value:t.keywords[n]},on:{input:function(a){a.target.composing||e.$set(t.keywords,n,a.target.value)}}}),a("div",[a("button",[a("i",{staticClass:"material-icons",on:{mouseup:e.addKeyword}},[e._v("add")])]),e._m(1,!0)])])})),a("hr")],2)})),a("div",[a("button",{attrs:{type:"button"},on:{mouseup:e.addProject}},[e._v("Add Project")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Project")])])],2)},W=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.projects",value:"",placeholder:"Projects"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{attrs:{disabled:""}},[a("i",{staticClass:"material-icons"},[e._v("remove")])])}],V={name:"ProjectForm",props:{projects:{type:Array,required:!0}},methods:{addProject:function(){this.projects.push({name:"",description:"",url:"",keywords:[]})},addKeyword:function(e){this.projects[e].keywords.push("")}}},J=V,q=Object(m["a"])(J,H,W,!1,null,"478803bd",null),z=q.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("References")]),e._m(0),a("hr"),e._l(e.references,(function(t,s){return a("div",{key:"reference_"+s},[a("div",[a("label",[e._v("Name and Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"reference.name"}],staticClass:"u-full-width",attrs:{type:"text",name:"reference.name",placeholder:"John Doe, Google, New York, NY"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}})]),a("div",[a("label",[e._v("Reference")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reference,expression:"reference.reference"}],staticClass:"u-full-width",attrs:{rows:"10",name:"reference.reference",placeholder:"Kumar is an extremely talented engineer with a very broad range of skills and experience."},domProps:{value:t.reference},on:{input:function(a){a.target.composing||e.$set(t,"reference",a.target.value)}}})]),a("div",{staticClass:"section-buttons"},[a("button",{attrs:{type:"button"},on:{mouseup:e.addReference}},[e._v("Add Reference")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Reference")])])])}))],2)},K=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.references",value:"",placeholder:"References"}})])}],M={name:"ReferencesForm",props:{references:{type:Array,required:!0}},methods:{addReference:function(){this.references.push({name:"",reference:""})}}},Y=M,G=Object(m["a"])(Y,B,K,!1,null,"4bc88af0",null),U=G.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Your Skills")]),e._m(0),a("hr",{}),e._l(e.skills,(function(t,s){return a("div",{key:"skill_"+s},[a("div",[a("label",[e._v("Skill Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"skill.name"}],staticClass:"u-full-width",attrs:{type:"text",name:"skill.name",placeholder:"Programming Languages"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}})]),a("label",[e._v("Skill Details")]),e._l(t.keywords,(function(n,i){return a("div",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords[i],expression:"skill.keywords[keyIndex]"}],staticClass:"u-full-width",attrs:{type:"text",name:"skill.keywords["+i+"]",placeholder:"Javascript"},domProps:{value:t.keywords[i]},on:{input:function(a){a.target.composing||e.$set(t.keywords,i,a.target.value)}}}),a("div",[e._m(1,!0),a("button",{attrs:{type:"button"},on:{mouseup:function(t){return e.addKeyword(s)}}},[a("i",{staticClass:"material-icons"},[e._v("add")])])])])}))],2)})),a("hr"),a("button",{attrs:{type:"button"},on:{mouseup:e.addSkills}},[e._v("Add Skill")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Skill")])],2)},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.skills",value:"",placeholder:"Skills"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{attrs:{type:"button",disabled:""}},[a("i",{staticClass:"material-icons"},[e._v("remove")])])}],Z={name:"SkillsForm",props:{skills:{type:Array,required:!0}},methods:{addSkills:function(){this.skills.push({name:"",level:"",keywords:[]})},addKeyword:function(e){this.skills[e].keywords.push("")}}},ee=Z,te=Object(m["a"])(ee,Q,X,!1,null,"48ad5263",null),ae=te.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Volunteer Work")]),e._m(0),a("hr"),e._l(e.volunteer,(function(t,s){return a("div",{key:"volunteer_"+s},[a("div",[a("label",[e._v("Organization Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.organization,expression:"volunteerItem.organization"}],staticClass:"u-full-width",attrs:{type:"text",name:"volunteer.organization",placeholder:"Google Developers Circle"},domProps:{value:t.organization},on:{input:function(a){a.target.composing||e.$set(t,"organization",a.target.value)}}})]),a("div",[a("label",[e._v("Position")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"volunteerItem.position"}],staticClass:"u-full-width",attrs:{type:"text",name:"volunteer.position",placeholder:"Volunteer"},domProps:{value:t.position},on:{input:function(a){a.target.composing||e.$set(t,"position",a.target.value)}}})]),a("div",[a("label",[e._v("Start Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"volunteerItem.startDate"}],staticClass:"u-full-width",attrs:{type:"text",name:"volunteer.startDate",placeholder:"October 2019"},domProps:{value:t.startDate},on:{input:function(a){a.target.composing||e.$set(t,"startDate",a.target.value)}}})]),a("div",[a("label",[e._v("EndDate")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"volunteerItem.endDate"}],staticClass:"u-full-width",attrs:{type:"text",name:"volunteer.endDate",placeholder:"October 2019"},domProps:{value:t.endDate},on:{input:function(a){a.target.composing||e.$set(t,"endDate",a.target.value)}}})]),a("div",[a("label",[e._v("Summary")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.summary,expression:"volunteerItem.summary"}],staticClass:"u-full-width",attrs:{name:"volunteer.summary",placeholder:"Volunteered for an awesome event at GDG Fest."},domProps:{value:t.summary},on:{input:function(a){a.target.composing||e.$set(t,"summary",a.target.value)}}})]),a("hr")])})),a("div",{staticClass:"section-buttons"},[a("button",{attrs:{type:"button"},on:{mouseup:e.addVolunteer}},[e._v("Add Volunteer Work")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Volunteer Work")])])],2)},ne=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.volunteer",value:"",placeholder:"Volunteer Work"}})])}],ie={name:"VolunteerForm",props:{volunteer:{type:Array,required:!0}},methods:{addVolunteer:function(){this.volunteer.push({organization:"",position:"",website:"",startDate:"",endDate:"",summary:"",highlights:[]})},addHighlight:function(e){this.volunteer[e].highlights.push("")}}},re=ie,oe=Object(m["a"])(re,se,ne,!1,null,"4835fdce",null),le=oe.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h5",[e._v("Your Work Experience")]),e._m(0),a("hr"),e._l(e.work,(function(t,s){return a("div",{key:"work-"+s},[a("div",[a("label",[e._v("Company Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"workItem.company"}],staticClass:"u-full-width",attrs:{type:"text",name:"workItem.company",placeholder:"Google"},domProps:{value:t.company},on:{input:function(a){a.target.composing||e.$set(t,"company",a.target.value)}}})]),a("div",[a("label",[e._v("Job Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"workItem.position"}],staticClass:"u-full-width",attrs:{type:"text",name:"workItem.position",placeholder:"Software Engineer"},domProps:{value:t.position},on:{input:function(a){a.target.composing||e.$set(t,"position",a.target.value)}}})]),a("div",[a("label",[e._v("Job Location")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"workItem.location"}],staticClass:"u-full-width",attrs:{type:"text",name:"workItem.location",placeholder:"Mountain View, CA"},domProps:{value:t.location},on:{input:function(a){a.target.composing||e.$set(t,"location",a.target.value)}}})]),a("div",[a("label",[e._v("Start Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"workItem.startDate"}],staticClass:"u-full-width",attrs:{type:"text",name:"workItem.startDate",placeholder:"May 2017"},domProps:{value:t.startDate},on:{input:function(a){a.target.composing||e.$set(t,"startDate",a.target.value)}}})]),a("div",[a("label",[e._v("End Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"workItem.endDate"}],staticClass:"u-full-width",attrs:{type:"text",name:"workItem.endDate",placeholder:"Dec 2019 / Present"},domProps:{value:t.endDate},on:{input:function(a){a.target.composing||e.$set(t,"endDate",a.target.value)}}})]),a("label",[e._v("Job Responsibilities")]),e._l(t.highlights,(function(n,i){return a("div",{key:"work.highlights"+i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.highlights[i],expression:"workItem.highlights[highlightIndex]"}],staticClass:"u-full-width",attrs:{type:"text",name:"work.highlights["+i+"]",placeholder:"Did cool stuff at company"},domProps:{value:t.highlights[i]},on:{input:function(a){a.target.composing||e.$set(t.highlights,i,a.target.value)}}}),a("div",[e._m(1,!0),i===t.highlights.length-1?a("button",{attrs:{type:"button"},on:{mouseup:function(t){return t.preventDefault(),e.addHighlight(s)}}},[a("i",{staticClass:"material-icons"},[e._v("add")])]):e._e()])])}))],2)})),a("hr"),a("button",{attrs:{type:"button"},on:{mouseup:e.addWork}},[e._v("Add Job")]),a("button",{attrs:{disabled:"",type:"button"}},[e._v("Remove Job")])],2)},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("Section Heading")]),a("input",{staticClass:"u-full-width",attrs:{type:"text",name:"headings.work",value:"",placeholder:"Work Experience"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{attrs:{disabled:"",type:"button"}},[a("i",{staticClass:"material-icons"},[e._v("remove")])])}],de={name:"WorkForm",props:{work:{type:Array,required:!0}},methods:{addWork:function(){this.work.push({company:"",position:"",website:"",startDate:"",endDate:"",summary:"",highlights:[""]})},addHighlight:function(e){this.work[e].highlights.push("")}}},me=de,pe=Object(m["a"])(me,ue,ce,!1,null,"0c626afb",null),ve=pe.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"resume-wrapper"},[a("article",{staticClass:"paper"},[a("header",[a("div",{staticClass:"header-content"},[a("div",{staticClass:"header-text"},[a("p",[e._v(" "+e._s(e.resume.basics.name)+" ")]),a("p",{staticClass:"subtitle"},[e._v(" "+e._s(e.resume.basics.label)+" ")])])])]),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat"},[e._v(" Contact ")]),a("div",{staticClass:"content-text"},[a("ul",[a("li",[e._v("Website")]),a("li",[e._v(e._s(e.resume.basics.website))])]),a("ul",[a("li",[e._v("Email")]),a("li",[a("a",{attrs:{href:"mailto:"+e.resume.basics.email}},[e._v(" "+e._s(e.resume.basics.email))])])]),a("ul",[a("li",[e._v("Phone")]),a("li",[e._v(e._s(e.resume.basics.phone))])])])])]),e._m(0),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat big-text"},[e._v(" Work Experience "),e._l(e.resume.work,(function(t,s){return a("p",{key:"work_dates_"+s},[e._v(e._s(t.startDate)+"till "+e._s(t.endDate))])}))],2),e._l(e.resume.work,(function(t,s){return a("div",{key:"resume_work_"+s,staticClass:"content-text work-listing education-listing"},[a("p",{staticStyle:{"margin-top":"2.4em"}},[a("strong",[e._v(e._s(t.position))]),e._v(" at "),a("strong",[e._v(e._s(t.company))])]),e._l(t.highlights,(function(t,s){return a("p",{key:"work_highlight_"+s,staticClass:"highlight"},[e._v(e._s(t))])}))],2)}))],2)]),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat big-text"},[e._v(" Projects ")]),e._l(e.resume.projects,(function(t,s){return a("div",{key:"resume_project_"+s,staticClass:"content-text work-listing education-listing"},[a("p",{staticStyle:{"margin-top":"0.25em"}},[a("strong",[a("a",{attrs:{href:t.url}},[e._v(e._s(t.name))])]),e._v(" at "),a("strong",[e._v(e._s(t.description))])]),e._l(t.highlights,(function(t,s){return a("p",{key:"project_highlight_"+s,staticClass:"highlight"},[e._v(e._s(t))])}))],2)}))],2)]),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat big-text"},[e._v(" Volunteer Work "),e._l(e.resume.volunteer,(function(t,s){return a("p",{key:"volunteer_dates_"+s},[e._v(e._s(t.startDate)+"till "+e._s(t.endDate))])}))],2),e._l(e.resume.volunteer,(function(t,s){return a("div",{key:"preview_volunteer_"+s,staticClass:"content-text work-listing"},[a("p",{staticStyle:{"margin-top":"2.4em"}},[a("strong",[e._v(" "+e._s(t.position)+" ")]),e._v(" at "),a("strong",[e._v(e._s(t.organization))])]),a("p",{staticClass:"highlight"},[e._v(" "+e._s(t.summary)+" ")])])}))],2)]),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat big-text"},[e._v(" Education "),e._l(e.resume.education,(function(t,s){return a("p",{key:"education_dates_"+s},[e._v(e._s(t.startDate)+" till "+e._s(t.endDate))])}))],2),e._l(e.resume.education,(function(t,s){return a("div",{key:"preview_education_"+s,staticClass:"content-text work-listing education-listing"},[a("p",{staticClass:"heading",staticStyle:{"margin-top":"2.35em"}},[e._v(e._s(t.institution)+" "),t.location?a("span",[e._v(", "+e._s(t.location))]):e._e()]),a("p",{staticClass:"highlight"},[e._v(" "+e._s(t.studyType)+": "),a("i",[e._v(e._s(t.area)+" ("+e._s(t.gpa)+")")])])])}))],2)]),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat big-text"},[e._v(" Awards "),e._l(e.resume.awards,(function(t,s){return a("div",{key:"preview_awards_date"+s},[a("p",{staticStyle:{"margin-top":"0.25em","margin-bottom":"0.25em"}},[e._v(e._s(t.title))]),a("p",[e._v(e._s(t.date))])])}))],2),e._l(e.resume.awards,(function(t,s){return a("div",{key:"preview_awards_"+s,staticClass:"content-text work-listing"},[a("strong",[a("p",{staticClass:"heading",staticStyle:{"margin-top":"2.5em"}},[e._v(e._s(t.awarder))])]),a("p",{staticClass:"highlight"},[e._v(e._s(t.summary))])])}))],2)]),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat"},[e._v(" Skills ")]),e._l(e.resume.skills,(function(t,s){return a("div",{key:"skills_"+s,staticClass:"content-text skills-listing"},[a("p",[a("span",{staticClass:"name"},[a("strong",[e._v(" "+e._s(t.name)+" ")])]),a("span",[e._v("( "+e._s(t.level)+" ):")]),e._v(" "+e._s(t.keywords.join(","))+" ")])])}))],2)]),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat"},[e._v(" Languages ")]),a("div",{staticClass:"content-text"},e._l(e.resume.languages,(function(t,s){return a("ul",{key:"preview_languages_date"+s},[a("li",[e._v(" "+e._s(t.language))]),a("li",[e._v(" "+e._s(t.fluency))])])})),0)])]),e._m(1),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat"},[e._v(" Interests ")]),a("div",{staticClass:"content-text skills-listing"},e._l(e.resume.interests,(function(t,s){return a("p",{key:"preview_interest_"+s},[a("span",{staticClass:"name"},[a("strong",[e._v(" "+e._s(t.name)+": ")])]),e._v(" "+e._s(t.keywords.join(", "))+" ")])})),0)])]),a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat big-text"},[e._v(" References ")]),e._l(e.resume.references,(function(t,s){return a("div",{key:"preview_reference_"+s,staticClass:"content-text work-listing education-listing"},[a("p",{staticClass:"heading"},[e._v(e._s(t.name))]),a("p",{staticClass:"highlight"},[e._v(" "+e._s(t.reference)+" ")])])}))],2)])])])])},ge=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat"},[e._v(" Location ")]),a("div",{staticClass:"content-text"},[a("ul",[a("li",[e._v("Address")]),a("li",[e._v("2712 Broadway St")])]),a("ul",[a("li",[e._v("Postal Code & City")]),a("li",[e._v("CA 94115 San Francisco")])]),a("ul",[a("li",[e._v("Region")]),a("li",[e._v("California")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content profiles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"content-cat"},[e._v(" Profiles ")]),a("div",{staticClass:"content-text profiles-listing"},[a("ul",[a("li",[a("a",{attrs:{href:"",target:"_blank"}},[e._v(" Twitter ")])]),a("li",[a("a",{attrs:{href:"https://soundcloud.com/dandymusicnl",target:"_blank"}},[e._v(" SoundCloud ")])])])])])])}],he={name:"PreviewWrapper",components:{},props:{resume:{type:Object,required:!0},headings:{type:Object,required:!0}}},_e=he,we=(a("ffe7"),Object(m["a"])(_e,fe,ge,!1,null,null,null)),ye=we.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("ul",[a("li",[a("a",{class:{active:"basics"===e.active},on:{mouseup:function(t){return e.$emit("generate","basics")}}},[e._v("Profile")])]),a("li",[a("a",{class:{active:"education"===e.active},on:{mouseup:function(t){return e.$emit("generate","education")}}},[e._v("Education")])]),a("li",[a("a",{class:{active:"work"===e.active},on:{mouseup:function(t){return e.$emit("generate","work")}}},[e._v("Work")])]),a("li",[a("a",{class:{active:"volunteer"===e.active},on:{mouseup:function(t){return e.$emit("generate","volunteer")}}},[e._v("Volunteer")])]),a("li",[a("a",{class:{active:"awards"===e.active},on:{mouseup:function(t){return e.$emit("generate","awards")}}},[e._v("Awards & Certifications")])]),a("li",[a("a",{class:{active:"projects"===e.active},on:{mouseup:function(t){return e.$emit("generate","projects")}}},[e._v("Projects")])]),a("li",[a("a",{class:{active:"skills"===e.active},on:{mouseup:function(t){return e.$emit("generate","skills")}}},[e._v("Skills")])]),a("li",[a("a",{class:{active:"languages"===e.active},on:{mouseup:function(t){return e.$emit("generate","languages")}}},[e._v("Languages")])]),a("li",[a("a",{class:{active:"interests"===e.active},on:{mouseup:function(t){return e.$emit("generate","interests")}}},[e._v("Interests")])]),a("li",[a("a",{class:{active:"references"===e.active},on:{mouseup:function(t){return e.$emit("generate","references")}}},[e._v("References")])]),a("li",[a("a",{class:{active:"templates"===e.active},on:{mouseup:function(t){return e.$emit("generate","templates")}}},[e._v("Templates")])])]),a("button",{staticClass:"button-primary",staticStyle:{"background-color":"#f6875b","border-color":"#f6875b"},attrs:{type:"submit"}},[e._v("Create")])])},ke=[],Ce={name:"Sidebar",props:{active:{type:String}}},xe=Ce,$e=(a("5bf9"),Object(m["a"])(xe,be,ke,!1,null,null,null)),Pe=$e.exports,je={name:"ResumeBuilder",components:{PreviewWrapper:ye,ProjectForm:z,ReferencesForm:U,InterestsForm:I,LanguagesForm:L,VolunteerForm:le,AwardsForm:v,SkillsForm:ae,WorkForm:ve,EducationForm:P,BasicProfileForm:y,Sidebar:Pe},data:function(){return{resume:{basics:{name:"John Doe",label:"Programmer",picture:"",email:"john@gmail.com",phone:"(912) 555-4321",website:"http://johndoe.com",summary:"A summary of John Doe...",location:{address:"2712 Broadway St",postalCode:"",city:"",countryCode:"",region:""},profiles:[{network:"Twitter",username:"john",url:"http://twitter.com/john"}]},work:[{company:"Company",position:"President",website:"http://company.com",startDate:"2013-01-01",endDate:"2014-01-01",summary:"Description...",highlights:["Started the company"]}],volunteer:[{organization:"Organization",position:"Volunteer",website:"http://organization.com/",startDate:"2012-01-01",endDate:"2013-01-01",summary:"Description...",highlights:["Awarded 'Volunteer of the Month'"]}],education:[{institution:"University",area:"Software Development",studyType:"Bachelor",startDate:"2011-01-01",endDate:"2013-01-01",gpa:"4.0",courses:["DB1101 - Basic SQL"]}],awards:[{title:"Award",date:"2014-11-01",awarder:"Company",summary:"There is no spoon."}],projects:[{name:"Project",description:"Description...",url:"http://piperchat.com",keywords:[]}],skills:[{name:"Web Development",level:"Master",keywords:["HTML","CSS","Javascript"]}],languages:[{language:"English",fluency:"Native speaker"}],interests:[{name:"Wildlife",keywords:["Ferrets","Unicorns"]}],references:[{name:"Jane Doe",reference:"Reference..."}]},categories:["basics","work","volunteer","education","awards","projects","skills","language","interests","references"],activeTab:"basics",headings:{work:"Work Experience",volunteer:"Volunteer Work ",education:"Education",awards:"Awards & Certifications ",projects:"Projects",skills:"Skills",language:"Languages",interests:"Interests",references:"References"}}},methods:{handleFormChange:function(e){console.log(e),this.activeTab=e}}},De=je,Se=(a("c5d3"),Object(m["a"])(De,r,o,!1,null,null,null)),Ne=Se.exports,Ee={name:"app",components:{ResumeBuilder:Ne}},Ie=Ee,Ae=(a("034f"),Object(m["a"])(Ie,n,i,!1,null,null,null)),Te=Ae.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(Te)}}).$mount("#app")},"5bf9":function(e,t,a){"use strict";var s=a("be21"),n=a.n(s);n.a},"85ec":function(e,t,a){},be21:function(e,t,a){},c033:function(e,t,a){},c5d3:function(e,t,a){"use strict";var s=a("c033"),n=a.n(s);n.a},ffe7:function(e,t,a){"use strict";var s=a("35a5"),n=a.n(s);n.a}});
//# sourceMappingURL=app.92b03909.js.map