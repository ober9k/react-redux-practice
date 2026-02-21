import { z } from "zod";

const TitleMinLength = 0;
const TitleMaxLength = 15;

export const TagDataSchema = z.object({
  title: z.string()
    .min(TitleMinLength, { message: "Title is required." })
    .max(TitleMaxLength),
});
