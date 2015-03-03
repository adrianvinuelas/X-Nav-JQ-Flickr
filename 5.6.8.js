var datos = "";
var filt1 ="";
var filt2 ="";
var filt3 ="";
jQuery(document).ready(function() {
	console.log("arrancado el dom");
	//bajo el JSON y lo guardo en la global datos para usarlo despues
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+filt1+"&tagmode=any&format=json&jsoncallback=?",function(data){
			datos = data;
	});

    $('#filtrar').click(function(){

        if($('#filtro1').val()!=""){
            filt1 = $('#filtro1').val();
            $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+filt1+"&tagmode=any&format=json&jsoncallback=?",function(data){
                datos = data;
                cogerImagenes(1);
            });
        }else{
            $('#fotos1').html("");
            $('#busqueda1').html("");
            $('#filtro1').val("");
        }

        if($('#filtro2').val()!=""){
            filt2 = $('#filtro2').val();
            $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+filt2+"&tagmode=any&format=json&jsoncallback=?",function(data){
                datos = data;
                cogerImagenes(2);
            });
        }else{
            $('#fotos2').html("");
            $('#busqueda2').html("");
            $('#filtro2').val("");
        }

        if($('#filtro3').val()!=""){
            filt3 = $('#filtro3').val();
            $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+filt3+"&tagmode=any&format=json&jsoncallback=?",function(data){
                datos = data;
                cogerImagenes(3);
            });
        }else{
            $('#fotos3').html("");
            $('#busqueda3').html("");
            $('#filtro3').val("");
        }
                
    });

    function cogerImagenes(num){
        console.log("entro a cogerimagenes con num = " + num);
        if(num == 1){
            var imagenes1 = "";
            for(i=0;i<4;i++){
                imagenes1 += "<img src="+ datos.items[i].media.m +"><br>";
            }
            $('#fotos1').html(imagenes1);
            $('#busqueda1').html(filt1);
            $('#filtro1').val("");
        }else if(num == 2){
            var imagenes2 = "";
            for(i=0;i<4;i++){
                imagenes2 += "<img src="+ datos.items[i].media.m +"><br>";
            }
            $('#fotos2').html(imagenes2);
            $('#busqueda2').html(filt2);
            $('#filtro2').val("");
        }else if(num == 3){
            var imagenes3 = "";
            for(i=0;i<4;i++){
                imagenes3 += "<img src="+ datos.items[i].media.m +"><br>";
            }
            $('#fotos3').html(imagenes3);
            $('#busqueda3').html(filt3);
            $('#filtro3').val("");
        }
    }
    
});