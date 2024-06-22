'use client'

import { login } from '../../lib/action'
import styles from './loginForm.module.css'
import { useFormState } from 'react-dom'
import Link from 'next/link'

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined)

    return (
        <form className={styles.form} action={formAction}>
            <input type='text' name='username' placeholder='username' />
            <input type='password' name='password' placeholder='password' />
            <button>Login</button>
            {state?.error}
            <Link href='/register' className={styles.link}>
                {'Dont have an account?'} <b>Register</b>
            </Link>
        </form>
    )
}

export default LoginForm