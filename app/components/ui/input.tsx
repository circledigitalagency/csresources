import * as React from "react";

import { cn } from "~/lib/utils";
import { Button } from "./button";
import { ViewIcon, ViewOffSlashIcon } from "hugeicons-react";

interface InputProps extends React.ComponentProps<"input"> {
	label?: string;
	error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, label, error, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false);

		const togglePassword = () => {
			setShowPassword(!showPassword);
		};

		const inputType =
			type === "password" ? (showPassword ? "text" : "password") : type;

		return (
			<div className="flex-col gap-1">
				<p className="text-sm text-black font-normal">{label}</p>

				<div
					className={cn(
						"flex h-9 w-full rounded-full border border-lightBlue bg-transparent px-3 py-1 text-base shadow-sm transition-colors",
						className
					)}
				>
					<input
						type={inputType}
						ref={ref}
						{...props}
						className="w-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:file:text-zinc-50 dark:placeholder:text-zinc-400 "
					/>
				</div>
				{error && <span className="text-red-500 text-sm">{error}</span>}
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
