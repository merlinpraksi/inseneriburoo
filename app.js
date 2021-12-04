
chageBackgroundImageRandomly()
function chageBackgroundImageRandomly() {
    // 3 image
    let allImage = [
        'https://image.shutterstock.com/image-photo/low-angle-view-skyscrapers-shenzhenchina-600w-526689706.jpg',

        'https://image.shutterstock.com/image-photo/modern-office-buildings-financial-district-600w-1923817379.jpg',

        'https://image.shutterstock.com/image-photo/low-angle-view-skyscrapers-shenzhenchina-600w-526689706.jpg'
    ];
    let randomIndex = Math.floor(Math.random() * allImage.length);
    // 0, 1 or 2
    let myDiv = document.getElementById('myDiv');
    myDiv.style.backgroundImage = "url('" + allImage[randomIndex] + "')"
}
setInterval(chageBackgroundImageRandomly, 2000);
