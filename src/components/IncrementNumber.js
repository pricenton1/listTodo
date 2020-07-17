import React from 'react';

class IncrementNumber extends React.Component {
    render() {
        let {number, increment} = this.props;
        return (
            <div style={{marginTop: 10}}>
                <button type="button" className="btn btn-primary" onClick={() => {increment()}}>Plus</button>
                <div>{number}</div>
            </div>
        )
    }
}
export default IncrementNumber