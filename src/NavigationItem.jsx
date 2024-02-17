import { Link, useMatch } from "react-router-dom";

export default function NavigationItem({ children, to }) {
    const current = useMatch(to);

    const setActive = current ? 'navigation__item navigation__item--active' : 'navigation__item';
    return (
        <li className={setActive}>
            <Link to={to}>{children}</Link>
        </li>
    )
}