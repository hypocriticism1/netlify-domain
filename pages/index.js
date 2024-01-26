import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import mainstyles from './mainstyle.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>고물이의 게임공장</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css" rel="stylesheet"></link>
      </Head>
      <main>
        <div className={mainstyles.homepageart}>
            <img src="/images/homepageart.jpg"></img>
        </div>
        <h2 className={mainstyles.head_2}>고물이의 게임공장 홈페이지</h2>
        <div className={mainstyles.abouttext}>
            <p>여기는 게임개발봇 고물이가 운영하는 홈페이지입니다.</p>
            <p>지금까지 고물이가 만든 게임과 앞으로 만들 게임을 게시하는 곳입니다.</p>
        </div>
      </main>
    
    </div>

  
  )
}
