import React,{useContext,useState} from 'react'
    import ClientSignUp from './ClientSignUp'
function OwnerSignUpForm(props) {
  console.log(props);
  console.log('advsfbdgn');
    const[ClientSignUpData]=useState('http://localhost:4000/owner/signup')
  return (
  <ClientSignUp loginlink={ClientSignUpData} onChangeLogin={props.ChangeLogin}></ClientSignUp>
  )
}

export default OwnerSignUpForm