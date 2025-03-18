import { useEffect, useState } from "react";
import TeamCard from "./TeamCard"; // Import TeamCard component

type Team = {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  city: string;
  state: string;
};

const TeamList = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/CollegeBasketballTeams.json") // Fetch the JSON file from public
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        if (Array.isArray(data.teams)) {
          setTeams(data.teams);
        } else {
          console.error("Data format incorrect:", data);
          setTeams([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTeams([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading teams...</p>;
  if (teams.length === 0) return <p>No teams found. Check if JSON data is correct.</p>;

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {teams.map((team) => (
          <TeamCard key={team.tid} {...team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
