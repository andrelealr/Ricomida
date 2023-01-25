/* CARDS */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".enviar").click(function () {
  alert("El correo fue enviado correctamente...")
})

$(document).ready(function () {
  $(".card-title1").click(function (event) {
    event.preventDefault()
    $(".card-text1").toggle()
  })

  $(".card-title1").click(function (event) {
    event.preventDefault()
    $(".img_receta1").toggle()
  })

  $(".card-title2").click(function (event) {
    event.preventDefault()
    $(".card-text2").toggle()
  })

  $(".card-title2").click(function (event) {
    event.preventDefault()
    $(".img_receta2").toggle()
  })

  $(".card-title3").click(function (event) {
    event.preventDefault()
    $(".card-text3").toggle()
  })

  $(".card-title3").click(function (event) {
    event.preventDefault()
    $(".img_receta3").toggle()
  })

  $("p.ingredientes").click(function () {
    $("p.ingredientes").css("color", "red");
  });

  $("p.preparacion").click(function () {
    $("p.preparacion").css("color", "red");
  });

});

$(".contacto").click(function () {
  alert("Gracias por escribirnos, te atenderemos a la brevedad! ")
})
