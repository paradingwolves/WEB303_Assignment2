/*
	WEB 303 Assignment 3 - JSON/AJAX
	Justin Brierley
	W0724299
*/

$(document).ready(function() {
    ajaxMethod();
    /* jsonMethod(); */
});
let jsonMethod = function() {
    $.getJSON("team.json", function (data) {
        let html = '',
            el = document.getElementById("team");
        $.each(data, function (key, val) {
            html += "<h2>" + val.name + "</h2>";
            html += "<h3>" + val.position + "</h3>";
            html += "<p><strong>Bio: </strong>" + val.bio + "</p>";
        });
        el.innerHTML = html;
    });
};

let ajaxMethod = function() {
    $('#team').append($("<p>" + "Loading..." + "</p>"));
    $.ajax({
        url: './team.json',
        method: 'get',
        dataType: 'json',
        success: function(result) {
            alert("Data Could Not Be Retrieved Click OK To Retry");
            $(result).each(function(i, emp){
                $('p:first-of-type').fadeOut(3000);
                $('#team').append($("<h2>" + emp.name + "</h2>").hide().show(3000));
                $('#team').append($("<h3>" + emp.position + "</h3>").hide().show(3000));
                $('#team').append($("<p>" + emp.bio + "</p>").hide().show(3000));
            });
        }
    });
};





