import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const { login, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      return setError('Password must be at least 6 characters long');
    }

    try {
      setError('');
      setLoading(true);
      
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      
      navigate('/'); 
    } catch (error: any) {
      setError(`Failed to ${isSignUp ? 'create account' : 'log in'}.`);
    }

    setLoading(false);
  };

  const handleGoogleLogin = async() => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate('/');
    } catch (error: any) {
      setError(`Failed to sign in with Google: ${error.message}`);
    }
    setLoading(false);
  }
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              
              <Button disabled={loading} className="w-100" type="submit" variant="primary">
                {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Log In')}
              </Button>
            </Form>
            
            <div className='m-3'>
              <GoogleButton
                onClick={handleGoogleLogin}
                disabled={loading}
                style={{ width: '100%' }}
              />
            </div>

            <div className="w-100 text-center mt-3">
              <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Log In' : 'Sign Up'}
              </Button>
            </div>

            
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};