(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__29mOB",checkbox:"TodoItem_checkbox__15sO4",textInput:"TodoItem_textInput__35uga"}},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(26),a=n.n(i),s=n(8),r=n(22),l=n(11),u=n(9),d=n(3),j=n(17),b=n.n(j),h=n(16),p=n(2),x=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),o=n[0],i=n[1],a=e.todo,s=a.completed,r=a.id,l=a.title,d={},j={};return o?d.display="none":j.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(p.jsxs)("li",{className:b.a.item,children:[Object(p.jsxs)("div",{onDoubleClick:function(){i(!0)},style:d,children:[Object(p.jsx)("input",{type:"checkbox",className:b.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(p.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(p.jsx)(h.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(p.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(p.jsx)("input",{type:"text",style:j,className:b.a.textInput,value:l,onChange:function(t){e.setUpdate(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},O=function(e){return Object(p.jsx)("ul",{children:e.todos.map((function(t){return Object(p.jsx)(x,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},m=function(){return Object(p.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(p.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},f=n(15),g=function(e){var t=Object(c.useState)({title:""}),n=Object(u.a)(t,2),o=n[0],i=n[1];return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(f.a)({},e.target.name,e.target.value)))}}),Object(p.jsx)("button",{className:"input-submit",children:Object(p.jsx)(h.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},y=n(27),v=n(28),w=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(p.jsxs)("nav",{className:"navBar",children:[Object(p.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:n?Object(p.jsx)(y.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(p.jsx)(v.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(p.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:e.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:e.text})},e.id)}))})]})},N=function(){var e=Object(d.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Oluwatimilehin Idowu, a self-taught web developer. He is opened to freelance Gig. So go ahead and connect with Oluwatimilehin on Twitter @timmy_id."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(p.jsxs)("div",{className:"main__content",children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("p",{children:c})]})},k=function(){var e=Object(d.g)(),t=e.url,n=e.path;return Object(p.jsxs)("div",{className:"about__content",children:[Object(p.jsxs)("ul",{className:"about__list",children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(p.jsx)(d.a,{path:"".concat(n,"/:slug"),children:Object(p.jsx)(N,{})})]})},S=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"No match for this page"})})},_=n(30),T=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsx)(m,{}),Object(p.jsx)(g,{addTodoProps:function(e){var t={id:Object(_.v4)(),title:e,completed:!1};o([].concat(Object(r.a)(n),[t]))}}),Object(p.jsx)(O,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(p.jsx)(d.a,{path:"/about",children:Object(p.jsx)(k,{})}),Object(p.jsx)(d.a,{path:"*",children:Object(p.jsx)(S,{})})]})]})};n(43);a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsx)(T,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9bf4f45b.chunk.js.map