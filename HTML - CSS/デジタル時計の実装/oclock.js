const clock = () => {
    let d = new Date();

    // 年を取得
    let year = d.getFullYear();
    // 月を取得
    let month = d.getMonth() + 1;
    // 日を取得
    let date = d.getDate();
    // 曜日を取得
    let dayNum = d.getDay();
    const weekday = ["日", "月", "火", "水", "木", "金", "土"];
    let day = weekday[dayNum];
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let minute = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();


    // 10以下の時に0を加え2桁にする
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    sec = sec < 10 ? "0" + sec : sec;

    // 日付と時間の文字列
    const today = [`${year}年${month}月${date}日 ${day}`];
    const time = [`${hour}:${minute}:${sec}`];

    document.querySelector(".clock-date").innerHTML = today;
    document.querySelector(".clock-time").innerHTML = time;
}

    // 1秒ごとに実行
    setInterval(clock, 1000);