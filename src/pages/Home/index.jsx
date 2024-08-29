import blob_bakcground from "../../assets/cards/blob.svg";
import big_blob_bakcground from "../../assets/cards/big_blob.svg";

import Blob from "../../components/cards/Blob";
import Default from "../../components/cards/Default";
import FeedbackForms from "../../components/cards/Feedbacks/Forms";

export default function Home() {
  return (
    <div>
      <Default
        header="Increase your efficiency with diagram generation"
        subheader="Boost your productivity with our tool designed for fast, dynamic diagram creation."
        button="See details"
        topics={[
          "Accelerated Project Timelines",
          "Optimized Resource Management",
        ]}
      />
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

      <FeedbackForms header={"Insights and suggestions for project success"} />

      
    </div>
  );
}
