import './App.scss';
import Footer from './Ui components/Footer/Footer';
import Header from './Ui components/Header/Header';
import NotesPure from './Ui components/Notes/NotesPure';

function App() {
  return (
    <div className="app">
      <Header />
      <NotesPure />
      <Footer />
    </div>
  );
}

export default App;
