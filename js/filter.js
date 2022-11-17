/* 
    Program Author: Justin Brierley
    Program Name: Assignment 8
    Date: 2022-11-17
    Purpose: filter characters by last name
    with a search filter
*/

$(document).ready(function(){   
    // Show characters whose last name starts with a letter between A and M
    $("#a2m").click(function(){
        $("tbody").find("tr").show();
        $("tbody tr").each(function() {
            let value = $(this).children(".lname").text();
            console.log(value[0]);
            if(!value[0].match(/[a-mA-M]/)){
                $(this).hide();
            };
        });
    });
    // Show characters whose last name starts with a letter between N and Z
    $("#n2z").click(function(){
        $("tbody").find("tr").show();
        $("tbody tr").each(function() {
            let value = $(this).children(".lname").text();
            console.log(value[0]);
            if(!value[0].match(/[n-zN-Z]/)){
                $(this).hide();
            };
        });
    });

    // show all characters when Show All button pressed
    $("#showAll").click(function(){
        $("tbody").find("tr").show();
        $("tbody tr").each(function() {
            let value = $(this).children(".lname").text();
            console.log(value[0]);
            if(!value[0].match(/[a-zA-Z]/)){
                $(this).hide();
            };
        });
    });
});