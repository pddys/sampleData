// ==UserScript==
// @name     YOUR_SCRIPT_NAME
// @include  http://YOUR_SERVER.COM/YOUR_PATH/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==
//--- The @grant directive is used to restore the proper sandbox.

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// $("body").load("button.html");

$("body").append ( `
	<div style="position: fixed; top: 20%; left: 0; font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica;">
		<div class="c-randomdata__navbar" style="background-color: #111; height: 1em; min-width: 1em; color: white; text-align: left;">
			<span id="c-randomdata__open" class="c-randomdata__toggle" style="display: none"><i class="fa fa-times"></i></span>
			<span id="c-randomdata__close" class="c-randomdata__toggle"><i class="fa fa-wrench" style="display: block; color: white"></i></span>
			<div id="c-randomdata__refresh" style="">
				<i class="fa fa-play-circle" style="display: block; color: black"></i>
			</div>
		</div>
		<div id="c-randomdata__container" style="padding: 1em; display: none">
			<div>
				<p>Adds Random event data to any class name js__title</p>
				<input type="radio" name="eventRadioButton" class="c-rb c-rb--Hippodrome" value="Hippodrome"> Birmingham Hippodrome</input><br>
				<input type="radio" name="eventRadioButton" class="c-rb c-rb--AmRep" value="AmRep"> American Repetory Theatre</input><br>
				<input type="radio" name="eventRadioButton" class="c-rb" value="" disabled> Third Customer</input><br>
			</div>

			<div>
				<p>Adds Random time data to any class name js__time</p>
				<input type="checkbox" name="vehicle1" value="time1"> 8-September-2018<br>
				<input type="checkbox" name="vehicle1" value="time2" disabled> Sunday, 8th September 2018<br>
				<input type="checkbox" name="vehicle1" value="time3" disabled> Location<br>
			</div>

			<div>
				<p>Adds Random location data to any class name js__location</p>
				<input type="checkbox" name="vehicle1" value="Location"> Location<br>
			</div>

			<div style="margin-top: 1em">
				<button>Refresh</button>
			</div>

			<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

			<script
				src="https://code.jquery.com/jquery-3.3.1.js"
				integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
				crossorigin="anonymous">
			</script>

			<script>
		     $('.c-randomdata__toggle').on('click', function(){
		        $("#c-randomdata__container").toggle().css({
					backgroundColor : "#ddd",
					border : "1px solid black",
		      });
		        $("#c-randomdata__close").toggle()
		        $("#c-randomdata__open").toggle()
		        $("#c-randomdata__refresh").toggle()
		    });
		    </script>
		</div>
	</div>
` );