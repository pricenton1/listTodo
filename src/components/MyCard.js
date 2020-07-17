import React from 'react';


class MyCard extends React.Component{
    render(){
        // let {index,title, subtitle ,onDelete} = this.props
        let {name,index,alamat,usia,email,onDelete} = this.props 
        return (
            <div className="col-sm-3">
                <span className="card" style={{width : '17rem',margin:"10px",boxShadow:"10px 10px 0px #888888"}}>
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text">{alamat}</p>
                        <p className="card-text">{usia}</p>
                        <p className="card-text">{email}</p>
                            {/* <input
                            name="nama"
                            id={index}
                            type="text"
                            value={value}
                            onChange={handleChange}
                            disabled={true}
                            /> */}
                        {/* <p>{index}</p> */}
                        {/* <p>{title}</p>
                        <p>{subtitle}</p> */}
                        {/* <button style={{marginRight:'10px'}} className="btn btn-warning" onClick={()=> {onEdit(index,newName)}}>Edit</button> */}
                        <button className="btn btn-danger" onClick={() => {onDelete(index)}}>Remove</button>
                        {/*{props.children}*/}
                    </div>
                </span>
            </div>       
        )
    }
}
export default MyCard