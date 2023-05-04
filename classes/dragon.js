class Dragon {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    breathesFire() {
        return `${this.name} breathes fire everywhere! BURN!!!!`
    }
    static getDragons(...dragon) {
        let result = []
        dragon.map(dragon => {
            if (dragon instanceof Dragon) {
                result.push(dragon.name)
            }
        })
        return result
    }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Dragon;
} catch {
    module.exports = null;
}