import StyledContainer from "@/components/StyledContainer";
import { PostsSection } from "@/components/home/PostsSection";
import { Sidebar } from "@/components/home/SidebarSection";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Home = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get(`${apiUrl}user`);
      const userId = response.data.userId;
      console.log(userId);
    } catch (error) {
      console.log(error);
    }
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
