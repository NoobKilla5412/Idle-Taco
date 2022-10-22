// Big Numbers:
const oneMillion = 10 ** 6
const oneBillion = 10 ** 9
const oneTrillion = 10 ** 12
const oneQuadrillion = 10 ** 15
const oneQuintillion = 10 ** 18
const oneSextillion = 10 ** 21
const oneSeptillion = 10 ** 24
const oneOctillion = 10 ** 27
const oneNonillion = 10 ** 30
const oneDecillion = 10 ** 33
const oneUndecillion = 10 ** 36
const oneDuodecillion = 10 ** 39
const oneTredecillion = 10 ** 42
const oneQuattuordecillion = 10 ** 45
const oneQuindecillion = 10 ** 48
const oneSexdecillion = 10 ** 51
const oneSeptendecillion = 10 ** 54
const oneOctodecillion = 10 ** 57
const oneNovemdecillion = 10 ** 60
const oneVigintillion = 10 ** 63
const oneUnvigintillion = 10 ** 66
const oneDuovigintillion = 10 ** 69
const oneTresvigintillion = 10 ** 72
const oneQuattuorvigintillion = 10 ** 75
const oneQuinvigintillion = 10 ** 78
const oneSesvigintillion = 10 ** 81
const oneSeptenvigintillion = 10 ** 84
const oneOctovigintillion = 10 ** 87
const oneNovemvigintillion = 10 ** 90
const oneTrigintillion = 10 ** 93
const oneALOT = 10 ** 96

