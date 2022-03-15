import Layout from "../components/Layout";
import AboutUsCard from "../components/AboutUsCard";

const AboutUsPage = () => {
  const members = [
    {
      name: "Doan Yen Nhi",
      position: "Project Manager",
      github: "https://github.com/doanyennhi"
    },
    {
      name: "Du Duc Manh",
      position: "Frontend developer",
      github: "https://github.com/rider3458"
    }
  ]

  return (
      <Layout header footer>
        <h1>About Us</h1>
        <h2>Kronicle</h2>
        <p>Kuri Team was founded during semester 2020C at RMIT University Vietnam, Saigon South Campus.
          As a young organization, our goal is to support each other in our projects, academic success,
          and personal development. Our last study project is a game prototype, proposed by us in our
          assignment paper for COSC2083 - Introduction to IT, to be implemented into RMIT wi-fi network.
          More detail on that project and proposal to RMIT can be found here. The playable prototype can be
          accessed here.</p>
        {members.map(member => {
          return <AboutUsCard member={member} />
        })}
      </Layout>
  )
}

export default AboutUsPage