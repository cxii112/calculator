import "./App.css";
import AppWrapper from "./components/AppWrapper";

function App() {
  return (
    <AppWrapper>
      {
        /*
         код в AppWrapper можно удалить
         */
      }
      <h1 className="text-4xl font-bold text-zinc-900 bg-color">
        Калькулятор будет тут
      </h1>
    </AppWrapper>
  );
}

export default App;
