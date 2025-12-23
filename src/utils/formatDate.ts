export function formatDate(
	dateInput: string | Date,
	locale: string = "en-US",
	options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	},
): string {
	if (!dateInput) return "";

	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

	if (Number.isNaN(date.getTime())) return "";

	return date.toLocaleDateString(locale, options);
}
