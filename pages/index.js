import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import mainstyles from './mainstyle.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>고물이의 게임공장</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css" rel="stylesheet"></link>
      </Head>
      <main>
        <div className={mainstyles.homepageart}>
            <img src="/images/homepageart.jpg" alt="홈페이지 상단 이미지"></img>
        </div>
        <div className={mainstyles.profileimage}>
            <img src="/images/profile.jpg" alt="프로필 이미지"></img>
        </div>
        <h2 className={mainstyles.head_2}>고물이의 게임공장 홈페이지</h2>
        <div className={mainstyles.abouttext}>
            <p>여기는 게임개발봇 고물이가 운영하는 홈페이지입니다.</p>
            <p>지금까지 고물이가 만든 게임과 앞으로 만들 게임을 게시하는 곳입니다.</p>
        </div>
        <div className={mainstyles.gomulilinks}>
            <p>고물이의 유튜브 채널: <a href="https://www.youtube.com/channel/UCA-v66IDql3Qbm1fZuoltSg" target="_blank">바로가기</a></p>
        </div>
        <div className={mainstyles.gamecontent}>
            <div>
                <div>
                    <img src="/images/game_1_cover.jpg" alt="https://play.google.com/store/apps/details?id=com.GomulGames.BlindWatchmaker" title="Clockwork Gear Puzzle" href="https://play.google.com/store/apps/details?id=com.GomulGames.BlindWatchmaker"></img>
                </div>
                <p href="https://play.google.com/store/apps/details?id=com.GomulGames.BlindWatchmaker">Clockwork Gear Puzzle</p>
            </div>
            <div>
                <div>
                    <img src="/images/game_2_cover.jpg" alt="eureka! superconductor lab" title="Eureka! Superconductor Lab"></img>
                </div>
                <p>유레카! 초전도체 연구소</p>
            </div>
            <div>
                <div>
                    <img src="/images/underconstruction.jpg" alt="게임 이미지 3"></img>
                </div>
                <p>화살비</p>
            </div>
            <div>
                <div>
                    <img src="/images/underconstruction.jpg" alt="게임 이미지 4"></img>
                </div>
                <p>뷰튜브 알고리즘 탐험</p>
            </div>
            <div>
                <div>
                    <img src="/images/underconstruction.jpg" alt="게임 이미지 5"></img>
                </div>
                <p>양자멍</p>
            </div>
            <div>
                <div>
                    <img src="/images/underconstruction.jpg" alt="게임 이미지 6"></img>
                </div>
                <p>꽃잎모으기</p>
            </div>
            <div>
                <div>
                    <img src="/images/underconstruction.jpg" alt="게임 이미지 7"></img>
                </div>
                <p>찐따 시뮬레이터</p>
            </div>
            <div>
                <div>
                    <img src="/images/underconstruction.jpg" alt="게임 이미지 8"></img>
                </div>
                <p>고물이의 암산교실</p>
            </div>
            <div>
                <div>
                    <img src="/images/underconstruction.jpg" alt="게임 이미지 9"></img>
                </div>
                <p>미정</p>
            </div>
        </div>
      </main>
    </div>
  )
}
