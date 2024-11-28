//  Ejercicios Conceptos Básicos ES6+

// Ejercicio 1
// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

const suma = (a = 10, b = 5) => {
    console.log(a + b);
}
suma();
suma(3);
suma(3, 5);

// Ejercicio 2
// 2. En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.
const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 }
const { title, gender, year } = game;

// En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

// En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.
const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};
const { name, race } = animalFunction();

// En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.
const car = { nameCar: 'Mazda 6', itv: [2015, 2011, 2020] }
const { nameCar, itv } = car;
console.log(nameCar);
console.log(itv);
const [year1, year2, year3] = itv;
console.log(year1, year2, year3);

// Ejercicio 3
// Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList];

// Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };

//Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];
const pointsList3 = [...pointsList, ...pointsLis2];

//  Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const toyCopy = { ...toy, ...toyUpdate };

// Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

// Ejercicio 4
// Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];
const usersNames = users.map(user => user.name);
console.log(usersNames);

// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];
const usersNames = users.map(user =>{
    if(user.name.startsWith('A')){
        return 'Anacleto'
    }
    return user.name
});
 
// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)'cuando el valor de la propiedad isVisited = true.
const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];
const citiesNames = cities.map(city =>{
    if(city.isVisited){
        return city.name + ' (Visitado)'
    }
    return city.name
});
console.log(citiesNames);

// Ejercicio 5
// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const agesFiltered = ages.filter(age => age > 18);
console.log(agesFiltered);

// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const agesFiltered = ages.filter(age => age % 2 === 0);
console.log(agesFiltered);

// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersFiltered = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(streamersFiltered);

// Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersFiltered = streamers.filter(streamer => streamer.name.includes('u'));
console.log(streamersFiltered);

// utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
const streamersFiltered = streamers.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends')) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
});

console.log(streamersFiltered);

//Ejercicio 6
//Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

const findNumber = numbers.find(number => number === 100);
console.log(findNumber);

//Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const findMovie = movies.find(movie=> movie.date === 2010);
console.log(findMovie);

//Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa  spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación  lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const alien = aliens.find(alien => alien.name=== 'Cucushumushu');
const mutation = mutations.find(mutations=> mutations.name === 'Porompompero');
const alienMutation = {...alien, ...mutation};
console.log(alienMutation);


//Ejercicio 7
// Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const suma = exams.reduce((acum, exam) => {
    return acum + exam.score;
}, 0);
console.log(suma);

// Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().
const aprobados = exams.reduce((acum, exam) => {
    return acum + (exam.score >= 5 ? exam.score : 0);
}, 0);
console.log(aprobados);

//Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const media = exams.reduce((acum, exam) => {
    return acum + exam.score;
}, 0) / exams.length;
console.log(media);

//Ejercicio 8
//Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

const rpgVideogames = videogames.filter(videogame => videogame.genders.includes('RPG'));
const media = rpgVideogames.reduce((acum, videogame) => acum + videogame.score, 0) / rpgVideogames.length;
console.log(media);


//Ejercicio 9
//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes().
const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  
  const moviesCategories = [];
  for (const movie of movies) {
      for (const category of movie.categories) {
          if (!moviesCategories.includes(category)) {
              moviesCategories.push(category);
          }
      }
  }
  
  console.log(moviesCategories);

  //Ejercicio 10
  //Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  let totalVolume = 0;
  let count = 0;
  for (const user of users) {
    for (const sound in user.favoritesSounds) {
      totalVolume += user.favoritesSounds[sound].volume;
      count++;
  }
  }
  const favoritesSounds = totalVolume / count;
  console.log(favoritesSounds);
