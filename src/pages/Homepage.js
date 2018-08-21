import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import InformationTabs from "../components/Tabs/InformationTabs";
import EditorTabs from "../components/Tabs/EditorTabs";
import Instructions from "../components/Instructions";
import TopBar from "../components/TopBar";

const ReactGridLayout = WidthProvider(RGL);

class Homepage extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    isDraggable: false,
    isResizable: false,
    items: 6,
    rowHeight: 100,
    onLayoutChange() {},
    cols: 12
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = {
      layout
    };
  }


  generateDOM() {
    return [
      <div key="bar">
      <TopBar />
      </div>,
      <div key="1">
        <EditorTabs />
      </div>,
      <div key="2">
        <InformationTabs />
      </div>,
      <div key="6">
        <Instructions />
      </div>
    ];
  }

  generateLayout() {
    return [
      {
        x: 0,
        y: 0,
        w: 12,
        h: 0.64,
        i: "bar",
      },
      {
        x: 0,
        y: 1,
        w: 8,
        h: 5.3,
        i: "1",
      },
      {
        x: 8,
        y: 1,
        w: 4,
        h: 6,
        i: "2"
      },
      {
        x: 8,
        y: 0,
        w: 4,
        h: 5,
        i: "3"
      },
      {
        x: 8,
        y: 0,
        w: 4,
        h: 4,
        i: "4"
      },
      {
        x: 8,
        y: 0,
        w: 4,
        h: 1,
        i: "5"
      },
      {
        x: 0,
        y: 1,
        w: 8,
        h: 2,
        i: "6"
      }
    ];
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        style={{background: "rgba(83,52,85,0.7)"}}
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}>
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

// if (require.main === module) {
//   require("../test-hook.jsx")(module.exports);
// }

export default Homepage;
