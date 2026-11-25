import React, { useState } from 'react';
import { validateContactForm } from '../components/InputValidation';

export function renderContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateContactForm({ name, email, message });
        if (!isValid) {
            setError('Invalid input. Please check your entries.');
            return;
        }
        // handle form submission
    };

    return (
        <>
            <div>
                <h1>Contact Us</h1>
                <p>Our mission is to provide excellent service.</p>
                <h2>Main Offerings</h2>
                <ul>
                    <li>Offering 1</li>
                    <li>Offering 2</li>
                    <li>Offering 3</li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' required />
                <button type='submit'>Send</button>
                {error && <p>{error}</p>}
            </form>
        </>
    );
}