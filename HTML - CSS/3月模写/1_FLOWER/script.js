document.addEventListener('DOMContentLoaded', () => {  

/*-------------------------------------------
メインロゴホバーアニメーション
-------------------------------------------*/
  // ウェブページが開かれたとき
  const fadeIn = document.querySelector('.mainLogo'); //メインロゴ格納  

  // アニメーションのキーフレームを定義
  const keyframes = {
    opacity: [0, 1],  //透明から不透明
    translate: ['0 5px', '0 0']
  };

  // アニメーションのオプション定義。時間とイージング関数
  const options = {
    duration: 2250,
    easing: 'ease-in-out',
  };

  // 定義されたアニメーションを実施
  fadeIn.animate(keyframes, options);

  setTimeout(() => {
    console.log('メインロゴが浮かび上がりました'); //ログを出力 
  }, 2000);  

/*-------------------------------------------
レスポンシブ・スクロールフッター出現
-------------------------------------------*/
// 垂直方向のスクロール量を取得
const scrollY = window.scrollY;
console.log(scrollY); //ログを出力 

// 横幅が531px以下 & 1645スクロールされた位置でフッター表示
// 上から1644スクロールでフッター非表示




/*-------------------------------------------
フォームボタンを開く
-------------------------------------------*/
  const supportButton = document.getElementById('supportButton'); //サポートボタン格納
  const formContainer = document.getElementById('formContainer'); //フォームコンテナ格納 
  const closeFormButton = document.getElementById('closeFormButton'); //クローズボタン格納

// サポートボタンクリックイベント
  supportButton.addEventListener('click', () => {    
    console.log('サポートボタンがクリックされました'); //ログを出力 
        
    // サポートボタンが下向きに移動しながら透明になる処理
    supportButton.style.opacity = '0';
    supportButton.style.transform = 'translateY(20px)';
    supportButton.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
      console.log('ボタンが非表示になりました'); //ログを出力
    }, 500); 

    setTimeout(() => {
    // フォームコンテナを1秒後に表示
    formContainer.style.display = 'block';
    console.log('フォームが表示されました'); //ログを出力
    }, 700);    
});

/*-------------------------------------------
フォームボタンを閉じる
-------------------------------------------*/

  // クローズボタンクリックイベント
  closeFormButton.addEventListener('click', () => {
    console.log('クローズボタンがクリックされました'); //ログを出力 
    //フォーム非表示
    formContainer.style.display = 'none';
    console.log('フォームが非表示になりました'); //ログを出力
    //0.5秒後に1秒かけて再表示スタート
    setTimeout(() => {
      supportButton.style.opacity = '1';
      supportButton.style.transform = 'translateY(0)'; //元の位置で再表示される
      supportButton.style.transition = 'opacity 0.5s ease';
      console.log('サポートボタンが再表示されました'); //ログを出力
    }, 500);
});

/*-------------------------------------------
添付ファイルhover発火イベント
-------------------------------------------*/

  const fileUpload = document.querySelector('#fileUpload h4');
  const fileLabel = document.querySelector('.file-label');
  //ドキュメントにマウスが乗るとhover発火
  fileUpload.addEventListener('mouseover', () => {
    fileLabel.classList.add('hover');
    console.log('添付ファイル追加ドキュメントにマウスが乗りました');
  });
  //ドキュメントからマウスが離れるとhover終了
  fileUpload.addEventListener('mouseout', () => {
    fileLabel.classList.remove('hover');
    console.log('マウスが離れました');
  });
});