import { 
    ButtonIcon,
    Container, 
    MenuItem,
} from "./style";
import HomeIcon from '../../assets/botao-home.png';
import { useNavigate } from "react-router-dom";

const items = [
    { name: 'Início', link: '/' }, 
    { name: 'Biblioteca', link: '/library' }, 
    { name: 'Histórico', link: '/history' }
];

interface Iprops {
    openMenu: boolean;
}

function Menu({ openMenu }: Iprops) {
    const navigate = useNavigate();
    return (
        <Container openMenu={openMenu}>
            {items.map((item, index) => (
                <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(item.link)}>
                    <ButtonIcon alt={item.name} src={HomeIcon} /> 
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </Container>
    );
}

export default Menu;