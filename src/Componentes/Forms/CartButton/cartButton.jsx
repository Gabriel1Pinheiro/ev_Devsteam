import { useState } from 'react'
import styles from './cartButton.module.css'
import {BsCart4} from 'react-icons/bs'

import CartMenu from '@/Componentes/CartMenu/cartmenu'

export default function CartButton(){
    const [open, setOpen]  = useState(false)
    let menuAberto = false
    return(
        <div className={styles.icon}>
             <BsCart4 
             className={styles.nome} 
             size={40}
             onClick={() => {setOpen(!open)}}
             />
             {open && <CartMenu/>}
        </div>
    )
}