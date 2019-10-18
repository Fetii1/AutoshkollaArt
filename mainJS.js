var counter = 0;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var titulli1 = document.getElementById("titulli1");
var container1 = document.getElementById("content1");
var container2 = document.getElementById("content2");
var sekondat = setInterval(slide, 5000);



var teksti0Banner = "Ndryshon teksti 0 </br> Vazhdon ktu";
var teksti1Banner = "Ndryshon teksti 1 </br> Vazhdon ktu";
var teksti2Banner = "Ndryshon teksti 2 </br> Vazhdon ktu";


function slide() {

    if (counter == 0) {
        img1.style.opacity = "1";
        img2.style.opacity = "0";
        img3.style.opacity = "0";
        titulli1.innerHTML = teksti0Banner;
        counter = 1;
        

    } else if (counter == 1) {
        img1.style.opacity = "0";
        img2.style.opacity = "1";
        img3.style.opacity = "0";
        titulli1.innerHTML = teksti1Banner;
        counter = 2;
        

    } else if (counter == 2) {
        img1.style.opacity = "0";
        img2.style.opacity = "0";
        img3.style.opacity = "1";
        titulli1.innerHTML = teksti2Banner;
        counter = 0;
        
    }

}
function left() {
    clearInterval(sekondat);

    if (counter === 2) {
        counter = 0;
    } else {
        counter++;
    }
    sekondat = setInterval(slide, 5000);
    slide();

};

function right() {
    clearInterval(sekondat);
    slide();
    counter--;
    if (counter === -1) {
        counter = 2;
    }
    sekondat = setInterval(slide, 5000);
    slide();
};
slide();

