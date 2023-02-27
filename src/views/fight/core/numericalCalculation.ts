import { CharacterAttribute } from "../type";

// 物理
export function physicalAttack(
  attacker: CharacterAttribute,
  beAttacked: CharacterAttribute
) {
  // todo 暴击，减伤等还需要重新处理
  return attacker.damageValue - beAttacked.defenseValue;
}
