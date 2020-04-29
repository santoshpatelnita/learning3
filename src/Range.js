import React, { Component } from 'react';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
        this.onChange = this.onChange.bind(this)
    }
  
     onChange(event) {
        this.props.onChange(this.state.value);
        this.setState({
            value: event.target.value
        });
    }
  
      render() {
        return (
            <div>
                <input 
                    type="range"
                    value={this.state.value}
                    min={1}
                    max={220}
                    step={this.props.step}
                    onChange={this.onChange}
                />
            </div>
        );
    } 
}
export default Range;