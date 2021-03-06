import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Icon} from "react-icons-kit";
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right';

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={logo} />
          <Link className="signIn-btn">Sign In</Link>
        </div>
        {/* Header Content */}
        <div className="header-content">
            <Title>See what's next.</Title>
            <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME</Subtitle>
            <Link>
              try it now
              <Icon className="Icon" icon={ic_chevron_right} size={37}></Icon>
            </Link>
        </div>
      </HeaderComponent>
    );
  }
}
export default Header;

// Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top:25%;
    left: 50%;
    transform:translate(-50%, -50%);

`
//Header Container
const HeaderComponent = styled.div`
    .signIn-btn {
        right: 0;
        margin: 1.123rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2w ease-in;
        &:hover {
            background: var(--main-red-hover)
        }
    }

    // Header Top
    .header-top{
        position:relative;
        height:10rem;
        z-index:1;
    }

    // Header Content
    .header-content{
        wdidth: 65%;
        margin: 4.5rem auto 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }

    // Main offer button
    .main-offer-btn{
        display: inline-block;
        background: var(--main-red);
        text-transform: uppercase;
        outline: none;
        margin: 0 33%;
        border: none;
        padding: 1.5rem;
        border-raidus: 0.1875rem;
        font-size:center;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0,0,0,45);
        transition: background 0.2s ease-in;
        cursor: pointer;
        &:hover{
          background: var(--main-red-hover);
        }

        .Icon svg{
          vertical-align: bottom:
          margin-left: 1.5rem;
        }
    }
`;

// Main Title
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size:5rem;
    font-weight:700;
    line-height:1.1em;
`

// Subtitle
const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25rem;
    margin: 0 0 1.87rem;
    text-transform: uppercase;
`