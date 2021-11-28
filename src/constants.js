const CONTRACT_ADDRESS = "0xB335Cb534922Ca37ED1cE878C9F401a6Ea5B5aaF";

const transformCharacterData = characterData => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber()
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
