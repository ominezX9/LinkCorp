import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='py-[20px] px-[40px] flex flex-row justify-between'>
                <div className="flex">
                    <div className="logo w-[50px]">
                        <img src="" alt="" />
                    </div>
                    <nav className="menu">
                        <ul className='flex flex-row gap-2'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <Link to="explorer">Explore</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                
                
                <div className='flex flex-row items-center justify-end gap-5'>
                    <Link to="signup">Login</Link>
                    <Link to="signup">Signup</Link>
                </div>
            </div>
            <div className=''>

            </div>
        </header>
    )
}
