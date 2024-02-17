import { Outlet } from "react-router-dom";
import NavigationItem from "./NavigationItem";


const Layout = () => {

    // const setActive = ({ isActive }) => isActive ? 'active__item' : '';

    return (
        <>
            <div className='header'>
                {/* <NavLink className = {setActive} to = '/'>Main</NavLink>
                <NavLink className = {setActive} to = '/settings'>Settings</NavLink>
                <NavLink className = {setActive} to  = '/news'>News</NavLink> */}

                <ul className="navigation">
                    <NavigationItem to = '/' >Main</NavigationItem>
                    <NavigationItem to = '/settings' >Settings</NavigationItem>
                    <NavigationItem to = '/news' >News</NavigationItem>
                </ul>
            </div>

            <div className="content">
                <Outlet />
            </div>

            <div className='footer'>
                2024 - Test&copy; All right reserved
            </div>
        </>
            
    )
}

export default Layout;