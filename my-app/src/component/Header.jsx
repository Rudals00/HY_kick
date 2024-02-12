import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [isSettingVisible, setSettingVisible] = useState(false);
  const [notifications, setNotifications] = useState(1);

  return (
    <HeaderLayout $settingvisible={isSettingVisible}>
      {
        isSettingVisible &&
        <>
          <LogoWrapper>
            <div>HY-KICK</div>
          </LogoWrapper>
          <SettingWrapper>
            <SettingItem>
              <img src="/image/setting.png" alt="" />
              설정
            </SettingItem>
            <SettingItem>
              <img src="/image/customer-support.png" alt="" />
              문의
            </SettingItem>
            <SettingItem>
              <img src="/image/information.png" alt="" />
              도움말
            </SettingItem>
            <SettingItem>
              <img src="/image/people.png" alt="" />
              개발자
            </SettingItem>
          </SettingWrapper>
        </>
      }
      <ProfileSection>
        <ImageWrapper>
          <Image src={isSettingVisible ? "/image/close.png" : "/image/setting.png"} alt="" onClick={() => setSettingVisible(!isSettingVisible)} />
        </ImageWrapper>
        <ProfileWrapper>
          <ImageWrapper>
            <Image src="/image/user.png" alt="" />
          </ImageWrapper>
          <Name>이유상</Name>
          <Club>개발</Club>
        </ProfileWrapper>
        <ImageWrapper>
          <Image src="/image/notification.png" alt="" />
          {
            notifications !== 0 &&
            <div className="notifications">
              {notifications}
            </div>
          }
        </ImageWrapper>
      </ProfileSection>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  width: calc(100% - 2rem);
  height: 3.5rem;
  padding: 0.75rem 1rem 0.75rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 2;
  animation: 
    ${props => props.$settingvisible ? 'settingIn' : 'settingOut'} 
    100ms
    both;
  @keyframes settingIn {
    0%{
      height: 3.5rem;
    }
    100%{
      height: 10rem;
    }
  }
  @keyframes settingOut {
    0%{
      height: 10rem;
    }
    100%{
      height: 3.5rem;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
`;

const SettingWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
  /* border-top: 2px solid lightgray; */
  /* border-bottom: 2px solid lightgray; */
  animation: 
    ${props => props.$settingvisible ? 'fadeIn' : 'fadeOut'} 
    300ms 
    100ms
    both;
  @keyframes fadeIn {
    0%{
      opacity: 100%;
    }
    100%{
      opacity: 0%;
    }
  }
  @keyframes fadeOut {
    0%{
      opacity: 0%;
    }
    100%{
      opacity: 100%;
    }
  }
`;

const SettingItem = styled.div`
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  font-weight: 700;
  >img{
    width: 1.5rem;
  }
`;

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  /* border-radius: 50%; */
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .notificationImg{
    width: 2rem;
    height: 2rem;
    padding-bottom: 0.2rem;
  }
  .notifications{
    width: 1.2rem;
    height: 1.2rem;
    background-color: red;
    color: white;
    position: absolute;
    right: 0.3rem;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

const ProfileWrapper = styled.div`
  height: 3.5rem;
  display: grid;
  grid-template-columns: 3.5rem auto;
  grid-template-rows: 1.87rem 1.65rem;
  >:nth-child(n){
    display: flex;
    justify-content: center;
    align-items: center;
  }
  >:nth-child(1){
    grid-area: 1/1/3/2;
    height: 100%;
  }
`;

const Name = styled.div`
  height: 1.87rem;
  font-weight: 700;
  font-size: 1.3rem;
`;

const Club = styled.div`
  height: 1.65rem;
  padding: 0.1rem 0.3rem;
  color: white;
  background-color: navy;
  border-radius: 10px;
  font-weight: 500;
`;