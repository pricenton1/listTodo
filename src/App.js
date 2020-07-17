import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import HelloWorld from './components/HelloWorld';
import {Component} from 'react';
// import FormBiodata from './components/FormBiodata';
// import UserCard from './components/userCard';
// import IncrementNumber from './components/IncrementNumber';
// import DecrementNumber from './components/DecrementNumber';
// import MyCard from './components/MyCard';
// import LoginComponent from './components/loginComponent';
// import SampleForm from './components/SampleForm';
// import Calculator from './components/Calculator';
import TodoComponent from './components/TodoComponent';

//LIFE CYCLE REACT
// COMPONENT BASE
class App extends Component{
  //state
  // state = {
  //   number : 0,
  // };

  // component2 react punya 3 fase : 1.Mounting,2.Updating,3.Unmounting
  
  //initialize first
  //DI eksekusi sebelum render
  componentWillMount(){
    console.log("component will MOUNT")
  }
  // DI eksekusi setelah render
  componentDidMount(){
    console.log("component DID MOUNT!")
  }
  componentWillReceiveProps(newProps){
    console.log('component WILL REVIEVE PROPS')
  }
  shouldComponentUpdate(newProps,newState){
    return true
  }
  componentWillUpdate(nextProps,nextState){
    console.log("component WILL UPDATE");
  }
  componentDidUpdate(prevProps,prevState){
    console.log('Component DID UPDATE')
  }
  // printData(){
  //   return(
  //     <div>
  //         <div>Ini Line satu</div>
  //         <div>Ini Line dua</div>
  //     </div>
  //   )
  // }
  // sayHello(name){
  //   alert("I'm Noob")
  // }

  // bermain dengan array
  // state = {
  //   listData : [
  //     { 
  //       title : "Belajar LAGI!!",
  //       subtitle:"walaupun gagal"},
  //   ],
  // };
  
  // onAddData = () => {
  //   this.state.listData.push({
  //     title : `Belajar LAGI!! ${this.state.listData.length + 1}`,
  //     subtitle : "walaupun gagal",
  //   });
  //   this.setState({
  //     listData :this.state.listData,
  //   });
  // };
  // onDeleteData = (index) => {
  //   console.log(index)
  //   this.state.listData.splice(index,1);
  //   this.setState({
  //     listData :this.state.listData,
  //   });
  // };
  //Di eksekusi setelah willmount
  render(){
    // const listData = this.state.listData.map(({title,subtitle},index) =>(
    //   <MyCard index={index} title={title} subtitle={subtitle} onDelete={this.onDeleteData} />
    // ));
    return(
      <div className="App">
         {/* <button className="btn btn-primary" onClick={this.onAddData}>Add Card</button>
          {listData} */}
        {/* <h1>{"Component App"}</h1> */}
          {/* <UserCard fromApp={{name:"Antony",alamat:"Tangsel"}} cetak = {this.printData}/>
          <IncrementNumber number={this.state.number} increment={this.increment}/>
          <DecrementNumber number={this.state.number} decrement={this.decrement}/> */}

          {/* <div style={{marginRight:"20px",marginLeft:"20px"}}>
            <MyCard data={this.data}/>
          </div> */}
          {/* <LoginComponent/> */}
          {/* <SampleForm/> */}
          {/* <FormBiodata /> */}
          {/* <Calculator/> */}
          <TodoComponent/>
      </div>
    );
  }
  // add = () => {
  //   this.setState({
  //     data : this.data.push()
  //   })
  //   console.log(this.data)
  // }
//   decrement = () =>{
//     if (this.state.number <= 0){
//       alert("Angka tidak bisa di kurangi lagi")
//     }else {
//       this.setState({
//         number : this.state.number - 1
//       })
//     }
//     console.log(this.state.number)
//   }

//   increment = ()=> {
//     this.setState({
//        number : this.state.number + 1
//     })
//     console.log(this.state.number)
//   }
}
export default App;
