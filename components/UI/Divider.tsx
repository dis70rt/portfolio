export const Divider = () => {
  return (
    <div className="w-full lg:-my-2 py-6 relative flex flex-col items-center justify-center">
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  );
};
