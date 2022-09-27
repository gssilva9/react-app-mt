import React, { useState, useEffect } from 'react';
import { getConfig } from '../services/config.service';

function AboutPage() {
  
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
      This is the About page
    </div>
  );
}

export default AboutPage;