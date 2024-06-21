import Link from "next/link";
import Image from "next/image";


const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className="items-center hidden lg:flex">
            <Image src="/assets/logo.svg" alt="Logo" height={28} width={28}/>
            <p className="font-semibold text-2xl text-white ml-2.5">
                Finance
            </p>
        </div>
    </Link>
  )
}

export default HeaderLogo