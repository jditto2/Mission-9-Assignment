interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamCard = ({ school, name, city, state }: TeamProps) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>Location: {city}, {state}</h3>
    </div>
  );
};

export default TeamCard;
