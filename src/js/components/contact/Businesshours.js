// import React, { Component } from 'react';

// class Businesshours extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="heading">
//           <h1>
//             <i className="fas fa-calendar-alt" />
//             BUSINESS HOURS
//           </h1>
//         </div>
//         <hr />
//         <div className="hours">
//           <div className="item">
//             <div className="item-1">Monday</div>
//             <div className="item-2">11:30 am - 8:00 pm</div>
//           </div>
//           <div className="item">
//             <div className="item-1">Tudesday</div>
//             <div className="item-2 closed">CLOSED</div>
//           </div>
//           <div className="item">
//             <div className="item-1">Wednesday</div>
//             <div className="item-2">11:30 am - 8:00 pm</div>
//           </div>
//           <div className="item">
//             <div className="item-1">Thursday</div>
//             <div className="item-2">11:30 am - 8:00 pm</div>
//           </div>
//           <div className="item">
//             <div className="item-1">Friday</div>
//             <div className="item-2">11:30 am - 8:30 pm</div>
//           </div>
//           <div className="item">
//             <div className="item-1">Saturday</div>
//             <div className="item-2">11:30 am - 8:30 pm</div>
//           </div>
//           <div className="item">
//             <div className="item-1">Sunday</div>
//             <div className="item-2">12:00 pm - 7:30 pm</div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Businesshours;

import React from 'react';

const Businesshours = () => {
  return (
    <React.Fragment>
      <div>
        <div className="heading">
          <h2>
            <i className="fas fa-clock" />
            Business Hours:
          </h2>
        </div>
        <hr />
        <div className="hours">
          <div className="item">
            <div className="item-1">Monday</div>
            <div className="item-2">11:30 am - 8:00 pm</div>
          </div>
          <div className="item">
            <div className="item-1">Tudesday</div>
            <div className="item-2 closed">CLOSED</div>
          </div>
          <div className="item">
            <div className="item-1">Wednesday</div>
            <div className="item-2">11:30 am - 8:00 pm</div>
          </div>
          <div className="item">
            <div className="item-1">Thursday</div>
            <div className="item-2">11:30 am - 8:00 pm</div>
          </div>
          <div className="item">
            <div className="item-1">Friday</div>
            <div className="item-2">11:30 am - 8:00 pm</div>
          </div>
          <div className="item">
            <div className="item-1">Saturday</div>
            <div className="item-2">11:30 am - 8:00 pm</div>
          </div>
          <div className="item">
            <div className="item-1">Sunday</div>
            <div className="item-2">12:00 pm - 7:30 pm</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Businesshours;
