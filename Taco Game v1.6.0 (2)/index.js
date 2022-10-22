function capitalizeFirstLetter(a) {
  return a.charAt(0).toUpperCase() + a.slice(1)
}
const oneMillion = 10 ** 6;
const oneBillion = 10 ** 9;
const oneTrillion = 10 ** 12;
const oneQuadrillion = 10 ** 15;
const oneQuintillion = 10 ** 18;
const oneSextillion = 10 ** 21;
const oneSeptillion = 10 ** 24;
const oneOctillion = 10 ** 27;
const oneNonillion = 10 ** 30;
const oneDecillion = 10 ** 33;
const oneUndecillion = 10 ** 36;
const oneDuodecillion = 10 ** 39;
const oneTredecillion = 10 ** 42;
const oneQuattuordecillion = 10 ** 45;
const oneQuindecillion = 10 ** 48;
const oneSexdecillion = 10 ** 51;
const oneSeptendecillion = 10 ** 54;
const oneOctodecillion = 10 ** 57;
const oneNovemdecillion = 10 ** 60;
const oneVigintillion = 10 ** 63;
const oneUnvigintillion = 10 ** 66;
const oneDuovigintillion = 10 ** 69;
const oneTresvigintillion = 10 ** 72;
const oneQuattuorvigintillion = 10 ** 75;
const oneQuinvigintillion = 10 ** 78;
const oneSesvigintillion = 10 ** 81;
const oneSeptenvigintillion = 10 ** 84;
const oneOctovigintillion = 10 ** 87;
const oneNovemvigintillion = 10 ** 90;
const oneTrigintillion = 10 ** 93;
const oneALOT = 10 ** 96;

function a(b) {
  if (b >= oneALOT) {
    return Math.round(100 * (b / oneALOT)) / 100 + 'A LOT'
  } else if (b >= oneTrigintillion) {
    return Math.round(100 * (b / oneTrigintillion)) / 100 + 'TG'
  } else if (b >= oneNovemvigintillion) {
    return Math.round(100 * (b / oneNovemvigintillion)) / 100 + 'NV'
  } else if (b >= oneOctovigintillion) {
    return Math.round(100 * (b / oneOctovigintillion)) / 100 + 'OV'
  } else if (b >= oneSeptenvigintillion) {
    return Math.round(100 * (b / oneSeptenvigintillion)) / 100 + 'SV'
  } else if (b >= oneSesvigintillion) {
    return Math.round(100 * (b / oneSesvigintillion)) / 100 + 'sV'
  } else if (b >= oneQuinvigintillion) {
    return Math.round(100 * (b / oneQuinvigintillion)) / 100 + 'QV'
  } else if (b >= oneQuattuorvigintillion) {
    return Math.round(100 * (b / oneQuattuorvigintillion)) / 100 + 'qV'
  } else if (b >= oneTresvigintillion) {
    return Math.round(100 * (b / oneTresvigintillion)) / 100 + 'tV'
  } else if (b >= oneDuovigintillion) {
    return Math.round(100 * (b / oneDuovigintillion)) / 100 + 'dV'
  } else if (b >= oneUnvigintillion) {
    return Math.round(100 * (b / oneUnvigintillion)) / 100 + 'uV'
  } else if (b >= oneVigintillion) {
    return Math.round(100 * (b / oneVigintillion)) / 100 + 'V'
  } else if (b >= oneNovemdecillion) {
    return Math.round(100 * (b / oneNovemdecillion)) / 100 + 'Nd'
  } else if (b >= oneOctodecillion) {
    return Math.round(100 * (b / oneOctodecillion)) / 100 + 'Od'
  } else if (b >= oneSeptendecillion) {
    return Math.round(100 * (b / oneSeptendecillion)) / 100 + 'Sd'
  } else if (b >= oneSexdecillion) {
    ;
    return Math.round(100 * (b / oneSexdecillion)) / 100 + 'sd'
  } else if (b >= oneQuindecillion) {
    ;
    return Math.round(100 * (b / oneQuindecillion)) / 100 + 'Qd'
  } else if (b >= oneQuattuordecillion) {
    ;
    return Math.round(100 * (b / oneQuattuordecillion)) / 100 + 'qd'
  } else if (b >= oneTredecillion) {
    ;
    return Math.round(100 * (b / oneTredecillion)) / 100 + 'Td'
  } else if (b >= oneDuodecillion) {
    ;
    return Math.round(100 * (b / oneDuodecillion)) / 100 + 'D'
  } else if (b >= oneUndecillion) {
    ;
    return Math.round(100 * (b / oneUndecillion)) / 100 + 'U'
  } else if (b >= oneDecillion) {
    ;
    return Math.round(100 * (b / oneDecillion)) / 100 + 'd'
  } else if (b >= oneNonillion) {
    ;
    return Math.round(100 * (b / oneNonillion)) / 100 + 'N'
  } else if (b >= oneOctillion) {
    ;
    return Math.round(100 * (b / oneOctillion)) / 100 + 'o'
  } else if (b >= oneSeptillion) {
    ;
    return Math.round(100 * (b / oneSeptillion)) / 100 + 'S'
  } else if (b >= oneSextillion) {
    ;
    return Math.round(100 * (b / oneSextillion)) / 100 + 's'
  } else if (b >= oneQuintillion) {
    ;
    return Math.round(100 * (b / oneQuintillion)) / 100 + 'Q'
  } else if (b >= oneQuadrillion) {
    ;
    return Math.round(100 * (b / oneQuadrillion)) / 100 + 'q'
  } else if (b >= oneTrillion) {
    ;
    return Math.round(100 * (b / oneTrillion)) / 100 + 'T'
  } else if (b >= oneBillion) {
    ;
    return Math.round(100 * (b / oneBillion)) / 100 + 'B'
  } else if (b >= oneMillion) {
    ;
    return Math.round(100 * (b / oneMillion)) / 100 + 'M'
  } else if (b >= 1000) {
    ;
    return Math.round(100 * (b / 1000)) / 100 + 'K'
  } else {
    ;
    return Math.round(100 * (b)) / 100
  }
};

