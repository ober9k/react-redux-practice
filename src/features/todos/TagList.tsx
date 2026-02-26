import classes from "@features/todos/TagList.module.css";
import type { Tag } from "@/types/Tag.ts";

type Props = {
  tags: Array<Tag>,
  addHandler: () => void,
  toggleHandler: (tag: Tag) => void,
};

export function TagList({ tags, toggleHandler }: Props) {

  const onToggleHandler = (tag: Tag) => {
    return () => toggleHandler(tag);
  }

  const onAddHandler = () => {
    return () => {};
  }

  return (
    <>
      <ul className={classes.tags}>
        {tags.map((tag) => (
          <li key={tag.id}>
            <button onClick={onToggleHandler(tag)} className={classes.tag}>
              {tag.title}
            </button>
          </li>
        ))}
        <li>
          <button onClick={onAddHandler()} className={classes.tag}>
            <span className={classes.addTag}>+</span>
          </button>
        </li>
      </ul>
    </>
  );
}
