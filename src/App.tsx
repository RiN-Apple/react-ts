import { useEffect, useState } from "react";
import { CountUpButton } from "./CountUpButton";
import { CountInput } from "./CountInput";
import { CountText } from "./CountText";

export const App = () => {
  // カウントのステート
  const [count, setCount] = useState<number>(0);
  // テキストのカラー
  const [isTextColorRed, setIsTextColorRed] = useState<boolean>(false);

  // カウントを+1する関数
  const countUp = () => {
    setCount(count + 1);
  };

  // カウントを-1するボタンと0にするボタンを作ろう!!

  // 副作用(周囲の(変数の)状態を変化させてしまうこと)
  // つまり何らかの処理でDOMが書き換えられ
  // 再レンダリングされたときに
  // 実行する関数
  // この場合、第二引数の配列に指定した値(count)が変更された時に
  // 実行される
  useEffect(() => {
    setIsTextColorRed(count >= 5 ? true : false);
  }, [count]);

  return (
    <div className="mx-auto w-1/3">
      <div className="flex flex-col mt-6 text-center">
        <CountText count={count} isTextColorRed={isTextColorRed} />
        <CountInput setCount={setCount} />
        <CountUpButton countUp={countUp} />
      </div>
    </div>
  );
};
