import * as React from "react";
import { PostTopic } from "@/types/src/posts/post.types";
import { useState } from "react";

export interface FilterContextValue {
  selectedTopic: PostTopic | null;
  selectedKeyword: string | null;
  changeSelectedTopic: (topic: PostTopic | null) => void;
  changeSelectedKeyword: (keyword: string | null) => void;
}

export const FilterContext = React.createContext<FilterContextValue | null>(
  null
);

const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedTopic, setSelectedTopics] = useState<PostTopic | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  const changeSelectedTopic = (topic: PostTopic | null) => {
    setSelectedKeyword(null);
    setSelectedTopics(topic);

    window.scrollTo(0, 0);
  };

  const changeSelectedKeyword = (keyword: string | null) => {
    setSelectedTopics(null);
    setSelectedKeyword(keyword);

    window.scrollTo(0, 0);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedTopic,
        selectedKeyword,
        changeSelectedTopic,
        changeSelectedKeyword,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
