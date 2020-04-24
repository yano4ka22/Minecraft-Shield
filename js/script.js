window.onload = function() {
    let close = document.getElementById("close"),
        button = document.getElementById("button-registration"),
        popup = document.getElementById("popup-registration");

    button.addEventListener("click", function () {
        event.preventDefault();
        console.log("block");
        popup.style.display = "block";
    });
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });

    let countOnServer = document.getElementsByClassName("count-on-server"),
        circle = document.getElementsByClassName("circle"),
        rounds = document.getElementsByClassName("round-block"),
        countActive = document.getElementsByClassName("count-active-people"),
        percentFill = document.getElementsByClassName("percent-fill"),
        maxCount = 100,
        percent;

    Array.from(countOnServer).map( function(round) {
        round.innerHTML = maxCount;
    });
    Array.from(circle).map( function(round, index) {
        let myCircle = Circles.create({
            id:                  round.id,
            radius:              15,
            value:               countActive[index].innerText,
            maxValue:            100,
            width:               1,
            text:                function(value){return value + '%';},
            colors:              ['#3e3e3e', '#ff7100'],
            duration:            300,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           true
        });
    });
    Array.from(rounds).map( function(round, index) {
        percent = (countActive[index].innerText * 100) / maxCount;
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
