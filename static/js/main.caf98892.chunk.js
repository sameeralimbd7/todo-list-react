(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{15:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var n=c(6),o=c.n(n),a=(c(15),c(7)),i=c.n(a),s=c(10),r=c(5),d=c(1),l=c(8),u=c.n(l),b=c(0),j=function(t){var e=t.title,c=t.handleDelete,n=t.handleComplete,o=t.id,a=t.completed,i=u.a;return Object(b.jsxs)("div",{className:i.todo,children:[Object(b.jsx)("h3",{className:"".concat(i.todotitle," ").concat(a?i.line:""),children:e}),Object(b.jsxs)("div",{className:"btngroup",children:[Object(b.jsx)("button",{onClick:function(){return n(o)},className:i.btn,children:Object(b.jsx)("i",{className:"fas ".concat(a?"fa-times":"fa-check")})}),Object(b.jsx)("button",{onClick:function(){return c(o)},className:i.btn,children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]})]})},f=c(9),m=c.n(f),_=function(){var t=m.a,e=Object(d.useState)(""),c=Object(r.a)(e,2),n=c[0],o=c[1],a=Object(d.useState)([]),i=Object(r.a)(a,2),l=i[0],u=i[1];Object(d.useEffect)((function(){var t=localStorage.getItem("todos");t&&u(JSON.parse(t))}),[]),Object(d.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(l))}),[l]);var f=function(t){u((function(e){return e.filter((function(e){return e.id!==t}))}))},_=function(t){u((function(e){return e.filter((function(e){return e.id===t&&(e.completed=!e.completed),e}))}))};return Object(b.jsxs)("div",{className:t.card,children:[Object(b.jsx)("div",{className:t.cardheader,children:Object(b.jsx)("h1",{className:t.cardtitle,children:"React Todo List"})}),Object(b.jsx)("div",{className:t.cardbody,children:l.map((function(t,e){return Object(b.jsx)(j,{id:t.id,title:t.title,completed:t.completed,handleDelete:f,handleComplete:_},e)}))}),Object(b.jsx)("div",{className:t.cardfooter,children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n.trim()&&u((function(t){return[{title:n,completed:!1,id:(new Date).getTime()}].concat(Object(s.a)(t))})),o("")},children:[Object(b.jsx)("input",{className:t.input,type:"text",placeholder:"Add Todos",value:n,onChange:function(t){return o(t.target.value)}}),Object(b.jsx)("button",{className:t.btn,type:"submit",children:Object(b.jsx)("i",{className:"fas fa-plus"})})]})})]})},p=function(){var t=i.a;return Object(b.jsx)("div",{className:t.main,children:Object(b.jsx)(_,{})})};o.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))},7:function(t,e,c){t.exports={main:"app_main__24PRb"}},8:function(t,e,c){t.exports={todo:"todo_todo__2P6Ng",todotitle:"todo_todotitle__15Kc7",line:"todo_line__1kWBk",btn:"todo_btn__9p2XX"}},9:function(t,e,c){t.exports={card:"todolist_card__1lgGh",cardheader:"todolist_cardheader__3be5U",cardtitle:"todolist_cardtitle__aHkIL",cardbody:"todolist_cardbody__1pJyD",cardfooter:"todolist_cardfooter__3YDDh",input:"todolist_input__CWWcw",btn:"todolist_btn__Ge1EB"}}},[[17,1,2]]]);
//# sourceMappingURL=main.caf98892.chunk.js.map