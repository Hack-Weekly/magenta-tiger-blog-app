import StyledContainer from "@/components/StyledContainer";
import { EnterLayout } from "@/components/enter/EnterLayout";

const Enter = () => {
  async function getAccessToken(code: string) {
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: "<your_client_id>",
          client_secret: "<your_client_secret>",
          code,
        }),
      }
    );

    const data = await response.json();
    return data.access_token;
  }

  async function getUserInfo(token: string) {
    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();
    return data;
  }

  return (
    <StyledContainer variant="page">
      <EnterLayout />
    </StyledContainer>
  );
};

export default Enter;
