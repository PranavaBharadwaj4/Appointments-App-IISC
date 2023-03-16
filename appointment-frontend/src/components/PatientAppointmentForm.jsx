import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

const PatientAppointmentForm = () => {
    const { id } = useParams();
    const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const linkFormData = new FormData();
        linkFormData.append("email",email)
        linkFormData.append("name",name)
        linkFormData.append("phone_number",phone)
        linkFormData.append("start_time",time)
        linkFormData.append("date",date)
    try {
      await axios.post(`/patient-book-appointment/${id}/`, linkFormData);
      alert('Settings saved successfully!');
    } catch (err) {
      alert(`Error saving settings: ${err}`);
    }
    
    // ()=>{);
    // return null;}
  };

  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = () => {
        const hash = id;
        
        fetch(`/api/link?hash=${hash}`)
        .then(response => response.json())
        .then(data => {
            const latestLink = data[data.length - 1];
            console.log(latestLink['doctor_name'] , latestLink['hash'], latestLink['expires_at'])
            console.log("max participants: ",latestLink['max_participants'])
            setDoctorName(latestLink['doctor_name']);
            
        })
        .catch(error => console.error(error));
      }


  return (
    <>
    <div className="patient-form-container">
      <div className="form-container">


    <form onSubmit={handleSubmit}>
      <div className="brand">
            {/* <img src="" alt="" /> */}    
            <h3>Doctor {doctorName}'s Appointment Slots</h3>

      </div>
      <div>

      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div>

      <label>Full Name</label>
      <input type="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div>

      <label>Phone</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>

      <div>

      <label>Date</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>

      <div>

      <label>Time</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>

      <button type="submit">Book Appointment</button>
    </form>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default PatientAppointmentForm