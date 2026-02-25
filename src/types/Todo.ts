import type { Tag } from "@/types/Tag.ts";

export type Todo = {
  id: number,
  title: string,
  description: string,
  tags: Array<Tag>,
  isCompleted: boolean,
}
