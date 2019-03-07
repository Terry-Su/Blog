import React, { Component } from 'react'

import DefaultComponentProps from '@/__typings__/DefaultComponentProps'
import Markdown from '@/components/Markdown/Markdown'
import LayoutHome from '@/layouts/LayoutHome'

class Props extends DefaultComponentProps {}

class State {}

export default class About extends Component<Props, State> {
  render() {
    return (
      <LayoutHome>
        <div
          style={{
            boxSizing: `border-box`,
            display: `flex`,
            justifyContent: `center`,
            width: `100%`,
            padding: `40px 0 0 0`
          }}
        >
          <div
            style={{
              width: `700px`
            }}
          >
            <Markdown />
          </div>
        </div>
      </LayoutHome>
    )
  }
}
