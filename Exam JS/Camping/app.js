class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;

        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(x => x.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }


        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;

    }
    unregisterParticipant(name) {

        let indexParcipant = this.listOfParticipants.findIndex(x => x.name == name);

        if (indexParcipant == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        //this.listOfParticipants.splice(indexParcipant, 1); //to do delete


        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = null;
        let player2 = null;

        if (typeOfGame == 'Battleship') {
            player1 = this.listOfParticipants.find(x => x.name === participant1);
            if (!player1) {
                return `Invalid entered name/s.`;
            }

            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame == 'WaterBalloonFights') {
            player1 = this.listOfParticipants.find(x => x.name == participant1);
            player2 = this.listOfParticipants.find(x => x.name == participant2);

            //to do ch3ck this if
            if (!player2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            


            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`

            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`

            } else {
                return `There is no winner.`;
            }

        }

    }

    toString() {

        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants
        .sort((a, b) => b.wins - a.wins)
        .forEach((participant) => {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);

        })

        return result.join('\n');
    }
}

const SummerCamp = result;
let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

assert.equal(camp.registerParticipant('Petar Petarson', 'student', 300), "The Petar Petarson was successfully registered.");

assert.equal(camp.registerParticipant('Sara Dickinson', 'child', 200), "The Sara Dickinson was successfully registered.");

assert.equal(camp.timeToPlay('Battleship', 'Sara Dickinson'), "The Sara Dickinson successfully completed the game Battleship.");

expect(()=>camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson', 'Petar Petarson')).to.throw(Error,"Choose players with equal condition.");






