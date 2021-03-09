import './index.css';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
