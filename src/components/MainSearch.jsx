import { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchResults } from '../redux/actions'
import { getSearchResults } from '../redux/actions'

const MainSearch = () => {
  const jobs = useSelector((state) => state.mainSearchJobs.jobs)
  const dispatch = useDispatch()

  const [query, setquery] = useState('')
  const [searchMade, setsearchMade] = useState(false)

  useEffect(() => {
    dispatch(getSearchResults(query))
  }, [searchMade])

  const handleChange = (e) => {
    setquery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setsearchMade('true')
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>{' '}
          <Link to="/favourites">View saved jobs</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {searchMade && (
          <Col xs={10} className="mx-auto mb-5">
            {jobs[0].map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default MainSearch
