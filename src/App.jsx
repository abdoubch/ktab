import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, MagasinPage, BookPage, SearchPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/magasin" element={<MagasinPage/>}/>
        <Route path="/book" element={<BookPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
