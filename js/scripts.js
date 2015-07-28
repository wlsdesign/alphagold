 
// $(document).ready(function() {
//     $('.slideshow').cycle({
//         fx: 'fade'
//     });

//     var largura_window = $(window).width();
//     $(function(){
    
    
//     // JAVASCRIPT EXECUTADO APENAS PARA TABLETS E SMARTPHONES
    
//     funcoesTabletSmart();   
//     });

//     function funcoesTabletSmart() {
//         if(largura_window <= 940) {
//             $('.menu-mob').on({
//                 click: function(){
//                     var ico_mob = $(this);

//                     if(ico_mob.hasClass("fechar")) {
//                         ico_mob.removeClass("fechar");
//                     } else {
//                         ico_mob.addClass("fechar");
//                     }

//                     $('.menu').slideToggle('fast');         
//                 }
//             });
//         }
//     } 
// });

$(document).ready(function() {
    // Menu principal
    $('.menu-principal a').click(function(e){
        $('.menu-principal a').removeClass('ativo');
        $(this).addClass('ativo');
        var alvo = $(this).attr('href').split('#').pop();
        $('html, body').animate({scrollTop: $('#'+alvo).offset().top}, 600);
        e.preventDefault();
    });


    //atualiza usuários

    $('#tbl-user').load('lista-usuario.php');
    var tempo = window.setInterval(carrega, 10000);
    function carrega(){
        $('#tbl-user').load('lista-usuario.php');
    }


    // Acordion
    $( "#accordion" ).accordion();


    $("#form").submit(function(){
        return false;
    });

    $("#envia").on("click", function(e){
        e.preventDefault();
        var elemento = $(this).parent();
        var nome = elemento.children().find('#nome').val();
        var email = elemento.children().find('#email').val();
        var zap = elemento.children().find('#zap').val();
        if(nome == ""){
            $('#status').html('<div class="alerta">Digite seu nome.</div>');
        }else if(zap == ""){
            $('#status').html('<div class="alerta">Digite seu WhatsApp.</div>');
        }else if(email == ""){
            $('#status').html('<div class="alerta">Digite seu nome.</div>');
        }else{
            $('#sexo').each(function(){
                if($(this).val() == 0){
                    $('#status').html('<div class="alerta">Escolha o sexo.</div>');
                }
                else{
                   $.post( $("#form").attr("action"), $("#form :input").serializeArray(), function(info){$("#status").html(info);});
                    clearInput();
                }
            });
        }

         
        
    });



    function clearInput(){
        $("$form :input").each(function(){
            $(this).val('');
        });
    }

    // //cadastro usuário
    // $(function($) {
    //     // Quando o formulário for enviado, essa função é chamada
    //     $("#form").submit(function() {
    //     // Colocamos os valores de cada campo em uma váriavel para facilitar a manipulação
    //     var nome = $("#nome").val();
    //     var sexo = $("#sexo").val();
    //     var email = $("#email").val();
    //     var zap = $("#zap").val();
    //     var mensagem = $("#obs").val();
    //     // Exibe mensagem de carregamento
    //     // $("#status").html("<img itemprop="image" src='loader.gif' alt='Enviando' />");
    //     // Fazemos a requisão ajax com o arquivo envia.php e enviamos os valores de cada campo através do método POST
    //     $.post('../php/precadastro.php', {nome: nome, sexo: sexo, email: email, zap: zap, mensagem: mensagem }, 
    //         function(resposta) {
    //             // Quando terminada a requisição
    //             // Exibe a div status
    //             $("#status").slideDown();
    //             // Se a resposta é um erro
    //             if (resposta != false) {
    //                 // Exibe o erro na div
    //                 $("#status").html(resposta);
    //             } 
    //             // Se resposta for false, ou seja, não ocorreu nenhum erro
    //             else {
    //                 // Exibe mensagem de sucesso
    //                 $("#status").html("Mensagem enviada com sucesso!");

    //                 // Limpando todos os campos
    //                 $("#nome").val("");
    //                 $("#sexo").val("");
    //                 $("#email").val("");
    //                 $("#zap").val("");
    //                 $("#obs").val("");
    //             }
    //         });
    //     });
    // });


    //cadastro usuário
    // $('.enviar').on("click", function(e){
    //     e.preventDefault();
    //     var dados = $('#form').serialize();

    //     $.ajax({ 
    //         method: "POST",
    //         url: "php/cadastro.php",
    //         data: dados,
    //         success: function(response) {
    //             alert(response);

    //         }
    //     });
    // });

   


});




