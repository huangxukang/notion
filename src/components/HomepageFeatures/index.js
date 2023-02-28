import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "黄",
        Svg: require("@site/static/home-img/left.svg").default,
        description: <>欲买桂花同载酒</>,
    },
    {
        title: "旭",
        Svg: require("@site/static/home-img/center.svg").default,
        description: <>终不似</>,
    },
    {
        title: "康",
        Svg: require("@site/static/home-img/right.svg").default,
        description: <>少年游</>,
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
