import React,{ Component }  from 'react';
import './calc.css';

class OutputCalc extends Component{
    render(){
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
         )
    }
}
export default OutputCalc