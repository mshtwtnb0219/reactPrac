
// 引数で分割代入も可能
export const ColorfullMessage = ({ color, children }) => {
  // オブジェクトの分割代入
//  const { color, children } = props;
  const contentStyleA = {
    color,
    fontSize: "18px",
  };
  return <p style={contentStyleA}>{children}</p>;
};


// export default ColorfullMessage;
// 1コンポーネントで一つ中かっこを省略してimportできる import名は自由に変更できる