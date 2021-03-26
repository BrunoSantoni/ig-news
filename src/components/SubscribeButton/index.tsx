import styles from './styles.module.scss';

type SubscribeButtonProps = {
  priceId: string;
};

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return(
    <button type="button" className={styles.subscribeButton}>
      <span>Subscribe now</span>
    </button>
  );
}