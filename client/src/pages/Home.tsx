import StyledContainer from "@/components/StyledContainer";
import { PostsSection } from "@/components/home/PostsSection";
import { Sidebar } from "@/components/home/SidebarSection";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await fetch("/user", {
      credentials: "include",
    });
    const data = await response.json();
    const userId = data.userId;
    console.log(userId);
  }

  const userToken = Cookies.get();

  console.log(userToken);

  return (
    <StyledContainer variant="page">
      <Sidebar />
      <PostsSection />
    </StyledContainer>
  );
};

export default Home;
