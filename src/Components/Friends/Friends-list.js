import PropTypes from 'prop-types';
import defaultImage from './profile-image.jpg';

const FriendList = ({friends}) => (
    friends.map(({avatar, name, isOnline, id}) => (
        <li key={id} className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    ))
)

FriendList.defaultProps = {
    avatar: defaultImage,
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          avatar: PropTypes.string,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired
        })
      ).isRequired,
}


export default FriendList;