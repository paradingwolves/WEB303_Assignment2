/* 
    Program Author: Justin Brierley
    Program Name: Assignment 8
    Date: 2022-11-17
    Purpose: Load character data into table using JSON/Ajax
    with a search filter
*/

$(document).ready(function(){
    var characters = $.getJSON("characters.json", function (obj) {
        // adding characters to table
        $.each(obj, function(key, value) {
            $("tbody").append(`
            <tr>
                <td class="fname">${value.firstName}</td>
                <td class="lname">${value.lastName}</td>
                <td>${value.age}</td>
                <td>${value.occupation}</td>
                <td>${value.Lucy}</td>
            </tr>
            `);
        })
    });
    var results = [];
 });