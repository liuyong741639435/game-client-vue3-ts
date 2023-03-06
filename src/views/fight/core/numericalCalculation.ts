import { CharacterAttribute } from "../type";

// 数值变化增加时为正数，减少为负数
// 物理
export function physicalAttack(
  attacker: CharacterAttribute,
  beAttacked: CharacterAttribute
) {
  // todo 暴击，减伤等还需要重新处理
  return -(attacker.damageValue - beAttacked.defenseValue);
}
