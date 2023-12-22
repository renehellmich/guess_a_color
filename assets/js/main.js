const divArr = document.querySelectorAll(".div__color")
const button = document.querySelector("#buttonSubmit")

const spanArr = document.querySelectorAll("#span_color")

// Speichervariable, welches Div das richtige ist.
let rightDiv = 0;

let rgb = [0, 0, 0]
let rgbDiv = [0, 0, 0]

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
    return number;
}

const generateDivColor = (value) => {
    console.log(value);
    rightDiv = value;
    divArr.forEach((div, i) => {
        let color = 0
        if (value != i - 1) {
            color = "rgb(" + rgbGenerate() +","+rgbGenerate()+"," + rgbGenerate() + ")";
            console.log(color);
            divArr[i].style.background = color
        } else {
            color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
            divArr[value] = color;
        }
    });
}

generateDivColor(divRandomNum())
console.log(rgb);
rgbGenerate()