
import './App.css';
import Translator from './Translator'
import Axios from 'axios'

function App() {
  const fetchdata = async () =>{



    var options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'accept-encoding': 'application/gzip',
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        'x-rapidapi-key': 'c256ecdf6emshcedc5242d337c13p19a862jsnee79af877651'
      },
      data: {q: 'English is hard, but detectably so'}
    };
    
    Axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });


  }
  return (
    <div className="App">
      <h1>TRANSLATOR +</h1>
     <Translator />
    </div>
  );
}

export default App;
