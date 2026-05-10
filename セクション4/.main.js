"use strict";
{
  // const let
  // 従来の変数宣言
  //   var var1 = "test";
  //   console.log(var1);
  //   // var　上書きが可能
  //   var1 = "test2";
  //   console.log(var1);
  //   // var変数は再宣言が可能
  //   var var1 = "test3";
  //   console.log(var1);
  // let
  //   let val = "let変数";
  //   console.log(val);
  //   val = "上書き";
  //   console.log(val);
  //   // letは再宣言が不可能
  //   let val = 'aaaa';
  // const
  //   const val = "const";
  //   console.log(val);
  //   // const は上書き　再宣言が不可
  //   val = "sss";
  //   const val = "aaa";

  // cosnt プリミティブ型は再代入は不可 オブジェクト/配列は変更が可能
  //   // ES2015以降は基本はconstのみ
  //   const val = {
  //     name: "aaa",
  //     age: 26,
  //   };

  //   console.log(val);
  //   val.name = "bbb";
  //   val.address = "愛知";
  //   console.log(val);

  // 配列の変更も可能
  //   const val = [1, 2, 3, 4, 5, 6];
  //   console.log(val);
  //   val.push(10);
  //   console.log(val);

  // テンプレート文字列
  // const name = 'watanabe';
  // const age  = 26;
  // console.log(`私の名前は${name}です。年齢は${age}歳です。`)

  // アロー関数 引数が1つの場合は()を省略が可能
  // const func = (str) => str;

  // console.log(func("ああああ"));

  // const func2 = (num1, num2) => {
  //   return num1 + num2;
  // };

  // // オブジェクトの返却
  // const func3 = (num1, num2) => ({
  //   name: num1,
  //   age: num2,
  // });

  // console.log(func3(10, 20));

  // 分割代入
  // const myPro = {
  //   name: "masa",
  //   age: 26,
  // };
  // const msg = `私の名前は${myPro.name}です。年齢は${myPro.age}歳です。`;
  // console.log(msg);

  // オブジェクトの分割代入
  // const { name, age } = myPro;
  // const msg1 = `私の名前は${name}です。年齢は${age}歳です。`;
  // console.log(msg1);

  // // 配列の分割代入
  // const myPro = ["masa", 26];
  // // 変数は独自で命名する
  // const [name, age] = myPro;
  // const msg2 = `私の名前は${name}です。年齢は${age}歳です。`;
  // console.log(msg2);

  // デフォルト値(関数の引数 分割代入)
  // 関数
  // const func = (name = "ゲスト") => console.log(`こんにちわ!${name}さん`);
  // func();

  // オブジェクトのデフォルト値
  // const myPro = {
  //   age: 26,
  // };
  // const { age, name = "ゲスト" } = myPro;
  // console.log(age);
  // console.log(name);

  // オブジェクトの省略記法
  // const name = "masa";
  // const age = 26;

  // // プロパティと値の変数名が同じな場合、省略が可能
  // const myPro = {
  //   name,
  //   age,
  // };

  // console.log(myPro);

  // スプレット構文
  // 配列の展開
  // const ary = [1, 2];
  // // console.log(ary);
  // // console.log(...ary);

  // const func = (num1, num2) => console.log(num1 + num2);
  // func(ary[0], ary[1]);
  // // 配列の中身がすべて展開される
  // func(...ary);

  // まとめる
  // const ary2 = [1, 2, 3, 4, 5];
  // const [num1, num2, ...ary3] = ary2;
  // console.log(num1);
  // console.log(num2);
  // console.log(ary3);

  // 配列のコピー　結合
  // const ary4 = [10, 20];
  // const ary5 = [30, 40];

  // const ary6 = [...ary4];
  // // console.log(ary6);
  // ary6[0] = 100;
  // console.log(ary6);
  // console.log(ary4);

  // const ary7 = [...ary4, ...ary5];
  // console.log(ary7);

  // 配列 map
  // const names = ["wata", "masa", "nabe", "take"];
  // // for (let index = 0; index < names.length; index++) {
  // //   console.log(names[index]);
  // // }

  // 第二引数に要素番号が取得できる
  // names.map((name, index) => {
  //   console.log(index,name);
  // });

  // filter
  // const numArr = [1, 2, 3, 4, 4, 5, , 7];
  // const newArr2 = numArr.filter((num) => {
  //   return num % 2 === 1;
  // });

  // console.log(newArr2);

  // const newArr = names.map((name) => {
  //   if (name === "take") {
  //     return name;
  //   } else {
  //     return `${name}さん`;
  //   }
  // });

  // console.log(newArr);

  // 三項目演算子
  // const val1 = 1 > 2 ? "trueです" : "falseです";
  // console.log(val1);

  // const num = 1300;
  // console.log(num.toLocaleString());

  // const formatNum =
  //   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
  // console.log(formatNum);

  // const func = (num1, num2) => {
  //   return num1 + num2 > 100 ? "100を超えています" : "100以下です";
  // };
  // console.log(func(101, 0));

  // 論理演算子の意味
  // const val = 1;
  // if (val) {
  //   console.log("ture")
  // } else {
  //   console.log("false")
  // }
}
