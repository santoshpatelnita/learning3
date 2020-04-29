import React, { Component } from 'react';
import Range from './Range';
import MainOutput from './MainOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }  
heightChange(height) {
    console.log(height);
    this.setState({
      height: height
    }, this.setBmi);
  }
  weightChange(weight) {
    console.log(weight);
    this.setState({
      weight: weight
    }, this.setBmi);
  }

  setBmi() {
      let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
      this.setState({
          bmi: bmi,
          bmiClass: this.getBmiClass(bmi)
      });
  }
  
      getBmiClass(bmi) {
        if(bmi < 18.5) return 'Underweight';
        if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
        if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
        if(bmi >= 30) return 'Obese';
    }
  
   render() {
    return (
      <div className="App">
        <div>  
          <h1>Body mass index (BMI)</h1>
          <p>A measure of body fat in adults
          </p>
        </div>
          <form>
             <div>
               <label>Height: </label>
               {this.state.height}
               <Range onChange={this.heightChange.bind(this)} value={this.state.height} />
             </div>
             <div>
                <label>Weight: </label>
               {this.state.weight}
               <Range onChange={this.weightChange.bind(this)} value={this.state.weight} />
             </div>
          </form>
         <br />
         <MainOutput data = {this.state}/>
      </div>
    );
  }

}

export default App;