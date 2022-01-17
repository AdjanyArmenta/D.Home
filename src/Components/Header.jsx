function Header() {
	return (
		<div className="flex flex-col justify-center h-full bg-[url('../assets/header.jpg')] bg-no-repeat bg-cover bg-center rounded-3xl mt-10 p-20">
			<div className="my-16">
				<h1 className="text-5xl font-semibold">
					Let's find your <br /> dream Home
				</h1>
				<p className="mt-5 mb-10 text-lg">
					Living provides valuation sell, buy, motgage, invest, <br /> property
					and other real estate services
				</p>
				<a
					href="#"
					className=" w-max border-2 border-black rounded-lg px-8 py-2 font-bold"
				>
					Learn More
				</a>
			</div>
		</div>
	);
}

export default Header;