function b(a) {
  ;
  if (a >= oneALOT) {
    ;
    return Math.round(100 * (a / oneALOT)) / 100 + ' A LOT'
  } else if (a >= oneTrigintillion) {
    ;
    return Math.round(100 * (a / oneTrigintillion)) / 100 + ' Trigintillion'
  } else if (a >= oneNovemvigintillion) {
    ;
    return Math.round(100 * (a / oneNovemvigintillion)) / 100 + ' Novemvigintillion'
  } else if (a >= oneOctovigintillion) {
    ;
    return Math.round(100 * (a / oneOctovigintillion)) / 100 + ' Octovigintillion'
  } else if (a >= oneSeptenvigintillion) {
    ;
    return Math.round(100 * (a / oneSeptenvigintillion)) / 100 + ' Septenvigintillion'
  } else if (a >= oneSesvigintillion) {
    ;
    return Math.round(100 * (a / oneSesvigintillion)) / 100 + ' Sesvigintillion'
  } else if (a >= oneQuinvigintillion) {
    ;
    return Math.round(100 * (a / oneQuinvigintillion)) / 100 + ' Quinvigintillion'
  } else if (a >= oneQuattuorvigintillion) {
    ;
    return Math.round(100 * (a / oneQuattuorvigintillion)) / 100 + ' Quattuorvigintillion'
  } else if (a >= oneTresvigintillion) {
    ;
    return Math.round(100 * (a / oneTresvigintillion)) / 100 + ' Tresvigintillion'
  } else if (a >= oneDuovigintillion) {
    ;
    return Math.round(100 * (a / oneDuovigintillion)) / 100 + ' Duovigintillion'
  } else if (a >= oneUnvigintillion) {
    ;
    return Math.round(100 * (a / oneUnvigintillion)) / 100 + ' Unvigintillion'
  } else if (a >= oneVigintillion) {
    ;
    return Math.round(100 * (a / oneVigintillion)) / 100 + ' Vigintillion'
  } else if (a >= oneNovemdecillion) {
    ;
    return Math.round(100 * (a / oneNovemdecillion)) / 100 + ' Novemdecillion'
  } else if (a >= oneOctodecillion) {
    ;
    return Math.round(100 * (a / oneOctodecillion)) / 100 + ' Octodecillion'
  } else if (a >= oneSeptendecillion) {
    ;
    return Math.round(100 * (a / oneSeptendecillion)) / 100 + ' Septendecillion'
  } else if (a >= oneSexdecillion) {
    ;
    return Math.round(100 * (a / oneSexdecillion)) / 100 + ' Sexdecillion'
  } else if (a >= oneQuindecillion) {
    ;
    return Math.round(100 * (a / oneQuindecillion)) / 100 + ' Quindecillion'
  } else if (a >= oneQuattuordecillion) {
    ;
    return Math.round(100 * (a / oneQuattuordecillion)) / 100 + ' Quattuordecillion'
  } else if (a >= oneTredecillion) {
    ;
    return Math.round(100 * (a / oneTredecillion)) / 100 + ' Tredecillion'
  } else if (a >= oneDuodecillion) {
    ;
    return Math.round(100 * (a / oneDuodecillion)) / 100 + ' Duodecillion'
  } else if (a >= oneUndecillion) {
    ;
    return Math.round(100 * (a / oneUndecillion)) / 100 + ' Undecillion'
  } else if (a >= oneDecillion) {
    ;
    return Math.round(100 * (a / oneDecillion)) / 100 + ' Decillion'
  } else if (a >= oneNonillion) {
    ;
    return Math.round(100 * (a / oneNonillion)) / 100 + ' Nonillion'
  } else if (a >= oneOctillion) {
    ;
    return Math.round(100 * (a / oneOctillion)) / 100 + ' Octillion'
  } else if (a >= oneSeptillion) {
    ;
    return Math.round(100 * (a / oneSeptillion)) / 100 + ' Septillion'
  } else if (a >= oneSextillion) {
    ;
    return Math.round(100 * (a / oneSextillion)) / 100 + ' Sextillion'
  } else if (a >= oneQuintillion) {
    ;
    return Math.round(100 * (a / oneQuintillion)) / 100 + ' Quintillion'
  } else if (a >= oneQuadrillion) {
    ;
    return Math.round(100 * (a / oneQuadrillion)) / 100 + ' Quadrillion'
  } else if (a >= oneTrillion) {
    ;
    return Math.round(100 * (a / oneTrillion)) / 100 + ' Trillion'
  } else if (a >= oneBillion) {
    ;
    return Math.round(100 * (a / oneBillion)) / 100 + ' Billion'
  } else if (a >= oneMillion) {
    ;
    return Math.round(100 * (a / oneMillion)) / 100 + ' Million'
  } else if (a >= 1000) {
    ;
    return Math.round(100 * (a / 1000)) / 100 + ' Thousand'
  } else {
    ;
    return Math.round(100 * (a)) / 100
  }
};
let multiplier = 10;
let keys = [];
let frameNo = 0;
let clickTacoTimer = 0;
let money = 0;
let diamonds = 0;
let moneyRate = 1;
let displayMoneyRate = 100;
let diamondRate = 0.005;
let moneyValue = 0.05;
let diamondValue = 0.0005;
let evolveNum = 0;
let moneyPerSecNextEvolve;
let musicActive = false;
let keyCheese = '1';
let keyLettuce = '2';
let keySourCream = '3';
let keyMeat = '4';
let keyAvocadoes = '5';
let keySalsa = '6';
let keyTacoYumminess = 'n';
let keyTomatoes = 'm';
let keyEvolve = 'e';
let clickSound = new Audio('click.wav');
let clickUpgrade = new Audio('upgradeClick.wav');
let backgroundMusic;
class c {
  ;
  constructor({
    name
    , type
    , action = '+'
    , max
    , cost
    , num
    , total
    , totalUp
    , costUp
  }) {
    ;
    this.name = name;
    this.max = max;
    this.cost = cost;
    this.num = num;
    this.total = total;
    this.type = type;
    this.action = action;
    this.totalUp = totalUp;
    this.costUp = costUp;
    this.buttonElement = {
      onclick: this.name + 'upgrade()'
      , id: name
      , class: 'upgrades'
      ,
    }
  };
  upgrade() {
    ;
    if (this.type == 'money') {
      ;
      switch (this.action) {
        case '+':
          if (money >= Math.floor(this.cost) && this.num != this.max) {
            money -= Math.floor(this.cost);
            this.cost *= this.costUp;
            this.num++;
            this.total += this.totalUp;
            clickUpgrade.play()
          };
          break;
        case '*':
          if (money >= Math.floor(this.cost) && this.num != this.max) {
            ;
            money -= Math.floor(this.cost);
            this.cost *= this.costUp;
            this.num++;
            this.total *= this.totalUp;
            clickUpgrade.play()
          }
      }
    } else if (this.type == 'diamond') {
      ;
      switch (this.action) {
        case '+':
          if (diamonds >= Math.floor(this.cost) && this.num != this.max) {
            diamonds -= Math.floor(this.cost);
            this.cost *= this.costUp;
            this.num++;
            this.total += this.totalUp;
            clickUpgrade.play()
          };
          break;
        case '*':
          if (diamonds >= Math.floor(this.cost) && this.num != this.max) {
            diamonds -= Math.floor(this.cost);
            this.cost *= this.costUp;
            this.num++;
            this.total *= this.totalUp;
            clickUpgrade.play()
          };
          break
      }
    }
  };
  color() {
    ;
    if (this.type == 'money') {
      ;
      if (money >= Math.floor(this.cost) && this.num != this.max) {
        ;
        document.getElementById(this.name).classList = 'green upgrades'
      } else {
        ;
        document.getElementById(this.name).classList = 'gray upgrades'
      }
    } else if (this.type == 'diamond') {
      ;
      if (diamonds >= Math.floor(this.cost) && this.num != this.max) {
        ;
        document.getElementById(this.name).classList = 'green upgrades'
      } else {
        ;
        document.getElementById(this.name).classList = 'gray upgrades'
      }
    }
  };
  message() {
    ;
    if (this.num != this.max) {
      ;
      document.getElementById(this.name).innerHTML = buttons[this.name]
    } else {
      ;
      document.getElementById(this.name).innerHTML = buttons[this.name + 'Max']
    }
  }
};
let cheese = new c({
  name: 'cheese'
  , type: 'money'
  , max: 10
  , cost: 20
  , num: 0
  , total: 0
  , totalUp: 10
  , costUp: 1.5
});
let lettuce = new c({
  name: 'lettuce'
  , type: 'money'
  , max: 30
  , cost: 30
  , num: 0
  , total: 0
  , totalUp: 15
  , costUp: 1.4
});
let sourCream = new c({
  name: 'sourCream'
  , type: 'money'
  , max: 50
  , cost: 10
  , num: 0
  , total: 0
  , totalUp: 1
  , costUp: 1.3
});
let meat = new c({
  name: 'meat'
  , type: 'money'
  , action: '*'
  , max: 2
  , cost: 2500
  , num: 0
  , total: 1
  , totalUp: 2
  , costUp: 3
});
let avocados = new c({
  name: 'avocados'
  , type: 'money'
  , max: 20
  , cost: 25
  , num: 0
  , total: 0
  , totalUp: 8
  , costUp: 1.4
});
let salsa = new c({
  name: 'salsa'
  , type: 'money'
  , action: '*'
  , max: 2
  , cost: 250000
  , num: 0
  , total: 1
  , totalUp: 10
  , costUp: 2.5
});
let tacoYumminess = new c({
  name: 'tacoYumminess'
  , type: 'diamond'
  , max: 100
  , cost: 1000
  , num: 0
  , total: 0
  , totalUp: 5
  , costUp: 1.3
});
let tomatoes = new c({
  name: 'tomatoes'
  , type: 'diamond'
  , max: 100
  , cost: 600
  , num: 0
  , total: 0
  , totalUp: 10
  , costUp: 1.3
});
let buttons = {};
if (evolveNum == 0) multiplier = 7 * (2 ** evolveNum + 1);
else if (evolveNum > 0) multiplier = 7 * (2 ** evolveNum);

