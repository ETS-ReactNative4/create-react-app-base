(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{435:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(4);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=s(t).call(this,e))||"object"!==i(o)&&"function"!==typeof o?f(r):o).state={cSelected:[]},n.onRadioBtnClick=n.onRadioBtnClick.bind(f(f(n))),n.onCheckboxBtnClick=n.onCheckboxBtnClick.bind(f(f(n))),n}var n,r,p;return n=t,(r=[{key:"onRadioBtnClick",value:function(e){this.setState({rSelected:e})}},{key:"onCheckboxBtnClick",value:function(e){var t=this.state.cSelected.indexOf(e);t<0?this.state.cSelected.push(e):this.state.cSelected.splice(t,1),this.setState({cSelected:l(this.state.cSelected)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h5",null,"Radio Buttons"),o.a.createElement(c.g,null,o.a.createElement(c.e,{color:"primary",onClick:function(){return e.onRadioBtnClick(1)},active:1===this.state.rSelected},"One"),o.a.createElement(c.e,{color:"primary",onClick:function(){return e.onRadioBtnClick(2)},active:2===this.state.rSelected},"Two"),o.a.createElement(c.e,{color:"primary",onClick:function(){return e.onRadioBtnClick(3)},active:3===this.state.rSelected},"Three")),o.a.createElement("p",null,"Selected: ",this.state.rSelected),o.a.createElement("h5",null,"Checkbox Buttons"),o.a.createElement(c.g,null,o.a.createElement(c.e,{color:"primary",onClick:function(){return e.onCheckboxBtnClick(1)},active:this.state.cSelected.includes(1)},"One"),o.a.createElement(c.e,{color:"primary",onClick:function(){return e.onCheckboxBtnClick(2)},active:this.state.cSelected.includes(2)},"Two"),o.a.createElement(c.e,{color:"primary",onClick:function(){return e.onCheckboxBtnClick(3)},active:this.state.cSelected.includes(3)},"Three")),o.a.createElement("p",null,"Selected: ",JSON.stringify(this.state.cSelected)))}}])&&u(n.prototype,r),p&&u(n,p),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");a(e.prototype,t&&t.prototype),t&&a(e,t)}(t,e),t}(r.Component);t.default=p}}]);
//# sourceMappingURL=194.4e299490.chunk.js.map