function toValues(upgradeCost) {
  if (upgradeCost >= oneALOT) {
    return Math.round(100 * (upgradeCost / oneALOT)) / 100 + 'A LOT'
  } else if (upgradeCost >= oneTrigintillion) {
    return Math.round(100 * (upgradeCost / oneTrigintillion)) / 100 + 'TG'
  } else if (upgradeCost >= oneNovemvigintillion) {
    return Math.round(100 * (upgradeCost / oneNovemvigintillion)) / 100 + 'NV'
  } else if (upgradeCost >= oneOctovigintillion) {
    return Math.round(100 * (upgradeCost / oneOctovigintillion)) / 100 + 'OV'
  } else if (upgradeCost >= oneSeptenvigintillion) {
    return Math.round(100 * (upgradeCost / oneSeptenvigintillion)) / 100 + 'SV'
  } else if (upgradeCost >= oneSesvigintillion) {
    return Math.round(100 * (upgradeCost / oneSesvigintillion)) / 100 + 'sV'
  } else if (upgradeCost >= oneQuinvigintillion) {
    return Math.round(100 * (upgradeCost / oneQuinvigintillion)) / 100 + 'QV'
  } else if (upgradeCost >= oneQuattuorvigintillion) {
    return Math.round(100 * (upgradeCost / oneQuattuorvigintillion)) / 100 + 'qV'
  } else if (upgradeCost >= oneTresvigintillion) {
    return Math.round(100 * (upgradeCost / oneTresvigintillion)) / 100 + 'tV'
  } else if (upgradeCost >= oneDuovigintillion) {
    return Math.round(100 * (upgradeCost / oneDuovigintillion)) / 100 + 'dV'
  } else if (upgradeCost >= oneUnvigintillion) {
    return Math.round(100 * (upgradeCost / oneUnvigintillion)) / 100 + 'uV'
  } else if (upgradeCost >= oneVigintillion) {
    return Math.round(100 * (upgradeCost / oneVigintillion)) / 100 + 'V'
  } else if (upgradeCost >= oneNovemdecillion) {
    return Math.round(100 * (upgradeCost / oneNovemdecillion)) / 100 + 'Nd'
  } else if (upgradeCost >= oneOctodecillion) {
    return Math.round(100 * (upgradeCost / oneOctodecillion)) / 100 + 'Od'
  } else if (upgradeCost >= oneSeptendecillion) {
    return Math.round(100 * (upgradeCost / oneSeptendecillion)) / 100 + 'Sd'
  } else if (upgradeCost >= oneSexdecillion) {
    return Math.round(100 * (upgradeCost / oneSexdecillion)) / 100 + 'sd'
  } else if (upgradeCost >= oneQuindecillion) {
    return Math.round(100 * (upgradeCost / oneQuindecillion)) / 100 + 'Qd'
  } else if (upgradeCost >= oneQuattuordecillion) {
    return Math.round(100 * (upgradeCost / oneQuattuordecillion)) / 100 + 'qd'
  } else if (upgradeCost >= oneTredecillion) {
    return Math.round(100 * (upgradeCost / oneTredecillion)) / 100 + 'Td'
  } else if (upgradeCost >= oneDuodecillion) {
    return Math.round(100 * (upgradeCost / oneDuodecillion)) / 100 + 'D'
  } else if (upgradeCost >= oneUndecillion) {
    return Math.round(100 * (upgradeCost / oneUndecillion)) / 100 + 'U'
  } else if (upgradeCost >= oneDecillion) {
    return Math.round(100 * (upgradeCost / oneDecillion)) / 100 + 'd'
  } else if (upgradeCost >= oneNonillion) {
    return Math.round(100 * (upgradeCost / oneNonillion)) / 100 + 'N'
  } else if (upgradeCost >= oneOctillion) {
    return Math.round(100 * (upgradeCost / oneOctillion)) / 100 + 'o'
  } else if (upgradeCost >= oneSeptillion) {
    return Math.round(100 * (upgradeCost / oneSeptillion)) / 100 + 'S'
  } else if (upgradeCost >= oneSextillion) {
    return Math.round(100 * (upgradeCost / oneSextillion)) / 100 + 's'
  } else if (upgradeCost >= oneQuintillion) {
    return Math.round(100 * (upgradeCost / oneQuintillion)) / 100 + 'Q'
  } else if (upgradeCost >= oneQuadrillion) {
    return Math.round(100 * (upgradeCost / oneQuadrillion)) / 100 + 'q'
  } else if (upgradeCost >= oneTrillion) {
    return Math.round(100 * (upgradeCost / oneTrillion)) / 100 + 'T'
  } else if (upgradeCost >= oneBillion) {
    return Math.round(100 * (upgradeCost / oneBillion)) / 100 + 'B'
  } else if (upgradeCost >= oneMillion) {
    return Math.round(100 * (upgradeCost / oneMillion)) / 100 + 'M'
  } else if (upgradeCost >= 1000) {
    return Math.round(100 * (upgradeCost / 1000)) / 100 + 'K'
  } else {
    return Math.round(100 * (upgradeCost)) / 100
  }
}
function toValuesExt(upgradeCost) {
  if (upgradeCost >= oneALOT) {
    return Math.round(100 * (upgradeCost / oneALOT)) / 100 + ' A LOT'
  } else if (upgradeCost >= oneTrigintillion) {
    return Math.round(100 * (upgradeCost / oneTrigintillion)) / 100 + ' Trigintillion'
  } else if (upgradeCost >= oneNovemvigintillion) {
    return Math.round(100 * (upgradeCost / oneNovemvigintillion)) / 100 + ' Novemvigintillion'
  } else if (upgradeCost >= oneOctovigintillion) {
    return Math.round(100 * (upgradeCost / oneOctovigintillion)) / 100 + ' Octovigintillion'
  } else if (upgradeCost >= oneSeptenvigintillion) {
    return Math.round(100 * (upgradeCost / oneSeptenvigintillion)) / 100 + ' Septenvigintillion'
  } else if (upgradeCost >= oneSesvigintillion) {
    return Math.round(100 * (upgradeCost / oneSesvigintillion)) / 100 + ' Sesvigintillion'
  } else if (upgradeCost >= oneQuinvigintillion) {
    return Math.round(100 * (upgradeCost / oneQuinvigintillion)) / 100 + ' Quinvigintillion'
  } else if (upgradeCost >= oneQuattuorvigintillion) {
    return Math.round(100 * (upgradeCost / oneQuattuorvigintillion)) / 100 + ' Quattuorvigintillion'
  } else if (upgradeCost >= oneTresvigintillion) {
    return Math.round(100 * (upgradeCost / oneTresvigintillion)) / 100 + ' Tresvigintillion'
  } else if (upgradeCost >= oneDuovigintillion) {
    return Math.round(100 * (upgradeCost / oneDuovigintillion)) / 100 + ' Duovigintillion'
  } else if (upgradeCost >= oneUnvigintillion) {
    return Math.round(100 * (upgradeCost / oneUnvigintillion)) / 100 + ' Unvigintillion'
  } else if (upgradeCost >= oneVigintillion) {
    return Math.round(100 * (upgradeCost / oneVigintillion)) / 100 + ' Vigintillion'
  } else if (upgradeCost >= oneNovemdecillion) {
    return Math.round(100 * (upgradeCost / oneNovemdecillion)) / 100 + ' Novemdecillion'
  } else if (upgradeCost >= oneOctodecillion) {
    return Math.round(100 * (upgradeCost / oneOctodecillion)) / 100 + ' Octodecillion'
  } else if (upgradeCost >= oneSeptendecillion) {
    return Math.round(100 * (upgradeCost / oneSeptendecillion)) / 100 + ' Septendecillion'
  } else if (upgradeCost >= oneSexdecillion) {
    return Math.round(100 * (upgradeCost / oneSexdecillion)) / 100 + ' Sexdecillion'
  } else if (upgradeCost >= oneQuindecillion) {
    return Math.round(100 * (upgradeCost / oneQuindecillion)) / 100 + ' Quindecillion'
  } else if (upgradeCost >= oneQuattuordecillion) {
    return Math.round(100 * (upgradeCost / oneQuattuordecillion)) / 100 + ' Quattuordecillion'
  } else if (upgradeCost >= oneTredecillion) {
    return Math.round(100 * (upgradeCost / oneTredecillion)) / 100 + ' Tredecillion'
  } else if (upgradeCost >= oneDuodecillion) {
    return Math.round(100 * (upgradeCost / oneDuodecillion)) / 100 + ' Duodecillion'
  } else if (upgradeCost >= oneUndecillion) {
    return Math.round(100 * (upgradeCost / oneUndecillion)) / 100 + ' Undecillion'
  } else if (upgradeCost >= oneDecillion) {
    return Math.round(100 * (upgradeCost / oneDecillion)) / 100 + ' Decillion'
  } else if (upgradeCost >= oneNonillion) {
    return Math.round(100 * (upgradeCost / oneNonillion)) / 100 + ' Nonillion'
  } else if (upgradeCost >= oneOctillion) {
    return Math.round(100 * (upgradeCost / oneOctillion)) / 100 + ' Octillion'
  } else if (upgradeCost >= oneSeptillion) {
    return Math.round(100 * (upgradeCost / oneSeptillion)) / 100 + ' Septillion'
  } else if (upgradeCost >= oneSextillion) {
    return Math.round(100 * (upgradeCost / oneSextillion)) / 100 + ' Sextillion'
  } else if (upgradeCost >= oneQuintillion) {
    return Math.round(100 * (upgradeCost / oneQuintillion)) / 100 + ' Quintillion'
  } else if (upgradeCost >= oneQuadrillion) {
    return Math.round(100 * (upgradeCost / oneQuadrillion)) / 100 + ' Quadrillion'
  } else if (upgradeCost >= oneTrillion) {
    return Math.round(100 * (upgradeCost / oneTrillion)) / 100 + ' Trillion'
  } else if (upgradeCost >= oneBillion) {
    return Math.round(100 * (upgradeCost / oneBillion)) / 100 + ' Billion'
  } else if (upgradeCost >= oneMillion) {
    return Math.round(100 * (upgradeCost / oneMillion)) / 100 + ' Million'
  } else if (upgradeCost >= 1000) {
    return Math.round(100 * (upgradeCost / 1000)) / 100 + ' Thousand'
  } else {
    return Math.round(100 * (upgradeCost)) / 100
  }
}

