/*!
 * CanJS - 2.3.0-pre.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Tue, 02 Jun 2015 20:00:57 GMT
 * Licensed MIT
 */

/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	global.System = {
		define: function(__name, __code){
			global.define = origDefine;
			eval("(function() { " + __code + " \n }).call(global);");
			global.define = ourDefine;
		},
		orig: global.System
	};
})({},window)
/*can@2.3.0-pre.0#view/href/href*/
define('can/view/href/href', [
    'can/util/util',
    'can/view/stache/mustache_core',
    'can/view/callbacks/callbacks',
    'can/view/scope/scope'
], function (can, mustacheCore) {
    var removeCurly = function (value) {
        if (value[0] === '{' && value[value.length - 1] === '}') {
            return value.substr(1, value.length - 2);
        }
        return value;
    };
    can.view.attr('can-href', function (el, attrData) {
        var attrInfo = mustacheCore.expressionData('tmp ' + removeCurly(el.getAttribute('can-href')));
        var routeHref = can.compute(function () {
                var hash = {};
                can.each(attrInfo.hash, function (val, key) {
                    if (val && val.hasOwnProperty('get')) {
                        hash[key] = attrData.scope.read(val.get, {}).value;
                    } else {
                        hash[key] = val;
                    }
                });
                return can.route.url(hash);
            });
        el.setAttribute('href', routeHref());
        var handler = function (ev, newVal) {
            el.setAttribute('href', newVal);
        };
        routeHref.bind('change', handler);
        can.bind.call(el, 'removed', function () {
            routeHref.unbind('change', handler);
        });
    });
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
	window.System = window.System.orig;
})();