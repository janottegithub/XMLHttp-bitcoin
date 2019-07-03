
var btn = document.querySelector("#btn");
var price = document.querySelector("#price");

var USD = document.getElementById("USD");
var EUR = document.getElementById("EUR");




btn.addEventListener('click', function(){

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
if(XHR.readyState == 4 && XHR.status ==200){
    var response = JSON.parse(XHR.responseText);
    if(USD.checked == true){
    var usdResponse =  response.bpi.USD.rate+"$"
    price.innerHTML = usdResponse;
    }
    if(EUR.checked == true){
    var eurResponse = response.bpi.EUR.rate+"€";
    price.innerHTML = eurResponse;
        }
    }
}



XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
XHR.send();
})


