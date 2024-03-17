import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../../App.css';

function Hero() {
  return (
    <div className="p-0 text-center bg-image hero_rounded my-5">
        <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white px-5 col-9">
                <h1 className="mb-3 display-4 fw-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-3">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <a className="btn btn-success btn-lg rounded mx-3" href="#!" role="button">Explore Now</a>
                <a className="btn btn-outline-light btn-lg rounded mx-3" href="#!" role="button">Our Feedback</a>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;