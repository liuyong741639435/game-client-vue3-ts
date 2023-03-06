// 处于触发战斗,还是被触发.
export enum WarState {
  initiative, // 主动
  passive, // 被动
}

export interface CharacterAttribute {
  name: string;
  id: string;
  teamId: 1 | 2 | 3 | 4 | 5; // 队伍中占位编号
  warState: WarState;
  hp: number;
  mp: number;
  damageValue: number; // shanghaizhi
  defenseValue: number; // fangyuzhi
  speedValue: number; // suduzhi
  variableValue: VariableValue; // 变化的值
}

// 会变化的值
export interface VariableValue {
  hp: number;
  mp: number;
  damageValue: number; // shanghaizhi
  defenseValue: number; // fangyuzhi
  speedValue: number; // suduzhi
}

// 操作优先级状态
export enum OperateState {
  random = 0, // 随机
  lock = 1, // 锁定某人
  // todo： 后续要有优先残血，优先高速等等各种情况，为了让npc有不同的优先级
}
