$(document).ready(function() {
	
	/* Bootstraping variable */
	menu				= $('.menu li');
	submenuWrapper	= $('#submenu-wrapper'); 
	inputNamearea       = $("#name");
	



	signinMenu 	= menu.eq(4);
	
	/* When menu on mouse over and out */
	signinMenu.hover(
		function() {
			
			var cur_name = signinMenu.attr("name")
			if(cur_name == "signin-item")
			showsubmenu(submenuWrapper);
			
		},
	

		
		function() { hidesubmenu(submenuWrapper); });
	
	/* When sub menu wrapper on mouse over and out */
	submenuWrapper.hover(
		function() { showsubmenu($(this)); },
		function() { hidesubmenu($(this));
	});
	

	
	/* Function to show sub menu */
	function showsubmenu(item) {
		if(!item.hasClass('show'))
			item.addClass('show').stop().animate({'marginTop' : '0'});
	}
	
	/* Function to hide sub menu */
	function hidesubmenu(item) {
		item.removeClass('show').stop().animate({'marginTop' : '-20em'});
	}
	
});