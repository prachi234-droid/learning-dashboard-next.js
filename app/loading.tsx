export default function Loading() {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="h-16 w-1/3 bg-neutral-900 rounded-xl animate-pulse border border-neutral-800" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-[200px] bg-neutral-900 rounded-2xl animate-pulse border border-neutral-800" />
        ))}
      </div>
    </div>
  );
}