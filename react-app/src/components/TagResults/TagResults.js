import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getTagImages } from "../../store/image"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import './TagResults.css'

const TagResults = () => {
    const dispatch = useDispatch()
    const { tag } = useParams()

    const imagesObj = useSelector(state => {
        return state
    })


    const allImages = Object.values(imagesObj.imageReducer.tagImages)

    useEffect(() => {
        dispatch(getTagImages(tag))
    }, [dispatch, tag])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="background-for-tag-page">

            <div className="whole-tag-page-container">
                <div className="tag-header-div">
                    <h1>Tag: {tag}</h1>
                </div>
                <div className="all-images-tag-page">
                    {allImages.map((im) => (
                        <div key={im.id}>
                            <Link to={`/photos/tags/${tag}/${im.id}`}>
                                <img src={im.url} className='images-on-display' alt='Images For Display' />
                            </Link>
                            {/* {
                            sessionUser && sessionUser.id === im.owner.id ?
                                <div>
                                    <button onClick={event => editButton(event, im.id)}>Edit</button>
                                    <button onClick={event => deleteButton(event, im.id)}>Delete</button>
                                </div>
                                : null
                        } */}
                        </div>

                    ))}
                </div>
                <Footer />
            </div >
        </div>
    )
}

export default TagResults
