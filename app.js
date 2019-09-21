$( document ).ready(function() {
  var valores=$('.col-2').children();
  console.log(valores);

});

  $(".btn-reinicio").click(function(){

    $(".btn-reinicio").replaceWith("<button class='btn-reinicio'>Reiniciar</button>");

    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-1").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      opera();
      opera3();
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-2").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      opera();
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-3").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      opera();
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-4").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      opera();
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-5").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      opera();
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-6").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      opera();
    }
    for (var i = 0; i <6; i++) {
      var num=Math.round(Math.random() * (4 - 1) + 1);;
      $(".col-7").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      opera();
    }
    //cambio de color del titulo
    $(".main-titulo").css("color","blue");
    //mover elementos-----------------


    $(function() {

      //  $(".soltar" ).draggable();
        //  $(".col-2").droppable();
        $( '.soltar' ).draggable({
    helper: 'clone'
  });
  $( '.col-7' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      opera();
      $('#movimientos-text').text(marca);
    }
  });
  $( '.col-6' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      opera();
      $('#movimientos-text').text(marca);
    }
  });
  $( '.col-5' ).droppable({
    accept: '.soltar',
    hoverClass: 'hovering',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-4' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-3' ).droppable({
    accept: '.soltar',
    hoverClass: 'hovering',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-2' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-1' ).droppable({
    accept: '.soltar',
    hoverClass: 'hovering',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
    });
    });
      //comprobar las figuras
    function opera(){
      var marcador=$('#score-text').text();
      var marca=parseInt(marcador);
    for (var j = 0; j <6; j++) {
      var valores=$('.col-'+j+'').children();

    for (var i = 2; i < valores.length; i++) {
      if (valores[i-2].id == valores[i-1].id && valores[i-2].id == valores[i].id && valores[i-2].id == valores[i].id) {
        marca=marca+10;
        console.log(marcador);
        valores[i-2].remove();
        valores[i-1].remove();
        valores[i].remove();
        var num=Math.round(Math.random() * (4 - 1) + 1);;
        $(".col-"+j+"").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
        var num=Math.round(Math.random() * (4 - 1) + 1);;
        $(".col-"+j+"").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
        var num=Math.round(Math.random() * (4 - 1) + 1);;
        $(".col-"+j+"").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      }
    }
    }
    $('#score-text').text(marca);
    marca=0;
    }


    function opera3(){
      var marcador=$('#score-text').text();
      var marca=parseInt(marcador);
      var valores1=$('.col-2').children();
      var valores2=$('.col-3').children();
      var valores=$('.col-4').children();
    for (var i = 0; i < valores.length; i++) {
      if (valores[i].id == valores1[i].id && valores[i].id == valores2[i].id && valores1[i].id == valores2[i].id) {
        marca=marca+10;
        console.log(marcador);
        valores[i].remove();
        valores1[i].remove();
        valores2[i].remove();
        var num=Math.round(Math.random() * (4 - 1) + 1);;
        $(".col-4").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
        var num=Math.round(Math.random() * (4 - 1) + 1);;
        $(".col-2").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
        var num=Math.round(Math.random() * (4 - 1) + 1);;
        $(".col-3").append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
      }
    }

    $('#score-text').text(marca);
    marca=0;
    }
    window.onload = updateClock;
    var totalTime = 120;
    function updateClock() {
      document.getElementById('timer').innerHTML = totalTime;
      if(totalTime==0){
        var marcador=$('#score-text').text();
        alert(marcador);
      }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);
      }
    }
