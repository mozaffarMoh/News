import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AllNews from "./components/AllNews/AllNews";
import BusinessNews from "./components/BusinessNews/BusinessNews";
import Sources from "./components/Sources/Sources";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/business-news" element={<BusinessNews />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
