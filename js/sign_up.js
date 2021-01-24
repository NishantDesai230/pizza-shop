$(document).ready(function() { 
  var id = '#dialog';
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('#mask').css({'width':maskWidth,'height':maskHeight}); 
  $('#mask').fadeIn(500); 
  $('#mask').fadeTo("slow",0.9); 
        var winH = $(window).height();
  var winW = $(window).width();
        $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);
     $(id).fadeIn(2000);  
     $('.window .close').click(function (e) {
  e.preventDefault();
  $('#mask').hide();
  $('.window').hide();
     });  
     $('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
 });  
 
});


var modal = document.getElementById('id01');
	function validateForm() {
var username = document.getElementById('username');
var password = document.getElementById('pass');
var confirm_password =  document.getElementById('cnf');
var email = document.getElementById('mail');
var phone = document.getElementById('phone');
	
	if(username.value == "")
	{
		swal("Oops..." ,"Name must be filled out","error");
		username.focus();
		return false;
}
else if(password.value == "")
{
	swal("Oops..." ,"please  enter password","error");
	password.focus();
	return false;
}
else if (confirm_password.value == "") {
	swal("Oops..." ,"please enter the confirm-password","error");
	confirm-password.focus();
	return false;
}
else if(password.value != confirm_password.value)
{
	swal("Oops..." ,"password does not match","error");
	return false;
}
 else if(email.value == "")
{
	swal("Oops..." ,"please enter the e-mail","error");
	email.focus();
	return false;
}
 else if(phone.value == "")
{
	swal("Oops..." ,"please provide number","error");
	phone.focus();
	}
else
{
	swal("Congrats " +username.value ,"Signed in sucessfully","success");
	return false;
}
	return true;
}
