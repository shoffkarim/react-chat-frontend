import React from "react";


class DialogWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.dialog = React.createRef();
    this.state = {
      counter: this.props.messageCount
    }
  }
  componentDidUpdate () {
    this.scroll()
  }
  componentDidMount () {
    this.scroll()
  }
  scroll() {
    if(this.state.counter !== this.props.messageCount){
      this.dialog.current.scrollTo(0, this.dialog.current.scrollHeight + 30);
    }
  }
  render () {
    return(
      <div className="dialog-scroller" ref={this.dialog}>
        {this.props.children}
      </div>
    )
  }
}

export default DialogWrapper;