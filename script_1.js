function swapImg() {
// get the image elements by their ids
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var image4 = document.getElementById("image4");
    var image5 = document.getElementById("image5");
    var image6 = document.getElementById("image6");

    // Store the source of the first image in a temporary variable
    var tempSrc1 = image1.src;
    var tempSrc2 = image3.src;
    var tempSrc3 = image5.src;

    image1.src = image2.src;
    image2.src = tempSrc1;

    image3.src = image4.src;
    image4.src = tempSrc2;

    image5.src = image6.src;
    image6.src = tempSrc3;

}