function d() {
  ;
  cheese.cost = multiplier * 20;
  cheese.num = 0;
  cheese.total = 0;
  lettuce.cost = multiplier * 30;
  lettuce.num = 0;
  lettuce.total = 0;
  sourCream.cost = multiplier * 10;
  sourCream.num = 0;
  sourCream.total = 0;
  meat.cost = multiplier * 2500;
  meat.num = 0;
  meat.total = 1;
  avocados.cost = multiplier * 25;
  avocados.num = 0;
  avocados.total = 0;
  salsa.cost = multiplier * 250000;
  salsa.num = 0;
  salsa.total = 1
};
d();

function e() {
  ;
  if (evolveNum <= 100) {
    ;
    f()
  }
};

function f() {
  ;
  if (displayMoneyRate >= moneyPerSecNextEvolve) {
    ;
    multiplier = 7 * (2 ** evolveNum + 2);
    moneyPerSecNextEvolve = (2 ** (evolveNum + 2)) * 1000 * 1.5;
    money = 0;
    frameNo = 0;
    evolveNum++;
    clickSound.play();
    cheese.max += 5;
    lettuce.max += 5;
    sourCream.max += 5;
    tacoYumminess.max += 2;
    tomatoes.max += 2;
    d()
  }
};
let upgrades = [cheese, lettuce, sourCream, meat, avocados, salsa];
let diamondUpgrades = [tacoYumminess, tomatoes];
upgrades.forEach((upgrade) => {
  ;
  document.getElementById('upgradeButtons').innerHTML += '<button onclick="' + upgrade.name + '.upgrade()" id="' + upgrade.name + '" class="upgrades"></button>';
  document.getElementById('keyBindsDiv').innerHTML += '<button id="keybinds" onclick="keybinds(\'' + upgrade.name + '\',prompt(\'Rebind ' + capitalizeFirstLetter(upgrade.name) + ' to:\').toLowerCase())" class="gray">Change Key Bind for ' + capitalizeFirstLetter(upgrade.name) + '</button><br>'
});
diamondUpgrades.forEach((upgrade) => {
  ;
  document.getElementById('diamondUpgrades').innerHTML += '<button onclick="' + upgrade.name + '.upgrade()" id="' + upgrade.name + '" class="upgrades"></button>';
  document.getElementById('keyBindsDiv').innerHTML += '<button id="keybinds" onclick="keybinds(\'' + upgrade.name + '\',prompt(\'Rebind ' + capitalizeFirstLetter(upgrade.name) + ' to:\').toLowerCase())" class="gray">Change Key Bind for ' + capitalizeFirstLetter(upgrade.name) + '</button><br>'
});
document.getElementById('keyBindsDiv').innerHTML += '<button id="keybinds" onclick="keybinds(\'evolve\',prompt(\'Rebind Evolve to:\').toLowerCase())" class="gray">Change Key Bind for Evolve</button>';

