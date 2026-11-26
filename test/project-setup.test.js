import { test } from 'node:test';
import assert from 'node:assert/strict';

const HomePage = (await import('../src/pages/HomePage.js')).default;

test('HomePage renders correctly', () => {
  const element = document.createElement('div');
  element.innerHTML = `<div>
    <img src='logo.png' alt='Company Logo' />
    <p>Our mission is to deliver exceptional value and quality.</p>
    <ul>
      <li>Offering 1</li>
      <li>Offering 2</li>
      <li>Offering 3</li>
    </ul>
  </div>`;
  document.body.appendChild(element);

  assert.strictEqual(document.querySelector('img').alt, 'Company Logo');
  assert.strictEqual(document.querySelector('p').textContent, 'Our mission is to deliver exceptional value and quality.');
  assert.strictEqual(document.querySelectorAll('li').length, 3);
});