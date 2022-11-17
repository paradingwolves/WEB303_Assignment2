/* 
    Program Author: Justin Brierley
    Program Name: Assignment 8
    Date: 2022-11-17
    Purpose: filter characters based on user search
    with a search filter
*/

$(document).ready(function(){
// search by first name
    $("input").keyup(function(key) {
        $("tbody").find("tr").show(); // show all table rows
        $("tbody tr").each(function() { // for each loop for all table rows in the table that match the search
            let value = $(this).children().first().text().toLowerCase();
            console.log(value); // see the values of the search in the console
            if(key.target.value === "") {
                $(this).css({"background-color" : "", "color": "black"}); // if a character is not in the search this will keep that row white and text black
            }
            else if(value.includes(key.target.value.toLowerCase())){
                $(this).css({"background-color" : "green", "color": "white"}); // if a character is in the search this will turn that row green and text white
            }
            else {
                $(this).css({"background-color" : "none", "color": "black"});
            }
        });
    });
});