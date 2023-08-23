import React, { Component } from 'react'
import { useNavigate ,Link } from 'react-router-dom'
// Higher Order Function
const HigherOrderFunction = (WebNavigator)=>{
    const ForwardRef = React.forwardRef((props,ref)=>{
const Navigate = useNavigate()
return <WebNavigator {...props} ref={ref} Navigate={Navigate}  />
    })
    return ForwardRef
}
class Login extends Component {
    gotoHome=()=>{
        console.log('col')
// Navigate(this.props)
console.log(this.props)
const {Navigate} =this.props
Navigate('/home')
    }
  render() {
    return (
      <div>
        Login
        <button onClick={()=>this.gotoHome()} >Goto Home</button>
        <Link to='/home'>Goto Home</Link>
      </div>
    )
  }
}
export default HigherOrderFunction(Login)
