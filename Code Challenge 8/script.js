
class Elements {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class ParksClass extends Elements {
    constructor(name, buildYear, numOfTrees, parkArea) {
        super(name, buildYear);

        this.numOfTrees = numOfTrees;
        this.parkArea = parkArea;
        this.ageOfPark = (new Date().getFullYear() - this.buildYear);
    }
    calcTreeDensity() {
        let density = (this.numOfTrees / this.parkArea);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }

}

class StreetsClass extends ParksClass {
    constructor(name, buildYear, lenOfTown, size = 3) {
        super(name, buildYear);
        this.lenOfTown = lenOfTown;
        this.size = size;
    }
    sizeClassification() {
        const classification = new Map();
        classification.set(1, "tiny");
        classification.set(2, "small");
        classification.set(3, "normal");
        classification.set(4, "big");
        classification.set(5, "huge");

        console.log(`${this.name} , build in ${this.buildYear} and is a ${classification.get(this.size)} city.`);
    }
}

let allParks = [new ParksClass('National Park', 1980, 3200, 2.5),
new ParksClass('Oak Park', 1985, 1030, 1),
new ParksClass('Green Park', 1995, 986, 1.2)];

let allStreets = [new StreetsClass('JP nagar', 1986, 0.6, 1),
new StreetsClass('Bannerghatta', 1894, 4.8, 5),
new StreetsClass('Yelachenahlli', 1974, 1.8),
new StreetsClass('Jayanagar', 1894, 3.2, 4)];

var sumOfAges = (() => {
    var sum = 0;
    for (let i = 0; i < allParks.length; i++) {
        sum += allParks[i].ageOfPark;
    }
    return sum;
})();

let avgAgeTown = (sumOfAges / allParks.length);

let isTreesGt1000 = (allParks) => {
    allParks.forEach(curr => {
        if (curr.numOfTrees >= 1000) {
            console.log(`${curr.name} has more than 1000 trees.`);
        }
    });
}

var totalLenOfStreets = (() => {
    var sum = 0;
    for (let i = 0; i < allStreets.length; i++) {
        sum += allStreets[i].lenOfTown;
    }
    return sum;
})();

let avgLenOfTown = (totalLenOfStreets / allStreets.length) * 100;

// 

console.log('-------PARKS REPORT-------');
console.log(`Our ${allParks.length} parks has an avegrage of ${avgAgeTown} years.`);
allParks.forEach(curr =>{
    curr.calcTreeDensity();
});
isTreesGt1000(allParks);
console.log();

console.log('-------STREETS REPORT-------');
console.log(`Our ${allStreets.length} streets has a total length of ${totalLenOfStreets} km., with an avegrage of ${avgLenOfTown} km.`);
allStreets.forEach(curr => {
    curr.sizeClassification();
});