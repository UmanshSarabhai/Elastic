import React from "react";
import ReactDOM from "react-dom";

import {
  ReactiveBase,
  DataSearch,
  MultiList,
  SelectedFilters,
  ReactiveList
} from "@appbaseio/reactivesearch";
import { Row, Button, Col, Card, Switch, Tree, Popover, Affix } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
const App = () => (
  <ReactiveBase
    app="dev"
    credentials="elastic:5gx8IDve9E3NJAyLOhCNl9yO"
    url="https://my-deployment-67c8b0.es.us-central1.gcp.cloud.es.io"
  >
    <Row gutter={16} style={{ padding: 20 }}>
      <Col span={12}>
        <Card></Card>
      </Col>
      <Col span={12}>
        <DataSearch
          componentId="search"
          dataField={["content"]}
          fieldWeights={[1]}
          fuzziness={0}
          highlightField={["content"]}
          style={{
            marginBottom: 20
          }}
        />

        <SelectedFilters />
        <div id="result">
          <ReactiveList
            componentId="result"
            dataField="_score"
            pagination={true}
            react={{
              and: ["search"]
            }}
            renderItem={renderItem}
            size={5}
            style={{
              marginTop: 20
            }}
          />
        </div>
      </Col>
    </Row>
  </ReactiveBase>
);

ReactDOM.render(<App />, document.getElementById("root"));
