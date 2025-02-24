import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 50px;
    background-color: var(--header-background-color, #fff); /* Usando variável de cor */
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1000; /* Garantir que o cabeçalho fique acima de outros elementos */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adicionar sombra sutil */

    @media (max-width: 768px) {
        padding: 0 8px; /* Ajustar padding em telas menores */
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%; /* Garante que o botão seja circular */
    background-color: #f0f0f0;
    margin: ${({ margin }) => (margin ? margin : '0')};
    display: flex; 
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Transição suave para o hover */

    
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex; /* Adicionado para centralizar o conteúdo */
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`;