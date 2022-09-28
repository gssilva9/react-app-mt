import React, { useState, useEffect } from 'react';
import Card from './Card';
import logoSophie from '../assets/img/sophie.png';
import Voicero from '../assets/img/voicero.png';
import { getConfig } from '../services/config.service';

const items = [
  {
    id: 'card1',
    title: 'Sophie',
    description: 'Sophie é uma Assistente Virtual que utiliza a Inteligência Virtual para melhorar o seu atendimento e aprender constantemente de acordo com sua utilização.',
    link: 'https://stefanini.com/pt-br/solucoes/inteligencia-artificial/sophie',
    img: logoSophie
  },
  {
    id: 'card2',
    title: 'Voicero',
    description: 'Voicero Translator é um Assistente Virtual que utiliza a Inteligência Virtual para fazer traduções em tempo real nas suas chamadas do Microsoft Teams.',
    link: 'https://voicero.net/',
    img: Voicero
  }
]

function HomePage({ items }) {

  const [config, setConfig] = useState({ loading: true, data: {} });

  const { loading, data } = config;

  useEffect(() => {
    async function getConfigAsync(){
      const { data } = await getConfig();
      setConfig({ loading: false, data });
    }
  
    getConfigAsync();
  }
  , []);
  
  return (
    <div>
      <p>
        {
          !loading && data.name && `The Tenant is: ${data.name}`
        }
      </p>
      Welcome from:
      <div className="cards-container">
        {
          data.clientId === 1 &&
            <Card key={items[0].id} {...items[0]} />
        }
        {
          data.clientId === 2 &&
            <Card key={items[1].id} {...items[1]} />
        }
      </div>
    </div>
  );
}

HomePage.defaultProps = {
  items
}

export default HomePage;
