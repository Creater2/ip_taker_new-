
   $.get("http://ipinfo.io", function(response) {
    console.log(response);
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log(time);

    let input_for_ip = document.querySelector('.input_for_ip')
    input_for_ip.value = ('ip адресс: ' + response.ip + '  Время перехода: ' + time);
    let submit_activation = document.querySelector('.ip_form').submit()
    


    console.log('ip адресс:' + response.ip);


}, "jsonp");



