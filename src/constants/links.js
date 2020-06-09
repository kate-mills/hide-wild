import React from "react"
import { FaShoppingCart } from "react-icons/fa"

export default [
  {
    path: "/jewelry",
    text: "jewelry",
  },
  {
    path: "/about",
    text: "about",
  },
  {
    path: "/contact",
    text: "contact",
  },
  {
    path: "/",
    text: (
      <FaShoppingCart
        className="snipcart-checkout"
        style={{
          color: "#877A6D",
          fontSize: "1.5rem",
        }}
      />
    ),
  },
]
