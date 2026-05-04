export const GridShimmer = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#f6f9fc] dark:bg-slate-950 bg-grid-slate-200 dark:bg-grid-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40" />
    </div>
  );
};
