import Image from "next/image"
import styles from '@/Componentes/Logo/logo.module.css'

export default function Logo() {
    return(
        <div className={styles.Logo}>
            <Image src='/logo.svg' width={60} height={60}/>
            <h1>DevSteam</h1>
        </div>
    )
}