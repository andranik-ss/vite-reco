import { Outlet, NavLink } from 'react-router-dom'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <>
      <header className={styles.topBar}>
        <nav className={styles.nav}>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
        </nav>
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  )
}
