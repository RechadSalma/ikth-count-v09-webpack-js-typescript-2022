// @ts-ignore
import Counter from "../components/Counter.ts";

export default function Home(): string {
  return `
    <div>
      <h2>iK I am home page</h2>

      ${Counter.render()}
    </div>
  `;
}
