import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Bakso</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
          <b>Bakso </b> adalah produk pangan yang terbuat dari bahan utama daging yang dilumatkan, dicampur dengan bahan lain, dibentuk bulatan,
          dan selanjutnya direbus (Tazwir 1992).
      </>
    ),
  },
  {
    title: <>Sate Maranggi</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
<b>Sate Maranggi </b>  adalah satu dari sekian banyak khazanah kuliner Indonesia yang sudah mendunia.
          Citarasa yang khas, tekstur yang empuk, menjadi salah-satu alasan Sate Maranggi menjadi kuliner yang populer
      </>
    ),
  },
  {
    title: <>Tongseng</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
          <b> Tongseng</b>  adalah sejenis gulai dengan bumbu yang lebih "tajam". Perbedaan yang lebih jelas adalah pada penggunaan dagingnya.
          Tongseng dibuat dengan menggunakan daging yang masih melekat pada tulang, terutama tulang iga dan tulang belakang.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/dasar1')}>
              Baca Buku Saku 📰
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
