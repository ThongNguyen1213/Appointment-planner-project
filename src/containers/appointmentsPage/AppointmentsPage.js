import React,{useState} from "react";

import { TileList } from "../../components/tileList/TileList";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = ({
  appointments,
  contacts, 
  addAppointment
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""); //
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //Add appointment should clear the form
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};
