type Props = {};

export default function loading({}: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(11)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="col-span-1 h-[22rem] animate-pulse bg-neutral-800 rounded-lg"
            />
          );
        })}
    </div>
  );
}
