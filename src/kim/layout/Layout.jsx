import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


//useNavigate : javascript의 location.href
// <Link> <NavLink> : html의 <a> 태그, href="url" 대신 to="url"
const Layout = () => {

    const navigate = useNavigate(); 

    return (
        <div className='App'>
            <header>
                <button type='button' onClick={ () => { navigate('/') } }>처음 화면으로</button>
                <nav>
                    <ul>
                        <li>
                            <Link to='/state' >state</Link>
                        </li>
                        <li>
                            <Link to='/parentChild' >부모자식 컴포넌트와 props</Link>
                        </li>
                        <li>
                            <Link to='/useEffect' >useEffect</Link>
                        </li>
                        <li>
                            <Link to='/market' >useEffect 연습문제</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
  )
}

export default Layout