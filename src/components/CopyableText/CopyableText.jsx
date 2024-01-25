export default function CopyableText({ children }) {
    async function handleClick(e) {
        await navigator.clipboard.writeText(e.target.textContent)
    }

    return (
        <span className="copyable-text" onClick={handleClick}>
            { children }
        </span>
    )
}