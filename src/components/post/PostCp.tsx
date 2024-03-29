import styled from "styled-components";
import PostContactCp from "./PostContactCp";
import PostContentInfoCp from "./PostContentInfoCp";
const PostCp = () => {
  return (
    <PostContainer>
      <PostContentInfoCp />
      <PostContactCp />
    </PostContainer>
  );
};

export default PostCp;

const PostContainer = styled.div`
  width: 480px;
  height: 630px;
  margin-top: 100px;
  display: flex;
  @media screen and (max-width: 501px) {
    width: 100%;
    height: 100%;
  }
  position: relative;
`;
