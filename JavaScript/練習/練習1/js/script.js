console.log("こんにちは、世界！");

// JavaScriptから文字を表示させる方法
/* 
どこの何をどう変えたいのか

どこの⇨paragraph
何を⇨テキストを
どう変えたいのか⇨「さようなら、世界！」に変えたい
*/

document.querySelector("#paragraph").textContent = "TEST";

// document.querySelector("h2").textContent = "TESTTESTTEST";

// h3のテキストを「基礎」に変えたい
// document.querySelector("h3").textContent = "基礎";


// h2をクリックしたら文字が赤色に変わる
/*
const h2 = document.querySelector("h2");

h2.addEventListener("click", () => {
    document.body.classList.add("color");
});
 */

