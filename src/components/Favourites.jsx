import { Container, Row, Col, Form } from 'react-bootstrap'
import SavedJob from './SavedJob'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFromFavourites } from '../redux/actions'

const Favourites = () => {
  const dispatch = useDispatch()

  const deleteJob = (index) => {
    dispatch(deleteFromFavourites(index))
  }

  const favourites = useSelector((state) => state.favouriteJobs.content)
  return (
    <>
      <div className="text-center">
        <h1 className="mb-3 mt-5">
          These are all the jobs that you have selected as a favourite
        </h1>
        <Link to="/" className="text-center">
          Back to results...
        </Link>
      </div>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          {favourites.map((jobData, index) => (
            <SavedJob key={jobData._id} data={jobData} index={index} />
          ))}
        </Col>
      </Row>
    </>
  )
}

export default Favourites
