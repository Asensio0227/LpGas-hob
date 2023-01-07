import React,{useState,useRef,useEffect} from 'react'
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { navList } from '../data'; 

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const LinksRef = useRef(null);
  const containerRef = useRef(null);

  const openNav = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const linksHeight = LinksRef.current.getBoundingClientRect().height;

    if (isShow) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = "0px";
    }
  }, [isShow]);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h1>
            LpGas Hob
          </h1>
          <button className="nav-btn" onClick={openNav}>
            <FaBars/>
          </button>
        </div>
        <div className="nav-links" ref={containerRef}>
          <ul className="links" ref={LinksRef}>
          {navList.map((venom) => {
            const { id, path, text } = venom;
            return (
              <li key={id}>
              <Link
                to={path}
              >
                {text}
              </Link>
              </li>
            )
          })}
          </ul>
        </div>
     </div>
    </nav>
  )
}

export default Navbar