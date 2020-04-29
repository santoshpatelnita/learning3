import React, { Component } from 'react';

class MainOutput extends Component {
    toFeet(n) {
        let realFeet = ((n*0.393700)/12);
        let feet = Math.floor(realFeet.toFixed(2));
        let inches = Math.round((realFeet - feet) * 12);
        return feet + "'" + inches;
    }
    toLbs(n) {
        let nearExact = n/0.45359237;
        let lbs = Math.floor(nearExact);
        return lbs;
    }
    render() {
        let height = this.toFeet(this.props.data.height);
        let weight = this.toLbs(this.props.data.weight);
        let bmi = this.props.data.bmi;
        let bmiClass = this.props.data.bmiClass;
        return (
            <div>
               <h3>{height}</h3>
               <h3>{weight} lbs</h3>
               <h3>{bmi} kg/m2</h3>
               <h3>
                {bmiClass}
            </h3>
            </div>
    );
    }
}
export default MainOutput;