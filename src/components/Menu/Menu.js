import style from './Menu.module.css'
import useAuth from '../../hooks/useAuth.js'

function Menu() {
   
    const [auth, setAuth] = useAuth()

    const login = (e) => {
        e.preventDefault()
        setAuth(true)
    }
    const logout = (e) => {
        e.preventDefault()
        setAuth(false)
    }

    return (
        <div className={`${style.menuContainer}`}>
            <ul className={style.menu}>
                <li className={style.menuItem}>
                    <a href="#section">Home</a>
                </li>
                    {auth
                    ? (
                    <li className={style.menuItem}>
                        <a href="#section" onClick={logout}>Wyloguj</a> 
                    </li>
                    )
                    : (
                    <li className={style.menuItem}> 
                        <a href="#section" onClick={login}>Zaloguj</a> 
                    </li>   
                    )
                    }
            </ul>
        </div>
    )
}

export default Menu