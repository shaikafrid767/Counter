import React from 'react';
import './App.css';
export default class Count extends React.Component{
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    increase(){
        if(this.state.count<10){
            this.setState({
                count:this.state.count+1   
            },()=>{
                console.log(this.state.count);
            });
        }
    }
    decrease(){
        if(this.state.count>1){
            this.setState({
                count:this.state.count-1   
            },()=>{
                console.log(this.state.count);
            });
        }
    }
    render(){
        return(
            <>
                <h1>Interactive Counter</h1>
                <p id='count'>{this.state.count}</p>
                <div className='container'>
                    <button onClick={()=>this.increase()}>+</button>
                    <button onClick={()=>this.decrease()}>-</button>
                </div>
            </>
        );
    }
}