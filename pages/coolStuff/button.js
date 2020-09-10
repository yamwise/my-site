<title>{siteTitle}</title>;
import React, { useState } from "react";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Button(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Layout>
      <div align="center" className={utilStyles.className}>
        <div>
          <h5>Count is {count}</h5>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={() => setCount(0)}>Reset</button>
        <p align="center">
          This counter uses React's <strong>functional components</strong> and
          the method <strong>useState()</strong>. However, useState() doesn't
          return a variable like you might think. Instead, it returns an array
          with a variable (in this case count) and a method to update that
          variable. The two buttons you see call that method.
        </p>
        <p align="center">
          It is important to note that this is all handled within the javascript
          for this webpage. If you refresh the page, the current state will be
          lost and the counter will reset. In the future, we can use Next.js'
          data fetching to keep track of count over longer periods of time.
        </p>
        <p align="center">
          You can look at the code for this page{" "}
          <a href="https://github.com/yamwise/my-site/blob/master/pages/coolStuff/button.js">
            here
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}
