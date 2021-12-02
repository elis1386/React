import { useEffect } from "react"
import { ListGroup } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlesError,
  selectArticlesList,
  selectArticlesLoading,
} from "../store/articles/selectors";
import { getArticles } from "../store/articles/actions";
import Button from "react-bootstrap/Button"

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesList);
  const isLoading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);

  const requestArticles = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    requestArticles();
  }, []);

    return (
        <Container>
        <h3>Articles</h3>
        {isLoading ? (<Spinner animation="border" role="status"></Spinner>) 
        :(<> <Button variant="outline-warning"size="sm" className="mb-2" onClick={requestArticles}>REQUEST</Button>
        {!!error && <h4>Sorry, we have a problems</h4>}
        <ListGroup variant="flush">
            {articles.map(art => <ListGroup.Item key={art.id}>{art.title}</ListGroup.Item> )}
        </ListGroup>
        </>
        )}
        </Container>
    )
}