// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// var response = $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json');
// console.log(response);
function changeColors() {
  setTimeout(function() {
    document.getElementById('first').style['color']= 'red';
    setTimeout(function() {
      document.getElementById('second').style['color']= 'blue';
      setTimeout(function() {
        document.getElementById('third').style['color']= 'green';
          setTimeout(function() {
          document.getElementById('fourth').style['color']= 'purple';
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function getData() {
  var divOffenders = document.getElementById('offender');
  divOffenders.innerHTML = "";
$.get('https://data.cityofchicago.org/resource/cjcg-yw47.json?$limit=10', function(data) {
  for (var i = 0; i < data.length; i++){
    var offender = data[i];
    divOffenders.innerHTML += '<h2>' + offender.first + '</h2'
    // divOffenders.innerHTML + offender.first 
  }
});
}