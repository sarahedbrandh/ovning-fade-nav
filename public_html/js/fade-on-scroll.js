/*
fade-on-scroll.js
Author: Sara Hedbrandh
Created: October 2018
*/

function setAlpha(alpha) {
  $("nav").css("background-color", "rgba(0, 0, 0," + alpha + ")");
}

function calcAlpha(){
  let alpha = 0;
  let scroll = $(document).scrollTop(); //def en variabel för hur långt man skrollat

  // Vid vilken pixel ska fejden starta
  const fadeStart = 100;
  const fadeStop = 200;

  const fadeLength = fadeStop - fadeStart ;

  if (scroll < fadeStart) {
    alpha = 0;
   
  }
  else if (scroll < fadeStop ) {
    alpha = (scroll - fadeStart) / fadeLength;
 
    
  }
  else {
    
    alpha = 1;
  }

  return alpha;
}

$(document).scroll(function(){
  setAlpha(calcAlpha());
});





console.log("Du är " +$(document).scrollTop()) + "pixlar från toppen";