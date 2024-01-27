var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i =0;i<res.length;i++){
        var country = res[i];
        var commonName = country.name.common;
        var capital = country.capital ? country.capital[0] : "N/A";
        var area = country.area ? country.area : "N/A";

        console.log(`Country: ${commonName}, Capital: ${capital}, Area: ${area}`);
      //  console.log(res[i].name.common);
    }
}
