// src/App.jsx
import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [massege, setMassege] = useState("Pick of your team members");
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleRemoveFighter = (oldZombieFighter) =>{
    const oldArrZombi = zombieFighters.filter(zombieFighter =>(
      zombieFighter.id === oldZombieFighter.id
    ))

    const updatedTeam = oldArrZombi
    setTeam(updatedTeam)

    if (oldArrZombi) {
      setMassege("Pick of your team members")
    }
    
    const updatedMoneyVal = money + oldZombieFighter.price
    const updatedTotalAgilityVal = totalAgility -  oldZombieFighter.agility
    const updatedTotalStrengthVal = totalStrength - oldZombieFighter.strength
    setMoney(updatedMoneyVal)
    setTotalAgility(updatedTotalAgilityVal)
    setTotalStrength(updatedTotalStrengthVal)

  }

  const handleAddFighter = (newZombieFighter) => {

    if (money < newZombieFighter.price) {
      return
    }
    // copy the state array
    // modify our copy 
    // replace state with our copy
    const newTeam = [...team, newZombieFighter]
    setTeam(newTeam)

    const newArrZombi = zombieFighters.filter(zombieFighter =>(
      zombieFighter.id !== newZombieFighter.id
    ))
    if (newArrZombi) {
      
      setZombieFighters(newArrZombi)
      setMassege("")
    }
    
    const newMoneyVal = money - newZombieFighter.price
    const newTotalAgilityVal = +  newZombieFighter.agility
    const newTotalStrengthVal = + newZombieFighter.strength
    setMoney(newMoneyVal)
    setTotalAgility(newTotalAgilityVal)
    setTotalStrength(newTotalStrengthVal)
  }

  return (
    <>
      <h1>Zombi Fighters</h1>

      <h4>
        Money: <span>{money}</span>{" "}
      </h4>
      <h4>
        Team Strength: <span>{totalStrength}</span>
      </h4>
      <h4>
        Team Agility: <span>{totalAgility}</span>
      </h4>
      <h4>Team</h4>
      <p>{massege}</p>
      {team.map(zombieFighter => (
        <ul>
          <li>
          <img src={zombieFighter.img} />
            <h3>{zombieFighter.name}</h3>
            <p>Price: {zombieFighter.price}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove</button>
            </li>
        </ul>
      ))}
      <h4>Fighters</h4>
      {zombieFighters.map(zombieFighter => (
        <ul>
          <li>
          <img src={zombieFighter.img} />
            <h3>{zombieFighter.name}</h3>
            <p>Price: {zombieFighter.price}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
            </li>
        </ul>
      ))}
    </>
  );
};

export default App;
