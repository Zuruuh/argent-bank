import { type FC } from 'react';
import styles from './Feature.module.css';

export interface FeatureProps {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
}

const Feature: FC<FeatureProps> = ({ icon, alt, title, subtitle }) => {
  return (
    <div className={styles.featureItem}>
      <img src={icon} alt={alt} className={styles.featureIcon} />
      <h3 className={styles.featureItemTitle}>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Feature;
