import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";
import './styles.css';

const Home = () => {
    return (
        <div className="home-page-container">
            <img src="./Ahsoka_Tano.png" alt="./Ahsoka_Tano.png"/>
            <Container>
                {({searchValue, onSearchChange, articles}) => 
                <Autocomplete
                    articles={articles}
                    searchValue={searchValue}
                    onSearchChange={onSearchChange}/>}
            </Container>
        </div>
    )
}
export default Home;