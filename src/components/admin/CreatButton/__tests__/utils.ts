import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const getters = {
	getCreateButton: (label: string) => screen.getByRole("button", { name: new RegExp(`create\\s+${label}`, "i") }),
	getAllButtons: () => screen.getAllByRole("button"),
	getButtonByText: (text: RegExp | string) => screen.getByRole("button", { name: text }),
};

export const clickCreateButton = async (label: string) => {
	const button = getters.getCreateButton(label);
	await userEvent.click(button);
};
