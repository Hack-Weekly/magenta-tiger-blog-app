import Nav from "@/components/nav/Nav";
import { ChildrenProps } from "@/types/src/shared/children.types";

function SharedLayout({ children }: ChildrenProps) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default SharedLayout;
