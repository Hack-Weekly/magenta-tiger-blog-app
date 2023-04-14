import StyledContainer from "@/components/StyledContainer";
import { PostsSection } from "@/components/home/PostsSection";
import { Sidebar } from "@/components/home/SidebarSection";
import Cookies from "js-cookie";

const Home = () => {
  const userToken = Cookies.get("githubToken");

  console.log(userToken);

  return (
    <StyledContainer variant="page">
      <Sidebar />
      <PostsSection />
    </StyledContainer>
  );
};

export default Home;
