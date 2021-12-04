import { typeGifcard } from 'types/types';

const roundAmount = (amount) => {
  return Math.round(amount * 100) / 100;
};

const getDiscountGiftcard = (giftcard, productPrice, gearsPrice) => {
  const { applies_to_gear, giftcard_type, value, available_amount } = giftcard;
  const totalValue = applies_to_gear ? productPrice + gearsPrice : productPrice;
  let totalDiscount = 0;
  if (giftcard_type.id === typeGifcard.porcentage) {
    totalDiscount = (totalValue * value) / 100;
  } else {
    totalDiscount = totalValue < available_amount ? totalValue : available_amount;
  }
  return totalDiscount;
};

const getLessonDiscount = (group_discount, participants, price, applyRound = true) => {
  const TO_PERCENTAGE = 0.01;
  const discountPercentage = 1 - group_discount * TO_PERCENTAGE;

  if (participants === 1 || !group_discount) return 0;

  let totalPriceWithDiscount = Number(price);
  for (let i = 1; i < participants; i++) {
    totalPriceWithDiscount =
      Math.pow(discountPercentage, i) * Number(price) + totalPriceWithDiscount;
  }
  const discount = price * participants - totalPriceWithDiscount;

  return applyRound ? roundAmount(discount) : discount;
};

const getSubTotal = (data, state, priceProductLesson, round = false, isGroup = false) => {
  const productLesson = isGroup
    ? priceProductLesson
    : state.pax_qty > 1
    ? state.pax_qty * priceProductLesson -
      getLessonDiscount(data.discount, state.pax_qty, priceProductLesson)
    : state.pax_qty * priceProductLesson;
  const surfboardPrice = state.surfboard * data.surfboard;
  const wetsuitPrice = state.wetsuit * data.wetsuit;
  const giftcard = data.hasOwnProperty('giftCard')
    ? data.giftCard
    : data.hasOwnProperty('giftcard')
    ? data.giftcard
    : false;
  const discountGiftcard = giftcard
    ? getDiscountGiftcard(giftcard, productLesson, surfboardPrice + wetsuitPrice)
    : 0;
  console.log(priceProductLesson);
  const total = productLesson + surfboardPrice + wetsuitPrice - discountGiftcard;

  return round ? roundAmount(total) : total;
};

const getPriceDefinitiveGroup = (data, pax_qty, round = false, priceTotal = 0, index = 1) => {
  if (index <= pax_qty) {
    if (index == 1)
      return getPriceDefinitiveGroup(data, pax_qty, false, data.priceProductLesson, index + 1);
    const priceCalculate =
      priceTotal == data.priceProductLesson
        ? data.priceProductLesson * (1 - data.discount / 100)
        : data.priceCalculate * (1 - data.discount / 100);
    const dataAux = { ...data, priceCalculate };
    const newPrice =
      priceTotal == data.priceProductLesson
        ? data.priceProductLesson + dataAux.priceCalculate
        : priceTotal + dataAux.priceCalculate;
    return getPriceDefinitiveGroup(dataAux, pax_qty, false, newPrice, index + 1);
  } else return round ? roundAmount(priceTotal) : priceTotal;
};

const getTaxesPrice = (subTotal, taxesPercentage, applyRound = true) => {
  const total = subTotal * (taxesPercentage / 100);
  return applyRound ? roundAmount(total) : total;
};

export const getTotal = (data, state, round = false) => {
  let subTotal = 0;
  if (data.typeLesson == 'Groups') {
    const priceProductLesson = getPriceDefinitiveGroup(data, state.pax_qty, round);
    subTotal = getSubTotal(data, state, data.priceProductLesson, round, true);
  } else {
    subTotal = getSubTotal(data, state, data.priceProductLesson, round);
  }
  return subTotal + getTaxesPrice(subTotal, data.tax, round);
};
