import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MdOutlineMail, MdPhone } from 'react-icons/md';

import { IoLocationSharp, IoBasketballOutline, IoLogoLinkedin } from 'react-icons/io5';

import { FaBehance, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function FullWidthTextField() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_337htuu', 'template_ksnh0w6', form.current, {
        publicKey: 'wfevxp5dzzkNA5qrP',
      })

      .then(
        () => {
          console.log('SUCCESS!');
        },

        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Box>
      <div className="Subtitle">
        <h1 style={{ marginTop: '50px', fontSize: '110px' }}>Contact Us</h1>
      </div>

      <div className="Assd">
        <h2 style={{ marginTop: '50px' }}>Contact Us</h2>
      </div>
      <Box className="sub-parent">
        <Box className="Parent">
          <div className="Hello">
            <h1> Just Say Hello</h1>
          </div>
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                fullWidth
                label="Name"
                name="user_name"
                InputProps={{
                  style: {
                    backgroundColor: 'black',
                    color: 'white',
                    marginBottom: '25px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'white',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fec544',
                      border: '2px solid #fec544',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="user_email"
                InputProps={{
                  style: {
                    backgroundColor: 'black',
                    color: 'white',
                    marginBottom: '25px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'white',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fec544',
                      border: '2px solid #fec544',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                InputProps={{
                  style: {
                    backgroundColor: 'black',
                    color: 'white',
                    marginBottom: '25px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'white',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fec544',
                      border: '2px solid #fec544',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                InputProps={{
                  style: {
                    backgroundColor: 'black',
                    color: 'white',
                    marginBottom: '25px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: 'white',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fec544',
                      border: '2px solid #fec544',
                    },
                  },
                }}
              />
              <div className="btn" style={{ marginBottom: '20px' }}>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </Box>
        </Box>

        <Box className="Parents">
          <div className="conatad">
            <div className="wwwd">
              <h1>Contact Info</h1>
            </div>
            <div className="email">
              <div className="ssssss">
                <div className="circlees">
                  <MdOutlineMail className="svg" />
                </div>
                <h2>Email</h2>
              </div>
              <p>bilalqureshi752b@gmail.com</p>
            </div>
            <div className="Contact">
              <div className="ssssss">
                <div className="circlees">
                  <MdPhone className="svg" />
                </div>
                <h2>Contact</h2>
              </div>
              <p>+92 300 429 3894</p>
            </div>
            <div className="Location">
              <div className="ssssss">
                <div className="circlees">
                  <IoLocationSharp className="svg" />
                </div>
                <h2>Location</h2>
              </div>
              <p>Lahore, Pakistan</p>
            </div>
            <div className="visot">
              <h3>Visit my any Social Profile & get Connected</h3>
            </div>
            <div className="band">
              <div className="alltags" style={{ position: 'relative', top: '78px', left: '190px' }}>
                <div className="socialtags" style={{ position: 'relative', left: '-217px' }}>
                  <div className="social-link">
                    <div className="icon-container">
                      <IoBasketballOutline fontSize="30px" />
                    </div>
                    <span className="text">Facebook</span>
                  </div>
                  <div className="social-link">
                    <div className="icon-container">
                      <FaBehance fontSize="30px" />
                    </div>
                    <span className="text">Behance</span>
                  </div>
                  <div className="social-link">
                    <div className="icon-container">
                      <FaTwitter fontSize="30px" />
                    </div>
                    <span className="text">Twitter</span>
                  </div>
                  <div className="social-link">
                    <div className="icon-container">
                      <IoLogoLinkedin fontSize="30px" />
                    </div>
                    <span className="text">LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
