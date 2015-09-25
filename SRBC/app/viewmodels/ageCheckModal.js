define(['plugins/dialog', 'knockout'], function (dialog,ko) {

    var constructor = function () {
        var self = this;
        self.modalTitle = ko.observable("Are you at least 21 years old?");
        self.description = ko.observable("(You must be of legal drinking age to view the site.)");
        self.noSelection = ko.observable(true);
    };

    constructor.show = function () {
        return dialog.show(new constructor());
    };

    var createCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    constructor.prototype.agreeAgeValidation = function () {
        var self = this;
        createCookie("SRBC", "AgeVerify", 90);
        dialog.close(self, null);
    }

    constructor.prototype.rejectAgeValidation = function () {
        var self = this;
        self.modalTitle("Thank you for visiting");
        self.description("We look forward to providing you with delicious beer <br/> When you are of legal age.");
        self.noSelection(false);
    }

    constructor.prototype.attached = function (view, parent) {
        $(parent).parent().css("margin-top", "15%");
    }

    return constructor;
});