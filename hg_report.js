"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Chad Williams
   Date:   2.28.19
   
   Filename: hg_report.js
	
*/
// step 5, create var gameReport. Full of HTML text string which inserts var values from product js
var gameReport = "<h1>" + itemTitle + "</h1><h2>By:" + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='id' id='gameImg'/><table><tr><th>Product ID</th><td>" + itemID + "</td></tr><tr><th>List Price</th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRBRating</th><td>" + itemESRB + "</td></tr><tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;


// step 6, inserts gameReport first item in array into article elements.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// step 7, creates a variable, sets value to 0 
var ratingsSum = 0;
// step 8, creates var sets equal to amount of values in ratings array
var ratingsCount = ratings.length;
// step 9, creates a for loop that runs for each item in the ratings array.
for (i = 0; i < ratings.length; i++) {
    // adds ratings value to ratingsSum
    ratingsSum += ratings[i];
}
// step 10, sets ratingsAvg var to the value of ratingsSum divided by ratingsCount, total by number of ratings
var ratingsAvg = ratingsSum / ratingsCount;

// step 11 sets var equal to html string with variable values inserted into it
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + " " + "out of 5 stars (" + ratingsCount + " " + "reviews)</h2>";

// step 12 for loop, shows up to 3 reviews
for (var i = 0; i <= 2; i++) {
    // step 12 a, adds html to rating report, adds the index value of all these vars
    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr><tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
    // step 12 b another for loop nested inside, adds the amount of stars according to the value of the ratings array
    for (var x = 1; x <= ratings[i]; x++) {
        ratingReport += "<img src='hg_star.png' />";
    }
    // step 12 c, adds the closing html string tag and the summary index value
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}
// inserts the variables value to the html, first element aside
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;