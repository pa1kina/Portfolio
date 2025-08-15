import "./Landing.scss"

const Landing = () => {
  return (
    <div className='landing' id='home'>
      <img className='landing-img' src="/desktop portfolio.png"></img>
      <img className='landing-img-mobile' src="/portfolio visuals MOBILE.png"></img>
      <div className="background-letters">
        <p className="background-letters p">P</p>
        <p className="background-letters v">V</p>
      </div>
    </div>
  )
}

export default Landing
