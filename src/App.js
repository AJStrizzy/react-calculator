import React, { Component } from 'react';
import div from './App.css'

class Calculator extends Component {
    constructor(){
        super()
        this.state ={
            num1: null,
            num2: null,
            math: "Select",
            results: 0
        }
    }

    math = (e) => {
        const type = e.target.value
        this.setState({ math: type})
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    equals = () => {
        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)
        
        if (this.state.math === "+"){
            this.setState({results: `Result is  ${num1 + num2}`})
        }
        if (this.state.math === "-"){
            this.setState({results: `Result is  ${num1 - num2}`})
        }
        if (this.state.math === "*"){
            this.setState({results: `Result is  ${num1 * num2}`})
        }
        if (this.state.math === "/"){
            this.setState({results: `Result is  ${num1 / num2}`})
        }
        if (this.state.math === "Select"){
            this.setState({results: "Select an operator"})
        }
    }

    render(){
        return(
            <div className="container">
                <h1>Realculator</h1>

                <div className = 'math'>
                    
                    <input type="number" placeholder='First Number' value={this.state.num1} onChange={ (e) => this.setNum(e, "num1")} />
                    
                    <form>
                        <label>
                            <select onChange={this.math}>
                                <option>Select</option>
                                <option>+</option>
                                <option>-</option>
                                <option>*</option>
                                <option>/</option>
                            </select>
                        </label>
                    </form>
                    
                    <input type="number" placeholder='Second Number' value={this.state.num2} onChange={ (e) => this.setNum(e, "num2")} />
                    <div>
                        <button onClick={this.equals}>=</button>
                    </div> 
                    <h3>{this.state.results}</h3>
                
                </div>
            </div>
        )
    }
}

export default Calculator;