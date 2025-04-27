const Logo = () => {
	return (
		<div className="h-24 w-60 relative overflow-hidden">
			<img
				src="/assets/logo.svg"
				alt="logo"
				className="object-cover absolute inset-0 h-full w-full"
			/>
		</div>
	);
};

export default Logo;
