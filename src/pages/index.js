import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/Componentes/Navbar/navbar'
import Subtitle from '@/Componentes/Tipography/Subtitle/subtitle'
import Container from '@/Componentes/Container/container'
import SaleCard from '@/Componentes/Cards/SaleCards/SaleCard'
 import GameCard  from '@/Componentes/Cards/GameCard/gameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>

          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard />
              <SaleCard />
              <SaleCard />
            </div>
          </div>

          <div>
            <Subtitle className={styles.session}>Outros jogos</Subtitle>
            <div className={styles.gameContainer}>
              <GameCard/>
              <GameCard/>
              <GameCard/>
            </div>
          </div>

        </Container>
      </div>
    </>
  )
}
