// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// var response = $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json');
// console.log(response);
function getData() {
  var divOffenders = document.getElementById('offender');
  divOffenders.innerHTML = "";
$.get('https://data.cityofchicago.org/resource/cjcg-yw47.json?$limit=10', function(data) {
  for (var i = 0; i < data.length; i++){
    var offender = data[i];
    divOffenders.innerHTML += '<h2>' + offender.first + '</h2>'
    divOffenders.innerHTML += '<h2>' + offender.last + '</h2>'
    divOffenders.innerHTML += '<p>' + offender.gender + '</p>'
    divOffenders.innerHTML += '<p>' + offender.race + '</p>'
    // divOffenders.innerHTML + offender.first 
  }
});
}