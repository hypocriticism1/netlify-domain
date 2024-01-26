import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>고물이의 게임공장</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
<html>
    <head>
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" href="mainstyle.css"></link>
    </head>
    <div>
        <img class="homepageart" src="homepageart.jpg" style="width:100%; height:auto;">
    </div>
    <div class="profileimage">
        <img src="profile.jpg">
    </div>
    <h2 class="head_2">고물이의 게임공장 홈페이지</h2>
    <div class="abouttext">
        <p>여기는 게임개발봇 고물이가 운영하는 홈페이지입니다.</p>
        <p>지금까지 고물이가 만든 게임과 앞으로 만들 게임을 게시하는 곳입니다.</p>
    </div>
    <div class="gomulilinks">
        <p>고물이의 유튜브 채널: <a href="https://www.youtube.com/channel/UCA-v66IDql3Qbm1fZuoltSg" target="_blank">바로가기</a></p>
    </div>
    <div class="gamecontent">
        <div>
            <div>
                <img src="game_1_cover.jpg">
            </div>
            <p>Clockwork Gear Puzzle</p>
        </div>
        <div>
            <div>
                <img src="game_2_cover.jpg">
            </div>
            <p>유레카! 초전도체 연구소</p>
        </div>
        <div>
            <div>
                <img src="underconstruction.jpg">
            </div>
            <p>화살비</p>
        </div>
        <div>
            <div>
                <img src="underconstruction.jpg">
            </div>
            <p>뷰튜브 알고리즘 탐험</p>
        </div>
        <div>
            <div>
                <img src="underconstruction.jpg">
            </div>
            <p>양자멍</p>
        </div>
        <div>
            <div>
                <img src="underconstruction.jpg">
            </div>
            <p>꽃잎모으기</p>
        </div>
        <div>
            <div>
                <img src="underconstruction.jpg">
            </div>
            <p>찐따 시뮬레이터</p>
        </div>
        <div>
            <div>
                <img src="underconstruction.jpg">
            </div>
            <p>고물이의 암산교실</p>
        </div>
        <div>
            <div>
                <img src="underconstruction.jpg">
            </div>
            <p>미정</p>
        </div>
    </div>
</html>
      </main>
    
    </div>

  
  )
}
