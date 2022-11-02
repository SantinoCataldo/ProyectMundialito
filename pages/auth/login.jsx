/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css';
import {
  Box,
  Button,
  Grid,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  chakra,
} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs";

const providers = [
  {
    name: "github",
    Icon: BsGithub,
  },
  {
    name: "twitter",
    Icon: BsTwitter,
  },
  {
    name: "google",
    Icon: BsGoogle,
  },
];

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState('');

  if (status === "loading")
    return <Heading>Checking Authentication ...</Heading>;

  if (session) {
    setTimeout(() => {
      push("/");
    }, 5000);
    return <Heading>You are already signed in</Heading>;
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) return false

    signIn('email', { email, redirect: false })
  }

  return (
    <Box className={styles.register}>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login | World Proyect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.register_container}>
      <img src="/img/copa.jpg" alt="" />
      <h2>Login</h2>
        <chakra.form onSubmit={handleSubmit}>
          <formLabel>Email Address</formLabel>
          <Input type='email' onChange={e => setEmail(e.target.value)} />

          <Button type='submit' w='40%' my={5}>
            Login
          </Button>
        </chakra.form>
        <VStack>
          {providers.map(({ name, Icon }) => (
            <Button
              key={name}
              leftIcon={<Icon />}
              onClick={handleOAuthSignIn(name)}
              textTransform="uppercase"
              w="70%"
            >
              Sign in with {name}
            </Button>
          ))}
        </VStack>
      </div>
    </Box>
  );
};

export default Signin;
