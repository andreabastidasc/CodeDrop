import React from "react";
import styled from "styled-components";
import { useAuth } from "context/AuthContext";


const LoginButton: React.FC = () => {
    const { user, login, logout } = useAuth();

    return (
        <Wrapper>
            {user ? (
                <Button onClick={logout}>
                    👋 {user.displayName?.split(" ")[0]} | Logout
                </Button>
            ) : (
                <Button onClick={login}>🔐 Login with Google</Button>
            )}
        </Wrapper>
    );
};

export default LoginButton;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondaryText};
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;
