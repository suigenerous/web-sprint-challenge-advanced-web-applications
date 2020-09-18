import React, { useState, useEffect } from "react";

import {axiosWithAuth} from '../utils/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [edited, setEdited] = useState(false);
 
  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  },[edited])

  return (
    <>
      <ColorList colors={colorList} update = {setEdited} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
