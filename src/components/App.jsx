import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        color="white"
        bg="#2a2a2a"
      >
        React template
      </Box>
    </>
  );
};
