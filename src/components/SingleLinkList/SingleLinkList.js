import React, { useState, useEffect } from "react";
import Node from "../Node/Node";
// import { motion, AnimateSharedLayout } from "framer-motion";
// import Header from "../Header/Header";
import ListToolBar from "../ListToolBar/ListToolBar";
import ListModel from "../../models/SingleLinkListModel";

const initList = new ListModel();
initList.push(
  "eddie",
  "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
);
initList.push(
  "monica",
  "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
);
initList.push(
  "kiki",
  "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
);

export default function SingleLinkList() {
  const [list, setList] = useState([]);
  const [currentMethod, setCurrentMethod] = useState("push");
  const [currentColor, setCurrentColor] = useState(
    "linear-gradient(212.42deg, #7EF3B4 14.47%, #56A078 85.83%)"
  );

  useEffect(() => {
    convertListToArray();
  }, []);

  const convertListToArray = () => {
    const arr = [];
    let node = initList.head;
    while (node) {
      arr.push(node);
      node = node.next;
    }
    setList(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // function push() {
  //   tempList.push("push");
  //   convertListToArray();
  // }

  // function pop() {
  //   tempList.pop();
  //   convertListToArray();
  // }

  // function shift() {
  //   tempList.shift();
  //   convertListToArray();
  // }

  // function unshift() {
  //   tempList.unshift("unshift");
  //   convertListToArray();
  // }

  // function get(index) {
  //   tempList.get(index);
  //   convertListToArray();
  // }

  return (
    // <AnimateSharedLayout>
    //   <div onClick={shift} className="SingleLinkList">
    //     {list.map((node, index) => {
    //       return (
    //         <NodeItem value={node.value} next={node.next} key={node.key} />
    //       );
    //     })}
    //   </div>
    // </AnimateSharedLayout>
    <div className="SingleLinkList">
      <div className="SingleLinkList-wrapper wrapper">
        <ListToolBar
          setCurrentMethod={setCurrentMethod}
          currentMethod={currentMethod}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          handleSubmit={handleSubmit}
        />
        <h2 className="SingleLinkList-header">Singly Linked List</h2>
        <section className="SingleLinkList-nodeContainer">
          {list.map((item, index) => {
            return (
              <Node
                key={item.key}
                value={item.value}
                next={item.next ? item.next.value : "null"}
                index={index}
                color={item.color}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}