let multiplier = 15
let keys = []

let frameNo = 0
let clickTacoTimer = 0
let money = 0
let diamonds = 0
let moneyRate = 1
let displayMoneyRate = 100
let diamondRate = 0.005
let moneyValue = 0.05 //+ (cheese.total / 100) * (lettuce.total / 100) * (sourCream.total / 100) * meat.total * (tomatoes.total / 100)
let diamondValue = 0.0005
let evolveNum = 0
let moneyPerSecNextEvolve = 4000
let currentItems = []
let currentItemsStr = ''
const chests = [
  'Oven',
  'This is 1',
  'This is 2',
  'This is 3',
  'This is 4'
]
const items = {
  "oven": {
    // 0
    "name": "Oven",
    "effect": 2,
    "displayEffect": "2x Earnings"
  }
}




let clickSound = new Audio('click.wav')
let clickUpgrade = new Audio('upgradeClick.wav')


class Upgrade {
  constructor({ name, type, action = '+', max, cost, num, total, totalUp, costUp }) {
    this.name = name
    this.max = max
    this.cost = cost
    this.num = num
    this.total = total
    this.type = type
    this.action = action
    this.totalUp = totalUp
    this.costUp = costUp

    this.buttonElement = {
      onclick: this.name + 'upgrade()',
      id: name,
      class: 'upgrades',
    }
  }
  upgrade() {
    if (this.type == 'money') {
      switch (this.action) {
        case '+':
          if (money >= Math.floor(this.cost) && this.num != this.max) {
            money -= Math.floor(this.cost)
            this.cost *= this.costUp
            this.num++
            this.total += this.totalUp
            clickUpgrade.play()
          }
          break
        case '*':
          if (money >= Math.floor(this.cost) && this.num != this.max) {
            money -= Math.floor(this.cost)
            this.cost *= this.costUp
            this.num++
            this.total *= this.totalUp
            clickUpgrade.play()
          }
      }
    } else if (this.type == 'diamond') {
      switch (this.action) {
        case '+':
          if (diamonds >= Math.floor(this.cost) && this.num != this.max) {
            diamonds -= Math.floor(this.cost)
            this.cost *= this.costUp
            this.num++
            this.total += this.totalUp
            clickUpgrade.play()
          }
          break
        case '*':
          if (diamonds >= Math.floor(this.cost) && this.num != this.max) {
            diamonds -= Math.floor(this.cost)
            this.cost *= this.costUp
            this.num++
            this.total *= this.totalUp
            clickUpgrade.play()
          }
          break
      }
    }
  }
  color() {
    if (this.type == 'money') {
      if (money >= Math.floor(this.cost) && this.num != this.max) {
        document.getElementById(this.name).classList = 'green upgrades'
      } else {
        document.getElementById(this.name).classList = 'gray upgrades'
      }
    } else if (this.type == 'diamond') {
      if (diamonds >= Math.floor(this.cost) && this.num != this.max) {
        document.getElementById(this.name).classList = 'green upgrades'
      } else {
        document.getElementById(this.name).classList = 'gray upgrades'
      }
    }
  }
  message() {
    if (this.num != this.max) {
      document.getElementById(this.name).innerHTML = buttons[this.name]
    } else {
      document.getElementById(this.name).innerHTML = buttons[this.name + 'Max']
    }
  }
}



