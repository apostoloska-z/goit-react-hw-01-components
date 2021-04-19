import PropTypes from 'prop-types';
import styles from './Transactions-history.module.css'

const TransactionHistory = ({items}) => (
    <table className={styles.table}>
        <thead className={styles.head}>
            <tr>
            <th className={styles.head__element}>Type</th>
            <th className={styles.head__element}>Amount</th>
            <th className={styles.head__element}>Currency</th>
            </tr>
        </thead>

    <tbody>
        {items.map(({id, type, amount, currency}) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>  
            )
        )}
    </tbody>
</table>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
}


export default TransactionHistory;