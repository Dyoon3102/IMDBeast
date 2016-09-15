class SearchBar extends React.Component {
	constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  	event.preventDefault()
    var searchContent = this.refs.newSearch.value;
    $.ajax({
      url: "http://www.omdbapi.com/?s=" +searchContent,
      method: 'POST'
    })
    .done((response) => {
      this.props.onSubmit(response);
    })
    // .fail((response) => {
    //   console.log("We found nothing")
    // });
  }

  render () {
    return (
    	<form>
        <input ref="newSearch" type="text" placeholder="Keyword" />
      </form>
    )
  }
}

