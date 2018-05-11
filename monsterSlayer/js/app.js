//prove od existence
console.log('42');

new Vue({
  el: '#app',
  data : {
    playerHP: 100,
    monsterHP: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame(){
      this.gameIsRunning = true;
      this.playerHP = 100;
      this.monsterHP = 100;
    },
    endGame(){
      this.gameIsRunning = false;
    },
    attack(){
      //triggers attack 
      //some logic
      //player to monster dmg
      var max = 10; 
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max), min)
      this.monsterHP -= damage;

      if(this.monsterHP <= 0){
        alert('You won');
        this.gameIsRunning = false;
        return;
      }

      //monster to player dmg // monster is stronk
      max = 12;
      min = 5;
      damage = Math.max(Math.floor(Math.random() * max), min)
      this.playerHP -= damage

      if(this.playerHP <= 0){
        alert('Monster won')
        this.gameIsRunning = false;
        return;
      }
    },
    specialAttack(){
      //triggers SpecialAttack
      //some logic
    },
    heal(){

    }
  }
})

