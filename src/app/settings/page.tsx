import Maintenance from "@/components/Maintenance";

const Settings = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold text-center">Settings page</h1>
      <Maintenance />
    </section>
  );
};

export default Settings;