let cheese = new Upgrade({
  name: 'cheese',
  type: 'money',
  max: 10,
  cost: 20,
  num: 0,
  total: 0,
  totalUp: 10,
  costUp: 1.5
})
let lettuce = new Upgrade({
  name: 'lettuce',
  type: 'money',
  max: 30,
  cost: 30,
  num: 0,
  total: 0,
  totalUp: 15,
  costUp: 1.4
})
let sourCream = new Upgrade({
  name: 'sourCream',
  type: 'money',
  max: 50,
  cost: 10,
  num: 0,
  total: 0,
  totalUp: 1,
  costUp: 1.3
})
let meat = new Upgrade({
  name: 'meat',
  type: 'money',
  action: '*',
  max: 2,
  cost: 2500,
  num: 0,
  total: 1,
  totalUp: 2,
  costUp: 3
})
let tacoYumminess = new Upgrade({
  name: 'tacoYumminess',
  type: 'diamond',
  max: 100,
  cost: 1000,
  num: 0,
  total: 0,
  totalUp: 5,
  costUp: 1.3
})
let tomatoes = new Upgrade({
  name: 'tomatoes',
  type: 'diamond',
  max: 100,
  cost: 600,
  num: 0,
  total: 0,
  totalUp: 10,
  costUp: 1.3
})
let buttons = {
  'cheese': 'Cheese (1): Increase Size by 10% <span title="Size upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + toValues(cheese.cost) + '</b><br>Total: +' + cheese.total + '%<br>Level: ' + cheese.num + '/' + cheese.max,
  'cheeseMax': 'Cheese (1): Increase Size by 10%<br>✅<br>Total: +' + cheese.total + '%<br>Level: MAX',
  'lettuce': 'Lettuce (2): Increase Tastiness by 15% <span title="Tastiness upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + toValues(lettuce.cost) + '</b><br>Total: +' + lettuce.total + '%<br>Level: ' + lettuce.num + '/' + lettuce.max,
  'lettuceMax': 'Lettuce (2): Increase Tastiness by 15% <span title="Tastiness upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: +' + lettuce.total + '%<br>Level: MAX',
  'sourCream': 'Sour Cream (3): Increase Earnings by 1%<br><img src="money.png" height="12pt" /><b>' + toValues(sourCream.cost) + '</b><br>Total: +' + sourCream.total + '%<br>Level: ' + sourCream.num + '/' + sourCream.max,
  'sourCreamMax': 'Sour Cream (3): Increase Earnings by 1%<br>✅<br>Total: +' + sourCream.total + '%<br>Level: MAX',
  'meat': 'Taco Meat (4): Double Meat <span title="Meat upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + toValues(meat.cost) + '</b><br>Total: ' + meat.total + 'x<br>Level: ' + meat.num + '/' + meat.max,
  'meatMax': 'Taco Meat (4): Double Meat <span title="Meat upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: ' + meat.total + 'x<br>Level: MAX',
  'tacoYumminess': 'Taco Yumminess (N): Increase Diamond Speed by 5%<br>💎<b>' + toValues(tacoYumminess.cost) + '</b><br>Total: +' + tacoYumminess.total + '%<br>Level: ' + tacoYumminess.num + '/' + tacoYumminess.max,
  'tacoYumminessMax': 'Taco Yumminess: Increase Diamond Speed by 5%<br>✅<br>Total: +' + tacoYumminess.total + '%<br>Level: MAX',
  'tomatoes': 'Tomatoes (M): Increase Flavor by 10% <span title="Flavor upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>💎<b>' + toValues(tomatoes.cost) + '</b><br>Total: +' + tomatoes.total + '%<br>Level: ' + tomatoes.num + '/' + tomatoes.max,
  'tomatoesMax': 'Tomatoes: Increase Flavor by 10% <span title="Flavor upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: +' + tomatoes.total + '%<br>Level: MAX'
}

