$(document).ready(function(){

$(function(){

  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    var myData = data.Search;

    $.each(myData, function(index, value){ //index represents the element being looped, and value represents the property
    	console.log(value.Title);
    })
    console.log(myData);
    // console.log(myData[9]['Title']);
});
});