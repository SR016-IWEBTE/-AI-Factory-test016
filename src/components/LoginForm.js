const { validateCredentials } = require('../utils/formValidation');
const { checkLoginAttempts } = require('../utils/loginAttempts');
const ErrorMessages = require('./ErrorMessages');

class LoginForm {
  handleLogin(credentials) {
    try {
      validateCredentials(credentials.username, credentials.password);
      if (checkLoginAttempts(credentials.username)) {
        ErrorMessages.displayError('Too many login attempts, please try again later');
        return;
      }
      // Simulate a successful login
      ErrorMessages.displayError('Login successful');
      console.log('Redirecting to Dashboard...');
      // Implementing the redirection to the dashboard logic
      this.redirectToDashboard();
    } catch (error) {
      ErrorMessages.displayError(error.message);
    }
  }

  redirectToDashboard() {
    // Logic for redirection to the dashboard
    console.log('You have been redirected to the dashboard.');
  }
}

module.exports = LoginForm;
