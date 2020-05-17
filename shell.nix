let
  sources = import ./nix/sources.nix;
in
{ pkgs ? import sources.nixpkgs { } }:
let
  nodejs = pkgs.nodejs;
in
pkgs.mkShell {
  name = "one-percent";
  buildInputs = [
    nodejs
    (pkgs.yarn.override { inherit nodejs; })
  ];
}
