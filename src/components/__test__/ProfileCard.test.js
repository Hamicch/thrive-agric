import { render, screen } from "@testing-library/react";
import ProfileCard from "../ProfileCard";

describe("Profile Card", () => {
    test("should render an input element", () => {
        render(<ProfileCard />);
        const inputElement = screen.getByTestId("prof-card");
        expect(inputElement).toBeInTheDocument();
    });
});
