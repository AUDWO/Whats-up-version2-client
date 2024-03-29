import useOutClickEffect from "@/customHooks/useOutClickEffect";
import { useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";
const SearchMd = () => {
  const [searchModalOpenState, setSearchModalOpenState] = useRecoilState(
    dependedModalOpenState("searchMd")
  );
  const searchModalRef = useRef(null);
  /*
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("요소가 화면 안으로 들어왔습니다.");
        useModalOutClickEffect(searchModalRef, () => {
          setSearchModalOpenState(false);
        });
      } else {
        console.log("요소가 화면 밖으로 나갔습니다.");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (searchModalRef.current) {
      observer.observe(searchModalRef.current);
    }

    return () => {
      if (searchModalRef.current) {
        observer.unobserve(searchModalRef.current);
      }
    };
  }, []);*/
  useOutClickEffect(searchModalRef, () => {
    setSearchModalOpenState(false);
  });
  return (
    <SearchMdContainer isOpen={searchModalOpenState} ref={searchModalRef}>
      <SearchTextWrapper>
        <SearchText>검색</SearchText>
      </SearchTextWrapper>
      <SearchInputWrapper>
        <SearchInput placeholder="검색" />
      </SearchInputWrapper>
      <UserList>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
        <UserWrapper>
          <UserProfileImg />
          <UserProfileName>Peter_09</UserProfileName>
        </UserWrapper>
      </UserList>
    </SearchMdContainer>
  );
};

export default SearchMd;

const SearchMdContainer = styled.div<{ isOpen: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 10px 0px;
  position: fixed;
  left: 0;

  transform: translateX(${(props) => (props.isOpen ? "29%" : "-100%")});
  z-index: 9999;
  width: 350px;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  transition: transform 0.3s ease-out;
  @media screen and (max-width: 705px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    width: 250px;
  }
  @media screen and (max-width: 501px) {
    top: 70px;
  }
`;

const SearchTextWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-left: 15px;
`;

const SearchText = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

const SearchInputWrapper = styled.div`
  border-radius: 5px 0px 0px 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  padding: 9px 5px 9px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.subBgColor};
  color: ${(props) => props.theme.fontColor};
`;

const UserList = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 40px;
  padding-left: 15px;
  overflow-y: scroll;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 3ㄴ0px;
`;

const UserProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserProfileName = styled.div`
  font-size: 14px;
  font0-weight: 700;
  color: ${(props) => props.theme.fontColor};
`;
