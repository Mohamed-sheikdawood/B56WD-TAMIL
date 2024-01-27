var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i =0;i<res.length;i++){
        var country = res[i];
        console.log("Country Name: " + country.name.common);
        console.log("Capital: " + (country.capital ? country.capital[0] : "N/A"));
        console.log("Region: " + (country.region ? country.region : "N/A"));
        console.log("Subregion: " + (country.subregion ? country.subregion : "N/A"));
        console.log("Flag: " + (country.flags ? country.flags.svg : "N/A"));
        console.log("Area: " + (country.area ? country.area + " sq km" : "N/A"));
        console.log("Population: " + (country.population ? country.population : "N/A"));
        console.log("--------------");
      // Session Practice Code:  
      //  var commonName = country.name.common;
      //  var capital = country.capital ? country.capital[0] : "N/A";
      //  var area = country.area ? country.area : "N/A";
      //  console.log(`Country: ${commonName}, Capital: ${capital}, Area: ${area}`);
      //  console.log(res[i].name.common);
    }
}
