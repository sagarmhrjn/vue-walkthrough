function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // Player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerrHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // Monster lost
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterBarHealth() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarHealth() {
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        // max damage 12 min 5
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
        },
        // max damage 12 min 5
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(8, 15);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.currentRound++;
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        }
    }

});

app.mount('#game');