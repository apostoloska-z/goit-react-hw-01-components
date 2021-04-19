import PropTypes from 'prop-types';
import defaultImage from './profile-image.jpg';
import styles from './Friends-list.module.css'

const FriendList = ({friends}) => (
  <ul className={styles.friendList}>
    {friends.map(({avatar, name, isOnline, id}) => (
        <li key={id} className={styles.item}>
            <span className={styles.status} style={{backgroundColor: isOnline? 'green':'red'}}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    ))}
  </ul>
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