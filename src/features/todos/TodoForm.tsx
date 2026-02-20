import { useActionState } from "react";
import { flattenError, z } from "zod";
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

type FlattenedErrors = z.inferFlattenedErrors<typeof TodoSchema>;

type FormState = {
  result: boolean,
  errors: FlattenedErrors,
}

const initialState: FormState = {
  result: false,
  errors: {
    formErrors: [],
    fieldErrors: {},
  },
};

const defaultValues = {
  title: "",
  description: "",
}

type TodoFormProps = {
  onClose: () => void,
}

export default function TodoForm({ onClose }: TodoFormProps) {
  const dispatch = useAppDispatch();

  const [ state, formAction, isPending ] = useActionState(async (prevState: FormState, formData: FormData) => {
    await sleep(1000);

    const result = TodoSchema.safeParse({
      title: formData.get("title"),
      description: formData.get("description"),
    });

    if (!result.success) {
      return {
        result: false,
        errors: flattenError(result.error),
      };
    }

    const { title, description } = result.data;

    dispatch(addTodo({
      title, description, tags: [], isComplete: false,
    }));

    onClose();

    return {
      ...prevState,
      result: true,
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
            <input type="text" id="title" name="title" defaultValue={defaultValues.title}/>
          </p>
          {state.errors?.fieldErrors?.title && (
            <p>
              {state.errors.fieldErrors.title}
            </p>
          )}
          <p>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" defaultValue={defaultValues.description}/>
          </p>
          {state.errors?.fieldErrors?.description && (
            <p>
              {state.errors.fieldErrors.description}
            </p>
          )}
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
