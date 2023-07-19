import styles from './SaleCard.module.css'

import Image from "next/image"
import Button from '@/Componentes/Forms/Botton/button'

export default function SaleCard({image, discout, fullPrice, discoutPrice, onAdd}) {
    return (

        <div className={styles.saleCard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
                <h3>Oferta exclusiva</h3>
                <div className={styles.priceCard}> 
                    <div className={styles.percent}>{discout}</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R${fullPrice}</p>
                        <h4 className={styles.discoutPrice}>R${discoutPrice}</h4>
                    </div>
                </div>
                <Button fullwidth onClick={onAdd}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps = {
    image: 'valorant.jpg',
    discout: '90%',
    fullPrice: '199.0',
    discoutPrice: '57,90'
}