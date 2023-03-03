import React from 'react'
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import { BiEnvelope } from 'react-icons/bi'

export default function Sectioncontact() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        loading: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({ ...formData, loading: true });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.status === 200) {
                setFormData({ ...formData, loading: false });

                console.log("Message sent");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setFormData({ ...formData, loading: false });

                console.log("Error sending message");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="section-contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="tag">contact us</h4>
                        <h1 className='title'>We can't wait to hear from you.</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g, John Doe"
                                    id="name"
                                    className='form-control'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder="johndoe@gmail.com"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            type="number"
                                            placeholder="XXX XXXX XXX"
                                            id="number"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    className='form-control'
                                    placeholder='Please describe what you need...'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required />
                            </div>
                            {
                                formData.loading == false ?
                                <button type="submit" className='contact-btn'>Send Now</button> : 'Loading...'

                            }
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-info">
                            <div className="contact-pair">
                                <HiOutlineLocationMarker className='contact-icon' />
                                <div>
                                    <h1>Location</h1>
                                    <p>Lagos Nigeria<br /> London, United Kingdom.</p>
                                </div>
                            </div>

                            <div className="contact-pair">
                                <HiOutlinePhone className='contact-icon' />
                                <div>
                                    <h1>Make a call</h1>
                                    <p>+(234) 80 34605 723 <br /></p>
                                </div>
                            </div>

                            <div className="contact-pair">
                                <BiEnvelope className='contact-icon' />
                                <div>
                                    <h1>Email</h1>
                                    <p>contact@perfcreg.org<br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
