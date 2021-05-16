class Amodules {
    constructor() {
        this.modulesStore = {};
    }

    /**
     * @param {String} name
     * @param {String[]} [deps]
     * @param {Function} fn
     */
    define(name, deps, fn) {
        this.modulesStore[name] = {
            name,
            deps,
            fn: () => {
                return new Promise((resolve) => {
                    if (!deps.length) return fn(resolve);

                    this.require(deps, (...res) => {
                        fn(resolve, ...res);
                    });
                });
            },
        };
    }

    /**
     * @param {String[]} modules
     * @param {Function} cb
     */
    require(modules, cb) {
        const pendingModules = [];
        modules.forEach((moduleName) => {
            pendingModules.push(this.modulesStore[moduleName].fn());
        });

        Promise.all(pendingModules).then((res) => {
            cb(...res);
        });
    }
}

export default new Amodules();
