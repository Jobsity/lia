import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import MonacoField from '../components/MonacoField/MonacoField';
import InformationTabs from '../components/InformationTabs';
import Instructions from '../components/Instructions';

const ReactGridLayout = WidthProvider(RGL);

class Homepage extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 6,
    rowHeight: 100,
    onLayoutChange: function() {},
    cols: 12
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = {
      layout,
      code: '// type your code...',
    };
  }

  editorDidMount(editor) {
    editor.focus();
  }

  generateDOM() {
    const code = this.state.code;
    const options = {
          selectOnLineNumbers: true
        };
    return [
      <div key={"1"}>{
        <MonacoField
          code={code}
          options={options}
          editorDidMount={this.editorDidMount}
        />}
      </div>,
      <div key={"2"}>
        <InformationTabs />
      </div>,
      <div key={"6"}>
        <Instructions />
      </div>
    ];
  }

  generateLayout() {
    return [
      {
        x: 0,
        y: 0,
        w: 8,
        h: 5,
        i: "1",
        static: true
      },
      {
        x: 8,
        y: 0,
        w: 4,
        h: 8,
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
        h: 3,
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
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

// if (require.main === module) {
//   require("../test-hook.jsx")(module.exports);
// }

export default Homepage;
