(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),c=t(10),r=t.n(c),i=(t(20),t(21),t(11)),l=t(12),s=t(13),m=t(14),u=(t(7),t(3)),d=t.n(u);t(22),t(24);d.a.initializeApp({apiKey:"AIzaSyB3TpjND15IXtY4oV4-7FQTJRfOpjsLrpc",authDomain:"portfolio-4ad8b.firebaseapp.com",databaseURL:"https://portfolio-4ad8b.firebaseio.com",projectId:"portfolio-4ad8b",storageBucket:"",messagingSenderId:"601043154557",appId:"1:601043154557:web:ecbf44661588f267202314"});var f=d.a.firestore(),p=(d.a,function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={teamData:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.collection("team").doc("info").get().then((function(a){a.exists?e.setState({teamData:a.data().data}):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}},{key:"render",value:function(){var e=this.state.teamData;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 my-5"},o.a.createElement("h1",null,"FE Team Members"))),o.a.createElement("div",{className:"row"},e&&e.map((function(e,a){return o.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-4",key:a},o.a.createElement("figure",{className:"effect-bubba"},o.a.createElement("img",{src:e.img,alt:"",className:"img-thumbnail img-fluid rounded"}),o.a.createElement("figcaption",{className:"hidden-sm hidden-xs"},o.a.createElement("p",null,e.desc),o.a.createElement("h2",null,e.name))))}))))}}]),t}(n.Component));var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.cad0460b.chunk.js.map