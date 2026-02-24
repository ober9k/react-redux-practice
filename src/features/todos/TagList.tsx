import type { Tag } from "@types/Tag.ts";
import classes from "@features/todos/TagList.module.css";

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
    </>
  );
}
