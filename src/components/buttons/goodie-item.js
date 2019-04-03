// import React, { Component } from "react";

// export default class GoodieItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       goodieItemClass: ""
//     };
//     this.handleMouseEnter = this.handleMouseEnter.bind(this)
//     this.handleMouseEnter = this.handleMouseLeave.bind(this)
//   }
//   handleMouseEnter() {
//     this.setState({ goodieItemClass: "image-blur" });
//   }
//   handleMouseLeave() {
//     this.setState({ goodieItemClass: "" });
//   }
  
//   render() {
//     const { title, goodie_url} = this.props.item;
//     return (
//       <div
//         className="goodie-item-wrapper"
//         onMouseEnter={() => this.handleMouseEnter()}
//         onMouseLeave={() => this.handleMouseLeave()}
//       >
//         <div
//           className={
//             "goodie-img-background " + this.state.goodieItemClass
//           }
//           style={{
//             backgroundImage: "url(" + goodie_url + ")"
//           }}
//         />
//         <div className="img-text-wrapper">
//           <div className="logo-wrapper">
//             <img src={logo_url} />
//           </div>
//           <div className="subtitle">{title}</div>
//         </div>
//       </div>
//     );
//   }
// }