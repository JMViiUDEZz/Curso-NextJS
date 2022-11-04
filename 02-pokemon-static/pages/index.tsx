import { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { pokemons } from '../../../Nest/01-TypeScript-intro/src/bases/02-objects';


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
  
  const { data } = await pokeApi.get('/pokemon?limit=151'); //almacenamos en la variable la peticion get con los 151 pokemons habiendo desestructurado la data

  return {
    props: { // will be passed to the page component as props (propiedades)
      pokemons: data.results
    }
  }
}


export default HomePage;