const Logo = () => {
	return (
		<div className="h-32 w-60 md:w-72 relative overflow-hidden">
			<img
				src="/assets/logo.svg"
				alt="logo"
				className="object-cover absolute inset-0 h-full w-full"
			/>
		</div>
	);
};

export default Logo;
