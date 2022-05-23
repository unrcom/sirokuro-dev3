import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, FormEvent, FC } from "react";
import { ShieldCheckIcon } from "@heroicons/react/solid";
import { Layout } from "../components/Layout";
import { useMutateAuth } from "../hooks/useMutateAuth";
import { supabase } from "../utils/supabase";

import styles from "./auth.module.css";

const Sukikirai: NextPage = () => {
  const user = supabase.auth.user();
  const { push, pathname } = useRouter();

  return (
    <>
      {user ? (
        <Layout title="投稿">
          {/* <form onSubmit={handleSubmit}>
          <div>
              <input
                type="text"
                required
                className={styles.EmailInput}
                // "my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className={styles.SubmitButton}
              // "flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm text-white"
            >
              ログアウト
            </button>
          </form> */}
        </Layout>
      ) : (
        <Layout title="投稿">
          好き嫌い投稿はログインして利用してください。
        </Layout>
      )}
    </>
  );
};

export default Sukikirai;
