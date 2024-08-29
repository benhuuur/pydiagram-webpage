import styles from "./styles.module.scss";
import Button from "../../elements/Button";
import Input from "../../elements/Input";
import Select from "../../elements/Select";

export default function FeedbackForms({ header }) {
  const options = [
    { value: "", label: "Sugestão" },
    { value: "issue", label: "Algo não está certo" },
    { value: "praise", label: "Elogio" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__header}>{header}</div>
        <Input
          placeholder={
            "Your Feedback Here: Share Your Thoughts and Suggestions"
          }
          width={"95.7414474351%"}
        />
        <div className={styles.card__controls}>
          <Select placeholder="Select feedback type" options={options} />
          <Button
            text={"Submit feedback"}
            theme={"dark"}
            width={"8.54513rem"}
            height={"2.17944rem"}
          />
        </div>
      </div>
    </div>
  );
}
