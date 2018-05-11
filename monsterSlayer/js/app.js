//prove od existence
console.log('42');

new Vue({
  el: '#app',
  data : {
    playerHP: 100,
    monsterHP: 100,
    gameIsRunning: false,
    turns : [],
  },
  methods: {
    startGame(){
      this.gameIsRunning = true;
      this.playerHP = 100;
      this.monsterHP = 100;
      this.turns = [];
    },
    endGame(){
      this.gameIsRunning = false;
    },
    attack(){
      //player to monster dmg
      let damage = this.calculateDamage(3,10)
      this.turns.unshift({
        isPlayer: true,
        text: `The player hits monster for ${damage}`
      })
      this.monsterHP -= damage;
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack()
    },
    monsterAttack(){
      //monster to player dmg // monster is stronk
      let damage =  this.calculateDamage(5,12)
      this.turns.unshift({
        isPlayer: false,
        text: `The monster hits player for ${damage}`
      })
      this.playerHP -= damage;
      this.checkWin();
    },
    specialAttack(){
      let damage = this.calculateDamage(10,20);
      this.monsterHP -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `The player hits monster HARD for ${damage}`
      })
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack()
    },
    heal(){
      //  this.playerHP +=10; // check for overheal
      if(this.playerHP <= 90 ){
        this.playerHP += 10
      }
      else{
        this.playerHP = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: `The player heals for 10`
      })
      this.monsterAttack();
    },
    calculateDamage(min, max){
      return Math.max(Math.floor(Math.random() * max), min)
    },
    checkWin(){
      if(this.monsterHP <= 0){
        if(confirm('You won! new Game?')){
          this.startGame()
        }
        else{
          this.gameIsRunning = false
        }
        return true;
      }else if(this.playerHP <= 0){
        if(confirm('Monster won! New Game?')){
          this.startGame()
        }
        else{
          this.gameIsRunning = false
        }
        return true;
      }
      return false;
    }
  }
})

