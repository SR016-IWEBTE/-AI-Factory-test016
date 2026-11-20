const LoginForm = require('../components/LoginForm');
const ErrorMessages = require('../components/ErrorMessages');

jest.mock('../components/ErrorMessages');

describe('LoginForm', () => {
  let loginForm;

  beforeEach(() => {
    loginForm = new LoginForm();
  });

  test('successful login', () => {
    console.log = jest.fn();
    loginForm.handleLogin({ username: 'user', password: 'pass' });
    expect(ErrorMessages.displayError).toHaveBeenCalledWith('Login successful');
    expect(console.log).toHaveBeenCalledWith('Redirecting to Dashboard...');
    expect(console.log).toHaveBeenCalledWith('You have been redirected to the dashboard.');
  });

  test('invalid username and password', () => {
    loginForm.handleLogin({ username: '', password: '' });
    expect(ErrorMessages.displayError).toHaveBeenCalledWith('Username is required');
    expect(ErrorMessages.displayError).toHaveBeenCalledWith('Password is required');
  });

  test('too many login attempts', () => {
    const username = 'user';
    for (let i = 0; i < 6; i++) {
      loginForm.handleLogin({ username, password: 'wrong' });
    }
    expect(ErrorMessages.displayError).toHaveBeenCalledWith('Too many login attempts, please try again later');
  });
});
