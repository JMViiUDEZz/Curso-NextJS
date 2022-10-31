// import { FC } from "react"
// Cuando definimos los CHILDREN se definia con los FC de react, pero en la nueva versión de REACT 18 esto se sacó y según la documentación se soluciona de la siguiente manera:
import React, { PropsWithChildren } from 'react';

type Props = {};

import Head from 'next/head';

import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <div className={styles.container}>

          <Head>
            <title>Home - Jose</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
           
           {children}

          </main>
    
        </div>
      )
}
