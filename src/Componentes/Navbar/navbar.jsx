import styles from './navbar.module.css'


import Logo from '@/Componentes/Logo/logo'
import Input from '@/Componentes/Forms/Input/input'
import CartButton from '@/Componentes/Forms/CartButton/cartButton'



export default function Navbar({cart, onRemove}) {
    return(
        <nav className={styles.navbar}>
            <Logo/>
            <div className={styles.search}>
            <Input type='text' placeholder='Buscar' fullWidth />
            </div>
            <CartButton
            cart={cart}
            onRemove={onRemove}
            />
        </nav>
    )

}