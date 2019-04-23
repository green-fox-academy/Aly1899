export class Pirate {
    drinkCheck: number = 0;
    isAlive: boolean = true;
    isCaptain: boolean = false;
    

    drinkSomeRum() {
        if (this.isAlive) {
            this.drinkCheck++;
        } else {
            console.log("he's dead");
        }
    }

    howsItGoingMate() {
        if (this.drinkCheck < 5) {
            console.log("Pour me anudder!");
        } else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
        }
    }

    die() {
        this.isAlive = false

    }

    brawlOutput1() {
        this.die();
    }

    brawlOutput2(onePirate: Pirate) {
        onePirate.die();
    }

    brawlOutput3(onePirate: Pirate) {
        this.die();
        onePirate.die();
    }

    brawl(pirate: Pirate) {
        let rnd = Math.floor(Math.random() * 3) + 1
        console.log(rnd);

        if (rnd === 1) {
            this.brawlOutput1()
        }
        else if (rnd === 2) {
            this.brawlOutput2(pirate)
        } else {
            this.brawlOutput3(pirate)
        }

    }
}


