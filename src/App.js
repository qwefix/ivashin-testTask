import './App.scss';
import Footer from './Ui components/Footer/Footer';
import Header from './Ui components/Header/Header';
import Notes from './Ui components/Notes/Notes';

function App() {
  return (
    <div className="app">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
