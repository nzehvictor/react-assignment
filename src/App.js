
function App() {
  return (
    <div
      style={{
        width: "550px",
        height: "550px",
      }}>
      <header
        style={{
          background: "#21222A",
          width: "550px",
          height: "91px",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}>
        <p
          style={{
            height: "22.25px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "22.253px",
            lineHeight: "27px",
            letterSpacing: "-0.05em",
            color: "#61DAFB",
            paddingLeft:"50px"
          }}>ReactFacts</p>
        <p
          style={{
            height: "21px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "27px",
            color: "#DEEBF8",
            paddingRight:"30px"
          }}>
          React Course - Project  2</p>
      </header>
      <main
        style={{
          background: "#282D35",
          width: "550px",
          height: "459px",
        }}>
        <h1 style={{
          width: "424px",
          height: "41px",
          fontFamily: "'Inter'",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "39.06px",
          lineHeight: "47px",
          letterSpacing: "-0.05em",
          color: "#FFFFFF",
          paddingTop:"55px",
          paddingLeft:"30px",
          paddingBottom:"45px"
        }}>
          Fun facts about React</h1>
        <ul 
        style={{
          paddingLeft:"70px"
        }}>
          <li style={{
            width: "390px",
            height: "17.81px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF",
            paddingBottom:"20px"
          }}>Was first released in 2013</li>
          <li style={{
            width: "390px",
            height: "19.51px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF", 
            paddingBottom:"20px"
          }}>Was originally created by Jordan Walke</li>
          <li style={{
            width: "390px",
            height: "16.96px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "-0.05em",
            color: "#FFFFFF",
            paddingBottom:"20px"
          }}>Has well over 100K stars on GitHub</li>
          <li style={{
            width: "390px",
            height: "18.9px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF",
            paddingBottom:"20px"
          }}>Is maintained by Facebook</li>
          <li style={{
            width: "390px",
            height: "19.87px",
            fontFamily: "'Inter'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF",
            paddingBottom:"20px"
          }}>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
