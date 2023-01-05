// PAGE LOAD
$(window).on('load', function(){
    setTimeout(function(){
        $('#hero .hero-kiri').addClass('hero-kiri-muncul');
    },900);

    setTimeout(function(){
        $('#hero .hero-kanan').addClass('hero-kanan-muncul');
    },900);
});


$(window).scroll(function(){
    
    const wScroll = $(this).scrollTop();
   

    // PARALLAX - Pit Muda
    if(wScroll > $('.pit-muda').offset().top - 230 ){
        $('.pit-muda .isi-pit-muda').each(function(i){
            setTimeout(function(){
                $('a.tentang.nav-link').addClass('active');  
                $('a.beranda.nav-link').removeClass('active');  
                $('.pit-muda .isi-pit-muda').eq(i).addClass('isi-pit-muda-muncul');  
            },1000 * i+1);
        });  


    }

    // PARALLAX - Keluarga
    if(wScroll > $('.keluarga').offset().top - 300 ){
        $('.isi-keluarga .hero-isi-keluarga',function(){
            setTimeout(function(){
                $('.isi-keluarga .hero-isi-keluarga').addClass('hero-isi-keluarga-muncul');  
            },250);
        });  
    }

    if(wScroll > $('.cover-isi-keluarga').offset().top - 320 ){
        $('.cover-isi-keluarga',function(){
            setTimeout(function(){
                $('.cover-isi-keluarga .isi-keluarga-kiri').addClass('isi-keluarga-kiri-muncul');  
                $('.cover-isi-keluarga .isi-keluarga-kanan').addClass('isi-keluarga-kanan-muncul');  
            },250);
        });  
    }


    // PARALLAX - Titik Balik
    if(wScroll > $('.isi-titik-balik').offset().top - 320 ){
        $('.cover-isi-titik-balik',function(){
            setTimeout(function(){
                $('.cover-titik-balik .isi-titik-balik-kiri').addClass('isi-titik-balik-kiri-muncul');  
                $('.cover-titik-balik .isi-titik-balik-kanan').addClass('isi-titik-balik-kanan-muncul');  
            },250);
        });  
    }
 
    // PARALLAX - Impian Demokrasi
    if(wScroll > $('.isi-impian-demokrasi-1').offset().top - 320 ){
        $('.isi-impian-demokrasi-1',function(){
            setTimeout(function(){
                $('.isi-impian-demokrasi-1 .isi-impian-demokrasi-1-kiri').addClass('isi-impian-demokrasi-1-kiri-muncul');  
                $('.isi-impian-demokrasi-1 .isi-impian-demokrasi-1-kanan').addClass('isi-impian-demokrasi-1-kanan-muncul');  
            },250);
        });  
    }

    if(wScroll > $('.isi-impian-demokrasi-2').offset().top - 320 ){
        $('.isi-impian-demokrasi-2',function(){
            setTimeout(function(){
                $('.isi-impian-demokrasi-2 .isi-impian-demokrasi-2-tengah').addClass('isi-impian-demokrasi-2-tengah-muncul');  
            },250);
        });  
    }

    // PARALLAX - Karir
    if(wScroll > $('.karir-1').offset().top - 320 ){
        $('.karir-1',function(){
            setTimeout(function(){
                $('.karir-1').addClass('karir-1-muncul');  
            },250);
        });  
    }
    if(wScroll > $('.karir-2').offset().top - 320 ){
        $('.karir-2',function(){
            setTimeout(function(){
                $('.karir-2').addClass('karir-2-muncul');  
            },250);
        });  
    }
    if(wScroll > $('.karir-3').offset().top - 320 ){
        $('.karir-3',function(){
            setTimeout(function(){
                $('.karir-3').addClass('karir-3-muncul');  
            },250);
        });  
    }
    if(wScroll > $('.karir-4').offset().top - 320 ){
        $('.karir-4',function(){
            setTimeout(function(){
                $('.karir-4').addClass('karir-4-muncul');  
            },250);
        });  
    }
    
    // PARALLAX - Galeri
    if(wScroll > $('.card-1').offset().top - 230 ){
        $('.card-1',function(){
            setTimeout(function(){
                $('.isi-card-1-1').addClass('isi-card-1-1-muncul');  
            },150);
        });  
        $('.card-1',function(){
            setTimeout(function(){
                $('.isi-card-1-2').addClass('isi-card-1-2-muncul');  
            },550);
        });  
        $('.card-1',function(){
            setTimeout(function(){
                $('.isi-card-1-3').addClass('isi-card-1-3-muncul'); 
            },950);
        });  
    }

    if(wScroll > $('.card-2').offset().top - 500 ){
        $('.card-2',function(){
            setTimeout(function(){
                $('.isi-card-2-1').addClass('isi-card-2-1-muncul');  
            },1250);
        });  
        $('.card-2',function(){
            setTimeout(function(){
                $('.isi-card-2-2').addClass('isi-card-2-2-muncul');  
            },1650);
        });  
    }

});


$( '#navbar .navbar-nav a' ).on('click', 
function () {
$( '#navbar .navbar-nav' ).find( 'li.active' )
.removeClass( 'active' );
$( this ).parent( 'li' ).addClass( 'active' );
});