function g() {
  ;
  document.getElementById('start').style.display = 'none';
  document.getElementById('load').style.display = 'none';
  document.getElementById('stats').style.display = 'block';
  document.getElementById('save').style.display = 'inline';
  document.getElementById('exit').style.display = 'inline';
  document.getElementById('evolveButton').style.display = 'inline';
  for (let i = 0; i < upgrades.length + diamondUpgrades.length; i++) {
    ;
    document.getElementsByClassName('upgrades')[i].style.display = 'inline'
  };
  setInterval(h, 10);
  window.addEventListener('keydown', function (e) {
    ;
    keys = (keys || []);
    keys[e.key] = true
  });
  window.addEventListener('keyup', function (e) {
    ;
    keys[e.key] = false
  });
  console.log('Loaded')
};

function h() {
  moneyPerSecNextEvolve = (2 ** (evolveNum + 2)) * 1000 * 1.5;
  if (evolveNum == 0) multiplier = 7 * (2 ** evolveNum + 1);
  else if (evolveNum > 0) multiplier = 7 * (2 ** evolveNum);
  buttons = {
    'cheese': 'Cheese (' + keyCheese.toUpperCase() + '): Increase Size by 10% <span title="Size upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + a(cheese.cost) + '</b><br>Total: +' + cheese.total + '%<br>Level: ' + cheese.num + '/' + cheese.max
    , 'cheeseMax': 'Cheese (' + keyCheese.toUpperCase() + '): Increase Size by 10%<br>✅<br>Total: +' + cheese.total + '%<br>Level: MAX'
    , 'lettuce': 'Lettuce (' + keyLettuce.toUpperCase() + '): Increase Tastiness by 15% <span title="Tastiness upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + a(lettuce.cost) + '</b><br>Total: +' + lettuce.total + '%<br>Level: ' + lettuce.num + '/' + lettuce.max
    , 'lettuceMax': 'Lettuce (' + keyLettuce.toUpperCase() + '): Increase Tastiness by 15% <span title="Tastiness upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: +' + lettuce.total + '%<br>Level: MAX'
    , 'sourCream': 'Sour Cream (' + keySourCream.toUpperCase() + '): Increase Earnings by 1%<br><img src="money.png" height="12pt" /><b>' + a(sourCream.cost) + '</b><br>Total: +' + sourCream.total + '%<br>Level: ' + sourCream.num + '/' + sourCream.max
    , 'sourCreamMax': 'Sour Cream (' + keySourCream.toUpperCase() + '): Increase Earnings by 1%<br>✅<br>Total: +' + sourCream.total + '%<br>Level: MAX'
    , 'meat': 'Taco Meat (' + keyMeat.toUpperCase() + '): Double Meat <span title="Meat upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br><img src="money.png" height="12pt" /><b>' + a(meat.cost) + '</b><br>Total: ' + meat.total + 'x<br>Level: ' + meat.num + '/' + meat.max
    , 'meatMax': 'Taco Meat (' + keyMeat.toUpperCase() + '): Double Meat <span title="Meat upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: ' + meat.total + 'x<br>Level: MAX'
    , 'avocados': 'Avocados (' + keyAvocadoes.toUpperCase() + '): Increase Earnings by 8%<br><img src="money.png" height="12pt" /><b>' + a(avocados.cost) + '</b><br>Total: +' + avocados.total + '%<br>Level: ' + avocados.num + '/' + avocados.max
    , 'avocadosMax': 'Avocados (' + keyAvocadoes.toUpperCase() + '): Increase Earnings by 8%<br>✅<br>Total: +' + avocados.total + '%<br>Level: MAX'
    , 'salsa': 'Salsa (' + keySalsa.toUpperCase() + '): 10x Salsa <span title = "Salsa upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span> <br><img src="money.png" height="12pt" /><b>' + a(salsa.cost) + '</b><br>Total: ' + salsa.total + 'x<br>Level: ' + salsa.num + '/' + salsa.max
    , 'salsaMax': 'Salsa (' + keySalsa.toUpperCase() + '): 10x Salsa <span title="Salsa upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: ' + salsa.total + 'x<br>Level: MAX'
    , 'tacoYumminess': 'Taco Yumminess (' + keyTacoYumminess.toUpperCase() + '): Increase Diamond Speed by 5%<br>💎<b>' + a(tacoYumminess.cost) + '</b><br>Total: +' + tacoYumminess.total + '%<br>Level: ' + tacoYumminess.num + '/' + tacoYumminess.max
    , 'tacoYumminessMax': 'Taco Yumminess (' + keyTacoYumminess.toUpperCase() + '): Increase Diamond Speed by 5%<br>✅<br>Total: +' + tacoYumminess.total + '%<br>Level: MAX'
    , 'tomatoes': 'Tomatoes (' + keyTomatoes.toUpperCase() + '): Increase Flavor by 10% <span title="Flavor upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>💎<b>' + a(tomatoes.cost) + '</b><br>Total: +' + tomatoes.total + '%<br>Level: ' + tomatoes.num + '/' + tomatoes.max
    , 'tomatoesMax': 'Tomatoes (' + keyTomatoes.toUpperCase() + '): Increase Flavor by 10% <span title="Flavor upgrades are the same as Earnings upgrades in their effect.">[ ? ]</span><br>✅<br>Total: +' + tomatoes.total + '%<br>Level: MAX'
  };
  document.getElementById('evolveButton').innerHTML = 'Evolve (' + keyEvolve.toUpperCase() + ')';
  frameNo += 1;
  if (clickTacoTimer != 0) {
    clickTacoTimer--
  }
  document.getElementById('clickTacoTimer').innerText = Math.round(clickTacoTimer / 100);
  if (displayMoneyRate >= moneyPerSecNextEvolve && evolveNum <= 100) {
    document.getElementById('evolveButton').classList = 'green'
  } else {
    document.getElementById('evolveButton').classList = 'gray'
  };
  if (evolveNum == 0) {
    moneyValue = (cheese.total / 100 + 1) * (lettuce.total / 100 + 1) * (sourCream.total / 100 + 1) * meat.total * (tomatoes.total / 100 + 1) * (avocados.total / 100 + 1) * salsa.total;
    diamondValue = (tacoYumminess.total / 100 + 1) - 0.7
  } else {
    moneyValue = (2 ** evolveNum + 2) * (cheese.total / 100 + 1) * (lettuce.total / 100 + 1) * (sourCream.total / 100 + 1) * meat.total * (tomatoes.total / 100 + 1) * (avocados.total / 100 + 1) * salsa.total;
    diamondValue = (2 ** evolveNum + 2) * (tacoYumminess.total / 100 + 1)
  };
  upgrades.forEach((upgrade) => {
    upgrade.color();
    upgrade.message()
  });
  diamondUpgrades.forEach((upgrade) => {
    upgrade.color();
    upgrade.message()
  });
  document.getElementById('money').innerHTML = '<img src="money.png" height="12pt" />: <b class="large-money">' + b(money) + '</b>';
  displayMoneyRate = Math.round(10 * (10000 * moneyValue)) / 1000;
  document.getElementById('moneyPerSec').innerHTML = '<img src="money.png" height="12pt" />/sec: <b>' + a(displayMoneyRate) + '/' + a(moneyPerSecNextEvolve) + '</b>';
  document.getElementById('diamonds').innerHTML = '💎: <b>' + a(diamonds) + '</b>';
  document.getElementById('evolve').innerHTML = 'Evolve: <b>' + a(evolveNum) + '</b>';
  if (everyInterval(moneyRate)) {
    money += moneyValue
  }
  if (everyInterval(diamondRate)) {
    diamonds += diamondValue
  }
  if (keys && keys[keyCheese]) {
    cheese.upgrade()
  }
  if (keys && keys[keyLettuce]) {
    lettuce.upgrade()
  }
  if (keys && keys[keySourCream]) {
    ;
    sourCream.upgrade()
  };
  if (keys && keys[keyMeat]) {
    meat.upgrade()
  }
  if (keys && keys[keyAvocadoes]) {
    avocados.upgrade()
  }
  if (keys && keys[keySalsa]) {
    salsa.upgrade()
  }
  if (keys && keys[keyTacoYumminess]) {
    tacoYumminess.upgrade()
  }
  if (keys && keys[keyTomatoes]) {
    tomatoes.upgrade()
  }
  if (keys && keys[keyEvolve]) {
    e()
  }
};

