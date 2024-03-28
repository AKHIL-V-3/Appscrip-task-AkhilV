
import "../../Styles/header.css"
import { IconHeart, IconMenu, IconMenu2, IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react';
const Header = () => {

    // const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (

        <>
            <div className="header">
                <div className="Navbar-top">
                    <div className="NavBar-left">

                        <div className="hamburger-button">
                            <IconMenu2/>
                        </div>

                        <div className="left-img-div">
                            <img className="leftside-logo-image" src="https://www.keralam.me/wp-content/uploads/2020/08/onam-pookalam-designs-outline-2.jpg" alt="" />
                        </div>

                    </div>
                    <div className="NavBar-center">
                        <h1 className="logo-h1">LOGO</h1>
                    </div>
                    <div className="NavBar-right">
                        <div className="navbar-icons">
                            <IconSearch />
                            <IconHeart />
                            <IconShoppingBag />
                            <IconUser className="userIcon" />
                            <select className="select-eng" name="" id="">
                                <option selected value="">ENG</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="navbar-bottom">
                    <div className="menu-items">
                        <p>SHOP</p>
                        <p>SKILLS</p>
                        <p>STORIES</p>
                        <p>ABOUT</p>
                        <p>CONTACT US</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header