import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function UserAvatar() {
	return (
		<Avatar className="h-8 w-8" aria-label="User profile">
			<AvatarImage src="/path-to-user-image.jpg" alt="User avatar" />
			<AvatarFallback className="bg-gray-300 rounded-full flex items-center justify-center h-8 w-8">U</AvatarFallback>
		</Avatar>
	);
}

export default UserAvatar;
