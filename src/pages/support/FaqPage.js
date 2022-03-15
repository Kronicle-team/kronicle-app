import Layout from "../../components/Layout";
import FaqSection from "../../components/support/FaqSection";

const FaqPage = () => {
  const qna = [
    {
      question: "What is Kronicle's purpose?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
          "printer took a galley of type and scrambled it to make a type specimen book. It has survived not " +
          "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      question: "What are Kronicle's shipping options or methods?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
          "printer took a galley of type and scrambled it to make a type specimen book. It has survived not " +
          "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ]

  return (
      <Layout header footer>
        {qna.map(faq => {
          return <FaqSection question={faq.question} answer={faq.answer} />
        })}
      </Layout>
  )
}

export default FaqPage