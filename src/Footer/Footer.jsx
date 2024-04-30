import React from 'react';
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="p-6 bg-stone-300  dark:text-gray-800">
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Getting Started </h2>
			<div className="flex  flex-col space-y-2 text-sm dark:text-gray-600">
			<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Release Notes</a>
				<a rel="noopener noreferrer" href="#">Upgrade Guide</a>
				<a rel="noopener noreferrer" href="#">Using with Preprocessors</a>
				<a rel="noopener noreferrer" href="#">Optimizing for Production</a>
				<a rel="noopener noreferrer" href="#">Browser Support</a>
				<a rel="noopener noreferrer" href="#">IntelliSense</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Core Concepts</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Utility-First</a>
				<a rel="noopener noreferrer" href="#">Responsive Design</a>
				<a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
				<a rel="noopener noreferrer" href="#">Dark Mode</a>
				<a rel="noopener noreferrer" href="#">Adding Base Styles</a>
				<a rel="noopener noreferrer" href="#">Extracting Components</a>
				<a rel="noopener noreferrer" href="#">Adding New Utilities</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Customization</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Configuration</a>
				<a rel="noopener noreferrer" href="#">Theme Configuration</a>
				<a rel="noopener noreferrer" href="#">Breakpoints</a>
				<a rel="noopener noreferrer" href="#">Customizing Colors</a>
				<a rel="noopener noreferrer" href="#">Customizing Spacing</a>
				<a rel="noopener noreferrer" href="#">Configuring Variants</a>
				<a rel="noopener noreferrer" href="#">Plugins</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Community</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a className='flex items-center gap-1' rel="noopener noreferrer" href="#"><FaGithub></FaGithub>GitHub</a>
				<a className='flex items-center gap-1' rel="noopener noreferrer" href="#"><FaTwitter></FaTwitter>Twitter</a>
				<a className='flex items-center gap-1' rel="noopener noreferrer" href="#"><FaYoutube></FaYoutube>YouTube</a>
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="dark:text-gray-600">© Copyright 2024. All Rights Reserved.</span>
	</div>
</footer>
    );
};

export default Footer;