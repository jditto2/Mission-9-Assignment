import "./App.css";
import Welcome from "./components/Welcome";
import TeamList from "./components/TeamList";
import TeamCard from "./components/TeamCard"; // ✅ Importing TeamCard

function App() {
  return (
    <>
      <Welcome />
      <TeamCard 
        school="Example University" 
        name="Example Mascot" 
        city="Example City" 
        state="EX" 
      /> 
      <TeamList />
    </>
  );
}

export default App;
