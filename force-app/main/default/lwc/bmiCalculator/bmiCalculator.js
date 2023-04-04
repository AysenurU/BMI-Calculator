import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = '';
    weight = '';
    bmiValue = '';
    result = '';

    inputHandler(event){
        const {name, value} = event.target;
        if(name == 'height'){
            this.height = value;
        }
        if(name == 'weight'){
            this.weight = value;
        }
    }
    submitHandler(event){
        event.preventDefault();//to prevent the page from refreshing
        console.log('height', this.height);
        console.log('weight', this.weight);
        this.calculate();
    }

    calculate(){
        //BMI = weight in KG / (height in m * height in m)
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        this.bmiValue = Number(bmi.toFixed(2));//toFixed makes the number as a 2 digits

        if(this.bmiValue < 18.5){
            this.result = 'Underweight';
        }else if(this.bmiValue >= 18.5 && this.bmiValue < 25){
            this.result = 'Healthy';
        }else if(this.bmiValue >= 25 && this.bmiValue < 30){
            this.result = 'Overweight';
        }else{
            this.result = 'Obese';
        }

        console.log('BMI is : ', this.bmiValue);
        console.log('Result is : ', this.result);
    }
    recalculate(){
        this.result = '';
        this.height = '';
        this.weight = '';
        this.result = '';
    }
}