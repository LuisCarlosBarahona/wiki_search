import { useSearch } from "../../hooks";
import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";

const Search = ({...props}) => {
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const query = params.get('query');
    const {articles, status} = useSearch(query, 80);
    return (
        <div>
            <Container>
                {({searchValue, onSearchChange, articles}) => 
                <Autocomplete
                    articles={articles}
                    searchValue={searchValue}
                    onSearchChange={onSearchChange}/>}
            </Container>
            {articles && !articles.length && status=== 'SUCCESS' && <h3>No articles found</h3>}
            {articles && articles.length && articles.map(article => {
                return (
                    <div key={article.id}>
                        <a href={article.id} target="_blank">
                            {article.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

export default Search;