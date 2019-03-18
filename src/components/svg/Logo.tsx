import React, { Component } from 'react'

import DefaultComponentProps from '@/__typings__/DefaultComponentProps'

class Props extends DefaultComponentProps {
  width?: string
  height?: string
}

class State {}

export default class Logo extends Component<Props, State> {
  render() {
    return (
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIxMnB4IiBoZWlnaHQ9IjE0NnB4IiB2aWV3Qm94PSIwIDAgMjEyIDE0NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTAuMiAoNTUwNDcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnRzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InRzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjcuMDAwMDAwLCAtMzMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRDhEOEQ4IiB4PSI2OCIgeT0iMSIgd2lkdGg9IjIxMCIgaGVpZ2h0PSIyMTAiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzFCQzJGQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc2LjAwMDAwMCwgMTA1LjAwMDAwMCkgcm90YXRlKDE1LjAwMDAwMCkgdHJhbnNsYXRlKC0xNzYuMDAwMDAwLCAtMTA1LjAwMDAwMCkgIiB4PSIxNDYiIHk9IjEwMSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjgiPjwvcmVjdD4KICAgICAgICAgICAgPHRleHQgaWQ9IlMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2OS4xMDE0OTgsIDk5LjMyODM4MSkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTE2OS4xMDE0OTgsIC05OS4zMjgzODEpICIgZm9udC1mYW1pbHk9IlJvYm90by1UaGluLCBSb2JvdG8iIGZvbnQtc2l6ZT0iMjg4IiBmb250LXN0eWxlPSJjb25kZW5zZWQiIGZvbnQtd2VpZ2h0PSIzMDAiIGZpbGw9IiMxQkMyRkEiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9Ijg5LjQyOTg3OTMiIHk9IjE5Ny44MjgzODEiPlM8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="  { ...this.props } />
    )
  }
}