"use client";
import { useEffect } from "react";

type Props = {};

export default function Page({}: Props) {

  useEffect(() => {
    console.log("page");
  }, []);

  return <div>page</div>;
}
