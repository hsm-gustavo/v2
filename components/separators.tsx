export function Separator() {
  return (
    <div className="flex w-full items-center justify-center gap-4 py-8">
      <span className="bg-primary/20 h-5 w-5 rounded-full" />
      <span className="bg-primary/20 h-5 w-5 rounded-full" />
      <span className="bg-primary/20 h-5 w-5 rounded-full" />
    </div>
  );
}

export function LineSeparator() {
  return <hr className="border-primary/20 my-8 w-full border-t" />;
}
