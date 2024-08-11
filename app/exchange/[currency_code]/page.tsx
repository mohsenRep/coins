export default function Page({ params }: { params: { currency_code: string } }) {
    return <div>My Post: {params.currency_code}</div>
  }