import React from 'react'
import './Contact.css';

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "75e2f172-f44f-4deb-a1dc-8b70bb013f46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send Us A Message</h3>
            <p>You can reach out to Lens Light Nepal anytime for photography and videography inquiries. Whether it’s for weddings, birthdays, receptions, meetings, documentaries, or any other event, our team is always ready to capture your special moments with creativity and professionalism. Located in Kathmandu, Nepal, we are easily accessible for bookings and collaborations. Feel free to connect with us through phone, email, or social media platforms, and we’ll be happy to discuss your ideas and provide the best solutions for your photography and videography needs.</p>
            <ul>
                <li>prashanamaharjan13@gmail.com</li>
                <li>9843958426</li>
                <li>Kirtipur, Kathmandu</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name'required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number'required/>
                <label>Write Your Messgae Here</label>
                <textarea name="message" rows='6' placeholder='Enter Your Message' />
                <button type='submit' className='btn dark-btn'> Submit Now</button>
            </form>
            <span>
                {result}
            </span>
        </div>
    </div>
  )
}

export default Contact