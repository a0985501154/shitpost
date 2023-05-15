import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import ArticlePage from "./Pages/ArticlePage";
import { articles } from "./Pages/ArticleData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/article/:index"
          element={<ArticlePage data={articles} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
