import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <section style={{ justifyContent: "center" }}>
        <div className="hero-content">
          <h1>Abhyuday Art Classes</h1>
          <p>Unleash your creativity with professional art training</p>
          <Link to="/Classes">
            <button
              style={{
                marginTop: "20px",
                padding: "14px 32px",
                fontSize: "20px",
                backgroundColor: "#2a3b4e",
                color: "#cce5fb",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "1px 1px 8px #222"
              }}
            >
              Explore Classes
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Hero