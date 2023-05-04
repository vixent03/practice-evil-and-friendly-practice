const Dragon = require("./dragon")

class FriendlyDragon extends Dragon {
    constructor(name, color, LifeGoals, friend) {
        super(name, color)
        this.LifeGoals = LifeGoals
        this.friend = friend
    }
    hasLifeGoals() {
        let name = this.name
        return this.LifeGoals.forEach(function(ele) {
            console.log(`${name} likes to ${ele}`)
        });
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}



module.exports = FriendlyDragon