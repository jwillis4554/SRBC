define(['plugins/dialog'], function (dialog) {

    var constructor = function () {
    };


    constructor.show = function () {
        return dialog.show(new constructor());
    };

    return constructor;
});