function everyInterval(n) {
  if ((frameNo / n) % 1 == 0) {
    return true
  }
  return false
}
let infoActive = false;

function i() {
  if (!infoActive) {
    document.getElementById('info').style.display = 'block';
    infoActive = true
  } else if (infoActive) {
    document.getElementById('info').style.display = 'none';
    infoActive = false
  }
};
let optionsActive = false;

function j() {
  if (!optionsActive) {
    document.getElementById('options').style.display = 'block';
    optionsActive = true
  } else if (optionsActive) {
    document.getElementById('options').style.display = 'none';
    optionsActive = false
  }
};

function k(a, b) {
  if (b && !(b == (keyCheese || keyLettuce || keySourCream || keyMeat || keyAvocadoes || keySalsa || keyTacoYumminess || keyTomatoes || keyEvolve)) && (b.length == 1) && (b != keyEvolve)) {
    switch (a) {
      case 'cheese':
        keyCheese = b;
        break;
      case 'lettuce':
        keyLettuce = b;
        break;
      case 'sourCream':
        keySourCream = b;
        break;
      case 'meat':
        keyMeat = b;
        break;
      case 'avocados':
        keyAvocadoes = b;
        break;
      case 'salsa':
        keySalsa = b;
      case 'tacoYumminess':
        keyTacoYumminess = b;
        break;
      case 'tomatoes':
        keyTomatoes = b;
        break;
      case 'evolve':
        keyEvolve = b;
        break;
      default:
        alert('Key Error');
        console.error('Key Error');
        break
    }
  } else if (b.length != 1) {
    alert('Error: Invalid key');
    console.error('Error: Invalid key')
  } else {
    alert('Error: Key already bound');
    console.error('Error: Key already bound')
  }
};

