let longitude;
let latitude;
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    var altStr='';
    altStr+=('Your current position is:');
    altStr+=('Latitude : ' + crd.latitude);
    altStr+=('Longitude: ' + crd.longitude);
    altStr+=('More or less ' + crd.accuracy + ' meters.');

    longitude=crd.latitude;
    latitude=crd.longitude;
    alert(altStr);
};

function error(err) {
    var altStr=('ERROR(' + err.code + '): ' + err.message);
    alert(altStr);
};

navigator.geolocation.getCurrentPosition(success, error, options);

export default {
    longitude,
    latitude
}
