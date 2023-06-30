$(document).ready(function () {

  // Mostrar apenas o div "bem-vindo" ao carregar a página
  $("#bem-vindo").show();

  // Manipular o clique nos links do nav bar
  $("nav a").click(function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    var target = $(this).attr("data-target"); // Obtém o atributo data-target

    // Ocultar todas as divs, exceto o div alvo
    $("div.col-12").not("#" + target).hide();

    // Mostrar o div alvo
    $("#" + target).show();

    $(".offcanvas").offcanvas('hide');
  });


  $('.gallery img').on('click', function() {
    var src = $(this).attr('src');
    $('.lightbox img').attr('src', src);
    $('.lightbox').fadeIn();
  });

  $('.lightbox').on('click', function() {
    $(this).fadeOut();
  });

});