function l() {
  if (clickTacoTimer == 0) {
    money += (Math.round(10000 * moneyValue) / 100) * 5;
    clickTacoTimer = 500;
    clickSound.play()
  }
}

function m() {
  localStorage.setItem('money', money);
  localStorage.setItem('diamonds', diamonds);
  localStorage.setItem('cheese.cost', cheese.cost);
  localStorage.setItem('cheese.num', cheese.num);
  localStorage.setItem('cheese.total', cheese.total);
  localStorage.setItem('lettuce.cost', lettuce.cost);
  localStorage.setItem('lettuce.num', lettuce.num);
  localStorage.setItem('lettuce.total', lettuce.total);
  localStorage.setItem('sourCream.cost', sourCream.cost);
  localStorage.setItem('sourCream.num', sourCream.num);
  localStorage.setItem('sourCream.total', sourCream.total);
  localStorage.setItem('meat.cost', meat.cost);
  localStorage.setItem('meat.num', meat.num);
  localStorage.setItem('meat.total', meat.total);
  localStorage.setItem('avocados.cost', avocados.cost);
  localStorage.setItem('avocados.num', avocados.num);
  localStorage.setItem('avocados.total', avocados.total);
  localStorage.setItem('salsa.cost', salsa.cost);
  localStorage.setItem('salsa.num', salsa.num);
  localStorage.setItem('salsa.total', salsa.total);
  localStorage.setItem('tacoYumminess.cost', tacoYumminess.cost);
  localStorage.setItem('tacoYumminess.num', tacoYumminess.num);
  localStorage.setItem('tacoYumminess.total', tacoYumminess.total);
  localStorage.setItem('tomatoes.cost', tomatoes.cost);
  localStorage.setItem('tomatoes.num', tomatoes.num);
  localStorage.setItem('tomatoes.total', tomatoes.total);
  localStorage.setItem('evolveNum', evolveNum);
  localStorage.setItem('multiplier', multiplier);
  localStorage.setItem('moneyPerSecNextEvolve', moneyPerSecNextEvolve);
  localStorage.setItem('clickTacoTimer', clickTacoTimer);
  localStorage.setItem('cheese.max', cheese.max);
  localStorage.setItem('lettuce.max', lettuce.max);
  localStorage.setItem('sourCream.max', sourCream.max);
  localStorage.setItem('meat.max', meat.max);
  localStorage.setItem('avocados.max', avocados.max);
  localStorage.setItem('salsa.max', salsa.max);
  localStorage.setItem('tacoYumminess.max', tacoYumminess.max);
  localStorage.setItem('tomatoes.max', tomatoes.max);
  console.log('Saved')
}

