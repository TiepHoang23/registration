import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function UseLayout() {
  return (
    <>
      <div className='d-flex justify-content-between m-3'>
        <Button>
          <Link className='text-light' to='/register'>
            Register
          </Link>
        </Button>
        <Button>
          <Link className='text-light' to='/login'>
            Login
          </Link>
        </Button>
      </div>

      <Outlet />
    </>
  );
}
