import { Link } from 'react-router-dom'

export function Card({ data }) {

    return(
<div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.description}</p>
  </div>
  <figure>
    <Link to={`/view/${data.id}`}>
    <img
      src={data.imageURL}
      alt={data.name} />
    </Link>
  </figure>
</div>
    )
}