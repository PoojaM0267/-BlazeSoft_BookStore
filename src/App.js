import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={appStore}>
        <BookList />
      </Provider>
        
      </header>
    </div>
  );
}

export default App;
