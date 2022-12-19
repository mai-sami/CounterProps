import React, { Component } from 'react'
import Counters from './Counters'
// var DataCounters = [
//     { name: "+", style: "CounterFirst" },
//     { name: "_", style: "CounterDec" },
//     ]
class Home extends Component {

    state = {
        counters: [
            { id: 0, itemsCounter: 0 },
            { id: 1, itemsCounter: 0 },
            { id: 2, itemsCounter: 0 },
        ]
    }
    onDecremnts = (event) => {
        const CounterDate = [...this.state.counters]
        console.log("sun", this.state.counters[1])
        console.log(CounterDate)
        var Date = event.currentTarget.id
        CounterDate[Date].itemsCounter++;
        console.log(this.setState({ CounterDate }))

    }

    InDecremnts = (event) => {
        const CounterDate = [...this.state.counters] //to Copy
      //  console.log("sun", this.state.counters[1])
       // console.log(CounterDate)
        var Date = event.currentTarget.id
        if( CounterDate[Date].itemsCounter<=0){
            return false
        }
        CounterDate[Date].itemsCounter--;
         console.log(this.setState({ CounterDate }))
    }


    render() {
        return (
            <div className='home'>
                 <div>
                    <Counters
                        onDecremnts={this.onDecremnts}
                        InDecremnt={this.InDecremnts}
                        counters={this.state.counters}>
                    </Counters>
                </div>


            </div >
        );
    }
}

export default Home