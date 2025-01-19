import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='font-bold text-3xl text-center'>
            this is for error page <br />
            <Link to={'/'}><button className='btn btn-error'>go back to home page</button></Link> 
        </div>
    );
};

export default ErrorPage;