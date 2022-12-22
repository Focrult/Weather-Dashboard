
const API_KEY = 'a412b2680d9895a41ef3d8276e079247'
let searchInput = document.getElementsByClassName('.search-input');
const newsearchInput = JSON.stringify(searchInput);
const CityCurrent = document.getElementById('city-name');
const currentTemp = document.getElementById("temperature");
const currentWind = document.getElementById("wind");
const currentHumidity = document.getElementById("humidity");
const fiveHeader = document.getElementById("fivedays");
var currentDay = document.getElementById("current-weather");
$(document).ready(function() {
$(".submit").click(function(){ 
    LiveWeather(); //activates when user clicks submit button
    const text = document.querySelector(".search-input").value;
    localStorage.setItem("search", $(".search-input").val());
    console.log(text);
     //Displays the day, the month, and the year
    // $("#placeholder-name").text(text);
});
$(".reset").click(function(){ //reset search input
    localStorage.clear();
    document.location.reload();
});
$(".search-input").val(localStorage.getItem("search"));
function LiveWeather(){
    text = $(".search-input").val();
    let API_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + text + "&units=metric&appid=" + API_KEY;
    console.log(API_URL);
   // function APIConvert(){
    var settings = { //for response
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "GET"
    }
   fetch(API_URL) 
   .then(response => response.json())
    $.ajax(settings).done(function (response){
        currentDay.classList.remove("d-none");
        console.log(response);
        const DMY = dayjs().format("D/MM/YY");
        CityCurrent.innerHTML = (response.name) +" " +"("+ DMY+")"; //need to add date!
        currentTemp.innerHTML = "Temp: " + (response.main.temp) + "°C";
        currentWind.innerHTML = "Wind Speed: " + (response.wind.speed) + "mph";
        currentHumidity.innerHTML = "Humidity: " + (response.main.humidity) + "%";
        console.log("Temp: " + response.main.temp + "°C");
        console.log("Wind: " + response.wind.speed + "mph");
        console.log("Humidity: " + response.main.humidity + "%");

        ///////five days forecast
        let ID = (response.main.id);
        let API_URL_5 = "https://api.openweathermap.org/data/2.5/forecast?id=" + ID + "&appid=" + API_KEY;
        //if else - clear icon, cloudy icon, stormy icon!
        var settings2 = { //for response
            "async": true,
            "crossDomain": true,
            "url": API_URL_5,
            "method": "GET"
        }
        fetch(API_URL_5)
        .then(response => response.json())
        $.ajax(settings2).done(function(response){
            fiveHeader.classList.remove("d-none");
            
        })



    });

        //five days forecast



   }//END OF FUNCTION LIVEWEATHER



    //instead of city try id





})//END OF DOCUMENT

//another section for five day forecast?














//obtain the data from URL;





//single out specific data

//store the data into local storage

//display data onto cards




// fetch('requestUrl')
// .then(function(response) {
//     return response.json();
// });
// .then(function(data){
//     console.log("testing \n------");
//     for(let i=0; i<data.length; i++){
//         console.log(data[i].city);
//         console.log
//     }
// }
//hidden five cards?


// function Display(){ //use code from previous challenge? 

// }

// display results

// functionality:
// button eventlistener for search results



// const CityAdd = (e)=>{
//     e.preventDefault();
//     let city = {
//         id:
//         weather:
//         humidity:
//         wind: 


//     }
// }



//add onto existing array


// function Data(){
//     city: 
// }
// function Days("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"){
//     if(Today == Days){
//         remove the day/.
//         Data();
//     }
// }

// resetSearch();
//store city + API data




