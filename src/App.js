import './App.css';
import SearchBar from './components/SearchBar';
import BookData from './Data.json';

function App() {
    return (
        <div className='App' style={{ height: '100vh', overflow: 'hidden' }}>
            <SearchBar placeholder='Enter a Book Name...' data={BookData} />
        </div>
    );
}

export default App;
