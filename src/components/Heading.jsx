import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <center>
      <div
        styles={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <h3
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#A149FA",
            fontWeight: "bold",
          }}>
          {title}
        </h3>

        <div class="card-subheading">{subtitle}</div>
      </div>
    </center>
  );
}

export default Heading