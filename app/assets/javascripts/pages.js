// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// var response = $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json');
// console.log(response);

$.get('https://data.cityofchicago.org/resource/cjcg-yw47.json?$limit=10', function(response) {
  console.log(response);
});