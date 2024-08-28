const findTheOldest = function(people) {
    let maxAge = 0;
    let maxPerson = Object();
    let currentYear = 2024;
    for (let i = 0; i < people.length; i++) {
        // let name = people[i].name;
        let yearOfBirth = people[i].yearOfBirth;
        let yearOfDeath = people[i].yearOfDeath;
        if (yearOfDeath == undefined) {
            yearOfDeath = currentYear;
        }
        let age = yearOfDeath - yearOfBirth;
        // console.log(name, age);
        if (age > maxAge) {
            maxAge = age;
            maxPerson = people[i];
        }
        // console.log("MAX", maxAge, maxName);
    };
    // console.log(maxName);
    return maxPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
