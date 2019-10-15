/*
* ===========================================================
* GOOGLE MAPS - FRAMEWORK Y
* ===========================================================
* Google Maps script for show Google maps in different ways
* The script require maps.googleapis.com/maps/api/js script
* Documentation: www.framework-y.com/components/components.html#google-maps
* 
* Schiocco - Copyright (c) Federico Schiocchet - Schiocco - Framework Y
*/

"use strict";
(function ($) {
    $.fn.googleMap = function (n) {
        if ($(this).attr("data-trigger") != "initialized") {
            var arrGmap = getAttrs(this);
            if (isEmpty(arrGmap["coords"])) {
                initializeGMapByAdress(this);
            } else initializeGMap(this);
            $(this).attr("data-trigger", "initialized");
        }
    };
    function getAttrs(obj) {
        var arrGmap = {};
        arrGmap["coords"] = $(obj).attr("data-coords");
        arrGmap["address"] = $(obj).attr("data-address");
        arrGmap["marker"] = $(obj).attr("data-marker");
        arrGmap["marker-pos"] = $(obj).attr("data-marker-pos");
        arrGmap["marker-pos-top"] = $(obj).attr("data-marker-pos-top");
        arrGmap["marker-pos-left"] = $(obj).attr("data-marker-pos-left");
        arrGmap["skin"] = $(obj).attr("data-skin");
        arrGmap["zoom"] = $(obj).attr("data-zoom");
        if (isEmpty(arrGmap["zoom"])) arrGmap["zoom"] = 12;
        if (isEmpty(arrGmap["marker-pos-top"])) arrGmap["marker-pos-top"] = 0;
        if (isEmpty(arrGmap["marker-pos-left"])) arrGmap["marker-pos-left"] = 0;
        return arrGmap;
    }
    function initializeGMap(obj) {
        var arrGmap = getAttrs(obj);
        var cx = parseFloat(arrGmap["coords"].split(",")[0]);
        var cy = parseFloat(arrGmap["coords"].split(",")[1]);
        var geocoder, GMap;
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(cx, cy);
        var mapOptions = {
            zoom: parseInt(arrGmap["zoom"], 10),
            scrollwheel: false,
            center: latlng
        }
        GMap = new google.maps.Map(obj.get(0), mapOptions);
        if (!isEmpty(arrGmap["skin"])) GMap.setOptions({ styles: arrSkins[arrGmap["skin"]] });
        var arrMarker = {
            position: latlng,
            map: GMap,
        };
        if (!isEmpty(arrGmap["marker"])) arrMarker = { position: latlng, map: GMap, icon: arrGmap["marker"] };
        var marker = new google.maps.Marker(arrMarker);

        var x = 0 - arrGmap["marker-pos-left"];
        var y = 0 - arrGmap["marker-pos-top"];
        var w = $(window).width();
        if (!isEmpty(arrGmap["marker-pos"]) && w > 993) {
            var p = arrGmap["marker-pos"];
            if (p == 'col-md-6-right') x = x - 1 * $(".col-md-6").outerWidth() / 2;
            else if (p == 'col-md-6-left') x = x + $(".col-md-6").outerWidth() / 2;
            else if (p == 'center-bottom') y = y - 1 * $(obj).outerHeight() / 4 - 30;
            else if (p == 'center-top') y = y + $(obj).outerHeight() / 2 - 60;
        }
        if (w < 994) x = 0;
        if (w > 993 || isEmpty(p)) GMap.panBy(x, y);
    }
    function initializeGMapByAdress(obj) {
        var arrGmap = getAttrs(obj);
        var geocoder;
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': arrGmap["address"] }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                $(obj).attr("data-coords", results[0].geometry.location.lat() + "," + results[0].geometry.location.lng());
                initializeGMap(obj);
            }
        });
    }
    $(document).ready(function () {
        $(".google-map").each(function (index) {
            if ($(this).attr("data-trigger") != "manual") $(this).googleMap();
        });
    });
    var arrSkins = {
        "gray": [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
        "black": [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }],
        "green": [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "weight": "2.00" }] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [{ "color": "#9c9c9c" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7b7b7b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c8d7d4" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#070707" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }]
    };

}(jQuery));

