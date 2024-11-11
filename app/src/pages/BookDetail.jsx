import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { FirestoreContext } from '../contexts/FirestoreContext'
import { dec, getDoc } from '@firebase/firestore'

export function BookDetail(props) {
    const [book, setBook] = useState()

    const params = useParams()
    const db = useContext(FirestoreContext)

    //function to get book data
    const getBookDetail = async (id) => {
        const ref = doc(db, "Books", params.bookId)
        const detail = await getDoc(ref)
        let bookObject = detail.data()
        bookObject.id = detail.id
        setBook(bookObject)
    }

    useEffect(() => {
        getBookDetail()
    }, [book])

    if (book) {
        document.title = book.Title

        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>
                            {book.Title}
                        </h1>
                    </Col>
                    <col md={6}>
                        <img className="w-100" src={"/book_covers/" + book.cover} />
                    </col>
                    <col md={6}>
                        <p>{book.Title} by {book.Authur}</p>
                    </col>
                </Row>
            </Container>
        )
    }
    else {
        return (
            <p>Loading...</p>
        )
    }
}