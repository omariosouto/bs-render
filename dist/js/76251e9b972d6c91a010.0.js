webpackJsonp([0],{415:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(6),r=l(a),i=l(n(151)),s=l(n(107)),u=l(n(152));function l(t){return t&&t.__esModule?t:{default:t}}n(416);var c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return"undefined"==typeof window?(console.log("No server:",t.staticContext.initialData.userInfo.login),n.state={userInfo:t.staticContext.initialData.userInfo,tweets:t.staticContext.initialData.tweets}):n.state={userInfo:window.__initialData__.userInfo||{},tweets:window.__initialData__.tweets||[]},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),o(e,[{key:"componentDidMount",value:function(){var t=this;this.state.userInfo.login||fetch("http://twitelum-api.herokuapp.com/usuarios/omariosouto").then(function(t){return t.json()}).then(function(e){t.setState({userInfo:e})}),0===this.state.tweets.length&&fetch("http://twitelum-api.herokuapp.com/usuarios/omariosouto/tweets").then(function(t){return t.json()}).then(function(e){t.setState({tweets:e})})}},{key:"render",value:function(){return r.default.createElement("div",{className:"ListTweets"},r.default.createElement(i.default,{title:"ListTweets - React Charger"}),r.default.createElement("header",{className:"ListTweets-header"},r.default.createElement("img",{src:u.default,className:"ListTweets-logo",alt:"logo"}),r.default.createElement("h1",{className:"ListTweets-title"},"Welcome to React, this is an async component that still server render")),r.default.createElement(s.default,null),r.default.createElement("p",{className:"ListTweets-intro"},"To get started, edit ",r.default.createElement("code",null,"src/pages/ListTweets/index.js")," and save to reload."),r.default.createElement("div",null,"Login: ",this.state.userInfo&&this.state.userInfo.login,r.default.createElement("ul",null,this.state.tweets&&this.state.tweets.map(function(t,e){return r.default.createElement("li",{key:e},t.conteudo)}))))}}],[{key:"componentInitialData",value:function(){return{userInfo:fetch("http://twitelum-api.herokuapp.com/usuarios/omariosouto").then(function(t){return t.json()}),tweets:fetch("http://twitelum-api.herokuapp.com/usuarios/omariosouto/tweets").then(function(t){return t.json()})}}}]),e}();e.default=c},416:function(t,e,n){var o=n(417);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(413)(o,a);o.locals&&(t.exports=o.locals)},417:function(t,e,n){(t.exports=n(412)(!1)).push([t.i,".ListTweets{text-align:center}.ListTweets-logo{animation:ListTweets-logo-spin infinite 20s linear;height:80px}.ListTweets-header{background-color:#222;height:150px;padding:20px;color:#fff}.ListTweets-title{font-size:1.5em}.ListTweets-intro{font-size:large}@keyframes ListTweets-logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])}});