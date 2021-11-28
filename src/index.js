import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //jsでDOMを作成するときはcreateElementという関数を使う
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ（リスト）を生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素(下)に各要素（ここではliタグ）を設定する
  div.appendChild(li);

  //未完了リストの下に追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
