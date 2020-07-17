import React,{ Component }  from 'react';
import KeyPadCalc from './KeyPadCalc';
import OutputCalc from './OutputCalc';
import './calc.css';


class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            result : "",
        }
    }
    handleChangeInput = (event) => {
        if(event === "="){  
            this.calculate()
        }else if (event === "ac"){
            this.reset()
        }else if (event === "c"){
            this.backspace()
        }else if (this.state.result.length <= 1 && this.state.result[0] === "0" && event !== "." ){
            this.setState({
                result: event
            })
        }
        else{
            this.setState({
                result: this.state.result + event
            })
        }
        // const name = event.target.name
        // console.log("INPUT VALUE",event.target.name);
        // this.setState({...this.state, [name] :event.target.value })
        // this.setState({result:event.target.value})
    }
    reset = () => {
        this.setState({
            result: ""
        })
    };
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    calculate = () => {
        let checkResult = ''
        console.log(checkResult)
        if(this.state.result.includes('0')){
            checkResult = this.state.result.replace('0','')
        }
        else {
            checkResult = this.state.result
        }
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result)|| "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "Error"
            })

        }
    };
    render(){
        console.log(this.state.result.length)
        return(
            <div className="container">
                <h3>Simple Calculator</h3>
                <div className="body-calc">
                    <OutputCalc result={this.state.result}/>
                    <KeyPadCalc handleInput={this.handleChangeInput}/>
                </div>              
            </div>
        );
    };
}
export default Calculator