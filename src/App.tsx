import { useEffect, useState } from "react";
import { CountUpButton } from "./components/CountUpButton";
import { CountInput } from "./components/CountInput";
import { CountText } from "./components/CountText";

export const App = () => {
  // カウントのステート
  // 第1引数は初期値
  const [count, setCount] = useState<number>(0);
  // テキストのカラー
  const [isTextColorRed, setIsTextColorRed] = useState<boolean>(false);

  // カウントを+1する関数
  const countUp = () => {
    // 現在の値を受け取って新しい値を返す
    // ステートが変更されると再レンダリングが起こる
    // 再レンダリングではコンポーネントの呼び出し(計算)が行われる
    // 前回の結果と差分があればDOMにコミット(反映)
    setCount((count) => count + 1);
  };

  // 副作用(周囲の(変数の)状態を変化させてしまうこと)
  // つまり何らかの処理でDOMが書き換えられ
  // 再レンダリングされたときに
  // 実行する関数
  // この場合、第二引数の配列に指定した値(count)が変更された時に
  // 実行される
  useEffect(() => {
    console.log("count val updated");
    setIsTextColorRed(count >= 5 ? true : false);
  }, [count]);

  return (
    <div className="mx-auto w-1/3">
      {/* cssはtailwind */}
      <div className="flex flex-col mt-6 text-center">
        <p className="text-3xl">React.js </p>
        {/* 子コンポーネントにバケツリレー!! */}
        <CountText count={count} isTextColorRed={isTextColorRed} />
        <CountInput setCount={setCount} />
        <CountUpButton countUp={countUp} />
      </div>
    </div>
  );
};
