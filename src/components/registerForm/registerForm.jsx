"use client"

import { registerUser } from "@/app/actions/inventory"
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const RegisterForm = () => {

    const [state, formAction] = useFormState(registerUser, undefined);

    const router = useRouter();


    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);


    return (
        <form action={formAction} className={styles.form}>
            <input id="username" type="text" placeholder="Username" name="username" />
            <input id="email" type="email" placeholder="Email" name="email" />
            <input id="password" type="password" placeholder="Password" name="password" />
            <input id="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword" />
            <button type="submit">Register</button>
            {state?.error && <p>{state.error}</p>} {/* display the error message */}
            <Link className="hover:text-green-500" href="/login">
              Have An Account? <b>Login</b>
            </Link>
        </form>
    );
};

export default RegisterForm;
