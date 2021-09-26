import React from 'react';
import { useSearch } from "../../hooks";
import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";
import ListItem from "../../components/ListItem";

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
            {articles && articles.length && articles.map(article => 
                <ListItem {...article} key={article.id} />
            )}
        </div>
    )
};

export default Search;