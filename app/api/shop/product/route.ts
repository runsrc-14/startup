import { NextRequest, NextResponse } from "next/server";

// import { PRODUCTS } from "../fake";

// import { createRandomProductDetails } from "../crateRandom";

export async function POST(request: NextRequest) {
  try {
    // const body = request.nextUrl.searchParams.get("id");
    const { id } = await request.json();

    console.log("id is : " +id);

    return NextResponse.json({ id: id });

    // const json = await request.json();
    // console.log(json);
    // return NextResponse.json(
    //   Array.from({ length: 1 }, createRandomProductDetails)
    // );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("agentID");

    console.log("query is : " +query);

    return NextResponse.json({ query: query });

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Product`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const products = await response.json();
  // return NextResponse.json(PRODUCTS);
}
