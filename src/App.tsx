import "./App.css";
import { useEffect, useState, useMemo } from "react";

function App() {
    const [soundOn, setSoundOn] = useState<boolean>(false);
    const audio = useMemo(() => new Audio("media/ambient.mp3"), []);

    // 3D Scroll
    useEffect(() => {
        let zSpacing: number = -1000,
            lastPos: number = zSpacing / 5,
            $frames = document.getElementsByClassName("frame"),
            frames = Array.from($frames),
            zVals: any[] = [];

        window.onscroll = function () {
            let top = document.documentElement.scrollTop,
                delta = lastPos - top;

            lastPos = top;

            frames.forEach(function (n, i) {
                zVals.push(i * zSpacing + zSpacing);
                zVals[i] += delta * -5.5;
                let frame = frames[i],
                    transform = `translateZ(${zVals[i]}px)`,
                    opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
                frame.setAttribute(
                    "style",
                    `transform: ${transform}; opacity: ${opacity}`
                );
            });
        };
    }, []);

    window.scrollTo(0, 1);

    // Audio

    useEffect(() => {
        soundOn ? audio.play() : audio.pause();

        window.onfocus = function () {
            !soundOn ? audio.pause() : audio.play();
        };
        window.onblur = function () {
            audio.pause();
        };
    }, [soundOn, audio]);

    console.log(soundOn);
    return (
        <>
            <div className="container">
                <section className="gallery">
                    <div className="frame">
                        <div className="frame__content">
                            <h2>Beautiful World</h2>
                        </div>
                    </div>

                    <div className="frame">
                        <div className="frame__content frame__img">
                            <div
                                className="frame-media frame-media_left"
                                style={{
                                    backgroundImage: "url(images/1.jpg)",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="frame frame_bg">
                        <div className="frame__content">
                            <video
                                className="frame-media frame-media_right"
                                src="media/video_optimized.mp4"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>

                    <div className="frame"></div>

                    <div className="frame">
                        <div className="frame__content text-right">
                            <h3>Pure planet</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur elit
                                adipisicing. Nemo fugit, rerum dolorem assumenda
                                consequatur dicta error iure laboriosam
                                temporibus.
                            </p>
                        </div>
                    </div>

                    <div className="frame frame_bg">
                        <div className="frame__content frame__img">
                            <div
                                className="frame-media frame-media_left"
                                style={{
                                    backgroundImage: "url(images/2.jpg)",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="frame"></div>

                    <div className="frame frame_bg">
                        <div className="frame__content frame__img">
                            <div
                                className="frame-media frame-media_right"
                                style={{ backgroundImage: "url(images/3.jpg)" }}
                            ></div>
                        </div>
                    </div>

                    <div className="frame"></div>

                    <div className="frame">
                        <div className="frame__content text-left">
                            <h3>Ask the Mountains</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur elit.
                                Rerum dolorem assumenda consequatur dicta error
                                iure laboriosam temporibus omnis quae eaque
                                aliquam esse unde accusamus dolores non soluta.
                            </p>
                        </div>
                    </div>

                    <div className="frame frame_bg">
                        <div className="frame__content frame__img">
                            <div
                                className="frame-media frame-media_right"
                                style={{ backgroundImage: "url(images/4.jpg)" }}
                            ></div>
                        </div>
                    </div>

                    <div className="frame">
                        <div className="frame__content">
                            <video
                                className="frame-media frame-media_left"
                                src="media/video_optimized.mp4"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>

                    <div className="frame"></div>
                    <div className="frame"></div>

                    <div className="frame frame_bg">
                        <div className="frame__content frame__img">
                            <div
                                className="frame-media frame-media_right"
                                style={{ backgroundImage: "url(images/5.jpg)" }}
                            ></div>
                        </div>
                    </div>

                    <div className="frame frame_bg">
                        <div className="frame__content">
                            <video
                                className="frame-media"
                                src="media/video_optimized.mp4"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>

                    <div className="frame"></div>
                    <div className="frame"></div>

                    <div className="frame">
                        <div className="frame__content">Lighbe</div>
                    </div>
                </section>
            </div>
            <img
                className={soundOn ? "soundbutton" : "soundbutton paused"}
                src="images/sound.gif"
                alt="Alt"
                onClick={() => setSoundOn((prev) => !prev)}
            />
            <audio className="audio" src="media/ambient.mp3" loop></audio>
        </>
    );
}

export default App;
