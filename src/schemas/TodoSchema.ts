import { z } from "zod";

const TitleMinLength = 1;
const TitleMaxLength = 63;
const DescriptionMinLength = 1;
const DescriptionMaxLength = 255;

export const TodoSchema = z.object({
  title: z.string()
    .min(TitleMinLength, { message: "Title is required." })
    .max(TitleMaxLength),
  description: z.string()
    .min(DescriptionMinLength, { message: "Description is required." })
    .max(DescriptionMaxLength),
});
