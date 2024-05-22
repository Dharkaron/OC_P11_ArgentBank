import PropTypes from 'prop-types'


export function Feature({data}) {
 return <>
  <div className="feature-item">
    <img src={data.img} alt={data.alt} className="feature-icon"/>
    <h3 className="feature-item-title">{data.title}</h3>
    <p>{data.text}</p>
  </div>
 </>
}


Feature.propTypes = {
  data: PropTypes.object
}

