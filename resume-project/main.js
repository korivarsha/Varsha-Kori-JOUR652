$(document).ready(function(){
 $('.header').height($(window).height());
})

$('#trigger').bind('click', function(){
  $(this).hide();
  $('#btnCollapse').show();
});
