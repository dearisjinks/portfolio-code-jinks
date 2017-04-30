//nav bar hide and slide down
$(function(){
$("document").ready(function(){
	$("#nav").slideUp();
	});
$("#logo").click(function(){
	$("#nav").slideDown(200);
	})
});


//hover over skills section////////////////////////////////////////////////////

$(".skills").on("mouseover",function(){
   $(this).animate({backgroundColor:"#f47d15",width:"1000px",height: "900px"},'slow');
}).on("mouseleave",function(){
   $(this).animate({backgroundColor:"#444", width:"700px", height: "650px"},'slow');
});



//background images rotate using javascript////////////////////////////////////

var myImage = document.getElementById("background");

var imageArray = ["1.jpg","2.jpg"];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

// setInterval is also in milliseconds
setInterval(changeImage,5000);


// execute the flip card effect

$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});

$(function(){
    $(".flip2").flip({
        trigger: 'hover'
    });
});

$(function(){
    $(".flip3").flip({
        trigger: 'hover'
    });
});

$(function(){
    $(".flip4").flip({
        trigger: 'hover'
    });
});

$(function(){
    $(".flip5").flip({
        trigger: 'hover'
    });
});

$(function(){
    $(".flip6").flip({
        trigger: 'hover'
    });
});



////smooth scrolling







