function emptyValue(object: { [prop: string]: any }) {
  Object.keys(object).forEach((key) => {
    switch (typeof object[key]) {
      case "string":
        object[key] = "";
        return;
      case "boolean":
        object[key] = false;
        return;
      case "number":
        object[key] = 0;
        return;
    }
  });
}

export { emptyValue };
