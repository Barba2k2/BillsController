function onChangeDate() {
  const date = form.date().value;
  form.dateRequiredError().style.display = !date ? "block" : "none";

  toggleSaveButtonDisabled();
}

function onChangeValue() {
  const value = form.value().value;
  form.valueRequiredError().style.display = !value ? "block" : "none";

  form.valueLessOrEqualToZeroError().style.display =
    value <= 0 ? "block" : "none";

  toggleSaveButtonDisabled();
}

function onChangeTransactionType() {
  const transactionType = form.transactionType().value;
  form.transactionTypeRequiredError().style.display = !transactionType
    ? "block"
    : "none";

  toggleSaveButtonDisabled();
}

function toggleSaveButtonDisabled() {
  form.saveButton().disabled = isFormValid();
}

function isFormValid() {
  const date = form.date().value;
  if (!date) {
    return false;
  }

  const value = form.value().value;
  if (!value || value <= 0) {
    return false;
  }

  const transactionType = fomr.transactionType().value;
  if (!transactionType) {
    return false;
  }

  return true;
}

const form = {
  date: () => document.getElementById("date"),
  dateRequiredError: () => document.getElementById("date-required-error"),
  saveButton: () => document.getElementById("save-button"),
  transactionType: () => document.getElementById("transaction-type"),
  transactionTypeRequiredError: () =>
    document.getElementById("transaction-type-required-error"),
  value: () => document.getElementById("value"),
  valueRequiredError: () => document.getElementById("value-required-error"),
  valueLessOrEqualToZeroError: () =>
    document.getElementById("value-less-or-equal-to-zero-error"),
};
