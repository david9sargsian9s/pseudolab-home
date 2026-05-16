import styles from './NotFound.module.css';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <div className={styles.card}>
            <h1 className={styles.code}>404</h1>
            <p className={styles.title}>Page not found.</p>
            <p className={styles.text}>
                The page you are looking for doesn't exist or was moved.
            </p>
            <NavLink to="/">
                Go home
            </NavLink>
        </div>
    </div>
  )
}
