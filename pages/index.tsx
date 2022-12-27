import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <Head>
                <title>K-POP 2022</title>
            </Head>
            <div style={{
                fontSize: '5rem',
                color: '#eee',
                fontFamily: 'Lily Script One',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
            }}>
                <Link href="/top10"><a>Top 10</a></Link>
                <Link href="/honorable_mentions"><a>Honorable Mentions</a></Link>
            </div>
        </div>
    );
};

export default Home;
