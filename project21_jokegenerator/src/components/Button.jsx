const Button = (props) => {
    return <button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out text-white font-semibold text-xl py-2 px-4 rounded-xl mb-8"
        onClick={props.callApi}>
        Generate a joke
    </button>
}

export default Button