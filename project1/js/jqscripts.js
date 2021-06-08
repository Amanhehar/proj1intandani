 //JavaScript

$("#buttonn1").click(function(){
	$("#grec")
	.animate({
		height:50,
		width:600,
		opacity: 0.9,
		borderWidth: "2px",
		marginLeft: "50px"},
		250,"easeInSine")

	.animate({
		height:250,
		width:300,
		opacity: 0.8,
		borderWidth: "2px",
		marginLeft: "40%"},
		250,"easeInSine")

	.animate({
		height:70,
		width:70,
		opacity: 0.7,
		borderWidth: "6px",
		marginLeft: "0px"},
		250,"easeInSine")

	.animate({
		height:150,
		width:150,
		opacity: 0.6,
		borderWidth: "10px",
		marginLeft: "50px"},
		250,"easeInOutBounce");
	document.getElementById("rectxt").innerHTML= "Animated Brown Rectangle";
})

$("#buttonn2").click(function(){
	$("#meme").animate({
		width: 200,
		height: 200,
		opacity: 1,
		marginLeft: "0px"
	},
		1,"easeOutExpo");
	$("#memeimg").animate({
		width: 200,
		height: 200,
		opacity: 1,
		marginLeft: "0px"},
		1500,"easeInOutBounce");
	document.getElementById("imgtxt").innerHTML= "Animated Image";
})


// As per instructions 
// the ball goes back and forth between 
// 2 seconds but i added a bit more delay
// to inner ball to make it look cool.

$("#buttonn3").click(function(){
	$("#circle")
	.animate({left: '10%', top: '20px', backgroundColor:"#011C40"},200, "easeInOutBounce" )
	.animate({left: '30%', top: '-90px', },200, "easeInOutBounce" )
	.animate({left: '50%' , top: '20px', backgroundColor:"green"},200, "easeInOutBounce" )
	.animate({left: '70%' , top: '-90px'},200, "easeInOutBounce" )
	.animate({left: '90%' , top: '20px', width: 200 , height: 200 , backgroundColor:"purple"},200, "easeInOutBounce")
	.animate({left: '70%' , top: '-90px'},200, "easeInOutBounce")
	.animate({left: '50%' , top: '20px', width: 100 , height: 100 , backgroundColor:"green"},200, "easeInOutBounce")
	.animate({left: '30%' , top: '-90px'},200, "easeInOutBounce")
	.animate({left: '5%' , top: '20px', width: 150 , height: 150 }, 200, "easeInOutBounce")
	.animate({left: '10px' , top: '0px', backgroundColor:"#011C40"} ,200, "easeInOutBounce");

// Animating first inner small ball

	$("#smallC1")
	.animate({left: '70%', top: '115px' , backgroundColor:"#B3E0F2"},400, "easeInOutBounce" )
	.animate({left: '8%', top: '30px'},400, "easeInOutBounce" )
	.animate({left: '81%' , top: '40px'},400, "easeInOutBounce" )
	.animate({left: '10%' , top: '100px'},400, "easeInOutBounce" )
	.animate({left: '65px' , top: '0px', backgroundColor:"white" },400, "easeInOutBounce")
	.animate({left: '10%' , top: '100px'},200, "easeInOutBounce" )
	.animate({left: '81%' , top: '40px'},200, "easeInOutBounce" )
	.animate({left: '8%', top: '30px'},200, "easeInOutBounce" )	
	.animate({left: '70%', top: '115px'},200, "easeInOutBounce")
	.animate({left: '65px' , top: '0px',backgroundColor:"#B3E0F2" },200, "easeInOutBounce");

// Animating first inner small ball

	$("#smallC2")
	.animate({left: '16%', top: '95px' , backgroundColor:"white"},400, "easeInOutBounce" )
	.animate({left: '79%', top: '10px' },400, "easeInOutBounce" )
	.animate({left: '6%' , top: '20px' },400, "easeInOutBounce" )
	.animate({left: '78%' , top: '80px' },400, "easeInOutBounce" )
	.animate({left: '65px' , top: '-20px',backgroundColor:"#B3E0F2" },400, "easeInOutBounce")
	.animate({left: '78%' , top: '80px'},200, "easeInOutBounce" )
	.animate({left: '6%' , top: '20px' },200, "easeInOutBounce" )
	.animate({left: '79%', top: '10px' },200, "easeInOutBounce" )	
	.animate({left: '19%' , top: '98px', },200, "easeInOutBounce")
	.animate({left: '65px' , top: '-20px', backgroundColor:"white"},200, "easeInOutBounce");
	document.getElementById("crcltxt").innerHTML= "Animated Blue Circle";
})	