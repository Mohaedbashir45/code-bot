import React, { useState } from 'react';

const BotList = ({ bots, onView, onAddToArmy, onDischarge, onEnlist, filters }) => {
  const [expandedLists, setExpandedLists] = useState({});

  const toggleList = botClass => {
    setExpandedLists(prevState => ({
      ...prevState,
      [botClass]: !prevState[botClass]
    }));
  };

  const filterBots = bot => {
    return filters[bot.bot_class];
  };

  const groupedBots = bots.reduce((acc, bot) => {
    if (!acc[bot.bot_class]) {
      acc[bot.bot_class] = [];
    }
    acc[bot.bot_class].push(bot);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedBots).map(([botClass, botList]) => (
        <div key={botClass}>
          <h2>
            {botClass}{' '}
            <button onClick={() => toggleList(botClass)}>
              {expandedLists[botClass] ? 'Hide List' : 'View List'}
            </button>
          </h2>
          {expandedLists[botClass] && (
            <ul>
              {botList.filter(filterBots).map(bot => (
                <li key={bot.id}>
                  {bot.name}
                  <button onClick={() => onView(bot)}>View</button>
                  <button onClick={() => onAddToArmy(bot)}>Enlist</button>
                  <button onClick={() => onDischarge(bot)}>Discharge</button>
                  {/* <button onClick={() => onEnlist(bot)}>Enlist</button> */}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default BotList;