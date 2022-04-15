import Layout from "../../components/Layout";
import AboutUsCard from "../../components/support/AboutUsCard";
import style from "../../components/support/AboutUsCard.module.css";

const AboutUsPage = () => {
    const members = [
        {
            name: "Doan Yen Nhi",
            position: "Project Manager",
            github: "https://github.com/doanyennhi",
            image: "../../media/icons/logo.png"
        },
        {
            name: "Du Duc Manh",
            position: "Frontend developer",
            github: "https://github.com/rider3458",
            image: "../../media/icons/logo.png"
        },
        {
            name: "Hua Minh Thu",
            position: "Frontend developer",
            github: "https://github.com/minhthuhua72",
            image: "../../media/icons/logo.png"
        },
        {
            name: "Thu Tran",
            position: "Frontend developer",
            github: "https://github.com/tnathu-ai",
            image: "../../media/icons/logo.png"
        },
        {
            name: "Hoang Linh",
            position: "Frontend developer",
            github: "https://github.com/hlinh88",
            image: "../../media/icons/logo.png"
        }
    ]

    return (
        <Layout header footer>
            <h1 className={style["title"]}>About Us</h1>
            <div className={style["kronicle-container"]}>
                <h2 className={style["subtitle"]}>Kronicle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu hendrerit dui, id placerat
                    turpis. Nulla et est ac sapien elementum aliquet. Quisque eget lobortis leo. Sed at diam nec magna
                    molestie interdum eu id lacus. Etiam sit amet venenatis quam. Aliquam erat volutpat. Integer
                    hendrerit
                    fringilla maximus. Vestibulum massa arcu, posuere eu vulputate a, rutrum nec diam. Fusce in lorem
                    dolor.
                    Vestibulum dapibus lacus orci, eget molestie augue rutrum sed. Donec sit amet neque lacinia, lacinia
                    leo
                    id, lacinia dui. Integer sed nulla a risus ullamcorper efficitur.</p>
                <h2 className={style["subtitle"]}>Who We Are?</h2>
            </div>
            <div className={style["members-container"]}>
                {members.map(member => {
                    return <AboutUsCard member={member}/>
                })}
            </div>
        </Layout>
    )
}

export default AboutUsPage