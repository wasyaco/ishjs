import e,{useContext as n,useState as r,createContext as t}from"react";import{ToastContainer as o}from"react-toastify";import"ionicons/icons";import"@material-ui/core";import i from"@material-ui/core/Box";import{ChevronLeft as a,ChevronRight as l,Menu as c,Close as s}from"@material-ui/icons";import d from"prop-types";import"react-router-dom";import u from"styled-components";import p from"axios";import"@capacitor/core";import m from"react-modal";function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n.indexOf(r=i[t])>=0||(o[r]=e[r]);return o}function g(e,n){return n||(n=e.slice(0)),e.raw=n,e}var v,y,x,b,w,O,E,M,C,k,P,L,R,j,T={anonUser:{},bottomDrawerOpen:"bottom-drawer-open",collapsible:{description:"descr-sec",extra1:"extra1-sec",extra2:"extra2-sec",extra3:"extra3-sec",map:"map-sec",markers:"markers-sec"},collapsibles:"collapsibles",current_user:"current_user",horizontal:"horizontal",item_types:{gallery:"Gallery",report:"Report",video:"Video"},jwt_token:"jwt_token",layout_onecol:"onecol",layout_mapui:"mapui",locations:{earth:"earth"},map_panel_types:{Equirectangular:"Equirectangular",MapPanel:"MapPanel",MapPanelNoZoom:"MapPanelNoZoom",ThreePanelV1:"ThreePanelV1",ThreePanelV4:"ThreePanelV4"},names:{scratchpad:"Scratchpad"},rated:{nc17:"nc-17"},ratedConfirmation:"rated-confirmation",theme:"theme",themes:{dark:"dark",light:"light"},twofoldPercent:"twofold-percent",variants:{bordered:"bordered",floating:"floating",inline:"inline",transparent:"transparent"},vertical:"vertical"},_=p.create({}),N=["children"],z=["children"],B=["children","onClose"],q=(u.div(v||(v=g(["\n\n  // @TODO: this should use variables, for Modal inner size.\n  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.\n  position: fixed; // for GalleriesShow\n  top: 60px;\n  right: 60px;\n\n  display: flex;\n  flex-direction: row-reverse;\n"]))),u.div(y||(y=g(["\n  margin-right: 5px;\n  cursor: pointer;\n"]))),u.div(x||(x=g(["\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  padding: .3em 1em;\n"])))),D=(u(a)(b||(b=g(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),u(l)(w||(w=g(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),u(i)(O||(O=g(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ",";\n\n  display: flex;\n  flex-direction: column;\n"])),function(e){return e.cursor?e.cursor:"auto"}),function(n){var r=h(n,N);return e.createElement(s,f({style:f({cursor:"pointer"},r.style)},r))});D.propTypes={onClick:d.func.isRequired};var U=u.div(E||(E=g(["\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin: auto .4em; // @TODO: standardize this size!\n  }\n"]))),A=function(n){var r=n.children,t=h(n,z);return e.createElement(U,f({className:"FlexCol"},t),r)},V=u.div(M||(M=g(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!\n  }\n"]))),F=(u.div(C||(C=g(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"]))),function(e,n,r){void 0===n&&(n=""),void 0===r&&(r=null),(r="string"==typeof r?r:n.replace(/\W/g,"")).length>0&&"undefined"!=typeof window&&(window[r]=e),console.log("+++ "+n+":",e)}),S=(u(c)(k||(k=g(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),u.div(P||(P=g(["\n  flex-grow: 1;\n  text-align: center;\n  font-size: 1.2rem;\n"])))),G=function(n){var r=n.children,t=n.onClose;return h(n,B),e.createElement(V,null,e.createElement(S,null,r),e.createElement(D,{onClick:t}))};G.propTypes={onClose:d.func.isRequired},u.div(L||(L=g(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])),function(e){return e.theme.thinBorder},function(e){return e.theme.thinBorderRadius},function(e){return e.theme.colors.cardBackground}),u.div(R||(R=g(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  color: ",";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])),function(e){return e.theme.thinBorder},function(e){return e.theme.thinBorderRadius},function(e){return e.theme.colors.cardBackground},function(e){return e.theme.colors.text}),u.div(j||(j=g(["\n  height: 100vh;\n"]))),e.createContext({});var I={LoginModal:"_2YolN",LoginModalOverlay:"_3hqvY",Notice:"_2ifwF"},W=function(t){var o=t.onError,i=t.onSuccess,a=n(Z),l=a.loginModalOpen,c=a.setLoginModalOpen,s=a.setRegisterModalOpen,d=a.useApi,u=r(""),p=u[0],f=u[1],h=r(""),g=h[0],v=h[1],y=d(),x=function(e,n){try{return y.postLogin({email:e,password:n}).then(function(e){c(!1),i(e)}).catch(function(e){o(e)}),Promise.resolve()}catch(e){return Promise.reject(e)}};return m.setAppElement("body"),e.createElement(m,{className:"LoginModal "+I.LoginModal,isOpen:!!l,overlayClassName:I.LoginModalOverlay,portalClassName:I.LoginModalPortal},e.createElement(G,{onClose:function(){return c(!1)}},"Login"),"string"==typeof l&&e.createElement(V,null,e.createElement("div",{className:I.Notice},l)),e.createElement(A,null,e.createElement("label",{htmlFor:"email"},"Email"),e.createElement("input",{name:"email",type:"email",value:p,onChange:function(e){return f(e.target.value)}}),e.createElement("label",{htmlFor:"password"},"Password"),e.createElement("input",{name:"password",type:"password",value:g,onChange:function(e){return v(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&x(p,g)}}),e.createElement(V,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},e.createElement(q,{onClick:function(){return x(p,g)}},"Login"))),e.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),e.createElement(V,{style:{justifyContent:"center"}},e.createElement("a",{onClick:function(){c(!1),s(!0)}},"Register Instead")))};W.propTypes={onError:d.func,onSuccess:d.func};var Y=["children"],Z=t({}),K=function(n){var t=n.children,o=h(n,Y);F(o,"AuthContextProvider");var i=o.currentUser,a=void 0===i?T.anonUser:i,l=o.setCurrentUser,c=o.loginModalOpen,s=void 0!==c&&c,d=o.setLoginModalOpen,u=o.registerModalOpen,p=void 0!==u&&u,m=o.setRegisterModalOpen,g=r(a),v=g[0],y=g[1];l&&(v=a,y=l);var x=r(s),b=x[0],w=x[1];d&&(b=s,w=d);var O=r(p),E=O[0],M=O[1];return m&&(E=p,M=m),e.createElement(Z.Provider,{value:f({},o,{currentUser:v,setCurrentUser:y,loginModalOpen:b,setLoginModalOpen:w,registerModalOpen:E,setRegisterModalOpen:M})},t)};K.propTypes={useApi:d.func.isRequired};export default function(){var n=r(!1),t=n[0],i=n[1],a=r(!0);return e.createElement(K,{loginModalOpen:t,setLoginModalOpen:i,registerModalOpen:a[0],setRegisterModalOpen:a[1],useApi:function(){return{doRegister:function(e){return _.post("http://localhost:3001/api/users",{email:e.email,password:e.password}).then(function(e){return e.data}).then(function(e){return F(e,"done registered"),e})}}}},e.createElement(W,null),e.createElement(o,{position:"bottom-left"}))}
//# sourceMappingURL=TestApp.jsx.module.js.map
