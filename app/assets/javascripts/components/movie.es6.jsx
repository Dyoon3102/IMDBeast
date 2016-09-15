class Movie extends React.Component {
  render () {
  	let data = this.props.data
    return(
    	<li className="movie">
        <img className="poster" src={data.Poster} alt=""/>
        <div className="movie-content">
          <p>
            <span className="title">{data.Title}</span>
            <span className="year">{data.Year}</span>
          </p>
        </div>
      </li>
    )
  }
}

