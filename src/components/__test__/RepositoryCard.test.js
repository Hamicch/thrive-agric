import { render, screen } from "@testing-library/react";
import RespositoryCard from "../RespositoryCard";

describe("Respository Card", () => {
    test("should render at least one repository card", async () => {
        render(<RespositoryCard />);
        const respositoryCard = await screen.findByTestId("repocard");
        expect(respositoryCard).toBeInTheDocument();
    });
});
