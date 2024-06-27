// authService.js

const login = (username, password) => {
    // Simulating a login API call or authentication logic
    if (username === 'user' && password === 'password') {
      // Dummy token for demonstration purposes
      const token = 'dummy_token';
      localStorage.setItem('token', token);
      return token;
    } else {
      throw new Error('Invalid username or password');
    }
  };
  
  const logout = () => {
    // Remove token from localStorage on logout
    localStorage.removeItem('token');
  };
  
  const getToken = () => {
    // Retrieve token from localStorage
    return localStorage.getItem('token');
  };
  
  const isAuthenticated = () => {
    // Check if token exists in localStorage to determine authentication status
    return !!localStorage.getItem('token');
  };
  
  export { login, logout, getToken, isAuthenticated };
  