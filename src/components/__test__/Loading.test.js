import { render, screen } from "@testing-library/react";
import LoadingState from "../LoadingState";

describe("Loading State", () => {
    test("should render an input element", () => {
        render(<LoadingState />);
        const loadingElement = screen.getByTestId("spinner");
        expect(loadingElement).toBeInTheDocument();
    });
});
