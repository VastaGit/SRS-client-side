
const simulateUserAuthentication = () => {
    // Mock user data
    const mockUserData = {
      username: 'john_doe',
      role: 'advisor', // Change role as needed for testing
    };
  
    // Store user information in local storage
    localStorage.setItem('user', JSON.stringify(mockUserData));
  };
  
  export default simulateUserAuthentication;
  