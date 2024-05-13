import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Frame1 from "../../../components/appguide/instagram/Frame11";
import UserLogo from "../../../components/UserLogo";
import "./ProfileImg2.css";

const ProfileImg2 = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/profileimg1");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/whenfollowzero");
  }, [navigate]);

  return (
    <div className="profileimg2">
      <Frame1
        headerLeft="-0.062rem"
        headerWidth="27rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
      <div className="frame16">
        <div className="frame-parent1">
          <button className="input-box-wrapper6">
            <div className="input-box15">
              <div className="app">App 교육 목록으로</div>
            </div>
          </button>
          <div className="input-box-wrapper7" onClick={onFrameContainerClick}>
            <div className="input-box16">
              <div className="sns">SNS / 기능 사용해보기</div>
            </div>
          </div>
        </div>
        <div className="div24">ID 님, INSTAGRAM에 오신 것을 환영합니다 !</div>
        <UserLogo
          imageRemovebgPreview1="/appguide/instagram/ProfileBig.png"
          propPosition="absolute"
          propTop="0rem"
          propLeft="2.188rem"
          propWidth="18.25rem"
          propHeight="17.125rem"
          propRight="unset"
          propBottom="unset"
          propHeight1="80.66%"
          propWidth1="75.68%"
          propTop1="10.58%"
          propRight1="11.3%"
          propBottom1="8.76%"
          propLeft1="13.01%"
        />
      </div>
    </div>
  );
};

export default ProfileImg2;
