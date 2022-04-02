export default function AppWrapper(props) {
  return (
    <div className="h-screen w-screen">
      <div className="bg-slate-50 h-full w-full flex justify-center items-center">
        {props.children}
      </div>
    </div>
  );
};
