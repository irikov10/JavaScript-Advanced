class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        let namesArray = [];
        for (let data of footballPlayers) {
            let [name, age, value] = data.split('/');

            age = Number(age);
            value = Number(value);

            let foundPlayer = this.invitedPlayers.find(player => player.name == name);

            if (!foundPlayer) {
                this.invitedPlayers.push({
                    name,
                    age,
                    value
                })

                namesArray.push(name);
            } else {
                if (value > foundPlayer.value) {
                    foundPlayer.value += value;
                }
            }

        }
        return `You successfully invite ${namesArray.join(', ')}.`
    }

    signContract(selectedPlayer) {
        let splitted = selectedPlayer.split('/');
        let nameOfPlayer = splitted[0];
        let offerMade = splitted[1];
        offerMade = Number(offerMade)
        
        let player = this.invitedPlayers.find(p => p.name === nameOfPlayer) 

        if(!player) {
            throw new Error(`${nameOfPlayer} is not invited to the selection list!`)
        } else {
            if(offerMade < player.value) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${nameOfPlayer}, ${player.value - offerMade} million more are needed to sign the contract!`)
            } else {
                player.value = 'Bought';
            }
        }

        return `Congratulations! You sign a contract with ${nameOfPlayer} for ${offerMade} million dollars.`
    }

    ageLimit(name, age) {
        age = Number(age);

        let playerToFind = this.invitedPlayers.find(p => p.name == name);

        if(!playerToFind) {
            throw new Error(`${name} is not invited to the selection list!`);
        } 

        if(playerToFind.age < age) {
            let difference = age - playerToFind.age;
            if(difference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
            }
        } else if(playerToFind.age >= age) {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {
        let result = [];

        result.push("Players list:");

        for(let player of this.invitedPlayers) {
            result.push(`Player ${player.name}-${player.value}`)
        }
        return result.join('\n')
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


