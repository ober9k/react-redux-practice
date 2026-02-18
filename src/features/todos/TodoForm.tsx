import { useActionState } from "react";
import type { ZodError } from "zod";
import { flattenError } from "zod";
import Button from "../../components/Button.tsx";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { TodoSchema } from "../../schemas/TodoSchema.ts";
import cssStyles from "./TodoForm.module.css";
import { addTodo } from "./todosSlice.ts";

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const initialState = {
  title: "",
  description: "",
  errors: {},
};

type DisplayErrorProps = {
  message: string,
}

function DisplayError({ message }: DisplayErrorProps) {
  return (
    <p>
      {message}
    </p>
  );
}

export default function TodoForm() {
  const dispatch = useAppDispatch();
  const [ state, formAction, isPending ] = useActionState(async (state, formData: FormData) => {
    await sleep(1000);

    const title = formData.get("title").toString();
    const description = formData.get("description").toString();
    const isComplete = false;

    try {
      TodoSchema.parse({ title, description });
    }
    catch (error: ZodError) {
      return {
        title, description,
        ...flattenError(error),
      };
    }

    dispatch(addTodo({
      title, description, tags: [], isComplete,
    }));

    return {
      title, description,
    };
  }, initialState);

  return (
    <div>
      <h3>Add Todo:</h3>
      <form action={formAction} className={cssStyles.form}>
        <p>
          <label htmlFor="title">Title</label><br/>
          <input type="text" id="title" name="title" defaultValue={state.title} />
        </p>
        {state.fieldErrors?.title && (<DisplayError message={state.fieldErrors.title} />)}
        <p>
          <label htmlFor="description">description</label><br/>
          <input type="text" id="description" name="description" defaultValue={state.description} />
        </p>
        {state.fieldErrors?.description && (<DisplayError message={state.fieldErrors.description} />)}
        <p>
          <Button disabled={isPending}>
            {isPending ? "Submitting" : "Submit"}
          </Button>
        </p>
      </form>
    </div>
  )
}
