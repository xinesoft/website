import React from 'react';
import Head from 'next/head';
import styles from './index.module.css';

function IndexPage() {
    return (
        <>
            <Head>
                <title>xinesoft - software development</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h1>::: xinesoft :::</h1>
                    <h4>software development</h4>
                </section>
            </div>

        </>
    );
}

export default IndexPage;