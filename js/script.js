async function main() {
    function sleep(ms = 0) {
        return new Promise(r => setTimeout(r, ms));
    }

    for (i in images) {
        $("#tresgroschatchat").fadeOut(function() {
            document.getElementById("tresgroschatchat").style.backgroundImage = "url(../images/" + images[i].replace(".", "-background.") + ")"
            document.getElementById("groschatchat").style.backgroundImage = "url(../images/" + images[i] + ")"
        }).fadeIn()

        await sleep(6000);
    }
}

main()
