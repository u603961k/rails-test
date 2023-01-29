import { useRouter } from "next/router";
export default function ColorStation() {
  const router = useRouter();
  console.log(router.query)
  return <h1>{router.query.name}の{router.query.color}カラーです</h1>;
}
