define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'', moduleId: 'viewmodels/welcome', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});