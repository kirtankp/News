import React,{useState,useEffect} from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap';

const NewsCard = () => {
    const [mydata, setData] = useState([]);

    const getAPI = () => {
        fetch('https://inshorts.me/news/all')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json.data.articles)
            }
            );
    };
    useEffect(() => {
        getAPI();
        const interval = setInterval(() => { getAPI(); }, 500000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Container fluid>
            <Row xs={1} md={3} className="g-4">
                {
                    mydata.map(
                        (value) => {
                            return (
                                <>
                                    <Col className="container-fluid mt-4">
                                        <Card>
                                            <Card.Img variant="top" src={value.imageUrl} height="275px" />
                                            <Card.Body>
                                                <Card.Title>{value.title}</Card.Title>

                                                <Card.Text>{value.content}</Card.Text>

                                                <Card.Subtitle>
                                                    source: {value.sourceName}
                                                </Card.Subtitle>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )
                        }
                    )
                }
            </Row>
        </Container>
    );
}

export default NewsCard