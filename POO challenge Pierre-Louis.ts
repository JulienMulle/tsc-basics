/*
1- Créer une classe "Car". Cette classe possède : 8 propriétés : - brand - model - color - horsePower - fuelType - wheels - isOn - currentGear 7 méthodes - turnContactOn() - turnContactOff() - accelerate() - brake() - openSunRoof() - turnOnFourWheelDriving() - turnOffFourWheelDriving()

2- Créer 2 interfaces :

L'interface "SportCar" qui possède des propriétés et des méthodes propres à une voiture de sport :

isSportModeActivated

hasGearsOnSteeringWheel

totalGears;

ExhaustPipesNumber

turnOnSportMode()

L'interface "SuvCar" qui possède des propriétés propres à un SUV :

heightFromTheGround
hasLeatherSeats
À vous d'écrire ce que fait chaque méthode (celles de la classe Car ainsi que celle de l'interface SportCar). Soyez logiques 😎

3- Intancier 2 objets depuis la classe Vehicle :

Le premier sera une voiture de sport: il devra donc implémenter l'interface SportCar
Le second sera une voiture SUV : il devra donc implémenter l'interface SuvCar
4- Jouer avec les méthodes des objets : démarrer, arrêter, accélérer, passer en mode sport, etc...
*/

//1-
class Car{
    private brand: string;
    private model: string;
    private color: string;
    private horsePower: number;
    private fuelType: string;
    private wheels: number;
    private isOn: boolean;
    private currentGear: number;
   
    constructor(brand: string, model: string, color: string, horsePower: number, fuelType: string){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.horsePower = horsePower;
        this.fuelType = fuelType;
        this.isOn = false;
        this.currentGear = 0;
    }

    public turnContactOn(){
        this.isOn = true;
    };

    public turnContactOff(){
        this.isOn = false
    };
    
    public accelerate(){

    };

    public brake(){

    };

    public openSunRoof(){

    };

    public turnOnFourWheelDriving(){

    };

    public turnOffFourWheelDriving(){

    }

};

class SportCar extends Car{

}

class SuvCar extends Car{

}

//2-

interface SportCar{
    isSportModeActived: boolean;
    hasGearsOnSteeringWheel: number;
    totalGears: number;
    exhaustPipesNumber: number;
    turnOnSportMo
};

interface SuvCar{

}

