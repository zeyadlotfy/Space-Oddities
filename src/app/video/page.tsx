

// export default function Page() {
//     return <video width="600" height="700" autoPlay loop controls preload="none" >
//         <source src="https://utfs.io/f/IdAErmi3paV8xkBiGvR8K4qWhtcY9XPEl5vF27JANOLUVMxu" type="video/mp4" />
//         Your browser does not support the video tag.
//     </video>
// }


import Video from 'next-video';

export default function Page() {
    return <Video src="https://utfs.io/f/IdAErmi3paV8xkBiGvR8K4qWhtcY9XPEl5vF27JANOLUVMxu" />;
}