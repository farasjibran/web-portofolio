import HomeScreen from "./Screen/HomeScreen";

function App() {
  return (
   <>
   <nav className="navbar navbar-expand-lg fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="mdi mdi-menu"> </i></span>
        </button>
      <div className="container" style={{marginLeft: '-25%'}}>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
            <a href="javascript:;" className="close-menu"><i className="mdi mdi-close" /></a>
          </div>
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">My Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-success" href="mailto: farasjibran@gmail.com">Send Me Message!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <HomeScreen />
    
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <address>
                <p>Perum Griya Kalibaru Blok B2 No4</p>
                <p className="mb-4">Depok, Jawa Barat</p>
                <div className="d-flex align-items-center">
                  <p className="mr-4 mb-0">+62 81213517643</p>
                  <a href="mailto:farasjibran@gmail.com" className="footer-link">farasjibran@gmail.com</a>
                </div>
              </address>
              <div className="social-icons">
                <h6 className="footer-title font-weight-bold">
                  Social Share
                </h6>
                <div className="d-flex">
                  <a href="https://github.com/farasjibran"><i className="mdi mdi-github-circle" /></a>
                  <a href="https://www.facebook.com/muhammad.faras.1671/"><i className="mdi mdi-facebook-box" /></a>
                  <a href="https://www.instagram.com/farasjbrn/"><i className="mdi mdi-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <p className="mb-0 text-small pt-1">© {(new Date().getFullYear())}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
   </>
  )
}

export default App;
