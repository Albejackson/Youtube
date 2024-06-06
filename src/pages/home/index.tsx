import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

const videos = [{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'},
{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'},
{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'},
{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'},
{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'},
{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'},
{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'},
{image: '', title: 'Morada', channel: 'Morada Worship', views: '100 mi', time: '1 mês'}
]

function Home(){
    return (
        <div>
            <Container>
                {videos.map((video) => (
                    <VideoComponent video={video} />
                ))}
                
            </Container>
        </div>
    )
}

export default Home;