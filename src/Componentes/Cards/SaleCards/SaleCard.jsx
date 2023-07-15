import styles from './SaleCard.module.css'

import Image from "next/image"
import Button from '@/Componentes/Forms/Botton/button'

export default function SaleCard() {
    return (
        <div className={styles.saleCard}>
            <Image src='/products/league-of-legends.jpg' width={250} height={300} />
            <div className={styles.info}>
                <h3>Oferta exclusiva</h3>
                <div className={styles.priceCard}> 
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$99,90</p>
                        <h4 className={styles.discoutPrice}>R$89,90</h4>
                    </div>
                </div>
                <Button fullwidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}