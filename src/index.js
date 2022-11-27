import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './componente/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
const pelicula =[
  {
    id:"1",
    img:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU ",
    titulo:"Titulo",
    contenido:"lorem"
  }
];

root.render(
  
    
    
    <Card id={pelicula.id}
          img={pelicula.img}  
          titulo={pelicula.titulo}
          contenido={pelicula.contenido}
    />
  
);



