import classes from "@features/todos/TagList.module.css";
import type { Tag } from "@/types/Tag.ts";

type Props = {
  tags: Array<Tag>,
  toggleHandler: (tag: Tag) => void,
};

export function TagList({ tags, toggleHandler }: Props) {

  const onClickHandler = (tag: Tag) => {
    return () => toggleHandler(tag);
  }

  const isNotEmpty = tags.length > 0;

  const renderEmpty = () => (
    <p className="p-1 px-2 mb-1 text-xs">
      No tags to display.
    </p>
  );

  return (
    <>
      {isNotEmpty && (
        <ul className={classes.tags}>
        {tags.map((tag) => (
          <li key={tag.id}>
            <button onClick={onClickHandler(tag)} className={classes.tag}>
              {tag.title}
            </button>
          </li>
        ))}
      </ul>
      )}
      {!isNotEmpty && renderEmpty()}
    </>
  );
}
