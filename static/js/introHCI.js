'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').html("<p>Experience Chan! It's not a lot of questions<br>Too many questions is the Chan disease.<br>The best way is just to observe the noise of the world.<br>The answer to your questions?<br>Ask your own heart.</p>");
		// text() would assume everything in the () is actual text
		// use html also b/c calling class w/ h1
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});
	
	$(".project").click(projectClick);
	// when class project is clicked, then projectClick is called
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
	e.preventDefault();
	// prevents default action b/c class project is a link
	// and just want to see what we have currently w/o going
	// to link
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(".project-description").hide();
    }

}
	//(oject-description").hide();
	// it hides stops the else function to not go through