function resetValues() {
  cheese.cost *= multiplier
  cheese.num = 0
  cheese.total = 0
  lettuce.cost *= multiplier
  lettuce.num = 0
  lettuce.total = 0
  sourCream.cost *= multiplier
  sourCream.num = 0
  sourCream.total = 0
  meat.cost *= multiplier
  meat.num = 0
  meat.total = 1
}
resetValues()

function evolve() {
  if (evolveNum <= 100) {
    newEvolve()
  }
}
function newEvolve() {
  if (displayMoneyRate >= moneyPerSecNextEvolve) {
    multiplier = 15 * (2 ** evolveNum) * 2 * 2
    resetValues()
    moneyPerSecNextEvolve = 4000 + ((2 ** evolveNum * 5) * 1000 * 5)

    money = 0
    frameNo = 0

    evolveNum++
    clickSound.play()
    cheese.max += 5
    lettuce.max += 5
    sourCream.max += 5
    tacoYumminess.max += 2
    tomatoes.max += 2

  }
}
// let contents = ''
let upgrades = [cheese.name, lettuce.name, sourCream.name, meat.name]
let diamondUpgrades = [tacoYumminess.name, tomatoes.name]
upgrades.forEach((upgrade) => {
  document.getElementById('upgradeButtons').innerHTML += '<button onclick="' + upgrade + '.upgrade()" id="' + upgrade + '" class="upgrades"></button>'
})
diamondUpgrades.forEach((upgrade) => {
  document.getElementById('diamondUpgrades').innerHTML += '<button onclick="' + upgrade + '.upgrade()" id="' + upgrade + '" class="upgrades"></button>'
})
// for (let a = 0; a <= upgrades.length; a++) {
//   document.getElementById('upgradeButtons').innerHTML += '<button onclick="' + upgrades[a].name + '.upgrade()" id="' + upgrades[a].name + '" class="upgrades"'
// }
// document.getElementById('upgradeButtons').innerHTML = contents
function startGame() {

  document.getElementById('start').style.display = 'none'
  document.getElementById('load').style.display = 'none'
  document.getElementById('stats').style.display = 'block'
  document.getElementById('save').style.display = 'inline'
  document.getElementById('exit').style.display = 'inline'
  document.getElementById('evolveButton').style.display = 'inline'
  for (let i = 0; i < upgrades.length+diamondUpgrades.length; i++) {
    document.getElementsByClassName('upgrades')[i].style.display = 'inline'
  }
  setInterval(animate, 10)

  window.addEventListener('keydown', function (e) {
    keys = (keys || [])
    keys[e.keyCode] = true
  })
  window.addEventListener('keyup', function (e) {
    keys[e.keyCode] = false
  })

  console.log('Loaded')
}



