function Navbar() {
	return (
		<nav className="flex justify-between">
			<div className="options">
				<h2>D.Home</h2>
				<a href="#">Home</a>
				<a href="#">About us</a>
				<a href="#">Our Services</a>
				<a href="#">Testimonial</a>
				<a href="#">Contact us</a>
			</div>
			<div className="login">
				<a href="#">login</a>
				<a href="#">Register</a>
			</div>
		</nav>
	);
}

export default Navbar;
