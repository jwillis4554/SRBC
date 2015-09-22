define(['plugins/dialog', 'knockout',"toastr"], function (dialog, ko,toastr) {

    var constructor = function () {
        var self = this;
        self.Email = ko.observable(null).extend({ email: true,required:true });;

        self.vm = ko.validatedObservable({
            Email: self.Email
        });

        self.postEmail = function () {
            $.post("/api/SignUp/MailingListSignUp/", { '': self.Email() }).done(function () {
                dialog.close(self, null);
                toastr.success('Success! You will now be kept up to date.');
            }).fail(function () {
                toastr.error('Oops! Something went wrong, please try again.');
            });
        };
    };



    constructor.prototype.SubmitEmail = function () {
        var self = this;
        if (!self.vm.isValid()) {
            self.vm.errors.showAllMessages();
            return;
        }
        self.postEmail();
    }

    constructor.show = function () {
        return dialog.show(new constructor());
    };

    return constructor;
});