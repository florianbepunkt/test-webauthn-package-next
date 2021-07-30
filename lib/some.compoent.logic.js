import { startAssertion } from "@simplewebauthn/browser";
export const useSomeLogic = () => {
    const handleAuth = async () => {
        await startAssertion({ challenge: "", rpId: "test" });
    };
    return {
        data: "Hello",
        handleAuth,
    };
};
