import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../src/Layout";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

const login = () => {

  const[show, setShow] = useState(false)
  return (
    <Layout>
      <Head>
        <title>NextAuthApp | Log in</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nam
            quis!{" "}
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
            type={`${show ?"text" : "password" }`}
              // type="password"
              name="password"
              id=""
              placeholder="Password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4 cursor-pointer hover:text-[#6366f1]" onClick={() => setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* log in buttons */}
          <div className={styles.button}>
            <button type="submit">Login</button>
          </div>
          <div className={styles.button_custom}>
            <button type="button">
              Sign in with Google
              <Image
                src={"/assets/google.svg"}
                height={20}
                width={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
          <div className={styles.button_custom}>
            <button type="button">
              Sign in with GitHub
              <Image
                src={"/assets/github.svg"}
                height={20}
                width={20}
                className="inline-block ml-2"
              />
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400 ">
          Don't have an account yet?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default login;
