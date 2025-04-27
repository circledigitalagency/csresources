import { HugeiconsProps } from "hugeicons-react";

const PrinciplesCard = ({
	icon: Icon,
	head,
	description,
}: {
	icon: React.FC<Omit<HugeiconsProps, "ref">>;
	head: string;
	description: string;
}) => {
	return (
		<div className="flex flex-col space-y-4 border-2 border-lightBlue rounded-md sm:w-56 w-40 h-52 sm:p-4 p-2">
			<div className="flex sm:flex-row flex-col space-y-2 sm:space-x-3 items-center justify-center w-full sm:h-10">
				<Icon size={30} className="text-mainBlue" />
				<p className="sm:text-sm text-xs sm:text-left text-center font-medium w-full">
					{head}
				</p>
			</div>
			<p className="font-light text-xs text-center sm:text-left">
				{description}
			</p>
		</div>
	);
};

export default PrinciplesCard;
