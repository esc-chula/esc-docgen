import toml from "toml";

export function parseToml(tomlString: string): object {
  return toml.parse(tomlString);
}
