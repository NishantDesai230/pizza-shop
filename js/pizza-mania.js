function locateme()
{
  swal("Congrats","Address located sucessfully","success");
  return false;  
} 

function order()
{
  var input =   document.getElementById('inptt');
  if(input.value==0)
  {
    alert("please place your quantity");
    return false;
  }
  else
  {
$('.progress-bar').animate(
      {width:'100%'}, 
      {
          duration:3000      
      }        
  );
  var price = 300 * input.value; 
  swal("Great","Your order is placed , Your bill is:"+ price + "Rs Only/-","success");
  return false;
  }

}



