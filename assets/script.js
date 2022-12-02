
var cityNamePaste = document.querySelector("#cityname");
var todaysTemp = document.querySelector(".todaystemp");
var todaysHum = document.querySelector(".todayshumidity");
var todaysWind = document.querySelector(".todayswind");
var date1 = document.querySelector("#date1")
var date2 = document.querySelector("#date2")
var date3 = document.querySelector("#date3")
var date4 = document.querySelector("#date4")
var date5 = document.querySelector("#date5")
var hum1 = document.querySelector(".humidity1")
var hum2 = document.querySelector(".humidity2")
var hum3 = document.querySelector(".humidity3")
var hum4 = document.querySelector(".humidity4")
var hum5 = document.querySelector(".humidity5")
var temp1 = document.querySelector(".temp1")
var temp2 = document.querySelector(".temp2")
var temp3 = document.querySelector(".temp3")
var temp4 = document.querySelector(".temp4")
var temp5 = document.querySelector(".temp5")
var wind1 = document.querySelector(".wind1")
var wind2 = document.querySelector(".wind2")
var wind3 = document.querySelector(".wind3")
var wind4 = document.querySelector(".wind4")
var wind5 = document.querySelector(".wind5")
var btn = document.querySelector("#btn")
var lat = ""
var lon = ""
btn.textContent = localStorage.getItem("lock",name)
  function search() {

    var citySearch = document.querySelector("#searchspot").value;
         var name = citySearch
         localStorage.setItem("lock",name)
    console.log(name);

    
var apiKey = "https://api.openweathermap.org/data/2.5/forecast?q=" + name+"&appid=35941eaf6c6dead0cc6b8237da9cb107&units=imperial"
var apiKey2 = "https://api.openweathermap.org/data/2.5/weather?q= "+name+"&appid=35941eaf6c6dead0cc6b8237da9cb107&units=imperial"

  fetch(apiKey2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    cityNamePaste.textContent = data.name + " " + dayjs().format('DD/MM/YYYY')
    todaysTemp.textContent = data.main.temp + "°"
    todaysHum.textContent = data.main.humidity + "%"
    todaysWind.textContent = data.wind.speed + " MPH"
  });

fetch(apiKey)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    date1.textContent =data.list[0].dt_txt
    date2.textContent =data.list[8].dt_txt
    date3.textContent =data.list[16].dt_txt
    date4.textContent =data.list[24].dt_txt
    date5.textContent =data.list[32].dt_txt
    temp1.textContent = data.list[0].main.temp + "°"
    temp2.textContent = data.list[8].main.temp + "°"
    temp3.textContent = data.list[16].main.temp + "°"
    temp4.textContent = data.list[24].main.temp + "°"
    temp5.textContent = data.list[32].main.temp + "°"
    hum1.textContent = data.list[0].main.humidity + "%"
    hum2.textContent = data.list[8].main.humidity + "%"
    hum3.textContent = data.list[16].main.humidity + "%"
    hum4.textContent = data.list[24].main.humidity + "%"
    hum5.textContent = data.list[32].main.humidity + "%"
    wind1.textContent = data.list[0].wind.speed + " MPH"
    wind2.textContent = data.list[8].wind.speed + " MPH"
    wind3.textContent = data.list[16].wind.speed + " MPH"
    wind4.textContent = data.list[24].wind.speed + " MPH"
    wind5.textContent = data.list[32].wind.speed + " MPH"
    // todaysHum.textContent = data.list[0].main.humidity + "%"
    // todaysWind.textContent = data.list[0].wind.speed + " MPH"
    
    
  });


    }
   

var searchButton = document.querySelector("#searchbutton")
searchButton.addEventListener("click",function(event){


    event.preventDefault();
  search();
})
