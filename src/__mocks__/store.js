const mockResponseValue = [
    {
        html_url: "https://github.com/v/2048-ai",
        description: "AI for the 2048 game",
    },
];

export default {
    get: jest.fn().mockResolvedValue(mockResponseValue),
};
