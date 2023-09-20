import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { fetchYearlyRafleIdData } from "@/slices/userActions";
import Modal from '../../components/millionare/Modal'; // Adjust the import path
import styles from '@/styles/Home.module.css'

const YearlyDraw = () => {
    const dispatch = useDispatch<AppDispatch>()
  
    const tickets = useSelector((state: RootState) => state.user.yearlyTickets);

    const [showModal, setShowModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [numbers, setnumbers] = useState(null);
    const [date, setDate] = useState(null);
    const [rafleId, setRafleId] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    // Function to handle "View" button click
    const handleViewClick = (ticket) => {

         // Replace with your desired _id
            const foundItem = tickets?.tickets?.find((item) => item._id === ticket);

            if (foundItem) {
            // You found an item with the specified _id
            setDate(foundItem.date)
            setnumbers(foundItem.number)
            setRafleId(foundItem.raffle_id)
            setRafleId(foundItem.raffle_id)
            setUserId(foundItem.user_id._id)
            setUserName(foundItem.user_id.username)
            setEmail(foundItem.user_id.email)

            } else {
            // No item with the specified _id was found
            console.log("Item not found.");
            }

                setSelectedTicket(ticket);
                setShowModal(true)
      };
    
      // Function to close the modal
    //   const handleCloseModal = () => {
    //     setSelectedTicket(null);
    //     setIsOpen(false);
    //   };
    useEffect(() => {
      // Fetch user data when the component mounts
      dispatch(fetchYearlyRafleIdData());
    }, [dispatch]);

    const printRaffleIDs = () => {
        const raffleIDs = tickets?.tickets?.map((ticket) => ticket.raffle_id).join('\n');
        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.open();
        printWindow.document.write(`
          <style>
            /* Add margin to each printed Raffle ID */
            pre {
              margin: 10px;
            }
          </style>
          <pre>${raffleIDs}</pre>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      };


    return(
    <>


<div>
<table className="table table-striped table-hover ">
    <thead className="table-success">
      <tr>
        <th>Date</th>
        <th>Raffle Id</th>
        <th>Username</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {tickets?.tickets?.map((ticket) => (

            <tr  key={ticket._id}>
            <td>{ticket.date.slice(0, 10)}</td>
            <td>{ticket.raffle_id}</td>
            <td>{ticket.user_id.email}</td>
            <td>{ticket.user_id.username}</td>
            <td><button onClick={() => handleViewClick(ticket._id)} type="button" className="btn btn-outline-success btn-sm">View</button></td>
            </tr>

        ))}
      {/* Render the modal */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
<table className="min-w-full divide-y divide-gray-200">
    <tr>
        <td className="px-6 py-2 whitespace-no-wrap">Id</td>
        <td className="px-6 py-2 whitespace-no-wrap">{selectedTicket}</td>
    </tr>

    <tr>
        <td className="px-6 py-2 whitespace-no-wrap">Date</td>
        <td className="px-6 py-2 whitespace-no-wrap">{date}</td>
    </tr>

    <tr>
        <td className="px-6 py-2 whitespace-no-wrap">RaffleId</td>
        <td className="px-6 py-2 whitespace-no-wrap">{rafleId}</td>
    </tr>

    <tr>
        <td className="px-6 py-2 whitespace-no-wrap">Numbers</td>
        <td className="px-6 py-2 whitespace-no-wrap">{numbers}</td>
    </tr>

    <tr>
        <td className="px-6 py-2 whitespace-no-wrap">UserId</td>
        <td className="px-6 py-2 whitespace-no-wrap">{userId}</td>
    </tr>

    <tr>
        <td className="px-6 py-2 whitespace-no-wrap">User Name</td>
        <td className="px-6 py-2 whitespace-no-wrap">{userName}</td>
    </tr>

    <tr>
        <td className="px-6 py-2 whitespace-no-wrap">Email</td>
        <td className="px-6 py-2 whitespace-no-wrap">{email}</td>
    </tr>

</table>

      </Modal>

      {/* ... other content */}

    </tbody>
  </table>
</div>
<div className="d-flex justify-content-end">
  <button className="btn btn-danger" style={{marginRight:'100px'}} onClick={printRaffleIDs}>
    Print All Raffle IDs
  </button>
</div>

{/* <Modal /> */}

{/* <h1 className="text-3xl font-bold underline">
    Hello world! <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
  </h1> */}

    </>
    )
}
export default YearlyDraw