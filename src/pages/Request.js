import {
  Grid,
  Button,
  TextField,
  Container,
  useMediaQuery,
} from '@material-ui/core';
import { CircularProgress, Snackbar } from '@material-ui/core';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Animation from '../components/Animation';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });
  const matches = useMediaQuery('(max-width:610px)');

  const onChange = e => {
    let valid;
    switch (e.target.id) {
      case `email`:
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) setEmailHelper('Invalid email');
        else setEmailHelper('');

        break;
      case `phone`:
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        if (!valid) setPhoneHelper('Invalid phone number');
        else setPhoneHelper('');
        break;
      default:
        break;
    }
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    let templateParams = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'service_np6odac',
        'template_npg61dl',
        templateParams,
        'user_8ujHx3u4P5i6BCQpai9wF'
      )
      .then(
        result => {
          setLoading(false);
          setName(``);
          setEmail(``);
          setPhone(``);
          setSubject(``);
          setMessage(``);
          setAlert({
            open: true,
            message: 'Message sent successfully!',
            backgroundColor: '#4BB543',
          });
        },
        error => {
          setLoading(false);
          setAlert({
            open: true,
            message: 'Something went wrong, please try again!',
            backgroundColor: '#ff3232',
          });
        }
      );
  };

  return (
    <Animation>
      <Container maxWidth='sm'>
        <form onSubmit={onFormSubmit}>
          <Grid container spacing={matches ? 1 : 3} direction='column'>
            <Grid item>
              <TextField
                size={matches ? 'small' : 'medium'}
                fullWidth
                required
                variant='outlined'
                label='Name'
                id='name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                size={matches ? 'small' : 'medium'}
                fullWidth
                required
                variant='outlined'
                label='Email'
                id='email'
                helperText={emailHelper}
                error={emailHelper.length !== 0}
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                size={matches ? 'small' : 'medium'}
                fullWidth
                variant='outlined'
                label='Phone'
                id='phone'
                helperText={phoneHelper}
                error={phoneHelper.length !== 0}
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                size={matches ? 'small' : 'medium'}
                fullWidth
                variant='outlined'
                label='Subject'
                id='subject'
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                size={matches ? 'small' : 'medium'}
                fullWidth
                required
                variant='outlined'
                label='Message'
                multiline
                rows={10}
                id='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container justify='center'>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
                variant='contained'
                type='submit'
                style={{ minWidth: `9rem` }}
              >
                {loading ? <CircularProgress size={30} /> : 'Send Message'}
              </Button>
            </Grid>
            <Snackbar
              open={alert.open}
              message={alert.message}
              ContentProps={{
                style: { backgroundColor: alert.backgroundColor },
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              onClose={() => setAlert({ ...alert, open: false })}
              autoHideDuration={4000}
            />
          </Grid>
        </form>
      </Container>
    </Animation>
  );
};

export default Request;
