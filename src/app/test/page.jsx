import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <nav className="w-full bg-black flex justify-center">
                <Link href="/" className="text-white px-8 py-4"> Home </Link>
            </nav>
            <main className="flex flex-col justify-center items-center">
                <Image src="https://res.cloudinary.com/dmrevelyc/image/upload/v1738014633/jolt_banner_pics/banner_67857cf6607bf309a2a5acfd_1738014631969.jpg" width="100" height="100" alt="Cool Baby" ></Image>
            </main>
        </div>
    )
}

export default page