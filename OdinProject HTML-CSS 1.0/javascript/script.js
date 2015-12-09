$(document).ready(function(){
  $(#header).mouseenter(function(){
    $(this).height(+=10px));
  });
  $(#header).mouseleave(function(){
    $(this).height(-=10px);
  })
});
