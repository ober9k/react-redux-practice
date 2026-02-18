import { useActionState } from "react";
import type { ZodError } from "zod";
import { flattenError } from "zod";
import ModalFooter from "../../components/modal/ModalFooter.tsx";
import ModalHeader from "../../components/modal/ModalHeader.tsx";
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

type TodoFormProps = {
  onClose: () => void,
}

export default function TodoForm({ onClose }: TodoFormProps) {
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

    onClose();

    return {
      title, description,
    };
  }, initialState);

  return (
    <>
    <form action={formAction} className={cssStyles.form}>
      <ModalHeader>
        <h2>Add Todo</h2>
      </ModalHeader>
      <div>
        <p>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" defaultValue={state.title}/>
        </p>
        {state.fieldErrors?.title && (<DisplayError message={state.fieldErrors.title}/>)}
        <p>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" defaultValue={state.description}/>
        </p>
        {state.fieldErrors?.description && (<DisplayError message={state.fieldErrors.description}/>)}
    </div>
  <ModalFooter>
    <button onClick={onClose} disabled={isPending}>
          Cancel
        </button>
        &nbsp;
        <button disabled={isPending}>
          {isPending ? "Submitting" : "Submit"}
        </button>
      </ModalFooter>
    </form>
    </>
  );
}
