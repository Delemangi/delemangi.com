import { BIRTHDAY } from '../constants/birthday';
import { Typography, type TypographyProps } from '@mui/material';
import { useEffect, useState } from 'react';

const getAge = (decimals = 8) => {
  const birthDate = new Date(BIRTHDAY);
  const currentDate = new Date();
  const diff = currentDate.getTime() - birthDate.getTime();
  const age = diff / (1_000 * 60 * 60 * 24 * 365.25);

  return age.toFixed(decimals);
};

type Props = TypographyProps;

const Age = (props: Props) => {
  const [age, setAge] = useState(getAge());

  useEffect(() => {
    const interval = setInterval(() => setAge(getAge()), 1_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography
      fontSize={16}
      {...props}
    >
      {age} years old
    </Typography>
  );
};

export default Age;
