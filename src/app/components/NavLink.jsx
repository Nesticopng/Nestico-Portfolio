import { Link as ScrollLink } from 'react-scroll';

const NavLink = ({ href, title }) => {
    return (
        <ScrollLink
            to={href}
            smooth={true}
            duration={500}
            className='block py-2 pl-3 pr-4 font-medium text-[#ADB7BE] sm:text-xl cursor-pointer transition duration-300 ease-in-out rounded md:p-0 hover:text-white'
        >
            {title}
        </ScrollLink>
    );
};

export default NavLink;