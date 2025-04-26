const Header = ({ title }: { title: string }) => {
	return (
		<div className="flex flex-col items-center">
			<h2 className="text-2xl font-medium text-center mb-4">{title}</h2>
			<div className="w-20 h-1 bg-gold rounded-full" />
		</div>
	);
};

export default Header;
