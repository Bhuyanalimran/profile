$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                    $("#learning").click(function(){
                        $("#index").fadeOut();
                        $("#learning_scroll").fadeIn();
                        $('#learning_left').addClass('animated slideInLeft');
                        $('#learning_right').addClass('animated slideInRight');
                        });   
                        $("#interest").click(function(){
                            $("#index").fadeOut();
                            $("#interest_scroll").fadeIn();
                            $('#interest_left').addClass('animated slideInLeft');
                            $('#interest_right').addClass('animated slideInRight');
                            });          
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});