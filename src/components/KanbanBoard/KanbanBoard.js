// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function KanbanBoard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="kanban-board">
//       {/* <h1>Kanban Board</h1>
//       {data && (
//         <div>
//           {data.columns.map((column) => (
//             <div key={column.id} className="column">
//               <h2>{column.name}</h2>
//               <ul>
//                 {column.cards.map((card) => (
//                   <li key={card.id}>{card.name}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default KanbanBoard;
