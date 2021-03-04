(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports={form:"form_form__2AAak",input:"form_input__1yhFO"}},22:function(e,t,n){},23:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=(n(22),n(11)),u=n(12),s=n(15),l=n(14),m=n(5),b=n(13),d=n.n(b),j={ADD:"contact/add",DELETE:"contact/delete",CHANGE_FILTER:"contact/changeFilter",CHECK_UNIGUE:"contact/chekUnigue"},h=n(52),p=n(51),f=(n(23),n(1)),O=Object(m.b)((function(e){var t=e.filter,n=e.contacts,a=t.toLowerCase();return{persons:n.filter((function(e){return e.name.toLowerCase().includes(a)}))}}),(function(e){return{onDelete:function(t){return e({type:j.DELETE,payload:t})}}}))((function(e){var t=e.persons,n=e.onDelete;return Object(f.jsx)(h.a,{component:"ul",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(f.jsx)(p.a,{timeout:250,classNames:"contactItem",children:Object(f.jsxs)("li",{className:"contactItem",id:t,children:[Object(f.jsxs)("p",{children:[a," ",r]}),Object(f.jsx)("button",{type:"button",onClick:function(){n(t)},children:"Delete"})]})},t)}))})})),v=Object(m.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e((n=t.target.value,{type:j.CHANGE_FILTER,payload:n}));var n}}}))((function(e){var t=e.value,n=e.onChange;return Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,placeholder:"find name"})]})})),x=n(27),g=n(17),y=n.n(g),C=n(16),E=(n(24),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(x.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c=e.props.onAdd;e.validateForm()&&(c({id:d.a.generate(),name:a,number:r}),e.reset())},e.validateForm=function(){var t=e.state,n=t.name,a=t.number;return n&&a?!e.props.contacts.some((function(e){return e.name===n}))||C.b.error("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c"):(alert("filed is empti"),!1)},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(f.jsxs)("form",{onSubmit:this.handleFormSubmit,className:y.a.form,children:[Object(f.jsxs)("label",{className:y.a.input,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",value:t,placeholder:"enter name",onChange:this.handleChange})]}),Object(f.jsxs)("label",{className:y.a.input,children:["Number",Object(f.jsx)("input",{type:"text",name:"number",value:n,placeholder:"enter number",onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component)),D=Object(m.b)((function(e){return{contacts:e.contacts}}),(function(e){return{onAdd:function(t){return e(function(e){var t=e.name,n=e.number;return{type:j.ADD,payload:{id:d.a.generate(),name:t,number:n}}}(t))}}}))(E),N=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(p.a,{in:!0,appear:!0,timeout:500,classNames:"title",unmountOnExit:!0,children:Object(f.jsx)("h1",{className:"title",children:"Phonebook"})}),Object(f.jsx)(D,{}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{}),Object(f.jsx)(O,{}),Object(f.jsx)(C.a,{autoClose:3e3,position:"top-left"})]})})}}]),n}(a.Component),A=n(6),F=n(28),k=n(29),_=Object(A.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j.ADD:return[].concat(Object(k.a)(e),[a]);case j.DELETE:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j.CHANGE_FILTER:return a;default:return e}}}),w=Object(A.createStore)(_,Object(F.composeWithDevTools)());console.log(w.getState()),o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(m.a,{store:w,children:Object(f.jsx)(N,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.ac9d51cf.chunk.js.map