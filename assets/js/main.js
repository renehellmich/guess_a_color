const divArr = document.querySelectorAll(".div__color")
const button = document.querySelector("#buttonSubmit")

const spanArr = document.querySelectorAll("#span_color")

// Speichervariable, welches Div das richtige ist.
let rightDiv = 0;

let rgb = [0, 0, 0]

console.log(divArr);
console.log(spanArr);
console.log(rgb);

const rgbGenerate = () => {
    number = Math.ceil(Math.random() * 255);
    return number;
}

const getColor = () => {
    rgb.forEach((element, index) => {
        element = rgbGenerate();
        rgb[index] = element;
    });
    for (let i = 0; i < spanArr.length; i++) {
        spanArr[i].innerText = rgb[i]
        console.log(spanArr[i].innerText);
    }
}

getColor()
// debugger;

const divRandomNum = () => {
    number = Math.ceil(Math.random() * 5);
    return number - 1;
}

const generateDivColor = () => {
    // console.log(rgb);
    // console.log(value);
    rightDiv = divRandomNum();
    console.log(rightDiv);
    divArr.forEach((div, i) => {
        let color = 0
        if (rightDiv != i) {
            color = "rgb(" + rgbGenerate() +","+rgbGenerate()+"," + rgbGenerate() + ")";
            // console.log(color);
            divArr[i].style.background = color
            // divArr[i].innerText = color;
        } else {
            color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
            // console.log(color);
            divArr[rightDiv].style.background = color
            // divArr[rigthDiv].innerText = color;
        }
    });
}

generateDivColor()

for(let div of divArr) {
    console.log(div.style.background);
    const rgbValue = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

    div.addEventListener("click", (event) => {
        console.log(event.target.style.background);
        if (event.target.style.background != rgbValue) {
            // output.style.display = "block"
            output.innerText = "Das war leider die falsche Farbe. Bitte drücke Reset und versuche es erneut."
            console.log("Falsch");
        } else {
            output.innerText = "Du bist ein RGB Genie"
            // output.style.display = "block"
            console.log("Richtig");
        }
    })
}

function resetMe() {
    // getColor();
    // generateDivColor();
    // output.innerText = null;
    location.reload();
}
