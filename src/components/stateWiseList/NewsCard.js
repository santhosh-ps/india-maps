import React from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(require("./newsCard.module.css"));
export default function StateWiseList(props) {
  const { news } = props;
  return (
    <>
      <section>
        {news.map((item, i) => {
          return (
            <a
              rel="noopener noreferrer"
              key={item.title + i}
              href={item.url}
              target="_blank"
              className={cx(["apiContentLink", "newsCard"])}
            >
              <img
                className={cx("newsImage")}
                height="76px"
                width="76px"
                src={item.urlToImage}
                alt={item.url}
              ></img>
              <div className={cx("infoContainer")}>
                <div className={cx("title")}>{item.title}</div>
                <div className={cx("provider")}>
                  <div className={cx("providerName")}>{item.source.name}</div>
                  {/* <div className={cx("publishedTime")}> · 1h</div> */}
                </div>
              </div>
            </a>
          );
        })}
      </section>
    </>
  );
}
