// import React from "react";
// import Button from "react-bootstrap/Button";
// import "./ncsButton.css";
// import { useNavigate } from "react-router-dom";

// export default function NCSButton({ props }) {
//   const navigate = useNavigate();
//   const pageNavigate = (url) => {
//     navigate(url);
//   };

//   switch (props.buttonType) {
//     case "thirdlyDefaultButton":
//       return (
//         <Button
//           variant="outline-warning"
//           id="thirdlyDefaultButton"
//           onClick={() => pageNavigate(props.buttonClickEvent)}
//           style={{ width: props.width, height: props.height }}
//         >
//           {props.buttonName}
//         </Button>
//       );
//     case "primaryDefaultButton":
//       return (
//         <Button
//           variant="warning"
//           id="primaryDefaultButton"
//           onClick={() => pageNavigate(props.buttonClickEvent)}
//           style={{ width: props.width, height: props.height }}
//         >
//           {props.buttonName}
//         </Button>
//       );
//     case "footerDefaultButton":
//       return (
//         <Button
//           variant="warning"
//           id="footerDefaultButton"
//           onClick={() => pageNavigate(props.buttonClickEvent)}
//           style={{ width: props.width, height: props.height }}
//         >
//           {props.buttonName}
//         </Button>
//       );
//     default:
//       return <Button variant="outline-primary">Warning</Button>;
//   }
// }

import React from "react";

const NCSButton = () => {
  return <div>NCSButton</div>;
};

export default NCSButton;
