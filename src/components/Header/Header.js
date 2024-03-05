import React from 'react'

const Header = () => {
  return <header>
  <div className="logo">
    <img src="/logo.png" alt="Company Logo" />
    <h1>Company Name</h1>
  </div>
  <nav>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact </li>
    </ul>
  </nav>
</header>
}

export default Header