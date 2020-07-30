function datecoverter(timestamp){
    // unix timestamp
    var ts = timestamp;
    
    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;
    
    // initialize new Date object
    var date_ob = new Date(ts_ms);
  
    var dayname= date_ob.getDay();
    
    // year as 4 digits (YYYY)
    var year = date_ob.getFullYear();
    
    // month as 2 digits (MM)
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // date as 2 digits (DD)
    var date = ("0" + date_ob.getDate()).slice(-2);
  
    monthname=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
    return monthname[month-1]+' '+date;
    }
  
    function timecoverter(timestamp){
  
    // unix timestamp
    var ts = timestamp;
    
    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;
    
    // initialize new Date object
    var date_ob = new Date(ts_ms);
    // hours as 2 digits (hh)
      var hours = ("0" + date_ob.getHours()).slice(-2);
    
      // minutes as 2 digits (mm)
      var minutes = ("0" + date_ob.getMinutes()).slice(-2);
      
      // seconds as 2 digits (ss)
      var seconds = ("0" + date_ob.getSeconds()).slice(-2);
  
        // time as hh:mm format: 
      return hours + ":" + minutes;
      }
  
      function daynamecoverter(timestamp){
    // unix timestamp
    var ts = timestamp;
    
    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;
    
    // initialize new Date object
    var date_ob = new Date(ts_ms);
    //The getDay() method returns the day of the week (from 0 to 6) for the specified date.
    // Note: Sunday is 0, Monday is 1, and so on.
    var dayno= date_ob.getDay();
    dayname = ["Sunday","Monday" ,"Tuesday","Wednesday","Thursday","Friday","Saturday"];
      return dayname[dayno];
      }
  
  
  //
  function kelvintocelsius(kelvin){
   var celsius =  kelvin-273;
  return parseInt(celsius)+"&#8451;";
  }
  
  
  
  function cityname(latitude,longitude){
    fetch('https://api.opencagedata.com/geocode/v1/json?q='+latitude+'+'+longitude+'&key=ff0bddf526ae4f82bee54f6ef844e238') //  5b28e77f5c474f739d928132f3aa0ca1
            .then(response => response.json())
            .then(data => {
              document.getElementById("placename").innerHTML= data.results[0].formatted;
             
            })
              .catch((error) => {
              console.log(error);
              
              });
  
          }
  
  
  function weatherdata(latitude,longitude){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=minutely,&appid=4d8fb5b93d4af21d66a2948710284366') //bd0a482be066a89d215796065796d6f0
             .then(response => response.json())
             .then(data =>{
              //  current weather 
              document.getElementById('currenttemp').innerHTML = kelvintocelsius(data.current.temp);
              document.getElementById('currentdtday').innerHTML = daynamecoverter(data.current.dt);
              document.getElementById('currentdtfull').innerHTML = datecoverter(data.current.dt);
              document.getElementById('currentweathericon').src = 'http://openweathermap.org/img/wn/'+data.current.weather[0].icon+'@2x.png';
              document.getElementById('currentweatherdescription').innerHTML = data.current.weather[0].description;

              // change the background IMG according to weather
                    if(data.current.weather[0].main === "Thunderstorm"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Thunderstorm.gif')";
              }else if(data.current.weather[0].main === "Drizzle"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Drizzle.gif')";
              }else if(data.current.weather[0].main === "Rain"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Rain.gif')";
              }else if(data.current.weather[0].main === "Snow"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Snow.gif')";
              }else if(data.current.weather[0].main === "Mist"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Mist.gif')";
              }else if(data.current.weather[0].main === "Clear"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Clear.gif')";
              }else if(data.current.weather[0].main === "Clouds"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Clouds.gif')";
              }else if(data.current.weather[0].main === "Haze"){
                document.getElementById('currentweatherimg').style.backgroundImage = "url('gif/Haze.gif')";
              }

            // \\ change the background IMG according to weather

              // current weather in details
              document.getElementById('currentfeelslike').innerHTML = kelvintocelsius(data.current.feels_like);
              document.getElementById('currentuvi').innerHTML = data.current.uvi;
              document.getElementById('currenthumidity').innerHTML = data.current.humidity + " %";
              document.getElementById('currentvisibility').innerHTML = data.current.visibility + " m";
              document.getElementById('currentwindspeed').innerHTML = data.current.wind_speed + " metre/sec";
              document.getElementById('currentpressure').innerHTML = data.current.pressure + " hPa";
              document.getElementById('currentsunrise').innerHTML = timecoverter(data.current.sunrise);
              document.getElementById('currentsunset').innerHTML = timecoverter(data.current.sunset);
              // \\current weather in details
              //  \\current weather
              
              // today hourly weather 
              document.getElementById('hourly0dt').innerHTML=timecoverter(data.hourly[0].dt);
              document.getElementById('hourly0temp').innerHTML=kelvintocelsius(data.hourly[0].temp);
              document.getElementById('hourly0weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[0].weather[0].icon+'@2x.png';
              document.getElementById('hourly0weatherdescription').innerHTML=data.hourly[0].weather[0].description;
  
               document.getElementById('hourly1dt').innerHTML = timecoverter(data.hourly[1].dt);
               document.getElementById('hourly1temp').innerHTML = kelvintocelsius(data.hourly[1].temp);
               document.getElementById('hourly1weathericon').src = 'http://openweathermap.org/img/wn/' + data.hourly[1].weather[0].icon + '@2x.png';
               document.getElementById('hourly1weatherdescription').innerHTML = data.hourly[1].weather[0].description;
  
              document.getElementById('hourly2dt').innerHTML=timecoverter(data.hourly[2].dt);
              document.getElementById('hourly2temp').innerHTML=kelvintocelsius(data.hourly[2].temp);
              document.getElementById('hourly2weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[2].weather[0].icon+'@2x.png';
              document.getElementById('hourly2weatherdescription').innerHTML=data.hourly[2].weather[0].description;
  
              document.getElementById('hourly3dt').innerHTML=timecoverter(data.hourly[3].dt);
              document.getElementById('hourly3temp').innerHTML=kelvintocelsius(data.hourly[3].temp);
              document.getElementById('hourly3weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[3].weather[0].icon+'@2x.png';
              document.getElementById('hourly3weatherdescription').innerHTML=data.hourly[3].weather[0].description;
                
              document.getElementById('hourly4dt').innerHTML=timecoverter(data.hourly[4].dt);
              document.getElementById('hourly4temp').innerHTML=kelvintocelsius(data.hourly[4].temp);
              document.getElementById('hourly4weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[4].weather[0].icon+'@2x.png';
              document.getElementById('hourly4weatherdescription').innerHTML=data.hourly[4].weather[0].description;

              document.getElementById('hourly5dt').innerHTML=timecoverter(data.hourly[5].dt);
              document.getElementById('hourly5temp').innerHTML=kelvintocelsius(data.hourly[5].temp);
              document.getElementById('hourly5weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[5].weather[0].icon+'@2x.png';
              document.getElementById('hourly5weatherdescription').innerHTML=data.hourly[5].weather[0].description;

              document.getElementById('hourly6dt').innerHTML=timecoverter(data.hourly[6].dt);
              document.getElementById('hourly6temp').innerHTML=kelvintocelsius(data.hourly[6].temp);
              document.getElementById('hourly6weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[6].weather[0].icon+'@2x.png';
              document.getElementById('hourly6weatherdescription').innerHTML=data.hourly[6].weather[0].description;

              document.getElementById('hourly8dt').innerHTML=timecoverter(data.hourly[8].dt);
              document.getElementById('hourly8temp').innerHTML=kelvintocelsius(data.hourly[8].temp);
              document.getElementById('hourly8weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[8].weather[0].icon+'@2x.png';
              document.getElementById('hourly8weatherdescription').innerHTML=data.hourly[8].weather[0].description;

              document.getElementById('hourly7dt').innerHTML=timecoverter(data.hourly[7].dt);
              document.getElementById('hourly7temp').innerHTML=kelvintocelsius(data.hourly[7].temp);
              document.getElementById('hourly7weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[7].weather[0].icon+'@2x.png';
              document.getElementById('hourly7weatherdescription').innerHTML=data.hourly[7].weather[0].description;

              document.getElementById('hourly9dt').innerHTML=timecoverter(data.hourly[8].dt);
              document.getElementById('hourly9temp').innerHTML=kelvintocelsius(data.hourly[8].temp);
              document.getElementById('hourly9weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[8].weather[0].icon+'@2x.png';
              document.getElementById('hourly9weatherdescription').innerHTML=data.hourly[8].weather[0].description;

              document.getElementById('hourly10dt').innerHTML=timecoverter(data.hourly[10].dt);
              document.getElementById('hourly10temp').innerHTML=kelvintocelsius(data.hourly[10].temp);
              document.getElementById('hourly10weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[10].weather[0].icon+'@2x.png';
              document.getElementById('hourly10weatherdescription').innerHTML=data.hourly[10].weather[0].description;
              
              document.getElementById('hourly11dt').innerHTML=timecoverter(data.hourly[11].dt);
              document.getElementById('hourly11temp').innerHTML=kelvintocelsius(data.hourly[11].temp);
              document.getElementById('hourly11weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[11].weather[0].icon+'@2x.png';
              document.getElementById('hourly11weatherdescription').innerHTML=data.hourly[11].weather[0].description;

            
              
             
              // \\today hourly weather 
  
              // future daily day weather
              document.getElementById('daily0dt').innerHTML = datecoverter(data.daily[0].dt);
              document.getElementById('daily0weatherdescription').innerHTML = data.daily[0].weather[0].description;
              document.getElementById('daily0weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[0].weather[0].icon+'@2x.png';
              document.getElementById('daily0temp').innerHTML = kelvintocelsius(data.daily[0].temp.max)+'/'+kelvintocelsius(data.daily[0].temp.min);

              document.getElementById('daily1dt').innerHTML = datecoverter(data.daily[1].dt);
              document.getElementById('daily1weatherdescription').innerHTML = data.daily[1].weather[0].description;
              document.getElementById('daily1weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[1].weather[0].icon+'@2x.png';
              document.getElementById('daily1temp').innerHTML = kelvintocelsius(data.daily[1].temp.max)+'/'+kelvintocelsius(data.daily[1].temp.min);

              document.getElementById('daily2dt').innerHTML = datecoverter(data.daily[2].dt);
              document.getElementById('daily2weatherdescription').innerHTML = data.daily[2].weather[0].description;
              document.getElementById('daily2weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[2].weather[0].icon+'@2x.png';
              document.getElementById('daily2temp').innerHTML = kelvintocelsius(data.daily[0].temp.max)+'/'+kelvintocelsius(data.daily[0].temp.min);

              document.getElementById('daily3dt').innerHTML = datecoverter(data.daily[3].dt);
              document.getElementById('daily3weatherdescription').innerHTML = data.daily[3].weather[0].description;
              document.getElementById('daily3weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[3].weather[0].icon+'@2x.png';
              document.getElementById('daily3temp').innerHTML = kelvintocelsius(data.daily[0].temp.max)+'/'+kelvintocelsius(data.daily[0].temp.min);

              document.getElementById('daily4dt').innerHTML = datecoverter(data.daily[4].dt);
              document.getElementById('daily4weatherdescription').innerHTML = data.daily[4].weather[0].description;
              document.getElementById('daily4weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[4].weather[0].icon+'@2x.png';
              document.getElementById('daily4temp').innerHTML = kelvintocelsius(data.daily[4].temp.max)+'/'+kelvintocelsius(data.daily[4].temp.min);

              document.getElementById('daily5dt').innerHTML = datecoverter(data.daily[5].dt);
              document.getElementById('daily5weatherdescription').innerHTML = data.daily[5].weather[0].description;
              document.getElementById('daily5weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[5].weather[0].icon+'@2x.png';
              document.getElementById('daily5temp').innerHTML = kelvintocelsius(data.daily[5].temp.max)+'/'+kelvintocelsius(data.daily[5].temp.min);

              document.getElementById('daily6dt').innerHTML = datecoverter(data.daily[6].dt);
              document.getElementById('daily6weatherdescription').innerHTML = data.daily[6].weather[0].description;
              document.getElementById('daily6weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[6].weather[0].icon+'@2x.png';
              document.getElementById('daily6temp').innerHTML = kelvintocelsius(data.daily[6].temp.max)+'/'+kelvintocelsius(data.daily[6].temp.min);

              document.getElementById('daily7dt').innerHTML = datecoverter(data.daily[7].dt);
              document.getElementById('daily7weatherdescription').innerHTML = data.daily[7].weather[0].description;
              document.getElementById('daily7weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[7].weather[0].icon+'@2x.png';
              document.getElementById('daily7temp').innerHTML = kelvintocelsius(data.daily[7].temp.max)+'/'+kelvintocelsius(data.daily[7].temp.min);
            
            // \\ future daily day weather





            });
  
  }
  
// location dector function

  $('#location-button').click(function(){
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        cityname(position.coords.latitude, position.coords.longitude);
       weatherdata(position.coords.latitude, position.coords.longitude); 
  
      })
    }else{
      alert("you blocked or your borowser dont support location . showing default location kolkata");
    }  
  });
  

  // search function 
  $('#submit').click(function(){
       const name = document.getElementById('inputname').value;
       fetch(' https://api.opencagedata.com/geocode/v1/json?q='+name+'&key=ff0bddf526ae4f82bee54f6ef844e238')  
      //fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=4d8fb5b93d4af21d66a2948710284366')
       .then(response => response.json())
       .then(data =>{
        cityname(data.results[0].geometry.lat, data.results[0].geometry.lng); //cityname(data.coord.lat, data.coord.lon); 
        weatherdata(data.results[0].geometry.lat, data.results[0].geometry.lng) ;//weatherdata(data.coord.lat, data.coord.lon) ;
        })
        .catch((error) => {
          console.log(error);
          alert("your searched location not found. try this format ={[city name,state code,country code]}.showing default location kolkata");
          
          });
        
  }); 
  
  
  // default entry point for application location kolkata
     $(function defaultlocation() {
      cityname(22.5454125, 88.3567752); 
      weatherdata(22.5454125, 88.3567752) ;
     });
  

   

  
  
  
  
  
  
  
  
  
  