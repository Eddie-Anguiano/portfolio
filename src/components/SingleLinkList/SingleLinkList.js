import React, { useState, useEffect } from "react";
// import NodeItem from "../Node/Node";
// import { motion, AnimateSharedLayout } from "framer-motion";
// import Header from "../Header/Header";
import ListToolBar from "../ListToolBar/ListToolBar";
import ListModel from "../../models/SingleLinkListModel";

const initList = new ListModel();
initList.push("eddie");
initList.push("monica");
initList.push("kiki");
initList.reverse();

export default function SingleLinkList() {
  const [list, setList] = useState([]);
  const [currentMethod, setCurrentMethod] = useState("push");
  const [currentColor, setCurrentColor] = useState("green");

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
        />
      </div>
    </div>
  );
}
