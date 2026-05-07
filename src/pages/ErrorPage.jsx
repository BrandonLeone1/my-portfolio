import {Link} from 'react-router-dom'
export default function ErrorPage () {
    return (
        <>
        <div className="flex p-6 max-w-5xl mx-auto mt-12">
            <div className="flex flex-col gap-6 text-neutral-100">
            <p className="text-5xl font-semibold">Error:</p>
            <p className="font-medium text-3xl">The page you were looking for was not found.</p>
            <Link to={`/`}  className="text-center text-lg text-neutral-100 z-10 after:z-[-1] px-3 py-1.5  after:content-[''] after:w-full after:bg-olive-400 duration-300 border-2 border-olive-400 after:h-0 hover:after:h-full after:duration-300 after:block relative after:absolute after:bottom-0 after:left-0 hover:text-neutral-900 w-fit font-medium bg-olive-400/20">Return home</Link>
            </div>
        </div>
        </>
    )
}