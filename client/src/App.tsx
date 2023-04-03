import styled, {css} from 'styled-components';
import styles from './App.module.css';
import GlobalStyle from './components/global-styles/GlobalStyle';
import { Button } from '@/components';

// import { faBookmark } from '@fortawesome/free-regular-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

// const CustomBtn = styled(Button)`
//   text-transform: uppercase;
// `

export default function App() {
  return (
    <main className={styles.main}>
      {/* CODE FOR TESTING BUTTON I CAN'T SET UP STORYBOOK :')
      <div>
        <GlobalStyle />
        <Button variant='primary' shadow>Primary</Button>
        <Button variant='secondary' shadow>Secondary</Button>
        <Button variant='secondary' shadow transparent icon={faGithub} bold>Sign up with GitHub</Button>
        <Button variant='secondary' icon={faBookmark} />
        <Button variant='icon' transparent icon={faBookmark} />
        <Button variant='text'>Text</Button>
        <CustomBtn variant='text' active bold>Active Text</CustomBtn>
        <Button danger>Danger</Button>
        <Button disabled>Disabled</Button>
      </div> */}
    </main>
  );
}
