import React from "react";
import { ThemeProvider } from "@emotion/react";
import styles from "./Styles.module.css";
import stylesSCSS from "./Styles.module.scss";
import { Button, Title } from "./Styles.styles";
import ReactBootstrap from "./ReactBootstrap";
import Marterial from "./Marterial";

// classnames: https://github.com/JedWatson/classnames
// import cn from 'classnames'
// let value = 'active'
// <h1 className={cn('foo', value, { bar: true })}></h1>
// => <h1 className="foo active bar"></h1>

const theme = {
  colors: {
    primary: "blue",
    success: "green",
    danger: "#f00",
    white: "#fff",
    black: "#000",
  },
};

export default function Styles() {
  return (
    <div>
      <h1>CSS Module</h1>
      <p className={styles.title}>Hello BC55</p>

      <h1>SCSS Module</h1>
      <p className={stylesSCSS.title}>Hello React</p>

      <ThemeProvider theme={theme}>
        <h1>CSS in JS</h1>
        <Title>Emotion</Title>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="success">Success</Button>
      </ThemeProvider>

      <ReactBootstrap />

      <hr />

      <Marterial />
    </div>
  );
}
