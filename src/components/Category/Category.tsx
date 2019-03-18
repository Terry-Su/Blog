import React, { Component } from 'react'
import { connect } from 'react-redux'

import AbstractCategory from '@/__typings__/AbstractCategory'
import DefaultComponentProps from '@/__typings__/DefaultComponentProps'
import { STYLE_CATEGORY_PADDING_WIDTH } from '@/styles/STYLES'

class Props extends DefaultComponentProps {
  category: AbstractCategory
}

class State {
  isExpanding: boolean
}

const Category = connect()(
  class extends Component<Props, State> {
    state: State = {
      isExpanding: null
    }
    constructor(props: Props) {
      super(props)
      this.state.isExpanding = props.category.expanded
    }

    onIconClick = () => {
      this.setState(prev => ({
        isExpanding: !prev.isExpanding
      }))
    }

    render() {
      const {
        name,
        categories,
        expanded,
        hasRemarks,
        remarks
      } = this.props.category
      const isLast = categories.length === 0
      const { isExpanding } = this.state
      return (
        <div
          style={{
            minWidth: "100%"
          }}
        >
          <div
            style={{
              boxSizing: `border-box`,
              display: `inline-block`,
              height: `37px`,
              lineHeight: `37px`,
              padding: `0 40px 0 40px`,
              color: `#717171`,
              cursor: `pointer`
            }}
          >
            {!isLast && (
              <span
                style={{
                  cursor: "pointer"
                }}
                onClick={this.onIconClick}
              >
                {isExpanding ? "∧" : "∨"}
              </span>
            )}
            <span
              style={{
                margin: `0 0 0 7px`,
                whiteSpace: "nowrap"
              }}
              onClick={() =>
                this.props.dispatch({
                  type: "articles/UPDATE_LIST_REMARKS",
                  listRemarks: remarks
                })
              }
            >
              {name}
            </span>
          </div>
          {/* # Following */}
          <div
            style={{
              boxSizing: "border-box",
              padding: `0 0 0 ${STYLE_CATEGORY_PADDING_WIDTH}px`,
              display: isExpanding ? "block" : "none"
            }}
          >
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </div>
        </div>
      )
    }
  }
)

export default Category
