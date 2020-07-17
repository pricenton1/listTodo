import React from 'react';
import {Component} from 'react';
import MyCard from './MyCard';

class SampleForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            listData :[],
            name : "",
            alamat : "",
            usia : "",
            email : ""
        }
    }
    handleChangeInput = (event) => {
        const name = event.target.name
        // console.log("INPUT VALUE",event.target.name);
        
        this.setState({...this.state, [name] :event.target.value })
    }
    handleNewName = () => {
        if (this.state.name.length < 4){
            alert("Nama Minimal 5 karakter")
        }else if (this.state.alamat.length < 5){
            alert("Alamat Minimal 5 karakter")
        }else if (this.state.usia < 10){
            alert("Minimal Usia 10 ")
        }else if (this.state.email.length < 10){
            alert("Minimal Email 10 Karakter")
        }else{
            this.state.listData.push({
                newName : this.state.name,
                newAlamat : this.state.alamat,
                newUsia : this.state.usia,
                newEmail : this.state.email
            });
        }
        this.setState({
            newName : this.state.name,
            newAlamat : this.state.alamat,
            newUsia : this.state.usia,
            newEmail : this.state.email
        })
    }
    onDeleteData = (index) => {
        //   console.log(index)
        this.state.listData.splice(index,1);
        this.setState({
            listData :this.state.listData,
        });
    };
    // onEdit = (index, newName) => {
    
    //     let inEdit = this.state.data.splice(index, 1, newName);
    //     console.log(inEdit)
    //     this.setState({ ...this.state.listdata, inEdit });
    // };
    render(){
        const card = this.state.listData.map(({newName,newAlamat,newUsia,newEmail},index) =>(
            <MyCard index={index} name={newName} alamat={newAlamat}usia={newUsia}email={newEmail} 
            onDelete={this.onDeleteData} />
        ));
        console.log(card);
        return(
            <div>
                <div style={{background : "	#F0F8FF"}}>
                    <h3>Live Code React 1</h3>
                    <form>
                        <input 
                            className="form-control-md"
                            type="text"
                            name="name"
                            value={this.state.username}
                            onChange={this.handleChangeInput}
                            placeholder="Nama"
                        /><br/>
                        <input 
                            className="form-control-md"
                            type="text"
                            name="alamat"
                            value={this.state.alamat}
                            onChange={this.handleChangeInput}
                            placeholder="Alamat"
                        /><br/>
                        <input 
                            className="form-control-md"
                            type="text"
                            name="usia"
                            value={this.state.usia}
                            onChange={this.handleChangeInput}
                            placeholder="Usia"
                        /><br/>
                        <input 
                            className="form-control-md"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChangeInput}
                            placeholder="Email"
                        />
                    </form>
                    <button className="btn btn-primary" onClick={this.handleNewName}>Submit</button>
                </div>

                <div className="container" style={{display:'flex',flexWrap:'wrap'}}>
                    {card}
                </div>
            </div>
        )
    }
}
export default SampleForm;