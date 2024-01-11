export default function BacteriumNode({ hexColorCode, index }) {
  let classStyles = [
    `top-left`,
    `top-center`,
    `top-right`,
    `bottom-left`,
    `bottom-center`,
    `bottom-right`,
  ];
  let classStyle = classStyles[index];
  return (
    <div
      className={`bacterium-node ${classStyle}`}
      style={{
        borderTopColor: hexColorCode,
      }}
    ></div>
  );
}
