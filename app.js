$( document ).ready(function() {

});

  $(".btn-reinicio").click(function(){
    $(".btn-reinicio").replaceWith("<button class='btn-reinicio'>Reiniciar</button>")
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-1").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-2").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-3").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-4").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-5").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-6").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-7").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
    }
    //cambio de color del titulo
    $(".main-titulo").css("color","blue");
    //mover elementos-----------------
    $(function() {
      $(".main-titulo").css("color","blue");
        $(".soltar" ).draggable();
        $(".main-titulo").css("color","yellow");
    });
    //comprobar las figuras
    var valores
    });
