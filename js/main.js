$(function(){
   $(':submit').click(function(e) {
      $('.text2').attr('disabled','disabled');
      e.preventDefault();
   });
   $(':reset').click(function(e) {
      $('.text2').removeAttr('disabled');
      e.preventDefault();
   });
});



$(document).ready(function () {

});

$(function () {
   $('.icons > div').hide(2000);
});




