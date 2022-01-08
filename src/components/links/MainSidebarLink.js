import React from 'react';
import { NavLink } from 'react-router-dom';

const MainSidebarLink = ({to, children}) => {
	return (
		<NavLink exact to={to} activeClassName="bg-grey-300 font-bold" className="px-4 py-2 inline-block w-full rounded-lg">{children}</NavLink>
	)
};

export default MainSidebarLink;