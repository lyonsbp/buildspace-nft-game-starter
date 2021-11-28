const CONTRACT_ADDRESS = "0xf9f82Fcb15310BA0F0dDB7e4F33C8894cf627B05";

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
