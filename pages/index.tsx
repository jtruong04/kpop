import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { data, Song, Data } from '../data';
import Card from '../components/Card';
import dynamic from 'next/dynamic';
const Animator = dynamic(
    import('react-scroll-motion').then((it) => it.Animator),
    { ssr: false }
);

import {
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut,
} from 'react-scroll-motion';
import { randomInt } from 'crypto';

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
                <div><a href="/top10">Top 10</a></div>
                <div><a href="/honorable_mentions">Honorable Mentions</a></div>
            </div>
        </div>
    );
};

export default Home;
