import Link from "next/link";

export function Footer() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 my-5 ">
            <div >I have made this portfolio public, feel free to use this
                <Link href="https://github.com/Samyam412/portfolio" className="text-blue-500 hover:text-blue-600 underline mx-1">here</Link> 😉
            </div >
            <div>Samyam Katwal {new Date().getFullYear()} </div>
        </div >
    );
}
