var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <li className={'contactItem'}>
        <i className={'fa fa-address-card'}></i>
        <div className={'contact-container'}>
          <p className={'contactLabel'}>
            Imię: {this.props.item.firstName}
          </p>
          <p className={'contactLabel'}>
            Nazwisko: {this.props.item.lastName}
          </p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>
        </div>
      </li>
    );
  },
});