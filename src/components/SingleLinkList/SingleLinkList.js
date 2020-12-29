import React, { useState, useEffect } from "react";
import NodeItem from "../Node/Node";
import { motion, AnimateSharedLayout } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import ListToolBar from "../ListToolBar/ListToolBar";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.key = uuidv4();
  }
}

class List {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.length = 0;
      this.head = null;
      this.tail = null;
      return undefined;
    }
    let node = this.head;
    const prevTail = this.tail;

    while (node.next !== this.tail) {
      node = node.next;
    }
    this.tail = node;
    this.tail.next = null;
    this.length -= 1;
    return prevTail;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const curHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return curHead;
    }
    this.head = this.head.next;
    this.length -= 1;
    return curHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      const curHead = this.head;
      this.head = newNode;
      this.head.next = curHead;
      this.length += 1;
    }

    return this;
  }

  get(val) {
    if (this.length === 0 || this.length <= val) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < val; i += 1) {
      node = node.next;
    }
    return node;
  }
}

const tempList = new List();
tempList.push("eddie");
tempList.push("monica");
tempList.push("kiki");
tempList.unshift("mich");

export default function SingleLinkList() {
  const [list, setList] = useState([]);
  const [currentMethod, setCurrentMethod] = useState("push");

  useEffect(() => {
    convertListToArray();
  }, []);

  const convertListToArray = () => {
    const arr = [];
    let node = tempList.head;
    while (node) {
      arr.push(node);
      node = node.next;
    }
    setList(arr);
  };

  function push() {
    tempList.push("push");
    convertListToArray();
  }

  function pop() {
    tempList.pop();
    convertListToArray();
  }

  function shift() {
    tempList.shift();
    convertListToArray();
  }

  function unshift() {
    tempList.unshift("unshift");
    convertListToArray();
  }

  function get(index) {
    tempList.get(index);
    convertListToArray();
  }

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
        />
      </div>
    </div>
  );
}
