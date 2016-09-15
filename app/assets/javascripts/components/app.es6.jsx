class App extends React.Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: 'http://www.omdbapi.com/?s=wolf',
      method: 'GET'
    })
    .done((response) => {
      this.setState({movies: response})
    })
  }

  render () {
    return(
      <div>
        <header id="top-nav">
          <div id="brand">IMDBeast</div>
          <SearchBar />
        </header>
        <section className="container">
          <ListMovies />
        </section>
      </div>
    )
  }
}

