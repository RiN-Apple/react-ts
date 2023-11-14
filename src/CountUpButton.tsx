type Props = {
  countUp: () => void;
};

export const CountUpButton = ({ countUp }: Props) => {
  return (
    <div>
      {/* onClickに関数オブジェクトを渡す */}
      <button className="text-4xl" onClick={countUp}>
        +
      </button>
    </div>
  );
};
