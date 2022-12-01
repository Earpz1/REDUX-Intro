import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

const SavedJob = ({ data, index }) => {
  const dispatch = useDispatch()

  const deleteJob = (index) => {
    dispatch({
      type: 'DELETE_FAVOURITE',
      payload: index,
    })
  }

  return (
    <Container>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>

          <AiFillDelete
            className="ml-5 text-danger hover"
            onClick={() => deleteJob(index)}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default SavedJob
