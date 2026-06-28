import "./Demo.css";

export default function Demo() {
    return (
        <div className="demo-mode">
            <span className="demo-title">
                🚧 DEMO MODE
            </span>

            <div className="demo-info">
                <span className="demo-icon">ⓘ</span>

                <div className="demo-popover">
                    <h3>Demo Mode</h3>

                    <p>
                        This portfolio runs in a simplified demo environment.
                    </p>

                    <ul>
                        <li>Instant authentication.</li>
                        <li>Shared demo account.</li>
                        <li>Backend hosted on Render Free.</li>
                        <li>Server may take 30–60 seconds to wake up.</li>
                        <li>Demo data may occasionally reset.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}