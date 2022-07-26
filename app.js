

let clickUpgrades = {
    zoomies: {
        price: 1,
        quantity: 0,
        multiplier: 1
    },
    Catnip: {
        price: 5,
        quantity: 0,
        multiplier: 5
    }
};

let passiveUpgrades = {
    mouseTrap: {
        price: 50,
        quantity: 0,
        multiplier: 20
    },
    catFriend: {
        price: 100,
        quantity: 0,
        multiplier: 100
    }
}

// console.log(clickUpgrades.zoomies.price);



let mice = 0
let snd = new Audio("mixkit-arcade-game-jump-coin-216");


drawMice()


function catchMice() {
    mice++

    console.log('caught mouse!', mice);
    for (let key in clickUpgrades) {
        let click = clickUpgrades[key]
        console.log(click);
        mice += click.multiplier * click.quantity

    }
    drawMice()

}




//#region 
function drawMouseTQuantity() {

    let template = ''

    template += ` <span>Mouse Trap Quantity ${passiveUpgrades.mouseTrap.quantity}</span>`
    let quaElm = document.getElementById('qua-stats')
    quaElm.innerHTML = template
}
function drawCatFQuantity() {

    let template = ''

    template += ` <span>Cat Friend Quantity ${passiveUpgrades.catFriend.quantity}</span>`
    let quaElm = document.getElementById('c-stats')
    quaElm.innerHTML = template
}

function drawZQuantity() {

    let template = ''

    template += ` <span>Zoomies Quantity ${clickUpgrades.zoomies.quantity}</span>`
    let quaElm = document.getElementById('Z-stats')
    quaElm.innerHTML = template
}

function drawCNQuantity() {

    let template = ''

    template += ` <span>Catnip Quantity ${clickUpgrades.Catnip.quantity}</span>`
    let quaElm = document.getElementById('CN-stats')
    quaElm.innerHTML = template
}

function drawMouseTMult() {

    let template = ''

    template += ` <span>Passive Upgrades ${passiveUpgrades.quantity}</span>`
    let quaElm = document.getElementById('qua-stats')
    quaElm.innerHTML = template
}
function drawCatFMult() {

    let template = ''

    template += ` <span>Cat Friend Quantity ${passiveUpgrades.catFriend.quantity}</span>`
    let quaElm = document.getElementById('c-stats')
    quaElm.innerHTML = template
}

function drawZMult() {

    let template = ''

    template += ` <span>Zoomies Quantity ${clickUpgrades.zoomies.quantity}</span>`
    let quaElm = document.getElementById('Z-stats')
    quaElm.innerHTML = template
}

function drawCNMult() {

    let template = ''

    template += ` <span>Catnip Quantity ${clickUpgrades.Catnip.quantity}</span>`
    let quaElm = document.getElementById('CN-stats')
    quaElm.innerHTML = template
}
//#endregion

drawCNQuantity()
drawZQuantity()
drawCatFQuantity()
drawMouseTQuantity()

function catchPassive() {



    for (let key in passiveUpgrades) {
        let passive = passiveUpgrades[key]
        console.log(passive);
        mice += passive.multiplier * passive.quantity
    }
    drawMice()

}



function drawMice() {

    let miceElm = document.getElementById('mice-stats')
    miceElm.innerHTML = `<h5 class="text-center">mice caught ${mice}</h5>`
    console.log();



}





drawPassiveUpgrades()
function drawClickUpgrades() {

    let template = ''

    for (let key in clickUpgrades) {
        let upgrade = clickUpgrades[key]
        console.log('drawing', key, upgrade);
        template += `<h5 onclick="buyUpgrades('${key}')" class="text-center">${key}: ${upgrade.price}</h5>`
    }
    let zoomiesElm = document.getElementById('item-stats')
    zoomiesElm.innerHTML = template
    console.log('ur zoomin');

}

