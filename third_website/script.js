function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "ボタンが押されました";
    document.body.appendChild(para);
}

// querySelectorAllを使うことでページ上のすべてのボタンを選択することができる
const buttons = document.querySelectorAll("button");

// それぞれのボタンに対してaddEventListener()を使ってハンドラーを割り当てる
for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}

// addEventListener()の引数
// 対象の要素.addEventListener(種類, 関数);
// 種類の例　→　click:マウスをクリックしたとき、