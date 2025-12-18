/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateButton from "../../CreatButton";
import { clickCreateButton, getters } from "./utils";

describe("Components/Admin/CreateButton", () => {
	const mockOnClick = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("Smoke Test", () => {
		beforeEach(() => {
			render(<CreateButton label="Hotel" onClick={mockOnClick} />);
		});
		it("renders create button", () => {
			expect(getters.getCreateButton("Hotel")).toBeInTheDocument();
		});

		it("button is keyboard accessible", async () => {
			const button = getters.getCreateButton("Hotel");
			button.focus();
			expect(button).toHaveFocus();

			await userEvent.keyboard("{Enter}");
			expect(mockOnClick).toHaveBeenCalled();
		});
		it("calls onClick handler when clicked", async () => {
			render(<CreateButton label="Room" onClick={mockOnClick} />);
			await clickCreateButton("Room");
			expect(mockOnClick).toHaveBeenCalledTimes(1);
		});
	});

	describe("Props Handling", () => {
		it("renders with custom icon", () => {
			const customIcon = <span data-testid="custom-icon">+</span>;
			render(<CreateButton label="Custom" onClick={mockOnClick} icon={customIcon} />);
			expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
		});

		it("renders without custom icon when not provided", () => {
			const { container } = render(<CreateButton label="Test" onClick={mockOnClick} />);
			const svgIcons = container.querySelectorAll("svg");
			expect(svgIcons.length).toBeGreaterThan(0);
		});
	});
});
