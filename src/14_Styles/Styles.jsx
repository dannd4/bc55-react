import React from "react";
import styles from "./Styles.module.css";
import stylesSCSS from "./Styles.module.scss";

// classnames: https://github.com/JedWatson/classnames
// import cn from 'classnames'

// let value = 'active'
// <h1 className={cn('foo', value, { bar: true })}></h1>
// => <h1 className="foo active bar"></h1>

export default function Styles() {
  return (
    <div>
      <h1>CSS Module</h1>
      <p className={styles.title}>Hello BC55</p>

      <h1>SCSS Module</h1>
      <p className={stylesSCSS.title}>Hello React</p>
    </div>
  );
}
