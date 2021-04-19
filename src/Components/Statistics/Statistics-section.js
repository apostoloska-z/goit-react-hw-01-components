import PropTypes from 'prop-types';
import styles from './Statistics-section.module.css'

function getRandomColor() {
  const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

const Statistics = ({title, stats}) => (
<section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>
  <ul className={styles.stats__list}>
    {stats.map(({id, label, percentage}) => (
        <li key={id} className={styles.list__item} style={{backgroundColor:getRandomColor()}}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
        ))
    }
  </ul>
</section>
)

Statistics.defaultProps = {
    title: '',
  };

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ).isRequired,
}

export default Statistics;