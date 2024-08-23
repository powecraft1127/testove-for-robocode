const cube = document.querySelector(".cube")
const boosts = [90, 90, 120]
const counts = [0, 0, 0]
const text = ["X", "Y", "Z"]

function thrw() {
    let c = 0;
    const startGame = setInterval(function () {
        if (c < 9) {
            c++
            const r = ran(0, 2)
            counts[r] += boosts[r]
            cube.style.transform = `rotate${text[r]}(${counts[r]}deg)`
            if (counts[r] > 360) counts[r] = 0
        } else {
            clearInterval(startGame)
            let res = 0
            const ct = cube.style.transform
            if (ct == "rotateX(450deg)" || ct == "rotateX(90deg)") { res = 6 }
            else if (ct == "rotateY(450deg)" || ct == "rotateY(90deg)") { res = 4 }
            else if (ct == "rotateY(270deg)") { res = 3 }
            else if (ct == "rotateX(270deg)") { res = 5 }
            else if (ct == "rotateY(180deg)") { res = 2 }
            else { res = 1 }
            alert(`Result: ${res}`)
        }
    }, 250)
}

function ran(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
