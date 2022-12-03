function roadRadar(speed, area) {
    let status = '';
    let difference = 0;
    switch(area) {
        case 'motorway': 
            let speedLimitInMotorway = 130;

            if(speed <= speedLimitInMotorway) {
                console.log(`Driving ${speed} km/h in a ${speedLimitInMotorway} zone`);
            } else {
                difference = speed - speedLimitInMotorway;
                
                if(difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInMotorway} - ${status}`);
                } else if(difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInMotorway} - ${status}`);
                } else {
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInMotorway} - ${status}`);
                }
            }
        break;
        case 'interstate': 
        
        let speedLimitInInterstate = 90;

        if(speed <= speedLimitInInterstate) {
            console.log(`Driving ${speed} km/h in a ${speedLimitInInterstate} zone`);
        } else {
            difference = speed - speedLimitInInterstate;
            
            if(difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInInterstate} - ${status}`);
            } else if(difference > 20 && difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInInterstate} - ${status}`);
            } else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInInterstate} - ${status}`);
            }
        }
        break;
        case 'city':
            let speedLimitInCity = 50;

            if(speed <= speedLimitInCity) {
                console.log(`Driving ${speed} km/h in a ${speedLimitInCity} zone`);
            } else {
                difference = speed - speedLimitInCity;
                
                if(difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInCity} - ${status}`);
                } else if(difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInCity} - ${status}`);
                } else {
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInCity} - ${status}`);
                }
            }    
        break;
        case 'residential': 
             let speedLimitInResidential = 20;

            if(speed <= speedLimitInResidential) {
                console.log(`Driving ${speed} km/h in a ${speedLimitInResidential} zone`);
            } else {
                difference = speed - speedLimitInResidential;
                
                if(difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInResidential} - ${status}`);
                } else if(difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInResidential} - ${status}`);
                } else {
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitInResidential} - ${status}`);
                }
            }
        break;
    }
}
//roadRadar(40, 'city')
roadRadar(21, 'residential')
//roadRadar(120, 'interstate')
//roadRadar(200, 'motorway')