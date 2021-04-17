import user from "./Components/Profile/user.json";
import statsData from "./Components/Statistics/statistical-data.json";
import friendsData from "./Components/Friends/friends.json";
import transactionsData from "./Components/Transactions/transactions.json";
import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics-section";
import FriendList from "./Components/Friends/Friends-list";
import TransactionHistory from "./Components/Transactions/Transactions-history"

const App = () => {
    return (
        <div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics 
            title='Upload stats'
            stats={statsData}
        />

        <FriendList
            friends={friendsData}
        />

        <TransactionHistory
            items={transactionsData}
        />

        </div>
    );
  };

export default App;

