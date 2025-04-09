import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import { AuthProvider } from "context/AuthContext";
import { darkTheme, lightTheme } from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import LoginButton from "components/molecules/LoginButton";


const App = () => {
    const [ isDark, setIsDark ] = useState(false);

    return (
        <AuthProvider>
            <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>
                <GlobalStyle/>
                <Container>
                    <LoginButtonWrapper>
                        <LoginButton />
                    </LoginButtonWrapper>
                    <Title>
                        Code<Accent>Drop</Accent>
                    </Title>
                </Container>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${({ theme }) => theme.background};
    max-width: 1048px;
    padding: 14px 0px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin: 0;
    color: ${({ theme }) => theme.primary};
    font-family: "Playwrite BE VLG", cursive;
    margin: 0 auto;
    margin-top: 8rem;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.text};
`;

const LoginButtonWrapper = styled.div`
    position: absolute;
    right: 2rem;
`;
