(this.webpackJsonpfpb_search_page=this.webpackJsonpfpb_search_page||[]).push([[0],{28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),o=(n(28),n(21)),i=n(5),u=n(4),l=n(2),j=n(11),h=n.n(j),b=n(0);var d=function(e){var t,n=e.changeParameter,a=e.data,r=Object(c.useState)([]),s=Object(l.a)(r,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){if(a){var e=[];a.children[0].children.forEach((function(t){"string"===typeof t.language.name&&t.language.name.length>0&&e.push(t.language)})),e.sort((function(e,t){return e.name>t.name})),i(e)}}),[a]),t=o&&o.map((function(e){return function(e){return Object(b.jsx)("option",{class:"lang",value:e.code,children:e.name},e.code)}(e)})),Object(b.jsxs)("select",{onChange:function(e){n("lang.code",e.target.value)},name:"languages",id:"languages",children:[Object(b.jsx)("option",{value:"",children:"All Languages"},"allLangs"),t]})};var f=function(e){return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault()},name:"searchBar",children:Object(b.jsx)("input",{autoComplete:"off",type:"text",name:"searchTerm",placeholder:"Enter Book Name",onChange:function(t){e.changeParameter("title",t.target.value)}})})};var g=function(e){var t=e.data;return Object(b.jsx)("li",{class:"result",children:Object(b.jsxs)("a",{href:t.url,target:"_blank",children:["(",t.lang.code,") ",t.title," by ",t.author?t.author:"Unknown Author"]})})};var O=n(22),p=n.n(O),m=n(23),x=(n.p,n.p,null);function v(e){var t=[],n=[];return e.children[0].children.forEach((function(e){e.sections.forEach((function(c){n.includes(c.section)||n.push(c.section),c.entries.forEach((function(n){t.push({author:n.author,title:n.title,url:n.url,lang:e.language,section:c.section})})),c.subsections.forEach((function(n){n.entries.forEach((function(a){t.push({author:a.author,title:a.title,url:a.url,lang:e.language,section:c.section,subsection:n.section})}))}))}))})),{arr:t,sections:n}}var k=function(){var e=Object(c.useState)(void 0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),j=s[0],O=s[1],k=Object(c.useState)([]),E=Object(l.a)(k,2),S=(E[0],E[1]),F=Object(c.useState)(!0),P=Object(l.a)(F,2),w=P[0],y=P[1],B=Object(c.useState)({title:""}),C=Object(l.a)(B,2),_=C[0],L=C[1],N=Object(c.useState)([]),T=Object(l.a)(N,2),A=T[0],R=T[1],D=Object(c.useState)([]),G=Object(l.a)(D,2),H=G[0],I=G[1],J=Object(c.useState)(!0),M=Object(l.a)(J,2),U=(M[0],M[1],Object(c.useState)("")),V=Object(l.a)(U,2),$=V[0],q=(V[1],null),z=null,K=function(e,t){L(Object(u.a)(Object(u.a)({},_),{},Object(i.a)({},e,t)))};return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(h.a.mark((function e(){var t,n,c,r,s,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,p.a.get("https://raw.githubusercontent.com/FreeEbookFoundationBot/free-programming-books-json/main/fpb.json");case 4:t=e.sent,a(t.data),n=v(t.data),c=n.arr,r=n.sections,O(c),S(r),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(0),a(x),s=v(x),o=s.arr,i=s.sections,S(i),O(o);case 17:y(!1);case 18:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){if(j){for(var e=new m.a(j,{useExtendedSearch:!0,findAllMatches:!0,shouldSort:!0,includeScore:!0,threshold:.2,keys:["title","lang.code"]}),t=[],n=0,c=Object.entries(_);n<c.length;n++){var a=Object(l.a)(c[n],2),r=a[0],s=a[1];null!==s&&""!==s&&("lang.code"!==r?t.push(Object(i.a)({},r,s)):t.push({"lang.code":"^".concat(s)}))}var o=e.search({$and:t});o=o.slice(0,40),R(o);var u=[];o.forEach((function(e){var t=e.item.section;u.includes(t)||u.push(t)})),I(u)}}),[_,j]),w?Object(b.jsx)("h1",{children:"Loading..."}):$?Object(b.jsxs)("h1",{children:["Error: ",$]}):(_.title&&0!==A.length&&(q=A&&A.map((function(e){return Object(b.jsx)(g,{data:e.item})})),z=H&&H.map((function(e){return Object(b.jsx)("li",{children:e})}))),Object(b.jsxs)("div",{className:"frontPage",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{children:"Free Programming Books"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{changeParameter:K}),Object(b.jsx)(d,{changeParameter:K,data:n})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("a",{href:"https://github.com/EbookFoundation/free-programming-books",children:["View the Project on GitHub",Object(b.jsx)("br",{}),Object(b.jsx)("small",{children:"EbookFoundation/free-programming-books"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://github.com/EbookFoundation/free-programming-books/issues/",target:"_blank",children:"Report an error on GitHub"}),Object(b.jsx)("h2",{children:"Section Results"}),z&&Object(b.jsx)("p",{children:"This feature is not complete!"}),Object(b.jsx)("div",{className:"section-results",children:z})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Top Results"}),Object(b.jsx)("ul",{className:"search-results",children:q})]})]}))},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),E()}},[[49,1,2]]]);
//# sourceMappingURL=main.21cb9152.chunk.js.map