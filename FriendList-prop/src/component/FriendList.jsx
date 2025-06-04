import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <div>
      {friends.map((friend, index) => (
        <Friend key={index} name={friend.name} status={friend.status} />
      ))}
    </div>
  );
}
