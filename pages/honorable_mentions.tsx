import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { data, Song } from '../data';

import SongList from '../components/SongList';

export const getStaticProps: GetStaticProps<{ songs: Song[] }> = async () => {
    const honorable_mentions = data.honorable_mentions.map((el: string) => data.entries[el]);
    return {
        props: {
            songs: honorable_mentions,
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
