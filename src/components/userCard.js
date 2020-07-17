import React from "react";
class UserCard extends React.Component{

    componentWillMount(){
        console.log("component will MOUNT CARD")
      }
    
      // DI eksekusi setelah render
      componentDidMount(){
        console.log("component DID MOUNT! CARD")
      }
      // 
      componentWillReceiveProps(newProps){
        console.log('component WILL REVIEVE PROPS CARD')
      }
      shouldComponentUpdate(newProps,newState){
        return true
      }
      componentWillUpdate(nextProps,nextState){
        console.log("component WILL UPDATE CARD");
      }
      componentDidUpdate(prevProps,prevState){
        console.log('Component DID UPDATE CARD')
      }
      //Di eksekusi setelah willmount

    render(){
        let {name, alamat} = this.props.fromApp
        let cetak = this.props.cetak()

        return ( 
            <div className="card" style={{width : '30rem'}}>
                <div className="card-body">
                    <h5 className="card-title">User Card</h5>
                    <p>{name}</p>
                    <p>{alamat}</p>
                    <h2>{cetak}</h2>
                    {/*{props.children}*/}
                    <a href="#" className="card-link">{"Lihat lebih..."}</a>
                </div>
            </div>
        )
    }
}
export default UserCard