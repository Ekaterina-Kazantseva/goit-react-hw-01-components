import { Profile } from "components/Profile/profile";
import { Statistic } from "components/Statistic/statistic";
import { FriendList } from "components/FriendList/friendList";
import {TransactionHistory} from "components/TransactionHistory​/transactionHistory"
import user from "../json/user.json"
import data from "../json/data.json"
import friends from "../json/friends.json"
import transactions from "../json/transaction.json"
import { Box } from "components/box";


export const App = () => {
  return (
    <>
      <Box bg={'#e7ecf2'}>
        <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} /> 
      
      
        <Statistic title="Upload stats" stats={data} />
      
      
        <Statistic stats={data} />
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions } />
      </Box>
  </>
  );
};