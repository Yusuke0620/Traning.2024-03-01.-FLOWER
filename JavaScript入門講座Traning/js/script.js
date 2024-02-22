document.querySelector("#colorText").textContent = "カラーコード:";
document.querySelector("#colorPicker").value;

document.querySelector("#colorText").textContent = `カラーコード: ${document.querySelector("#colorPicker").value}`;

// 定数定義
const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

text.textContent = `カラーコード: ${color.value}`;


const colorBg = () => {
    // 現在のカラーコードを背景色で発動させる関数
    document.body.style.backgroundColor = color.value;

    if (color.value === "#ffffff") {
        text.textContent = `カラーコード: ${color.value} (white)`;
    } else if (color.value === "#000000") {
        text.textContent = `カラーコード: ${color.value} (black)`;
    } else {
        text.textContent = `カラーコード: ${color.value}`;
    }
}



/* 背景色を変える */
// カラーピッカーが変更されたらカラーコード表示
color.addEventListener("input", colorBg);



/* testteet */
/*
もしクラスtestをクリックしたら背景色がダークモードになり
ライトモードにするに変わる
再クリックしたら元に戻る
*/

const test = document.querySelector(".test");


test.addEventListener("click", () => {
    test.classList.toggle("dark-mode");

    // もしtest内が「ダークモードにする」であれば
    if (test.textContent === "ダークモードにする") {
        // クリックされた時に「ライトモードにする」に変更
        test.textContent = "ライトモードにする";
        // そうでないなら※「ライトモード」なら
    } else {
        // クリックされた時に「ダークモードにする」に戻す
        test.textContent = "ダークモードにする";
    }
});



/* 文字数カウント */

/*
textForm内で文字入力すると、その数だけtextCount内でカウントされていく
①11以上で赤色

*/
const textForm = document.querySelector("#textForm");
const textCount = document.querySelector("#textCount");

// textForm内で文字入力すると
textForm.addEventListener("input", () => {
    // その数だけtextCount内でカウントされていく
    textCount.textContent = textForm.value.length;

    if (textForm.value.length >= 11) {
        textCount.classList.add("countRed");
        textCount.classList.remove("countwhite");
    } else {
        textCount.classList.add("countwhite");
        textCount.classList.remove("countRed");
    }
    }
);
