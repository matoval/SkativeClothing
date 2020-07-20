import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: `100%`,
        padding: `10px 0`,
        textAlign: `center`,
        borderBottom: `2px solid #000`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#000`,
            textDecoration: `none`,
            fontFamily: `'Bungee Outline', cursive`,
            fontSize: `60px`,
            margin: `0`,
            padding: `0`
          }}
        >
          SKATIVECLOTHING.COM
        </Link>
      </h1>
    </div>
    <div
      className="nav-bar"
      style={{
        display: `flex`,
        justifyContent: `center`,
        height: `60px`,
        borderBottom: `2px solid #000`
      }}
    >
      <ul
        style={{
          width: `500px`,
          height: `60px`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          fontWeight: `bold`
        }}
      >
        <Link
          to="/"
          style={{
            color: `var(--main-font)`,
            textDecoration: `none`
          }}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          style={{
            color: `var(--main-font)`,
            textDecoration: `none`
          }}
        >
          SHOP
        </Link>
        <Link
          to="/about"
          style={{
            color: `var(--main-font)`,
            textDecoration: `none`
          }}
        >
          ABOUT
        </Link>
        <Link
          to="/cart"
          style={{
            color: `var(--main-font)`,
            textDecoration: `none`
          }}
        >
          CART
        </Link>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
