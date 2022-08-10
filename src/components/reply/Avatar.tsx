import { FC } from "react";
import IReplyProps from "../interfaces/IReplyProps";

const Avatar: FC<IReplyProps> = (props): JSX.Element => {
  const { firstName, lastName, avatarColor } = props.reply;

  const firstNameCapital = firstName.charAt(0).toUpperCase();
  const lastNameCapital = lastName.charAt(0).toUpperCase();

  return (
    <section className="avatar col-1" style={{ backgroundColor: avatarColor }}>
      {firstNameCapital}
      {lastNameCapital}
    </section>
  );
};

export default Avatar;
