/*jQuery(document).ready(function(){


    jQuery(".home").click(function(){
        jQuery(".page2").fadeIn("slow");
        jQuery(".page2").fadeIn(3000);
       
    })



    jQuery(".about").click(function(){
        jQuery(".page3").fadeIn("slow");
        jQuery(".page3").fadeIn(4000);
       jQuery(".peaple").animate({left:'800px'}, "slow");
    })

    jQuery(".contact").click(function(){
       
       jQuery(".maps").animate({top:'40px'}, "slow");
       jQuery(".cnt").slideDown("slow");
    })







})*/
console.log("ffff");
const page2= document.querySelector(".page2");
const picture= document.querySelector(".iamge");
const paragraphe= document.querySelector(".page2 ");

const  T =new TimelineMax();
T.fromTo(page2,1.2,{x:"-100%"},{x:"0%"})
console.log("ffff");
