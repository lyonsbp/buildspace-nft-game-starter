const CONTRACT_ADDRESS = "0x1F4D9e28907B94656377A20123a744FcD3c81dE3";

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