function animate() {
  buttons = {
    'cheese': 'Cheese (1): Increase Size by 10% <span title="Size upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + toValues(cheese.cost) + '</b><br>Total: +' + cheese.total + '%<br>Level: ' + cheese.num + '/' + cheese.max,
    'cheeseMax': 'Cheese (1): Increase Size by 10%<br>✅<br>Total: +' + cheese.total + '%<br>Level: MAX',
    'lettuce': 'Lettuce (2): Increase Tastiness by 15% <span title="Tastiness upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + toValues(lettuce.cost) + '</b><br>Total: +' + lettuce.total + '%<br>Level: ' + lettuce.num + '/' + lettuce.max,
    'lettuceMax': 'Lettuce (2): Increase Tastiness by 15% <span title="Tastiness upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: +' + lettuce.total + '%<br>Level: MAX',
    'sourCream': 'Sour Cream (3): Increase Earnings by 1%<br><img src="money.png" height="12pt" /><b>' + toValues(sourCream.cost) + '</b><br>Total: +' + sourCream.total + '%<br>Level: ' + sourCream.num + '/' + sourCream.max,
    'sourCreamMax': 'Sour Cream (3): Increase Earnings by 1%<br>✅<br>Total: +' + sourCream.total + '%<br>Level: MAX',
    'meat': 'Taco Meat (4): Double Meat <span title="Meat upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + toValues(meat.cost) + '</b><br>Total: ' + meat.total + 'x<br>Level: ' + meat.num + '/' + meat.max,
    'meatMax': 'Taco Meat (4): Double Meat <span title="Meat upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: ' + meat.total + 'x<br>Level: MAX',
    'tacoYumminess': 'Taco Yumminess (N): Increase Diamond Speed by 5%<br>💎<b>' + toValues(tacoYumminess.cost) + '</b><br>Total: +' + tacoYumminess.total + '%<br>Level: ' + tacoYumminess.num + '/' + tacoYumminess.max,
    'tacoYumminessMax': 'Taco Yumminess: Increase Diamond Speed by 5%<br>✅<br>Total: +' + tacoYumminess.total + '%<br>Level: MAX',
    'tomatoes': 'Tomatoes (M): Increase Flavor by 10% <span title="Flavor upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>💎<b>' + toValues(tomatoes.cost) + '</b><br>Total: +' + tomatoes.total + '%<br>Level: ' + tomatoes.num + '/' + tomatoes.max,
    'tomatoesMax': 'Tomatoes: Increase Flavor by 10% <span title="Flavor upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: +' + tomatoes.total + '%<br>Level: MAX'
  }
  frameNo += 1
  if (clickTacoTimer != 0) {
    clickTacoTimer--
  }
  document.getElementById('clickTacoTimer').innerText = Math.round(clickTacoTimer / 100)

  if (displayMoneyRate >= moneyPerSecNextEvolve && evolveNum <= 100) {
    document.getElementById('evolveButton').classList = 'green'
  } else {
    document.getElementById('evolveButton').classList = 'gray'
  }
  if (evolveNum == 0) {
    moneyValue = (cheese.total / 100 + 1) * (lettuce.total / 100 + 1) * (sourCream.total / 100 + 1) * meat.total * (tomatoes.total / 100 + 1)
    diamondValue = (tacoYumminess.total / 100 + 1) - 0.7
  } else {
    moneyValue = (2 ** evolveNum) * (cheese.total / 100 + 1) * (lettuce.total / 100 + 1) * (sourCream.total / 100 + 1) * meat.total * (tomatoes.total / 100 + 1)
    diamondValue = (2 ** evolveNum) * (tacoYumminess.total / 100 + 1) - 0.7
  }

  cheese.color()
  lettuce.color()
  sourCream.color()
  meat.color()
  tacoYumminess.color()
  tomatoes.color()

  cheese.message()
  lettuce.message()
  sourCream.message()
  meat.message()
  tacoYumminess.message()
  tomatoes.message()

  document.getElementById('money').innerHTML = '<img src="money.png" height="12pt" />: <b class="large-money">' + toValuesExt(money) + '</b>'

  displayMoneyRate = Math.round(10 * (10000 * moneyValue)) / 1000

  document.getElementById('moneyPerSec').innerHTML = '<img src="money.png" height="12pt" />/sec: <b>' + toValues(displayMoneyRate) + '/' + toValues(moneyPerSecNextEvolve) + '</b>'



  document.getElementById('diamonds').innerHTML = '💎: <b>' + toValues(diamonds) + '</b>'


  document.getElementById('evolve').innerHTML = 'Evolve: <b>' + toValues(evolveNum) + '</b>'

  if (everyInterval(moneyRate)) {
    money += moneyValue
  }
  if (everyInterval(diamondRate)) {
    diamonds += diamondValue
  }

  if (keys && keys[49]) {
    cheese.upgrade()
  }
  if (keys && keys[50]) {
    lettuce.upgrade()
  }
  if (keys && keys[51]) {
    sourCream.upgrade()
  }
  if (keys && keys[52]) {
    meat.upgrade()
  }
  if (keys && keys[78]) {
    tacoYumminess.upgrade()
  }
  if (keys && keys[77]) {
    tomatoes.upgrade()
  }
  if (keys && keys[69]) {
    evolve()
  }

  // document.getElementById('items').innerHTML = '<h1>Items:</h1>' + items.oven.name
}
function everyInterval(n) {
  if ((frameNo / n) % 1 == 0) { return true }
  return false
}
let creditsActive = false
function credits() {
  if (!creditsActive) {
    document.getElementById('credits').style.display = 'block'
    creditsActive = true
  } else if (creditsActive) {
    document.getElementById('credits').style.display = 'none'
    creditsActive = false
  }
}
let infoActive = false
function info() {
  if (!infoActive) {
    document.getElementById('info').style.display = 'block'
    infoActive = true
  } else if (infoActive) {
    document.getElementById('info').style.display = 'none'
    infoActive = false
  }
}

