var seenData = {};
var infoBoxes = Array.from(document.getElementsByClassName("info-boxes"));
infoBoxes.forEach((infoBox) => {
    seenData[infoBox.id] = infoBox.getBoundingClientRect().top;
});

getMainInfoElement(seenData);

addEventListener("scroll", (evt) => {
    var all = document.getElementsByClassName("info-boxes");
    for (var i=0, max = all.length; i < max; i++) {
        seenData[all[i].id] = all[i].getBoundingClientRect().top;
    }
    getMainInfoElement(seenData);
});

function getMainInfoElement(data) {
    let mainId = "";
    let maxVal = -100000000;
    Object.keys(data).forEach(key => {
        if (data[key]<window.innerHeight) {
            if (maxVal < data[key]) {
                maxVal = data[key];
                mainId = key;
            }
        }
    });
    console.log("Main ID:", mainId);
    makeChosenEl(mainId.split("_")[0]);
}

function makeChosenEl(elId) {
    var theNav = document.getElementById(elId + "_nav");
    var chosenNavs = document.getElementsByClassName("chosen-nav");
    if (chosenNavs.length>0) {
        chosenNavs[0].classList.remove("chosen-nav");
    }
    theNav.classList.add("chosen-nav");
    console.log(document.getElementsByClassName("chosen-nav"));
    var chosenDrpConts = document.getElementsByClassName("chosen-drp-cont");
    if (chosenDrpConts.length>0) {
        chosenDrpConts[0].classList.remove("chosen-drp-cont");
    }
    theNav.parentNode.classList.add("chosen-drp-cont");
    var chosenMainNavs = document.getElementsByClassName("chosen-main-nav");
    if (chosenMainNavs.length>0) {
        chosenMainNavs[0].classList.remove("chosen-main-nav");
    }
    var mainNav = document.getElementById(theNav.parentNode.id.split("-")[0] + "-nav");
    mainNav.classList.add("chosen-main-nav");
}