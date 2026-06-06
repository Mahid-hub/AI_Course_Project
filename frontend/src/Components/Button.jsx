function Button({ text, icon, bgClr, bgHover, textClr, width, height }) {
    return (
        <>
            <button className={`${bgClr} ${bgHover} ${textClr} ${width} ${height} outline outline-1 outline-gray-500 px-4 py-2 rounded-xl font-semibold cursor-pointer flex items-center gap-2`}>
                {icon} {text}
            </button>
        </>
    )
}

export default Button;