import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import BlogPost from "./components/BlogPost/BlogPost";
import BlogList from "./components/BlogList/BlogList";

function App() {
  return (
    <div className="App">
      <Header />
      <BlogList />
    </div>
  );
}

export default App;
