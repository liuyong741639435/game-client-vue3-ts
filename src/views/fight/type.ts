export interface CharacterAttribute {
  name: string;
  id: string;
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
