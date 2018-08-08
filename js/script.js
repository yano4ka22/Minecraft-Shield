window.onload = function() {
    let close = document.getElementById("close"),
        button = document.getElementById("btn-registration"),
        popup = document.getElementById("popup-registration");

    button.addEventListener("click", function () {
        event.preventDefault();
        console.log("block");
        popup.style.display = "block";
    });
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });

    let rounds = document.getElementsByClassName("round-block"),
        count = document.getElementsByClassName("count-active-people"),
        percentFill = document.getElementsByClassName("percent-fill"),
        maxCount = 100,
        percent;

    rounds = Array.from(rounds);

    rounds.map( function(round, index) {
        percent = (count[index].innerText * 100) / maxCount;
        console.log(round);
        if(percent > 88) {
            round.classList.add("round-100");
        } else if (percent > 75) {
            round.classList.add("round-88")
        } else if (percent > 63) {
            round.classList.add("round-75")
        } else if (percent > 50) {
            round.classList.add("round-63")
        } else if (percent > 38) {
            round.classList.add("round-50")
        } else if (percent > 25) {
            round.classList.add("round-38")
        } else if (percent > 13) {
            round.classList.add("round-25")
        } else {
            round.classList.add("round-13")
        }
        percentFill[index].innerText = percent.toFixed() + "%";
    } );

};