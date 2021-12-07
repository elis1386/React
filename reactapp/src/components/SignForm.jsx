import { useState } from "react"
import  Form   from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';






export const SignForm = ({ onSubmit, error, loading }) => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit(email, password)
    setEmail('')
    setPassword('')
  }
return (
    <Col sm={4} md={4} className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Control type="email" placeholder="Enter email" className="mb-3" value={email} onChange={handleChangeEmail}/>
        <Form.Control type="password" placeholder="Password" className="mb-3" value={password} onChange={handleChangePassword} />
        <Button variant="outline-warning" className="mb-4" type="submit" disabled={loading}>Submit</Button>
      </Form>
      {error &&  <h4>{error}</h4>}
    </Col>
)
}