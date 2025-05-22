export default function Footer(props) {
    const { showModal, handleToggleModal, data } = props
    return(
        <footer>
            <div>
                <h2>{data?.title}</h2>
                <h1>APOD Project</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}