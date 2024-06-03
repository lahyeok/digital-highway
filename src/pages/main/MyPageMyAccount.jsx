import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import MainFooter from "../../components/main/MainFooter";
import "./MyPageMyAccount.css";
import axios from "axios"

const MyPageMyAccount = () => {
  const navigate = useNavigate();
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // Chatbot functions

  const [user, setUser] = useState({
    userID:"",
    userName:"",
    password:"",
    phoneNum:""
  });

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onMyPageMenuButton3Click = useCallback(() => {
    navigate("/mypageguidelist");
  }, [navigate]);

  const onMyPageMenuButton2Click = useCallback(() => {
    navigate("/mypagestoragebox");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  useEffect(()=>{
    async function getMyPage(){
      try{
        const response = await axios.get('http://localhost:4000/community/myPage',{withCredentials:true});
        console.log(response.data)
        setUser(response.data);
      }catch(error){
        console.error('오류발생',error);
      }
    }
    getMyPage();
  },[]);
  // 비밀번호 전체 가리는 함수
  const maskPassword = (password) => {
    if (password === ""){
      return ""
    }
    return "***********";
  };
// 전화번호를 마스킹하여 반환하는 함수
const maskPhoneNumber = (phoneNumber) => {
  if(phoneNumber === ""){
    return ""
  }
  // 전화번호의 형식이 "000-1234-5678"일 때
  const parts = phoneNumber.split("-");
  console.log(parts)
  // "+82) 000-****-****" 형식으로 반환
  return `+82) ${parts[0]}-****-****`;
};

const onStartButtonClick = () => {
  console.log('Start button clicked');
  try {
    activateChatBot();
  } catch (error) {
    console.error('Error activating ChatBot:', error);
  }
};

  return (
    <div className="mainpage-mypagemyaccount">
      <section className="mainpage-chatbot7">
        <img className="mainpage-box-icon7" alt="" src="main/box1.svg" />
        <div className="mainpage-intro8">
          <span className="mainpage-intro-txt7">
            <p className="mainpage-p22">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p22">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start7" onClick={onStartButtonClick}>
          <div className="mainpage-start-child4">
            <button className="mainpage-button22">시작하기</button>
          </div>
        </div>
        <img className="mainpage-character-icon7" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      <main className="mainpage-myaccountmain">
        <div className="mainpage-myaccountmaincontent">
          <div className="mainpage-myaccountmaincontenttext2">
            <div className="mainpage-myaccountmaincontenttext2d">
              <div className="mainpage-do">{maskPhoneNumber(user.phoneNum)}</div>
            </div>
            <div className="mainpage-myaccountmaincontenttext2c">
              <div className="mainpage-do">{maskPassword(user.password)}</div>
            </div>
            <div className="mainpage-myaccountmaincontenttext2b">
              <div className="mainpage-do">{user.userID}</div>
            </div>
            <div className="mainpage-myaccountmaincontenttext2a">
              <div className="mainpage-do">{user.userName}</div>
            </div>
          </div>
          <div className="mainpage-myaccountmaincontenttext1">
            <div className="mainpage-div127">전화번호</div>
            <div className="mainpage-div128">비밀번호</div>
            <div className="mainpage-div129">아이디</div>
            <div className="mainpage-div130">이름</div>
          </div>
          <button className="mainpage-myaccountmaincontentfixbutton2">
            <div className="mainpage-div131">수정</div>
          </button>
          <button className="mainpage-myaccountmaincontentfixbutton1">
            <div className="mainpage-div131">수정</div>
          </button>
        </div>
        <div className="mainpage-mypagemenubuttonset">
          <button
            className="mainpage-mypagemenubutton3"
            onClick={onMyPageMenuButton3Click}
          >
            <div className="mainpage-div133">진행 중인 가이드</div>
          </button>
          <button
            className="mainpage-mypagemenubutton2"
            onClick={onMyPageMenuButton2Click}
          >
            <div className="mainpage-div134">보관함</div>
          </button>
          <button className="mainpage-mypagemenubutton1">
            <div className="mainpage-div135">나의 정보</div>
          </button>
        </div>
      </main>
      <header className="mainpage-mypageheader">
        <button className="mainpage-headermyinfobutton6">
          <div className="mainpage-div136">내 정보</div>
        </button>
        <div className="mainpage-headertitle7" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon9"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div137">디지털지름길</div>
        </div>
        <button
          className="mainpage-headerbackbutton10"
          onClick={onHeaderBackButtonClick}
        >
          <div className="mainpage-div138">뒤로가기</div>
        </button>
      </header>
      <MainFooter />
    </div>
  );
};

export default MyPageMyAccount;