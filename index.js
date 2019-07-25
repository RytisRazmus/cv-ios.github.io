var isAdded = false;
function changeLayoutFoRSmallScreen(){
    const weirdDivs = [];
    $(".weirdDiv").each(function (index, value) {
        weirdDivs.push(value);
    });
    var i = 0;
    $(".about").each(function (index, value) {
        value.remove();
        weirdDivs[i].append(value);
        i++;
    });
    isAdded = true;
}

window.onresize = function (event) {
    console.log(screen.width);
    
    if (window.innerWidth < 700) {
        if (!isAdded) {
            changeLayoutFoRSmallScreen();
        }
    }
    else if (isAdded && window.innerWidth > 700) {
        const images = [];
        $(".image").each(function (index, value) {
            images.push(value);
        });
        var i = 0;
        $(".weirdDiv").each(function (index, value) {
            value.append(images[i]);
            i++;
        });
        isAdded = false;
    }
};

$(document).ready(function () {

    if (window.innerWidth < 700) {
        if (!isAdded) {
            changeLayoutFoRSmallScreen();
        }
    }
});