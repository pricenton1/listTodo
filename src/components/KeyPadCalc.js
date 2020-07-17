import React,{ Component }  from 'react';
import './calc.css';

class KeyPadCalc extends Component{
    render(){

        let {handleInput} = this.props
        return(
            <div className="container">
                <button className="clear" name="(" onClick={e => handleInput(e.target.name)}>(</button>
                <button className="clear"name=")" onClick={e => handleInput(e.target.name)}>)</button>
                <button className="clear" name="c" onClick={e => handleInput(e.target.name)}>c</button>
                <button className="clear" name="ac" onClick={e => handleInput(e.target.name)}>ac</button><br/>
                <button name="1" onClick={e => handleInput(e.target.name)}>1</button>
                <button name="2" onClick={e => handleInput(e.target.name)}>2</button>
                <button name="3" onClick={e => handleInput(e.target.name)}>3</button>
                <button className="clear" name="+" onClick={e => handleInput(e.target.name)}>+</button><br/>

                <button name="4" onClick={e => handleInput(e.target.name)}>4</button>
                <button name="5" onClick={e => handleInput(e.target.name)}>5</button>
                <button name="6" onClick={e => handleInput(e.target.name)}>6</button>
                <button className="clear" name="-" onClick={e => handleInput(e.target.name)}>-</button><br/>

                <button name="7" onClick={e => handleInput(e.target.name)}>7</button>
                <button name="8" onClick={e => handleInput(e.target.name)}>8</button>
                <button name="9" onClick={e => handleInput(e.target.name)}>9</button>
                <button className="clear" name="*" onClick={e => handleInput(e.target.name)}>x</button><br/>

                <button name="." onClick={e => handleInput(e.target.name)}>.</button>
                <button name="0" onClick={e => handleInput(e.target.name)}>0</button>
                <button name="=" onClick={e => handleInput(e.target.name)}>=</button>
                <button className="clear" name="/" onClick={e => handleInput(e.target.name)}>/</button><br/>
            </div>
        )
    }
}
export default KeyPadCalc