(function(){
  var timestamp = document.getElementById('timestamp')
  var validation =document.getElementById('validation')
  function checkValidTime(time){
    let natural = time.match(/^([A-Za-z])+ ([0-9]+){1,2}, ([0-9]+){4}/gi)
    let unix = time.match(/^([0-9])+/gi)
    return natural || unix
  }

  document.getElementById('submit').addEventListener('click',function(){
    if(checkValidTime(timestamp.value)){
      window.location.href="/"+timestamp.value
    }
  }); 
  timestamp.addEventListener('keyup',function(){
  if(!checkValidTime(timestamp.value)){
    
    validation.innerHTML="invalid unix or natural date"
    validation.style.color="red"
    
    }else{
      validation.innerHTML="valid"
      validation.style.color="green"
    }  
  })
})()