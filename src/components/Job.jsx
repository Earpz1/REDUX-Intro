import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToFavourites } from '../redux/actions'

const Job = ({ data }) => {
  const dispatch = useDispatch()

  const saveJob = (job) => {
    dispatch(addToFavourites(job))
  }

  return (
    <Row
      className="mx-0 mt-3 p-3 justify-content-between"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <AiOutlineStar className="ml-5" />
        <a href="#" className="saveJob" onClick={() => saveJob(data)}>
          Save job
        </a>
      </Col>
    </Row>
  )
}

export default Job
