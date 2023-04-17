import { BookmarkProps } from "@/types/src/props/bookmarkProps.types";
import { Bookmark } from "@/types/src/styled-components/bookmark.types";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { StyledBookmarkContainer } from "./StyledBookmarkButton";

const BookmarkButton = ({ userId, selectedPostId }: BookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = async () => {
    const bookmarksUrl = `${apiUrl}bookmarks`;

    try {
      const response = await axios.get(bookmarksUrl);

      const bookmarks: Bookmark[] = response.data;

      const filteredBookmark = bookmarks.some(
        bookmark =>
          bookmark.postId === selectedPostId && bookmark.userId === userId
      );

      if (filteredBookmark) {
        setIsBookmarked(true);
      } else {
        setIsBookmarked(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleBookmark = async () => {
    const bookmarkUrl = `${apiUrl}bookmark/${userId}/${selectedPostId}`;

    try {
      const response = await axios.post(bookmarkUrl);

      const { userId, postId } = response.data;

      if (!userId && !postId) {
        setIsBookmarked(false);
      }

      if (userId && postId && postId === selectedPostId) {
        setIsBookmarked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!userId || !selectedPostId) {
    return null;
  }

  return (
    <StyledBookmarkContainer>
      {isBookmarked ? (
        <Button
          variant="secondary"
          icon={faBookmark}
          onClick={toggleBookmark}
        />
      ) : (
        <Button
          variant="icon"
          transparent
          icon={faBookmark}
          onClick={toggleBookmark}
        />
      )}
    </StyledBookmarkContainer>
  );
};

export default BookmarkButton;
