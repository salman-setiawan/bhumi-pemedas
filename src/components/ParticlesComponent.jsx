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
          className="opacity-60"
          id="particles-js"
          style={{
              position: "absolute",
              bottom: -10,
              right: 0,
              // opsi 1
              // width: "35vw",
              // height: "35vh",
              // opsi 2
              width: "100%",
              height: "20%",
              zIndex: 0,
          }}
        ></div>
    );
}
