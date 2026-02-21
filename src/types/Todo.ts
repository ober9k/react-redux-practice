import type { Tag } from "./Tag.ts";

export type Todo = {
  id: number,
  title: string,
  description: string,
  tags: Array<Tag>,
  isComplete: boolean,
}
