export const exchange = async (args: string[]): Promise<string> => {
  if (args.length < 2) {
    return `Usage: exchange [amount] [currency_from] [currency_to]
Example: exchange 100 USD CAD
Available flags: USD, CAD, EUR, GBP, JPY`;
  }

  const amount = parseFloat(args[0]);
  const from = args[1].toUpperCase();
  const to = args[2] ? args[2].toUpperCase() : 'CAD';

  if (isNaN(amount)) {
    return "Error: First argument must be a number.";
  }

  try {
    // Using a free public API for exchange rates
    const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await res.json();

    if (data.result !== "success") {
      return `Error: Unsupported currency '${from}'.`;
    }

    const rate = data.rates[to];
    if (!rate) {
      return `Error: Unsupported currency '${to}'.`;
    }

    const converted = (amount * rate).toFixed(2);
    return `📈 LIVE EXCHANGE RATE:
${amount} ${from} = ${converted} ${to}
(Rate: 1 ${from} = ${rate} ${to})`;

  } catch (error) {
    return "Error fetching exchange rates. Please check your network connection.";
  }
};