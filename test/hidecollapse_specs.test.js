describe("HideCollapse component", function () { 
	console.log("Jasmine test init: Success!");
	var hideCollapseTemplate = [
		"<div id='content' class='content'>",
  			"<a id='contentLink' class='content-link' href='#'> Open / Close Box </a>",
  			"<div id='contentBox' class='content-box'>",
  				"<p>Some text</p>",
  				"<p>Some text</p>",
  				"<p>Some text</p>",
  				"<p>Some text</p>",
  				"<p>Some text</p>",
  			"</div>", 
  		"</div>"
	].join('');
	
	beforeEach(function() {
		$("body").append(hideCollapseTemplate);
	
		var toggleView = new ToggleView({
			el: $("#content")
		});	
	});
	
	afterEach(function() {
		$("#content").remove();
	});

	it("should hide the content panel when panel is displayed and Open / Close Box link is clicked", function() {
		/* Given */
		// #contentBox is visible
		$('#contentBox').css('display','block');
		
		/* when */
		// user clicks on Open / Close Box link
		$('#contentLink').click();
		
		/* Then */
		expect($('#contentBox').css('display') === 'none').toEqual(true);
	});
	
	it("should show the content panel when panel is hidden and Open / Close Box link is clicked", function() {
		/* Given */
		// #contentBox is hidden
		$('#contentBox').css('display','none');
		
		/* when */
		// user clicks on Open / Close Box link
		$('#contentLink').click();
		
		/* Then */
		expect($('#contentBox').css('display') === 'block').toEqual(true);
	});
	
});