import Comments from "./HOC/Comments";
import Likes from "./HOC/Likes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Likes />
      <br />
      <Comments />
    </div>
  );
}
