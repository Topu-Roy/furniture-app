import React from "react";

export default function ProductDetails({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
