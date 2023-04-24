"use client";

import Image from "next/image";

const List = () => {
  const products = ["바나나", "사과", "멜론"];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="mb-10 text-lg">상품 목록</h2>

      <ul className="flex gap-10 flex-col">
        {products.map((product) => (
          <li
            key={product}
            className="bg-slate-100 rounded-xl text-black px-5 py-3 text-center"
          >
            <div className="w-[100px] h-[100px] relative">
              <Image
                src={`/images/${product}.jpeg`}
                fill
                sizes="100px"
                priority
                alt={product}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
