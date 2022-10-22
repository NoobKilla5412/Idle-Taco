/**
 * capitalize the first letter of ``string``.
 * @param {*} string String to capitalize
 * @returns string with first letter capitalized
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
 * Reset the cost, num, and total of the upgrades.
 */
function resetValues() {
  cheese.cost = multiplier * 20
  cheese.num = 0
  cheese.total = 0
  lettuce.cost = multiplier * 30
  lettuce.num = 0
  lettuce.total = 0
  sourCream.cost = multiplier * 10
  sourCream.num = 0
  sourCream.total = 0
  meat.cost = multiplier * 2500
  meat.num = 0
  meat.total = 1
  avocados.cost = multiplier * 25
  avocados.num = 0
  avocados.total = 0
  salsa.cost = multiplier * 250000
  salsa.num = 0
  salsa.total = 1
}
/**
 * Test if the evolve count is not at 100
 */
function evolve() {
  if (evolveNum < 100) {
    newEvolve()
  }
}
/**
 * Increase the evolve count
 */
function newEvolve() {
  if (displayMoneyRate >= moneyPerSecNextEvolve) {
    multiplier = 7 * (2 ** evolveNum + 2)

    moneyPerSecNextEvolve = (2 ** (evolveNum + 2)) * 1000 * 1.5

    money = 0
    frameNo = 0

    evolveNum++
    clickSound.play()
    cheese.max += 5
    lettuce.max += 5
    sourCream.max += 5
    tacoYumminess.max += 2
    tomatoes.max += 2
    resetValues()
  }
}
/**
 * Start the game
 */
function startGame() {
  document.getElementById('start').style.display = 'none'
  document.getElementById('load').style.display = 'none'
  document.getElementById('stats').style.display = 'block'
  document.getElementById('save').style.display = 'inline'
  document.getElementById('exit').style.display = 'inline'
  document.getElementById('evolveButton').style.display = 'inline'
  for (let i = 0; i < upgrades.length + diamondUpgrades.length; i++) {
    document.getElementsByClassName('upgrades')[i].style.display = 'inline'
  }
  setInterval(animate, 10)

  window.addEventListener('keydown', function (e) {
    keys = (keys || [])
    keys[e.key] = true
  })
  window.addEventListener('keyup', function (e) {
    keys[e.key] = false
  })
  setInterval(save, 2500)
  console.log('Loaded')
}
/**
 * Every interval
 * @param {*} n The interval
 */
function everyInterval(n) {
  if ((frameNo / n) % 1 == 0) { return true }
  return false
}
/**
 * Toggle the info menu
 */
function info() {
  if (!infoActive) {
    document.getElementById('info').style.display = 'block'
    infoActive = true
  } else if (infoActive) {
    document.getElementById('info').style.display = 'none'
    infoActive = false
  }
}
/**
 * Toggle the options menu
 */
function options() {
  if (!optionsActive) {
    document.getElementById('options').style.display = 'block'
    optionsActive = true
  } else if (optionsActive) {
    document.getElementById('options').style.display = 'none'
    optionsActive = false
  }
}
/**
 * Change keybinds
 * @param {*} bind The keybind to change
 * @param {*} newKey The new key to change ``bind`` to
 */
function keybinds(bind, newKey) {
  // console.log('bind: ' + bind)
  // console.log('newKey: ' + newKey)
  // console.log('keyEvolve: ' + keyEvolve)
  // console.log('newKey != keyEvolve: ' + (newKey != keyEvolve))
  if (newKey && !(newKey == (keyCheese || keyLettuce || keySourCream || keyMeat || keyAvocadoes || keySalsa || keyTacoYumminess || keyTomatoes || keyEvolve)) && (newKey.length == 1) && (newKey != keyEvolve)) {
    switch (bind) {
      case 'cheese':
        keyCheese = newKey
        break
      case 'lettuce':
        keyLettuce = newKey
        break
      case 'sourCream':
        keySourCream = newKey
        break
      case 'meat':
        keyMeat = newKey
        break
      case 'avocados':
        keyAvocadoes = newKey
        break
      case 'salsa':
        keySalsa = newKey
      case 'tacoYumminess':
        keyTacoYumminess = newKey
        break
      case 'tomatoes':
        keyTomatoes = newKey
        break
      case 'evolve':
        keyEvolve = newKey
        break
      default:
        alert('Key Error')
        console.error('Key Error')
        break
    }
  } else if (newKey.length != 1) {
    alert('Error: Invalid key')
    console.error('Error: Invalid key')
  } else {
    alert('Error: Key already bound')
    console.error('Error: Key already bound')
  }
}
/**
 * Add money for clicking on the Taco
 */
function clickTaco() {
  if (clickTacoTimer == 0) {
    money += (Math.round(10000 * moneyValue) / 100) * 5
    clickTacoTimer = 500
    clickSound.play()
  }
}
/**
 * Save the game
 */
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
  // Avocados:
  localStorage.setItem('avocados.cost', avocados.cost)
  localStorage.setItem('avocados.num', avocados.num)
  localStorage.setItem('avocados.total', avocados.total)
  // Salsa:
  localStorage.setItem('salsa.cost', salsa.cost)
  localStorage.setItem('salsa.num', salsa.num)
  localStorage.setItem('salsa.total', salsa.total)
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
  localStorage.setItem('avocados.max', avocados.max)
  localStorage.setItem('salsa.max', salsa.max)
  localStorage.setItem('tacoYumminess.max', tacoYumminess.max)
  localStorage.setItem('tomatoes.max', tomatoes.max)

  console.log('Saved')
}
/**
 * Load from save
 */
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
  // Avocados:
  avocados.cost = parseFloat(localStorage.getItem('avocados.cost'))
  avocados.num = parseFloat(localStorage.getItem('avocados.num'))
  avocados.total = parseFloat(localStorage.getItem('avocados.total'))
  // Salsa:
  salsa.cost = parseFloat(localStorage.getItem('salsa.cost'))
  salsa.num = parseFloat(localStorage.getItem('salsa.num'))
  salsa.total = parseFloat(localStorage.getItem('salsa.total'))
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