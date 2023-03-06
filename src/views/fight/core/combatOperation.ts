// putonggongji

import { CharacterAttribute, OperateState } from "../type";
import { physicalAttack } from "./numericalCalculation";

// 一 普通攻击
// 1 操作优先级，自动还是特定操作 2 当前行动对象  3 敌方列表 4 我方列表
export function normalAttack(
  operate: { state: OperateState; id?: string },
  self: CharacterAttribute,
  ourCharacterAttribute: CharacterAttribute[],
  theirRoleAttributes: CharacterAttribute[]
) {
  // 这个方法前要先判断是否还能行动
  // 第一步判断是否为优先锁定某人， 然后判断目标是能被操作，如死亡等。 如果是无法被操作，则改为随机。操作normalAttack（示例normalAttack，可以是上一次估计的，也可以是残血等）自身也可以有优先级。
  const { state, id } = operate;
  // todo使用是否血量为0作为无法被攻击的判断。 后续有
  let target = id ? theirRoleAttributes.find((item) => item.id === id) : null;
  if (state === OperateState.lock && (target?.variableValue.hp ?? 0) > 0) {
    try {
      physicalAttack(self, target!);
    } catch (error) {
      console.error("error");
    }
  }
  // 随机兜底
  const active = theirRoleAttributes.filter(
    (item) => item.variableValue.hp > 0
  );
  const r = Math.floor(Math.random() * active.length);
  return [
    {
      targetId: active[r].id,
      result: physicalAttack(self, active[r]),
    },
  ];
}

// 二 单体技能
//
