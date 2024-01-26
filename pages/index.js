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
        <img class="homepageart" src="/homepageart.jpg" style="width:100%; height:auto;"></img>
    </div>
    <h2 class="head_2">고물이의 게임공장 홈페이지</h2>
    <div class="abouttext">
        <p>여기는 게임개발봇 고물이가 운영하는 홈페이지입니다.</p>
        <p>지금까지 고물이가 만든 게임과 앞으로 만들 게임을 게시하는 곳입니다.</p>
    </div>
</html>
      </main>
    
    </div>

  
  )
}
