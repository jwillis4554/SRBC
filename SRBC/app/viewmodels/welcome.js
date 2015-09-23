define(['durandal/app', 'knockout', 'bootstrap', 'vegas', 'timeCircles', './subscribeModal', './contactModal', './beerModal', './ageCheckModal'],
    function (app, ko, boot, vegas, timeCircles, subscribeModal, contactModal, beerModal, ageCheckModal) {
        var retrieveAgeValidationCookie = function () {
            return getCookie("SRBC") != "";
        }

        var getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }

        $(window).resize(function () {
            $("#DateCountdown").TimeCircles().rebuild();
        });


        return {

            signMeUp: function () {
                subscribeModal.show().then(function (response) {
                });
            },
            contact: function () {
                contactModal.show().then(function (response) {
                });
            },
            beer: function () {
                beerModal.show().then(function (response) {
                });
            },
            activate: function () {
                var ageValidated = retrieveAgeValidationCookie();
                if (!ageValidated) {
                    ageCheckModal.show().then(function () {
                    });
                }
            },
            bindingComplete: function () {
                $("body").vegas({
                    transition: 'fade',
                    delay: 7000,
                    transitionDuration: 5000,
                    preload: false,
                    timer:false,
                    slides: [
                        { src: 'Images/background.jpg' },
                    { src: 'Images/background1.jpg' },
                    { src: 'Images/background2.jpg' }
                    ],
                    overlay: 'plugins/vegas/overlays/06.png'
                });

                $("#DateCountdown").TimeCircles({
                    "animation": "ticks",
                    "bg_width": 0.2,
                    "fg_width": 0.016666666666666666,
                    "circle_bg_color": "#F5F5F5",
                    "time": {
                        "Days": {
                            "text": "Days",
                            "color": "#FFF",
                            "show": true
                        },
                        "Hours": {
                            "text": "Hours",
                            "color": "#FFF",
                            "show": true
                        },
                        "Minutes": {
                            "text": "Minutes",
                            "color": "#FFF",
                            "show": true
                        },
                        "Seconds": {
                            "text": "Seconds",
                            "color": "#FFF",
                            "show": true
                        }
                    }
                });
            }
        }
    });
