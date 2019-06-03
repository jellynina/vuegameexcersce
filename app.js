new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        giveUp: function() {
            this.gameIsRunning = false;
        },
        attack: function() {
            var damage = 10;
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            // checkWin
            // monster's turn
        },
        calculateDamage: function(min, max){
            return Math.max(max, min);
        }

        // monsterAttacks
        // checkWin
    }

});