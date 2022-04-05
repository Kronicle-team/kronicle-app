const RecommendationCard = ({img, name, price}) => {
  return (
      <div>
        <img src={img} alt="photocard"/>
        <p>{name}</p>
        <p>{price}</p>
      </div>
  )
}

export default RecommendationCard