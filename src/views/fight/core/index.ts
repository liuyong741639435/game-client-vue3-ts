import { CharacterAttribute, OperateState, WarState } from "../type";
import { normalAttack } from "./combatOperation";
import { getSpeedMax } from "./tools";

const left: CharacterAttribute[] = [
    {
        name: "name1",
        id: "1",
        teamId: 1,
        warState: WarState.initiative,
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
            speedValue: 1,
        },
    },
    {
        name: "name2",
        id: "2",
        teamId: 2,
        warState: WarState.initiative,
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
        teamId: 3,
        warState: WarState.initiative,
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
        teamId: 4,
        warState: WarState.initiative,
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
        teamId: 5,
        warState: WarState.initiative,
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
        teamId: 1,
        warState: WarState.passive,
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
            speedValue: 100,
        },
    },
    {
        name: "name2r",
        id: "2r",
        teamId: 2,
        warState: WarState.passive,
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
        teamId: 3,
        warState: WarState.passive,
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
        teamId: 4,
        warState: WarState.passive,
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
        teamId: 5,
        warState: WarState.passive,
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

// console.log(left, right);
// 1加载对战双方
// 2限时等待用户输入指令
// 3根据速度排序操作顺序
// 4开始战斗 每次行动之后判断双方是否都有存货用户  或者每次死亡-1
// 2-5往复循环

const testConfig = {
    // 等待时间
    waiting: 3000,
    a: setTimeout(() => { }, 10),
};

export class Test {
    fightObj: Record<WarState, CharacterAttribute[]>;
    // 强制开始时间
    instructTimer?: number;
    constructor(fightObj: Record<WarState, CharacterAttribute[]>) {
        this.fightObj = fightObj;
        this.waitingForInstructions();
    }
    //   等待指令

    waitingForInstructions() {
        // 给用户发信息，通知输入指令
        this.instructTimer = setTimeout(() => {
            this.run();
        }, testConfig.waiting);
    }
    //
    getFight(warState: WarState) {
        return {
            we: this.fightObj[warState],
            the: this.fightObj[
                warState === WarState.initiative
                    ? WarState.passive
                    : WarState.initiative
            ],
        };
    }
    //   开始战斗
    run() {
        console.time('test')
        const queue = [
            ...this.fightObj[WarState.initiative],
            ...this.fightObj[WarState.passive],
        ];
        while (true) {
            // 1 找出速度最快的
            const self = getSpeedMax(queue);
            // 2 判断操作 todo: 现在默认调用普通估计
            // 2-1 当前对象是否可以行动
            if (self.data.variableValue.hp > 0) {
                const fight = this.getFight(self.data.warState)
                // todo: P1 这里后续需要一个函数,去处理不通操作.不可能一个方法去调用匹配
                const res = normalAttack({
                    state: OperateState.random
                },
                    self.data,
                    fight.we,
                    fight.the
                )
                console.log(`用户(${self.data.id})攻击了用户(${res[0].targetId}), 造成了${res[0].result}HP减少`)
            }
            // 3 移除队列中
            queue.splice(self.index, 1)
            // 4 判断是否是否中断后续战斗
            // 4-1 当前用户是否全部死亡等,导致战斗结束 todo 最好一开始标记双方存活人数,然后去加减.当一方为0.则结束
            // 4-2 是否还有待行动用户,有循环1-4
            if (queue.length === 0) break
            // 4-2 当4-1不满足时, 当前循环完毕,调用waitingForInstructions,重新下一回合
        }
        // console.timeEnd('test') // todo保留着,后续代码复杂,需要判断全部操作需要多长时间
        this.waitingForInstructions()
    }
    // 找出当前操作
    // 外部调用的方法
}

const t = new Test({
    [WarState.initiative]: left,
    [WarState.passive]: right,
});
console.log(t);
