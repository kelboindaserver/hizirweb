import Link from "next/link";
import {useRouter} from "next/router";
export default function Header(){
const router = useRouter()
    console.log(router)
    return <nav className="site-container flex justify-around items-center my-4">
        <div className="md:flex font-extrabold md:text-2xl hidden  items-center text-lg ">
        <Link href="/">
            <div className="flex items-center space-x-3 hover:brightness-75 text-white transition">
            <img src="/logo.PNG" className="max-w-[54px] rounded-lg " alt=""/>
            <p className="">Hızır Vinç</p>
            </div>
        </Link>
        </div>
        <div className="flex md:flex-row flex-col text-lg text-2xl text-center md:space-x-6 space-y-4 md:space-y-1.5 md:items-center">
            <div className="md:hidden text-3xl text-normal-blue">
                <Link href="/" >
                    <div className="flex items-center space-x-4 mt-10 font-extrabold">
                    <img src="/logo.PNG" className="max-w-[54px] rounded-lg " alt=""/>
                    <p className="text-white">Hızır Vinç</p>
                    </div>
            </Link>
            </div>
        <Link href="/">
            <p className={`hover:text-semi-blue transition font-medium  ${router.pathname === `/` ? "text-semi-blue  md:border-b-2 " : "text-white"}`}>Ana Sayfa</p>
        </Link>
        <Link href="/referance">
            <p className={`hover:text-semi-blue transition font-medium  ${router.pathname === "/referance" ? "text-semi-blue  md:border-b-2" : "text-white"}`} >Referanslar</p>
        </Link>
    </div>
    </nav>
}