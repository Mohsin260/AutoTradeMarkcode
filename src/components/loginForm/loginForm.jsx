"use client";

import { handleUserLogin, navigate } from "@/app/actions/inventory";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleUserLogin, undefined);

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} action={formAction}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {state?.error && <p>{state.error}</p>}{" "}
          {/* display the error message */}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
