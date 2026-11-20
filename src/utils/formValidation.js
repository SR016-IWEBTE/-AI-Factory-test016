function validateCredentials(username, password) {
  if (!username) throw new Error('Username is required');
  if (!password) throw new Error('Password is required');
}

module.exports = { validateCredentials };
