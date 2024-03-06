

const blue =[];
const filterFriendsByEvenLength = (friends) => {
    for(const friend of friends){if(friend.length % 2 === 0)
    blue.push(friend);}
    
  };
  
  const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Even'];
  const evenLengthFriends = filterFriendsByEvenLength(friends);
  console.log(blue);
  