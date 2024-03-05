document.addEventListener('DOMContentLoaded', () => {
  const supportButton = document.getElementById('supportButton'); //サポートボタン格納
  const formContainer = document.getElementById('formContainer'); //フォームコンテナ格納 
  const closeFormButton = document.getElementById('closeFormButton'); //クローズボタン格納
});

/* フォームボタンを開く */

  // サポートボタンクリックイベント
  supportButton.addEventListener('click', () => {    
    console.log('サポートボタンがクリックされました'); //ログを出力 
        
    // サポートボタンが下向きに移動しながら透明になる処理
    supportButton.style.opacity = '0';
    supportButton.style.transform = 'translateY(20px)';
    supportButton.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
      console.log('ボタンが非表示になりました'); //ログを出力
    }, '1500'); 

    // フォームコンテナを1秒後に表示
    formContainer.style.display = 'block';
    formContainer.style.transition = 'opacity 1s ease'
    console.log('フォームが表示されました'); //ログを出力  
    });


/* フォームボタンを閉じる */

  // クローズボタンクリックイベント
  closeFormButton.addEventListener('click', () => {
    console.log('クローズボタンがクリックされました'); //ログを出力 
    
    formContainer.style.display = 'none';
    console.log('フォームが非表示になりました'); //ログを出力

    //0.5秒後に1秒かけて再表示スタート
    setTimeout(() => {
      supportButton.style.opacity = '1';
      supportButton.style.transform = 'translateY(0)'; //元の位置で再表示される
      supportButton.style.transition = 'opacity 0.5s ease';
      console.log('サポートボタンが再表示されました'); //ログを出力
    }, '500');


});

/* 添付ファイルhover発火イベント */

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