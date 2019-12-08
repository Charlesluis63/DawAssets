var dataJson = {"delitos":[{"usuario":"John Doe" , "tipoDelito":"Robo", "sector":"Martha de Roldos", "datetime":"21/10/2019 07:00 PM", "comentario":"Me robaron mi reloj en este sector. Cuidado!"},{"usuario":"Joe Mama" , "tipoDelito":"Consumo de drogas y Robo", "sector":"Sauces 6", "datetime":"01/11/2019 08:00 PM", "comentario":"En el parque proximo cuando se entra por el callejon del Comedor Juanito hay un grupo de chicos que consumen drogas y a veces roban a los que pasan por alli. Eviten pasar por allí "}]};
var data = JSON.parse(dataJson);
var data = data.delitos;

$("button#siguienteDelito").click(function(){
  var actualId = getDelitoActual();
  var nDelitos = dataJson.length;
  if(actualId == parseInt(nDelitos -1 )){
    setDelitoActual(0);
    fillDelito(0);
    return;
  }
  for(var i = 0; i < nDelitos; i++){
    if(actualId + 1 == i){
      setDelitoActual(actualId + 1);
      fillDelito(actualId + 1);
      break;
    }
  }
});

function getDelitoActual(){
  return parseInt($("button#siguienteDelito").attr("actualId"));
}

function setDelitoActual(id){
  $("button#siguienteDelito").attr("actualId", toString(id));
}

function fillDelito(id){
  $("#usuario").val(data[i].usuario);
  $("#tipodelito").val(data[i].tipoDelito);
  $("#sector").val(data[i].sector);
  $("#comentario").val(data[i].comentario);
  $("#datetime").val(data[i].datetime);
}

