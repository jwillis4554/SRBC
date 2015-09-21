

$(document).ready(function() {

        'use strict';

    // CENTERED MODALS
    // phase one - store every dialog's height
        $('.modal').each(function () {
        var t = $(this),
            d = t.find('.modal-dialog'),
            fadeClass = (t.is('.fade') ? 'fade' : '');
        // render dialog
        t.removeClass('fade')
            .addClass('invisible')
            .css('display', 'block');
        // read and store dialog height
        d.data('height', d.height());
        // hide dialog again
        t.css('display', '')
            .removeClass('invisible')
            .addClass(fadeClass);
    });


    ageCheck();

    $("#example, body").vegas({
        transition: 'fade',
        delay:7000,
        transitionDuration: 5000,
        preload:true,
        slides: [
            { src: 'image/background.jpg' },
        { src: 'image/background1.jpg' },
        { src: 'image/background2.jpg' }
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


	var myLatlng = new google.maps.LatLng(33.465343, -81.962797);
	var mapOptions = {
	  zoom: 14,
	  center: myLatlng,
	  navigationControl: false,
	  mapTypeControl: false,
	  scaleControl: false,
	  draggable: true,
	  scrollwheel: false
	}

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title:"Savannah River Brewing Company"
	});

	
	$("#contact").on("shown.bs.modal", function () {
		google.maps.event.trigger(map, "resize");
		map.setCenter(myLatlng);
	});


	$("#signUpSubmit").click(function () {
 
	});
	
});

$(window).resize(function() {	
	$("#DateCountdown").TimeCircles().rebuild(); 
});


function ageCheck() {
    var ageVerified = checkAgeCookie();
    if (!ageVerified) {
        $('#AgeCheck').on('show.bs.modal', function () {
            var t = $(this),
                d = t.find('.modal-dialog'),
                dh = d.data('height'),
                w = $(window).width(),
                h = $(window).height();
            // if it is desktop & dialog is lower than viewport
            // (set your own values)
            if (w > 380 && (dh + 60) < h) {
                d.css('margin-top', Math.round(0.96 * (h - dh) / 2));
            } else {
                d.css('margin-top', '');
            }
        });

        $('#AgeCheck').modal({
            keyboard: false,
            show: true,
            backdrop: 'static',
        });
        $('#AgeCheck').data('bs.modal').$backdrop.css('background-color', 'white');
        $("#AgeCheckYes").click(function () {
            setAgeCookie("SRBC", "AgeVerify", 90);
            $('#AgeCheck').modal("hide");
        });

        $("#AgeCheckNo").click(function () {
            $("#ageCheckTitle").html("Thank you for visiting");
            $("#ageCheckMessage").html("We look forward to providing you with delicious beer <br/> When you are of legal age.");
            $("#AgeCheckYes").hide();
            $("#AgeCheckNo").hide();
        });
    }
}


function setAgeCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function checkAgeCookie() {
    var ageCheck = getCookie("SRBC");
    return ageCheck != "";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}



