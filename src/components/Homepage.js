import React, { useState } from 'react';

function Homepage() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div className="homepage">
            <h1>Spacey</h1>
            <img src="/path/to/spacey-logo.png" alt="Spacey Logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/services">Services</a>
                        {dropdownVisible && (
                            <ul className="dropdown">
                                <li><a href="/services/consulting">Consulting</a></li>
                                <li><a href="/services/development">Development</a></li>
                                <li><a href="/services/design">Design</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            <section className="key-features">
                <h2>Key Features</h2>
                <div className="feature">
                    <img src="/path/to/feature1.png" alt="Feature 1" />
                    <p>Feature 1 Description</p>
                </div>
                <div className="feature">
                    <img src="/path/to/feature2.png" alt="Feature 2" />
                    <p>Feature 2 Description</p>
                </div>
            </section>
        </div>
    );
}

export default Homepage;