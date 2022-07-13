import {Link} from 'react-router-dom';
import crypto from '../assests/1.jpg';

//This is a header for login and Signup page
export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-2/6 w-2/6"
                    src={crypto} />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-blue-800	 hover:text-blue-900">
                {linkName}
            </Link>
            </p>
        </div>
    )
}