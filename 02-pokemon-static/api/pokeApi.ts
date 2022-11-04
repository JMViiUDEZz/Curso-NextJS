import axios from 'axios'; //cliente HTTP de node.js para hacer solicitudes GET, POST, PUT y DELETE

//creamos la instancia pokeApi
const pokeApi = axios.create({ 
    baseURL: 'https://pokeapi.co/api/v2' //Con esto, cuando llamemos a pokeApi.get('/pokemon?limit=151') omitimos el prefijo de la request especificado en baseURL: 'https://pokeapi.co/api/v2'
});

export default pokeApi; //la exportacion por defecto NO tiene NOMBRE, aunque nosotros la llamemos pokeApi