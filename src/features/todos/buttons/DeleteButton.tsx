type Props = {
  toggleHandler: () => void,
};

const DeleteCharacter = "×";

export default function DeleteButton({ toggleHandler }: Props) {

  const onClickHandler = () => {
    toggleHandler();
  }

  return (
    <button onClick={onClickHandler} className="px-1 text-gray-500 text-md font-bold cursor-pointer">
      {DeleteCharacter}
    </button>
  );
}
