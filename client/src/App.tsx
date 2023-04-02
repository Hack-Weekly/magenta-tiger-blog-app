import styled, {css} from "styled-components";
import styles from "./App.module.css";
import GlobalStyle from "./components/global-styles/GlobalStyle";
import { Button } from "@/components";

import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const CustomBtn = styled(Button)`
  text-transform: uppercase;
`

export default function App() {
  return (
    <main className={styles.main}>
      <div>
        <GlobalStyle />
        <Button variant={"primary"} shadow={true}>Primary</Button>
        <Button variant={"secondary"} shadow={true}>Secondary</Button>
        <Button variant="icon" filled='primary' icon={faBookmark} />
        <Button variant="icon" icon={faBookmark} />
        <Button variant="text">Text</Button>
        <CustomBtn variant="text" active={true}>Active Text</CustomBtn>
        <Button danger={true}>Danger</Button>
        <Button disabled={true}>Disabled</Button>
      </div>
    </main>
  );
}
