import { type FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Copyright {new Date().getFullYear()} Argent Bank &copy;
      </p>
    </footer>
  );
};

export default Footer;
