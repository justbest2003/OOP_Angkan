class residence {
        name = "";
        address = "";
        rent = ""; 
    constructor(name, address, rent){
        this.name = name;
        this.address = address;
        this.rent = rent;
    }
}

class Condo extends residence {
        unitNumber = 0;
        floor = 0;
    constructor(name, address, rent, unitNumber, floor){
        super(name, address, rent)
        this.unitNumber = unitNumber;
        this.floor = floor;
    }
}

class TownHouse extends residence{
        numberOfFloor = 0;
    constructor(name, address, rent, numberOfFloor){
        super(name, address, rent)
        this.numberOfFloor = numberOfFloor;
    }
}

class House extends residence {
        area = 0;
    constructor(name, address, rent, area){
        super(name, address, rent)
        this.area = area;
    }
}