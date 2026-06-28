import { Info } from "lucide-react";
import "./Demo.css";

export default function Demo() {
    return (
        <div className="demo-mode">
            <span className="demo-title">
                🚧 DEMO MODE
            </span>

            <div className="info-wrapper">
                <Info size={18} />

                <div className="popover">
                    <h4>Demo Mode</h4>

                    <p>
                        This portfolio uses a simplified demonstration environment.
                    </p>

                    <ul>
                        <li>Authentication is instant.</li>
                        <li>A shared demo account is used.</li>
                        <li>Backend runs on Render Free.</li>
                        <li>The server may need a few seconds to wake up.</li>
                        <li>Demo data may occasionally reset.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}