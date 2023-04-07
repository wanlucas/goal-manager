import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import TextField from '../components/TextField';
import colors from '../constants/colors';
import Section from '../components/Section';
import Form from '../components/Form';
import Box from '../components/Box';

export default function Login() {
  const [formValues, setFormValues] = useState({
    nickname: '',
    password: '',
  });

  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <Section>
      <Card sx={{ width: '70%', maxWidth: '500px' }}>
        <h1 style={{
          color: colors.tertiary ,
          marginBottom: '10px',
        }}>
          Goal Manager
        </h1>

        <Form onSubmit={handleSubmit}>
          <Box sx={{ gap: '20px' }}>
            <TextField 
              value={formValues.nickname}
              onChange={setFormValues}
              name="nickname"
              placeholder="Nickname"
            />

            <TextField 
              value={formValues.password}
              onChange={setFormValues}
              name="password"
              placeholder="Password"
            />

            <Button type='submit'>Login</Button>
          </Box>
        </Form>
      </Card>
    </Section>
  );
}
