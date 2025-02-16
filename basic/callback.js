function downloadImage(imageUrl, displayImage) {
    console.log('Downloading Image');

    setTimeout(function () {
        console.log("Image download successfully");
        const image = `Image from ${imageUrl}`;
        displayImage(image);
    }, 3000);

    
}
function displayImage(image) {
    console.log('Displaying Image:', image);

}
downloadImage('https://picsum.photos/id/237/200/300', displayImage);
