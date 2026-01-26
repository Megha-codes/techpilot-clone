type Props = {
  params: {
    id?: string;
  };
};

export default function ManufacturerProfile({ params }: Props) {
  const title =
    params.id?.replace(/-/g, " ") ?? "Manufacturer";

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary capitalize">
          {title}
        </h1>

        <p className="mt-4 text-gray-600">
          Manufacturer profile details coming soon.
        </p>

        <div className="mt-8 p-6 bg-muted rounded-2xl">
          <p className="text-sm text-gray-500">
            Capabilities, certifications, gallery, and RFQ options will appear here.
          </p>
        </div>
      </div>
    </main>
  );
}
