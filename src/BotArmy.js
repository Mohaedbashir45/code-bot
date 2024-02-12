import React from 'react';

const BotArmy = ({ army, onRelease, onDelete }) => (
  <ul>
    {army.map(bot => (
      <li key={bot.id}>
        {bot.name} 
        <button onClick={() => onRelease(bot)}>Release</button>
        <button onClick={() => onDelete(bot)}>x</button>
      </li>
    ))}
  </ul>
);

export default BotArmy;