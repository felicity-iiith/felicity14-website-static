$(function () {
	$('#js-news').ticker({
		htmlFeed: false,
		ajaxFeed: true,
		feedUrl: '/feed.xml',
		feedType: 'xml',
		speed: 0.10,
		debugMode: false,
		controls: false,
		titleText: '',
		displayType: 'fade',
		direction: 'ltr',
		pauseOnItems: 4000,
		fadeInSpeed: 600,
		fadeOutSpeed: 600,
	});
});

function startVideo(){
	vid1 = document.getElementById('vid1');
	vid2 = document.getElementById('vid2');
	vid3 = document.getElementById('vid3');
	vid4 = document.getElementById('vid4');

	vid1.addEventListener('ended', function(e) {playSecondVideo();});
	vid2.addEventListener('ended', function(e) {playThirdVideo();});
	vid3.addEventListener('ended', function(e) {playForthVideo();});
	vid4.addEventListener('ended', function(e) {playFirstVideo();});

	if (vid1.readyState > 2 && vid2.readyState > 2 && vid3.readyState > 2 && vid4.readyState > 2) {
		bgimg = document.getElementById('bgimg');
		bgimg.style["display"] = "none";
		bgimg.hidden = true;
		bgvid = document.getElementById('bgvid');
		bgvid.style["display"] = "inline";
		playFirstVideo();
	}
	else{
		setTimeout("startVideo()",1000);
	}
}

function playFirstVideo(){
	cur = document.getElementById('vid4');
	cur.style['display']="none";
	cur = document.getElementById('vid1');
	cur.style['display']="inline";
	cur.play();
}

function playSecondVideo(){
	cur = document.getElementById('vid1');
	cur.style['display']="none";
	cur = document.getElementById('vid2');
	cur.style['display']="inline";
	cur.play();
}

function playThirdVideo(){
	cur = document.getElementById('vid2');
	cur.style['display']="none";
	cur = document.getElementById('vid3');
	cur.style['display']="inline";
	cur.play();
}

function playForthVideo(){
	cur = document.getElementById('vid3');
	cur.style['display']="none";
	cur = document.getElementById('vid4');
	cur.style['display']="inline";
	cur.play();
}

window.onresize = function(event) {
	$(".content_r").css("padding-top",((window.innerHeight/2 - 225) + "px"));
}

jQuery(document).ready(function() {
	var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
	{
		oga: "static/audio/track.ogg",
		mp3: "static/audio/track.mp3"
	},
	{
		supplied: "oga,mp3",
		cssSelectorAncestor: "#cp_container_1",
		swfPath: "js",
		wmode: "window",
		loop: "true",
		volume: 0.25,
	});

	setTimeout(function(){
			if(localStorage.getItem("felicityBGMStatus") == "false"){
				$("#jquery_jplayer_1").jPlayer("pause");
			}
			else if(localStorage.getItem("felicityBGMStatus") === "true"){
				$("#jquery_jplayer_1").jPlayer("play");
			}
			else{
				localStorage.setItem("felicityBGMStatus","true");
				$("#jquery_jplayer_1").jPlayer("play");
			}
			$("#jquery_jplayer_1").bind($.jPlayer.event.play, function(){localStorage.setItem("felicityBGMStatus","true");});
			$("#jquery_jplayer_1").bind($.jPlayer.event.pause, function(){localStorage.setItem("felicityBGMStatus","false");});
		}, 1000);

	$(".content_r").css("padding-top",((window.innerHeight/2 - 225) + "px"));

	$('.fancybox').fancybox({
		'padding'		:0,
		'type'			:'iframe'
	});
	$('.fancybox_mn').fancybox({
		'padding'		:0,
		'height'		:400,
		'width'			:1312,
		'type'			:'iframe'
	});
	$('.fancybox_ev').fancybox({
		'padding'		:0,
		'height'		:500,
		'width'			:1100,
		'type'			:'iframe'
	});
	$('.fancybox_sp').fancybox({
		'padding'		:0,
		'height'		:700,
		'width'			:1100,
		'type'			:'iframe'
	});
	$('.fancybox_rg').fancybox({
		'padding'		:0,
		'height'		:440,
		'width'			:900,
		'type'			:'iframe'
	});
	$('.fancybox_webteam').fancybox({
		'padding'		:0,
		'height'		:490,
		'width'			:900,
		'type'			:'iframe'
	});
	$('.fancybox_contact').fancybox({
		'padding'		:0,
		'height'		:600,
		'width'			:1000,
		'type'			:'iframe'
	});
	$('.fancybox_teaser').fancybox({
		'padding'		:0,
		'height'		:360,
		'width'			:640,
		'type'			:'iframe'
	});
	$('.fancybox_up').fancybox({
		'padding'		:0,
		'height'		:300,
		'width'			:1200,
		'type'			:'iframe'
	});
	$('.fancybox_fsh').fancybox({
		'padding'		:0,
		'height'		:720,
		'width'			:1043,
		'type'			:'iframe'
	});
	setTimeout("startVideo()",1000);
});