function drawPassiveUpgrades() {

    let template = ''
    for (let key in passiveUpgrades) {
        let upgrade = passiveUpgrades[key]
        console.log('drawing', key, upgrade);
        template += `<h5 onclick="buyPassiveUpgrades('${key}')" class="text-center">${key}: ${upgrade.price}</h5>`
    }

    let pElm = document.getElementById('p-items')
    pElm.innerHTML = template
    console.log(`it's a trap!`);

}

function drawClickPower() {
    // NOTE building a number up that represents how much click power i have, not actually adding it to my resources
    let resource = 0
    for (let key in clickUpgrades) {
        let click = clickUpgrades[key]
        console.log(click);
        resource += click.multiplier * click.quantity


        let template = ''

        template += ` <span>Click Power : ${resource}</span>`
        let quaElm = document.getElementById('MT-total')
        quaElm.innerHTML = template
    }
    console.warn('you will ge this when you click', resource)
}


drawPassiveUpgrades()
drawClickUpgrades()

function drawPassivePower() {
    let resource = 0
    for (let key in passiveUpgrades) {
        let click = passiveUpgrades[key]
        console.log(click);
        resource += click.multiplier * click.quantity
        let template = ''

        template += ` <span>Passive Power : ${resource}</span>`
        let quaElm = document.getElementById('CF-total')
        quaElm.innerHTML = template

        console.warn(resource);
    }

}

function buyUpgrades(key) {
    upgrade = clickUpgrades[key]
    console.log(upgrade, 'this is my upgrade');

    // let template = ''
    // for (let key in clickUpgrades) {
    //     let upgrade = clickUpgrades[key]

    if (mice >= upgrade.price) {
        upgrade.quantity++
        mice -= upgrade.price
        console.log(upgrade, 'just bought this');
        upgrade.price *= 2
    }
    // if (clickUpgrades.Catnip.quantity > 1) {


    //     drawCNTotal()
    // }
    drawMice()
    drawClickUpgrades()
    drawCNQuantity()
    drawZQuantity()
    drawCatFQuantity()
    drawMouseTQuantity()
    drawClickPower()
}


//#region 

// let zoomiesMult = 0
// let catnipMult = 0
// let MouseTMult = 0
// let CatFriendMult = 0
// drawZTotal()
// drawCNTotal()
// drawMTTotal()


// function drawZTotal() {


//     let miceElm = document.getElementById('Z-total')
//     miceElm.innerHTML = ` <span>Zoomies Multiplier: + ${zoomiesMult}</span>`
//     console.log();

// }
// function drawCNTotal() {
//     let miceElm = document.getElementById('CN-total')
//     miceElm.innerHTML = ` <span>Catnip Multiplier: + ${catnipMult}</span>`
//     console.log();

// }
// function drawMTTotal() {
//     let miceElm = document.getElementById('MT-total')
//     miceElm.innerHTML = ` <span>Mouse Trap Multiplier: + ${MouseTMult}</span>`
//     console.log();


// }

// function drawCFTotal() {
//     let miceElm = document.getElementById('CF-total')
//     miceElm.innerHTML = ` <span>Cat Friend Multiplier: + ${CatFriendMult}</span>`
//     console.log();

// }

// function zoomiesTotal() {
//     zoomiesMult++

//     for (let key in clickUpgrades) {
//         let click = clickUpgrades[key]
//         console.log(click);
//         zoomiesMult += click.multiplier * click.quantity

//     }
// }



//#endregion

function buyPassiveUpgrades(key) {
    upgrade = passiveUpgrades[key]

    if (mice >= upgrade.price) {
        upgrade.quantity++
        mice -= upgrade.price
        console.log(upgrade);
        upgrade.price *= 2

        if (buyPassiveUpgrades) {

            setInterval(catchPassive, 3000)
            drawPassivePower()

        }


    }





    drawMice()
    drawPassiveUpgrades()
    drawCNQuantity()
    drawZQuantity()
    drawCatFQuantity()
    drawMouseTQuantity()

}






