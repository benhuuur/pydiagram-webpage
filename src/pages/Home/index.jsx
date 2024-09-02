import { useEffect } from "react";
import AOS from "aos";

import styles from "./styles.module.scss";

import blob_bakcground from "../../assets/cards/blob.svg";
import big_blob_bakcground from "../../assets/cards/big_blob.svg";

import Blob from "../../components/cards/Blob";
import Default from "../../components/cards/Default";
import Forms from "../../components/cards/Feedbacks/Forms";
import Feedback from "../../components/cards/Feedbacks/Feedback";

import FadeLeft from "../../components/animations/FadeLeft";
import SlideUp from "../../components/animations/SlideUp";
import ZoomIn from "../../components/animations/ZoomIn";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.body}>
      <div className={styles.body__content}>
        <ZoomIn duration={1500}>
          <Default
            header="Increase your efficiency with diagram generation"
            subheader="Boost your productivity with our tool designed for fast, dynamic diagram creation."
            button="See details"
            topics={[
              "Accelerated Project Timelines",
              "Optimized Resource Management",
            ]}
          />
        </ZoomIn>
        <ZoomIn duration={1500}>
          <Blob
            header={"Transform Your Codebase with Ease"}
            subheader={
              "Transform your code repositories into diagrams to enhance understanding and streamline your workflow. Ensure efficient collaboration and keep your documentation up-to-date with just a few clicks."
            }
            button={"Open an Account"}
            background={blob_bakcground}
            width={"39.0625rem"}
            height={"30.17706rem"}
          />
        </ZoomIn>

        <FadeLeft duration={1000}>
          <Forms header={"Insights and suggestions for project success"} />
        </FadeLeft>
        <FadeLeft duration={1500}>
          <Feedback
            owner={"Benhur Feld"}
            type={"Praise"}
            text={
              "I want to express my appreciation for the excellent work on this project. The results exceeded expectations, demonstrating both high quality and attention to detail. Great job to everyone involved!"
            }
          ></Feedback>
        </FadeLeft>
        <FadeLeft duration={2000}>
          <Feedback
            owner={"Benhur Feld"}
            type={"Praise"}
            text={
              "I want to express my appreciation for the excellent work on this project. The results exceeded expectations, demonstrating both high quality and attention to detail. Great job to everyone involved!"
            }
          ></Feedback>
        </FadeLeft>

        <SlideUp duration={2000}>
          <Default
            header="Visual representation for clarity and collaboration"
            subheader="A visual representation simplifies complex project information,
        supports planning, and tracks progress, enhancing collaboration and
        communication. It ensures clarity and alignment among stakeholders."
            button="See details"
            topics={[
              "Streamlined Workflow and Reduced Errors",
              "Enhanced Collaboration and Iteration",
            ]}
          />
        </SlideUp>
        <SlideUp duration={2000}>
          <Default
            header="Maximizing Project Accuracy and Scalability"
            subheader="Diagrams boost project accuracy and scalability by simplifying
        complex information, enabling precise planning and adjustments. This
        clarity enhances maintenance and overall robustness."
            button="See details"
            topics={[
              "Maintenance and Robustness",
              "Enhanced Scalability for Growing Projects",
              "Improved Accuracy in Documentation",
            ]}
          />
        </SlideUp>
        <Blob
          header={[
            "Improving Usage Insights",
            <br />,
            "with User Reports and Charts",
          ]}
          subheader={[
            "Visualizing user data through comprehensive graphs and",
            <br />,
            "reports significantly improves insight into project",
            <br />,
            "development.",
          ]}
          button={"See Charts"}
          background={big_blob_bakcground}
          width={"50.88063rem"}
          height={"30.17706rem"}
        />
      </div>
    </div>
  );
}
