import React, { useEffect, useState } from "react";
// import { Table, Button } from "react-bootstrap";
import ModelManager from "../../services/ModelManager";

const ModelList = ({ getModelId }) => {
  // const [Model, setModel] = useState([]);
  // useEffect(() => {
  //   getModel();
  // }, []);

  // const getModel = async () => {
  //   const data = await ModelManager.getAllModel();
  //   console.log(data.docs);
  //   setModel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  // const deleteHandler = async (id) => {
  //   await ModelManager.deleteModel(id);
  //   getModel();
  // };
  // return (
  //   <>
  //     <div className="mb-2">
  //       {/* <Button variant="dark edit" onClick={getModel}>
  //         Refresh List
  //       </Button> */}
  //       <input type="button" onClick="getModel()" name =" refesh list" />
  //     </div>
  //     <button onClick={getModelId(doc.id)}> edit</button>
  //     {/* <pre>{JSON.stringify(Model, undefined, 2)}</pre>} */}
  //     {/* <Table striped bordered hover size="sm"> */}
  //         <table>
          
  //       <thead>
  //         <tr>
  //           <th>#</th>
  //           <th>FIRSTNAME</th>
  //           <th>LASTNAME</th>
  //           <th>EMAIL</th>
  //           <th>mobile Number</th>
  //           <th>address</th>
  //           <th>city</th>
  //           <th>instagram</th>
  //           <th>talent</th>
  //           <th>sex</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {Model.map((doc, index) => {
  //           return (
  //             <tr key={doc.id}>
  //               <td>{index + 1}</td>
  //               <td>{doc.firstname}</td>
  //               <td>{doc.lastname}</td>
  //               <td>{doc.email}</td>
  //               <td>{doc.mobileNumber}</td>
  //               <td>{doc.address}</td>
  //               <td>{doc.city}</td>
  //               <td>{doc.instagram}</td>
  //               <td>{doc.talent}</td>
  //               <td>{doc.sex}</td>
  //               <td>
  //                   <button onClick={(e) => getModelId(doc.id)}> edit</button>
  //                 {/* <Button
  //                   variant="secondary"
  //                   className="edit"
  //                   onClick={(e) => getModelId(doc.id)}
  //                 >
  //                   Edit
  //                 </Button> */}
  //                 {/* <Button
  //                   variant="danger"
  //                   className="delete"
  //                   onClick={(e) => deleteHandler(doc.id)}
  //                 >
  //                   Delete
  //                 </Button> */}
  //                 <button onClick={(e) => deleteHandler(doc.id)}> delete</button>
  //               </td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //       </table>
  //     {/* </Table> */}
  //   </>
  // );

  // <ReactFirebaseFileUpload/>
};

export default ModelList;
