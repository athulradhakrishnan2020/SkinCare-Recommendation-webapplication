function Button({ title, onClick }) {
    return (
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4" onClick={onClick}>
            {title}
        </button>
        
    );
}
export default Button;