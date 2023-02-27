import { CharacterAttribute } from "../type";

const left: CharacterAttribute[] = [
  {
    name: "name1",
    id: "1",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name2",
    id: "2",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name3",
    id: "3",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name4",
    id: "4",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name5",
    id: "5",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
];

const right: CharacterAttribute[] = [
  {
    name: "name1r",
    id: "1r",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name2r",
    id: "2r",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name3r",
    id: "3r",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name4r",
    id: "4r",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
  {
    name: "name5r",
    id: "5r",
    hp: 100,
    mp: 100,
    damageValue: 10,
    defenseValue: 2,
    speedValue: 10,
    variableValue: {
      hp: 100,
      mp: 100,
      damageValue: 10,
      defenseValue: 2,
      speedValue: 10,
    },
  },
];

console.log(left, right);
// 1加载对战双方
// 2限时等待用户输入指令
// 3根据速度排序操作顺序
// 4开始战斗 每次行动之后判断双方是否都有存货用户  或者每次死亡-1
// 2-5往复循环

const testConfig = {
  // 等待时间
  waiting: 3000,
  a: setTimeout(() => {}, 10),
};

class Test {
  left: CharacterAttribute[] = [];
  right: CharacterAttribute[] = [];
  // 强制开始时间
  instructTimer?: number;
  constructor(left: CharacterAttribute[], right: CharacterAttribute[]) {
    this.left = left;
    this.right = right;
    this.waitingForInstructions();
  }
  //   等待指令

  waitingForInstructions() {
    // 给用户发信息，通知输入指令
    this.instructTimer = setTimeout(() => {
      this.run();
    }, testConfig.waiting);
  }
  //   开始战斗
  run() {}
  // 找出当前操作
  // 外部调用的方法
}

const t = new Test(left, right);
