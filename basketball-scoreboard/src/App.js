import Scoreboard from "./components/Scoreboard";

const App = () => {
  return (
    <main className="app">
      <Scoreboard title="home" teamName="Chicago Bulls" />
      <Scoreboard title="away" teamName="LA Lakers" />
    </main>
  );
};

export default App;
