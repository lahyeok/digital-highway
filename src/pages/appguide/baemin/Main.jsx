import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();// 현재 위치의 정보를 받아옴

  //이전 페이지에서 전달받은 주소 값을 상태에서 추출
  const address = location.state?.address || "주소 정보가 없습니다.";

  const onComponent15ContainerClick = useCallback(() => {
    navigate("/maincontents/storelist");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("배달받고 싶은 주소의 \n 상세주소를 [303호]로 \n 입력해주세요.", "배달 앱의 메인 화면입니다. \n 여기서는 원하는 메뉴를 \n 선택하거나 검색할 수 있습니다. \n 족발/보쌈을 선택해주세요.", "선택한 메뉴의 가게들이 \n 기본순으로 정렬된 화면입니다. \n 정렬을 눌러 별점 높은순으로 \n 살펴보세요")},[])

  return (
    <div className="baeman-main">
      <div className="baeman-addresstext1">{address}</div> {/*화면에 주소 표시 */}
      <input className="baeman-main-child" placeholder="찾는 맛집 이름이 뭐예요?"/>
      <img
        className="baeman-search-icon1"
        alt=""
        src="/appguide/baemin/search@2x.png"
      />
      <div className="baeman-main-item" />
      <div className="baeman-main-inner" />
      <div className="baeman-div25">메뉴 선택</div>
      <div className="baeman-component-15-parent">
        <div className="baeman-component-15" onClick={onComponent15ContainerClick}>
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">족발·보쌈</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-89@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div27">
            <span className="baeman-txt3">
              <p className="baeman-p50">돈까스·</p>
              <p className="baeman-p50">회·일식</p>
            </span>
          </div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-891@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">고기·구이</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-892@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">피자·치킨</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-893@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">양식</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-894@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">중식</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-895@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">분식</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-896@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">카페·디저트</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-897@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">아시안</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-898@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">백반·죽</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-899@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">국수</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-8910@2x.png"
          />
        </div>
        <div className="baeman-component-16">
          <div className="baeman-component-15-child" />
          <div className="baeman-div26">햄버거</div>
          <img
            className="baeman-component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-8911@2x.png"
          />
        </div>
      </div>
      <div className="baeman-component-34">
        <img
          className="baeman-clipboard-icon"
          alt=""
          src="/appguide/baemin/search1@2x.png"
        />
        <div className="baeman-div38">검색</div>
      </div>
      <div className="baeman-component-35">
        <img
          className="baeman-clipboard-icon"
          alt=""
          src="/appguide/baemin/favorite1@2x.png"
        />
        <div className="baeman-div38">찜</div>
      </div>
      <div className="baeman-component-36">
        <img
          className="baeman-clipboard-icon"
          alt=""
          src="/appguide/baemin/clipboard@2x.png"
        />
        <div className="baeman-div38">주문내역</div>
      </div>
      <div className="baeman-component-37">
        <img
          className="baeman-clipboard-icon"
          alt=""
          src="/appguide/baemin/shopping-cart1@2x.png"
        />
        <div className="baeman-div38">장바구니</div>
      </div>
      <div className="baeman-component-38">
        <img
          className="baeman-clipboard-icon"
          alt=""
          src="/appguide/baemin/customer@2x.png"
        />
        <div className="baeman-div38">내 정보</div>
      </div>
    </div>
  );
};

export default Main;
