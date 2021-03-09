import './index.css';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import CategoryFilter from './components/CategoryFilter';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
      <CategoryFilter />
    </div>
  );
}

export default App;
