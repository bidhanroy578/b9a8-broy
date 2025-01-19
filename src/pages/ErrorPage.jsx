import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='font-bold text-3xl text-center'>
            Page not found ... <br />
            <Link to={'/'}><button className='btn btn-error'>go back to home page</button></Link> 
        </div>
    );
};

export default ErrorPage;