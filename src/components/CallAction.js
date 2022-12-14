
import '../css/main.css'
import { Link } from "react-router-dom"
import Blob from '../assets/blob.svg'
import RecipeBook from '../assets/RecipeBook.svg'
import { useNavigate } from "react-router-dom";

function CallAction() {
    const navigate = useNavigate()
    const upload_page = () => {
        navigate("/upload")
    }
    return (
        <>
            <div className="d-flex align-items-center call">
                {/* <div className="col-md-6 col-lg-6 "> */}
                <div>
                    <img className="img-fluid" src={Blob} />

                </div>
                {/* </div> */}
                {/* <div className="col-md-6 col-lg-6 "> */}
                <div>
                    <p className='h4'>Enjoy lots of free receipes</p>
                    <div>
                        <p>As soon as the temperature starts to drop,</p>

                    </div>
                    <div>
                        <p> we break out this collection of favorite soups, stews
                            casseroles, and meaty classics.</p>
                    </div>
                  
                        <button className="btn btn-primary rounded-pill my-3" onClick={upload_page}>
                            Upload Recipe
                        </button>
                    
                </div>
                <div className='recipeBook'>
                    <img src={RecipeBook} className="img-fluid" />

                </div>
                {/* </div> */}
            </div>

        </>

    )
}
export default CallAction;