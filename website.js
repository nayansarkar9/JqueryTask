$(document).ready(function() {
	$(".l").on({
		click: function() {
			
			$(".l").removeClass("active");
			$(this).addClass("active");
		}
	});

$("#submit").click(function() {
	alert("fillup");
	$("*#text").css("backgroundColor","yellow");
});
$(".three").on("click" , function() {
	$(".bckclr").fadeOut(1000, function() {
        $(".bckclr").css("background-color", "#FF0000").fadeIn(1000);
	});
});
$(".four").on("click" , function() {
	$(".bckclr").fadeOut(1000, function() {
        $(".bckclr").css("background-color", "#009999").fadeIn(1000);
	});
});
$("#fo1").click(function () {
	$(".footer").css("background-color" , "aqua");
});
$("#fo2").click(function () {
	$(".footer").css("background-color" , "Chartreuse ");
});
$("#fo3").click(function () {
	$(".footer").css("background-color" , "Orange");
});
$("#fo4").click(function () {
	$(".footer").css("background-color" , "#009999 ");
});
$(".s2").hide();

$(".button1").click(function() {
	$(".s2").slideToggle();
});
$("div").scroll(function() {
	alert('U have scrolled');
});
$(window).on("scroll" , function() {
	var pos1= window.pageYOffset;
	var pos2= 100;
	if(pos1>pos2)
	{
		$(".c11").css("margin" , "0");
	}
	else
		$(".c11").css("margin" , "20px auto 0 auto");
});
});