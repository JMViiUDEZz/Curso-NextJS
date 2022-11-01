import type { AppProps } from 'next/app'

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // 2. Use at the root of your app
  return (
    //Un Provider es como un "proveedor de informacion"
    //por ello, podremos colocar elementos, objetos, funciones... y estarán disponibles en todos los hijos
    //(en pocas palabras, en casi toda la aplicacion)
    //en este caso, todos los hijos estan debajo de <Component/>
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
