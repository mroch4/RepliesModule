interface IReply {
  id: string;
  parent: string;
  timeStamp: number;
  firstName: string;
  lastName: string;
  avatarColor: string;
  content: string;
  upVotes: number;
  downVotes: number;
}

export default IReply;
