import { useEffect ,useState } from 'react';
import api from './utils/Axios';


function App() {

  const [message, setMessage] = useState('');

useEffect(() => {
  const getData = async () => {
    try {
      const response = await api.get('a');
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
