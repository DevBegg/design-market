import styles from './auth-hero.module.scss';
import { ApplicationName } from '@/constants';

export const AuthHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroTitle}>
          <strong>{ApplicationName}</strong> is simply dummy text of the printing and typesetting
          industry.
        </div>
        <p>
          Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </section>
  );
};
