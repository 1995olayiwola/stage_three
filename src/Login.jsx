import React from 'react';
import {useHistory} from  'react-router-dom';
import Parse from 'parse';
import Loading from './Loading';


import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

const Login = () => {
  const [loading,setLoading] = React.useState(false)
  const history = useHistory()
  const [formValues,setFormValues] = React.useState({
    email:"",password:''
  })
  const handleChange = (e)=>{
    setFormValues(()=>{
      return {
        ...formValues,[e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit= async(e)=>{
e.preventDefault();
setFormValues(async()=>{
  console.log(formValues)
  
 
try {
  
  const user = await Parse.User.logIn(formValues.email, formValues.password);
  setLoading(true);
  alert('Login successful, you are wellcome')
  setLoading(false)
      history.push('/');
 
} catch (error) {
  
  alert("Error: " + error.code + " " + error.message);
}
  
})
  }
  return (
    
    <div>




<MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src=''/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">
           STAGE THREE
          </span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={formValues.email} name="email" onChange={handleChange}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={formValues.password} name="password" onChange={handleChange} />

          {loading && <Loading/>}
        <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Login</MDBBtn>
        <a className="small text-muted" href="#!">Forgot password?</a>
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to='/register'>Register here</Link></p>

        <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>

   
 
    </div>

  )
}

export default Login