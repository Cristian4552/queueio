(this["webpackJsonpprojet-final"]=this["webpackJsonpprojet-final"]||[]).push([[0],{15:function(e,t,n){},28:function(e,t,n){},35:function(e){e.exports=JSON.parse("{}")},36:function(e){e.exports=JSON.parse("{}")},37:function(e){e.exports=JSON.parse("{}")},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(21),o=n.n(s),i=(n(28),n(15),n(2)),l=n.n(i),u=n(4),m=n(3),j=n(5),b=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(c.jsx)(j.b,{to:"/",className:"navbar-brand",children:"queue.io"}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:Object(c.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(c.jsx)("li",{className:"nav-item active",children:Object(c.jsxs)(j.b,{to:"/",className:"nav-link",children:["Accueil - Commerces ",Object(c.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(c.jsx)("li",{className:"nav-item active",children:Object(c.jsx)(j.b,{to:"/login",className:"nav-link",children:"Se connecter"})})]})})]})})})},d=n.p+"static/media/logo.6ce24c58.svg",p=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"card bg-light mb-3",id:"carte-commerce",children:[Object(c.jsxs)("div",{className:"card-header",children:[Object(c.jsx)("img",{src:d,alt:"Logo",width:"100px"}),e.nom]}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:"Informations utiles"}),Object(c.jsxs)("p",{className:"card-text",children:["Addresse: ",e.addresse]}),Object(c.jsxs)("p",{className:"card-text",children:["Nombre de personnes en file: ",e.nbPersonnesEnFile," personnes."]}),Object(c.jsxs)("p",{className:"card-text",children:["Temps d'attente approximatif: ",e.tempsAttenteApprox," minutes."]}),Object(c.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){return e.onClickHandler(e.id)},children:"Prendre un num\xe9ro"})]})]})})};n(35),n(36);var h=function(e){var t=Object(r.useState)(""),n=Object(m.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)("clear"),i=Object(m.a)(o,2),j=i[0],d=(i[1],Object(r.useState)([])),h=Object(m.a)(d,2),O=h[0],x=h[1],f=Object(r.useState)([]),v=Object(m.a)(f,2),g=(v[0],v[1],Object(r.useState)([])),y=Object(m.a)(g,2),N=y[0],_=y[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return n.apply(this,arguments)}function n(){return(n=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,x(n),k(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var k=function(e){_(e)};Object(r.useEffect)((function(){var e=O.filter((function(e){return e.nom.toLowerCase().includes(a.toLowerCase())}));"clear"!==j&&(e=e.filter((function(e){return e.filtre_id===j}))),_(e)}),[a,j]);var w=function(t){var n=t;console.log(n),e.history.push({pathname:"/info-client",state:n}),console.log("dans le click handler")},C=function(e){var t=localStorage.getItem("clients");return t?(t=JSON.parse(t).filter((function(t){return t.id_commerce===e}))).length:0};return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsx)("h1",{children:"Bienvenue!"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"input-recherche",value:a,placeholder:"Rechercher des commerces",onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("h1",{className:"liste-commerces",children:"Liste de commerces"}),Object(c.jsxs)("div",{className:"vue-commerces",children:[Object(c.jsx)("div",{className:"div-filtre"}),Object(c.jsx)("div",{className:"conteneur-commerces",children:N.map((function(e,t){return Object(c.jsx)(p,{nom:e.nom,id:e.id,addresse:e.adresse,nbPersonnesEnFile:C(e.id),tempsAttenteApprox:5*C(e.id),onClickHandler:w},"commerce-".concat(t))}))})]})]})},O=n(12),x=n(6);var f=function(e){var t=e.location&&e.location.state||"",n=Object.freeze({name:"",phone:"",commerceId:t}),a=Object(r.useState)(n),s=Object(m.a)(a,2),o=s[0],i=s[1];Object(r.useEffect)((function(){console.log(t)}),[]);var j=function(e){i(Object(x.a)(Object(x.a)({},o),{},Object(O.a)({},e.target.name,e.target.value.trim())))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsxs)("form",{className:"form-client",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"nomInput",children:"Entrez votre nom"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"nomInput",name:"name","aria-describedby":"name",onChange:j,required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"telephone",children:"Entrez votre num\xe9ro de t\xe9l\xe9phone"}),Object(c.jsx)("input",{type:"tel",className:"form-control",id:"telephone",name:"phone",onChange:j,required:!0})]}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(n){function c(){return(c=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/prendreNumero/"+o.commerceId+","+o.phone+","+o.name,{method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.preventDefault(),console.log(t),function(){c.apply(this,arguments)}(),e.history.push({pathname:"/file-attente",state:o})},children:"Se mettre en ligne"})]})]})},v=(n(37),n(7));var g=function(e){var t=Object(v.f)(),n=e.location&&e.location.state||"",a=Object(r.useState)({}),s=Object(m.a)(a,2),o=s[0],i=s[1],j=Object(r.useState)({}),d=Object(m.a)(j,2),p=d[0],h=d[1],O=Object(r.useState)({}),x=Object(m.a)(O,2),f=(x[0],x[1]),g=Object(r.useState)({}),y=Object(m.a)(g,2),N=y[0],_=y[1],k=Object(r.useState)([]),w=Object(m.a)(k,2),C=w[0],S=w[1],q=Object(r.useState)([]),F=Object(m.a)(q,2),I=(F[0],F[1]),L=Object(r.useState)([]),E=Object(m.a)(L,2),P=E[0],D=E[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return e.next=4,r();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/commerceById/".concat(n.commerceId));case 2:return t=e.sent,e.next=5,t.json();case 5:void 0!==(c=e.sent)&&0!==c.length&&h(c[0]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/redis/listClient/".concat(n.commerceId));case 2:return t=e.sent,e.next=5,t.json();case 5:void 0!==(c=e.sent)&&0!==c.length&&(D("commerce"+n.commerceId+"Client"+c[c.length-1]),f(c),_(c),S(c[c.length-1]),I(c[0]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),i(n),console.log(n)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"file-attente",children:[Object(c.jsxs)("h2",{children:["Bienvenue! ",o.name," "]}),Object(c.jsxs)("h3",{children:["Vous \xeates dans la fille d'attente pour: ",p.nom,"  "]}),Object(c.jsxs)("div",{className:"card border-info mb-3",id:"carte-file-attente",children:[Object(c.jsx)("div",{className:"card-header",children:"Votre fille d'attente"}),Object(c.jsxs)("div",{className:"card-body text-info",children:[Object(c.jsxs)("h5",{className:"card-title",children:["Votre num\xe9ro est le: ",C,"   "]}),Object(c.jsxs)("p",{className:"card-text",children:["Il y a pr\xe9sentement: ",N.length-1,"  personnes devant vous."]}),Object(c.jsxs)("p",{className:"card-text",children:["Le temps d'attente est d'environ: ",5*(N.length-1)," minutes."]})]})]}),Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return r.apply(this,arguments)}function r(){return(r=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/deleteClientList/"+n.commerceId+","+P);case 2:return t=e.sent,e.next=5,t;case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(P),function(){e.apply(this,arguments)}(),t.push("/")},children:"Quitter la file d'attente"})]})]})};var y=function(e){var t=Object.freeze({email:"",password:""}),n=Object(r.useState)(t),a=Object(m.a)(n,2),s=a[0],o=a[1],i=[],d=function(e){o(Object(x.a)(Object(x.a)({},s),{},Object(O.a)({},e.target.name,e.target.value.trim())))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:"form-wrapper",children:Object(c.jsx)("div",{id:"divFormulaire",children:Object(c.jsxs)("form",{onSubmit:function(t){function n(){return(n=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/login/".concat(s.email).concat("/").concat(s.password));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.preventDefault(),function(){return n.apply(this,arguments)}().then((function(t){var n;void 0===(n=t)||0===n.length?alert("Mauvais email ou mot de passe."):(i=n[0],e.history.push({pathname:"/commerceConfig",state:i.id}))}))},className:"text-center border border-light p-5",children:[Object(c.jsx)("p",{className:"h4 mb-4",children:"Sign in"}),Object(c.jsxs)("div",{className:"email",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",className:"form-control mb-4",name:"email",onChange:d,placeholder:"Enter email"})]}),Object(c.jsxs)("div",{className:"password",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"form-control mb-4",type:"password",name:"password",onChange:d,placeholder:"Enter password"})]}),Object(c.jsx)("div",{className:"submit",children:Object(c.jsx)("button",{className:"btn btn-info btn-block my-4",type:"submit",children:"Soumettre"})}),Object(c.jsx)(j.b,{to:"/inscription",children:Object(c.jsx)("button",{type:"button",className:"btn btn-info btn-block my-4",children:"S'inscrire"})})]})})})]})};var N=function(e){var t=Object(v.f)(),n=Object.freeze({nomDuCommerce:"",adresse:"",email:"",password:""}),a=Object(r.useState)(n),s=Object(m.a)(a,2),o=s[0],i=s[1],l=function(e){i(Object(x.a)(Object(x.a)({},o),{},Object(O.a)({},e.target.name,e.target.value.trim())))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsx)("h1",{children:"Inscription"}),Object(c.jsx)("div",{id:"divFormulaire",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://queueio.herokuapp.com/commerceinscription/".concat(o.nomDuCommerce,"/",o.adresse,"/",o.email,"/",o.password),{method:"POST"}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)})),t.push("/login")},className:"text-center border border-light p-5",children:[Object(c.jsxs)("fieldset",{children:[Object(c.jsx)("div",{className:"nomDuCommerce",children:Object(c.jsx)("input",{className:"form-control mb-4",type:"text",id:"nomDuCommerce",name:"nomDuCommerce",placeholder:"Nom Du Commerce",required:!0,maxLength:"50",autoFocus:!0,onChange:l})}),Object(c.jsx)("div",{className:"email",children:Object(c.jsx)("input",{className:"form-control mb-4",type:"email",name:"email",placeholder:"Enter email",required:!0,onChange:l})}),Object(c.jsx)("div",{className:"password",children:Object(c.jsx)("input",{className:"form-control mb-4",type:"password",name:"password",placeholder:"Enter password",required:!0,onChange:l})}),Object(c.jsxs)("div",{className:"adresse",children:[Object(c.jsx)("label",{htmlFor:"story",children:"Adresse"}),Object(c.jsx)("textarea",{className:"form-control mb-4",id:"adresse",name:"adresse",rows:"3",cols:"10",required:!0,onChange:l})]})]}),Object(c.jsx)("div",{className:"submit",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-info btn-block my-4",children:"Soumettre"})}),Object(c.jsx)("div",{className:"quitter",children:Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-info btn-block my-4",children:"Quitter"})})})]})})]})},_=function(e){var t=e.commerceId,n=e.props;return Object(c.jsx)("div",{children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(c.jsx)(j.b,{to:"/",className:"navbar-brand",children:"queue.io"}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:Object(c.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(c.jsx)("li",{className:"nav-item active",children:Object(c.jsxs)(j.b,{to:"/CommerceConfig",className:"nav-link",children:["Accueil - Profil ",Object(c.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(c.jsx)("li",{className:"nav-link active",id:"stat-link",onClick:function(e){n.history.push({pathname:"/statistique",state:t})},children:"Statistiques"}),Object(c.jsx)("li",{className:"nav-item active",children:Object(c.jsx)(j.b,{to:"/",className:"nav-link",children:"Se d\xe9connecter"})})]})})]})})})};var k=function(e){var t=e.location&&e.location.state||3,n=Object(r.useState)([]),a=Object(m.a)(n,2),s=a[0],o=a[1],i=Object(r.useState)(!0),j=Object(m.a)(i,2),b=j[0],p=j[1],h=Object(r.useState)({nom:"John",courriel:"abc@mail.com",mot_passe:"badoing"}),f=Object(m.a)(h,2),v=f[0],g=f[1],y=Object(r.useState)({horaire_ouverture:"08:00",horaire_fermeture:"22:00"}),N=Object(m.a)(y,2),k=N[0],w=N[1],C=Object(r.useState)([]),S=Object(m.a)(C,2),q=S[0],F=S[1],I=Object(r.useState)([]),L=Object(m.a)(I,2),E=L[0],P=L[1],D=Object(r.useState)(""),A=Object(m.a)(D,2),B=A[0],T=A[1],M=Object(r.useState)({filtre_id:"1",couleur:"#C1BBBA",employee_id:"2",logo:"logo",nb_clients_max:"10",horaire_id:"2",nb_minutes_retard:"5",temps_moyen_clients:"10"}),J=Object(m.a)(M,2),R=J[0],z=J[1],H=Object(r.useState)({filtre_id:"1",couleur:"#C1BBBA",employee_id:"2",logo:"logo",nb_clients_max:"10",horaire_id:"2",nb_minutes_retard:"5",temps_moyen_clients:"10"}),U=Object(m.a)(H,2),V=U[0],Q=U[1],G=Object(r.useState)({nom:"RBC",adresse:"123 rue maisoneyve",courriel:"apple@mail.com",mot_passe:"apple123"}),K=Object(m.a)(G,2),W=K[0],X=K[1],Y=Object(r.useState)({nom:"RBC",adresse:"123 rue maisoneyve",courriel:"apple@mail.com",mot_passe:"apple123"}),Z=Object(m.a)(Y,2),$=Z[0],ee=Z[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return e.next=4,n();case 4:return e.next=6,s();case 6:return e.next=8,m();case 8:return e.next=10,b();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/commerceConfigId/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:void 0!==(c=e.sent)&&0!==c.length&&(c[0].couleur="#".concat(c[0].couleur),z(c[0]),Q(c[0]),T(c[0].filtre_id),p(!1));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/commerceById/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:void 0!==(c=e.sent)&&0!==c.length&&(X(c[0]),ee(c[0]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return i.apply(this,arguments)}function i(){return(i=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/filtre");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/employeByIdCommerce/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:void 0!==(c=e.sent)&&0!==c.length&&(g(c[0]),P(c[0]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/horaire/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:void 0!==(c=e.sent)&&0!==c.length&&(w(c[0]),F(c[0]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var te=function(e){switch(console.log(e.target.name),e.target.name){case"nom":case"adresse":case"courriel":case"mot_passe":X(Object(x.a)(Object(x.a)({},W),{},Object(O.a)({},e.target.name,e.target.value)));break;case"filtre_id":T(e.target.value),z(Object(x.a)(Object(x.a)({},R),{},{filtre_id:e.target.value}));break;case"couleur":case"nb_clients_max":case"horaire_id":case"nb_minutes_retard":case"temps_moyen_clients":z(Object(x.a)(Object(x.a)({},R),{},Object(O.a)({},e.target.name,e.target.value.trim())));break;case"employe_courriel":g(Object(x.a)(Object(x.a)({},v),{},{courriel:e.target.value.trim()}));break;case"employe_mot_passe":g(Object(x.a)(Object(x.a)({},v),{},{mot_passe:e.target.value.trim()}));break;case"horaire_ouverture":case"horaire_fermeture":w(Object(x.a)(Object(x.a)({},k),{},Object(O.a)({},e.target.name,e.target.value.trim())))}};return Object(c.jsxs)("div",{children:[Object(c.jsx)(_,{commerceId:t,props:e}),Object(c.jsxs)("p",{children:["Commerce ID : ",t]}),Object(c.jsxs)("div",{id:"divFormulaire",children:[Object(c.jsxs)("form",{onSubmit:function(e){function n(){return(n=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return e.next=4,a();case 4:return e.next=6,o();case 6:return e.next=8,m();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return r.apply(this,arguments)}function r(){return(r=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/commerceConfig/"+R.filtre_id+"/"+R.logo+"/"+R.couleur.substring(1)+"/"+R.nb_minutes_retard+"/"+R.nb_clients_max+"/"+R.temps_moyen_clients+"/"+t,{method:b?"POST":"PUT"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return s.apply(this,arguments)}function s(){return(s=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/commerceupdate/"+W.nom+","+W.adresse+","+W.courriel+","+W.mot_passe+","+t,{method:"PUT"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return i.apply(this,arguments)}function i(){return(i=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/horaire/"+k.horaire_ouverture+"/"+k.horaire_fermeture+"/"+t,{method:b?"POST":"PUT"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function e(){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b?"employecreation/":"updateemployee/",console.log("https://queueio.herokuapp.com/"+n+v.nom+"/"+v.courriel+"/"+v.mot_passe+"/"+t),e.next=4,fetch("https://queueio.herokuapp.com/"+n+v.nom+"/"+v.courriel+"/"+v.mot_passe+"/"+t,{method:b?"POST":"PUT"});case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,console.log(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),console.log("commerce info :",W),console.log("commerce config :",R),console.log("employe :",v),console.log("horaire :",k),console.log(b),function(){n.apply(this,arguments)}()},className:"form-config",children:[Object(c.jsx)("h1",{children:"Configuration du Commerce"}),Object(c.jsxs)("fieldset",{className:"fieldset-config",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{className:"logo-commerce",alt:"",src:d})}),Object(c.jsxs)("div",{className:"nomDuCommerce",children:[Object(c.jsx)("label",{htmlFor:"nom",children:"Nom Du Commerce"}),Object(c.jsx)("input",{className:"form-control mb-4",value:W.nom||"",type:"text",id:"nomDuCommerce",name:"nom",onChange:te,required:"required",maxLength:"50",autoFocus:!0})]}),Object(c.jsxs)("div",{className:"adresse",children:[Object(c.jsx)("label",{htmlFor:"adresse",children:"Adresse"}),Object(c.jsx)("input",{className:"form-control mb-4",id:"adresse",value:W.adresse||"",name:"adresse",maxLength:"100",onChange:te,required:!0})]}),Object(c.jsxs)("div",{className:"email",children:[Object(c.jsx)("label",{htmlFor:"courriel",children:"Email"}),Object(c.jsx)("input",{className:"form-control mb-4",value:W.courriel||"",type:"email",name:"courriel",onChange:te})]}),Object(c.jsxs)("div",{className:"password",children:[Object(c.jsx)("label",{htmlFor:"mot_passe",children:"Password"}),Object(c.jsx)("input",{className:"form-control mb-4",type:"text",value:W.mot_passe||"",name:"mot_passe",onChange:te})]}),Object(c.jsxs)("div",{className:"filtre",children:[Object(c.jsx)("label",{htmlFor:"filtre_id",children:"La cat\xe9gorie de votre commerce"}),Object(c.jsx)("select",{name:"filtre_id",className:"form-control mb-4",value:B||"",id:"filtre",onChange:te,children:s.map((function(e,t){return Object(c.jsx)("option",{value:e.id,children:e.nom_filtre},t)}))})]}),Object(c.jsxs)("div",{className:"color",children:[Object(c.jsx)("label",{htmlFor:"couleur",children:"La couleur th\xe8me de votre commerce"}),Object(c.jsx)("input",{className:"form-control mb-4",type:"color",value:R.couleur||"",name:"couleur",onChange:te})]}),Object(c.jsxs)("div",{className:"employeeEmail",children:[Object(c.jsx)("label",{htmlFor:"employee_id",children:"Le courriel utilis\xe9 pour la connexion de l'employ\xe9"}),Object(c.jsx)("input",{className:"form-control mb-4",type:"text",value:v.courriel||"",name:"employe_courriel",onChange:te})]}),Object(c.jsxs)("div",{className:"employeePassword",children:[Object(c.jsx)("label",{htmlFor:"employeePassword",children:"Le mot de passe utilis\xe9 pour la connexion de l'employ\xe9"}),Object(c.jsx)("input",{className:"form-control mb-4",type:"text",value:v.mot_passe||"",name:"employe_mot_passe",onChange:te})]}),Object(c.jsxs)("div",{className:"maxClientDansCommerce",children:[Object(c.jsx)("label",{htmlFor:"nb_clients_max",children:"Maximum de clients dans le commerce"}),Object(c.jsx)("input",{className:"form-control mb-4",type:"text",id:"maxClientDansCommerce",value:R.nb_clients_max||"",name:"nb_clients_max",onChange:te,required:"required",maxLength:"50"})]}),Object(c.jsxs)("div",{className:"horaireOuverture",children:[Object(c.jsx)("label",{htmlFor:"horaire_ouverture",children:"Horaire d'Ouverture:"}),Object(c.jsx)("input",{type:"time",className:"form-control mb-4",id:"horaire_ouverture",value:k.horaire_ouverture||"",name:"horaire_ouverture",onChange:te,min:"06:00",max:"23:00",required:!0})]}),Object(c.jsxs)("div",{className:"horaire_fermeture",children:[Object(c.jsx)("label",{htmlFor:"horaire_fermeture",children:"Horaire de fermeture:"}),Object(c.jsx)("input",{type:"time",className:"form-control mb-4",id:"horaire_fermeture",value:k.horaire_fermeture||"",name:"horaire_fermeture",onChange:te,min:"06:00",max:"23:00",required:!0})]}),Object(c.jsxs)("div",{className:"maxMinuteRetard",children:[Object(c.jsx)("label",{htmlFor:"nb_minutes_retard",children:"Le temps maximum d'attente de retard (en minutes)"}),Object(c.jsx)("input",{type:"number",className:"form-control mb-4",id:"maxMinuteRetard",value:R.nb_minutes_retard||"",min:"0",name:"nb_minutes_retard",onChange:te,required:"required",maxLength:"50"})]}),Object(c.jsxs)("div",{className:"tempsMoyenClient",children:[Object(c.jsx)("label",{htmlFor:"temps_moyen_clients",children:"Le temps moyen qu'un client passe dans le commerce (en minutes)"}),Object(c.jsx)("input",{type:"number",className:"form-control mb-4",id:"tempsMoyenClient",value:R.temps_moyen_clients||"",min:"0",name:"temps_moyen_clients",onChange:te,required:"required",maxLength:"50"})]}),Object(c.jsx)("div",{id:"submit",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg btn-block",children:"Sauvegarder les modifications"})})]})]}),Object(c.jsx)("div",{id:"quitter",children:Object(c.jsx)("button",{className:"btn btn-secondary btn-lg btn-block",name:"annuler",onClick:function(e){switch(e.target.name){case"annuler":console.log(V),z(V),X($),g(E),w(q),console.log("btn annuler")}},children:"Annuler les modifications"})}),Object(c.jsx)("div",{className:"bottom-space",children:"Some text"})]})]})};var w=function(e){var t=e.location&&e.location.state||[],n=Object(r.useState)({nb_client_jour:"",nb_client_mois:"",nb_client_annee:"",temp_moyen_attendre:"",temp_moyen_client_commerce:""}),a=Object(m.a)(n,2),s=a[0],o=a[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://queueio.herokuapp.com/commerceStatistiques/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){console.log(e),i(e[0])}))}),[]);var i=function(e){o(e)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(_,{}),Object(c.jsxs)("div",{className:"statistique-wrapper",children:[Object(c.jsx)("p",{className:"h4 mb-4",id:"message-stat",children:"Voici votre page de statistiques de votre commerce"}),Object(c.jsxs)("div",{className:"stat-info",children:[Object(c.jsxs)("ul",{className:"list-group",id:"texte-stat",children:[Object(c.jsx)("li",{className:"list-group-item",children:"Moyenne de clients par jour"}),Object(c.jsx)("li",{className:"list-group-item",children:"Moyenne de clients par mois"}),Object(c.jsx)("li",{className:"list-group-item",children:"Moyenne de clients par ann\xe9e"}),Object(c.jsx)("li",{className:"list-group-item",children:"Temps moyen d'attente en file (en minutes)"}),Object(c.jsx)("li",{className:"list-group-item",children:"Temps moyen qu'un client passe dans le commerce (en minutes)"})]}),Object(c.jsxs)("ul",{className:"list-group",id:"chiffre-stat",children:[Object(c.jsx)("li",{className:"list-group-item",children:s.nb_client_jour}),Object(c.jsx)("li",{className:"list-group-item",children:s.nb_client_mois}),Object(c.jsx)("li",{className:"list-group-item",children:s.nb_client_annee}),Object(c.jsx)("li",{className:"list-group-item",children:s.temp_moyen_attendre}),Object(c.jsx)("li",{className:"list-group-item",children:s.temp_moyen_client_commerce})]})]}),Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)("button",{type:"button",className:"btn btn-info btn-block my-4",id:"btn-stat",children:"Retour au profil"})})]})]})},C=n(9);var S=function(){var e=Object(C.a)();return Object(c.jsxs)(j.a,{history:e,children:[Object(c.jsx)(j.b,{to:"/login",children:"Login "}),Object(c.jsx)(j.b,{to:"/inscription",children:"inscription "}),Object(c.jsx)(j.b,{to:"/commerceConfig",children:"Commerce Config"}),Object(c.jsx)(j.b,{to:"/statistique",children:"Statistique"}),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{component:f,path:"/info-client"}),Object(c.jsx)(v.a,{component:g,path:"/file-attente"}),Object(c.jsx)(v.a,{component:y,path:"/login"}),Object(c.jsx)(v.a,{component:N,path:"/inscription"}),Object(c.jsx)(v.a,{component:k,path:"/commerceConfig"}),Object(c.jsx)(v.a,{component:w,path:"/statistique"}),Object(c.jsx)(v.a,{component:h,path:"/"})]})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),q()}},[[38,1,2]]]);
//# sourceMappingURL=main.ea9c05af.chunk.js.map