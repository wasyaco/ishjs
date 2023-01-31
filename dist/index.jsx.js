function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),n=e(t),r=e(require("react-dom"));require("ionicons/icons"),require("@material-ui/core");var o=e(require("@material-ui/core/Box")),a=require("@material-ui/icons"),l=e(require("prop-types")),i=require("react-router-dom"),s=e(require("styled-components")),c=e(require("axios")),u=require("react-toastify");require("@capacitor/core");var d=e(require("react-modal"));require("@ionic/react");var m=e(require("@material-ui/core/Drawer")),p=e(require("@material-ui/core/Fab"));require("@material-ui/core/IconButton");var g=e(require("@material-ui/core/List")),h=e(require("@material-ui/core/ListItem"));function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function x(e,t){return t||(t=e.slice(0)),e.raw=t,e}require("@material-ui/core/ListItemIcon");var y={anonUser:{},bottomDrawerOpen:"bottom-drawer-open",collapsible:{description:"descr-sec",extra1:"extra1-sec",extra2:"extra2-sec",extra3:"extra3-sec",map:"map-sec",markers:"markers-sec"},collapsibles:"collapsibles",current_user:"current_user",horizontal:"horizontal",item_types:{gallery:"Gallery",report:"Report",video:"Video"},jwt_token:"jwt_token",layout_onecol:"onecol",layout_mapui:"mapui",locations:{earth:"earth"},map_panel_types:{Equirectangular:"Equirectangular",MapPanel:"MapPanel",MapPanelNoZoom:"MapPanelNoZoom",ThreePanelV1:"ThreePanelV1",ThreePanelV4:"ThreePanelV4"},names:{scratchpad:"Scratchpad"},rated:{nc17:"nc-17"},ratedConfirmation:"rated-confirmation",theme:"theme",themes:{dark:"dark",light:"light"},twofoldPercent:"twofold-percent",variants:{bordered:"bordered",floating:"floating",inline:"inline",transparent:"transparent"},vertical:"vertical"};c.create({});var E,C,w,b,M,O,k,P,L,q,S,R,j,_,T=["children"],I=["children"],N=["children","onClose"],F=s.div(E||(E=x(["\n\n  // @TODO: this should use variables, for Modal inner size.\n  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.\n  position: fixed; // for GalleriesShow\n  top: 60px;\n  right: 60px;\n\n  display: flex;\n  flex-direction: row-reverse;\n"]))),A=(s.div(C||(C=x(["\n  margin-right: 5px;\n  cursor: pointer;\n"]))),s.div(w||(w=x(["\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  padding: .3em 1em;\n"])))),U=(s(a.ChevronLeft)(b||(b=x(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),s(a.ChevronRight)(M||(M=x(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),s(o)(O||(O=x(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ",";\n\n  display: flex;\n  flex-direction: column;\n"])),function(e){return e.cursor?e.cursor:"auto"}),function(e){var t=v(e,T);return n.createElement(a.Close,f({style:f({cursor:"pointer"},t.style)},t))});U.propTypes={onClick:l.func.isRequired};var B=s.div(k||(k=x(["\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin: auto .4em; // @TODO: standardize this size!\n  }\n"]))),z=function(e){var t=e.children,r=v(e,I);return n.createElement(B,f({className:"FlexCol"},r),t)},D=s.div(P||(P=x(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!\n  }\n"]))),V=(s.div(L||(L=x(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"]))),function(e,t,n){void 0===t&&(t=""),void 0===n&&(n=null),(n="string"==typeof n?n:t.replace(/\W/g,"")).length>0&&"undefined"!=typeof window&&(window[n]=e),console.log("+++ "+t+":",e)}),J=s(a.Menu)(q||(q=x(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),W=s.div(S||(S=x(["\n  flex-grow: 1;\n  text-align: center;\n  font-size: 1.2rem;\n"]))),H=function(e){var t=e.children,r=e.onClose;return v(e,N),n.createElement(D,null,n.createElement(W,null,t),n.createElement(U,{onClick:r}))};H.propTypes={onClose:l.func.isRequired},s.div(R||(R=x(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])),function(e){return e.theme.thinBorder},function(e){return e.theme.thinBorderRadius},function(e){return e.theme.colors.cardBackground}),s.div(j||(j=x(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  color: ",";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])),function(e){return e.theme.thinBorder},function(e){return e.theme.thinBorderRadius},function(e){return e.theme.colors.cardBackground},function(e){return e.theme.colors.text}),s.div(_||(_=x(["\n  height: 100vh;\n"]))),n.createContext({});var G={LoginModal:"_2YolN",LoginModalOverlay:"_3hqvY",Notice:"_2ifwF"},Y=function(e){var r=e.onError,o=e.onSuccess,a=t.useContext(Q),l=a.loginModalOpen,i=a.setLoginModalOpen,s=a.setRegisterModalOpen,c=a.useApi,u=t.useState(""),m=u[0],p=u[1],g=t.useState(""),h=g[0],f=g[1],v=c(),x=function(e,t){try{return v.postLogin({email:e,password:t}).then(function(e){i(!1),o(e)}).catch(function(e){r(e)}),Promise.resolve()}catch(e){return Promise.reject(e)}};return d.setAppElement("body"),n.createElement(d,{className:"LoginModal "+G.LoginModal,isOpen:!!l,overlayClassName:G.LoginModalOverlay,portalClassName:G.LoginModalPortal},n.createElement(H,{onClose:function(){return i(!1)}},"Login"),"string"==typeof l&&n.createElement(D,null,n.createElement("div",{className:G.Notice},l)),n.createElement(z,null,n.createElement("label",{htmlFor:"email"},"Email"),n.createElement("input",{name:"email",type:"email",value:m,onChange:function(e){return p(e.target.value)}}),n.createElement("label",{htmlFor:"password"},"Password"),n.createElement("input",{name:"password",type:"password",value:h,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&x(m,h)}}),n.createElement(D,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},n.createElement(A,{onClick:function(){return x(m,h)}},"Login"))),n.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),n.createElement(D,{style:{justifyContent:"center"}},n.createElement("a",{onClick:function(){i(!1),s(!0)}},"Register Instead")))};Y.propTypes={onError:l.func,onSuccess:l.func};var Z=function(e){var r=t.useContext(Q),o=r.setLoginModalOpen,a=r.registerModalOpen,l=r.setRegisterModalOpen,i=(0,r.useApi)(),s=t.useState(""),c=s[0],m=s[1],p=t.useState(""),g=p[0],h=p[1],f=t.useState(""),v=f[0],x=f[1];return n.createElement(d,{className:"LoginModal "+G.LoginModal,isOpen:a,overlayClassName:G.LoginModalOverlay,portalClassName:G.LoginModalPortal},n.createElement(H,{onClose:function(){return l(!1)}},"Register"),n.createElement(z,null,n.createElement("label",{htmlFor:"email"},"Email"),n.createElement("input",{type:"email",name:"email",value:c,onChange:function(e){return m(e.target.value)}}),n.createElement("label",{htmlFor:"password"},"Password"),n.createElement("input",{type:"password",name:"password",value:g,onChange:function(e){return h(e.target.value)}}),n.createElement("label",{htmlFor:"password2"},"Confirm Password"),n.createElement("input",{type:"password",name:"password2",value:v,onChange:function(e){return x(e.target.value)}}),n.createElement(D,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},n.createElement(A,{className:"Submit",onClick:function(){return function(e,t,n){try{return t!==n?(u.toast("Passwords do not match"),Promise.resolve()):(i.doRegister({email:e,password:t}).then(function(e){l(!1),o(e.message)}).catch(function(e){u.toast("Registration failed")}),Promise.resolve())}catch(e){return Promise.reject(e)}}(c,g,v)}},"Register")),n.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),n.createElement(D,{style:{justifyContent:"center"}},n.createElement("a",{onClick:function(){return o(!0)||l(!1)}},"Login Instead"))))};Z.propTypes={};var K=["children"],Q=t.createContext({}),X=function(e){var r=e.children,o=v(e,K);V(o,"AuthContextProvider");var a=o.currentUser,l=void 0===a?y.anonUser:a,i=o.setCurrentUser,s=o.loginModalOpen,c=void 0!==s&&s,u=o.setLoginModalOpen,d=o.registerModalOpen,m=void 0!==d&&d,p=o.setRegisterModalOpen,g=t.useState(l),h=g[0],x=g[1];i&&(h=l,x=i);var E=t.useState(c),C=E[0],w=E[1];u&&(C=c,w=u);var b=t.useState(m),M=b[0],O=b[1];return p&&(M=m,O=p),n.createElement(Q.Provider,{value:f({},o,{currentUser:h,setCurrentUser:x,loginModalOpen:C,setLoginModalOpen:w,registerModalOpen:M,setRegisterModalOpen:O})},r)};X.propTypes={useApi:l.func.isRequired};const $=e=>{V(e,"Marker");const{label:t="<none>"}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"Card",style:{border:"1px solid red",borderRadius:"10px",padding:"10px",maxWidth:"400px"}},"I am a marker! Label: `",t,"`."))},ee=()=>n.createElement(Fragment,null,n.createElement("h1",null,"Hello, world!"),n.createElement($,null)),te=n.createContext({}),ne=e=>{let{children:r,...o}=e;V(o,"JwtContextProvider 222");const{api:a}=o,[l,i]=t.useState({}),[s,c]=t.useState({});return t.useEffect(()=>{V("setting currentUser..."),a.getMyAccount().then(e=>{V(e,"got this resp"),i(e)}).catch(e=>{V(e,"e322"),u.toast("Login failed: "+e),i({})})},[]),n.createElement(te.Provider,{value:{api:a,currentUser:l,setCurrentUser:i,loginModalOpen:s,setLoginModalOpen:c}},r)};ne.props={api:l.object};const re=s.div`
  display: flex;

  > * {
    margin: auto .4em;
  }
`,oe=s.div`
  border: 1px solid red;
`,ae=s.div`
  display: flex;
`,le=(s.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`,()=>{const{setCurrentUser:e}=t.useContext(te);return n.createElement(A,{onClick:()=>{localStorage.removeItem("jwt_token"),e({})}},"Logout")});var ie={__proto__:null,JwtContext:te,JwtContextProvider:ne,SimpleJwtRow:()=>{const{currentUser:e}=t.useContext(te);return n.createElement(oe,null,n.createElement(re,null,e.email&&n.createElement(ae,null,n.createElement("i",null,e.email),n.createElement(le,null))))},Logout:le};const se=s.div`
`,ce=e=>{const{useApi:r}=t.useContext(Q),o=r(),[a,l]=t.useState(localStorage.getItem(y.names.scratchpad)||"");return n.createElement(se,null,n.createElement("textarea",{name:"scratchpad",rows:"20",cols:"40",onChange:e=>l(e.target.value),value:a}),n.createElement(F,null,n.createElement(A,{onClick:()=>{localStorage.setItem(y.names.scratchpad,a),o.postProfile({scratchpad:a}).then(e=>{}).catch(e=>{V("Cannot update profile:",e)})}},"Save")))};ce.propTypes={};const ue=s.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`,de=e=>{let{children:r,...o}=e;const{listItems:a}=o,[l,s]=n.useState(!1),[c,u]=t.useState(!1),d=i.useHistory();return n.createElement(t.Fragment,null,o.variant===y.variants.floating?n.createElement(p,{onClick:()=>s(!0),style:{position:"absolute",top:0,left:0,margin:".5em",zIndex:1},"aria-label":"main menu"},n.createElement(J,null)):n.createElement(J,{onClick:()=>s(!0)}),n.createElement(m,{anchor:"left",open:l,onClose:()=>s(!1)},n.createElement(ue,null,n.createElement(g,null,a.map(e=>{let{label:t,key:r,path:o}=e;return n.createElement(h,{button:!0,key:r,onClick:()=>{s(!1),d.push(o())}},t)})),r)))};de.propTypes={listItems:l.array.isRequired,variant:l.string},process.env.REACT_APP_SERVE&&r.render(n.createElement(ee,null),document.getElementById("root")),exports.Actions=F,exports.AuthContext=Q,exports.AuthContextProvider=X,exports.CloseBtn=U,exports.FlexCol=z,exports.FlexRow=D,exports.LoginModal=Y,exports.ModalHeader=H,exports.RegisterModal=Z,exports.Scratchpad=ce,exports.SideMenu=de,exports.jwtManager=ie,exports.logg=V;
//# sourceMappingURL=index.jsx.js.map
