import { 
    Container, 
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon, 
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton 
} from "./style";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../content/userContent";

interface Iprops {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
}

function Header({ openMenu, setOpenMenu }: Iprops) {
    const { login, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="Menu" src={HamburguerIcon} />
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt='Logo'
                    src={Logo} 
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="Pesquisar" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Microfone" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Vídeo" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Notificação" src={NotificationIcon} />
                </ButtonContainer>
                
                {login ? (
                    <>
                        <ButtonContainer margin='0 0 0 10px'>
                            A
                        </ButtonContainer>
                        <span onClick={() => logOut()}>Sair</span>
                    </>
                ) : (
                    <button onClick={() => navigate('/login')}>Fazer login</button>
                )}
            </HeaderButton>
        </Container>
    );
}

export default Header;