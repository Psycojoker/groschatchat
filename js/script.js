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

    var chat = $(".chat");

    while (true) {
        for (i in shuffle(images)) {
            chat.fadeOut(function() {
                document.getElementById("tresgroschatchat").style.backgroundImage = "url(../images/" + images[i] + ")"
                document.getElementById("groschatchat").style.backgroundImage = "url(../images/" + images[i] + ")"

                img = new Image();
                img.onload = function() { chat.fadeIn()}
                img.src = "../images/" + images[i];
            })

            await sleep(4000);
        }
    }
}

main()
