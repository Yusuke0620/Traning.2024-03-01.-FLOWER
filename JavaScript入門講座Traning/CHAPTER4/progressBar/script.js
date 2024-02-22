
const getScrollPercent = () => {
    const scrolled = Math.round(window.scrollY);
    console.log(`${scrolled} スクロールされました`);
    // 全ページの高さ
    const pageHeight = document.documentElement.scrollHeight;
    // 表示領域の高さ
    const viewHeight = document.documentElement.clientHeight;
    // console.log(`ページの高さ:${pageHeight},表示領域の高さ:${viewHeight}`);

    // スクロールされた割合    
    const percentage =  scrolled / (pageHeight - viewHeight) * 100;

    // プログレスバーに幅を指定
    document.querySelector("#bar").style.width = `${percentage}%`;
}
// windowをスクロールしたら
window.addEventListener("scroll", getScrollPercent);
