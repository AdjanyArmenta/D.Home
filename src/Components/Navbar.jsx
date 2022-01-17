function Navbar() {
	return (
		<nav className="flex justify-between mt-6 mx-7">
			<div className="flex">
				<h2 className="font-bold text-xl">D.Home</h2>
				<div className="ml-16">
					<a href="#" className="pb-1.5 border-b-4 border-black">Home</a>
					<a href="#" className="ml-9">About us</a>
					<a href="#" className="ml-9">Our Services</a>
					<a href="#" className="ml-9">Testimonial</a>
					<a href="#" className="ml-9">Contact us</a>
				</div>
			</div>
			<div className="">
				<button className="mr-9">Login</button>
				<button className="bg-neutral-900 text-white text-center px-6 py-1.5 rounded-lg">
					Register
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
