import styles from '@/Componentes/Navbar/navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/Componentes/Logo/logo'
import Input from '../Forms/Input/input'

export default function Navbar() {

    return(
        <nav className={styles.navbar}>
            <Logo/>
            <div className={styles.search}>
            <Input type="text" placeholder="Buscar" fullWidth/>
            </div>
            <BsCart4 size={40}/>
        </nav>
    )

}