import './nav.css';
import { useMediaQuery } from 'react-responsive';
import { CgMenuGridR } from 'react-icons/cg';
import { useState } from 'react';

const Nav = () => {

    const [navMobile, setNavMobile] = useState("none");

    const isMobile = useMediaQuery({ query: '(min-width: 320px) and (max-width: 479px)' })
    const isDesktop = useMediaQuery({ minWidth: 480 })

    const myFunction = (e) => {
        e.preventDefault();
        if (navMobile === 'none') {
            setNavMobile("block")
        } else if ("block") {
            setNavMobile("none")
        }
    }

    const mobileJSX = (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="welcome">
                    <h1>Welcome!  <span>Mr.David</span></h1> {/* name from Input {name}*/}
                </div>
                {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
                <a href={""} className="menu-icon" onClick={myFunction}>
                    <CgMenuGridR className="mobile-menu" style={{ color: '#fff', width: '2rem', height: '2rem' }} />
                </a>
                <div className="btn-mobile" style={{ display: navMobile }}>
                    <button type="button" className="btn btn-outline-light btnNav">HOME</button>
                    <button type="button" className="btn btn-outline-light btnNav">NEW & EVENT</button>
                    <button type="button" className="btn btn-outline-light btnNav">ABOUT US</button>
                    <button type="button" className="btn btn-outline-light btnNav">LOGOUT</button>
                </div>


            </nav>



        </div>
    )
    const DestopJSX = (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="welcome">
                    <h1>Welcome!  <span>Mr.David</span></h1> {/* name from Input {name}*/}
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-light btnNav">HOME</button>
                    <button type="button" className="btn btn-outline-light btnNav">NEW & EVENT</button>
                    <button type="button" className="btn btn-outline-light btnNav">ABOUT US</button>
                    <button type="button" className="btn btn-outline-light btnNav">LOGOUT</button>
                </div>


            </nav>
        </div>
    )
    return (
        <div>
            {isMobile && mobileJSX}

            {isDesktop && DestopJSX}
        </div>
    )
}

export default Nav;
