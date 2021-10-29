import React, {useState, useEffect} from "react";

export const Counter = () => {   // functional component
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
}
useEffect(() => {
console.log('------Like did mount------') // if array is a second argument, without array it will work + did update
},[]) //dependencies array
return(
        <div>
            <h3>{count}</h3>
            <button className="btn" onClick={handleClick}>Click</button>
        </div>
    )
}

// export class Counter extends React.Component{
    
// constructor(props){
//     super (props)
//     this.state = {
//         count: 0,
//         name: 'Alex'
//     }
//     console.log('-------constructor-------')

// }
// componentDidMount(){
//     console.log('-------DidMount-------')
// }
// componentDidUpdate(prevProps, prevState){
//     console.log('-------DidUpdate-------',prevProps, prevState)
// }
// componentWillUnmount(){
//     console.log('-------WillUnmount-------')
// }

//     handleClick = () =>{
//         this.setState(prevState => ({count: prevState.count +1}))
//         //in cinsole.log count starts from 0, if need that starts from 1 should use ()=>{this.state.count}
//     }
//     render(){
//     console.log('-------render-------')

//         return(
//             <div>
//                 <h3>{this.state.count}</h3>
//                 <h3>{this.state.name}</h3>
//                 <button  className="btn" onClick={this.handleClick}>Click</button>
//             </div>
//         )
//     }
// }
