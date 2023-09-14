import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Preferiti = () => {
  const preferiti = useSelector((state) => state.preferiti.content);

  const dispatch = useDispatch();

  return (
    <Container>
      <ListGroup>
        <h2 className="display-4 mb-3">Aziende Preferite:</h2>
        {preferiti.map((preferito, i) => (
          <>
            <Link to={`/${preferito}`}>
              <ListGroup.Item className="text-primary mt-4">{preferito}</ListGroup.Item>
            </Link>
            <Button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: i });
              }}
              variant="danger w-25"
            >
              Elimina dai preferiti
            </Button>
          </>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Preferiti;
