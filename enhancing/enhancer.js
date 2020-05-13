module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // return { ...item };
  const { enhancement } = item;

  if (item.enhancement >= 0 && item.enhancement < 20) {
    const newEnhancement = enhancement + 1;
    return { ...item, enhancement: newEnhancement };
  } else if (item.enhancement === 20) {
    return { ...item, enhancement: item.enhancement };
  } else {
    return "enhancement level passed should be less than 20";
  }

} 

  function fail(item) {
  // return { ...item };
  let newDurability = item.durability;
  let newEnhancement = item.enhancement;
  if (item.enhancement >= 0 && item.enhancement < 15) {
    newDurability = item.durability - 5;
    return { ...item, durability: newDurability };
  } else if (item.enhancement >= 15 && item.enhancement <= 20) {
    if (item.enhancement <= 16) {
      newDurability = item.durability - 10;
      return { ...item, durability: newDurability };
    } else {
      newDurability = item.durability - 10;
      newEnhancement = item.enhancement - 1;
      return {
        ...item,
        durability: newDurability,
        enhancement: newEnhancement,
      };
    }
  } else {
    return "please correct item parameters passed in";
  }
}


function repair(item) {
  // return { ...item };
  if (
    item.durability <= 100 &&
    item.durability >= 0 &&
    item.enhancement >= 0 &&
    item.enhancement <= 20
  ) {
    return { ...item, durability: 100 };
  } else {
    return "item with wrong parameters passed";
  }
}

function get(item) {
  return { ...item };
}
