const displayedImage = document.querySelector('.displayed-img');  //大きく表示する画像
const thumbBar = document.querySelector('.thumb-bar');  //サムネイルの表示先

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg': "Closeup of a human eye",
    'pic2.jpg': "Like a wave",
    'pic3.jpg': "purple and white flower",
    'pic4.jpg': "Wall picture",
    'pic5.jpg': "Large butterfly"
}

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');  //新しい<img>要素を生成
    newImage.setAttribute('src', 'images/' + image);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);      //生成したimgをサムネイルの表示先に追加
    newImage.addEventListener("click", e => {   //サムネイルをクリックしたときの処理
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",() => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";     //overlay : 画像の上に配置されている透明なもの
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
})
