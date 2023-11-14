type Props = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CountInput = ({ setCount }: Props) => {
  return (
    <div>
      <input
        type="text"
        name="count"
        className="border border-gray-400 p-1"
        onChange={(e) => setCount(Number(e.target.value))}
      />
    </div>
  );
};
