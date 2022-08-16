import styles from "./Footer.module.css";
import ArrowIcon from "./chevron-rt.svg";

export const Footer = ({ ...props }) => {
  return <footer className={'container'} {...props}>Footer<span><ArrowIcon/></span></footer>;
};
