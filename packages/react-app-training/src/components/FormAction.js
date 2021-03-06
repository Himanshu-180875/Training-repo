//This is used for submitting the form values
export default function FormAction({
    handleSubmit,
    text
}){
    return(
        <>     
            <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 mt-10"
                onSubmit={handleSubmit}
            >
                {text}
            </button>
          
        </>
    )
}