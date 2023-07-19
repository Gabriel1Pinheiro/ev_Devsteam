import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/Componentes/Navbar/navbar'
import Subtitle from '@/Componentes/Tipography/Subtitle/subtitle'
import Container from '@/Componentes/Container/container'
import SaleCard from '@/Componentes/Cards/SaleCards/SaleCard'
import GameCard from '@/Componentes/Cards/GameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useState ([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((objeto, posObjeto) => posObjeto !== pos))
  }
  
 console.log(cart)

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct}/>

        <Container>

          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard
                image={'valorant.jpg'}
                discout={'50%'}
                fullPrice={'400.00'}
                discoutPrice={'200.00'}
                onAdd={() => handleAddProduct({name: 'Valorant', price: 200.00, image:'valorant.jpg'})}
              />

              <SaleCard
              image={'dota-2.jpg'}
              discout={'40%'}
              fullPrice={'300.00'}
              discoutPrice={'180.00'}
              onAdd={() => handleAddProduct({name: 'Dota 2', price: 180.00, image:'dota-2.jpg'})}
              />

              <SaleCard 
              image={'league-of-legends.jpg'}
              discout={'30%'}
              fullPrice={'200.00'}
              discoutPrice={'140.00'}
              onAdd={() => handleAddProduct({name: 'League of Legends', price: 140.00, image:'league-of-legends.jpg'})}
              />

            </div>
          </div>

          <div>
            <Subtitle className={styles.session}>Outros jogos</Subtitle>
            <div className={styles.gameContainer}>
              <GameCard 
               onAdd={() => handleAddProduct({name: 'Counter Strike', price: 99.0, image:'counter-strike.jpg'})} 
               />
            </div>
          </div>

        </Container>
      </div>
    </>
  )
}
