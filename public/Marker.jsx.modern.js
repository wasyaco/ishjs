import n from"react";import"ionicons/icons";import"@material-ui/core";import e from"@material-ui/core/Box";import{ChevronLeft as r,ChevronRight as o,Menu as i}from"@material-ui/icons";import"prop-types";import"react-router-dom";import t from"styled-components";import d from"axios";function a(n,e){return e||(e=n.slice(0)),n.raw=e,n}var m,l,c,s,u,p,h,f,x,g,v,b,w,y;d.create({}),t.div(m||(m=a(["\n\n  // @TODO: this should use variables, for Modal inner size.\n  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.\n  position: fixed; // for GalleriesShow\n  top: 60px;\n  right: 60px;\n\n  display: flex;\n  flex-direction: row-reverse;\n"]))),t.div(l||(l=a(["\n  margin-right: 5px;\n  cursor: pointer;\n"]))),t.div(c||(c=a(["\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  padding: .3em 1em;\n"]))),t(r)(s||(s=a(["\n  color: ","\n"])),function(n){return n.theme.colors.text}),t(o)(u||(u=a(["\n  color: ","\n"])),function(n){return n.theme.colors.text}),t(e)(p||(p=a(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ",";\n\n  display: flex;\n  flex-direction: column;\n"])),function(n){return n.cursor?n.cursor:"auto"}),t.div(h||(h=a(["\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin: auto .4em; // @TODO: standardize this size!\n  }\n"]))),t.div(f||(f=a(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!\n  }\n"]))),t.div(x||(x=a(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"]))),t(i)(g||(g=a(["\n  color: ","\n"])),function(n){return n.theme.colors.text}),t.div(v||(v=a(["\n  flex-grow: 1;\n  text-align: center;\n  font-size: 1.2rem;\n"]))),t.div(b||(b=a(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])),function(n){return n.theme.thinBorder},function(n){return n.theme.thinBorderRadius},function(n){return n.theme.colors.cardBackground}),t.div(w||(w=a(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  color: ",";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])),function(n){return n.theme.thinBorder},function(n){return n.theme.thinBorderRadius},function(n){return n.theme.colors.cardBackground},function(n){return n.theme.colors.text}),t.div(y||(y=a(["\n  height: 100vh;\n"]))),n.createContext({});export default function(e){var r,o,i;r=e,void 0===(o="Marker")&&(o=""),void 0===i&&(i=null),(i="string"==typeof i?i:o.replace(/\W/g,"")).length>0&&"undefined"!=typeof window&&(window[i]=r),console.log("+++ "+o+":",r);var t=e.label;return n.createElement(n.Fragment,null,n.createElement("div",{className:"Card",style:{border:"1px solid red",borderRadius:"10px",padding:"10px",maxWidth:"400px"}},"I am a marker! Label: `",void 0===t?"<none>":t,"`."))}
//# sourceMappingURL=Marker.jsx.modern.js.map
