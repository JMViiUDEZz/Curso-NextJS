//el archivo _document.tsx lo utilizamos para aumentar nuestro HTML
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '@nextui-org/react'; //con CssBaseline, nuestra app se muestra de la misma manera en todos los navegadores web

class MyDocument extends Document {
  
  static async getInitialProps( ctx: DocumentContext) { //ctx (Context): Dentro de este Contexto, tendremos la informacion sobre la request, la response...
  //ademas, podremos manipular la respuesta a nuestro gusto
    const initialProps = await Document.getInitialProps(ctx) //Run the parent `getInitialProps`, it now includes the custom `renderPage`
    return { 
        ...initialProps,
        styles: <>{initialProps.styles}</>
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
            { CssBaseline.flush() } 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument