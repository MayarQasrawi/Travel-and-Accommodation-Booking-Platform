import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

function UserAvatar() {
	const { user, logout } = useAuth();
	const [open, setOpen] = useState(false);

	return (
		<div className="relative inline-block">
			<Button className="h-8 w-8 rounded-full p-0" onClick={() => setOpen(!open)} aria-label="User profile">
				<span className="text-primary-foreground font-semibold">{user?.givenName[0]}</span>
			</Button>

			{open && (
				<div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-md z-10">
					<Button
						variant="ghost"
						className="w-full justify-start rounded-none px-4 py-2  "
						onClick={() => {
							logout();
							setOpen(false);
						}}
					>
						Logout
					</Button>
				</div>
			)}
		</div>
	);
}

export default UserAvatar;
