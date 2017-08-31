// stolen here https://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

async function main() {
    function sleep(ms = 0) {
        return new Promise(r => setTimeout(r, ms));
    }

	var curtain = $("#curtain");
	var tcc = $("#tresgroschatchat");
	var gcc = $("#groschatchat");

    while (true) {
        for (i in shuffle(images)) {
            var url = "images/" + images[i];
            var src = "url(" + url + ")";

            await curtain.fadeIn(400, function() {
                $("<img/>").load(url, function() {
                    tcc.css('background-image', src);
                    gcc.css('background-image', src);

                    curtain.fadeOut(600);
                });
            });

            await sleep(4000);
        }
    }
}

main()
