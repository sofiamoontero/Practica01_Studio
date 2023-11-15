<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

$(document).ready(function(){

    
    // Abre
    $("#menu i.fa-bolt").click(function () {

        $("#menu ul").css("left", "0%");
    });


    // Cierra
    $("#menu ul li i.fa-solid").click(function () {

        $("#menu ul").css("left", "-100%");
    });


    // Img hover

    $("#image").hover(function(){
        
        $(this).attr("src", "./img/image_hover.jpg");
    }, function() {
        
        $(this).attr("src", "./img/image_normal.jpg");
    }); 

    
    //CAMBIO DE IMG - 1
    
    $("#img_casette001").hover(function(){ 
        console.log("img hover"); 
        $("#img_casette001").attr("src", "img/casette.img-01.png");


        }, function(){ 
        console.log("img normal"); 
        $("#img_casette001").attr("src", "img/casette.base-01.png");
    
    });

    
    //CAMBIO DE IMG - 2

    $("#img_casette002").hover(function(){ 
        console.log("img hover"); 
        $("#img_casette002").attr("src", "img/casette.img-02.png");


        }, function(){ 
        console.log("img normal"); 
        $("#img_casette002").attr("src", "img/casette.base-02.png");
    
    });

    //CAMBIO DE IMG - 3

    $("#img_casette003").hover(function(){ 
        console.log("img hover"); 
        $("#img_casette003").attr("src", "img/casette.img-03.png");


        }, function(){ 
        console.log("img normal"); 
        $("#img_casette003").attr("src", "img/casette.base-03.png");
    
    });

    //CAMBIO DE IMG - 4

    $("#img_casette004").hover(function(){ 
        console.log("img hover"); 
        $("#img_casette004").attr("src", "img/casette.img-04.png");


        }, function(){ 
        console.log("img normal"); 
        $("#img_casette004").attr("src", "img/casette.base-04.png");
    
    });

    //CAMBIO DE IMG - 5

    $("#img_casette005").hover(function(){ 
        console.log("img hover"); 
        $("#img_casette005").attr("src", "img/casette.img-05.png");


        }, function(){ 
        console.log("img normal"); 
        $("#img_casette005").attr("src", "img/casette.base-05.png");
    
    });

    //CAMBIO DE IMG - 6

    $("#img_casette006").hover(function(){ 
        console.log("img hover"); 
        $("#img_casette006").attr("src", "img/casette.img-06.png");


        }, function(){ 
        console.log("img normal"); 
        $("#img_casette006").attr("src", "img/casette.base-06.png");
    
    });

});

/**/

window.onload = function () {
    "use strict";
    AOS.init({
        duration: 1000,
    });
};


