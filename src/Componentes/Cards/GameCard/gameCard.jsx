import Image from 'next/image'
import Button from '@/Componentes/Forms/Botton/button'
import styles from './gameCard.module.css'

export default function GameCard() {
    return (
        <div className={styles.gameCard}>
            <Image src='/products/counter-strike.jpg' width={300} height={145} />
            <div className={styles.info}>
                <h3 className={styles.title}>Couter strike: Global offensive</h3>
                <p className={styles.category}>Ação, estratégia, multijogador.</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R$99,90</h2>
                    <Button>Adicionr ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}