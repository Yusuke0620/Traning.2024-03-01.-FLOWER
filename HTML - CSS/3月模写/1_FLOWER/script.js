document.addEventListener('DOMContentLoaded', () => {
  const supportButton = document.getElementById('supportButton'); //サポートボタン格納
  const formContainer = document.getElementById('formContainer'); //フォームコンテナ格納 
  const closeFormButton = document.getElementById('closeFormButton'); //クローズボタン格納
});

  // サポートボタンクリックイベント
  supportButton.addEventListener('click', () => {    
    console.log('サポートボタンがクリックされました'); //ログを出力 
        
    // サポートボタンを非表示
    supportButton.style.opacity = '0';
    console.log('ボタンが非表示になりました'); //ログを出力
  
    // フォームコンテナを表示
    formContainer.style.display = 'block';
    console.log('フォームが表示されました'); //ログを出力  
    });



  // クローズボタンクリックイベント
  closeFormButton.addEventListener('click', () => {
    console.log('クローズボタンがクリックされました'); //ログを出力 
    
    formContainer.style.display = 'none';
    console.log('フォームが非表示になりました'); //ログを出力

    //0.5秒後に1秒かけて再表示スタート
    setTimeout(() => {
      supportButton.style.opacity = '1';
      supportButton.style.transition = 'opacity 0.5s ease';
      console.log('サポートボタンが再表示されました'); //ログを出力
    }, '500');
  });





  




//   // 閉じるボタンのイベントリスナーを追加
//   document.getElementById('closeFormButton').addEventListener('click', () => {
//     // フォームを非表示にする
//     formContainer.style.display = 'none';
//     console.log('フォームが閉じました');

//     // サポートボタンをゆっくり表示する
//     supportButton.style.transition = 'opacity 0.5s ease';
//     supportButton.style.opacity = '0';
//     setTimeout(() => {
//       supportButton.style.display = 'block';
//       supportButton.style.opacity = '1';
//     }, 1000); // トランジションが適用されるように微小な遅延を設定
//   });
// });