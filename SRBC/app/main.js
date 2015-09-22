requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../scripts/knockout-3.2.0',
        'komapping': '../scripts/knockout.mapping-latest',
        'koValidation': '../scripts/knockout.validation',
        'bootstrap': '../Scripts/bootstrap',
        'jquery': '../Scripts/jquery-2.1.3',
        'vegas': '../plugins/vegas/js/vegas',
        'timeCircles': '../plugins/time-circles/TimeCircles',
        'toastr': '../Scripts/toastr',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        komapping: {
            deps: ['knockout'],
            exports: 'komapping'
        }
    }
});



define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'plugins/bootstrapDialog', 'knockout', "koValidation", "toastr"], function (system, app, viewLocator, bsDialog, ko, koValidation, toastr) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    app.title = 'Savannah River Brewing Co.';

    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');

    });
    if (typeof (toastr) != "undefined") {
        toastr.options = {
            'closeButton': false,
            'debug': false,
            'positionClass': 'toast-top-center',
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'timeOut': '5000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        };
    }

    ko.validation.init({
        insertMessages: true,
        decorateInputElement: true,
        errorClass: 'has-error',
        errorElementClass: 'has-error',
        grouping: {
            observable: true,
        }
    });
});