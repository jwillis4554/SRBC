define(['plugins/dialog'], function (dialog) {

    dialog.addContext('bootstrap', {
        addHost: function (dialogInstance) {
            var body = $('body'),
                host = $('<div class="modal fade"><div class="modal-dialog noPadding"><div class="modal-content"></div></div></div>');
            host.appendTo(body);
            dialogInstance.host = host.find('.modal-content').get(0);
            dialogInstance.modalHost = host;
        },
        removeHost: function (dialogInstance) {
            $(dialogInstance.modalHost).modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        },
        compositionComplete: function (child, parent, context) {
            var dialogInstance = dialog.getDialog(context.model),
                $child = $(child);
            if ($child.hasClass('autoclose')) {
                $(dialogInstance.modalHost).modal({ keyboard: false, show: true });
            } else {
                $(dialogInstance.modalHost).modal({ backdrop: 'static', keyboard: false, show: true });
            }
            
            //Setting a short timeout is need in IE8, otherwise we could do this straight away
            setTimeout(function () {
                $child.find('.autofocus').first().focus();
            }, 1);
            if ($child.hasClass('autoclose') || context.model.autoclose) {
                $(dialogInstance.blockout).click(function () {
                    dialogInstance.close();
                });
            }
        }
    });
    //rebind dialog.show to default to a new context
    var oldShow = dialog.show;
    dialog.show = function (obj, data, context) {
        return oldShow.call(dialog, obj, data, context || 'bootstrap');
    };
});