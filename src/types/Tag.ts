export type Tag = {
  id: number,
  title: string,
}

export type NewTag = Omit<Tag, "id">;
