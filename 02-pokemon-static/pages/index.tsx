import { NextPage, GetStaticProps } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons);

  return (
    <Layout title='Listado de Pokemons'>
      
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ({ id, name, img }) => ( //llamamos al array de pokemons y desestructuramos el id y el nombre
          <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
            <Card hoverable clickable>
              <Card.Body css={{ p: 1}}>
                <Card.Image
                  src={ img }
                  width="100%"
                  height={ 140 }
                />
              </Card.Body>
              <Card.Footer>
                <Row justify='space-between'>
                  <Text transform='capitalize'>{ name }</Text>
                  <Text>#{ id }</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          ))        
        } 
      </Grid.Container>

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
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151'); //almacenamos en la variable la peticion get con los 151 pokemons habiendo desestructurado la data

  console.log(data);

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({ //metodo( (nombre:poke, indice:i --> empieza en 0))
    ...poke, //propiedades de poke
    id: i + 1, //id pokemon --> indice + 1
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg` //img pokemon --> interpolacion de string: ${ i + 1 }
  }) )

  return {
    props: { // will be passed to the page component as props (propiedades)
      pokemons //cuando una propiedad tiene el mismo nombre que una variable (en este caso, un array) -->  pokemons: pokemons, se puede dejar de la siguiente manera: pokemons
    }
  }
}


export default HomePage;