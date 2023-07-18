import styles from "./cartmenu.module.css"

import CartOption from "@/Componentes/CartOption/cartOption"

export default function CartMenu(){
    return(
        <div className={styles.menu}>
            <div className={styles.option}>
                <CartOption/>
                <CartOption/>
                <CartOption/>
            </div>
            <div className={styles.priceline}>
                <h2>total</h2>
                <h2 className={styles.price}>R$ 99,40</h2>
            </div>
        </div>
    )
}