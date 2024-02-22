// ローディングが終わったら
window.addEventListener("load", () => {
    loading.classList.add("loaded");
});

/*
windowをクリックしてダークモードに変更
再クリックで元に戻す
 */
window.addEventListener("click", () => {
    document.body.classList.toggle("windowsDark");
});



// ギャラリー内のすべての画像にアクセス
const imgZoom = document.querySelectorAll(".gallery .item img");

// 各画像に対してイベントリスナーを設定
imgZoom.forEach(image => {
    image.addEventListener("click", () => {
        // クリックされた画像に対してzoomクラスをトグル
        image.classList.toggle("zoom");
    });
});
