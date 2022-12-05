import { FC } from "react";
import { IPost } from "../models/IPost";

const PostItem: FC<IPost> = ({ body, id, title }) => {
  return (
    <div className="post">
        {id}. {title}
      <button type="button">X</button>
    </div>
  );
};
export default PostItem;
