import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import DefaultComponentProps from '@/__typings__/DefaultComponentProps'
import { PATH_ABOUT, PATH_HOW_IT_WORKS_SERIES } from '@/constants/paths'
import { URL_GITHUB } from '@/constants/urls'
import getDefaultData, { getCurrentPagePath } from '@/helpers/getDefaultData'
import { STYLE_LAYOUT_HOME_HEADER_HEIGHT } from '@/styles/STYLES'
// import { About, Home } from '@cache/App'

import ResolvedLink from '../ResolvedLink'
import Logo from '../svg/Logo'

class Props extends DefaultComponentProps {
  isMini?: boolean
  history?: any
}

class State {}

class Header extends Component<Props, State> {
  onLogoClick = (event, defaultOnClick) => {
    defaultOnClick(event)
  }

  onLinkMouseMove = (path: string) => {
    const { pathnameRoot } = getDefaultData()
    if (path === `${pathnameRoot}${PATH_ABOUT}`) {
      // About.preload()
    }

    if (path === pathnameRoot) {
      // Home.preload()
    }
  }

  onLogoSectionMouseMove = () => {
    // Home.preload()
  }

  render() {
    const { isMini = false } = this.props
    const currentPath = getCurrentPagePath()
    const {
      pathnameRoot,
      logoTitle,
      texts = {},
      blogGithub = ""
    } = getDefaultData()
    return (
      <StyledRoot isMini={isMini}>
        <span onMouseMove={this.onLogoSectionMouseMove}>
          <ResolvedLink to={pathnameRoot} onClick={this.onLogoClick}>
            <StyledLogoWrapper isMini={isMini}>
              <Logo height={!isMini ? "30" : "24"} className="logo"/>
              <span className="logoTitle">{logoTitle}</span>
            </StyledLogoWrapper>
          </ResolvedLink>
        </span>
        <StyledLinksWrapper isMini={isMini}>
          {[
            [texts.navArticles, pathnameRoot],
            // ["HOW IT WORKS SERIES", PATH_HOW_IT_WORKS_SERIES],
            [texts.navAbout, `${pathnameRoot}${PATH_ABOUT}`]
          ].map(([value, path], index) => (
            <StyledLinkWrapper
              key={index}
              isMini={isMini}
              currentPath={currentPath}
              path={path}
              onMouseMove={() => this.onLinkMouseMove(path)}
            >
              <ResolvedLink to={path}>{value}</ResolvedLink>
            </StyledLinkWrapper>
          ))}
          <StyledLinkWrapper isMini={isMini} currentPath={currentPath}>
            <a href={'https://github.com/Terry-Su'}>GITHUB</a>
          </StyledLinkWrapper>
        </StyledLinksWrapper>
      </StyledRoot>
    )
  }
}

export default withRouter(Header)

const StyledRoot: any = styled.div`
  display: flex;
  flex-direction: ${(props: any) => (!props.isMini ? "column" : "row")};
  justify-content: ${(props: any) =>
    !props.isMini ? "flex-start" : "space-around"};
  align-items: center;
  width: "100%";
  height: ${STYLE_LAYOUT_HOME_HEADER_HEIGHT}px;
`

const StyledLogoWrapper: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${(props: any) => (!props.isMini ? "30px 0 0 0" : "0")};

  > .logoTitle {
    margin: ${(props: any) => (!props.isMini ? "0 0 0 15px" : "10px")};
    font-size: ${(props: any) => (!props.isMini ? "24px" : "18px")};
    font-weight: bold;
    letter-spacing: 0px;
    color: #555;
  }
`

const StyledLinksWrapper: any = styled.div`
  display: flex;
  justify-content: ${(props: any) =>
    !props.isMini ? "center" : "flex-end"};
  margin: ${(props: any) => (!props.isMini ? "30px 0 0 0" : "")};

  @media (max-width: 576px){
    width: 100%;
    flex-wrap: wrap;   
  }
`

export const StyledLinkWrapper: any = styled.div`
  display: inline-flex;
  justify-content: center;
  color: ${({ isMini, currentPath, path }: any) =>
    !isMini ? (currentPath === path ? "#555!important" : "#aaa") : "#aaa"};

  letter-spacing: 1px;

  :hover {
    color: #888;
  }

  @media (max-width: 576px){
    flex: 1;
  }

  a {
    font-size: 16px;
    color: unset;
    text-decoration: none;
    ${(props: any) =>
      !props.isMini
        ? `
    margin: 0 25px;
    `
        : `
    margin: 0 10px;
    `}
    @media (max-width: 576px){
      margin: 0;
    }
  }
`
