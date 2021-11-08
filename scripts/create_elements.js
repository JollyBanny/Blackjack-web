function create_card_element(tag, classArray, contentArray) {
  let obj = document.createElement(tag);
  for (class_ of classArray) {
    obj.classList.add(class_);
  }
  for (item of contentArray) {
    obj.append(item);
  }
  return obj;
}
