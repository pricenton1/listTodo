import React from 'react';
import CardBiodata from './CardBiodata';

class FormBiodata extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listData :[],
            nama : "",
            alamat : "",
            usia : "",
            email : "",
        }
    }
    handleChangeInput = (event) => {
        const name = event.target.name
        // console.log("INPUT VALUE",event.target.name);
        this.setState({...this.state, [name] :event.target.value })
    }
    handleSubmit = () => {
        let inData = this.state.listdata;
        let inName = this.state.nama;
        let inAddress = this.state.alamat;
        let inAge = this.state.usia;
        let inEmail = this.state.email; 
        inData.push({nama : inName, alamat:inAddress,usia:inAge,email:inEmail });
        this.setState({ ...this.state.data, inData });
    };
    render(){
        const card = this.state.data.map((value, index) => {
            return (
                <CardBiodata
                    value={value}
                    index={index}
                />
            );
        });
        return(
            <div>
                
            </div>
        )
    }
}
export default FormBiodata;