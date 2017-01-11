( function( $ ) {
	var isActive = false;
	$( document ).ready( function() {
		
		//add or remove sidebar active class
		$('.sidebar h2.widget-title').click(function(e) {
			if( !isActive ){
				$('.sidebar .widget').removeClass('active');
				$(this).parent().addClass('active');
				isActive = true;
			}else{
				$(this).parent().removeClass('active');
				isActive = false;
			}
		});
		
		
		//drop-down menu slideToggle on mobile
		/*$('li.menu-item-has-children').append( '<span class="modern-pics sub-more">+</span>' ); */
		
		$('#menu-item-1121').click(function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();    
			
			$('#menu-item-20 > .sub-menu').slideToggle('fast');
	
		});
		
		$('#menu-item-1122').click(function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();    
			
			$('#menu-item-1043 > .sub-menu').slideToggle('fast');
	
		});
		
		$('#menu-item-1123').click(function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();    
			
			$('#menu-item-1047 > .sub-menu').slideToggle('fast');
	
		});
		
		$('#menu-item-1124').click(function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();    
			
			$('#menu-item-1054 > .sub-menu').slideToggle('fast');
	
		});
	
		
	} );
} )( jQuery );
