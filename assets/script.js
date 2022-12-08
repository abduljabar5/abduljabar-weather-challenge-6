
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
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var btn4 = document.querySelector("#btn4")
var historyButton = document.querySelector("#historybuttons")
var lat = ""
var lon = ""
var searchHistory = []
var citySearch = document.querySelector("#searchspot").value;
var name1 = citySearch
var icon = document.getElementById("icon")
var list = localStorage.getItem("lock")
if (list){
  var list2 = JSON.parse(list)
}

var citySearch = document.querySelector("#searchspot");


function search() {
  var name = citySearch.value
// puts search value into local storage
    searchHistory.push(name )
    console.log(searchHistory);
    localStorage.setItem("lock", JSON.stringify(searchHistory));
   
   
var apiKey = "https://api.openweathermap.org/data/2.5/forecast?q=" + name+"&appid=35941eaf6c6dead0cc6b8237da9cb107&units=imperial"
var apiKey2 = "https://api.openweathermap.org/data/2.5/weather?q= "+name+"&appid=35941eaf6c6dead0cc6b8237da9cb107&units=imperial"

  fetch(apiKey2)
  .then(function (response) {
   if (response.ok){
    return response.json();
   } else {
    // alerts if city is not found
     window.alert("city not found")
     cityNamePaste.textContent = "city not found"
   }
  })
  .then(function (data) {
    console.log(data);
    // adds todays date
    cityNamePaste.textContent = data.name + " " + dayjs().format('DD/MM/YYYY')
  var input = data.weather[0].main
 
  if (data.weather[0].main === 'Clear'){
    // adds icon next to todays weather
    cityNamePaste.textContent += "☀️"
  } else if (data.weather[0].main === 'Clouds'){
    cityNamePaste.textContent += "☁️"
  } else if (data.weather[0].main === 'Rain'){
    cityNamePaste.textContent += "⛈️"
  } else if (data.weather[0].main === "Snow"){
    cityNamePaste.textContent += "❄️"
  } 
  console.log(input);
  // adds info to todays weather section
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
// adds date and icons to the upcoming days
    date1.textContent =data.list[0].dt_txt
    if (data.list[0].weather[0].main === 'Clear'){
      date1.textContent += "☀️"
    } else if (data.list[0].weather[0].main === 'Clouds'){
      date1.textContent += "☁️"
    }else if (data.list[0].weather[0].main === 'Rain'){
      date1.textContent += "⛈️"
    } else if (data.list[0].weather[0].main === "Snow"){
      date1.textContent += "❄️"
    } 
    date2.textContent =data.list[8].dt_txt
    if (data.list[8].weather[0].main === 'Clear'){
      date2.textContent += "☀️"
    } else if (data.list[8].weather[0].main === 'Clouds'){
      date2.textContent += "☁️"
    }else if (data.list[8].weather[0].main === 'Rain'){
      date2.textContent += "⛈️"
    } else if (data.list[8].weather[0].main === "Snow"){
      date2.textContent += "❄️"
    } 
    date3.textContent =data.list[16].dt_txt
    if (data.list[16].weather[0].main === 'Clear'){
      date3.textContent += "☀️"
    } else if (data.list[16].weather[0].main === 'Clouds'){
      date3.textContent += "☁️"
    }else if (data.list[16].weather[0].main === 'Rain'){
      date3.textContent += "⛈️"
    } else if (data.list[16].weather[0].main === "Snow"){
      date3.textContent += "❄️"
    } 
    date4.textContent =data.list[24].dt_txt
    if (data.list[24].weather[0].main === 'Clear'){
      date4.textContent += "☀️"
    } else if (data.list[24].weather[0].main === "Clouds"){
      date4.textContent += "☁️"
    }else if (data.list[24].weather[0].main === 'Rain'){
      date4.textContent += "⛈️"
    } else if (data.list[24].weather[0].main === "Snow"){
      date4.textContent += "❄️"
    } 
    date5.textContent =data.list[32].dt_txt
    if (data.list[32].weather[0].main === 'Clear'){
      date5.textContent += "☀️"
    } else if (data.list[32].weather[0].main === "Clouds"){
      date5.textContent += "☁️"
    }else if (data.list[32].weather[0].main === 'Rain'){
      date5.textContent += "⛈️"
    } else if (data.list[32].weather[0].main === "Snow"){
      date5.textContent += "❄️"
    } 
    // adds text to the five up comming days
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
  });
    }
 if (list){

 
if (list2[0]){
  btn.textContent = list2[0]
} 
btn.addEventListener("click",function(){
var citySearch = document.querySelector("#searchspot");
citySearch.value = list2[0]
  search()
})
// new button under search history
if (list2[1]){
    btn1.textContent = list2[1]

}
console.log(list2[1]);
btn1.addEventListener("click",function(){
  var citySearch = document.querySelector("#searchspot");
 

citySearch.value = list2[1]
  search()
})
// new button under search history
if (list2[2]){
btn2.textContent = list2[2]
}

btn2.addEventListener("click",function(){
  var citySearch = document.querySelector("#searchspot");
 

citySearch.value = list2[2]
  search()
})
// new button under search history
if (list2[3]){
  btn3.textContent = list2[3]

}
btn3.addEventListener("click",function(){
  var citySearch = document.querySelector("#searchspot");
 

citySearch.value = list2[3]
  search()
})
// new button under search history
if (list2[4]){
  btn4.textContent = list2[4]

}
btn4.addEventListener("click",function(){
  var citySearch = document.querySelector("#searchspot");
 

citySearch.value = list2[4]
  search()
})
 }
// runs search function after search button is clicked
var searchButton = document.querySelector("#searchbutton")
searchButton.addEventListener("click",function(event){


    event.preventDefault();
  search();
})
