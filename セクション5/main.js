"use strict";
{
  // 追加ボタン押下処理
  const onClickAdd = () => {
    // テキストボックスの内容を取得
    const inputText = document.getElementById("add-text").value;
    // 入力内容の初期化
    document.getElementById("add-text").value = "";

    // 未完了リストに追加
    createIncompleteTodo(inputText);
  };

  // 渡された引数をもとに未完了のtodoを作成する関数
  const createIncompleteTodo = (todo) => {
    // li要素の作成
    const li = document.createElement("li");
    // div要素の作成
    const div = document.createElement("div");
    div.className = "list-row";

    // p要素の作成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.textContent = todo;

    // button(完了)要素の作成
    const completeButton = document.createElement("button");
    completeButton.textContent = "完了";
    completeButton.addEventListener("click", () => {
      // 押下された完了
      const moveTarget = completeButton.closest("li");
      // 次の要素を取得
      completeButton.nextElementSibling.remove();
      completeButton.remove();
      // 戻すボタンを生成
      const backButton = document.createElement("button");
      backButton.textContent = "戻す";
      backButton.addEventListener("click", () => {
        // 未完了リストに追加
        const todoText = backButton.previousElementSibling.textContent;
        createIncompleteTodo(todoText);
        // 押下されたボタンの親にあるli要素を削除する
        backButton.closest("li").remove();
      });

      // li > div 配下に要素を追加する
      moveTarget.firstElementChild.appendChild(backButton);

      // 完了リストに移動
      document.getElementById("complete-list").appendChild(moveTarget);
    });

    // button(削除)要素の作成
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {
      // 押下された削除ボタンの親にあるliタグを未完了リストから削除する
      const deleteTarget = deleteButton.closest("li");
      document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // ul要素の取得
    const ul = document.getElementById("incomplete-list");
    ul.appendChild(li);
  };

  document.getElementById("add-button").addEventListener("click", onClickAdd);
}
