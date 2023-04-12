import StyledContainer from "@/components/StyledContainer";
import { PostsSection } from "@/components/home/PostsSection";
import { Sidebar } from "@/components/home/SidebarSection";

const Home = () => {
  return (
    <StyledContainer variant="page">
      <Sidebar />
      <PostsSection />
    </StyledContainer>
  );
};

export default Home;
