import LiText from "./LiText";

function reactPage() {
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
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
            paddingLeft: "50px"
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
            paddingRight: "30px"
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
          paddingTop: "55px",
          paddingLeft: "30px",
          paddingBottom: "45px"
        }}>
          Fun facts about React</h1>
        <ul
          style={{
            paddingLeft: "70px"
          }}>
          <LiText text="Was first released in 2013" />
          <LiText text="Was originally created by Jordan Walke" />
          <LiText text="Has well over 100K stars on GitHub" />
          <LiText text="Is maintained by Facebook" />
          <LiText text="Powers thousands of enterprise apps, including mobile apps" />
        </ul>
      </main>
    </div>
  );
}

export default reactPage;