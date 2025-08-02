import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-section'>
        <img src='/kitty.png'className='logo'></img>
        <p>PV</p>
      </div>
      <ul>
        <li><a className='navbar-item' href='#home'>home</a></li>
        <li><a className='navbar-item' href='#home'>projects</a></li>
        <li><a className='navbar-item' href='#home'>resume</a></li>
        <li><a className='navbar-item' href='#home'>contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar
