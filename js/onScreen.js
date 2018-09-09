var div = document.createElement("div");

div.innerHTML =
    '<div class="slideshow-container">\n' +
    '<div class="mySlides fade">\n' +
    '<div class="numbertext">1 / 3</div>\n' +
    '<img src="image1.jpg" style="width:100%">\n' +
    '<div class="text">Caption Text</div>\n' +
    '</div>\n' +

    '<div class="mySlides fade">\n' +
    '<div class="numbertext">2 / 3</div>\n' +
    '<img src="image2.jpg" style="width:100%">\n' +
    '<div class="text">Caption Two</div>\n' +
    '</div>\n' +

    '<div class="mySlides fade">\n' +
    '<div class="numbertext">3 / 3</div>\n' +
    '<img src="image3.jpg" style="width:100%">\n' +
    '<div class="text">Caption Three</div>\n' +
    '</div>\n' +

    '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>\n' +
    '<a class="next" onclick="plusSlides(1)">&#10095;</a>\n' +
    '</div>\n' +
    '<br>\n' +

    '<div style="text-align:center">\n' +
    '<span class="dot" onclick="currentSlide(1)"></span> \n' +
    '<span class="dot" onclick="currentSlide(2)"></span> \n' +
    '<span class="dot" onclick="currentSlide(3)"></span> \n' +
    '</div>\n';

document.body.appendChild(div);