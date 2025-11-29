export function formatDate(
	dateString: string,
	locale: string = "en-US",
	options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	},
): string {
	if (!dateString) return "";

	const date = new Date(dateString);

	if (isNaN(date.getTime())) return "";

	return date.toLocaleDateString(locale, options);
}
