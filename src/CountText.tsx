type Props = {
  count: number;
  isTextColorRed: boolean;
};

export const CountText = ({ count, isTextColorRed }: Props) => {
  return (
    <div className="py-32">
      <p
        className={`text-8xl ${isTextColorRed ? "text-red-600" : "text-black"}`}
      >
        {count}
      </p>
    </div>
  );
};
