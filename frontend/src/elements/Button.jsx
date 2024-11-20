const Button = ({ children, onClick,
    parentClassName = 'bg-indigo-300',
    childrenClassName = 'bg-blue-300 text-black hover:bg-indigo-600 hover:text-white'
}) => {
    return (
        <div className={`${parentClassName} rounded hover:-translate-x-0.5 hover:-translate-y-0.5`}>
            <button
                type="submit"
                onClick={onClick}
                className={`w-full ${childrenClassName} hover:-translate-x-1.5 hover:-translate-y-1.5 px-3 py-2 rounded`}>
                {children}
            </button>

        </div>
    )

}
export default Button