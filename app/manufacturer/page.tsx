import ManufacturersCard from "@/components/ManufacturersCard";

const manufacturers = [
  {
    id: "alpha-cnc",
    name: "Alpha CNC Works",
    category: "CNC Machining",
    location: "Pune, India",
  },
  {
    id: "precision-cast",
    name: "Precision Cast Ltd",
    category: "Metal Casting",
    location: "Coimbatore, India",
  },
  {
    id: "rapid-3d",
    name: "Rapid 3D Labs",
    category: "3D Printing",
    location: "Bangalore, India",
  },
];

export default function ManufacturersPage() {
  return (
    <main className="bg-muted min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary">
            Manufacturers
          </h1>
          <p className="mt-3 text-gray-600">
            Discover verified manufacturing partners across categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {manufacturers.map((m) => (
            <ManufacturersCard key={m.id} {...m} />
          ))}
        </div>
      </div>
    </main>
  );
}
