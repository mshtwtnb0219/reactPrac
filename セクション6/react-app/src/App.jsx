import { ColorfullMessage } from "./components/ColorfullMessage";
import { useEffect, useState } from "react";

// Componentsの名称はパスカルケースで
export const App = () => {
  console.log("------------------------");
  // Hockは関数コンポーネントの一番上で定義する
  const [num, setNum] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const onClickCountUp = () => {
    // 関数も渡すことも可能
    setNum((prev) => prev + 1);
  };

  // 第二引数の値が変更があった場合に第一引数の関数を実行する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        isShow || setIsShow(true);
      } else {
        isShow && setIsShow(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  const onClickToggle = () => {
    setIsShow(!isShow);
  };

  return (
    // return時はタグを1つで返却する必要がある
    //<>フラグメントを設定すれば複数要素を返却が可能
    <>
      {/* cssはオブジェクトとして定義 プロパティは文字列で定義 */}
      <h1>こんにちは</h1>
      <ColorfullMessage color="blue">aas</ColorfullMessage>
      <ColorfullMessage color="green">お元気です(｀･ω･´)</ColorfullMessage>
      {/* {}でjavascritのコードとして解釈される */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShow && <p>(｀･ω･´)</p>}
    </>
  );
};
