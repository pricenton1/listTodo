import React from 'react';

class DecrementNumber extends React.Component {
    render() {
        let { decrement} = this.props;
        return (
            <div style={{marginTop: 10}}>
                <button type="button" className="btn btn-danger" onClick={() => {decrement()}}>Min</button>
                {/* <div>{number}</div> */}
            </div>
        )
    }
}

export default DecrementNumber