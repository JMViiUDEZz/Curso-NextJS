import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';


const HomePage: NextPage = ( props ) => {

  console.log({props});

  return (
    <Layout title='Listado de Pokemons'>
      
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>

    </Layout>
  )
}


// Se usa cuando la data requerida está disponible en build time (tiempo de construcción de la aplicación).
// Se hace el yarn build() y se llama a GetStaticProps.
// Se renderiza antes de hacer el request de la página.

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  
  console.log('Hola Mundo');

  return {
    props: { // will be passed to the page component as props
      name: 'JMViiUDEZz'
    }
  }
}


export default HomePage;