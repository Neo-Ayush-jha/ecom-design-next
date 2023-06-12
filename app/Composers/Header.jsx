import Image from 'next/image'
import logo from '@/public/logo.png'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header() {
    return (
        <>

            <div className='flex flex-1 bg-[#2874f0] text-white justify-between px-10 py-3'>
                <div className="flex-[0.2]">
                    <Image src={logo} width={100} />
                </div>
                <form className="d-flex gap-2" role="search">
                    <input className="form-control" type="search" placeholder="Search for products, brands and more" aria-label="Search" style={{ width: '450px' }} />
                    <button className="btn btn-light text-light" type="submit">Login</button>
                </form>
                <div className="flex gap-5">
                    <Link href="/" className='font-bold'>Home</Link>
                    <Link href="/" className='font-bold'>About</Link>
                    <Link href="/" className='font-bold'>Login</Link>
                    <Link href="/ViewCart" className='font-bold'><i className="bi bi-cart-fill"></i> Cart</Link>
                </div>
            </div>
        </>
    )
}

export default Header