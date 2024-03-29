import styled from "styled-components";

const MorePostContentCp = () => {
  return (
    <MorePostContentContainer>
      <MoreProfileImgWrapper>
        <MoreProfileImg />
      </MoreProfileImgWrapper>
      <MorePostContentWrapper>
        <MoreProfileName>liverpool</MoreProfileName>
        <MorePostContent>
          안녕하십니까 안녕하십니까wdwdwwdwddwdwdwdw
        </MorePostContent>
      </MorePostContentWrapper>
    </MorePostContentContainer>
  );
};

export default MorePostContentCp;

const MorePostContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MorePostContentWrapper = styled.div`
  min-height: 40px;
  margin-left: 10px;
  margin-top: 7px;
`;

const MorePostContent = styled.span`
  font-size: 13px;
  white-space: pre-wrap;
`;

const MoreProfileName = styled.span`
  font-weight: 800;
  margin-right: 10px;
  font-size: 14px;
`;

const MoreProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const MoreProfileImgWrapper = styled.div`
  width: 40px;
  height: 40px;
`;
