export function applyTechModifiers(unit, tech) {
  return {
    ...unit,
    attack: unit.attack * (1 + 0.05 * (tech.weapons || 0)),
    armor: unit.armor * (1 + 0.05 * (tech.armor || 0)),
    shield: unit.shield * (1 + 0.05 * (tech.shields || 0)),
    shieldPenetration: unit.shieldPenetration ?? 0.01
  };
}
