async function main() {
    function sleep(ms = 0) {
        return new Promise(r => setTimeout(r, ms));
    }

    for (i in images) {
        document.body.style.backgroundImage = "url(../images/" + images[i].replace(".", "-background.") + ")"
        document.getElementById("groschatchat").style.backgroundImage = "url(../images/" + images[i] + ")"
        await sleep(4000);
    }
}

main()
