_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,n,t){t("74v/"),e.exports=t("nOHt")},"74v/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("cha2")}])},cha2:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("7O5W"),o=t("vOnD");function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function c(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n)}t("17x9");function l(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var u=t("i8i4"),p=t.n(u),d=!1,f=r.a.createContext(null),m="unmounted",h="exited",g="entering",E="entered",v="exiting",x=function(e){function n(n,t){var a;a=e.call(this,n,t)||this;var r,i=t&&!t.isMounting?n.enter:n.appear;return a.appearStatus=null,n.in?i?(r=h,a.appearStatus=g):r=E:r=n.unmountOnExit||n.mountOnEnter?m:h,a.state={status:r},a.nextCallback=null,a}c(n,e),n.getDerivedStateFromProps=function(e,n){return e.in&&n.status===m?{status:h}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==g&&t!==E&&(n=g):t!==g&&t!==E||(n=v)}this.updateStatus(!1,n)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,n,t,a=this.props.timeout;return e=n=t=a,null!=a&&"number"!==typeof a&&(e=a.exit,n=a.enter,t=void 0!==a.appear?a.appear:n),{exit:e,enter:n,appear:t}},t.updateStatus=function(e,n){void 0===e&&(e=!1),null!==n?(this.cancelNextCallback(),n===g?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===h&&this.setState({status:m})},t.performEnter=function(e){var n=this,t=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[p.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),c=a?s.appear:s.enter;!e&&!t||d?this.safeSetState({status:E},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:g},(function(){n.props.onEntering(i,o),n.onTransitionEnd(c,(function(){n.safeSetState({status:E},(function(){n.props.onEntered(i,o)}))}))})))},t.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),a=this.props.nodeRef?void 0:p.a.findDOMNode(this);n&&!d?(this.props.onExit(a),this.safeSetState({status:v},(function(){e.props.onExiting(a),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:h},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:h},(function(){e.props.onExited(a)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},t.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(a){t&&(t=!1,n.nextCallback=null,e(a))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:p.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(t&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},t.render=function(){var e=this.state.status;if(e===m)return null;var n=this.props,t=n.children,a=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,l(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(f.Provider,{value:null},"function"===typeof t?t(e,a):r.a.cloneElement(r.a.Children.only(t),a))},n}(r.a.Component);function b(){}x.contextType=f,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},x.UNMOUNTED=m,x.EXITED=h,x.ENTERING=g,x.ENTERED=E,x.EXITING=v;var C,y,N=x;var w="out-in",k="in-out",O=function(e,n,t){return function(){var a;e.props[n]&&(a=e.props)[n].apply(a,arguments),t()}},_=((C={})[w]=function(e){var n=e.current,t=e.changeState;return r.a.cloneElement(n,{in:!1,onExited:O(n,"onExited",(function(){t(g,null)}))})},C[k]=function(e){var n=e.current,t=e.changeState,a=e.children;return[n,r.a.cloneElement(a,{in:!0,onEntered:O(a,"onEntered",(function(){t(g)}))})]},C),S=((y={})[w]=function(e){var n=e.children,t=e.changeState;return r.a.cloneElement(n,{in:!0,onEntered:O(n,"onEntered",(function(){t(E,r.a.cloneElement(n,{in:!0}))}))})},y[k]=function(e){var n=e.current,t=e.children,a=e.changeState;return[r.a.cloneElement(n,{in:!1,onExited:O(n,"onExited",(function(){a(E,r.a.cloneElement(t,{in:!0}))}))}),r.a.cloneElement(t,{in:!0})]},y),j=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).state={status:E,current:null},n.appeared=!1,n.changeState=function(e,t){void 0===t&&(t=n.state.current),n.setState({status:e,current:t})},n}c(n,e);var t=n.prototype;return t.componentDidMount=function(){this.appeared=!0},n.getDerivedStateFromProps=function(e,n){return null==e.children?{current:null}:n.status===g&&e.mode===k?{status:g}:!n.current||(t=n.current,a=e.children,t===a||r.a.isValidElement(t)&&r.a.isValidElement(a)&&null!=t.key&&t.key===a.key)?{current:r.a.cloneElement(e.children,{in:!0})}:{status:v};var t,a},t.render=function(){var e,n=this.props,t=n.children,a=n.mode,i=this.state,o=i.status,s=i.current,c={children:t,current:s,changeState:this.changeState,status:o};switch(o){case g:e=S[a](c);break;case v:e=_[a](c);break;case E:e=s}return r.a.createElement(f.Provider,{value:{isMounting:!this.appeared}},e)},n}(r.a.Component);j.propTypes={},j.defaultProps={mode:w};var L=j;function T(){return(T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function I(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var D=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return a=n,void((t=e).classList?t.classList.remove(a):"string"===typeof t.className?t.className=I(t.className,a):t.setAttribute("class",I(t.className&&t.className.baseVal||"",a)));var t,a}))},F=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,t){var a=n.resolveArguments(e,t),r=a[0],i=a[1];n.removeClasses(r,"exit"),n.addClass(r,i?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,t)},n.onEntering=function(e,t){var a=n.resolveArguments(e,t),r=a[0],i=a[1]?"appear":"enter";n.addClass(r,i,"active"),n.props.onEntering&&n.props.onEntering(e,t)},n.onEntered=function(e,t){var a=n.resolveArguments(e,t),r=a[0],i=a[1]?"appear":"enter";n.removeClasses(r,i),n.addClass(r,i,"done"),n.props.onEntered&&n.props.onEntered(e,t)},n.onExit=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"appear"),n.removeClasses(t,"enter"),n.addClass(t,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var t=n.resolveArguments(e)[0];n.addClass(t,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"exit"),n.addClass(t,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,t){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,t]},n.getClassNames=function(e){var t=n.props.classNames,a="string"===typeof t,r=a?""+(a&&t?t+"-":"")+e:t[e];return{baseClassName:r,activeClassName:a?r+"-active":t[e+"Active"],doneClassName:a?r+"-done":t[e+"Done"]}},n}c(n,e);var t=n.prototype;return t.addClass=function(e,n,t){var a=this.getClassNames(n)[t+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===t&&r&&(a+=" "+r),"active"===t&&e&&e.scrollTop,a&&(this.appliedClasses[n][t]=a,function(e,n){e&&n&&n.split(" ").forEach((function(n){return a=n,void((t=e).classList?t.classList.add(a):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(t,a)||("string"===typeof t.className?t.className=t.className+" "+a:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+a)));var t,a}))}(e,a))},t.removeClasses=function(e,n){var t=this.appliedClasses[n],a=t.base,r=t.active,i=t.done;this.appliedClasses[n]={},a&&D(e,a),r&&D(e,r),i&&D(e,i)},t.render=function(){var e=this.props,n=(e.classNames,l(e,["classNames"]));return r.a.createElement(N,T({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(r.a.Component);F.defaultProps={classNames:""},F.propTypes={};var A=F,P=t("YFqc"),R=t.n(P),M=t("wHSu"),z=t("IP2g"),q=t("8tEE"),V=r.a.createElement,X=o.c.div.withConfig({displayName:"menu__MenuDiv",componentId:"sc-1qxed30-0"})(["position:fixed;top:0;left:0;height:100vh;width:16rem;z-index:10;background-color:",";box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);transform:",";transition:transform 300ms ease-in-out;"],(function(e){return e.theme.white}),(function(e){return e.open?"translateX(0%)":"translateX(-100%)"})),H=o.c.div.withConfig({displayName:"menu__MenuContent",componentId:"sc-1qxed30-1"})(["display:flex;flex-direction:column;padding:3.75rem 1.75rem;*{margin:0.25rem 0;background-color:transparent;cursor:pointer;}"]),G=o.c.a.withConfig({displayName:"menu__MenuLink",componentId:"sc-1qxed30-2"})(["padding:0.5rem;border-radius:0.375rem;transition:300ms;&:hover{background-color:",";transform:scale(1.1);}"],(function(e){return e.theme.light})),U=o.c.div.withConfig({displayName:"menu__OutsideLinks",componentId:"sc-1qxed30-3"})(["display:flex;padding:0.2rem 0;border-top:2px solid ",";a{padding:0.5rem;border:none;border-radius:0.375rem;color:inherit;cursor:pointer;margin-right:0.5rem;}a:hover{background-color:",";transform:scale(1.1);}"],(function(e){return e.theme.light}),(function(e){return e.theme.light})),J=function(e){var n=e.open;return V(X,{open:n,"aria-label":"navigation menu drawer"},V(H,{"aria-label":"navigation menu inner content"},V(R.a,{href:"/"},V(G,{"aria-label":"link to home page"},"Home")),V(R.a,{href:"/projects"},V(G,{"aria-label":"link to projects page"},"Projects")),V(U,null,V("a",{href:"https://github.com/juntaolei","aria-label":"link to GitHub"},V(z.a,{icon:q.a,size:"lg","aria-label":"GitHub icon"})),V("a",{href:"https://www.linkedin.com/in/juntaolei","aria-label":"link to LinkedIn"},V(z.a,{icon:q.b,size:"lg","aria-label":"LinkedIn icon"})),V("a",{href:"mailto:contact@juntaolei.com","aria-label":"shortcut to email"},V(z.a,{icon:M.b,size:"lg","aria-label":"email icon"})))))},$=r.a.createElement,W=o.c.nav.withConfig({displayName:"navbar__Nav",componentId:"mdk61e-0"})(["position:sticky;display:flex;flex-direction:column;height:3.75rem;width:100%;padding:0;border-bottom:2px solid ",";box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);"],(function(e){return e.theme.light})),B=o.c.div.withConfig({displayName:"navbar__NavItems",componentId:"mdk61e-1"})(["display:flex;align-items:center;justify-content:space-between;margin:auto;width:100%;@media(min-width:768px){max-width:768px;}@media(max-width:768px){padding:0 1rem;}"]),Y=o.c.a.withConfig({displayName:"navbar__Title",componentId:"mdk61e-2"})(["font-weight:200;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;"]),K=o.c.button.withConfig({displayName:"navbar__IconBtn",componentId:"mdk61e-3"})(["padding:0.5rem;border:none;border-radius:0.375rem;background-color:transparent;transition:background-color 300ms ease-in-out;cursor:pointer;&:hover{background-color:",";}&:focus{outline:none;}"],(function(e){return e.theme.light})),Q=function(e){var n=e.open,t=e.toggleMenu,r=Object(a.createRef)(),i=Object(a.createRef)();return Object(a.useEffect)((function(){r.current&&i.current&&(r.current.classList.toggle("underlay",n),i.current.classList.toggle("disabled",n))}),[n]),$(W,{ref:r,"aria-label":"main navigation"},$(B,{"aria-label":"navigation items"},$(R.a,{href:"/"},$(Y,{"aria-label":"site brand"},"Jun Tao Lei")),$(K,{ref:i,onClick:t,"aria-label":"menu button"},$(z.a,{icon:M.a,size:"lg","aria-label":"menu button icon"}))))},Z=r.a.createElement,ee=o.c.div.withConfig({displayName:"layout__Div",componentId:"awh0fm-0"})(["height:100vh;width:100%;margin:0;padding:0;"]),ne=o.c.main.withConfig({displayName:"layout__Main",componentId:"awh0fm-1"})(["margin:0 auto;height:calc(100% - 3.75rem);@media(min-width:768px){max-width:768px;}@media(max-width:768px){padding:0 1rem;}"]),te=function(e){var n,t,r=e.children,i=Object(a.createRef)(),o=Object(a.useRef)(null),s=Object(a.useState)(!1),c=s[0],l=s[1];return n=o,t=function(){return l(!1)},Object(a.useEffect)((function(){var e=function(e){n.current&&e.target&&n.current.contains(e.target)||t()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n,t]),Object(a.useEffect)((function(){i.current&&i.current.classList.toggle("underlay",c)}),[c,i]),Z(ee,{"aria-label":"main layout"},Z(Q,{open:c,toggleMenu:function(){return l(!0)}}),Z("div",{ref:o,"aria-label":"menu container"},Z(J,{open:c})),Z(ne,{ref:i},r))},ae=(t("VAPu"),r.a.createElement);function re(){var e,n,t=(e=['\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: "Fira Sans", sans-serif;\n  }\n\n  .disabled {\n    pointer-events: none;\n  }\n\n  .underlay {\n    opacity: 0.5;\n  }\n\n  .fade-enter {\n    opacity: 0;\n  }\n\n  .fade-exit {\n    opacity: 1;\n  }\n\n  .fade-enter-active {\n    opacity: 1;\n  }\n\n  .fade-exit-active {\n    opacity: 0;\n  }\n\n  .fade-enter-active, .fade-exit-active {\n    transition: opacity 300ms;\n  }\n'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return re=function(){return t},t}i.a.autoAddCss=!1;var ie={white:"#FFFFFF",light:"#F7FAFC",dark:"#1F2232",sizzlingred:"#FF5A5F",slateblue:"#645DD7",brightblue:"#3F62DC"},oe=Object(o.b)(re());n.default=function(e){var n=e.Component,t=e.pageProps,a=e.router;return ae(o.a,{theme:ie},ae(L,null,ae(A,{key:a.route,classNames:"fade",addEndListener:function(e,n){return e.addEventListener("transitionend",n,!1)}},ae(te,null,ae(n,t)))),ae(oe,null))}}},[[0,0,1,6,5,3,2,4,13]]]);