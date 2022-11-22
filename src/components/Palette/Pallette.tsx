import { Flex } from "@chakra-ui/react";
import Color from "../Color/Color";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Values from "values.js";
import Header from "../Header/Header";

function Palette() {
  const [list, setList] = useState(new Values('red').all(10));

  console.log(list);

  const genRanHex = () => {
    return '#' + [...Array(6)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  };

  const changeList = () => {
    const color = new Values(genRanHex()).all(10);
    setList(color);
  };

  return (
    <>
      <Header changeList={changeList} />
      <Flex wrap="wrap">
        {list.map((item) => (
          <Color key={uuidv4()} hex={item.hex}/>
        ))}
      </Flex>
    </>
  );
}

export default Palette;
