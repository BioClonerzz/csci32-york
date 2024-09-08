import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href='/week1-page' className='self-start pb-4'>
      <Image src='/star.png' alt='Star' width={75} height={75}/>
      </a>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-gray-100 transparent rounded-lg shadow-sm p-2">
        <h1 className="font-serif text-5xl font-extrabold text-blue-300">
          Brad's Home Page
        </h1>
        <div className="font-serif fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none gap-2">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 shadow-md rounded-md bg-blue-300 hover:bg-blue-600 box-border h-8 w-30 "
            href="https://vercel.com/brad-yorks-projects?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
             &nbsp;My Projects Page <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={4} height={24} priority />
          </a>

          <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 shadow-md rounded-md bg-blue-300 hover:bg-blue-600 box-border h-8 w-35">
            &nbsp;About me&nbsp;</a>

          <a className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 shadow-md rounded-md bg-blue-300 hover:bg-blue-600 box-border h-8 w-30'>
            &nbsp;Contact me &nbsp;</a>
        </div>
      </div>
<Image src="/signal-2024-09-07-231134.jpeg" alt='Carebear Blue' width={400} height={24}/>



      <div className="font-serif mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left gap-4 place-items-center justify-center">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Hobbies{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View some of my personal hobbies and interests that I have picked up and learned about
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            LinkedIn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Visit my professional portfolio to view my experience or to contact me with a business offer
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-300 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Musical Portfolio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View my varied musical achievements and locations that music has allowed me to travel to
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-300 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            My Dog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            While unprofessional, who doesen't wanna see an adorable German Shepard mix!
          </p>
        </a>
      </div>
    </main>
  )
}
