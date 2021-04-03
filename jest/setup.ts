import "@testing-library/jest-dom/extend-expect";

// The below can be used in a Jest global setup file or similar for your testing set-up
import { loadEnvConfig } from "@next/env";

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

//because jsdom doesn't support getTotalLength
//eslint-disable-next-line
//@ts-ignore
if (!SVGElement.prototype.getTotalLength) {
  //eslint-disable-next-line
  //@ts-ignore
  SVGElement.prototype.getTotalLength = () => 1;
}
