$(document).ready(function(){

$(function(){

  $.get('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    console.log(data);
  }, 'json');
})


});