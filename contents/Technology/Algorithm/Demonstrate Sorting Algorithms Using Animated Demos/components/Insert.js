class Insert extends React.Component {
  constructor(props) {
    super( props )
    this.time = 0

    this.data = [8, 9, 4, 6, 3, 2, 1, 7, 5]

    this.state = {
      data: [...this.data],
      currentI: null,
      currentJ: null,
      isRunning: false
    }
  }

  asyncUpdate(arr, i, j) {
    const tmp = [...arr]
    this.time = this.time + 500
    const currentTime = this.time
    setTimeout(() => {
      this.setState({
        data: [...tmp],
        currentI: i,
        currentJ: j
      })
      if (currentTime === this.time) {
        this.setState({ isRunning: false })
      }
    }, this.time)
  }

  insertionSort(arr) {
    let i
    let j // j is marked item's index
    for (j = 1; j < arr.length; j++) {
      const tmp = arr[j] // removed marked item
      i = j
      this.asyncUpdate(arr, i, j)
      while (i > 0 && arr[i - 1] >= tmp) {
        arr[i] = arr[i - 1] // shift item right
        i = i - 1
      }
      // insert
      arr[i] = tmp
      this.asyncUpdate(arr, i, j)
    }
    this.asyncUpdate(arr)
  }

  getItemStyleBackground(index) {
    if (this.state.currentJ === index) {
      return "red"
    }
    if (this.state.currentI === index) {
      return "grey"
    }
    return "blue"
  }

  play(index) {
    this.time = 0
    this.setState({ data: [...this.data], isRunning: true }, () =>
      this.insertionSort(this.state.data)
    )
  }

  render() {
    const { data, activeI, activeJ, isRunning } = this.state
    return (
      <StyledRoot>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end"
          }}
        >
          {data.map((num, index) => (
            <span
              key={index}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "50px",
                height: `${num * 20}px`,
                margin: "2px",
                color: "#ddd",
                background: this.getItemStyleBackground(index)
              }}
            >
              {num}
            </span>
          ))}
        </div>
        <br />
        <StyledPlayButton
          isRunning={isRunning}
          onClick={() => this.play()}
          onMouseOver={() => this.play()}
        >
          play
        </StyledPlayButton>
      </StyledRoot>
    )
  }
}