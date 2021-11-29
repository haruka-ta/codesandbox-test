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

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  console.log(deleteButton);

  //divタグの子要素(下)に各要素（ここではliタグ）を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストの下に追加
  document.getElementById("incomplete-list").appendChild(div);
};

const onClickReturn = () => {
  const returnButton = document.getElementById("return-button");
  const completeList = document.getElementById("complete-list");
  const child_li = completeList.firstChild;
  console.log(child_li);
  //完了リストから削除
  const returnParent = returnButton.parentNode;
  completeList.removeChild(returnParent);

  //未完了へ追加する
};

//完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

document
  .getElementById("return-button")
  .addEventListener("click", () => onClickReturn());
