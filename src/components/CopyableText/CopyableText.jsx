export default function CopyableText({ children }) {
    function handleClick(e) {
        navigator.clipboard.writeText(e.target.textContent)
        .then((res) => {
            console.log('Success');
        })
    }

    return (
        <span className="copyable-text" onClick={handleClick}>
            { children }
        </span>
    )
}