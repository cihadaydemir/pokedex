export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2>{params.id} Detail Page</h2>
    </div>
  );
}
