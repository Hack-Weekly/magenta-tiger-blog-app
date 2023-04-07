export type DropdownProps = {
  name?: string;
  username?: string;
  navRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
  isDropdownOpen?: boolean;
};
