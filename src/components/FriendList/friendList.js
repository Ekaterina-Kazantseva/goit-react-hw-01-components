import PropTypes from 'prop-types'
import { Box } from "components/box";
import {Item} from 'components/FriendList/friendList.styled'
import {FriendListItem} from 'components/friendList/friendListItem'

export const FriendList = ({friends}) => {
    return <Box
        width='310px'
        ml="auto"
        mr="auto"
        mb={6}
        bg="white"
        borderRadius="normal"
        as="ul">
        {friends.map(friend =>
            <Item key={friend.id}>
                <FriendListItem  isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
            </Item>)}
    </Box>
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};