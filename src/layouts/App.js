import '../styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          {<Header />}
        </header>
        <main>
          <aside>
            {<Navigation />}
          </aside>
          <section className="content">
            {<Content />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
