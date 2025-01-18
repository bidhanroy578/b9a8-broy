import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            this is for error page 
            <Link to={'/'}>go back to home page</Link> 
        </div>
    );
};

export default ErrorPage;