const check = document.querySelector("#check");
const btn = document.querySelector("#btn");

// checkをchangeするとbtn:disabledが消える、ボタンが押せるようになる
// ボタンを押すと 
// しかしオンにしてオフになるので不自然な為、!を付けて反対にする

check.addEventListener("change", () => {
    console.log(check.checked);

    if (check.checked === true) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
 
    
});






































/* 





const isAgreed = document.querySelector("#check");
const btn = document.querySelector("#btn");

isAgreed.addEventListener("change", () => {
    console.log("チェックされました");
    console.log(isAgreed.checked);

    btn.disabled = !isAgreed.checked;


});

 */