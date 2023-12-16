// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
// import { WinBoxWrapper } from "../Components/IboComponents/WinBoxWrapper";
import navbar from "../Components/IboComponents/Navbar";
// import axios from "axios";
// import sample from './repair-  services-robot-future-live-wallpaper-1.mp4';
import BackGroundVid from "../Components/IboComponents/BackGroundVid";
import Navbar from "../Components/IboComponents/Navbar";
import IconsApps from "../Components/IboComponents/IconApps";
// import "../public/Font/FreePixel.ttf";
// import "../public/Font/FreePixel.ttf";
// import { RightClickMenu } from "../Components/IboComponents/RightClickMenu/RightClickMenu";
// import { Test } from "../Components/IboComponents/Test";
import CustomMenu from "../Components/IboComponents/CustomMenu";
import BackgroundSelector from "../Components/IboComponents/BackgroundSelector";

// import IconsApps from '../Components/IboComponents/IconApps';
{
    /**
function MyComponent() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://catfact.ninja/fact');
        const data = response.data;
        setApiData(data.fact);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div id='api'>{apiData}</div>
      <h1>Hello, WinBox!</h1>
      <p>This is a simple WinBox component in React.</p>
    </div>
  );
}
 */
}

function App() {
    // const [
    //   isWinBoxOpen, setIsWinBoxOpen,

    //         ] = useState(false);

    // const openWinBox = () => {
    //   setIsWinBoxOpen(true);
    // };

    // const closeWinBox = () => {
    //   setIsWinBoxOpen(false);
    // };

    return (
        <div className="p-0 m-0 place-items-start items-start align-baseline">
            {/* <CustomMenu items={[]}/> */}
            <BackGroundVid />
            <Navbar />
            <IconsApps />
            <CustomMenu items={["Abort C:/"]} />

            {/* <SignUpForm /> */}

            {/* <div className="z-10">
        <button onClick={openWinBox}>Open WinBox</button>

        {isWinBoxOpen && (
          <WinBox
            title="login "
            width={350}
            height={497}
            x={100}
            y={50}
            noResize={true}
            background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
            onclose={closeWinBox}
          > */}
            {/* <BackGroundVid /> */}
            {/* <SignUpForm /> */}
            {/* </WinBox> */}
            {/* )} */}
            {/* </div> */}
        </div>
    );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import 'winbox/dist/css/winbox.min.css';
// import 'winbox/dist/css/themes/modern.min.css';
// import WinBox from 'react-winbox';
// import axios from 'axios';
// import sampleGif1 from './pixel.gif'; //background selector
// import sampleGif2 from './tokyo.gif';  //background selector
// import { Navbar } from 'flowbite-react';
// import WinBoxWrapper from '../Components/IboComponents/WinBoxWrapper';
// import IconsApps from './IconApps';

// function MyComponent() {
//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('https://catfact.ninja/fact');
//         const data = response.data;
//         setApiData(data.fact);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div id='api'>{apiData}</div>
//       <h1>Hello, WinBox!</h1>
//       <p>This is a simple WinBox component in React.</p>
//     </div>
//   );
// }

// function App() {
//   const [isWinBoxOpen, setIsWinBoxOpen] = useState(false);
//   const [selectedBackground, setSelectedBackground] = useState(sampleGif1);  //background selector

//   const openWinBox = () => {
//     setIsWinBoxOpen(true);
//   };

//   const closeWinBox = () => {
//     setIsWinBoxOpen(false);
//   };
//  //background selector
//   const changeBackground = (value) => {
//     setSelectedBackground(value);
//   };

//   return (
//     <body>
//       <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100">
//         <form action="" method="get" className='p-5 font-mono m-5' >
//           <h1 className='mb-7'>Sign Up</h1>
//           <label htmlFor="">username</label>  <br />
//           <input type="text" className='rounded-lg text-black'  /><br />
//           <label htmlFor="" >Email</label><br />
//           <input type="text" className='rounded-lg text-black'  /><br />
//           <label htmlFor="">password</label><br />
//           <input type="text" className='rounded-lg text-black' /><br />
//           <label htmlFor="">Re-Password</label><br />
//           <input type="text" className='rounded-lg text-black' />
//           <br />
//           <div className='mt-3'>
//             <input type="button" value="Google" className='mx-1' />
//             <input type="button" value="Google" className='mx-1' />
//             <input type="button" value="Google" className='mx-1' />
//           </div>
//         </form>
//       </div>

//       <img src={selectedBackground} alt="GIF" className="absolute -z-10 w-full h-full bg-cover object-cover" />

//       <div className='z-10'>
//         <label htmlFor="backgroundSelector">Select Background:</label>
//         <select id="backgroundSelector" onChange={(e) => changeBackground(e.target.value)}>
//           <option value={sampleGif1}>Background 1</option>
//           <option value={sampleGif2}>Background 2</option>
//         </select>

//         <button onClick={openWinBox}>Open WinBox</button>
//         <p className='bg-red-600'>fire</p>
//         {isWinBoxOpen && (
//           <WinBox
//             title="login "
//             width={350}
//             height={497}
//             x={100}
//             y={50}
//             noResize={true}
//             background='linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)'
//             onclose={closeWinBox}
//           >
//             <img src={selectedBackground} alt="GIF" className="absolute -z-10 w-full h-full bg-cover object-cover" />

//             <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100">
//               {/* Your form code here */}
//               what goes here?
//             </div>
//           </WinBox>
//         )}
//       </div>
//     </body>
//   );
// }

// export default App;
