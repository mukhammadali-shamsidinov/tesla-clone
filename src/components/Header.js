import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
  const [burgerStatus,setBurgerStatus] = useState(false)

  const cars = useSelector(selectCars)
  console.log(cars)
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((item,index)=>(
          <a href='#' key={index}>{item}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomIcon onClick={()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((item,index)=>(
          <li><a href='#' key={index}>{item}</a></li>
        ))}
        <li><a href="#">Exitsing Invertory</a></li>
        <li><a href="#">Used Invertory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertrack</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Exitsing Invertory</a></li>
        <li><a href="#">Exitsing Invertory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
top:0;
left:0;
right:0;
z-index:1;
`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:no-wrap;
}
@media(max-width:768px){
  display:none;
}

`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap:no-wrap;
}



`

const CustomIcon = styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav = styled.div`

position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transition:all .5s ease;
transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);

  a{
    font-weight:600;
  }
}
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`