import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/Componentes/Navbar/navbar'
import Subtitle from '@/Componentes/Tipography/Subtitle/subtitle'
import Container from '@/Componentes/Container/container'
import SaleCard from '@/Componentes/Cards/SaleCards/SaleCard'
import GameCard from '@/Componentes/Cards/GameCard/gameCard'

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
              <SaleCard
                image={'valorant.jpg'}
                discout={'100%'}
                fullPrice={'00,00'}
                discoutPrice={'00,00'}
              />
              <SaleCard
              image={'dota-2.jpg'}
              discout={'100%'}
              fullPrice={'00,00'}
              discoutPrice={'00,00'}
              />
              <SaleCard 
              image={'league-of-legends.jpg'}
              discout={'90%'}
              fullPrice={'199.0'}
              discoutPrice={'57,90'}
              />
            </div>
          </div>

          <div>
            <Subtitle className={styles.session}>Outros jogos</Subtitle>
            <div className={styles.gameContainer}>
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>

        </Container>
      </div>
    </>
  )
}
