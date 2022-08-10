import ICON_COLORS from "../iconColors";
import IReply from "../interfaces/IReply";
import uuid4 from "uuid4";

const REPLIES: IReply[] = [
  {
    id: uuid4(),
    parent: "dbb66478-17da-11ed-861d-0242ac120002",
    timeStamp: 1629084887794,
    firstName: "Wilhelm",
    lastName: "Stamm",
    avatarColor: ICON_COLORS[3],
    content: "Iste aliquid occaecati non praesentium totam?",
    upVotes: 1,
    downVotes: 2,
  },
  {
    id: uuid4(),
    parent: "dbb6664e-17da-11ed-861d-0242ac120002",
    timeStamp: 1633174447202,
    firstName: "Shana",
    lastName: "Gleason",
    avatarColor: ICON_COLORS[2],
    content: "Eveniet corrupti ducimus odit aperiam et eveniet vero culpa...",
    upVotes: 1,
    downVotes: 2,
  },
  {
    id: uuid4(),
    parent: "dbb66478-17da-11ed-861d-0242ac120002",
    timeStamp: 1646686519882,
    firstName: "Sam",
    lastName: "Okuneva",
    avatarColor: ICON_COLORS[12],
    content: "...ut quod veritatis magnam quia iure adipisci!",
    upVotes: 1,
    downVotes: 2,
  },
  // {
  //   id: uuid4(),
  //   timeStamp: faker.date.past().valueOf(),
  //   firstName: faker.name.firstName(),
  //   lastName: faker.name.lastName(),
  //   avatarColor: ICON_COLORS[8],
  //   content: faker.lorem.lines(1),
  //   upVotes: 1,
  //   downVtes: 1
  // },
];

export default REPLIES;
