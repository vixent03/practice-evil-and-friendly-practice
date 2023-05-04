const Dragon = require("./dragon")

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color)
        this.evilDoings = evilDoings
        this.nemesis = nemesis
    }

    dontInviteThemOverForDinner() {
        let name = this.name
        return this.evilDoings.forEach(function(ele) {
            console.log(`${name} will ${ele}`)
        });
    }

    burnsNemesis() {
        return `${this.name} will destroy ${this.nemesis} with fire  WHOOOSH!!!`
    }
}




module.exports = EvilDragon