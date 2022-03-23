import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllPhones from './components/AllPhones/AllPhones';
import SearchPhone from './components/SearchPhone/SearchPhone';

function App() {

  return (
    <div className="App">
      <h1>Hello Amazing Phones</h1>
      <SearchPhone></SearchPhone>
      <AllPhones></AllPhones>
    </div>
  );
}

export default App;
