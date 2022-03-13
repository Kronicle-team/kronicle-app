import Layout from "../components/Layout";
import ToggleButton from "../components/ToggleButton";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import FaqSection from "../components/FaqSection";

const HomePage = () => {
  return (
      <Layout header footer>
        <h1>Go Junho</h1>
        <ToggleButton icon={faChevronLeft}/>
        <ToggleButton icon={faChevronRight}/>
        <FaqSection />
        <p>Han Sooyoung</p>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        v
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        v
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
        <div>Lorem ipsum</div>
      </Layout>
  )
}

export default HomePage