function n() {
  money = parseFloat(localStorage.getItem('money'));
  diamonds = parseFloat(localStorage.getItem('diamonds'));
  cheese.cost = parseFloat(localStorage.getItem('cheese.cost'));
  cheese.num = parseFloat(localStorage.getItem('cheese.num'));
  cheese.total = parseFloat(localStorage.getItem('cheese.total'));
  lettuce.cost = parseFloat(localStorage.getItem('lettuce.cost'));
  lettuce.num = parseFloat(localStorage.getItem('lettuce.num'));
  lettuce.total = parseFloat(localStorage.getItem('lettuce.total'));
  sourCream.cost = parseFloat(localStorage.getItem('sourCream.cost'));
  sourCream.num = parseFloat(localStorage.getItem('sourCream.num'));
  sourCream.total = parseFloat(localStorage.getItem('sourCream.total'));
  meat.cost = parseFloat(localStorage.getItem('meat.cost'));
  meat.num = parseFloat(localStorage.getItem('meat.num'));
  meat.total = parseFloat(localStorage.getItem('meat.total'));
  avocados.cost = parseFloat(localStorage.getItem('avocados.cost'));
  avocados.num = parseFloat(localStorage.getItem('avocados.num'));
  avocados.total = parseFloat(localStorage.getItem('avocados.total'));
  salsa.cost = parseFloat(localStorage.getItem('salsa.cost'));
  salsa.num = parseFloat(localStorage.getItem('salsa.num'));
  salsa.total = parseFloat(localStorage.getItem('salsa.total'));
  tacoYumminess.cost = parseFloat(localStorage.getItem('tacoYumminess.cost'));
  tacoYumminess.num = parseFloat(localStorage.getItem('tacoYumminess.num'));
  tacoYumminess.total = parseFloat(localStorage.getItem('tacoYumminess.total'));
  tomatoes.cost = parseFloat(localStorage.getItem('tomatoes.cost'));
  tomatoes.num = parseFloat(localStorage.getItem('tomatoes.num'));
  tomatoes.total = parseFloat(localStorage.getItem('tomatoes.total'));
  evolveNum = parseFloat(localStorage.getItem('evolveNum'));
  multiplier = parseFloat(localStorage.getItem('multiplier'));
  moneyPerSecNextEvolve = parseFloat(localStorage.getItem('moneyPerSecNextEvolve'));
  clickTacoTimer = parseFloat(localStorage.getItem('clickTacoTimer'));
  cheese.max = parseFloat(localStorage.getItem('cheese.max', cheese.max));
  lettuce.max = parseFloat(localStorage.getItem('lettuce.max', lettuce.max));
  sourCream.max = parseFloat(localStorage.getItem('sourCream.max', sourCream.max));
  meat.max = parseFloat(localStorage.getItem('meat.max', meat.max));
  tacoYumminess.max = parseFloat(localStorage.getItem('tacoYumminess.max', tacoYumminess.max));
  tomatoes.max = parseFloat(localStorage.getItem('tomatoes.max', tomatoes.max));
  clickSound.play();
  document.getElementById('load').style.display = 'none';
  g()
}
setInterval(m, 2500);