import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Outlet />
        </>
    );
}

// interface Character {
//     id: number;
//     name: string;
//     imageUrl: string;
// }

// const Fetcher = () => {
//     const { data } = useQuery<Character[]>(["에러"], Api.getCharacters);
//     return (
//         <>
//             <h1>데헷?</h1>
//             {data?.slice(0, 200).map((chracter) => (
//                 <div key={chracter.id}>
//                     <img
//                         src={chracter.imageUrl}
//                         alt={chracter.name}
//                     />
//                     <h1>{chracter.name}</h1>
//                 </div>
//             ))}
//         </>
//     );
// };

export default App;
