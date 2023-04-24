const Cart = () => {
  const products = ["바나나", "사과", "멜론"];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="mb-10 text-lg">장바구니</h2>

      <ul className="flex gap-10 flex-col">
        {products.map((product) => (
          <CartItem product={product} key={product} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;

const CartItem = ({ product }: { product: string }) => {
  return (
    <li
      key={product}
      className="bg-slate-100 rounded-xl text-black px-5 py-3 text-center"
    >
      {product}
    </li>
  );
};
