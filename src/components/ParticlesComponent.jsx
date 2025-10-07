// src/components/ParticlesComponent.jsx
import { useEffect } from "react";

export default function ParticlesComponent() {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load("particles-js", "/particles/particles.json", () => {
                console.log("Particles loaded!");
            });
        }
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                // opsi 1
                // width: "35vw",
                // height: "35vh",
                // opsi 2
                width: "100%",
                height: "30%",
                zIndex: 0,
                // backgroundColor: "red",
            }}
        ></div>
    );
}
