const ToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
    <button>
        <div onClick={scrollToTop}>TO TOP</div>
    </button>
    )
}
export default ToTopButton;