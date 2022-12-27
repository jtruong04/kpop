import styles from '../styles/Home.module.css';
import { Song } from '../data';
import Card from '../components/Card';
import dynamic from 'next/dynamic';
const Animator = dynamic(
    import('react-scroll-motion').then((it) => it.Animator),
    { ssr: false }
);

import {
    ScrollContainer,
    ScrollPage,
    MoveIn,
} from 'react-scroll-motion';

type Props = {
    songs: Song[];
};

const SongList = ({ songs }: Props) => {
    return (
        <div className={styles.list}>
            <ScrollContainer snap="proximity">
                {songs.reverse().map((song: Song, index: number) => (
                    <ScrollPage>
                        <div
                            id={`song-${songs.length - index}`}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '100vw',
                                backgroundColor: '#222',
                            }}>
                            <Animator
                                animation={MoveIn(Math.random() * 2000 - 1000)}>
                                <Card
                                    ranking={songs.length - index}
                                    youtubeId={song.youtube}></Card>
                            </Animator>
                        </div>
                    </ScrollPage>
                ))}
            </ScrollContainer>
        </div>
    );
};

export default SongList;
