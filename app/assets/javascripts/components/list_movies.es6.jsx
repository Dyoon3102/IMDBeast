class ListMovies extends React.Component {
  render () {
    return (
  		<ul>
        {
          this.props.movies.map((movie, idx) => {
            return (<Movie key={idx} data={movie}/>)
          })
        }
      </ul>
    )
  }
}

