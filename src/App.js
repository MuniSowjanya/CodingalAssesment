import "./styles.css";
import Navbar from "./Components/Navbar";
import Posts from "./Components/posts";
import { Route, BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" Component={Navbar} />
        <Route exact path="/post" Component={Posts} />
      </BrowserRouter>
      <h1>Codingal</h1>
      <h2>
        1-on-1 coding classes and fun competitions for kids to fall in love with
        coding
      </h2>
    </div>
  );
}
