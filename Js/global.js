(function($){$.fn.Move = function(){var position = $('.hombre').css('margin-left');if(parseInt(position)==790) return$('.hombre').stop().animate({'margin-left':750,'margin-top':100}, 5000);}})(jQuery);
$(document).ready(function(){initialize();$('.avion').stop().animate({'left':$(window).width()},90000,function(){$(this).remove();});$('.intro').mouseover(function(){$('body').stop().animate({'background-position-y':'70px'},'slow'); });$('.intro').mouseout(function(){$('body').stop().animate({'background-position-y':'80px'},'slow'); });$('nav a').click(function(evt){
      var id = $(this).attr('class'); var scroll = 0;switch(id){case 'nosotros':scroll = $('.intro').height();break;    case 'clientes':scroll = ($('.intro').height()+$('.snosotros').height());break; case 'proyectos':scroll = ($('.intro').height()+$('.snosotros').outerHeight()+$('.sclientes').height());break; case 'ilustraciones':scroll = ($('.intro').height()+$('.snosotros').outerHeight()+$('.sclientes').height()+$('.sproyectos').outerHeight());$('.hombre').Move();break; case 'creamos':scroll = ($('.intro').height()+$('.snosotros').outerHeight()+$('.sclientes').outerHeight()+$('.sproyectos').outerHeight()+$('.silustraciones').height());break; case 'unetenos':scroll = ($('.intro').height()+$('.snosotros').outerHeight()+$('.sclientes').outerHeight()+$('.sproyectos').outerHeight()+$('.silustraciones').outerHeight()+$('.sunetenos').height());break;case 'contacto':scroll = ($('.intro').height()+$('.snosotros').outerHeight()+$('.sclientes').outerHeight()+$('.sproyectos').outerHeight()+$('.silustraciones').outerHeight()+$('.sunetenos').outerHeight()+$('.scontacto').outerHeight()+180);break; case '':return; break;}$('html,body').animate({scrollTop:scroll},1000, 'swing');evt.preventDefault();});$(window).scroll(function(){var scroll = $(window).scrollTop();if(scroll>=($(window).height()+680) && scroll<($(window).height()+680+650) ){imagenes();               }else if(scroll>=($(window).height()+680+700+700) && scroll<$(window).height()+680+700+700+700){$('.hombre').Move();}if(scroll==$(document).height() - $(window).height()){$('#map_canvas').fadeIn('slow');}else{$('#map_canvas').fadeOut(10);}});
      
    $("#slides").slides({
			autoHeight: true,
			preload: true,
			play: 10000,
			pause: 2500,
			hoverPause: true,
			paginationClass: 'hz',
			generateNextPrev: false
		});
			
      $('#ver').click(function(evt){
        $('.silustraciones .primerafase').animate({'margin-left':'-30%'},1000, 'swing');
        evt.preventDefault();
      });

       $('#atras').click(function(evt){
          $('.silustraciones .primerafase').animate({'margin-left':'+0%'},1000, 'swing');
          evt.preventDefault();
      });
      
      $('.silustraciones .segundafase img').click(function(){
        var ref = $(this).attr('src');
        var values = ref.split('.');
        var div = '<div class="modal"><img src="'+values[0]+'_G.'+values[1]+'"/></div>'
        $('body').append('<div class="overlay"></div>');
        $('.overlay').css('top',$(window).scrollTop());
        $('body').css('overflow','hidden');
        $('.silustraciones .segundafase').append(div);
        $('.modal').css({
                  'left': parseInt(($('.silustraciones').width()- arrValues[values[0]]))/5,
                  'top' : $('.silustraciones').css('margin-top')
        });
      });
      
      $('.overlay').live('click',function(){
             $('.modal').fadeOut('slow').remove();
             $('.modalproyectos').fadeOut('slow').remove();
             $(this).fadeOut('slow').remove();
             $('body').css('overflow-y','visible');
      });
      
      
      $('.proyectos .block').click(function(){
                 var id = $(this).attr('id');
                 $('body').append('<div class="overlay"></div>');
                 $('body').css('overflow','hidden');
                 $('.overlay').css('top',$(window).scrollTop());
                 $('.sproyectos .proyectos').append(arrModals[id])
                 $('.modalproyectos').css({
                        'left'    : $('.sproyectos').css('margin-left'),
                        'top'     : $('.sproyectos').css('margin-top')
              });
      });
      
      
      $('.snosotros img').mouseover(function(){
       var src      = $(this).attr('src');
       var arrValue = src.split('.');
       $(this).attr('src',arrValue[0]+'2.'+arrValue[1]);
      });
      
      
      $('.snosotros  img').mouseout(function(){
         var src      = $(this).attr('src');
         var arrValue = src.split('2');
         $(this).attr('src',arrValue[0]+''+arrValue[1]);
      });
      $('body').css('overflow-x','hidden')
});
   
 

