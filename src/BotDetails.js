import React from 'react';

const BotDetails = ({ bot, onAddToArmy }) => {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-details">
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>Class: {bot_class}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Catchphrase: {catchphrase}</p>
      <button onClick={() => onAddToArmy(bot)}>Enlist</button>
    </div>
  );
};

export default BotDetails;