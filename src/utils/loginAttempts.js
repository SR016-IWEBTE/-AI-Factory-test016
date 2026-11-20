let attempts = {};
const MAX_ATTEMPTS = 5;

function checkLoginAttempts(username) {
  if (!attempts[username]) attempts[username] = 0;
  attempts[username]++;
  return attempts[username] > MAX_ATTEMPTS;
}

module.exports = { checkLoginAttempts };
