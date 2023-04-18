import { useState } from "react";

export default function useBookmark(postId?: string) {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}post/${postId}`;

  //   useEffect(() => {
  //     isBookmarkedPost();
  //   }, []);

  //   const isBookmarkedPost = async () => {
  //     try {
  //       const response = await axios.get(url);
  //       setIsBookmarked(response.data.isBookmarked);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  async function toggleBookmark() {
    setIsBookmarked(!isBookmarked);

    try {
    } catch (error) {}
  }

  console.log(isBookmarked);
}
