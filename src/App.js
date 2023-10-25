import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header  Cat-color">
        <img
          src="https://img.benesse-cms.jp/pet-cat/item/image/normal/f3978ebc-9030-49e7-aa5e-4a370a955e1b.jpg?w=1200&h=1200&resize_type=cover&resize_mode=force"
          className="App-logo"
          alt="logo"
        />
        <p className=" great-purple">
          ようこそ　<code>WED　</code> Communityへ
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;
