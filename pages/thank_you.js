import { useEffect } from 'react';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { gtag } from 'common/utils/thirdParty/gtag';
import styles from './styles/thank_you.module.css';

const pageTitle = 'Thank You';

function ThankYou() {
  useEffect(() => {
    gtag.conversionEvent({ adId: 'h6epCOC_os4BEK-Rnp4D' });
  }, []);

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className={styles.main}>
        <p>
          Thank you so much for your donation!
          <br />
          <br />
          We have received your contribution, and you should be receiving an email which will serve
          as your donation receipt.
        </p>
      </HeroBanner>
    </>
  );
}

export default ThankYou;
