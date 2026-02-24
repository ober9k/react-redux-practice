import type { Tag } from "@types/Tag.ts";

type Props = {
  tags: Array<Tag>,
  toggleHandler: (tag: Tag) => void,
};

export function TagList({ tags, toggleHandler }: Props) {

  const onClickHandler = (tag: Tag) => {
    return () => toggleHandler(tag);
  }

  const isNotEmpty = tags.length > 0;

  return (
    <>
      {isNotEmpty && (
        <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag.id}>
            <button onClick={onClickHandler(tag)}>
              {tag.title}
            </button>
          </li>
        ))}
      </ul>
      )}
    </>
  );
}
