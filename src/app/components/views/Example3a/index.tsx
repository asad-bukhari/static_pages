

export const Example3a = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center">
        <div className="flex flex-col max-w-xs  bg-white rounded-lg text-center p-6 m-3">
            <h1 className="font-bold text-3xl text-blue-600">CSS Flex & Grid</h1>
            <p className="mt-4">This book takes a completely different approach. I won't teach you the things flex and grid can do. Instead, I will first show you some components and layouts and make you think how to build them using the CSS concepts you already know. Now you have a problem, and you want a solution.</p>
            <div className="flex justify-between">
                <a className="mt-4 px-4 bg-blue-200 rounded-md text-gray-900 text-sm" href="#">Prev</a>
                <a className="mt-4 px-4 bg-blue-200 rounded-md text-gray-900 text-sm" href="#">Next</a>
            </div>
        </div>

    </div>
  )
}
