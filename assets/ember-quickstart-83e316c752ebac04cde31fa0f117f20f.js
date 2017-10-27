"use strict";define("ember-quickstart/app",["exports","ember","ember-quickstart/resolver","ember-load-initializers","ember-quickstart/config/environment"],function(e,t,i,a,n){var r=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,r=t.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:i.default}),(0,a.default)(r,n.default.modulePrefix),e.default=r}),define("ember-quickstart/components/people-list",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{showPerson:function(e){alert(e)}}})}),define("ember-quickstart/helpers/app-version",["exports","ember","ember-quickstart/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i,a){function n(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?r.match(a.versionRegExp)[0]:t.hideVersion?r.match(a.shaRegExp)[0]:r}e.appVersion=n;var r=i.default.APP.version;e.default=t.default.Helper.helper(n)}),define("ember-quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-quickstart/config/environment"],function(e,t,i){var a=i.default.APP,n=a.name,r=a.version;e.default={name:"App Version",initialize:(0,t.default)(n,r)}}),define("ember-quickstart/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-quickstart/initializers/data-adapter",["exports"],function(e){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("ember-quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/initializers/export-application-global",["exports","ember","ember-quickstart/config/environment"],function(e,t,i){function a(){var e=arguments[1]||arguments[0];if(!1!==i.default.exportApplicationGlobal){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var n,r=i.default.exportApplicationGlobal;n="string"==typeof r?r:t.default.String.classify(i.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("ember-quickstart/initializers/injectStore",["exports"],function(e){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("ember-quickstart/initializers/store",["exports"],function(e){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("ember-quickstart/initializers/transforms",["exports"],function(e){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("ember-quickstart/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-quickstart/router",["exports","ember","ember-quickstart/config/environment"],function(e,t,i){var a=t.default.Router.extend({location:i.default.locationType,rootURL:i.default.rootURL});a.map(function(){this.route("scientists"),this.route("programmers")}),e.default=a}),define("ember-quickstart/routes/programmers",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return["Bill Gates","Steve Jobs","Mark Zuckerberg","Mike Finneran","Scott Davidson","Jessica","Tony","Maria","Vitorio"]}})}),define("ember-quickstart/routes/scientists",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return["Albert Einstein","Isaac Newton","Galileo Galilei","Nicolau Copernico","Stephen Hawking","Linus Pauling","Marie Curie"]}})}),define("ember-quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-quickstart/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"2nT0cEj6",block:'{"statements":[["open-element","h1",[]],["flush-element"],["text"," People Tracker "],["close-element"],["text","\\n\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"ember-quickstart/templates/application.hbs"}})}),define("ember-quickstart/templates/components/people-list",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"DwDCv941",block:'{"statements":[["append",["unknown",["title"]],false],["text","\\n\\n"],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["people"]]],null,0],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","li",[]],["modifier",["action"],[["get",[null]],"showPerson",["get",["person"]]]],["flush-element"],["append",["get",["person"]],false],["close-element"],["text","\\n"]],"locals":["person"]}],"hasPartials":false}',meta:{moduleName:"ember-quickstart/templates/components/people-list.hbs"}})}),define("ember-quickstart/templates/programmers",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"AhjGjZZ3",block:'{"statements":[["append",["helper",["people-list"],null,[["title","people"],["List of Programmers",["get",["model"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"ember-quickstart/templates/programmers.hbs"}})}),define("ember-quickstart/templates/scientists",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"geOcU0hP",block:'{"statements":[["append",["helper",["people-list"],null,[["title","people"],["List of Scientists",["get",["model"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"ember-quickstart/templates/scientists.hbs"}})}),define("ember-quickstart/config/environment",["ember"],function(e){try{var t="ember-quickstart/config/environment",i=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),a=JSON.parse(unescape(i)),n={default:a};return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("ember-quickstart/app").default.create({name:"ember-quickstart",version:"0.0.0+756a8105"});