import React, { Component } from 'react';
import Machine from './Machine'

class Pinger extends Component{
    constructor(props){
        super(props);
        this.state = {

            ip_list: null,
        }
    }
    componentWillMount(){

    }

    render(){
        return(
            <div style={style.cardsOuter}>
               <div>
                   <h3>Machines on Subnet at SharedSpace Cobb</h3>
                   <p>2430 Herodian Way, Smyrna, GA 30080</p>
               </div>
                <Machine ip_list={this.props.ip_list} list_length={this.props.list_length}/>
            </div>
        )
    }
}
const style = {
    cardsOuter: {
        minHeight: "90vh",
     backgroundColor: "#D0CECF"

    },

};
export default Pinger;