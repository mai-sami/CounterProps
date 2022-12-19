 import React, { Component } from 'react';
import './Counter.css'
// var DataCounters = [
//     { name: "+", style: "CounterFirst" },
//     { name: "_", style: "CounterDec" },
// ]
class Counters extends Component {
    
     
    render() {         
        const { counters, InDecremnt, onDecremnts } = this.props;

        return (
            <div className='contentCounter'>
                {counters.map((item,index) =>
                    <div className='counterRow'>
                     {/* <p className='totals' key={index}>{index}{item.itemsCounter}</p> */}
                        <p className='totals' >{item.itemsCounter}</p>
                        <button id={item.id} onClick={onDecremnts}  className='CounterFirst'>+</button>
                        <button id ={item.id}onClick={InDecremnt} className='CounterDec'>-</button>
                    </div>
                )}
            </div>
 

        );
    }
}

export default Counters;