function initialize() {
				var latlng = new google.maps.LatLng(10.992733,-74.808296);
				var settings = {
					zoom: 16,
					center: latlng,
					mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP};
				var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				var contentString = '<div id="content">'+
					'<div id="siteNotice">'+
					'</div>'+
					'<h1 id="firstHeading" class="firstHeading">ON CREATIVITY</h1>'+
					'</div>'+
					'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				var companyImage = new google.maps.MarkerImage('Css/images/icono_ubicacion.png',
					new google.maps.Size(100,50),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);
				var companyPos = new google.maps.LatLng(10.992203,-74.807796);
				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					title:"On creativity",
					zIndex: 3});
				google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
}


function imagenes()
{
   var id = $('.logos').attr('id');
   $('.logos').attr('id','show');
   if(id=='show') return
   $('.procecorp').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
           $('.tresdos').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                  $('.districomex').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                         $('.go').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                                     $('.angela').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                                           $('.rubik').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                                                     $('.abogados').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                                                                 $('.semillas').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                                                                             $('.safer').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0},function(){
                                                                                        $('.tu').css({opacity: 0.0, visibility: "visible"}).stop().animate({opacity: 1.0})
                                                                              })
                                                                  })
                                                    })
                                          })
                                })    
                         })
                  });
           });
   });
}


var arrValues = {
  'Css/images/1':551,
  'Css/images/2':313,
  'Css/images/3':561,
  'Css/images/4':589,
  'Css/images/5':333,
  'Css/images/6':337,
  'Css/images/7':319,
  'Css/images/8':347,
  'Css/images/9':881
}


