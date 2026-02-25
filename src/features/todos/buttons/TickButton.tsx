type Props = {
  isTicked: boolean;
  toggleHandler: () => void,
};

const TickedCharacter = "☑";
const UnTickedCharacter = "☐"

export default function TickButton({ isTicked, toggleHandler }: Props) {

  const onClickHandler = () => {
    toggleHandler();
  }

  return (
    <button onClick={onClickHandler} className="px-1 text-gray-500 text-md font-bold cursor-pointer">
      {isTicked ? TickedCharacter : UnTickedCharacter}
    </button>
  );
}
