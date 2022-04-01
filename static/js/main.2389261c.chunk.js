(this.webpackJsonpfpb_search_page=this.webpackJsonpfpb_search_page||[]).push([[0],{28:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),c=r(20),a=r.n(c),s=(r(28),r(21)),i=r(5),l=r(4),h=r(2),b=r(11),j=r.n(b),u=r(22),d=r.n(u),g=r(23),m=r(0);var f=function(e){var t,r=e.changeParameter,o=e.data,c=Object(n.useState)([]),a=Object(h.a)(c,2),s=a[0],i=a[1],l=Object(n.useState)(""),b=Object(h.a)(l,2),j=b[0],u=b[1],d=Object(n.useState)(!1),g=Object(h.a)(d,2),f=g[0],O=g[1],p=function(e){r("lang.code",e.target.value),u(e.target.value)};Object(n.useEffect)((function(){if(o){var e=[{code:"en",name:"English"}];o.children[0].children.forEach((function(t){"string"===typeof t.language.name&&t.language.name.length>0&&"en"!==t.language.code&&e.push(t.language)})),e.sort((function(e,t){return e.name>t.name})),i(e)}}),[o]),t=s&&s.map((function(e){return function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"radio",className:"lang",value:e.code,onChange:p,checked:e.code==j},e.code),e.name]})})}(e)}));var x=Object(m.jsxs)("form",{class:"filters",children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"radio",className:"sect-select",value:"",onChange:p,checked:""==j}),"All Languages"]}),t]});return Object(m.jsxs)("div",{className:"langFilters",children:[Object(m.jsxs)("div",{className:"filterHeader",children:[Object(m.jsx)("h3",{children:"Filter by Language"}),Object(m.jsx)("button",{onClick:function(){return O(!f)},children:f?"-":"+"})]}),f?x:""]})};var O=function(e){return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault()},name:"searchBar",className:"searchbar",children:Object(m.jsx)("input",{autoComplete:"off",type:"text",name:"searchTerm",placeholder:"Search Book Name",className:"searchterm",onChange:function(t){e.changeParameter("title",t.target.value)}})})};var p=function(e){var t=e.data;return Object(m.jsx)("li",{class:"result",children:Object(m.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:["(",t.lang.code,") ",t.title,t.author?" by ".concat(t.author):""]})})};var x=function(){return Object(m.jsxs)("section",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("h1",{id:"list-of-free-learning-resources-in-many-languages",children:"List of Free Learning Resources In Many Languages"}),Object(m.jsx)("div",{align:"center"}),Object(m.jsx)("h2",{id:"intro",children:"Intro"}),Object(m.jsxs)("p",{children:["This list was originally a clone of"," ",Object(m.jsx)("a",{href:"https://web.archive.org/web/20140606191453/http://stackoverflow.com/questions/194812/list-of-freely-available-programming-books/392926",children:"StackOverflow - List of Freely Available Programming Books"})," ","with contributions from Karan Bhangui and George Stocker."]}),Object(m.jsxs)("p",{children:["The list was moved to GitHub by Victor Felder for collaborative updating and maintenance. It has grown to become one of ",Object(m.jsx)("a",{href:"https://octoverse.github.com/",children:"GitHub\u2019s most popular repositories"}),", with 221,000+ stars, 6,900+ commits, 1,900+ contributors, and 47,100+ forks."]}),Object(m.jsxs)("p",{children:["The ",Object(m.jsx)("a",{href:"https://ebookfoundation.org",children:"Free Ebook Foundation"})," now administers the repo, a not-for-profit organization devoted to promoting the creation, distribution, archiving, and sustainability of free ebooks."," ",Object(m.jsx)("a",{href:"https://ebookfoundation.org/contributions.html",children:"Donations"})," to the Free Ebook Foundation are tax-deductible in the US."]}),Object(m.jsx)("h2",{id:"how-to-contribute",children:"How To Contribute"}),Object(m.jsxs)("p",{children:["Please read ",Object(m.jsx)("a",{href:"/free-programming-books/docs/CONTRIBUTING.html",children:"CONTRIBUTING"}),". If you\u2019re new to GitHub,"," ",Object(m.jsx)("a",{href:"/free-programming-books/docs/HOWTO.html",children:"welcome"}),"! Remember to abide by our"," ",Object(m.jsx)("a",{href:"/free-programming-books/docs/CODE_OF_CONDUCT.html",children:"Code of Conduct"})," too. (",Object(m.jsx)("a",{href:"/free-programming-books/docs/#translations",children:"translations"})," also available)"]}),Object(m.jsx)("h2",{id:"how-to-share",children:"How to Share"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"http://twitter.com/intent/tweet?text=https://github.com/EbookFoundation/free-programming-books%0AFree%20Programming%20Books",children:"Share on Twitter"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.facebook.com/share.php?u=https%3A%2F%2Fgithub.com%2FEbookFoundation%2Ffree-programming-books&p%5Bimages%5D%5B0%5D=&p%5Btitle%5D=Free%20Programming%20Books&p%5Bsummary%5D=",children:"Share on Facebook"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/EbookFoundation/free-programming-books&title=Free%20Programming%20Books&summary=&source=",children:"Share on LinkedIn"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://t.me/share/url?url=https://github.com/EbookFoundation/free-programming-books",children:"Share on Telegram"})})]}),Object(m.jsx)("h2",{id:"translations",children:"Translations"}),Object(m.jsx)("p",{children:"Volunteers have translated many of our Contributing, How-to, and Code of Conduct documents into languages covered by our lists."}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["English",Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/free-programming-books/docs/CODE_OF_CONDUCT.html",children:"Code of Conduct"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/free-programming-books/docs/CONTRIBUTING.html",children:"Contributing"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/free-programming-books/docs/HOWTO.html",children:"How-to"})})]})]}),Object(m.jsxs)("li",{children:["\u2026"," ",Object(m.jsx)("em",{children:Object(m.jsx)("a",{href:"/free-programming-books/docs/#translations",children:"More languages"})})," ","\u2026"]})]}),Object(m.jsxs)("p",{children:["You might notice that there are"," ",Object(m.jsx)("a",{href:"/free-programming-books/docs/#translations",children:"some missing translations here"})," - perhaps you would like to help out by"," ",Object(m.jsx)("a",{href:"/free-programming-books/docs/CONTRIBUTING.html#help-out-by-contributing-a-translation",children:"contributing a translation"}),"?"]}),Object(m.jsx)("h2",{id:"license",children:"License"}),Object(m.jsxs)("p",{children:["Each file included in this repository is licensed under the"," ",Object(m.jsx)("a",{href:"/free-programming-books/LICENSE",children:"CC BY License"}),"."]})]})},k=(r.p,r.p,null);function v(e){var t=[],r=[];return e.children[0].children.forEach((function(e){e.sections.forEach((function(n){r.includes(n.section)||r.push(n.section),n.entries.forEach((function(r){t.push({author:r.author,title:r.title,url:r.url,lang:e.language,section:n.section})})),n.subsections.forEach((function(r){r.entries.forEach((function(o){t.push({author:o.author,title:o.title,url:o.url,lang:e.language,section:n.section,subsection:r.section})}))}))}))})),{arr:t,sections:r}}var w=function(){var e=Object(n.useState)(void 0),t=Object(h.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)([]),a=Object(h.a)(c,2),b=a[0],u=a[1],w=Object(n.useState)([]),F=Object(h.a)(w,2),E=(F[0],F[1]),C=Object(n.useState)(!0),y=Object(h.a)(C,2),S=y[0],T=y[1],N=Object(n.useState)({title:""}),B=Object(h.a)(N,2),I=B[0],L=B[1],H=Object(n.useState)([]),_=Object(h.a)(H,2),P=_[0],D=_[1],G=Object(n.useState)([]),A=Object(h.a)(G,2),R=(A[0],A[1],Object(n.useState)(!0)),U=Object(h.a)(R,2),M=(U[0],U[1],Object(n.useState)("")),V=Object(h.a)(M,2),J=V[0],W=(V[1],null),Y=function(e,t){L(Object(l.a)(Object(l.a)({},I),{},Object(i.a)({},e,t)))};return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(j.a.mark((function e(){var t,r,n,c,a,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,d.a.get("https://raw.githubusercontent.com/FreeEbookFoundationBot/free-programming-books-json/main/fpb.json");case 4:t=e.sent,o(t.data),r=v(t.data),n=r.arr,c=r.sections,console.log(n),u(n),E(c),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(0),o(k),a=v(k),s=a.arr,i=a.sections,E(i),u(s);case 18:T(!1);case 19:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){if(b){for(var e=new g.a(b,{useExtendedSearch:!0,findAllMatches:!0,shouldSort:!0,includeScore:!0,threshold:.2,keys:["title","lang.code","section"]}),t=[],r=0,n=Object.entries(I);r<n.length;r++){var o=Object(h.a)(n[r],2),c=o[0],a=o[1];null!==a&&""!==a&&("lang.code"!==c?"section"!==c?t.push(Object(i.a)({},c,a)):t.push({section:"^".concat(a)}):t.push({"lang.code":"^".concat(a)}))}var s=e.search({$and:t});s=s.slice(0,40);var l=[];s.forEach((function(e){if(!l.find((function(t){return t.item.section===e.item.section&&t.item.lang.code===e.item.lang.code}))&&e.item.lang.code){var t=e.item.lang.code,r=e.item.section;"en"===t&&(t=e.item.lang.isSubject?"subjects":"langs");var n=e.item.section;if(n.includes("<a")){var o=n.match(/"(.*?)"/)[0];r=n=o?o.replaceAll(/\"/g,""):"FAIL"}n=n.toLowerCase().replaceAll(" ","-").replaceAll(/\(|\)|\&|\//g,"");var c={item:{author:"",lang:e.item.lang,section:e.item.section,title:"List of all ".concat(r," resources in ").concat(e.item.lang.name),url:"https://ebookfoundation.github.io/free-programming-books/books/free-programming-books-".concat(t,".html#").concat(n)}};l.push(c)}})),s=(l=l.slice(0,5)).concat(s),D(s),console.log(s)}}),[I,b]),S?Object(m.jsx)("h1",{children:"Loading..."}):J?Object(m.jsxs)("h1",{children:["Error: ",J]}):(I.title&&0!==P.length&&(W=P&&P.map((function(e){return Object(m.jsx)(p,{data:e.item})}))),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{children:Object(m.jsx)("a",{href:"https://ebookfoundation.github.io/free-programming-books/",target:"_blank",rel:"noreferrer",children:"free-programming-books"})}),Object(m.jsxs)("p",{children:[Object(m.jsx)("img",{class:"emoji",title:":books:",alt:":books:",src:"https://github.githubassets.com/images/icons/emoji/unicode/1f4da.png",height:"20",width:"20"})," ","Freely available programming books"]}),Object(m.jsx)("p",{class:"view",children:Object(m.jsxs)("a",{href:"https://github.com/EbookFoundation/free-programming-books",target:"_blank",rel:"noreferrer",children:["View the Project on GitHub ",Object(m.jsx)("small",{children:"EbookFoundation/free-programming-books"})]})}),Object(m.jsxs)("p",{children:["Does a link not work?",Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://github.com/EbookFoundation/free-programming-books/issues/",target:"_blank",rel:"noreferrer",children:"Report an error on GitHub"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{changeParameter:Y}),Object(m.jsx)(f,{changeParameter:Y,data:r})]})]}),Object(m.jsx)("section",{className:"search-results",children:W?Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Search Results"}),Object(m.jsx)("ul",{children:W})]}):I.title?Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"No results found."})]}):Object(m.jsx)(x,{})}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("p",{children:["This project is maintained by"," ",Object(m.jsx)("a",{href:"https://github.com/EbookFoundation",target:"_blank",rel:"noreferrer",children:"EbookFoundation"})]}),Object(m.jsx)("p",{children:Object(m.jsxs)("small",{children:["Hosted on GitHub Pages \u2014 Theme by"," ",Object(m.jsx)("a",{href:"https://github.com/orderedlist",target:"_blank",rel:"noreferrer",children:"orderedlist"})]})})]})]}))},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,50)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),c(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),F()}},[[49,1,2]]]);
//# sourceMappingURL=main.2389261c.chunk.js.map