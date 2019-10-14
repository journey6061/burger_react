import React, {Component} from 'react';
//import classes from 'burgerbuilder.css'; 
import Burger from '../../component/burger/burger'
 
class burgerbuilder extends Component {
    state={
        ingradience:{
            custom1:2,
            custom2:3,
            custom3:5,
        }
    }

    render(){
        return(
            <>
            <Burger ingra={this.state.ingradience}/>
            <div>
                conbtroller
            </div>
            </>
        );
    }
}

export default burgerbuilder;