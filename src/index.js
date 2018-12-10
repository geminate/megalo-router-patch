import {go, back, push, replace} from './utils/methods';
import {parseRoute} from './utils/query'

let _Vue;

const routerPatch = {
    install(Vue, options) {

        if (this.installed && _Vue === Vue) return;
        this.installed = true;
        _Vue = Vue;

        let _route = {};
        let _router = {};

        const handleMixin = (that) => {
            if (that.$parent) return;
            const {$mp} = that.$root;
            _route = parseRoute($mp);
            _router = {
                app: that,
                mode: 'history',
                currentRoute: _route,
                push: (location, complete, fail, success) => push(location, complete, fail, success, $mp.platform),
                replace: (location, complete, fail, success) => replace(location, complete, fail, success, $mp.platform),
                go: (delta) => go(delta, $mp.platform),
                back: () => back($mp.platform)
            };
        };

        Vue.mixin({
            onShow() {
                handleMixin(this);
            },
            created() {
                handleMixin(this);
            }
        });

        Object.defineProperty(Vue.prototype, '$router', {
            get() {
                return _router;
            }
        });

        Object.defineProperty(Vue.prototype, '$route', {
            get() {
                return _route;
            }
        });
    }
};


export default routerPatch;
