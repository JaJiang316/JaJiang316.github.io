$(document).ready(function() {

    //Get location

    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos){
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('error');
    }

    function weather(lat, long) {
        let url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`
        $.getJSON(url, function(data) {
            console.log(data)
            updateDOM(data);
        })
    }


    function updateDOM(data) {
        let city = data.name;
        let temp = Math.round(data.main.temp);
        let desc = data.weather[0].description;
        let icon = data.weather[0].icon;
        console.log(desc)
        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
        $('#humid').html("Humidity: " + data.main.humidity);
        $('#pressure').html("Pressure: " + data.main.pressure);
        $('#feels_like').html("Feels Like: " + data.main.feels_like);
        $('#speed').html("Wind Speed: " + data.wind.speed);

    }
});