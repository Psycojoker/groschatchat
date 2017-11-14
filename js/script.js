/* Array shuffling function.
 * Taken from https://stackoverflow.com/a/2450976 */

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

$(function() {
	var loaded = false, finished = true;
	var curtain = $("#curtain");
	var i = 0;
	var tcc = $("#tresgroschatchat");
	var gcc = $("#groschatchat");

	$(document).on("gcc:show", function() {
		loaded = false;
		finished = false;

		/* Set the current background image. */
		var url = "images/" + images[i];
		var src = "url(" + url + ")";
		tcc.css('background-image', src);
		gcc.css('background-image', src);

		/* Start loading the next image. */
		i = (i + 1) % images.length;
		$("<img/>").load(url, function() {
			$(document).trigger("gcc:loaded");
		});

		/* Fade out, wait for at least 4 seconds. */
		curtain.fadeOut(600, function() {
			setTimeout(function() {
				$(document).trigger("gcc:finished");
			}, 4000);
		});
	});

	$(document).on("gcc:loaded", function() {
		loaded = true;
		if (finished)
			$(document).trigger("gcc:hide");
	});

	$(document).on("gcc:finished", function() {
		finished = true;
		if (loaded)
			$(document).trigger("gcc:hide");
	});

	$(document).on("gcc:hide", function() {
		curtain.fadeIn(400, function() {
			$(document).trigger("gcc:show");
		});
	});

	/* Initialize. */

	images = shuffle(images);
	var first_url = "images/" + images[0];
	$("<img/>").load(first_url, function() {
		$(document).trigger("gcc:show");
	});
});
