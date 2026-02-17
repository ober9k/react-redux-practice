import { useActionState } from "react";
import Button from "../../components/Button.tsx";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { addTodo } from "./todosSlice.ts";
import cssStyles from "./TodoForm.module.css";

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const initialState = {
  title: "",
  errors: {},
};

export default function TodoForm() {
  const dispatch = useAppDispatch();
  const [ state, formAction, isPending ] = useActionState(async (state, formData: FormData) => {
    await sleep(1000);

    const title = formData.get("title").toString();
    const isComplete = false;

    if (title.length === 0) {
      return {
        title,
        errors: {
          title: {
            message: "Title must not be empty.",
          }
        }
      };
    }

    dispatch(addTodo({ title, isComplete }));

    return state;
  }, initialState);

  return (
    <div>
      <h3>Add Todo:</h3>
      <form action={formAction} className={cssStyles.form}>
        <p>
          <label htmlFor="title">Title</label><br/>
          <input type="text" id="title" name="title" defaultValue={state.title} />
        </p>
        {state.errors?.title && (
          <p>
            {state.errors.title.message}
          </p>
        )}
        <p>
          <Button disabled={isPending}>
            {isPending ? "Submitting" : "Submit"}
          </Button>
        </p>
      </form>
    </div>
  )
}
