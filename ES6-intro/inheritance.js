class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    move() {
        console.log('moving');
    }}

    class Bus extends vehicle {
        constructor(make, model, year,seat) {   
            super(make, model, year);
            this.seat = seat;
        }
    }

    class Truck extends vehicle {
       constructor(make, model, year,load) {   
            super(make, model, year);
            this.load = load;
        }
    }