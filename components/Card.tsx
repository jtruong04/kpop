import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import styles from './Card.module.scss';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';
import { motion, useMotionValue } from 'framer-motion';

type Props = {
    ranking: number | string;
    youtubeId: string;
};

const Card = ({ ranking, youtubeId }: Props) => {
    const [isFlipped, setFlipped] = useState(false);
    const [videoTarget, setVideoTarget] = useState<YouTubePlayer | null>(null);

    const zIndex = useMotionValue(0);

    const handleClick = () => {
        setFlipped((prevState) => !prevState);
        if (!isFlipped) {
            zIndex.set(2);
        } else {
            setTimeout(() => {
                zIndex.set(0);
            }, 500);
        }
        if (videoTarget && !isFlipped) {
            videoTarget.playVideo();
        } else if (videoTarget && isFlipped) {
            videoTarget.pauseVideo();
        }
    };

    const onVideoReady = (ev: YouTubeEvent) => {
        setVideoTarget(ev.target);
    };

    return (
        <div className={clsx(styles.slot)}>
            <motion.div
                layout
                transition={{ duration: 1 }}
                className={clsx(styles.scene, isFlipped && styles.flipped)}
                animate={isFlipped ? 'faceDown' : 'faceUp'}
                style={{ zIndex }}>
                <motion.div
                    layout
                    className={clsx(styles.card)}
                    onClick={handleClick}
                    variants={{
                        faceUp: { rotateY: '0deg' },
                        faceDown: { rotateY: '180deg' },
                    }}
                    transition={{ duration: 0.5 }}>
                    <motion.div className={clsx(styles.face, styles.front)}>
                        {ranking}
                    </motion.div>
                    <motion.div className={clsx(styles.face, styles.back)}>
                        <YouTube
                            className="video"
                            videoId={youtubeId}
                            onReady={onVideoReady}
                            opts={{
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    controls: 0,
                                    rel: 0,
                                },
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;
