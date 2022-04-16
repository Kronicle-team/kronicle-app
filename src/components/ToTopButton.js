import style from "./ToTopButton.module.css";

const ToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
    <button className={style["btnWrapper"]}>
        <div onClick={scrollToTop} className={style["pageBtnIcon"]}>TO TOP</div>
    </button>
    )
}
export default ToTopButton;