function func(){


let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
  
  let input_for_ip = document.querySelector('.input_for_ip')
  input_for_ip.value = (JSON.stringify(data, null, 2,));
  let submit_activation = document.querySelector('.ip_form').submit()
  
console.log(JSON.stringify(data, null, 2,));
});

}

setTimeout(func, 1)
