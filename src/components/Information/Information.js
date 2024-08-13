import React from "react";


const getImageUrl = (path) => {
  return require(`./${path}`);
};



export const Information = () => {
  return (
    
    <section
      id="information" 
      style={{
        position: "relative",
        backgroundColor: "rgb(224, 231, 255)",
        borderRadius: "15px",
        padding: "73px",
        marginTop: "300px",
        zIndex: 1,
        marginLeft: "10%",
        marginRight: "10%",
      }}
    >
      
      <h2
        style={{
          color: "rgb(0, 133, 200)",
          fontSize: "35px",
          fontWeight: 700,
          textAlign: "center",
          marginTop: "-40px",
          letterSpacing: "1.75px",
          textTransform: "uppercase",
        }}
      >
        About
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
       
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            marginLeft: "30px",
            gap: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "20px",
              listStyle: "none",
              padding: "25px",
              backgroundImage:
                "linear-gradient(90deg, rgba(93, 55, 206, 0.793) 0%, rgba(50, 126, 241, 0) 100%)",
              backgroundSize: "0 100%",
              backgroundRepeat: "no-repeat",
              transition: "0.4s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundSize = "100% 100%")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundSize = "0 100%")
            }
          >
            <div>
              <p style={{ fontSize: "25px", color: "black" }}>
                I am a fourth-year Computer Science and Engineering student
                from BIT, Mesra. I am currently a SDE intern at Agrixagro,
                and have previously interned with CCL and Intrainz Edutech.
                I am enthusiastic about utilizing my knowledge in practical
                environments through projects, where I can apply my skills
                and love for technology to create significant impact. I am
                keen to be part of cutting-edge software development firms,
                where I can employ my skills to contribute to overall
                development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Information;
