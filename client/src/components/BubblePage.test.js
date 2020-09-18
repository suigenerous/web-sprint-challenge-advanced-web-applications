import React, { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from './ColorList'
import Bubbles from './Bubbles'
import {axiosWithAuth as mockAxiosWithAuth} from '../utils/axiosWithAuth';

let colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd"
    },
    id: 5
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba"
    },
    id: 6
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99"
    },
    id: 7
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99"
    },
    id: 8
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd"
    },
    id: 9
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
];

test("Fetches data and renders the bubbles", async () => {
  render(<BubblePage/>)
  render (<ColorList colors = {colors}/>);
  colors.forEach(async color => {
    const tempColorNode = await screen.findByText(color.color)
    expect(tempColorNode).toBeInTheDocument()
  })
  render(<Bubbles colors = {colors}/>);
  colors.forEach(async color => {
    const tempColorNode = await screen.findByText(color.code.hex)
    expect(tempColorNode).toBeInTheDocument()
  })
});
