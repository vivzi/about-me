import './App.css'
import heroImage from './assets/img1.png'

function App() {
  return (
    <main>
      <div className="hero">
        <img className="hero-img" src={heroImage}/>
        <p className="hero-img-subheader">I LIKE THINGS THAT MAKE NOISE</p>
        <p className="hero-header">Hey, I'm</p>
        <span className="hero-name">Vivzi.</span>
        <div className="pointers-container">
          <span className="hero-pointer">15 YEARS OLD</span>
          <p className="hero-pPointer">PROGRAMMING AND PLAYING (guitar, duh)</p><br />
        </div>
        <p className="hero-description">I’m into programming, playing guitar and listening to music. This is a place for the things I make and the things I’m figuring out.</p>
        <hr />
        <div className="hobbies">
          <div className="hobby">
            <p className="hobby-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48px" width="48px" fill="292929"><path d="M12,33.3L2.7,24L12,14.7l2.1,2.1L6.95,24l7.15,7.2L12,33.3Zm8.6,6.65l-2.9-0.9l9.75-31L30.3,8.9L20.6,39.95ZM36,33.3l-2.1-2.1L41.05,24L33.9,16.8L36,14.7L45.3,24L36,33.3Z"/></svg> Programming</p>
            <p className="hobby-description">Sometimes I make things but mostly I break things</p>
          </div>
          <div className="hobby">
            <p className="hobby-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48px" width="48px" fill="292929"><path d="M14.33,39.83q-2.18-2.18-2.18-5.33t2.18-5.32T19.65,27q1.4,0 2.52,0.4t1.98,1.1V6h11.7v6.75h-8.7V34.5q0,3.15-2.18,5.33T19.65,42t-5.33-2.17Z"/></svg> Guitar</p>
            <p className="hobby-description">Six strings too many for my skill level</p>
          </div>
          <div className="hobby">
            <p className="hobby-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48px" width="48px" fill="292929"><path d="M34,36V12h3V36H34ZM11,36V12L28.3,24L11,36Zm3-12Zm0,6.25L23.05,24L14,17.75v12.5Z"/></svg> Listening to Music</p>
            <p className="hobby-description">The soundtrack to everything else</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;