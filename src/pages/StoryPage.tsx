import styled from "styled-components";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import StoryProfileCp from "@components/story/StoryProfileCp";
import StoryImgCp from "@components/story/StoryImgCp";
import MoreContentCp from "@components/common/moreContent/MoreContentCp";
import MoreContactCp from "@components/common/moreContent/MoreContactCp";
import MoreCommentsRCp from "@components/common/moreContent/moreContentComment/MoreCommentsRCp";

const StoryPage = () => {
  return (
    <Container>
      <MainSideNavCp />
      <MainContentContainer>
        <StoryContentContainer>
          <StoryProfileCp />
          <StoryImgCp />
          <MoreContentCp />
          <MoreContactCp />
        </StoryContentContainer>
      </MainContentContainer>
      <MoreCommentsRCp />
    </Container>
  );
};

export default StoryPage;

const Container = styled.div`
  width: 100wh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }

  @media screen and (max-width: 901px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContentContainer = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const StoryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 734px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
