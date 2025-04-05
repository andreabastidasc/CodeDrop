import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/theme";
import { useState } from "react";

import LoginButton from "components/molecules/LoginButton";


const App = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Navbar>
                    <Title>CodeDrop</Title>
                    <LoginButtonWrapper>
                        <LoginButton />
                    </LoginButtonWrapper>
                </Navbar>
            </Container>
        </ThemeProvider>
    );
};

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${({ theme }) => theme.background};
`;

const Navbar = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.surfacePrimary};
    color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.primary};
`;

const LoginButtonWrapper = styled.div`
  position: absolute;
  right: 2rem;
`;
