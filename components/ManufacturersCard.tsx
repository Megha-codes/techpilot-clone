import Link from "next/link";

type Manufacturer = {
  id: string;
  name: string;
  category: string;
  location: string;
};

export default function ManufacturersCard({
  id,
  name,
  category,
  location,
}: Manufacturer) {
  return (
    <Link
      href={`/manufacturers/${id}`}
      className="block bg-white rounded-2xl shadow-soft border border-border p-6 hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold text-primary">{name}</h3>

      <p className="mt-2 text-sm text-gray-600">
        {category}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        📍 {location}
      </p>

      <div className="mt-4 text-secondary text-sm font-medium">
        View profile →
      </div>
    </Link>
  );
}
