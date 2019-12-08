var mymap = L.map('map').setView([-2.177769, -79.903658],15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18}).addTo(mymap);
L.control.scale().addTo(mymap);
var gun_icon = L.icon({
    iconUrl: 'assets/img/marcadores/pistola.png',
    iconSize: [30, 20],
    iconAnchor: [0, 0],
    popupAnchor: [-0, -0],
});

var unito = L.marker([-2.177769, -79.903658],{icon: gun_icon,draggable: true}).addTo(mymap);

unito.on('moveend',function(ev){
    console.log(unito.getLatLng().toString());
    mensaje = unito.getLatLng().toString();

    return unito.getLatLng().toString()
   


});

var boton = document.getElementById("siguienteDelito");
boton.addEventListener('click',function(){
        //Evitar que se mueva el marcador
        unito.dragging.disable();
});





