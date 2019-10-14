import React,{Component} from 'react';
import Burgeringra from './burgeringra/burgeringra';

/* class burger extends Component{
    render(){
        return(
            <div>
            <Burgeringra type="test1"/>
            <Burgeringra type="custom1"/> 
            <Burgeringra type="custom2"/> 
            <Burgeringra type="custom3"/> 
            <Burgeringra type="test2"/>
                  
            </div>
        );
    }

} */

const burger=(props)=>{
    let customfood=[];
    /* const countingradience=Object.keys(props.ingra)
    .map(aa=>
        
         [...Array(props.ingra[aa])]
    .map((bb, index)=>{
            return <Burgeringra key={aa+index+bb} type={aa}/>;
        }
    ) 
    ) */
    /* {
        for(let i=0; i<props.ingra[aa];i++){
            customfood+=<Burgeringra key={aa+i} type={aa}/>;
        }
        
    } */
    const countingradience=Object.keys(props.ingra);

    for (let j=0; j<countingradience.length; j++){
        for(let i=0; i<props.ingra[countingradience[j]];i++){
            customfood.push(<Burgeringra key={countingradience[j]+i} type={countingradience[j]}/>);

        }
    }
    console.log(customfood);
    

    
        
    return (
        <div>
        <Burgeringra type='test1'/>
        {/* <Burgeringra type={props.ingradience.custom1}/> 
        <Burgeringra type={props.ingradience.custom2}/> 
        <Burgeringra type={props.ingradience.custom3}/>  */}
        {customfood}
        <Burgeringra type='test2'/>
        </div>
    )
    /* (ingra,index)=>{
    ingra.map(

    )
} */
    
};

export default burger;