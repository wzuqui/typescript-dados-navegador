import { useEffect, useState } from 'react';

import { obterDadosCliente } from './cliente';

function App() {
  const [value, setValue] = useState('');
  useEffect(() => {
    (async () => {
      setValue(JSON.stringify(await obterDadosCliente(), null, 2));
    })();
  }, []);

  return <pre>{value}</pre>;
}

export default App;
