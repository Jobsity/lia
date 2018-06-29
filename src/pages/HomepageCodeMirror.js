import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import CodeMirror from 'react-codemirror';
import "../../node_modules/codemirror/lib/codemirror.css";


const ReactGridLayout = WidthProvider(RGL);

class HomepageCodeMirror extends React.PureComponent {
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

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
   console.log('onChange', newValue, e);
  }

  generateDOM() {
    const code = this.state.code;
    const options = {
          lineNumbers: true,
        };
    return [
      <div key={"1"}>
        <CodeMirror value={code} onChange={this.onChange} options={options} />
      </div>,
      <div key={"2"}>
        <span className="text">{"2"}</span>
      </div>,
      <div key={"3"}>
        <span className="text">{"3"}</span>
      </div>,
      <div key={"4"}>
        <span className="text">{"3"}</span>
      </div>,
      <div key={"5"}>
        <span className="text">{"3"}</span>
      </div>,
      <div key={"6"}>
        <span className="text">{"3"}</span>
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
        h: 1,
        i: "2"
      },
      {
        x: 8,
        y: 0,
        w: 4,
        h: 1.5,
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
        h: 2.5,
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

if (require.main === module) {
  require("../test-hook.jsx")(module.exports);
}

export default HomepageCodeMirror;
