import { applyTechModifiers } from './tech.js';
import unitStats from './unitStats.js';

document.getElementById('applyTech').addEventListener('click', () => {
  const tech = {
    weapons: parseInt(document.getElementById('weaponsTech').value),
    armor: parseInt(document.getElementById('armorTech').value),
    shields: parseInt(document.getElementById('shieldsTech').value),
  };

  const result = applyTechModifiers(unitStats.IonFrigate, tech);

  document.getElementById('output').innerHTML = `
    <h2>Ion Frigate (Tech Applied)</h2>
    <p>Attack: ${result.attack.toFixed(2)}</p>
    <p>Armor: ${result.armor.toFixed(2)}</p>
    <p>Shield: ${result.shield.toFixed(2)}</p>
    <p>Shield Penetration: ${result.shieldPenetration * 100}%</p>
  `;
});
