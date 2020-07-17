import React from 'react';
import {Component} from 'react';

class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            username : "",
            password : ""
        }
    }
    hadleChangeInput = (event) => {
        const name = event.target.name
        console.log("INPUT VALUE",event.target.name);
        this.setState({...this.state, [name] :event.target.value })
    }
    handleSubmit = () =>{
        // if (this.state.username == "Toni" && this.state.password == "123"){
            
        // }
        alert(`Username : ${this.state.username} Password: ${this.state.password}`)
    }
    render(){
        console.log("STATE",this.state);
        return(
            <div style={{background : "#aaa"}}>
                <h3>Login</h3>
                <form>
                    <input 
                        name="username"
                        value={this.state.username}
                        onChange={this.hadleChangeInput}
                    />
                    <input
                        name="password"
                        value={this.state.password}
                        onChange={this.hadleChangeInput}
                    />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default LoginComponent;