import { useEffect ,useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');

useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get('https://yoratyaackov.osc-fr1.scalingo.io/api/a');
      console.log(response.data);
      setMessage(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getData();
}, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      hello world
    </div>
  );
}

export default App;
