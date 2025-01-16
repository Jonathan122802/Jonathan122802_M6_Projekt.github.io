var btns, color_cache;
var index = 0;

function updtBtn(e) {
    console.log("Hi")
    var key = e.key;

    switch (key) {
        case "w":
            index -= 2;
            break;
        case "a":
            index -= 1;
            break;
        case "s":
            index += 2;
            break;
        case "d":
            index += 1;
            break;
        case "ArrowUp":
            index -= 2;
            break;
        case "ArrowLeft":
            index -= 1;
            break;
        case "ArrowDown":
            index += 2;
            break;
        case "ArrowRight":
            index += 1;
            break;
        case " ":
            btns[index].click();
            break;
    }

    if (index < 0) {
        index = 0;
    }

    if (index >= btns.length) {
        index = btns.length - 1;
    }

    btns[index].style.backgroundColor = update_alpha(color_cache[index]);
    btns[index].style.transform = "scale(1.03)";

    for (let i = 0; i < btns.length; i++) {
        if (i == index) {
            continue;
        }
        btns[i].style.backgroundColor = color_cache[i];
        btns[i].style.transform = "scale(1)";
    }
}

function loadBtn() {
    index = 0;
    btns = document.getElementsByName("submit");
    console.log(btns);
    color_cache = [];
    for (let i = 0; i < btns.length; i++) {
        color_cache.push(getComputedStyle(btns[i]).getPropertyValue("background-color"));
    }
    console.log(color_cache);
    document.body.addEventListener("keyup", function (e) { updtBtn(e) });
}

function update_alpha(rgba) {
    let values = rgba.match(/[\d.]+/g);
    if (values.length == 3) {
        values.push(0.8);
    }
    var color = "rgba(" + values.join(",") + ")";
    return color;
}
