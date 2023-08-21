{
  description = "one-percent";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, ... }@inputs:
    (inputs.flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import inputs.nixpkgs { inherit system; };
          nodejs = pkgs.nodejs;
        in
        {
          devShell = pkgs.mkShell rec {
            name = "one-precent";
            buildInputs = with pkgs; [
              nodejs
            ];
          };
        }));
}
