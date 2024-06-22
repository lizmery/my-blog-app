import LoginForm from '../../../components/loginForm/loginForm'
import { handleGithubLogin } from '../../../lib/action'
import styles from './login.module.css'
import { Github } from 'lucide-react'

const LoginPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form action={handleGithubLogin}>
            <button className={styles.github}>
              <Github className={styles.icon}/> Login with Github
              </button>
          </form>
          <LoginForm />
        </div>
      </div>
    )
}

export default LoginPage