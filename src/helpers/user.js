

export const createUser = (name) => {
  return {
    name: name.toUpperCase(),
    data: {
      monthly_income: 0,
      remaining_balance: 0,
      saving_total: 0,
      expense_total: 0,
      savings: [],
      expenses: []
    }
  }
}