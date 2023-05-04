const EvilDragon = require("./classes/evil-dragon")
const FriendlyDragon = require("./classes/friendly-dragon")
const Dragon = require('./classes/dragon')

const falkor = new FriendlyDragon('Falkor', 'white', [
        'save atreyu from swamp',
        'save atreyu from the nothing',
        'scare the loal bullies into a dumpster'
    ],
    'bastain')


const smaug = new EvilDragon('smaug', 'black', [
    'take over your mountain kingdom',
    'steal all your gold',
    'burn down your floating village'
], 'dwarf king')

let alldragon = Dragon.getDragons(falkor, smaug)

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports.falkor = falkor
    module.exports.smaug = smaug
} catch {
    module.exports = null;
}
