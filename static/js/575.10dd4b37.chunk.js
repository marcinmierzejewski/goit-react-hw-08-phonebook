"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[575],{5202:function(e,n,t){t.d(n,{$:function(){return s}});var a="Section_sectionTitle__V-Xfr",r=t(184),s=function(e){var n=e.title,t=e.children,s=a;return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:s,children:n}),t]})}},3575:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var a=t(2791),r=t(9434),s=t(5861),c=t(7757),i=t.n(c),l="PhoneBook_form__CCnvu",o="PhoneBook_label__pbb2j",u="PhoneBook_input__EyWAv",d="PhoneBook_addBtn__dlq9Q",m=function(e){return e.contacts.loading},h=function(e){return e.contacts.items},_=t(3634),f=t(184),p=function(){var e=(0,r.I0)(),n=(0,r.v9)(h),t=function(){var t=(0,s.Z)(i().mark((function t(a){var r,s,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),r=a.target,s=r.name.value,c=r.number.value,n.find((function(e){return e.name===s}))?alert("".concat(s," is already in contacts")):(e((0,_.uK)({name:s,number:c})),r.reset());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=l,c=o,m=u,p=d;return(0,f.jsxs)("form",{className:a,onSubmit:t,children:[(0,f.jsxs)("label",{className:c,children:["Name",(0,f.jsx)("input",{className:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{className:c,children:["Number",(0,f.jsx)("input",{className:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},x="ContactItem_contactItem__n7QxZ",v="ContactItem_contactName__qXmQz",j="ContactItem_contactWrapper__fPhK8",b="ContactItem_btn__bN5Kx",N=function(e){var n=e.id,t=e.name,a=e.number,s=x,c=v,i=j,l=b,o=(0,r.I0)();return(0,f.jsx)("li",{className:s,children:(0,f.jsxs)("div",{className:i,children:[(0,f.jsxs)("div",{className:i,children:[(0,f.jsxs)("span",{className:c,children:[t,": ",a]})," ",(0,f.jsx)("a",{href:"tel:".concat(a),children:(0,f.jsx)("button",{className:l,children:"Call"})})]}),(0,f.jsx)("button",{type:"button",className:l,onClick:function(){o((0,_.GK)(n))},children:"Delete"})]})})},C=t(854),k="ContactsList_contactsList__6gviw",w=function(){var e=(0,r.v9)(h),n=(0,r.v9)(m),t=(0,r.v9)((function(e){return e.filter})),a=e.filter((function(e){return e.name.toLowerCase().includes(t)})).sort((function(e,n){return e.name.localeCompare(n.name)})),s=k;return(0,f.jsxs)("div",{children:[n&&(0,f.jsx)(C.a,{}),(null===e||void 0===e?void 0:e.length)>0?(0,f.jsx)("ul",{className:s,children:a.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,f.jsx)(N,{id:n,name:t,number:a},n)}))}):(0,f.jsx)("p",{className:s,children:" No contacts available "})]})},y=t(6895),g="SearchFilter_search__a2CEK",I="SearchFilter_label__0725x",A="SearchFilter_input__wMQwj",P=function(){var e=(0,r.I0)(),n=g,t=I,a=A;return(0,f.jsx)("div",{className:n,children:(0,f.jsxs)("label",{className:t,children:["Find contacts by name",(0,f.jsx)("input",{className:a,type:"text",onChange:function(n){n.preventDefault();var t=n.target.value.toLowerCase();e((0,y.x)(t))}})]})})},B=t(5202),F="Contacts_wrapper__s7EJR";function z(){var e=F,n=(0,r.I0)(),t=(0,r.v9)(m);return(0,a.useEffect)((function(){n((0,_.yF)())}),[n]),(0,f.jsxs)("div",{className:e,children:[(0,f.jsx)(B.$,{title:"Phonebook",children:(0,f.jsx)(p,{})}),(0,f.jsxs)(B.$,{title:"Contacts",children:[(0,f.jsx)(P,{}),t&&(0,f.jsx)("p",{children:"'Loading'"}),(0,f.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=575.10dd4b37.chunk.js.map