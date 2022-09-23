/*
	WEB 303 Assignment 2 - AJAX
	Justin Brierley
	W0724299
*/
$(document).ready(function() {
    $('#retain').on('click', function(){
      var xhr = new XMLHttpRequest;
      xhr.open('GET','retain.html',true);
      xhr.onload = function()
      {
        if(this.status=== 200)
        {
          let el = document.getElementById("content");
          el.innerHTML=xhr.responseText;
          let $content = $("#content");
          $content.css ({
            'display': "block"
        })
        $($content).slideToggle(2500);
      }
    }   
    xhr.send();
  });

  $('#convert').on('click', function(){
    var xhr = new XMLHttpRequest;
    xhr.open('GET','convert.html',true);
    xhr.onload = function()
    {
      if(this.status=== 200)
      {
        let el = document.getElementById("content");
        el.innerHTML=xhr.responseText;
        let $content = $("#content");
        $content.css ({
          'display': "block",
        })
        $($content).slideToggle(2500);
    }
  }   
  xhr.send();
});

$('#prospect').on('click', function(){
  var xhr = new XMLHttpRequest;
  xhr.open('GET','prospect.html',true);
  xhr.onload = function()
  {
    if(this.status=== 200)
    {
      let el = document.getElementById("content");
      el.innerHTML=xhr.responseText;
      let $content = $("#content");
      $content.css ({
        'display': "block"
    })
    $($content).slideToggle(2500);
  }
}   
xhr.send();
});


});
