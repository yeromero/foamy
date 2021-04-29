new WOW().init();
var animaciones ={
    carrusel: function(){
        jQuery('.owl-carousel').owlCarousel({   
		    loop:true,
		    margin:10,
            autoplay: true,
            autoplayTimeout: 3000,
            lazyLoad:true,
		    nav:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:1
		        },
		        1200:{
		            items:1
		        }
		    }
		})

        jQuery('.fotorama').fotorama({
            width: 1200,
            arrow: 'always',
            maxwidth: '100%',
            ratio: 16/9,
            allowfullscreen: true,
            nav: 'thumbs'
          })
    }        
}

jQuery(document).ready(animaciones.carrusel);