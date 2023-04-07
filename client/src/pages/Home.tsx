import StyledContainer from "@/components/StyledContainer";
import { Sidebar } from "@/components/home/SidebarSection";
import { PostsSection } from "@/components/home/PostsSection";

const Home = () => {
  return (
    <StyledContainer variant="page">
      <Sidebar />
      <PostsSection />
    </StyledContainer>
  );
};

export default Home;
