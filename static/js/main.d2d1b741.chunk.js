(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/star.15e768c2.png"},28:function(e,t,a){e.exports=a.p+"static/media/line.5d2ffe56.png"},29:function(e,t,a){e.exports=a.p+"static/media/sp.7c95f38a.png"},32:function(e,t,a){e.exports=a(48)},37:function(e,t,a){},38:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(26),r=a.n(c),i=(a(37),a(8)),l=a(9),s=a(10),m=a(11),u=a(30),d=a(2),f=a(18),p=a.n(f),h=(a(38),a(27)),g=a.n(h),v=(a(22),a(15)),b=a.n(v);a(39),a(41);b.a.initializeApp({apiKey:"AIzaSyB3TpjND15IXtY4oV4-7FQTJRfOpjsLrpc",authDomain:"portfolio-4ad8b.firebaseapp.com",databaseURL:"https://portfolio-4ad8b.firebaseio.com",projectId:"portfolio-4ad8b",storageBucket:"",messagingSenderId:"601043154557",appId:"1:601043154557:web:ecbf44661588f267202314"});var E=b.a.firestore(),y=(b.a,function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={teamData:{}},n}return Object(l.a)(a,[{key:"getCertificate",value:function(e){var t=this.props.history.push;localStorage.setItem("name",e),t("/star-performer-of-the-month")}},{key:"componentDidMount",value:function(){var e=this;E.collection("team").doc("group").get().then((function(t){t.exists?e.setState({teamData:t.data().data}):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}},{key:"render",value:function(){var e=this,t=this.state.teamData;return o.a.createElement("div",{className:"container pb-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 my-5"},o.a.createElement("h1",null,"Frontend Team"))),o.a.createElement("div",{className:"row"},t&&t.fe&&t.fe.map((function(t,a){return o.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-3 col-lg-3 frame",key:a},!0===t.enabled&&o.a.createElement("span",{onClick:e.getCertificate.bind(e,t.name)},o.a.createElement("img",{src:g.a,alt:"",className:"App-logo"})),o.a.createElement("figure",{className:"effect-bubba"},o.a.createElement("img",{src:t.img,alt:"",className:"img-thumbnail img-fluid rounded"}),o.a.createElement("figcaption",{className:"hidden-sm hidden-xs"},o.a.createElement("p",null,t.desc),o.a.createElement("h2",null,t.name))))}))))}}]),a}(n.Component)),N=a(28),k=a.n(N),w=a(29),j=a.n(w),O=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={Data:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.collection("team").doc("group").get().then((function(t){t.exists?e.setState({Data:t.data().certificate}):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}},{key:"render",value:function(){var e=this.state.Data,t=localStorage.getItem("name");return o.a.createElement("div",{className:"certificate"},o.a.createElement("div",{className:"row"},e&&o.a.createElement("div",{className:"col"},o.a.createElement("h1",{className:"my-3"},e.title),o.a.createElement("img",{src:k.a,className:"img-fluid",alt:""}),o.a.createElement("h6",{className:"my-3"},"This certifies that"),o.a.createElement("h2",null,t||e.name),o.a.createElement("h6",{className:"mt-3"},"Is the star performer of the month ",e.month),o.a.createElement("img",{src:j.a,className:"img-fluid",alt:""}))))}}]),a}(n.Component),D=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){p()(document).ready((function(){p()("body").keydown((function(e){return 123!==e.keyCode&&((!e.ctrlKey||!e.shiftKey||73!==e.keyCode)&&void 0)}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:y}),o.a.createElement(d.a,{path:"/star-performer-of-the-month",component:O})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.d2d1b741.chunk.js.map