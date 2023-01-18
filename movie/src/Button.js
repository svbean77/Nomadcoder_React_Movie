import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  //module.css를 사용하면 랜덤하게 해당 클래스 이름을 만들어줌
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
