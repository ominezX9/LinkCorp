import { Link } from 'react-router-dom'
import Logo from "@assets/images/logo/linkcorp_logo.svg";
import Box from "@assets/images/vectors/services/box-iso.svg";
import Coin from "@assets/images/vectors/services/coins-swap-01.svg";
import Bulb from "@assets/images/vectors/services/lightbulb-02.svg";
import Loading from "@assets/images/vectors/services/loading-03.svg";
import Scales from "@assets/images/vectors/services/scales-01.svg";
import Truck from "@assets/images/vectors/services/truck-02.svg";

export default function Header() {
    const ExploreLinks = [
        {
            name: 'Expiditing Service',
            desc: 'Expediting Services: Accelerating Business Success',
            img: Loading,
            link: '/services'
        },
        {
            name: 'E-platform development',
            desc: 'Elevate Your Business with Custom E-Platform Solutions.',
            img: Bulb,
            link: '',
        },
        {
            name: 'Tech and Legal Consulting',
            desc: 'Trusted Partner for Transformative Technology and Compliance',
            img: Scales,
            link: '',
        },
        {
            name: 'Courier Services',
            desc: 'Swift Logistics: Streamlining Your Deliveries Nationwide',
            img: Truck,
            link: '',
        },
        {
            name: 'Brokerage, Clearing and Forwarding',
            desc: 'Seamless Customs, Freight, and Supply Chain Solutions.',
            img: Box,
            link: '',
        },
        {
            name: 'Individual and Business Services',
            desc: 'Comprehensive Services for Optimal Productivity',
            img: Coin,
            link: '',
        }
    ]

    return (
        <header>
            <div className='py-[20px] px-[40px] flex flex-row justify-between'>
                <div className="flex items-center">
                    <div className="logo w-[50px] mr-4">
                        <img src={Logo} alt="" />
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
            <div className='relative banner bg-white p-5 z-[10]'>
                <div className='px-10'>
                    <h3 className="text-secondary">Services</h3>
                    <div className='grid grid-cols-2 '>
                        {
                            ExploreLinks.map((link, index) => (
                                <Link to={link && link?.link} key={index} className="cursor-pointer flex gap-3 p-4">
                                    <span>
                                        <img src={link.img} alt="" />
                                    </span>
                                    <span>
                                        <h4 className="text-primary">{link.name}</h4>
                                        <p className="text-gray-500">{link.desc}</p>
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </header>
    )
}
