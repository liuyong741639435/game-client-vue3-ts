import { CharacterAttribute } from "../type";

export function getSpeedMax(data: CharacterAttribute[]) {
    let i = 0;
    const res = data.reduce(function (pre, curr, index) {
        // 给个0.9-1.1的速度波动.正态分布,维持原值的可能性最高,最大最小值都是最小概率
        const currSpeed = curr.variableValue.speedValue * (1 + getNumberInNormalDistribution(0.1))
        const preSpeed = pre.variableValue.speedValue * (1 + getNumberInNormalDistribution(0.1))
        if (currSpeed > preSpeed) {
            i = index
            return curr
        } else {
            return pre
        }
    });
    return {
        data: res,
        index: i
    }
}

// 获得一个正态分布的随机数. 入参3个, 浮动范围原点为0.截取部位(1大于参考数的部分;-1小于参考数的部分,0,完整的正态分别;)
export function getNumberInNormalDistribution(scope: number, type: 1 | -1 | 0 = 0) {
    function func() {
        let u = 0, v = 0, w = 0, c = 0;
        do {
            u = Math.random() * 2 - 1
            v = Math.random() * 2 - 1
            w = u * u + v * v;
        } while (w === 0 || w >= 1)

        c = Math.sqrt((-2 * Math.log(w)) / w)
        return u * c * scope
    }
    // todo: 不了解正态分布算法,所以不敢在内部调整
    switch (type) {
        case 0:
            return func()
        case 1:
            while (true) {
                const res = func()
                if (res >= 0) return res
            }
        case -1:
            while (true) {
                const res = func()
                if (res <= 0) return res
            }
    }
}
