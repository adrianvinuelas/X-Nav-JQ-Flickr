var datos = "";
var filt ="fuenlabrada";
jQuery(document).ready(function() {
	console.log("arrancado el dom");
	//bajo el JSON y lo guardo en la global datos para usarlo despues
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+filt+"&tagmode=any&format=json&jsoncallback=?",function(data){
			datos = data;
	});

    $('#busqueda').html(filt);

    $('#filtrar').click(function(){
    	console.log("entro a filtro");
    	console.log($('#filtro').val());
        if($('#filtro').val()!=""){
            filt = $('#filtro').val();
        }
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+filt+"&tagmode=any&format=json&jsoncallback=?",function(data){
            datos = data;
            cogerImagenes();
        });        
    });
    function cogerImagenes(){
        var imagenes = "";
        for(i=0;i<4;i++){
            imagenes += "<img src="+ datos.items[i].media.m +"><br>";
        }
        $('#fotos').html(imagenes);
        $('#busqueda').html(filt);
        $('#filtro').val("");
    }
    
});