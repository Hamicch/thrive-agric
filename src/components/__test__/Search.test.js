import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

describe("Search", () => {
    test("should render an input element", () => {
        render(<Search />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeInTheDocument();
    });

    test("should render an input placeholder", () => {
        render(<Search />);
        const inputElement = screen.getByPlaceholderText(/Search for a user/i);
        expect(inputElement).toBeInTheDocument();
    });

    test("should render an input value on change", () => {
        const handleSearch = jest.fn();
        render(<Search value='hamicch' onChange={handleSearch} />);
        const inputElement = screen.getByDisplayValue(/hamicch/i);
        fireEvent.change(inputElement, { target: { value: "hamicch" } });
        expect(inputElement).toHaveValue("hamicch");
    });
});
