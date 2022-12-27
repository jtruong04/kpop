import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { data, Song } from '../data';

import SongList from '../components/SongList';

export const getStaticProps: GetStaticProps<{ songs: Song[] }> = async () => {
    const top10 = data.top10.slice(0, 10).map((el: string) => data.entries[el]);
    return {
        props: {
            songs: top10,
        },
    };
};

const Home = ({ songs }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Head>
                <title>K-POP 2022</title>
            </Head>
            <SongList songs={songs} />
        </div>
    );
};

export default Home;