function clickTaco() {
  if (clickTacoTimer == 0) {
    money += (Math.round(10000 * moneyValue) / 100) * 5
    clickTacoTimer = 500
    clickSound.play()
  }
}
function autoSave() {
  localStorage.setItem('money', money)
  localStorage.setItem('diamonds', diamonds)

  // Cheese:
  localStorage.setItem('cheese.cost', cheese.cost)
  localStorage.setItem('cheese.num', cheese.num)
  localStorage.setItem('cheese.total', cheese.total)
  // Lettuce:
  localStorage.setItem('lettuce.cost', lettuce.cost)
  localStorage.setItem('lettuce.num', lettuce.num)
  localStorage.setItem('lettuce.total', lettuce.total)
  // Sour Cream:
  localStorage.setItem('sourCream.cost', sourCream.cost)
  localStorage.setItem('sourCream.num', sourCream.num)
  localStorage.setItem('sourCream.total', sourCream.total)
  // Meat:
  localStorage.setItem('meat.cost', meat.cost)
  localStorage.setItem('meat.num', meat.num)
  localStorage.setItem('meat.total', meat.total)
  // Taco Yumminess:
  localStorage.setItem('tacoYumminess.cost', tacoYumminess.cost)
  localStorage.setItem('tacoYumminess.num', tacoYumminess.num)
  localStorage.setItem('tacoYumminess.total', tacoYumminess.total)
  // Tomatoes:
  localStorage.setItem('tomatoes.cost', tomatoes.cost)
  localStorage.setItem('tomatoes.num', tomatoes.num)
  localStorage.setItem('tomatoes.total', tomatoes.total)
  // Evolve:
  localStorage.setItem('evolveNum', evolveNum)
  localStorage.setItem('multiplier', multiplier)
  localStorage.setItem('moneyPerSecNextEvolve', moneyPerSecNextEvolve)
  // Misc.:
  localStorage.setItem('clickTacoTimer', clickTacoTimer)
  // localStorage.setItem('currentItems', currentItems)

  localStorage.setItem('cheese.max', cheese.max)
  localStorage.setItem('lettuce.max', lettuce.max)
  localStorage.setItem('sourCream.max', sourCream.max)
  localStorage.setItem('meat.max', meat.max)
  localStorage.setItem('tacoYumminess.max', tacoYumminess.max)
  localStorage.setItem('tomatoes.max', tomatoes.max)

  console.log('Saved')
}
function save() {
  localStorage.setItem('money', money)
  localStorage.setItem('diamonds', diamonds)

  // Cheese:
  localStorage.setItem('cheese.cost', cheese.cost)
  localStorage.setItem('cheese.num', cheese.num)
  localStorage.setItem('cheese.total', cheese.total)
  // Lettuce:
  localStorage.setItem('lettuce.cost', lettuce.cost)
  localStorage.setItem('lettuce.num', lettuce.num)
  localStorage.setItem('lettuce.total', lettuce.total)
  // Sour Cream:
  localStorage.setItem('sourCream.cost', sourCream.cost)
  localStorage.setItem('sourCream.num', sourCream.num)
  localStorage.setItem('sourCream.total', sourCream.total)
  // Meat:
  localStorage.setItem('meat.cost', meat.cost)
  localStorage.setItem('meat.num', meat.num)
  localStorage.setItem('meat.total', meat.total)
  // Taco Yumminess:
  localStorage.setItem('tacoYumminess.cost', tacoYumminess.cost)
  localStorage.setItem('tacoYumminess.num', tacoYumminess.num)
  localStorage.setItem('tacoYumminess.total', tacoYumminess.total)
  // Tomatoes:
  localStorage.setItem('tomatoes.cost', tomatoes.cost)
  localStorage.setItem('tomatoes.num', tomatoes.num)
  localStorage.setItem('tomatoes.total', tomatoes.total)
  // Evolve:
  localStorage.setItem('evolveNum', evolveNum)
  localStorage.setItem('multiplier', multiplier)
  localStorage.setItem('moneyPerSecNextEvolve', moneyPerSecNextEvolve)
  // Misc.:
  localStorage.setItem('clickTacoTimer', clickTacoTimer)
  // localStorage.setItem('currentItems', currentItems)

  localStorage.setItem('cheese.max', cheese.max)
  localStorage.setItem('lettuce.max', lettuce.max)
  localStorage.setItem('sourCream.max', sourCream.max)
  localStorage.setItem('meat.max', meat.max)
  localStorage.setItem('tacoYumminess.max', tacoYumminess.max)
  localStorage.setItem('tomatoes.max', tomatoes.max)

  clickSound.play()
  console.log('Saved')
}
function load() {
  money = parseFloat(localStorage.getItem('money'))
  diamonds = parseFloat(localStorage.getItem('diamonds'))

  // Cheese:
  cheese.cost = parseFloat(localStorage.getItem('cheese.cost'))
  cheese.num = parseFloat(localStorage.getItem('cheese.num'))
  cheese.total = parseFloat(localStorage.getItem('cheese.total'))
  // Lettuce:
  lettuce.cost = parseFloat(localStorage.getItem('lettuce.cost'))
  lettuce.num = parseFloat(localStorage.getItem('lettuce.num'))
  lettuce.total = parseFloat(localStorage.getItem('lettuce.total'))
  // Sour Cream:
  sourCream.cost = parseFloat(localStorage.getItem('sourCream.cost'))
  sourCream.num = parseFloat(localStorage.getItem('sourCream.num'))
  sourCream.total = parseFloat(localStorage.getItem('sourCream.total'))
  // Meat:
  meat.cost = parseFloat(localStorage.getItem('meat.cost'))
  meat.num = parseFloat(localStorage.getItem('meat.num'))
  meat.total = parseFloat(localStorage.getItem('meat.total'))
  // Taco Yumminess:
  tacoYumminess.cost = parseFloat(localStorage.getItem('tacoYumminess.cost'))
  tacoYumminess.num = parseFloat(localStorage.getItem('tacoYumminess.num'))
  tacoYumminess.total = parseFloat(localStorage.getItem('tacoYumminess.total'))
  // Tomatoes:
  tomatoes.cost = parseFloat(localStorage.getItem('tomatoes.cost'))
  tomatoes.num = parseFloat(localStorage.getItem('tomatoes.num'))
  tomatoes.total = parseFloat(localStorage.getItem('tomatoes.total'))
  // Evolve:
  evolveNum = parseFloat(localStorage.getItem('evolveNum'))
  multiplier = parseFloat(localStorage.getItem('multiplier'))
  moneyPerSecNextEvolve = parseFloat(localStorage.getItem('moneyPerSecNextEvolve'))
  // Misc.:
  clickTacoTimer = parseFloat(localStorage.getItem('clickTacoTimer'))
  // currentItemsStr = localStorage.getItem('currentItems')
  // currentItems = currentItemsStr.split(',')

  cheese.max = parseFloat(localStorage.getItem('cheese.max', cheese.max))
  lettuce.max = parseFloat(localStorage.getItem('lettuce.max', lettuce.max))
  sourCream.max = parseFloat(localStorage.getItem('sourCream.max', sourCream.max))
  meat.max = parseFloat(localStorage.getItem('meat.max', meat.max))
  tacoYumminess.max = parseFloat(localStorage.getItem('tacoYumminess.max', tacoYumminess.max))
  tomatoes.max = parseFloat(localStorage.getItem('tomatoes.max', tomatoes.max))

  clickSound.play()
  document.getElementById('load').style.display = 'none'
  startGame()
}


function openChest() {
  clickSound.play()
  document.getElementById('chestScreen').style.display = 'block'
  document.getElementById('chestScreen').innerHTML = chests[(Math.floor(Math.random() * (5 - 0)) + 0)] + `<span onclick="document.getElementById('chestScreen').style.display = 'none'" id="closeChestScreen">X&nbsp</span>`
}
function diamondToMoney() {
  if (diamonds * .1 >= 0) {
    diamonds -= diamonds * .1
    money += (diamonds * .1) * 5
  }
}
function idle() {
  meat()
  lettuce.upgrade()
  cheese.upgrade()
  sourCream.upgrade()
  tomatoes.upgrade()
  tacoYumminess.upgrade()
  evolve()
  clickTaco()
  // diamondToMoney()
}
function idleToggle() {
  setInterval(idle)
}
setInterval(autoSave, 5000)