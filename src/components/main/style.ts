import styled from "styled-components";




export const Container = styled.main`

display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;

.container-main{
background: #FFFFFF;
border: 1px solid #EFF2F7;
box-shadow: 0px 5px 12px rgba(8, 15, 52, 0.05);
border-radius: 25px;
width: 30rem;
height: 48rem;
display: flex;
justify-content: center;
padding: 2rem;

img{
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

p{
  text-align: center;
  color: #5C6779;
  font-size: 16px;
  line-height: 26px;
  margin-top: 0.500rem;
}
h3{
  text-align: center;
  color: #030B1A;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
  margin-top: 1rem;
}
.bg-img{
    display: flex;
    justify-content: center;
    img{
      margin: 0 auto;
    }
  
}
.midia-social{
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
    a img{
         -webkit-transition: 0.4s ease;
         transition: 0.4s ease;
    }
    a img:hover {
         -webkit-transform: scale(1.08);
         transform: scale(1.08);
    }
  img{
    width: 1.938rem;
    height: 1.938rem;
  }
}
.links{
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  img{
  width: 3rem;
  height: 3rem;
  }

  ul{

   
    
    li{
      width: 24rem;
      height: 3.500rem;
      background: #FFFFFF;
      border: 0.935287px solid #EFF2F7;
      box-shadow: 0px 1.87057px 7.48229px rgba(48, 48, 50, 0.06);
      border-radius: 74.8229px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
     
      &:hover{
        
         background: #030B1A;
      span{
        color: white;
      }
      }
      }
      a{
          display: flex;
          align-items: center;
          gap: 10rem;
        span{
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;
          color: #030B1A;
        }
      }
    }
  }
}
`