import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Image from 'next/image'


export default function Home() {
  return (
    <div>

    <NavBar1>
      <Logo1 src='./lucaslogo.png' />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
      <NavBarP>Lucas Passos - Software Engineering</NavBarP>
      <Line2 />
    </NavBar1>
    <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src='/video1.mp4' type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>The world is online, your ideas should be too</HeroH1>
                <HeroP>                    
               Discover how my technical skills can help you turn your dreams into reality. scroll down the page ;)
                </HeroP>               
            </HeroContent>
        </HeroContainer>

        <WhoContainer>
            <WhoBg>
               
            </WhoBg>
            <WhoContent>
                <WhoH1>Who am i ?</WhoH1>
                <Avatar src="/avatar1.jpg" />
                <WhoP>                    
               Lucas Passos, 27 years old software engineer, passionate about data structure, applied mathematics and behavior of algorithms, expert in what concerns the modern javascript stacks, statistics/probability and database. With certifications valid worldwide and working experience in projects from Brazil, Canada and New Zealand
                </WhoP>               
            </WhoContent>
        </WhoContainer>


        <SkillsContainer>
            <SkillsBg>
                
            </SkillsBg>
            <SkillsContent>
                <SkillsH1>My Skills</SkillsH1>
               
                <SkillsP>                    
                <Logo2 src='./reactlogo.png' />
                <Logo2 src='./nextjslogo.png' />
                <Logo2 src='./nodejslogo.png' />
                <Logo2 src='./vuelogo.png' />
                <Logo2 src='./electronlogo.png' />
                <Logo2 src='./pythonlogo.png' />
                <Logo2 src='./firebaselogo.png' />
                <Logo2 src='./psqllogo.png' />
                <Logo2 src='./mongologo.png' />
                <Logo2 src='./dockerlogo.png' />
                <Logo2 src='./awslogo.png' />
                <Logo2 src='./herokulogo.png' />
                </SkillsP>               
            </SkillsContent>
        </SkillsContainer>


        <BookContainer>
            <BookBg>
                
            </BookBg>
            <BookContent>
                <BookH1>CV</BookH1>
                
                <BookP>                    
                Feel Free to download my CV (.pdf)
                </BookP>               
                <BookP>                    
                <BookButton>
                  <BookButtonP>
                    Download CV (.pdf)
                  </BookButtonP>

                </BookButton>
                <Logo3 src='./cvlogo.svg' />
                </BookP>               
            </BookContent>
        </BookContainer>


        <ContContainer>
            <ContBg>
                
            </ContBg>
            <ContContent>
                <ContH1>Contact Me</ContH1>
                
                <ContP>                    
                
              By clicking on the icons you will be redirected to direct communication channels with me ;)
                </ContP>               
                <ContP>                    
                
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5521979478857?&text=Lucas">
                <ContIcon src="/zaplogo.png" href="mailto:lucas.passos@skadi.co.nz" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:lucas.passos@skadi.co.nz">
                <ContIcon src="/emaillogo.png" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucasdezerto/">
                <ContIcon src="/linkedinlogo.png" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/lucasdpassos">
                <ContIcon src="/githublogo.png" />
                </a>
                </ContP>               
            </ContContent>
        </ContContainer>

    </div>
  )
}



export const NavBar1 = styled.div`
  width:100%;
  height:110px;
  background-color: #111111;
  position: relative;
  z-index: -1
  display: flex;

  

`

export const Logo1 = styled.img`
  width:110px;
  max-height:110px;
  

`
export const Avatar = styled.img`  
  width: 150px;
  height: 150px;  
  background-position: top center;
  border-radius: 50%;

  

`
export const Logo2 = styled.img`
  width:130px;
  max-height:130px;
  padding: 5px;
  
  :hover {
    border: 1px solid white;
  }

`
export const Line1 = styled.div`
    width: 112px;
    height: 47px;
    border-bottom: 1px solid #ff314b;
    position: absolute;

`
export const Line2 = styled.div`
    width: 112px;
    height: 100px;
    border-bottom: 1px solid #ff314b;
    position: absolute;

`

export const NavBarP = styled.p`    
  position: absolute;
  top: -2%;
  left: 35%;
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  color: azure;
  border-bottom: 1px solid #ff314b;
  @media screen and (max-width: 760px) {
    font-size: 25px;
}
  @media screen and (max-width: 480px) {
    font-size: 18px;
    top:12%;
}
`

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 760px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: 760px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
// ---------------------------------------------------- Session 2

export const WhoContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const WhoBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const WhoimgBg = styled.img`
    width: 30%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width: 760px) {
      width: 100%;
      height: 80%;
  }
    @media screen and (max-width: 480px) {
      font-size: 32px;
  }
  @media screen and (max-width: 1314px) {
    width: 80%;
    height:100%;
  }
  @media screen and (max-width: 321px) {
    width: 100%;
    height:80%;
  }
    
`

export const WhoContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WhoH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 760px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const WhoP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: 760px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`


// ----------------------------------------------------- Session 3

export const SkillsContainer = styled.div`
    background: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const SkillsBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


export const SkillsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SkillsH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 760px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const SkillsP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 760px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

// ------------------------------------------------------------------ Session 4

export const BookContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const BookBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const BookimgBg = styled.img`
    width: 30%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width: 760px) {
      width: 100%;
      height: 80%;
  }
    @media screen and (max-width: 480px) {
      font-size: 32px;
  }
  @media screen and (max-width: 1314px) {
    width: 80%;
    height:100%;
  }
  @media screen and (max-width: 321px) {
    width: 100%;
    height:80%;
  }
    
`

export const BookContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BookH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 760px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const BookP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 760px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const BookButton = styled.button`
    width: 400px;
    height: 45px;    
    background:none;
    border: 1px solid white;
    position:absolute;
    top:100%;
    left:5%;

    @media screen and (max-width: 760px) {
      width: 300px;
      left:3%;
      
  }

  :hover {
    border: 1px solid #ff314b;
    cursor: pointer;
  }
  

`

export const BookButtonP = styled.p`
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    letter-spacing: 10px;

    @media screen and (max-width: 760px) {
      letter-spacing: 4px;
      
  }
    
    
`
export const Logo3 = styled.img`
    width:90px;
    max-height:130px;
    top:90%;
    right:-20%;
    position:absolute;

    @media screen and (max-width: 760px) {
      top:300px;
      right:120px;
      
      
  }
      

`

// ------------------------------------------------------------------ Session 5

export const ContContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const ContBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const ContimgBg = styled.img`
    width: 30%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width: 760px) {
      width: 100%;
      height: 80%;
  }
    @media screen and (max-width: 480px) {
      font-size: 32px;
  }
  @media screen and (max-width: 1314px) {
    width: 80%;
    height:100%;
  }
  @media screen and (max-width: 321px) {
    width: 100%;
    height:80%;
  }
    
`

export const ContContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 760px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ContP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: 760px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const ContIcon = styled.img`
    max-width: 200px;
    max-height: 70px;

    :hover {
        border: 1px solid white;
      }
`