var arrModals = {
'procecorp': '<div class="modalproyectos"><ul>'+
            '<li>'+
                '<div class="titulo"><h2>PROCECORP</h2></div>'+
                '<div class="info">'+
                 ''+
                  '  <p>'+
                   '     <b>C</b>reamos la identidad visual y el sitio web oficial de PROCECORP, una empresa<br>'+
                    '    colombiana de BPO (Business Process Outsourcing). Se especializa en brindar<br>'+
                     '   soluciones en el mejoramiento de Procesos Administrativos, Sistemas de <br> '+
                      '  Información y Tecnología.'+
                    '</p>'+
                    '<h6>Lo que hicimos : </h6>'+
                    '<ol>'+
                     '   <li><h4>Identidad Visual</h4>'+
                      '      <h4>Concepto creativo</h4>'+
                       '     <h4>Diseño Web</h4>'+
                        '    <h4>Desarrollo Web</h4>'+
                        '</li>'+
                        '<li><h4>Dirección de Arte</h4>'+
                         '   <h4>Diseño Gráfico</h4>'+
                          '  <h4>Ilustraciones</h4>'+
                          '  <h4>Brochure</h4>'+
                        '</li>'+
                    '</ol>'+
                '</div></li></ul>'+
                '<div class="images">'+
                    '<img src="Css/images/p1.png" alt="40"/>'+
                    '<img src="Css/images/p2.png" alt="40"/>'+
                    '<img src="Css/images/p3.png" alt="40"/>'+
                    '<img src="Css/images/p4.png" alt="40"/>'+
                    '<img src="Css/images/p5.png" alt="40"/>'+
                '</div>'+
             '</div>',
    
 'angela' :  '<div class="modalproyectos"><ul>'+
            '<li>'+
                '<div class="titulo"><h2>ANGELA SWAFFORD</h2></div>'+
                '<div class="info">'+
                 ''+
                  '  <p>'+
                   '     <b>E</b>stamos trabajando en el nuevo sitio web oficial de la novelista  y periodista <br> científica  '+
                            'Ángela Posada-Swafford, en el cual los usuarios podrán tener una <br> experiencia  online de '+
                            'las aventuras que ésta intrépida escritora ha vivido <br> alrededor del mundo.'+
                    '</p>'+
                    '<h6>Lo que estamos haciendo : </h6>'+
                    '<ol>'+
                     '   <li><h4>Identidad Visual</h4>'+
                      '      <h4>Concepto creativo</h4>'+
                       '     <h4>Diseño Web</h4>'+
                        '    <h4>Desarrollo Web</h4>'+
                        '</li>'+
                        '<li><h4>Dirección de Arte</h4>'+
                         '   <h4>Diseño Gráfico</h4>'+
                          '  <h4>Ilustraciones</h4>'+
                          '  <h4>Redes Sociales</h4>'+
                        '</li>'+
                    '</ol>'+
                '</div></li></ul>'+
                '<div class="images">'+
                    '<img src="Css/images/a2.jpg" alt="10"/>'+
                    '<img src="Css/images/a4.png" alt="40"/>'+
                    '<img src="Css/images/a5.png" alt="40"/>'+
                     '<img src="Css/images/a1.jpg" alt="40"/>'+
                    '<img src="Css/images/a3.jpg" alt="80"/>'+
                    
                '</div>'+                        
        '</div>',
    
    'tresdosjuno' :  '<div class="modalproyectos"><ul>'+
            '<li>'+
                '<div class="titulo"><h2>TRES DOS JUNO</h2></div>'+
                '<div class="info">'+
            
                  '  <p>'+
                   '<b>C</b>reamos una página en Facebook donde jóvenes y adultos de habla <br> hispana pueden '+
                    'seguir las peripecias de la sonda JUNO en su  viaje <br> fantástico hacia Júpiter, y reconocer a '+
                    'la  Dra. Adriana Ocampo Uria,<br> del Directorado de Ciencias de la NASA en Washington DC, '+
                    'como la <br> directora de esta misión.'+
                    '</p>'+
                    '<h6>Lo que hicimos : </h6>'+
                    '<ol>'+
                     '   <li><h4>Identidad Visual</h4>'+
                      '      <h4>Concepto creativo</h4>'+
                       '     <h4>Redes Sociales</h4>'+
                        '</li>'+
                        '<li><h4>Diseño Gráfico</h4>'+
                          '  <h4>Mini Campaña Publicitaria</h4>'+
                        '</li>'+
                    '</ol>'+
                '</div></li></ul>'+
                '<div class="images">'+
                    '<img src="Css/images/logojuno.jpg" alt="40"/>'+
                    '<img src="Css/images/t2.png" alt="40"/>'+
                    '<img src="Css/images/t3.png" alt="40"/>'+
                    '<img src="Css/images/t4.png" alt="40"/>'+
                    '<img src="Css/images/t5.png" alt="40"/>'+
                    '<img src="Css/images/t6.png" alt="40"/>'+
                    '<img src="Css/images/t7.png" alt="40"/>'+
                '</div>'+
        '</div>',
    
    
    'semillas' :  '<div class="modalproyectos"><ul>'+
            '<li>'+
                '<div class="titulo"><h2 class="hsemillas">SEMILLAS ESPACIALES PARA LA PAZ</h2></div>'+
                '<div class="info">'+
               
                  '  <p>'+
                   '<b>C</b>reamos el logo y otras piezas de este proyecto dirigido por la Dra. Adriana <br> Ocampo '+
                    'Uria, una iniciativa que invita a los jóvenes latinoamericanos a <br> buscar formas creativas '+
                    'de acercar a sus países a la exploración espacial,<br> incluyendo el desarrollo de tecnologías '+
                    'y oportunidades de educación <br> y empleos que permitan el sueño latinoamericano en el '+
                    'espacio.'+
                    '</p>'+
                    '<h6>Lo que hicimos : </h6>'+
                    '<ol>'+
                     '   <li><h4>Identidad Visual</h4>'+
                      '      <h4>Concepto creativo</h4>'+
                      '   <h4>Direccion de Arte</h4>'+
                        '</li>'+
                        '<li>'+
                         '   <h4>Diseño Gráfico</h4>'+
                          '  <h4>Ilustraciones</h4>'+
                        '</li>'+
                    '</ol>'+
                '</div></li></ul>'+
                '<div class="images">'+
                    '<img src="Css/images/s1.png" alt="40"/>'+
                    '<img src="Css/images/get.jpg" alt="40"/>'+
                    '<img src="Css/images/s2.png" alt="40"/>'+
                    '<img src="Css/images/s3.png" alt="40"/>'+
                    '<img src="Css/images/s4.png" alt="40"/>'+
                '</div>'+'</div>'
}